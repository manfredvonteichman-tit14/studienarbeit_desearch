define(['jquery','bootstrap','viewport','lightbox'],function($){
  return function prnLightbox(){
    if (viewport().width >= 768) {
      $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
          left_arrow_class: '.fa .fa-angle-left',
          right_arrow_class: '.fa .fa-angle-right',
          socialShare: '<div class="social"><ul><li id="facebook"><a href=""><span class="fa fa-facebook"></span></a></li><li id="twitter"><a href=""><span class="fa fa-twitter"></span></a></li><li id="pinterest"><a href=""><span class="fa fa-pinterest"></span></a></li><li id="download"><a href=""><span class="fa fa-download"></span></a></li></ul></div>'
        });
      });
    }
    else {
      $(document).delegate('*[data-type="image"]', 'click', function(event) {
        event.preventDefault();
      });
    }
  }
});
