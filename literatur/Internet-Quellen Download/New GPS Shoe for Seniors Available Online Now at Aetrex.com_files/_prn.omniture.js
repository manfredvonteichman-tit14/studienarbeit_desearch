define(['jquery'], function($) {
    $('#promo_1,#promo_2').on('click', function() {
        var buttonText = $(this).data('omniture').name;
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar25,eVar55,events';
        s.linkTrackEvents = 'event59';
        s.events = 'event59';
        s.eVar25 = buttonText;
        s.eVar55 = s.pageName;
        s.tl(this, 'o', 'Banner and Skyscraper Ads Button clicks');
    });
    $('#skyscraper-journalist-link,#skyscraper-ProfNet-link,#skyscraper-button').on('click', function() {
        var buttonText = $(this).data('omniture').name;
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar55,eVar25,events';
        s.linkTrackEvents = 'event59';
        s.events = 'event59';
        s.eVar25 = buttonText;
        s.eVar55 = s.pageName;
        s.tl(this, 'o', 'subnav others');
    });

    $('.page-wrap').on('click', '.omniture-subnav', function() {
        var linkText = $(this).data('omniture').SubNavigationLink;
        var subNav = $(this).data('omniture').FormSubNavBar;
        if (linkText != 'undefined' && linkText != null) {
            var s = s_gi(s_account);
            if (subNav == 'true') {
                s.linkTrackVars = 'eVar55,eVar25,events';
                s.linkTrackEvents = 'event59';
                s.eVar25 = linkText;
                s.eVar55 = s.pageName;
                s.events = 'event59';
                s.tl(this, 'o', 'News release industry top nav clicks');
            } else {
                s.linkTrackVars = 'eVar55,eVar25,events';
                s.linkTrackEvents = 'event59,event67';
                s.eVar25 = linkText;
                s.eVar55 = s.pageName;
                s.events = 'event59,event67';
                s.tl(this, 'o', 'News release industry top sticky nav clicks');
            }
        }
    });

    $('.page-wrap').on('click', '.omniture-top , .omniture-industry , .omniture-topics', function() {
        var name = $(this).data('omniture').name;
        var id = $(this).data('omniture').id;
        if (name != 'undefined' && name != null) {
            var s = s_gi(s_account);
            s.linkTrackVars = 'prop6,prop46,events';
            s.linkTrackEvents = 'None';
            s.prop6 = 'PRN Home | News Releases | ' + name;
            s.prop46 = 'News Releases | ' + name + ' | ' + id;
            s.tl(this, 'o', 'news releases links');

        }
    });
    $('.page-wrap').on('click', '.linkOnClick', function(event) {
        event.preventDefault();
        event.stopPropagation();
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop5,eVar3,prop15,prop34';
        s.prop5 = 'External Link';
        var irisId = $(this).attr("data-include");
        var url = $(this).attr("data-omniture");
        s.eVar3 = s.prop5;
        s.prop15 = irisId;
        s.prop34 = url;
        s.tl(this, 'e', 'ExternalLink', null, 'navigate');
        window.open(url, '_blank');
    });

    $('.linkOnClick').mousedown(function(e) {
        var url = $(this).attr("data-omniture");
        switch (e.which) {
            case 2:
                e.preventDefault();
                window.open(url, '_blank');
                break;
            case 3:
                $(this).prop('href', javascriptMethod(url));
                break;
        }

    });

    function javascriptMethod(url) {
        return url;
    }

    $('.page-wrap').on('click', '.homepagereco', function() {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,eVar30,eVar55,events';
        s.linkTrackEvents = 'event38';
        s.events = 'event38';
        var type = $(this).data('omniture').type;
        var title = $(this).data('omniture').title;
        s.eVar30 = 'PRN_Home_' + type + '_' + title;
        s.prop46 = 'PRN_Home_' + type + '_' + title;
        s.eVar55 = s.pageName;
        s.tl(this, 'o', 'Recommendation link Clicks');
    });

    require(['jquery', 'prn.mobilenav'], function($) {
        // Mobile Nav - Tier One
        $('.mm-navbar a.tier-one').on('click', function() {
            var s = s_gi(s_account);
            var menuLinkName = 'Menu_' + $(this).attr('data-omniture');
            s.linkTrackVars = 'prop46,eVar24,eVar55,events';
            s.linkTrackEvents = 'event56';
            s.events = s.linkTrackEvents;
            s.eVar24 = menuLinkName;
            s.eVar55 = s.pageName;
            s.prop46 = menuLinkName;
            s.tl(this, 'o', 'Menu Clicks');
            console.log('clicked');
        }); // end mobile-nav tier 1 click


        $('.mm-menu').on('click', '.omniture-industry', function() {
            var name = $(this).data('omniture').name;
            var id = $(this).data('omniture').id;
            if (name != 'undefined' && name != null) {
                var s = s_gi(s_account);
                s.linkTrackVars = 'prop6,prop46,events';
                s.linkTrackEvents = 'None';
                // s.prop6 = 'PRN Home | News Releases | ' + name;
                s.prop46 = 'News Releases | ' + name + ' | ' + id;
                s.tl(this, 'o', 'news releases links');
            }
        });

        //  Mobile Nav - News
        $('.mm-menu .news a').on('click', function() {
            var linkText = $(this).data('omniture').SubNavigationLink;
            if (linkText != 'undefined' && linkText != null) {
                var s = s_gi(s_account);
                s.linkTrackVars = 'eVar55,eVar25,events';
                s.linkTrackEvents = 'event59';
                s.eVar25 = linkText;
                s.eVar55 = s.pageName;
                s.events = 'event59';
                s.tl(this, 'o', 'News release industry top nav clicks');
            }
        });

        //  Mobile Nav - Resources
        $('.mm-menu .resources a').on('click', function(e) {
            var s = s_gi(s_account);
            s.linkTrackVars = 'prop46,eVar55,events';
            s.linkTrackEvents = 'event59';
            s.events = s.linkTrackEvents;
            s.prop46 = $(this).data('omniture').prop46;
            s.eVar55 = s.pageName;
            s.tl(this, 'o', 'Nav clicks');
        });

        // Mobile Nav - Social
        $('.mm-social-footer a').on('click', function() {
            var s = s_gi(s_account);
            var menuLinkName = 'Header_' + $(this).attr('data-omniture');
            s.linkTrackVars = 'eVar55,eVar56,events';
            s.linkTrackEvents = 'event53';
            s.events = s.linkTrackEvents;
            s.eVar55 = s.pageName;
            s.evar56 = menuLinkName;
            s.tl(this, 'o', 'Social Media');
        }); // end mobile social button clicks

        // Mobile Nav - Other
        $('.mm-footer-block:not(.mm-social-footer)').on('click', function() {
            var s = s_gi(s_account);
            var menuLinkName = 'Menu_' + $(this).attr('data-omniture');
            if (menuLinkName === 'Menu_Send a Release') {
                s.linkTrackEvents = 'event56,event57';
            } else {
                s.linkTrackEvents = 'event56';
            }
            s.events = s.linkTrackEvents;
            // s.prop6 = 'Mobile_nav_Clicks';
            s.linkTrackVars = 'prop46,eVar24,eVar55,s.prop46,events';
            s.evar24 = menuLinkName;
            s.prop46 = menuLinkName;
            s.evar55 = s.pageName;
            s.tl(this, 'o', 'Sticky menu track');
        }); // end mobile footer other clicks
    });


    $('#searchtxt,#searchModaltxt').keypress(function(e) {
        if (e.which == 13) {
            schf_omniture_trackSearch();
        }
    });

    // PRNCOM-5785 START
    function get_check_value(id) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop16';
        s.linkTrackEvents = 'None';
        s.prop16 = "MyNews_Follow";
        s.tl(this, 'o', 'MyNews_Follow');
        var formElement = '';
        if (id == "alertmsg1") {
            formElement = document.forms["checkboxform1"];
        } else {
            formElement = document.forms["checkboxform"];
        }
        var tickersize = formElement.tickerlist.length;
        var t_value = "";
        if (tickersize) {
            for (var i = 0; i < tickersize; i++) {
                if (formElement.tickerlist[i].checked && (!formElement.tickerlist[i].disabled)) {
                    t_value = t_value + formElement.tickerlist[i].value + ",";
                    TrackAddTicker(formElement.tickerlist[i].value);
                }
            }
        } else {
            if (formElement.tickerlist.checked) {
                t_value = formElement.tickerlist.value;
            }
        }
        if (t_value == "") {
            document.getElementById(id).style.display = 'block';
            return false;
        }
        window.location = 'http://' + serverJSONObj.envHost + 'www.prnewswire.com/templates/PRN Update User?ticker=' + t_value;
    }

    function TrackAddTicker(prop46) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46';
        s.linkTrackEvents = 'None';
        s.prop46 = "MyNews_Add_" + prop46;
        s.tl(this, 'o', 'MyNews_Add_' + prop46);
    }

    omniture_corousal = function(page, action) {
        //testandtarget_corousal(action);
        templateVersion = serverJSONObj.templateVersion;
        console.log("omniture_corousal function - 2 params::" + templateVersion);
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop41,eVar41,prop47,events';
        s.linkTrackEvents = 'event13';
        s.prop41 = page + ' - ' + action;
        s.eVar41 = s.prop41;
        if (typeof(templateVersion) != 'undefined') {
            s.prop47 = templateVersion;
        }
        s.events = 'event13';
        s.tl(this, 'o', 'Multimedia clicks');
    };

    omniture_corousal = function(page, action, assetId) {
        templateVersion = serverJSONObj.templateVersion;
        console.log("omniture_corousal function - 3 params::" + templateVersion);
        //testandtarget_corousal(action);
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop41,eVar41,prop47,eVar15,events';
        s.linkTrackEvents = 'event13';
        s.prop41 = page + ' - ' + action;
        s.eVar41 = s.prop41;
        if (typeof(templateVersion) != 'undefined') {
            s.prop47 = templateVersion;
        }
        s.events = 'event13';
        if (assetId != null) {
            s.eVar15 = assetId;
        } else {
            s.eVar15 = '';
        }
        s.tl(this, 'o', 'Multimedia clicks');
    };

    omniture_corousal = function(page, action, assetId, imageType) {
        //testandtarget_corousal(action);
        templateVersion = serverJSONObj.templateVersion;
        console.log("omniture_corousal function - 4 params::" + templateVersion);
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop41,eVar41,eVar71,prop47,prop48,eVar15,events';
        s.linkTrackEvents = 'event13';
        s.prop41 = page + ' - ' + action;
        s.eVar41 = s.prop41;
        s.eVar71 = imageType;
        s.prop48 = imageType;
        if (typeof(templateVersion) != 'undefined') {
            s.prop47 = templateVersion;
        }
        s.events = 'event13';
        if (assetId != null) {
            s.eVar15 = assetId;
        } else {
            s.eVar15 = '';
        }
        s.tl(this, 'o', 'Multimedia clicks');
    };

    trackSearch = function() {
        // Add Omniture js for tracking search button clicks.
        var s = s_gi(s_account);
        s.linkTrackVars = 'events';
        s.linkTrackEvents = 'event17';
        s.events = 'event17';
        s.tl(this, 'o', 'Search Button');
    };

    schf_omniture_trackSearch = function() {
        //added Omniture js for tracking search button clicks(prnm-275)
        var cookieVal = readCookie('prncom_schF');
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,eVar55,events';
        s.linkTrackEvents = 'event17,event55';
        s.prop46 = 'Menu_Searches';
        s.events = 'event17,event55';
        if ((typeof(s.eVar55) !== 'undefined') && (s.eVar55 !== null)) {
            s.eVar55 = s.pageName;
        }
        s.tl(this, 'o', 'Search Button');
    };

    sticky_omniture_trackSearch = function(stickyMenu) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,events';
        s.linkTrackEvents = 'none';
        s.prop46 = stickyMenu;
        s.events = 'event17,event55';
        s.eVar55 = s.pageName;
        s.tl(this, 'o', 'Sticky Menu Search Button');
    };
    if (serverJSONObj.wssID = 424819) {
        trackTTLink = function(link, linkName) {
            mboxUpdate('PRNCOM_ClickTracker', 'click=' + linkName); // T&T code 
            //	trackTT_omniture(link,linkName); // Omniture prop46 -- 

            setTimeout(function() {}, 500);
        };

        trackTT_omniture = function(thisObj, linkName) {
            var s = s_gi(s_account);
            s.linkTrackVars = 'prop46';
            s.linkTrackEvents = 'None';
            s.prop46 = linkName;
            s.tl(thisObj, 'o', linkName);
        };
    } else {
        trackTTLink = function(link, linkName) {
            mboxUpdate('PRNCOM_ClickTracker', 'click=' + linkName);
            setTimeout();
        };
    }

    schf_omniture_omc = function(eventNum) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar55,events';
        s.linkTrackEvents = 'event' + eventNum;
        s.events = 'event' + eventNum;
        s.eVar55 = s.pageName;
        s.tl(this, 'o', 'Quick Links');
    };

    schf_omniture_omc_member = function(link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop27,eVar55,events';
        s.linkTrackEvents = 'event54';
        s.prop27 = link;
        s.events = 'event54';
        s.eVar55 = s.pageName;
        s.tl(this, 'o', 'Quick Links');
    };

    schf_omniture_social = function(eventNum, link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar55,eVar56,events';
        s.linkTrackEvents = 'event53';
        s.events = 'event53';
        s.eVar55 = s.pageName;
        s.eVar56 = link;
        s.tl(this, 'o', 'Social Media');
    };


    schf_omniture_menu = function(eventNum, link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,eVar55,eVar24,events';
        s.linkTrackEvents = 'event56';
        s.prop46 = link;
        s.events = 'event56';
        s.eVar55 = s.pageName;
        s.eVar24 = link;
        s.tl(this, 'o', 'Menu Clicks');
    };

    schf_omniture_SANR = function(event1, event2, link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,eVar55,eVar24,events'
        s.linkTrackEvents = 'event56,event57';
        s.prop46 = link;
        s.events = 'event56,event57';
        s.eVar55 = s.pageName;
        s.eVar24 = link;
        s.tl(this, 'o', 'SAR Click');
        console.log("schf_omniture_SANR 3 params");
    };

    schf_omniture_homepage = function(eventNum, link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,eVar55,eVar25,events';
        s.linkTrackEvents = 'event59';
        s.prop46 = link;
        s.events = 'event59';
        s.eVar55 = s.pageName;
        s.eVar25 = link;
        s.tl(this, 'o', 'homepage');
    };

    /* overview page sub nav -start */
    schf_omniture_subnav = function(tvalue, link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar55,eVar25,events';
        s.linkTrackEvents = 'event59,event67';
        if (tvalue == 'true') {
            s.events = 'event59,event67';
            var populatedVal = 'Sticky nav clicks';
        } else {
            s.events = 'event59';
            var populatedVal = 'Nav clicks';
        }
        s.eVar55 = s.pageName;
        s.eVar25 = link;
        s.tl(this, 'o', populatedVal);
    };

    schf_omniture_smallBusiness = function(eventNum, link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar55,eVar26,events';
        s.linkTrackEvents = 'event60';
        s.events = 'event60';
        s.eVar55 = s.pageName;
        s.eVar26 = link;
        s.tl(this, 'o', 'smallBusiness');
    };

    schf_omniture_RMI = function(eventNum, link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,eVar55,eVar26,events';
        s.linkTrackEvents = 'event58';
        s.prop46 = link;
        s.events = 'event58';
        s.eVar55 = s.pageName;
        s.eVar26 = link;
        s.tl(this, 'o', 'RMI');
    };
    /* overview page sub nav -end*/

    /* sub sections - start */
    schf_omniture_sub_RMI = function(link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,eVar55,eVar26,events';
        s.linkTrackEvents = 'event58';
        s.prop46 = link;
        s.events = 'event58';
        s.eVar55 = s.pageName;
        s.eVar26 = link;
        s.tl(this, 'o', 'subnav rmi');
    };

    schf_omniture_sub_others = function(link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar55,eVar25,events';
        s.linkTrackEvents = 'event59';
        s.events = 'event59';
        s.eVar55 = s.pageName;
        s.eVar25 = link;
        s.tl(this, 'o', 'subnav others');
    };

    omniture_button_or_link_clicks = function(tvalue, link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar55,eVar25,events';
        s.linkTrackEvents = 'event59,event67';
        if (tvalue == 'true') {
            s.events = 'event59,event67';
            var populatedVal = 'News release industry top sticky nav clicks';
        } else if (tvalue == 'advanced') {
            s.events = 'event59';
            var populatedVal = 'Advanced Search Button clicks';
        } else {
            s.events = 'event59';
            var populatedVal = 'News release industry top nav clicks';
        }
        s.eVar55 = s.pageName;
        s.eVar25 = link;
        s.tl(this, 'o', populatedVal);
    };
    /* sub sections - end*/
    /* Learn more links clicks - starts*/
    schf_omniture_sub_others_t = function(pageT, link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,eVar55,eVar25,events';
        s.linkTrackEvents = 'event59';
        s.events = 'event59';
        s.eVar55 = s.pageName;
        if (pageT == "All Products") {
            s.eVar25 = pageT + '-' + link;
            s.prop46 = pageT + '-' + link;
        } else {
            s.eVar25 = pageT + '-LearnMore-' + link;
            s.prop46 = pageT + '-LearnMore-' + link;
        }
        s.tl(this, 'o', 'Learn more links clicks');
    };
    /* Learn more links clicks - end*/
    schf_omniture_distribute_t_link = function(link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar55,eVar26,events';
        s.linkTrackEvents = 'event60';
        s.eVar55 = s.pageName;
        s.eVar26 = link;
        s.events = 'event60';
        s.tl(this, 'o', 'Distribute Go To PRToolkit button Clicks');
    };

    omniture_RMI_Clicks = function(link, type) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar2,eVar27,prop46,eVar73,events';
        s.linkTrackEvents = 'event2,event62';
        if (link == "Request a Product Demo")
            sTyepe = 'Request a Product Demo';
        else
            sTyepe = 'Contacts Us';
        if (!link || link == false) {
            s.eVar27 = 'Contacts Us';
            s.eVar2 = 'Contacts Us';
        } else {
            s.eVar27 = unescape(link);
            s.eVar2 = unescape(link);
        }
        s.prop46 = type;
        s.eVar73 = '+20';
        s.events = 'event2,event62=20';
        s.tl(this, 'o', sTyepe + ' submit button clicks');
    };

    omniture_signme = function(blogId) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop6,eVar48,events';
        s.linkTrackEvents = 'event37';
        s.events = 'event37';
        s.eVar48 = blogId + ' | Subscription Clicks';
        s.prop6 = 'PRN_Blog_Subscribe_SignUpClick';
        s.tl(this, 'o', 'signUp_click');
    };

    omniture_blogEmailSubscribe_Clicks = function(emailId) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar53,events';
        s.linkTrackEvents = 'event40';
        s.eVar53 = emailId;
        s.events = 'event40';
        s.tl(this, 'o', 'Blog Subscribe via email submit button clicks');
    };

    /* tnt tracking - starts*/
    sch_trackTTLink = function(mboxName, link, linkName) {
        var cookieVal = readCookie('prncom_schF');
        mboxUpdate(mboxName, 'click=' + linkName);
        setTimeout(function() {
            document.location.href = link.href;
        }, 500);
    };
    /* tnt tracking - end*/
    omniture_KC_View_Clicks = function(view, type) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,events';
        s.linkTrackEvents = 'None';
        s.prop46 = view;
        s.tl(this, 'o', 'Knowledge Center-' + type + '-clicks');
    };

    omniture_KC_Button_Clicks = function(name, type) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar38,events';
        s.linkTrackEvents = 'event35';
        s.events = 'event35';
        s.eVar38 = name;
        s.tl(this, 'o', 'Knowledge Center-' + type + '-clicks');
    };

    omniture_KC_DownloadWhitepaper_Clicks = function() {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar73,events';
        s.linkTrackEvents = 'event34,event62';
        s.eVar73 = '+5';
        s.events = 'event34,event62=5';
        s.tl(this, 'o', 'KC Download WhitePaper button clicks');
    };

    Omniture_FeaturedItems_Cliks = function(name, id) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar39,prop22,events';
        s.linkTrackEvents = 'event39';
        s.events = 'event39';
        s.eVar39 = name + ' | ' + id;
        s.prop22 = s.eVar39
        s.tl(this, 'o', 'Highlighted KC Content Offers clicks');
    };

    omniture_KC_Gated_Download = function(title, articleType) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop6,eVar37,eVar2,eVar73,events';
        s.linkTrackEvents = 'event33,event62';
        s.events = 'event33,event62=5';
        s.prop6 = 'PRN_KC_Form Submitted';
        s.eVar37 = title;
        s.eVar73 = '+5';
        s.eVar2 = articleType;
        s.tl(this, 'o', 'Gated Content KC Download button clicks');
    };

    track_sticky_menu = function(linkname) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar25,eVar55,events';
        s.linkTrackEvents = 'event59,event67';
        s.events = 'event59,event67';
        s.eVar25 = 'SubMenu - ' + linkname;
        s.eVar55 = s.pageName;
        s.tl(this, 'o', 'Sticky toggle click');
    };

    track_common_sticky_menu = function(linkname) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,prop6,eVar24,eVar55,events';
        s.linkTrackEvents = 'event56,event51,event57';
        if (linkname == "Member Login") {
            s.events = 'event56,event51';
        } else if (linkname == "Send a Release") {
            s.events = 'event56,event57';
        } else {
            s.events = 'event56';
        }
        s.prop46 = 'Menu_' + linkname;
        s.eVar24 = 'Menu_' + linkname;
        s.prop6 = 'Top_nav_Clicks';
        s.eVar55 = s.pageName;
        s.tl(this, 'o', 'Sticky menu track');
    };

    track_sticky_menu_links = function(linkname) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,prop6,eVar24,eVar55,events';
        s.linkTrackEvents = 'event56,event67';
        s.events = 'event56,event67';
        if (linkname == 'Contact_iconClicked' || linkname == 'AllContactInfo') {
            s.prop46 = 'Sticky_Menu_' + linkname;
        } else {
            s.prop46 = 'Sticky_Menu_' + linkname;
            s.eVar24 = 'Sticky_Menu_' + linkname;
            s.prop6 = 'Top_sticky_nav_Clicks';
            s.eVar55 = s.pageName;
        }
        s.tl(this, 'o', 'Sticky menu track');
    };

    track_Banner_link = function(linkname) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,eVar25,eVar55,events';
        if (linkname == "SANR") {
            s.events = 'event59,event52';
            s.linkTrackEvents = 'event59,event52';
            s.prop46 = 'PRNHome_Banner_Get Started Today';
            s.eVar25 = 'PRNHome_Banner_Get Started Today';
        } else if (linkname == "ContactUs") {
            s.linkTrackEvents = 'event59,event64';
            s.events = 'event59,event64';
            s.prop46 = 'PRNHome_Banner_' + linkname;
            s.eVar25 = 'PRNHome_Banner_' + linkname;
        }
        s.eVar55 = s.pageName;
        s.tl(this, 'o', 'Banner Links');
    };

    omniture_Home_resource_click = function(type, title) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,eVar30,eVar55,events';
        s.linkTrackEvents = 'event38';
        s.events = 'event38';
        s.eVar30 = 'PRN_Home_' + type + '|' + title;
        s.prop46 = 'PRN_Home_' + type + '|' + title;
        s.eVar55 = s.pageName;
        s.tl(this, 'o', 'Home_Resources link Clicks');

    };

    omniture_Resource_Clicks = function(type, title) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'eVar25,eVar55,prop46,events';
        s.linkTrackEvents = 'event59';
        if (type == "button") {
            s.prop46 = title;
        } else {
            s.events = 'event59';
            s.eVar25 = 'PRN Home | Featured Solutions for You | ' + type + ' | ' + title;
            s.prop46 = 'PRN Home | Featured Solutions for You | ' + type + ' | ' + title;
        }
        s.eVar55 = s.pageName;
        s.tl(this, 'o', 'Featured Solutions for You');
    };

    omniture_browse_all_click = function(type) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,events';
        s.linkTrackEvents = 'None';
        s.prop46 = type + '|Browse All Releases';
        s.tl(this, 'o', 'PRN Home Browse All Clicks');

    };

    omniture_topics_all_click = function(type) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,events';
        s.linkTrackEvents = 'None';
        s.prop46 = type + '|Latest News Topics';
        s.tl(this, 'o', 'PRN Home Topics All Clicks');

    };

    omniture_FeaturedSolutions_click = function(title) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,eVar25,eVar55,events';
        s.linkTrackEvents = 'event59';
        s.events = 'event59';
        s.prop46 = 'PRN Home|Featured Solutions|' + title;
        s.eVar25 = 'PRN Home|Featured Solutions|' + title;
        s.eVar55 = s.pageName;
        s.tl(this, 'o', 'PRN Home Featured Solutions');

    };

    track_footer_link = function(linkname) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,prop6,eVar25,eVar55,events';
        s.linkTrackEvents = 'event59';
        s.events = 'event59';
        s.prop6 = 'Footer_Clicks';
        s.prop46 = s.pageName + '_Footer_' + linkname;
        s.eVar25 = s.pageName + '_Footer_' + linkname;
        s.eVar55 = s.pageName;
        s.tl(this, 'o', 'Footer Links');
    };

    track_footer_subsites = function(siteName) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,prop27,events';
        s.linkTrackEvents = 'None';
        s.prop27 = siteName;
        s.prop46 = s.pageName + '_Subsite Clicks';
        s.tl(this, 'o', 'Footer Subsite Clicks');
    };

    track_footer_otherLinks = function(linName) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,events';
        s.linkTrackEvents = 'None';
        s.prop46 = s.pageName + '_' + linName;
        s.tl(this, 'o', 'Footer other links');
    };

    track_newsRelaese_url = function(type, linke) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop6,prop46,events';
        s.linkTrackEvents = 'None';
        s.prop6 = 'PRN Home | News Releases | ' + type;
        s.prop46 = 'News Releases | ' + type + ' | ' + linke;
        s.tl(this, 'o', 'news releases links');
    };

    ContactUs_omniture_RMI = function(link) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,eVar55,eVar26,events';
        s.linkTrackEvents = 'event64';
        s.prop46 = link + ' | Lightbox | Contact Form';
        s.events = 'event64';
        s.eVar55 = s.pageName;
        s.eVar26 = link + ' | Lightbox | Contact Form';
        s.tl(this, 'o', 'Contact Us - RMI');
    };

    track_home_hero_click = function(link, type) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'prop46,events';
        s.linkTrackEvents = 'none';
        s.events = 'none';
        s.prop46 = 'PRN Home | ' + type + ' | ' + $(link).attr('href');
        s.tl(this, 'o', 'Home page hero clicks');
    };

    $("#rarrow").click(function() {
        omniture_corousal("Carousel Page", "next");
        return false;
    });
    $("#larrow").click(function() {
        omniture_corousal("Carousel Page", "prev");
        return false;
    });

    $(".flex-next").click(function() {
        omniture_corousal("Carousel Page", "next");
    });
    $(".flex-prev").click(function() {
        omniture_corousal("Carousel Page", "prev");
    });
    $('.icon-pinterest').hide();

    // PRNCOM-5785 END
});
