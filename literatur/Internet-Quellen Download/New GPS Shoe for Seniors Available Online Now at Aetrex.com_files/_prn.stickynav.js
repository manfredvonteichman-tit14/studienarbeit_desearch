//Sticky Nav

// show / hide while scrolling
require(['jquery'],function($){
  // Hide .nav-sticky on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var headerHeight = $('.main-header').outerHeight() + $('.nav-subnav').outerHeight();
  var interval = null;
  var navClosed = true;

  function closeDropdowns() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (iOS == false) {
      $('.nav-sticky .dropdown.open .dropdown-toggle').dropdown('toggle');
    }
  }
  
  function closeNav() {
    if (navClosed === false) {
      $('.nav-sticky .navbar').removeClass('nav-down').addClass('nav-up');
      closeDropdowns();
      navClosed = true;
    }
  }

  $(window).scroll(function(event){
    didScroll = true;
    runInterval();
  });

  function runInterval() {
    interval = setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250)
  };

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop){
      // Scroll Down
      closeNav();
    } else {
      // Scroll Up
      closeDropdowns();
      if(st + $(window).height() < $(document).height()) {
        $('.nav-sticky .navbar').removeClass('nav-up').addClass('nav-down');
        navClosed = false;
      }
      if (st < headerHeight) {
        closeNav();
      }
    }

    lastScrollTop = st;
  }

  $('.nav-sticky .section-nav .dropdown').on('show.bs.dropdown', function(){
    $('.section-nav i').removeClass('fa-chevron-right').addClass('fa-chevron-down');
  });

  $('.nav-sticky .section-nav .dropdown').on('hide.bs.dropdown', function(){
    $('.section-nav i').removeClass('fa-chevron-down').addClass('fa-chevron-right');
  });

});


