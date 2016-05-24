// Footer
// ===

define(['jquery'], function($) {
  $('.global-sites').on('show.bs.dropdown hide.bs.dropdown', function() {
    $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
  });
});
