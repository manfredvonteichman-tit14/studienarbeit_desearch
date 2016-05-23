( function( $ ) {
$( document ).ready(function() {
$('#servicebox ul ul li:odd').addClass('odd');
$('#servicebox ul ul li:even').addClass('even');
$('#servicebox ul li').first().removeClass('active');    
$('#servicebox ul li').first().addClass('active has-sub');
$('#servicebox ul li ul').first().css('display','block');
$('#servicebox > ul > li > a').hover(function () {

  $('#servicebox li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  /* if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
  $(this).closest('li').removeClass('active');
  checkElement.slideUp('normal');
  }*/
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
  $('#servicebox ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
});
});
} )( jQuery );
