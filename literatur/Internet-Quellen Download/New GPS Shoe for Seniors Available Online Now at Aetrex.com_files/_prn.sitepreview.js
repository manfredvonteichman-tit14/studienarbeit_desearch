define(['jquery'], function($) {
    return function prnSitePreview() {
        var sitePreviewIframe;
        $('#site-preview-toggle').on('click', function(event) {
            event.preventDefault();
            if (sitePreviewIframe) {
                sitePreviewIframe.appendTo($('#site-preview-wrapper'));
                sitePreviewIframe = null;
            } else {
                sitePreviewIframe = $('#site-preview-iframe').detach();
            }
            var $this = $(this);
            var originalText = $this.data('text-original');
            var swapText = $this.data('text-swap');
            if ($this.text() === originalText) {
                $this.text(swapText);
            } else {
                $this.text(originalText);
            }
        });
    }

    // verify the below function is used
    function getposOffset(overlay, offsettype) {
        var totaloffset = (offsettype == "left") ? overlay.offsetLeft : overlay.offsetTop;
        var parentEl = overlay.offsetParent;
        while (parentEl != null) {
            totaloffset = (offsettype == "left") ? totaloffset + parentEl.offsetLeft : totaloffset + parentEl.offsetTop;
            parentEl = parentEl.offsetParent;
        }
        return totaloffset;
    }


    var sitePreviewWidth = screen.availWidth - 17;
    var sitePreview1 = document.getElementById('sitePreview');
    //var leftOff= getposOffset(document.getElementById('sitePreview'),"left");
    //sitePreview1.style.width=sitePreviewWidth+'px';
    //sitePreview1.style.marginLeft=-leftOff+'px';
    setTimeout(showIframe, 5000);

    function showIframe() {
        var eroxCom = "$!eroxCom";
        if (eroxCom) {
            var HTML = "<iframe id='previewFrame' class='site-preview' onload='this.style.display='block';' frameborder='0' allowTransparency='true' src='" + serverJSONObj.previewWebsite + "'></iframe>";
            document.getElementById('frameContainer').innerHTML = HTML;
        } else {
            requestCrossDomain(serverJSONObj.previewWebsite, function(results) {
                if (results != 'false') {
                    var HTML = "<iframe id='previewFrame' onload='this.style.display='block';' class='site-preview' frameborder='0' allowTransparency='true' src='" + serverJSONObj.previewWebsite + "'></iframe>";
                    document.getElementById('frameContainer').innerHTML = HTML;
                } else {
                    $("div.previewlinks").css("display", "none");
                    $("div#sitePreview").css("display", "none");
                }
            });
        }
    }


});
