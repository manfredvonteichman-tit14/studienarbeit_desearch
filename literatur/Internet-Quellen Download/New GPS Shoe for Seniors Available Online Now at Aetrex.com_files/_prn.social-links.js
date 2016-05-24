define([], function() {
    return function prnSocialLinks() {
        (function() {
            var po = document.createElement('script');
            po.type = 'text/javascript';
            po.async = true;
            po.src = 'https://apis.google.com/js/plusone.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
        })();

        callOmnitureForGoogle = function() {
            var prop47Val = 'Google+';
            if (typeof(templateVersion) != 'undefined') {
                prop47Val = templateVersion;
            }
            var s = s_gi(s_account);
            s.linkTrackVars = 'prop5,eVar3,prop15,prop16,prop47,prop2,events';
            s.linkTrackEvents = 'event12';
            s.prop5 = 'share it release';
            s.eVar3 = s.prop5;
            s.prop15 = serverJSONObj.irisId;
            s.prop16 = 'Google+';
            s.prop47 = prop47Val;
            s.prop5 += '_' + s.prop16;
            s.prop2 = s.pageName;
            s.events = 'event12';
            s.tl(this, 'o', 'Google+');

        };

        gPlus = function(url) {
            window.open(
                'https://plus.google.com/share?url=' + url,
                'popupwindow',
                'scrollbars=yes,width=800,height=400'
            ).focus();
            return false;

        };

        callPinitDetail = function(urlp, mediap, descp) {
            var urlnew = "http://pinterest.com/pin/create/button/?url=" + urlp + "&media=" + mediap + "&description=" + descp;
            window.open(urlnew);
        };

        printAndEmail = function(prop5Var, prop16Var, thisObj) {
            var s = s_gi(s_account);
            s.linkTrackVars = 'prop5,eVar3,prop15,prop49,prop16,events';
            s.linkTrackEvents = 'event12';
            s.prop5 = prop5Var;
            s.eVar3 = s.prop5;
            s.prop15 = serverJSONObj.irisId;
            s.prop2 = s.pageName;
            s.prop16 = prop16Var;
            var prop47PE = prop16Var;

            prop47PE = templateVersion;
            s.prop47 = prop47PE;
            s.events = 'event12';
            s.tl(thisObj, 'o', prop16Var);
        };

        callpinit = function(urlp, mediap, descp) {
            var urlnew = "http://pinterest.com/pin/create/button/?url=" + urlp + "&media=" + mediap + "&description=" + descp;
            window.open(urlnew);
        };

        callpinitModal = function(urlp, mediap, descp) {
             if (descp.indexOf("%26%2339%3B") > -1) {
                var regex = new RegExp("%26%2339%3B", "g");
                descp = descp.replace(regex, "%27");
            }
            if (descp.indexOf("%26%2334%3B") > -1) {
                var regex = new RegExp("%26%2334%3B", "g");
                descp = descp.replace(regex, "%22");
            }

            var urlnew = "http://pinterest.com/pin/create/button/?url=" + urlp + "&media=" + mediap + "&description=" + descp;
            window.open(urlnew);
        };

        callOmniture = function() {
            var prop47Share = 'Pin It';
            prop47PE = templateVersion;
            var s = s_gi(s_account);
            s.linkTrackVars = 'prop5,eVar3,prop15,prop16,prop47,prop2,events';
            s.linkTrackEvents = 'event12';
            s.prop5 = 'Pin it release';
            s.eVar3 = s.prop5;
            s.prop15 = serverJSONObj.irisId;
            s.prop16 = 'Pin It';
            s.prop47 = prop47Val;
            s.prop5 += '_' + s.prop16;
            s.prop2 = s.pageName;
            s.events = 'event12';
            s.tl(this, 'o', 'Pin It');
        };

        shareIt = function(thisObj, shareItName) {
            var s = s_gi(s_account);
            var loc = location.href;
            var path = serverJSONObj.reqUrl;
            if (loc.indexOf("prnewswire.com") > 0) {
                s.linkTrackVars = 'prop5,eVar3,prop15,prop16,prop47,prop2,events';
            } else {
                s.linkTrackVars = 'eVar3,prop15,prop16,prop47,prop2,events';
            }
            s.linkTrackEvents = 'event12';
            if (shareItName.indexOf("EmailThis") > -1 || shareItName.indexOf("PrintThis") > -1) {
                s.prop5 = thisObj;
            } else {
                s.prop5 = 'share it release';
            }
            s.eVar3 = s.prop5;
            s.prop15 = serverJSONObj.irisId;
            s.prop16 = shareItName;
            var prop47Share = shareItName;
            if (typeof(templateVersion) != 'undefined') {
                prop47Val = templateVersion;
                s.prop47 = prop47Val;
            }
            if (loc.indexOf("prnewswire.com") > 0) {
                s.eVar3 = s.prop5;
                if (shareItName.indexOf("EmailThis") > -1 || shareItName.indexOf("PrintThis") > -1) {
                    s.prop5 = thisObj;
                } else {
                    s.prop5 += '_' + s.prop16;
                }
            } else {
                if (shareItName.indexOf("EmailThis") > -1 || shareItName.indexOf("PrintThis") > -1) {
                    s.prop5 = thisObj;
                    s.eVar3 = s.prop5;
                } else {
                    s.eVar3 = s.prop16;
                }
            }
            s.prop2 = s.pageName;
            s.events = 'event12';
            s.tl(thisObj, 'o', shareItName);
        };

    }
});

/*
(function(d) {
    var f = d.getElementsByTagName('SCRIPT')[0],
        p = d.createElement('SCRIPT');
    p.type = 'text/javascript';
    p.async = true;
    p.src = '//assets.pinterest.com/js/pinit.js';
    f.parentNode.insertBefore(p, f);
}(document));
*/
