/**
 * JavaScript VAST-Parser.
 * 
 * @example VAST XML samples: http://www.iab.net/guidelines/508676/digitalvideo/vast/vast_xml_samples
 */

(function (movad, window, document, undefined) {

    if (!movad.VASTParser) {

        /**
         * VAST parser class.
         * 
         * @class movad.VASTParser
         * @constructor
         */
        movad.VASTParser = function () {

        };

        /**
         * VAST error codes.
         * 
         * @property {Object} errorCodes
         */
        movad.VASTParser.errorCodes = {
            EMPTY_VAST: 1, /* Empty VAST with error tracking. */
            XML_PARSE_ERROR: 100, /* XML parsing error. */
            SCHEMA_VALIDATION_ERROR: 101, /* VAST schema validation error. */
            UNSUPPORTED_VAST_VERSION: 102, /* VAST version of response not supported. */
            TRAFFICKING_ERROR: 200, /* Trafficking error. Video player received an ad type that it was not expecting and/or cannot display. */
            RESPONSE_ERROR: 301, /* Timeout of VAST URI provided in Wrapper element, or of VAST URI provided in a subsequent Wrapper element. Includes request errors such as invalid URI, unreachable or request timeout for URI, and security or other exceptions related to requesting a VAST URI. */
            MEDIA_FILE_NOT_FOUND: 401, /* File not found. Unable to find Linear/MediaFile from URI. */
            TIMEOUT_MEDIA_FILE: 402, /* Timeout of MediaFile URI. */
            UNSUPPORTED_MEDIA_FILE: 403, /* Could not find MediaFile that is supported by this video player, based on the attributes of the MediaFile element. */
            UNDEFINED_ERROR: 900 /* Undefined error. */
        };

        /**
         * VAST error names.
         * 
         * @property {Object} errorNames
         */
        movad.VASTParser.errorNames = {};
        for (var errorName in movad.VASTParser.errorCodes) {
            if (movad.VASTParser.errorCodes.hasOwnProperty(errorName)) {
                movad.VASTParser.errorNames[movad.VASTParser.errorCodes[errorName]] = errorName;
            }
        }

        movad.VASTParser.prototype = {
            /**
             * Current error code.
             * 
             * @property {Number} error
             */
            error: 0,
            /**
             * Parse VAST from url. 
             * 
             * @method parseFromURL
             * @param {String} url          VAST url.
             * @param {Function} callback   Callback function.
             * @param {Object} options      Parse options.
             * 
             * @return {Object}
             */
            parseFromURL: function (url, callback, options) {

                movad.Logger.getInstance().log('VASTParser:: parseFromURL', url, options);

                var self = this;

                movad.utils.httpGet({
                    url: url,
                    withCredentials: !options || (options.withCredentials !== false && options.vastCredentials !== false),
                    success: function (xmlHttp) {

                        var vast = {};
                        var vastXml = xmlHttp.responseXML;
                        var extensions;
                        var fallback;

                        if (typeof vastXml !== 'object' || null === vastXml) {

                            movad.Logger.getInstance().warn('VASTParser:: Failed Loading VAST XML from', url);

                            self.error = movad.VASTParser.errorCodes.SCHEMA_VALIDATION_ERROR;
                            callback(vastXml, self.error);

                        } else if (vastXml.getElementsByTagName('Wrapper').length) {

                            movad.Logger.getInstance().log('VASTParser:: VAST Wrapper found');

                            self.parseWrapper(vastXml, callback, options);

                        } else {

                            if (!vastXml.getElementsByTagName('VAST').length) {

                                self.error = movad.VASTParser.errorCodes.SCHEMA_VALIDATION_ERROR;

                                var vast = {
                                    error: self.xmlToJson(vastXml.getElementsByTagName('Error'), false, ['#cdata-section', '#text']),
                                    impression: self.xmlToJson(vastXml.getElementsByTagName('Impression'), false, ['#cdata-section', '#text'])
                                };

                            } else if (!vastXml.getElementsByTagName('Ad').length || (
                                    (extensions = vastXml.getElementsByTagName("Extensions")[0]) &&
                                    (fallback = extensions.getElementsByTagName("Fallback")[0]) &&
                                    fallback.textContent === 'true'
                                    )) {

                                self.error = movad.VASTParser.errorCodes.EMPTY_VAST;

                                var vast = {
                                    error: self.xmlToJson(vastXml.getElementsByTagName('Error'), false, ['#cdata-section', '#text']),
                                    impression: self.xmlToJson(vastXml.getElementsByTagName('Impression'), false, ['#cdata-section', '#text'])
                                };

                            } else if (/* check for valid empty vast */
                                    !vastXml.getElementsByTagName('Ad')[0].getAttribute('id') &&
                                    !vastXml.getElementsByTagName('error').length &&
                                    !vastXml.getElementsByTagName('MediaFile').length &&
                                    (!options.version || options.version === vastXml.getElementsByTagName('VAST')[0].getAttribute('version'))
                                    ) {

                                self.error = movad.VASTParser.errorCodes.EMPTY_VAST;

                                var vast = {
                                    error: self.xmlToJson(vastXml.getElementsByTagName('Error'), false, ['#cdata-section', '#text']),
                                    impression: self.xmlToJson(vastXml.getElementsByTagName('Impression'), false, ['#cdata-section', '#text'])
                                };

                            } else if (vastXml.getElementsByTagName('VideoAdServingTemplate').length) {

                                if (!options.version || options.version === '1.0') {
                                    vast = self.parseVAST1(vastXml);
                                } else {
                                    self.error = movad.VASTParser.errorCodes.UNSUPPORTED_VAST_VERSION;
                                }

                            } else if (vastXml.getElementsByTagName('VAST').length && ["2.0", "2.0.1", "3.0"].indexOf(vastXml.getElementsByTagName('VAST')[0].getAttribute('version')) !== -1) {

                                if (!options.version || ["2.0", "2.0.1", "3.0"].indexOf(options.version) !== -1) {
                                    vast = self.parseVAST2(vastXml);
                                } else {
                                    self.error = movad.VASTParser.errorCodes.UNSUPPORTED_VAST_VERSION;
                                }

                            } else {
                                self.error = movad.VASTParser.errorCodes.SCHEMA_VALIDATION_ERROR;
                            }

                            movad.Logger.getInstance().info('VASTParser:: Parsed VAST', vast);

                            callback(vast, self.error);
                        }
                    },
                    error: function (readyState, status) {

                        self.error = movad.VASTParser.errorCodes.RESPONSE_ERROR;
                        callback(null, self.error);
                    }
                });
            },
            /**
             * Parse VAST wrapper xml. 
             * 
             * @method parseWrapper
             * @param {xmlNode} xml         XML node.
             * @param {Function} callback   Callback function.
             * @param {String} version      Filter by vast version.
             * 
             * @return {Object}
             */
            parseWrapper: function (xml, callback, options) {

                var wrapper = {
                    error: this.xmlToJson(xml.getElementsByTagName('Error'), false, ['#cdata-section', '#text']),
                    impression: this.xmlToJson(xml.getElementsByTagName('Impression'), false, ['#cdata-section', '#text']),
                    tracking: this.xmlToJson(xml.querySelectorAll('TrackingEvents Tracking'), false, ['#cdata-section', '#text'], 'event'),
                    vastAdTagURI: this.xmlToJson(xml.getElementsByTagName('VASTAdTagURI'), false, ['#cdata-section', '#text'])
                };

                var clickTracking = this.xmlToJson(xml.getElementsByTagName('ClickTracking'), false, ['#cdata-section', '#text']);
                if (clickTracking) {
                    wrapper.tracking = wrapper.tracking || {};
                    wrapper.tracking.click = movad.utils.extend(wrapper.tracking.click || [], clickTracking);
                }

                if (wrapper.vastAdTagURI && wrapper.vastAdTagURI.length) {

                    this.parseFromURL(wrapper.vastAdTagURI[0], function (vast, error) {

                        /* combine wrapper and vast */
                        if (vast) {
                            for (var i in vast.playlist) {
                                if (vast.playlist.hasOwnProperty(i)) {
                                    vast.playlist[i].tracking = movad.utils.extend(true, vast.playlist[i].tracking || {}, wrapper.tracking || {});
                                }
                            }
                            vast.impression = movad.utils.extend(vast.impression || {}, wrapper.impression || {});
                            vast.error = movad.utils.extend(vast.error || {}, wrapper.error || {});
                        }
                        callback(vast, error);
                    }, options);
                } else {
                    movad.Logger.getInstance().info('VASTParser:: No VASTAdTagURI found in wrapper');
                }
            },
            /**
             * Parse linear vast 1.0 xml to json.
             * 
             * @method parseVAST1
             * @param {XMLNode} xml
             * 
             * @return {mixed[Object|Boolean]}	Parses vast object on success, false on failure.
             */
            parseVAST1: function (xml) {

                movad.Logger.getInstance().log('VASTParser:: parse vast', xml.getElementsByTagName('VAST')[0].getAttribute('version'));

                var VAST1 = {
                    version: xml.getElementsByTagName('VAST')[0].getAttribute('version'),
                    adid: xml.getElementsByTagName('Ad').length ? xml.getElementsByTagName('Ad')[0].getAttribute('id') : null,
                    error: this.xmlToJson(xml.querySelectorAll('Error URL'), false, ['#cdata-section', '#text']),
                    impression: this.xmlToJson(xml.querySelectorAll('Impression URL'), false, ['#cdata-section', '#text']),
                    playlist: []
                };

                if (!VAST1.adid) {
                    movad.Logger.getInstance().info('VASTParser:: No ad id found', VAST1);
                    this.error = movad.VASTParser.errorCodes.SCHEMA_VALIDATION_ERROR;
                    return VAST1;
                }

                var mediaFileFound = false;
                var unsupportedMediaFileFound = false;

                /* Playlist */
                var videos = xml.querySelectorAll("Video");

                for (var i = 0; i < videos.length; i++) {

                    var video = videos[i];

                    var playlistObject = {
                        id: video.getAttribute('id'),
                        tracking: null,
                        click: null,
                        controls: false,
                        media: null,
                        /* VPAID AdParamaters  */
                        adParameters: this.xmlToJson(xml.getElementsByTagName('AdParameters'), false, ['#cdata-section', '#text'])
                    };

                    /* MediaFiles */
                    var mediaFiles = this.xmlToJson(xml.getElementsByTagName('MediaFile'));
                    if (mediaFiles) {
                        for (var ii = 0; ii < mediaFiles.length; ii++) {
                            var mediaFile = mediaFiles[ii];
                            if (this.validateMediaFile(mediaFile)) {
                                var videoType = mediaFile['@attributes']['type'];
                                var bitrate = mediaFile['@attributes']['bitrate'];
                                var url = mediaFile.URL['#cdata-section'] || mediaFile.URL['#text'];
                                var _71m_fallback = url && url.split('/').pop().indexOf('1_sek.') === 0;
                                if (_71m_fallback) {
                                    movad.Logger.getInstance().warn('VASTParser:: Skip Sevon One Media fallback video', url);
                                } else if (url) {
                                    playlistObject.media = playlistObject.media || {};
                                    playlistObject.media[videoType] = playlistObject.media[videoType] || {};
                                    playlistObject.media[videoType][bitrate] = playlistObject.media[videoType][bitrate] || [];
                                    playlistObject.media[videoType][bitrate].push(url);
//									playlistObject.media[videoType][bitrate].push(movad.utils.extend({url: url}, mediaFile['@attributes']));
                                }
                            } else if (!unsupportedMediaFileFound) {
                                unsupportedMediaFileFound = true;
                            }
                        }
                    }

                    if (!playlistObject.media || Object.keys(playlistObject.media).length == 0) {
                        movad.Logger.getInstance().info('VASTParser:: No media files found');
                        continue;
//						throw "VAST XML must contain at least mp4 and webm mediafiles to work with HTML5";
                    }

                    if (!mediaFileFound) {
                        mediaFileFound = true;
                    }

                    /* Trackings */
                    var trackings = this.xmlToJson(xml.getElementsByTagName('Tracking'));
                    if (trackings) {
                        for (var ii = 0; ii < trackings.length; ii++) {
                            var tracking = trackings[ii];
                            var event = tracking['@attributes']['event'];
                            playlistObject.tracking = playlistObject.tracking || {};
                            playlistObject.tracking[event] = playlistObject.tracking[event] || [];
                            if (movad.utils.isArray(tracking.URL)) {
                                for (var i in tracking.URL) {
                                    if (tracking.URL.hasOwnProperty(i)) {
                                        playlistObject.tracking[event].push(tracking.URL[i]['#cdata-section'] || tracking.URL[i]['#text']);
                                    }
                                }
                            } else if (tracking.URL['#cdata-section'] || tracking.URL['#text']) {
                                playlistObject.tracking[event].push(tracking.URL['#cdata-section'] || tracking.URL['#text']);
                            }
                        }
                    }

                    /* ClickTracking */
                    var clickTrackings = this.xmlToJson(xml.getElementsByTagName('ClickTracking'));
                    if (clickTrackings) {
                        for (var ii = 0; ii < clickTrackings.length; ii++) {
                            var tracking = clickTrackings[ii];
                            var event = 'click';
                            playlistObject.tracking = playlistObject.tracking || {};
                            playlistObject.tracking[event] = playlistObject.tracking[event] || [];
                            if (movad.utils.isArray(tracking.URL)) {
                                for (var i in tracking.URL) {
                                    if (tracking.URL.hasOwnProperty(i)) {
                                        playlistObject.tracking[event].push(tracking.URL[i]['#cdata-section'] || tracking.URL[i]['#text']);
                                    }
                                }
                            } else if (tracking.URL['#cdata-section'] || tracking.URL['#text']) {
                                playlistObject.tracking[event].push(tracking.URL['#cdata-section'] || tracking.URL['#text']);
                            }
                        }
                    }

                    /* ClickThrough */
                    var clickThrough = this.xmlToJson(xml.getElementsByTagName('ClickThrough'));
                    if (clickThrough) {
                        for (var ii = 0; ii < clickThrough.length; ii++) {
                            var tracking = clickThrough[ii];
                            playlistObject.tracking = playlistObject.tracking || {};
                            playlistObject.click = playlistObject.click || [];
                            if (movad.utils.isArray(tracking.URL)) {
                                for (var i in tracking.URL) {
                                    if (tracking.URL.hasOwnProperty(i)) {
                                        playlistObject.click.push(tracking.URL[i]['#cdata-section'] || tracking.URL[i]['#text']);
                                    }
                                }
                            } else if (tracking.URL['#cdata-section'] || tracking.URL['#text']) {
                                playlistObject.click.push(tracking.URL['#cdata-section'] || tracking.URL['#text']);
                            }
                        }
                    }

                    VAST1.playlist.push(playlistObject);
                }

                if (!mediaFileFound && unsupportedMediaFileFound) {
                    this.error = movad.VASTParser.errorCodes.UNSUPPORTED_MEDIA_FILE;
                } else if (!mediaFileFound) {
                    this.error = movad.VASTParser.errorCodes.MEDIA_FILE_NOT_FOUND;
                }

                return VAST1;
            },
            /**
             * Parse linear vast 2.0 xml to json.
             * 
             * @method parseVAST2
             * @param {XMLNode} xml
             * 
             * @return {mixed[Object|Boolean]}	Parses vast object on success, false on failure.
             */
            parseVAST2: function (xml) {

                movad.Logger.getInstance().log('VASTParser:: parse vast', xml.getElementsByTagName('VAST')[0].getAttribute('version'));

                var VAST2 = {
                    version: xml.getElementsByTagName('VAST')[0].getAttribute('version'),
                    adid: xml.getElementsByTagName('Ad').length ? xml.getElementsByTagName('Ad')[0].getAttribute('id') : null,
                    error: this.xmlToJson(xml.getElementsByTagName('Error'), false, ['#cdata-section', '#text']),
                    impression: this.xmlToJson(xml.getElementsByTagName('Impression'), false, ['#cdata-section', '#text']),
                    playlist: []
                };

                if (!VAST2.adid) {
                    VAST2.adid = 'unknown';
                    movad.Logger.getInstance().warn('VASTParser:: No ad id found', VAST2);
//                    this.error = movad.VASTParser.errorCodes.SCHEMA_VALIDATION_ERROR;
//                    return VAST2;
                }

                var mediaFileFound = false;
                var unsupportedMediaFileFound = false;

                /* Playlist */
                var creatives = xml.getElementsByTagName("Creative");
                for (var i = 0; i < creatives.length; i++) {

                    var creative = creatives[i];

                    var playlistObject = {
                        id: creative.getAttribute('id'),
                        tracking: this.xmlToJson(creative.getElementsByTagName('Tracking'), false, ['#cdata-section', '#text'], 'event'),
                        click: this.xmlToJson(creative.getElementsByTagName('ClickThrough'), false, ['#cdata-section', '#text']),
                        controls: false,
                        media: null,
                        /* VPAID AdParamaters  */
                        adParameters: this.xmlToJson(creative.getElementsByTagName('AdParameters'), false, ['#cdata-section', '#text'])
                    };

                    /* MediaFiles */
                    var mediaFiles = this.xmlToJson(creative.getElementsByTagName('MediaFile'));
                    if (mediaFiles) {

                        for (var ii = 0; ii < mediaFiles.length; ii++) {

                            var mediaFile = mediaFiles[ii];

                            var mediaUrl = mediaFile['#cdata-section'] || mediaFile['#text'];

                            /* SevenOne Media fallback video */
                            var is_71m_fallback = mediaUrl && mediaUrl.split('/').pop().indexOf('1_sek.') === 0;
                            if (is_71m_fallback) {
                                movad.Logger.getInstance().warn('VASTParser:: Skip SevonOne Media fallback video', mediaUrl);
                                continue;
                            }

                            if (this.validateMediaFile(mediaFile)) { /* Video Ad */

                                var mediaType = mediaFile['@attributes']['type'];
                                playlistObject.vpaid = mediaFile['@attributes']['apiFramework'] === 'VPAID';
                                playlistObject.media = playlistObject.media || {};
                                playlistObject.media[mediaType] = playlistObject.media[mediaType] || {};

                                if (playlistObject.vpaid) { /* VPAID Ad */

                                    playlistObject.media[mediaType].vpaid = playlistObject.media[mediaType].vpaid || [];
                                    playlistObject.media[mediaType].vpaid.push(mediaUrl);

                                } else {

                                    var bitrate = mediaFile['@attributes']['bitrate'];
                                    playlistObject.media[mediaType][bitrate] = playlistObject.media[mediaType][bitrate] || [];
                                    playlistObject.media[mediaType][bitrate].push(mediaUrl);
                                }
                            } else if (!unsupportedMediaFileFound) {

                                unsupportedMediaFileFound = true;
                            }
                        }
                    }

                    if (!playlistObject.media || Object.keys(playlistObject.media).length == 0) {
                        continue;
//						throw "VAST XML must contain at least mp4 and webm mediafiles to work with HTML5";
                    }

                    if (!mediaFileFound) {
                        mediaFileFound = true;
                    }

                    var clickTracking = this.xmlToJson(creative.getElementsByTagName('ClickTracking'), false, ['#cdata-section', '#text']);
                    if (clickTracking) {
                        playlistObject.tracking = playlistObject.tracking || {};
                        playlistObject.tracking.click = movad.utils.extend(playlistObject.tracking.click || [], clickTracking);
                    }

                    VAST2.playlist.push(playlistObject);
                }

                if (!mediaFileFound && unsupportedMediaFileFound) {
                    movad.Logger.getInstance().warn('VASTParser:: No supported media files found');
                    this.error = movad.VASTParser.errorCodes.UNSUPPORTED_MEDIA_FILE;
                } else if (!mediaFileFound) {
                    movad.Logger.getInstance().warn('VASTParser:: No media files found');
                    this.error = movad.VASTParser.errorCodes.MEDIA_FILE_NOT_FOUND;
                }

                return VAST2;
            },
            /**
             * Validate a media-file by mime-type and max bitrate for detected device.
             * Is AdControle used on the page, the AdControle device detection is used, otherwise the internal device detection is used.
             * 
             * @method validateMediaFile
             * @param {Object} mediaFile	Parsed xml object.
             * 
             * @return {Boolean}
             */
            validateMediaFile: function (mediaFile) {

                if (!mediaFile || !mediaFile['@attributes']) {
                    return false;
                }

                var mediaType = mediaFile['@attributes']['type'];

                /* vpaid */
                if (mediaType === 'application/javascript' && mediaFile['@attributes']['apiFramework'] === 'VPAID') {
                    if (movad.env.iPhone()) {
                        /* VPAID wird auf iphone nicht unterstützt da es nicht mit dem inline video compatible ist! */
                        return false;
                    }
                    return true;
                }

                var supportedMediaFiles = movad.utils.getSupportedFormats();
                if (supportedMediaFiles.indexOf(mediaType) === -1) {
                    return false;
                }

                var bitrate = parseInt(mediaFile['@attributes']['bitrate']);

                if (!bitrate) {
                    movad.Logger.getInstance().warn('Missing bitrate for vieo object', mediaFile);
                    return false;
                }

                var url = mediaFile['#cdata-section'] || mediaFile['#text'];

                if (!url || bitrate <= 0) {
                    return false;
                }

//                if (window.$AC && window.$AC.copyright) {
//
//                    /* AdControle device detection */
//                    switch (movad.env.device()) {
//                        case 'desktop':
//                            return bitrate <= 1600;
//                        case 'tablet':
//                            return bitrate <= 850;
//                        case 'phone':
//                            return bitrate <= 850; /* wähle für den „Phone“-User das MP4-Video, das am nächsten einer Bitrate von 320kbps entspricht. */
//                    }
//
//                } else {
//
//                    /* Internal device detection */
//                    switch (movad.env.device()) {
//                        case 'desktop':
//                            return bitrate <= 1500;
//                        case 'tablet':
//                            return bitrate <= 750;
//                        case 'phone':
//                            return bitrate <= 750; /* wähle für den „Phone“-User das MP4-Video, das am nächsten einer Bitrate von 320kbps entspricht. */
//                    }
//
//                }
//
//                return false;
                return true;
            },
            /**
             * Parse xml to json.
             * 
             * @method xmlToJson
             * @param {mixed[XMLNode|Array]} xml	Xml node or array of xml nodes.
             * @param {Boolean} attributes			Parse node attributes.
             * @param {String} nodeType				Filter by nodeType.
             * @param {String} attribut				Key for the result object to store the filtered nodeType. nodeType musst be set and attributes must be set to false.
             * 
             * @return {mixed[Object|Array]}		Object of parsed xml node or array of parsed xml nodes.
             */
            xmlToJson: function (xml, attributes, nodeType, attribut) {

                var result;

                if (xml && !xml.nodeType && movad.utils.isArraylike(xml)) {

                    var arr = [];

                    for (var i = 0; i < xml.length; i++) {
                        result = this.xmlToJson(xml[i], attributes, nodeType, attribut);
                        if (result) {
                            arr.push(result);
                        }
                    }

                    if (attribut !== undefined && arr.length) {
                        arr.unshift(true);
                        arr = movad.utils.extend.apply(movad.utils, arr);
                    }

                    return arr;
                }

                // Create the return object
                var obj = {}, text;

                if (xml.nodeType == 1) { // Element
                    // do attributes
                    if (attributes !== false && xml.attributes.length > 0) {
                        obj["@attributes"] = {};
                        for (var j = 0; j < xml.attributes.length; j++) {
                            var attr = xml.attributes.item(j);
                            obj["@attributes"][attr.nodeName] = movad.utils.parseStringValue(attr.value);
                        }
                    }
                } else if (xml.nodeValue) {
                    text = xml.nodeValue.trim();
                    if (xml.nodeType === 3 && text) { // Text
                        obj = text;
                    } else if (xml.nodeType === 4 && text) { // CDATASection
                        obj = text;
                    } else {
                        obj = null;
                    }
                }

                // do children
                if (xml.hasChildNodes && xml.hasChildNodes()) {

                    for (var i = 0; i < xml.childNodes.length; i++) {

                        var item = xml.childNodes.item(i);
                        var nodeName = item.nodeName;

                        if (typeof (obj[nodeName]) === "undefined") {
                            if (nodeType !== undefined) {
//                                if (nodeType === nodeName) {
                                !Array.isArray(nodeType) && (nodeType = [nodeType]);
                                if (nodeType.indexOf(nodeName) !== -1) {

                                    nodeType.every(function (nodeType) {

                                        if (attributes === false) {
                                            result = this.xmlToJson(item, attributes, nodeType, attribut);
                                            if (result) {
                                                if (attribut !== undefined) {
                                                    var attr = xml.attributes.getNamedItem(attribut);
                                                    if (attr) {
                                                        if (!obj[attr.value]) {
                                                            obj[attr.value] = [];
                                                        }
                                                        obj[attr.value].push(result);
                                                    }
                                                } else {
                                                    obj = result;
                                                }
                                                return false;
                                            }
                                        } else {
                                            result = this.xmlToJson(item, attributes, nodeType, attribut);
                                            obj[nodeName] = result;
                                            if (result) {
                                                return false;
                                            }
                                        }
                                    }.bind(this));
                                }
                            } else {
                                result = this.xmlToJson(item, attributes, nodeType, attribut);
                                if (result) {
                                    obj[nodeName] = result;
                                }
                            }
                        } else {
                            result = this.xmlToJson(item, attributes, nodeType, attribut);
                            if (result) {
                                if (typeof (obj[nodeName].push) === "undefined") {
                                    var old = obj[nodeName];
                                    obj[nodeName] = [];
                                    obj[nodeName].push(old);
                                }
                                obj[nodeName].push(result);
                            }
                        }
                    }
                }

                return !obj || (movad.utils.isObject(obj) && !movad.utils.isObject(obj, true)) ? null : obj;
            }
        };

    }

})(window.movad || (window.movad = {}), window, document);