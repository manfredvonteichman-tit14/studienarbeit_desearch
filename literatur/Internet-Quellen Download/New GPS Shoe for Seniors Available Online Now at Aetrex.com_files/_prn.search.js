define(['jquery'], function ($) {
  var navCover = $('.nav-cover');

  $('.modal.modal-qs-search').on('show.bs.modal', function() {
    navCover.fadeIn();
  }).on('shown.bs.modal', function () {
    $('.modal-qs-search input').focus();
  });
  $('.modal.modal-qs-search').on('hide.bs.modal', function() {
    navCover.fadeOut();
  }).on('hidden.bs.modal', function(event){
    setTimeout(function(){
      $('[data-target="#search-modal"]').blur();
      navCover.fadeOut();
    });
  });
  $('.form-search').on('input', function () {
    if ($(this).val() !== '') {
      $(this).next().children().prop('disabled', false);
    } else {
      $(this).next().children().prop('disabled', true);
    }
  }); // end input event

});
