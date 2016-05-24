define(['jquery','mmenu'], function($, mmenu) {
  //init mobile nav
  var navMobile = $('nav#nav-mobile');
  navMobile.mmenu({
    extensions: ["fullscreen","border-full"],
    navbar: {
      add: true,
      title: null
    },
    navbars: [{
      position: 'top',
      content: [
        '<p class="mmenu-header"><i class="btr bt-times mm-close"></i><a href="/"><img class="mobile-logo" src="http://content.prnewswire.com/designimages/logo_prn_mobile_no_pad.png" /></a></p>'
      ],
      height: 1
    },{
      position: "top",
      content: [
        '<a class="tier-one news" href="/news-releases/" data-omniture="News">News</a>',
        '<a class="tier-one solutions" href="/solutions/overview/" data-omniture="Solutions">Solutions</a>',
        '<a class="tier-one resources" href="/knowledge-center/" data-omniture="Resources">Resources</a>'
      ],
      height: 1
    },{
      position: "bottom",
      content: [
        '<div class="mm-footer-block mm-social-footer"><div class="inner"><a href="https://twitter.com/PRNewswire" data-omniture="Twitter"><i class="fab fab-twitter"></i></a><a href="https://www.facebook.com/pages/PR-Newswire/26247320522" data-omniture="Facebook"><i class="fab fab-facebook-alt"></i></a><a href="http://www.linkedin.com/company/pr-newswire" data-omniture="Linkedin"><i class="fab fab-linkedin-alt"></i></a><a href="/rss/" data-omniture="RSS Feeds"><i class="bts bt-rss"></i></a></div></div><a class="mm-footer-block" href="https://portal.prnewswire.com" data-omniture="Send a Release"><span class="inner">Send a News Release</span></a><a class="mm-footer-block mm-footer-block--left" href="/blog/" data-omniture="Blog"><span class="inner">Blog</span></a><a class="mm-footer-block" href="https://prnmedia.prnewswire.com/" data-omniture="Journalists"><span class="inner">For Journalists</span></a>'
      ],
      height: 2
    }]
  });

  // Give mobilenav opacity after finished loading.
  navMobile.css('opacity','1');

  //set api var
  var api = navMobile.data( 'mmenu' );

  //callback functions
  navMobile.on('init',function(){

      var loc = window.location.pathname;
      var current = navMobile.find('a[href="' + loc + '"]').closest("li");

      // Remove trailing slashes from location.
      (function removeSlash(str){

        loc = str.replace(/\/$/, "")
        return loc;

      })(loc);

      // news pages
      if ($('body').hasClass('news-releases')) {

        var newsSub = $('ul.mm-listview.news .mm-next');
        $('.tier-one.news').addClass('active');

        // Check for location/href matches.
        for (i = 0; i < newsSub.length; i++) {

          var linkId = $(newsSub[i]).attr('href');
          var panSelect = '.mm-panel' + linkId + ' .tier-three li';
          var panChild = $(panSelect);

          for (t = 0; t < panChild.length; t++) {

            var subPanel = $(panChild[t].closest('.mm-panel'));
            var panLink = $(panChild[t]).children('a').attr('href');

            if (panLink === loc) {

              $('.tier-one.news').addClass('active');

              var matched = true;
              api.openPanel(subPanel);

            }

          }

        }

        if (!matched) {

          api.openPanel($('.mm-panel#news'));
          $('.tier-one.news').attr('href','javascript:void(0)');

        }

      // solutions pages
      } else if ($('body').hasClass('solutions')) {

        $('.tier-one.solutions').addClass('active').attr('href','javascript:void(0)');
        api.openPanel($('.mm-panel#solutions'));

      // resources pages
      } else if ($('body').hasClass('resources')) {

        $('.tier-one.resources').addClass('active').attr('href','javascript:void(0)');
        api.openPanel($('.mm-panel#resources'));

      } else if ($('body').hasClass('home-page')) {

        api.openPanel($('.mm-panel#home'));

      }

      api.setSelected(current);

  }).trigger('init'); // Close init functuon

  // Create close button
  $('.mm-close').click(function() {

    api.close();

  }); // Close 'mm-close' click function

  // Close menu if window is resized over 768 width
  var resizeTimer;

  $(window).on('resize', function(e) {

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if ($(window).width() > 768) {
        api.close();
      }
    }, 250);

  });  // Close resize function
})










