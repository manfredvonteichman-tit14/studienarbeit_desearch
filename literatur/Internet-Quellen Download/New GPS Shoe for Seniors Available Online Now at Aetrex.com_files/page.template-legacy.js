// Default Template
// ==========

// Template Version
require(['prn.templateversion'],function(prnTemplateVersion){
  prnTemplateVersion();
});

// Site Catalyst
require(['prn.sitecatalyst'],function(prnSiteCatalyst){
  prnSiteCatalyst();
});

//Social Links
require(['prn.social-links'],function(prnSocialLinks){
  prnSocialLinks();
});

// Activate Lightbox
require(['prn.lightbox'],function(prnLightbox){
  prnLightbox();
});

// Site Preview
require(['prn.sitepreview'],function(prnSitePreview){
  prnSitePreview();
});

// Galleries
require(['prn.gallery-legacy'],function(prnLegacySlider) {
  prnLegacySlider();
});

// Infographic Overlay
require(['prn.info-overlay'],function(prnInfoOverlay){
  prnInfoOverlay();
});

// Carousel Modal Functions
require(['prn.modalcarousel'],function(prnCarousel){
  prnCarousel();
});

// GA Code
require(['prn.google.analytics'],function(prnGoogleAnalytics){
  prnGoogleAnalytics();
});
