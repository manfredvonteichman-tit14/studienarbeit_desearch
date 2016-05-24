define(['jquery'], function($) {
    return function prnCarousel() {
        
        autoplay_carousal = function(videoContainer, assetUrl, imageUrl, pageName, assetID, autoPlay) {
            
            var sessionContainer = $("#sessionContainer").val();
            var iframeid = '#' + sessionContainer;
            var url = $(iframeid).attr('src');
            if (typeof url != 'undefined' && url.indexOf("&autoplay=1") > -1) {
                url = url.replace("&autoplay=1", "");
            }
            $(iframeid).attr('src', url);
            try {
                jwplayer(sessionContainer).stop();
            } catch (err) {}
            if (assetUrl.indexOf("origin-qps.onstreammedia.com") > -1 || assetUrl.indexOf("stream1.newswire.ca") > -1) {
                var path_to_release = window.location.href.split('#')[0];
                if (imageUrl.indexOf("audio_caro1.gif") > -1) {
                    imageUrl = imageUrl.replace("audio_caro1.gif", "audio_caro2.jpg");
                }
                var videoAsseturl = '';
                var caption = false;
                /*
                #foreach($article in $contentVideoAsset.VideoAssetID)## 
                	
                	var envHost = '${cms.envHost}';
                	$myHashMap.put($article.vAssetID, $article.captionURL)
                	var videoAssetId = '${article.vAssetID}';
                	if(videoAssetId == assetID)
                	{
                	caption = true;
                	videoAsseturl =  'http://'+envHost+'${article.captionURL}';
                	}
                #end##	
                */
                if (caption) {
                    jwplayer(videoContainer).setup({
                        file: assetUrl,
                        sharing: {
                            code: encodeURI("<iframe width='100%' height='616' frameborder='0' src='http://www.prnewswire.com/templates/embed.html?title=" + encodeURIComponent('This is Test Title') + "&image=" + encodeURIComponent(imageUrl) + "&video=" + encodeURIComponent(assetUrl) + "&release=" + encodeURIComponent(path_to_release) + "'></iframe>")
                        },
                        width: "100%",
                        aspectratio: "16:9",
                        image: imageUrl,
                        flashplayer: 'http://content.prnewswire.com/designvideo/jwplayer.flash.swf',
                        html5player: 'http://www.prnewswire.com/includes/jwplayer.html5.js',
                        autostart: autoPlay,
                        stretching: 'uniform',
                        plugins: {
                            'viral-2': {
                                'functions': 'share,embed',
                                'title': 'This is the video title',
                                'description': 'This is the video description'
                            }
                        },
                        tracks: [{
                            file: videoAsseturl,
                            label: 'English',
                            kind: 'captions',
                            default: true
                        }],
                        captions: {
                            back: false
                        }
                    });
                } else {
                    jwplayer(videoContainer).setup({
                        file: assetUrl,
                        sharing: {
                            code: encodeURI("<iframe width='100%' height='616' frameborder='0' src='http://www.prnewswire.com/templates/embed.html?title=" + encodeURIComponent('This is Test Title') + "&image=" + encodeURIComponent(imageUrl) + "&video=" + encodeURIComponent(assetUrl) + "&release=" + encodeURIComponent(path_to_release) + "'></iframe>")
                        },
                        width: "100%",
                        aspectratio: "16:9",
                        image: imageUrl,
                        flashplayer: 'http://content.prnewswire.com/designvideo/jwplayer.flash.swf',
                        html5player: 'http://www.prnewswire.com/includes/jwplayer.html5.js',
                        autostart: autoPlay,
                        stretching: 'uniform',
                        plugins: {
                            'viral-2': {
                                'functions': 'share,embed',
                                'title': 'This is the video title',
                                'description': 'This is the video description'
                            }
                        }
                    });
                }

            } else {
                var playYoutubeVideo = '#' + videoContainer;
                $(playYoutubeVideo)[0].src += "&autoplay=1";

            }
            sessionContainer = $("#sessionContainer").val(videoContainer);

        };

        stopvideos = function(carouselPage, pageName, assetID, imageType) {
            
            var sessionContainer = $("#sessionContainer").val();
            var iframeid = '#' + sessionContainer;
            var url = $(iframeid).attr('src');
            if (typeof url != 'undefined' && url.indexOf("&autoplay=1") > -1) {
                url = url.replace("&autoplay=1", "");
            }
            $(iframeid).attr('src', url);
            try {
                jwplayer(sessionContainer).stop();
            } catch (err) {

            }
            //sessionContainer = $("#sessionContainer").val(videoContainer);
            if (pageName.indexOf("Photo Open") > -1) {
                $('.icon-pinterest').show();
            } else {
                $('.icon-pinterest').hide();
            }
            omniture_corousal(carouselPage, pageName, assetID, imageType);
        }

    }
});
