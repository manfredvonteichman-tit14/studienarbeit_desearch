require.config({
    baseUrl: '/includes/',
    // set paths to libraries/plugins/scripts
    paths: {
        'jquery': 'jquery',
        'jquery-ui': 'lib.jquery-ui.min',
        'masonry': 'masonry.pkgd',
        'imagesloaded': 'imagesloaded.pkgd',
        'viewport': 'viewport',
        'waypoints': 'jquery.waypoints',
        'inview': 'inview',
        'lightbox': 'ekko-lightbox',
        'flickity': 'flickity.pkgd',
        'flexslider': 'lib.flexslider.min',
        'bridget': 'jquery.bridget',
        'bootstrap': 'bootstrap',
        'datepicker': 'lib.bootstrap-datepicker',
        'mmenu': 'lib.jquery.mmenu.min.all',
        'isotope': 'lib.isotope.pkgd.min',
        'hammer': 'lib.jquery.hammer',        
        'prn.mobilenav': 'prn.mobilenav',
        'prn.footer': 'prn.footer',
        'prn.datepicker': 'prn.datepicker',
        'prn.masonry': 'prn.masonry',
        'prn.lightbox': 'prn.lightbox',
        'prn.sitepreview': 'prn.sitepreview',
        'prn.marketingpromo': 'prn.marketingpromo',
        'prn.marketingpersona': 'prn.marketingpersona',
        'prn.info-overlay': 'prn.info-overlay',
        'prn.gallerycarousel': 'prn.gallerycarousel',
        'prn.gallery-legacy': 'prn.gallery-legacy',
        'prn.gallery-legacy-two': 'prn.gallery-legacy-two',
        'prn.search': 'prn.search',
        'page.advanced-search': 'page.advanced-search',
        'prn.subnav': 'prn.subnav',
        'prn.stickynav': 'prn.stickynav',
        'prn.share': 'prn.share',
        'page.multimedia': 'page.multimedia',
        'prn.footerfixed.mkt': 'prn.footerfixed.mkt',
        'prn.carousel': 'prn.carousel',
        'prn.promo-height': 'prn.promo-height',
        'prn.omniture': 'prn.omniture',
        'prn.twitter': 'prn.twitter',
        'PRNR_search': 'PRNR_search',
		'prn.templateversion': 'prn.templateversion',
		'prn.newstogram': 'prn.newstogram',
		'prn.modalcarousel': 'prn.modalcarousel',
		'prn.tickers': 'prn.tickers',
		'prn.social-links': 'prn.social-links',
		'prn.google.analytics': 'prn.google.analytics',	
		'prn.floodlight': 'prn.floodlight',
		'prn.sitecatalyst': 'prn.sitecatalyst'
    },
    // set dependencies
    shim: {
        'bootstrap': {
            'deps': ['jquery']
        },
        'datepicker': {
            'deps': ['jquery', 'bootstrap']
        },
        'masonry': {
            'deps': ['imagesloaded', 'bridget']
        },
        'isotope': {
            'deps': ['imagesloaded', 'bridget']
        },
        'viewport': {
            'deps': ['jquery']
        },
        'lightbox': {
            'deps': ['jquery', 'viewport']
        },
        'flickity': {
            'deps': ['jquery', 'bridget']
        },
        'flexslider': {
            'deps': ['jquery']
        },
        'bridget': {
            'deps': ['jquery']
        },
        'waypoints': {
            'deps': ['jquery']
        },
        'inview': {
            'deps': ['jquery', 'waypoints']
        },
        'mmenu': {
            'deps': ['jquery']
        },
        'prn.fbshare': {
            'exports': 'fbshare'
        },
        'imagesloaded': {
            'deps': ['jquery']
        },
        'hammer': {
            'deps': ['jquery']
        },
        'jquery-ui': {
            'deps': ['jquery']
        }
    }
});

require(['jquery', 'bootstrap']);
require(['jquery', 'prn.search']);
require(['jquery', 'prn.stickynav']);
require(['jquery', 'prn.mobilenav']);
require(['jquery', 'prn.subnav']);
require(['jquery', 'prn.footer']);
require(['jquery', 'prn.share']);
require(['jquery', 'PRNR_search']);
require(['jquery', 'prn.twitter']);
require(['jquery', 'prn.omniture']);
