define(['jquery', 'flexslider', 'hammer'], function($) {
  return function prnLegacySlider() {

    var $slide = $('.slide');
    var $photo = $(".photo");
    var num = 0;
    var slideNum = 1;
    var slideCount;
    var photoNum = $photo.length;
    var slideWidth;
    var captionNum = num;
    var caption = 0;
    var slideImgs;
    var windowWidth = viewport().width;

    $(window).on('resize', function() {
      windowWidth = viewport().width;
    });

    function viewport() {
      var e = window,
        a = 'inner';
      if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
      }
      return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
      };
    }

    function setSlideWidth() {
      windowWidth = viewport().width;
      $slide = $('.slide');
      $slide.css('padding', '0');
      slideWidth = $('.photos').width();
      if (windowWidth > 767) {
        $slide.width(slideWidth).css('padding', '0 30px');
      } else {
        $slide.width(slideWidth);
      }
    }

    function slideItems() {
      if (windowWidth > 767) {
        slideImgs = 3;
      } else {
        slideImgs = 1;
      }
    }

    function responsiveWrap() {
      $photo.each(function() {
        $(this).wrapAll("<div class='slide'></div>");
      });
    }

    function wrapSlide() {
      var photoNum = $photo.length;
      for (var i = 0; i < photoNum; i += 3) {
        $photo.slice(i, i + 3).wrapAll("<div class='slide'></div>");
      }
    }

    function slideSet() {
      if (windowWidth > 767) {
        wrapSlide();
      } else {
        responsiveWrap();
      }
    }

    function carouselHovering() {
      if (photoNum > 1) {
        $photo.stop(true, true).on('mouseenter', function() {
          windowWidth = viewport().width;
          if (windowWidth > 767) {
            if (!$(this).hasClass('active')) {
              $photo.not(this).stop(true, true).stop(true, true).removeClass("active");
              $(this).stop(true, true).stop(true, true).addClass("active");
              num = ((slideNum - 1) * 3) + $(".active").prevAll('.photo').length;
              captionNum = num + 1;
              caption = $(".articlecont").eq(captionNum - 1);
              $(".articlecont").stop(true, true).fadeTo(200, 0);
              if (caption.html() === 0) {
                captionNum = captionNum - 1;
              } else {
                caption.stop(true, true).fadeTo(50, 1);
              }
            }
          }
        });
      }
    }

    function carouselControls() {

      windowWidth = viewport().width;
      $slide = $('.slide');
      photoNum = $photo.length;
      $(".articlecont").eq(0).show();
      if (photoNum > 1) {
        $photo.eq(0).addClass('active');
      }
      if (windowWidth <= 767) {
        if (photoNum > 1) {
          $('.articalcont-wrap .carouselControls.right').hide();
          $('.prn-featured .carouselControls.right').show();
        }
      }
      if (photoNum > 3) {
        if (windowWidth > 767) {
          $('.articalcont-wrap .carouselControls.right').hide();
          $('.prn-featured .carouselControls.right').show();
        } else {
          $('.articalcont-wrap .carouselControls.right').hide();
          $('.prn-featured .carouselControls.right').show();
        }
      }
      carouselHovering();

      $(".carouselControls.right").stop(true, true).on("click", function() {
        slideItems();
        slideWidth = $('.photos').width();
        if (windowWidth > 767) {
          $('.articalcont-wrap .carouselControls.left').hide();
          $('.prn-featured .carouselControls.left').show();
        } else {
          $('.articalcont-wrap .carouselControls.left').hide();
          $('.prn-featured .carouselControls.left').show();
        }
        if (slideNum < slideCount) {
          $(".img_container").stop(true, true).animate({
            left: "-=" + slideWidth
          }, 800);
          slideNum += 1;
          if (slideNum === slideCount) {
            $(".carouselControls.right").hide();
          }
          $photo.removeClass("active");
          $slide.eq(slideNum - 1).find(".photo").first().addClass("active");
          num = ((slideNum - 1) * slideImgs);
          captionNum = num;
          caption = $(".articlecont").eq(captionNum);
          $(".articlecont").stop(true, true).fadeTo(100, 0);
          if (caption.html() === 0) {
            captionNum = num - 1;
          } else {
            caption.stop(true, true).fadeTo(50, 1);
          }
        }
      });

      $(".carouselControls.left").on("click", function() {
        slideWidth = $('.photos').width();
        $(".img_container").stop(true, true).animate({
          left: "+=" + slideWidth
        }, 800);
        slideNum -= 1;
        if (windowWidth > 767) {
          $('.articalcont-wrap .carouselControls.right').hide();
          $('.prn-featured .carouselControls.right').show();
        } else {
          $('.articalcont-wrap .carouselControls.right').hide();
          $('.prn-featured .carouselControls.right').show();
        }
        if (slideNum === 1) {
          $(".carouselControls.left").hide();
        }
        $photo.removeClass("active");
        $(".slide").eq(slideNum - 1).find(".photo").first().addClass("active");
        num = ((slideNum - 1) * slideImgs);
        captionNum = num;
        caption = $(".articlecont").eq(captionNum);
        $(".articlecont").stop(true, true).fadeTo(100, 0);
        if (caption.html() === 0) {
          captionNum = num - 1;
        } else {
          caption.stop(true, true).fadeTo(50, 1);
        }
      });

      $('.gallery-inner').hammer().on('swipeleft', '.img_container', function() {
        if (slideNum < slideCount) {
          slideItems();
          slideWidth = $('.photos').outerWidth();
          if (windowWidth > 767) {
            $('.articalcont-wrap .carouselControls.left').hide();
            $('.prn-featured .carouselControls.left').show();
          } else {
            $('.articalcont-wrap .carouselControls.left').hide();
          $('.prn-featured .carouselControls.left').show();
          }
          if (slideNum < slideCount - 1) {
            $(".img_container").stop(true, true).animate({
            left: "-=" + slideWidth
            }, 800);
            slideNum += 1;
            if (slideNum === slideCount - 1) {
              $(".carouselControls.right").hide();
            }
            $photo.removeClass("active");
            $slide.eq(slideNum - 1).find(".photo").first().addClass("active");
            num = ((slideNum - 1) * slideImgs);
            captionNum = num;
            caption = $(".articlecont").eq(captionNum);
            $(".articlecont").stop(true, true).fadeTo(100, 0);
            if (caption.html() === 0) {
              captionNum = num - 1;
            } else {
              caption.stop(true, true).fadeTo(50, 1);
            }
          }
        }
      });

      $('.gallery-inner').hammer().on('swiperight', '.img_container', function() {
        if (slideNum === 1) {} else {
          slideWidth = $('.photos').outerWidth();
          $(".img_container").stop(true, true).animate({
            left: "+=" + slideWidth
          }, 800);
          slideNum -= 1;
          if (windowWidth > 767) {
            $('.articalcont-wrap .carouselControls.right').hide();
            $('.prn-featured .carouselControls.right').show();
          } else {
            $('.articalcont-wrap .carouselControls.right').hide();
            $('.prn-featured .carouselControls.right').show();;
          }
          if (slideNum === 1) {
            $(".carouselControls.left").hide();
          }
          $photo.removeClass("active");
          $(".slide").eq(slideNum - 1).find(".photo").first().addClass("active");
          num = ((slideNum - 1) * slideImgs);
          captionNum = num;
          caption = $(".articlecont").eq(captionNum);
          $(".articlecont").stop(true, true).fadeTo(100, 0);
          if (caption.html() === 0) {
            captionNum = num - 1;
          } else {
            caption.stop(true, true).fadeTo(50, 1);
          }
        }
      });

      return carouselHovering;

    }

    function slideReset() {
      slideCount = $(".slide").length;
      photoNum = $photo.length;
      $(".carouselControls.right").hide();
      if (windowWidth > 767 && photoNum > 3) {
        $('.articalcont-wrap .carouselControls.right').hide();
        $('.prn-featured .carouselControls.right').show();
      } else if (windowWidth <= 767 && photoNum > 1) {
        $('.articalcont-wrap .carouselControls.right').hide();
        $('.prn-featured .carouselControls.right').show();
      }
      setSlideWidth();
      slideNum = 1;
      $(".articlecont").stop(true, true).fadeTo(0, 0);
      $(".articlecont").eq(0).stop(true, true).fadeTo(0, 1);
    }

    $(window).on({
      orientationchange: function() {
        windowWidth = viewport().width;
        setSlideWidth();
        if (windowWidth < 767) {
          $photo.unwrap();
          responsiveWrap();
          slideReset();
        } else {
          $photo.unwrap();
          wrapSlide();
          slideReset();
        }
        $(window).trigger('click');
      }
    });

    $(function() {
      slideSet();
      slideCount = $(".slide").length;
      setSlideWidth();
      carouselControls();
    });

    var clickedCarousel;
    var clickedSlide;
    var carouselContent = $('.prn-carousel-modal').html();
    $('.photo').hammer().on('tap', function(event) {
      event.preventDefault();
      windowWidth = $(window).width();
      clickedSlide = $(event.target).parents('.slide').prevAll().length;
      if (windowWidth > 480) {
        clickedCarousel = $(event.target).parents('.photo').prevAll().length + clickedSlide * 3;
      } else {
        clickedCarousel = clickedSlide;
      }
    });

    $('#flexslider-modal').on('shown.bs.modal', function() {
      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false,
        animationLoop: false,
        video: true,
        slideshow: false,
        touch: true,
        itemMargin: 45,
        sync: "#carousel",
        startAt: clickedCarousel,
        smoothHeight: true,
        useCSS: true, //thins type if true,
        start: function() {
          var sliderItem = $('#slider li').eq(clickedCarousel);
          var sliderItemHeight = sliderItem.outerHeight(true);
          $('#slider .flex-viewport').delay(2000).innerHeight(sliderItemHeight);
          $('.prn-carousel-modal .slides').animate({
            'opacity': '1'
          }, 500);
        },
        before: function() {
          var $activeJWPlayer = $('.flex-active-slide .jwplayer');
          if ($('.flex-active-slide .jwplayer').length > 0) {
            var activeVideoID = $activeJWPlayer.attr('id');
            jwplayer(activeVideoID).stop();
          }
        }
      });

      $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: true,
        animationLoop: false,
        slideshow: false,
        itemWidth: 150,
        itemMargin: 5,
        useCSS: true,
        prevText: "<i class='fa fa-chevron-left'></i>",
        nextText: "<i class='fa fa-chevron-right'></i>",
        asNavFor: '#slider',
        start: function() {
          $('#flexslider-modal #carousel li').eq(clickedCarousel).stop(true, true).trigger('click');
        }
      });
    }).on('hidden.bs.modal', function() {
      $('.prn-carousel-modal .modal-dialog').remove();
      $('.prn-carousel-modal').html(carouselContent);
    });

    (function preventModal() {
      if (windowWidth < 768) {
        $('a[data-toggle="modal"]').on('click touchend touchstart', function(event){
          event.stopPropagation();
        })
      }
    })();

  } // end of prnslider function
});
