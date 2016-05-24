define(['jquery'],function($){
  return function prnInfoOverlay(){
    var $infoOverlay = $('figure .image.infographic a');
    var $infoOverlayDiv = $('<div/>', {
      class: 'info-overlay hidden-xs'
    });
    function addInfoOverlay() {
      $infoOverlay.prepend($infoOverlayDiv);
    }
    addInfoOverlay();
  }
});
