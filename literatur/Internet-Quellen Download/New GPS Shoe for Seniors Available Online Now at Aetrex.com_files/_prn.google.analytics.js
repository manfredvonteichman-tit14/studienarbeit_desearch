var _gaq = _gaq || [];
var loc = location.href;
var env = serverJSONObj.envHost;
if (env == "dev.") { // for Dev Environment
    _gaq.push(['_setAccount', 'UA-21992272-5']);
} else if (env == "stage.") { // For Stage Environment
    _gaq.push(['_setAccount', 'UA-21992272-5']);
} else { // For Prodcution Environment
    _gaq.push(['_setAccount', 'UA-21992272-1']);
}
//_gaq.push(['_setDomainName', '.www.prnewswire.com']);
_gaq.push(['_trackPageview']);
console.log("GAQ Array Created");

define(['jquery'], function($) {
    return function prnGoogleAnalytics() {
        // Google Analytics
        console.log("Google Analytics" + serverJSONObj);
        if (serverJSONObj.envDev || serverJSONObj.envStage) {
            console.log("Google Analytics for Domain:: " + serverJSONObj.envHost);
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-59411736-2', 'auto');
            ga('send', 'pageview');
            console.log("GA PageView Sent");
        } else {
            console.log("Google Analytics for Domain:: " + serverJSONObj.envHost);
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-59411736-2', 'auto');
            ga('send', 'pageview');
            console.log("GA PageView Sent");
        }

        // Below script is for Google Analytics 
        //<![CDATA[
        (function() {
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
            console.log("GA.JS Inserted");
        })();
        //]]>

    }
});
