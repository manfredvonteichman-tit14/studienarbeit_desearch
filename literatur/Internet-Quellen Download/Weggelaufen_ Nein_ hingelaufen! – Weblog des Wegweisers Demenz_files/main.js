(function ( $ ) {

    // Checks for IE8 and lower
    var ie8 = false;
    if (document.all && !document.addEventListener) {
        ie8 = true;
    }

    var setZoom = function( zoom ) {
        document.body.style.WebkitTransform = 'scale(' + zoom + ')';
        document.body.style.msTransform =  'scale(' + zoom + ')';
        document.body.style.MozTransform = 'scale(' + zoom + ')';
        document.body.style.transform = 'scale(' + zoom + ')';
        document.body.style.WebkitTransformOrigin = 'center top';
        document.body.style.msTransformOrigin = 'center top';
        document.body.style.MozTransformOrigin = 'center top';
        document.body.style.transformOrigin = 'center top';

        if (ie8) {
            document.body.style.zoom = zoom;
        }

        if (typeof(Storage) !== "undefined") {
            sessionStorage.setItem('zoomlevel', zoom);
        }

        var plusLink = $('a.link-increase-size');
        var minusLink = $('a.link-decrease-size');

        switch (zoom) {
            case '1':
                plusLink.removeClass('disabled');
                minusLink.addClass('disabled');
                break;
            case '1.3':
                plusLink.addClass('disabled');
                minusLink.removeClass('disabled');
                break;
            default:
                plusLink.removeClass('disabled');
                minusLink.removeClass('disabled');
                break;
        }
    };

    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.getItem('zoomlevel') !== 'null' && sessionStorage.getItem('zoomlevel') !== null) {
            setZoom(sessionStorage.getItem('zoomlevel'));
        }
        else
        {
            setZoom('1');
        }
    }

    $(document).ready( function () {
        $('.noJS').removeClass('noJS');


        $('a.link-increase-size').on('click focus',  function ( event ) {
            console.log(event);
            event.preventDefault();
            var zoom = '1';
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.getItem('zoomlevel') !== 'null' && sessionStorage.getItem('zoomlevel') !== null) {
                    zoom = sessionStorage.getItem('zoomlevel');
                } else {
                    zoom = '1';
                }

                switch (zoom) {
                    case '1':
                        zoom = '1.15';
                        break;
                    case '1.15':
                        zoom = '1.3';
                        break;
                    default:
                        break;
                }
            }

            setZoom(zoom);
        });

        $('a.link-decrease-size').on('click focus', function ( event ) {
            event.preventDefault();
            var zoom = '1';
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.getItem('zoomlevel')) {
                    zoom = sessionStorage.getItem('zoomlevel');
                } else {
                    zoom = '1';
                }

                switch (zoom) {
                    case '1.3':
                        zoom = '1.15';
                        break;
                    case '1.15':
                        zoom = '1';
                        break;
                    default:
                        break;
                }
            }

            setZoom(zoom);
        });
        // SET recommendForm

        if($('#recommendForm').length){
            var url = window.location.href.split('?')[1].split('=')[1];

            url = decodeURIComponent(url.replace(/\+/g,  " "));
            $('#recommendForm input[name="tx_form[url]"]').val(url);
        }
    });

    $('#navigation li').on('mousedown focus', function(event){

        if(event.type == "mousedown"){
            $('#navigation li').off('focus');
        }
        var menu = $(this).attr('data-target');
        var visible = $('#'+menu+' ul').is(':visible');

        $('.navigation-overlay ul').hide();

        var subnav = $(this).find('.navigation-overlay ul');
        var height = 0;
        if(!visible){
             height = subnav.outerHeight();
            subnav.show();
        }
        $('.col-left').css('top', height ? height : 0);
        $('.col').css('top', height ? height : 0);
        $('.footer').css('top', height ? height : 0);
    });

    var carouselNavItems = $('#carousel-navigation').find('li.itembox');
    var currItem = Math.floor((Math.random() * (carouselNavItems.length-1)));
    $(carouselNavItems[currItem]).addClass('current');
    var carouselItems = $('.carousel-inner').find('div.item');
    $(carouselItems[currItem]).addClass('active');

    $('#carousel-navigation li.itembox').on('mousedown focus', function(event) {

        if (event.type == "mousedown") {
            $('#carousel-navigation li.itembox').off('focus');
        }
        $('#carousel-navigation li.itembox.current').removeClass('current');
        $(this).addClass('current');
    });
/**
* Start Forum
 * Register
 */
    $('#input-job').hide();
    $('#select-job').on('change', function(){
        console.log($(this));
        var index = $(this)[0].selectedIndex;
        if(index == 2){
            $('#input-job').show();
            $(this).attr('name', 'tx_mmforum_pi2[reg][tx_mmforum_occ][]');
            $('#input-job').attr('name', 'tx_mmforum_pi2[reg][tx_mmforum_occ][]');
        }else if(index == 9){
            $('#input-job').show();
            $(this).attr('name', 'temp');
            $('#input-job').attr('name', 'tx_mmforum_pi2[reg][tx_mmforum_occ]');
        }else{
            $(this).attr('name', 'tx_mmforum_pi2[reg][tx_mmforum_occ]');
            $('#input-job').attr('name', 'tx_mmforum_pi2[reg][tx_mmforum_occ_2]');
            $('#input-job').hide();
        }
    });
    $('#select-job-fach').on('change', function(){
        var index = $(this)[0].selectedIndex;
        if(index == 2){
            $('#input-job').show();
            $(this).attr('name', 'tx_mmforum_pi5[tx_mmforum_occ][]');
            $('#input-job').attr('name', 'tx_mmforum_pi5[tx_mmforum_occ][]');
        }else if(index == 9){
            $('#input-job').show();
            $(this).attr('name', 'temp');
            $('#input-job').attr('name', 'tx_mmforum_pi5[tx_mmforum_occ]');
        }else{
            $(this).attr('name', 'tx_mmforum_pi5[tx_mmforum_occ]');
            $('#input-job').attr('name', 'tx_mmforum_pi5[tx_mmforum_occ_2]');
            $('#input-job').hide();
        }
    });
    createTooltips();

}( jQuery ));

function createTooltips()
{
    $("#content").after('<div id="tooltip" style="display: none;"></div>');
    $(".tooltip").tooltip({
        tip: '#tooltip',
        offset: [37, 30],
        position: 'top right',
        effect: 'slide',
        onBeforeShow: function() {
            var id = this.getTrigger().attr("id");
            var gid = id.split("-");
            var location = "http://wegweiser-demenz.mig.de.bafza-lokal.baz.ivbb.bund.de/index.php?id=187&ajax=true&gid="+gid[1];
            if ("https:" == document.location.protocol) {
                location = "https://www.wegweiser-demenz.de/index.php?id=187&ajax=true&gid="+gid[1];
                $('#tooltip').html('<div id="tooltipcontent"><img src="https://www.wegweiser-demenz.de/fileadmin/templates/img/spinner.gif" title="Inhalt wird geladen" alt="Inhalt wird geladen" /></div><div class="edge"></div>');
            } else {
                $('#tooltip').html('<div id="tooltipcontent"><img src="http://www.wegweiser-demenz.de/fileadmin/templates/img/spinner.gif" title="Inhalt wird geladen" alt="Inhalt wird geladen" /></div><div class="edge"></div>');
            }
            $('#tooltipcontent').load(location);
        },
        onHide: function() {
            $("#tooltip").empty();
        }
    });
}

function hideAndEnableFAQItems()
{

    $("#leftcontent h3").parent().parent().addClass("wwd-accordion");
    $("p.bodytext", $("#leftcontent h3").parent().parent()).hide();
    $("#leftcontent h3").click(function()
    {
        $(this).toggleClass('open');
        $("p.bodytext", $(this).parent().parent()).toggle();
    });

}

$('h3.tx-glossary-term').on('click', function(){

    var $div  = $(this).parent();
    $($div).find('dd').toggle();

});


$('.glossary.glossar-link,.dpnglossary.link').hover(function(){
    $(this).find('.glossar-overlay').show();
}, function(){
    $(this).find('.glossar-overlay').hide();
});
