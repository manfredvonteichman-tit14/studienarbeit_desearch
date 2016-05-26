/**
 * unserialize a serialize String (bei Changes)
 * @param data
 * @returns {*}
 */

function unserialize(data) {

    //   example 1: unserialize('a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}');
    //   returns 1: ['Kevin', 'van', 'Zonneveld']
    //   example 2: unserialize('a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}');
    //   returns 2: {firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'}

    var that = this,
        utf8Overhead = function(chr) {
            // http://phpjs.org/functions/unserialize:571#comment_95906
            var code = chr.charCodeAt(0);
            if (code < 0x0080) {
                return 0;
            }
            if (code < 0x0800) {
                return 1;
            }
            return 2;
        };
    error = function(type, msg, filename, line) {
        throw new that.window[type](msg, filename, line);
    };
    read_until = function(data, offset, stopchr) {
        var i = 2,
            buf = [],
            chr = data.slice(offset, offset + 1);

        while (chr != stopchr) {
            if ((i + offset) > data.length) {
                error('Error', 'Invalid');
            }
            buf.push(chr);
            chr = data.slice(offset + (i - 1), offset + i);
            i += 1;
        }
        return [buf.length, buf.join('')];
    };
    read_chrs = function(data, offset, length) {
        var i, chr, buf;

        buf = [];
        for (i = 0; i < length; i++) {
            chr = data.slice(offset + (i - 1), offset + i);
            buf.push(chr);
            length -= utf8Overhead(chr);
        }
        return [buf.length, buf.join('')];
    };
    _unserialize = function(data, offset) {
        var dtype, dataoffset, keyandchrs, keys, contig,
            length, array, readdata, readData, ccount,
            stringlength, i, key, kprops, kchrs, vprops,
            vchrs, value, chrs = 0,
            typeconvert = function(x) {
                return x;
            };

        if (!offset) {
            offset = 0;
        }


        dtype = (data.slice(offset, offset + 1))
            .toLowerCase();


        dataoffset = offset + 2;

        switch (dtype) {
            case 'i':
                typeconvert = function(x) {
                    return parseInt(x, 10);
                };
                readData = read_until(data, dataoffset, ';');
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 1;
                break;

            case 'b':
                typeconvert = function(x) {
                    return parseInt(x, 10) !== 0;
                };
                readData = read_until(data, dataoffset, ';');
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 1;
                break;
            case 'd':
                typeconvert = function(x) {
                    return parseFloat(x);
                };
                readData = read_until(data, dataoffset, ';');
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 1;
                break;
            case 'n':
                readdata = null;
                break;
            case 's':
                ccount = read_until(data, dataoffset, ':');
                chrs = ccount[0];
                stringlength = ccount[1];
                dataoffset += chrs + 2;

                readData = read_chrs(data, dataoffset + 1, parseInt(stringlength, 10));
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 2;
                if (chrs != parseInt(stringlength, 10) && chrs != readdata.length) {
                    //console.log(readdata);
                    error('SyntaxError', 'String length mismatch');
                }
                break;
            case 'a':
                readdata = {};

                keyandchrs = read_until(data, dataoffset, ':');
                chrs = keyandchrs[0];
                keys = keyandchrs[1];
                dataoffset += chrs + 2;

                length = parseInt(keys, 10);
                contig = true;

                for (i = 0; i < length; i++) {
                    kprops = _unserialize(data, dataoffset);
                    kchrs = kprops[1];
                    key = kprops[2];
                    dataoffset += kchrs;

                    vprops = _unserialize(data, dataoffset);
                    vchrs = vprops[1];
                    value = vprops[2];
                    dataoffset += vchrs;

                    if (key !== i)
                        contig = false;

                    readdata[key] = value;
                }

                if (contig) {
                    array = new Array(length);
                    for (i = 0; i < length; i++)
                        array[i] = readdata[i];
                    readdata = array;
                }

                dataoffset += 1;
                break;
            default:
               // console.log(data );
                //console.log((data.slice(offset - 20, offset + 20)));

                //error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype);
                break;
        }
        return [dtype, dataoffset - offset, typeconvert(readdata)];
    };

    return _unserialize((data + ''), 0)[2];
}



function compileTmpl(templateStr, data)
{
    var tmpl = ''+templateStr;
    var tokens = tmpl.match(/\{(.[^{]+)\}/ig);
    for(var i=0; i<tokens.length; i++) {
        var t = tokens[i].replace(/([{}\s]+)/ig, '');
        if(t && t.length > 0) {
            var propChain = t.split('.');
            var val = data;
            for(var p=0; p<propChain.length; p++) {
                if(val && val.hasOwnProperty(propChain[p])) {
                    val = val[propChain[p]];
                }
            }
            if(val.length > -1) {
                tmpl = tmpl.replace(new RegExp('{[ ]*'+t+'[ ]*}', 'ig'), val);
            }else{
                tmpl = tmpl.replace("",val);
            }
        }
    }
    return tmpl;
}


function format ( d ) {

    d.statusicon = d.status == "1" ? '<span class="glyphicon glyphicon-ok"></span>' : '<span class="glyphicon glyphicon-remove"></span>' ;
    d.mdkicon = d.mdk == "1" ? '<span class="glyphicon glyphicon-ok"></span>' : '<span class="glyphicon glyphicon-remove"></span>' ;
    if(d.image){
        d.imageResult = '<img width="300px" src="/uploads/tx_bafzainstitutionen/institute/'+d.image+'" alt="'+d.name+'" />';
    }else{
        d.imageResult = '<i>Kein Bild vorhanden</i>';
    }


    $.get('/typo3conf/ext/bafza_institutionen/Resources/Public/Templates/PreviewInit.html', function(data) {
        //console.log(d);
        var compiledTmpl = compileTmpl(data, {d: d});
        $("#data"+d.uid).html(compiledTmpl);

    });
    return '<div id="data'+d.uid+'"></div>';
}


function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

(function addXhrProgressEvent($) {
    var originalXhr = $.ajaxSettings.xhr;
    $.ajaxSetup({
        progress: function() {  },
        xhr: function() {
            var req = originalXhr(), that = this;
            if (req) {
                if (typeof req.addEventListener == "function") {
                    req.addEventListener("progress", function(evt) {
                        that.progress(evt);
                    },false);
                }
            }
            return req;
        }
    });
})(jQuery);

//TODO COOKIE HANDLING ÜBER PHP (VIEWHELPER)
function saveDetailCookie($uid){
    setCookie('wegweiserdemenz-detail', $uid, 1);
}

function saveInstitutCookie(uid){
    $cookie = new Array();
    $cookie = (getCookie('wegweiserdemenz-watchlist').split(","));
    $cookie = $cookie.filter(function(e){
        return (e===undefined||e===null||e==='')?false:~e;
    });

    /*//IE FIX START
    if (!Array.prototype.indexOf)
    {
        Array.prototype.indexOf = function(elt *//*, from*//*)
        {
            var len = this.length >>> 0;

            var from = Number(arguments[1]) || 0;
            from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++)
            {
                if (from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }
    //IE FIX ENDE*/

    if($cookie.indexOf(uid) > -1){
        var index = $cookie.indexOf(uid);
        $cookie.splice(index, 1);
        if(($cookie.length < 1)){
            $('#link-watchlist').hide();
        }
        $('#remember-icon-'+uid+' span.glyphicon').addClass('glyphicon-floppy-saved');
        $('#remember-icon-'+uid+' span.glyphicon').removeClass('glyphicon-floppy-remove');
        $('#remember-icon-'+uid+' span#text-save-icon').html('Institut merken');


        $('span.count').html('('+$cookie.length+')')

        if($('.watchlist').length){

            $('.row-'+uid).hide();
        }
    }else{

        $('#link-watchlist').show();

        $cookie.push(uid);
        $('#remember-icon-'+uid+' span.glyphicon').addClass('glyphicon-floppy-remove');
        $('#remember-icon-'+uid+' span.glyphicon').removeClass('glyphicon-floppy-saved');
        $('#remember-icon-'+uid+' span#text-save-icon').html('Institut vom Merkzettel entfernen');

        $('span.count').html('('+$cookie.length+')')

    }

    setCookie('wegweiserdemenz-watchlist', $cookie, 1);

}
function getInstitutCookie(){
    $cookie = new Array();
    $cookie = getCookie('wegweiserdemenz-watchlist').split(',');
    return $cookie;
}
function getDetailCookie(){
    $cookie = new Array();
    $cookie = getCookie('wegweiserdemenz-detail').split(',');
    return $cookie;
}


/**
 * Setzen ders richtigen Zeitformats
 * @param UNIX_timestamp
 * @returns {*}
 */
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp*1000);
    var time = a.format("d.m.Y H:i:s");
    return time;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires +" ;path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
/**
 * Setzen der Marker Layouts
 * @returns {{styles: {textColor: string, url: string, height: number, width: number}[]}}
 */
function setMarkerOptions(){
    var clusterStyles = [
        {
            textColor: 'white',
            url: '/typo3conf/ext/bafza_institutionen/Resources/Public/Icons/home_32.png',
            height: 42,
            width: 32
        },
        {
            textColor: 'white',
            url: '/typo3conf/ext/bafza_institutionen/Resources/Public/Icons/home_64.png',
            height: 74,
            width: 64
        },
        {
            textColor: 'white',
            url: '/typo3conf/ext/bafza_institutionen/Resources/Public/Icons/home_128.png',
            height: 138,
            width: 128
        }
    ];

    return mcOptions = {

        styles: clusterStyles

    };
}
/**
 * ajax function für die Kartenansicht
 * @param cords
 * @param args
 */
function ajaxCall(cords, args){
    console.log(args);
    console.log(cords);
     if(cords){
        $.ajax({
            async: 'true',
            url: 'index.php',
            data: {
                eID: "ajaxDispatcher",
                request: {
                    pluginName: 'institutionensuche',
                    controller: 'Institution',
                    action: 'ajaxGetForMap',
                    arguments: {
                        'city': args['city'],
                        'umkreis': args['umkreis'],
                        'cords': {
                            'lat': cords['lat'],
                            'lng': cords['lng']
                        }

                    }
                }
            },
            dataType: "json",
            success: function (result) {
				
                var bounds = new google.maps.LatLngBounds();
                options = setMarkerOptions();
                zoom = parseInt(12-(args['umkreis']/10));

                map = new google.maps.Map(
                    document.getElementById("institution-map"), {
                        center: new google.maps.LatLng(cords['lat'],cords['lng']),
                        disableDefaultUI:false
                       // zoom : zoom
                    }
                );
                var image = '/typo3conf/ext/bafza_institutionen/Resources/Public/Icons/home_32.png';
                var markers = new Array();
                result.data.forEach(function(init) {
                    if (init.lat && init.lng && init.name) {
                        var point = new google.maps.LatLng(parseFloat(init.lat), init.lng);
                        //</f:format.cdata>
                        var marker = new google.maps.Marker({
                            position: point,
                            map: map,
                            title: init.name,
                            icon: image,
                            animation: google.maps.Animation.DROP
                        });
                        var link = '<a href="hilfe/adressdatenbank/service/Institution/details/anzeigen/'+init.name.split(' ').join('-')+'.html">Details</a>';
                        var infowindow = new google.maps.InfoWindow({
                            content: init.name +
                                '<br>'+ link +
                                '<f:link.action></f:link.action>'
                        });
                        google.maps.event.addListener(marker, 'click', function() {
                            infowindow.open(map,marker);
                        });
                        bounds.extend(marker.position);
                        markers.push(marker);
                    }

                });
                var markerCluster = new MarkerClusterer(map, markers, options);


                map.fitBounds(bounds);

            },
            error: function (error) {
                //console.log(error.responseText);
            }
        });
    }
}

/**
 * function überprüft in der DB ob ein Institut zweimal eingetragen ist.
 */
function checkDuplette(ajaxCheckUrl){
    //<f:format.cdata>
   // ajaxCheckUrl = "{f:uri.action(action:'ajaxCheckDublette', pageType:'99')}";
    //</f:format.cdata>
    $.ajax({
        type: "POST",
        url: ajaxCheckUrl,
        data: {
            request:{
                type: '71'
            }
        }
    }).done(function( msg ) {
        //console.log("DONE");
        //console.log(msg.objekte);
    }).error(function( msg ) {
        //console.log("ERROR");
        //console.log(msg);

    });
}

//ForntendList
function itemsPerPage(item){

    $(item).bind('change', function(){
        $('form#itemPerPage').submit()
    });

    }


$(document).ready(function(){
	
    $('.nojs').removeClass('nojs');
	var acc = $('.ui-accordion-header-icon');
	
	if(acc){
		acc.bind('click', function(){
			$accordobject = $('.collapse.in').parent().find('div.acc');
			$($accordobject).find('.glyphicon-plus').addClass('glyphicon-minus').removeClass('glyphicon-plus');
		});
	}
    $('.dataTable').bind( 'draw.dt', function () {
        $('.createlink').bind('click mouseenter', function () {
            uid = $(this).attr('id');
            link = $(this).attr('href');
            newlink = link.replace('UID', uid);
            $(this).attr('href', newlink);
        });

    });

    //Zeigt die Kategorien in der Seitbar beim Focus
    $('#institution-search input , #institution-search select').focus(function(){
        $('#checkboxes').show();
        $('#showFoldOuts').addClass('open');
        $('#showFoldOuts span.glyphicon-plus').addClass('glyphicon-minus');
        $('#showFoldOuts span.glyphicon-plus').removeClass('glyphicon-plus');
    });
    $('#showFoldOuts').click(function(){
        if($(this).hasClass('open'))
        {
            $('#checkboxes').hide();
            $(this).removeClass('open');
            $('#showFoldOuts span.glyphicon-minus').addClass('glyphicon-plus');
            $('#showFoldOuts span.glyphicon-minus').removeClass('glyphicon-minus');


        }else{
            $('#checkboxes').show();
            $(this).addClass('open');
            $('#showFoldOuts span.glyphicon-plus').addClass('glyphicon-minus');
            $('#showFoldOuts span.glyphicon-plus').removeClass('glyphicon-plus');
        }

    });


    $('#checkAll').change(function(){
       if($(this).is(':checked')){
           $('.checkrow.list').each(function(){
               $(this).find(".checkbox").prop('checked', true);
           });
       }else{
           $('.checkrow.list').each(function(){
               $(this).find(".checkbox").prop('checked', false);
           });
       }
    });

    city = $('#mapcity').val();
      if(city){
          umkreis = $('#mapumkreis').val();
          mapGetCoords(city, 'ajaxCall', {'city': city, 'umkreis': umkreis});
      }

    $('form#mapGetCoords').submit(function(data){
		//console.log(data);
        city = $('#mapcity').val();
        umkreis = $('#mapumkreis').val();
        mapGetCoords(city, 'ajaxCall', {'city': city, 'umkreis': umkreis});
    });

});

var sendForm = false;

/**
 * kann nach dem erhalt der coordinaten aufgerufen werden, sendet das Formular ab
 *
 * @param args
 * @param formname
 */
var submitForm = function(args, formname ){

    $(formname +' #lat').val(args.lat);
    $(formname +' #lng').val(args.lng);
    sendForm = true;
    button = formname + ' button[type=submit]' ;
    inputT = formname + " input[type=submit]";

    $(button).click();
    $(inputT).click();
}

/**
 * mapGetCoords (Adresse, welche funktion wird darauf aufgerufen, argummente die mit an die folgende Funktion übergeben werden)
 * @param address
 * @param callback
 * @param args
 */
function  mapGetCoords(address, callback, args){

	
    var geocoder = new google.maps.Geocoder();
    address += " germany";
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {

            cordsString = results[0].geometry.location.toString();
            cordsString = cordsString.slice(1, cordsString.length-1);
            cordArray = cordsString.split(',');
            lat =  cordArray[0];
            lng = cordArray[1];

            var  cords = new Array();
            cords['lat'] = cordArray[0];
            cords['lng'] = cordArray[1];
            if(callback){

                this[callback](cords, args);

            }else{

                return {
                    "lat":cordArray[0],
                    "lng":cordArray[1]

                }
            }

        }else{
            if(callback){

                this[callback](cords, args);

            }
        }
        return

    });

}
/**
 * sidebar - anfrage nach lat und lng bei der google api
 */
var sidebarFilterObject = function(){

    $('#institution-fastsearch').bind('click enter', function(event){
        $('.institut-foldout').toggle();
    });

    //Hole Koordianten bei einer Filtersuche
    $('form#institution-search').bind('submit', function(event){
        city = $('input#suchfilter-city').val();
        if(city && !sendForm){
            event.preventDefault();
            coords = mapGetCoords(city, 'submitForm', 'form#institution-search');


        }
    });
    $('form#institution-search button[type=submit]').click(function(event) {
        city = $('input#suchfilter-city').val();
        if(city && !sendForm){
            event.preventDefault();
            coords = mapGetCoords(city, 'submitForm', 'form#institution-search');

        }
    });

}

/**
 * backend - anfrage nach lat und lng bei der google api
 */
var backendNewObject = function(){

    $('form#editInit').bind('submit', function(event){
        $address = ($('#zip').val()) +" "+  ($('#city').val()) +" "+ ($('#address').val());

        if($address && !sendForm){
            event.preventDefault();
            coords = mapGetCoords($address, 'submitForm', 'form#editInit');
        }
    });

    $('form#backendNewForm').bind('submit', function(event){
        $address = ($('#zip').val()) +" "+  ($('#city').val()) +" "+ ($('#address').val());

        if($address && !sendForm){
            event.preventDefault();
            coords = mapGetCoords($address, 'submitForm', 'form#backendNewForm');
        }
    });
    $('form#backendNewForm button[type=submit]').click(function(event) {
        $address = ($('#zip').val()) +" "+ ($('#city').val()) +" "+ ($('#address').val());

        if($address && !sendForm){
            event.preventDefault();
            coords = mapGetCoords($address, 'submitForm', 'form#backendNewForm');
        }
    });
}

var nullreturn = function(args, formname){
    $(formname +' #lat').val(args.lat);
    $(formname +' #lng').val(args.lng);

    return null;
}
/**
 * frontend newObject - anfrage nach lat und lng bei der google api
 */
var frontendNewObject = function(){
    $('form#form-new-init #city').bind('focusout', function(){

        $address = ($('#zip').val()) +" "+  ($('#city').val()) +" "+ ($('#address').val());
        if($address){
           // event.preventDefault();
            coords = mapGetCoords($address, 'nullreturn', 'form#form-new-init');
        }
    });
    $('form#form-new-init button[type=submit]').click(function(event) {
        $address = ($('#zip').val()) +" "+ ($('#city').val()) +" "+ ($('#address').val());
        if($address && !sendForm){
            event.preventDefault();
            coords = mapGetCoords($address, 'submitForm', 'form#form-new-init');

        }
    });
}


/**
 * frontend list - anfrage nach lat und lng bei der google api
 */
var InstitutionSearchListForm = function(){
  $('form#InstitutionSearchListForm').bind('submit', function(event){

        $address = ($('#zip_list').val()) +" "+  ($('#suchfilter-city').val());

        if($address && !sendForm){
            event.preventDefault();
            coords = mapGetCoords($address, 'submitForm', 'form#InstitutionSearchListForm');

        }
    });
    $('form#InstitutionSearchListForm button[type=submit]').click(function(event) {
        $address = ($('#zip_list').val()) +" "+ ($('#suchfilter-city').val());
        if($address && !sendForm){
            event.preventDefault();
            coords = mapGetCoords($address, 'submitForm', 'form#InstitutionSearchListForm');
        }
    });
}


/**
 * frontend editObject- anfrage nach lat und lng bei der google api
 */
var frontendEditObject = function(){
    $('form#editInstitut').bind('submit', function(event){
        $address = ($('#zip').val()) +" "+  ($('#city').val()) +" "+ ($('#address').val());
        if($address && !sendForm){
            event.preventDefault();
            coords = mapGetCoords($address, 'submitForm', 'form#editInstitut');
        }
    });
    $('form#editInstitut button[type=submit]').click(function(event) {
        $address = ($('#zip').val()) +" "+ ($('#city').val()) +" "+ ($('#address').val());
        if($address && !sendForm){
            event.preventDefault();
            coords = mapGetCoords($address, 'submitForm', 'form#editInstitut');
        }
    });
}


