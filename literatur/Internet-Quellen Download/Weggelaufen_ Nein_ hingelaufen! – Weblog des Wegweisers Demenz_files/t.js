function et_escape(param)
{
	return encodeURIComponent(param);
}

function et_unescape(param)
{
	return decodeURIComponent(param);
}

var et_checkOptInCookie = function(showDialog)
{
	if(et_getCookieValue('et_oi') === 'no')
	{
		return false;
	}

	if(showDialog && !document.cookie.match(/et_oi/gi))
	{
		et_showOptIn();
		return false;
	}

	return true;
};
var et_easy = 1;

function et_eC(param)
{
	et_secureId = param;

	et_imageSrc = et_server + '/' + et_cntScript + '?'+et_parameter() + et_addFpcParams();
	et_imageSrc = et_imageSrc.substr(0, et_maxUrlLength);

	if(et_first && !(false || true || et_optInActive) && !document.getElementById('et_image'))
	{
		document.write('<p id="et_image" style="display:none;"></p>');
	}

	et_createScriptTag(et_imageSrc);
}

function et_createCntImage(imgSrc, href)
{
	if(et_first)
	{
		et_first = false;

		var et_anchor = document.createElement('a');
		et_anchor.href = href;
		et_anchor.target = '_blank';
		et_anchor.innerHTML = '<img style="border:0px;" alt="" src="'+imgSrc+'">';

		et_appendCntImage(et_anchor);
	}
	else
	{
		var et_image=new Image();
		et_image.src = et_imageSrc;
	}
}if(typeof(et_proxy_redirect) == 'undefined' || typeof(et_proxy_redirect) == 'unknown' || et_proxy_redirect == '')
{
	var et_server = '//www.etracker.de';
	var et_vm_server = '//www.etracker.de/vm';
	var et_vv_server = '//visitorvoice.etracker.com/';
	var et_code_server = '//code.etracker.com';
}
else
{
	var et_server = et_proxy_redirect;
	var et_vm_server = et_proxy_redirect + '/vm';
	var et_vv_server = et_proxy_redirect + '/vv/';
	var et_code_server = et_proxy_redirect;
}

var et_ver = '4.0';
var et_panelLink      = et_server + '/app?et=';
var et_cntScript    = 'cnt_js.php';
var et_secureId     = 'h5E0gg';
var et_maxUrlLength = 8190;
var et_deliveryHash = "3vzsdkfaweJ1b8RKucZLeA==";
var et_pd_etpl, et_pd_i, et_pd_k, et_pd_s,
	et_pd_maxfl	= 15,
	et_pd_maxsh	= 15,
	et_pd_maxqt	= 15,
	et_pd_maxsl = 4,
	et_pd_v		= 1.0,
	et_pd_js	= 0,
	et_pd_ag	= navigator.userAgent.toLowerCase(),
	et_pd_z		= 0,
	et_pd_a		= [30],
	et_pd_eta	= "Adobe Acrobat ",
	et_pd_eti	= " Plug-in",
	et_pd_etm	= "Windows Media Video",
	et_pd_etp	= "PDF.PdfCtrl.",
	et_pd_etq	= "QuickTime",
	et_pd_etr	= "RealPlayer(tm)",
	et_pl	    = "Shockwave",
	et_pd_ud	= "undefined",
	et_blockPlugin  = et_blockPlugin ||false;var et_host		= '//application.etracker.com/';
var et_cntHost	= et_server + '/';
var et_et   	= 'h5E0gg';
var et_urlParamLink = [];
var et_ibrowse  = 0;
var et_ibrowsev = 99;
var et_safari   = 0;
var et_o		= 0;
var et_ff	   = 0;



var et_location, et_top, et_sendloc;
try
{
	et_location = top.location.search;
	et_sendloc = top.location.search;
	et_top = top.location;
}
catch(e)
{
}
				
if(typeof(et_location) == 'undefined' || typeof(et_sendloc) == 'undefined')
{
	et_location = window.location.search;
    et_sendloc = window.location.search;
    et_top = window.location;
}
function et_spLink( url ) 
{
	if(!url) return '';
	url = url.replace(/#.*/gi, '');
	url = et_removeUrlParamLink(url);
	url = url.replace(/\?.*/gi, '');
	return url; 
}
function et_spPage( url ) 
{
	return et_spLink( url ); 
}

var et_links		= 1;
var et_toppos		= 0;
var et_leftpos	  	= 0;
var et_overlay		= 0;
var et_gauged		= 0;
var et_px			= 0;
var et_py			= 0;
var et_direction	= 1;
var et_blockOverlay = false;
var et_overlayLimit = 100;ET_Event = new etEvent("h5E0gg", et_server);
var cc_cntScript    = 'cntcc';
var cc_genericEventPath = '/api/tracking/v5/webEvents';
var cc_deltaTime 	= 14642529628070-(new Date().getTime()*10);
var cc_codecVersion	= 1;
var cc_apiVersion	= '1.1.2';
var cc_articleDivider = '|';
var cc_itemDivider	= ';';
var cc_active = true;

function _etc_start()
{
	var c = "";

	if(!et_blockPlugin)
		et_pd();		et_eC('h5E0gg');
		if (typeof _etracker.setFirstPixelSent == 'function')
			_etracker.setFirstPixelSent();
		if (typeof _etracker.doWrapperCalls == 'function')
			_etracker.doWrapperCalls();
	if(!et_blockOverlay)
	{
		_etracker.addOnLoad(et_iO);
	}	et_cc('h5E0gg');
	etCommerce.etCommerceLoad('h5E0gg');
	etCommerce.doPreparedEvents();if(c != '') {var x = document.createElement('div');x.innerHTML = c;var et_bodyInterval = window.setInterval(function(){if(document.body) {window.clearInterval(et_bodyInterval);document.body.appendChild(x);}}, 1);}	}

	var _etc = function() {
		if(et_checkOptInCookie(0)) {
			_etc_start();
		}
	};

_etracker.setReady();