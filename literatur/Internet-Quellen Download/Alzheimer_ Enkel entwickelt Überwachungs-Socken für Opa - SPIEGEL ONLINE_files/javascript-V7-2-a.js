
spnetENV_DEFAULT_DOMAIN 	= 'www.spiegel.de';

		spnetENV_SERVER 		= window.location.protocol + '/' + '/www.spiegel.de';
		spnetENV_SERVER_SSL 	= 'https:/' + '/www.spiegel.de';
	

var spnetENV_CSS_VERSION='7-2';
var spnetENV_JS_VERSION='7-2';

var spnetENV_JWPLAYER_KEY = '6vGg1pMcuxNYA9KEtHWcw1kNq5bhLmvm7XUGzA==';
var spnetENV_JWPLAYER_ADMESSAGE = 'XX Sekunden Werbung';
var spnetENV_NOFLASHPLAYER_LINK = '<a href="/dienste/a-677871.html">mehr...</a>';
var spnetENV_VIDEOPLAYER_PLAYBUTTON_BIG = '<img src="/static/sys/v10/buttons/but_video_2_big.png"   alt="Video" class="btn-video-text-large" />';

spnetENV_ForumSponDeServer = 'http:/'+'/app.forum.spiegel.de';
spnetENV_SponUploadServer = 'http:/'+'/upl.spiegel.de';
spnetENV_MapShowCategories = ('true' == 'true');

var _sf_startpt=(new Date()).getTime();
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*!
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function( jQuery, window, undefined ) {
// See http://bugs.jquery.com/ticket/13335
// "use strict";


var warnedAbout = {};

// List of warnings already given; public read only
jQuery.migrateWarnings = [];

// Set to true to prevent console output; migrateWarnings still maintained
// jQuery.migrateMute = false;

// Show a message on the console so devs know we're active
if ( !jQuery.migrateMute && window.console && window.console.log ) {
//	window.console.log("JQMIGRATE: Logging is active");
}

// Set to false to disable traces that appear with warnings
if ( jQuery.migrateTrace === undefined ) {
	jQuery.migrateTrace = true;
}

// Forget any warnings we've already given; public
jQuery.migrateReset = function() {
	warnedAbout = {};
	jQuery.migrateWarnings.length = 0;
};

function migrateWarn( msg) {
	var console = window.console;
	if ( !warnedAbout[ msg ] ) {
		warnedAbout[ msg ] = true;
		jQuery.migrateWarnings.push( msg );
//		if (typeof spnetENV_TARGET != 'undefined' || typeof spnetENV_STAGE != 'undefined') {
//			if ( console && console.warn && !jQuery.migrateMute ) {
//				console.warn( "JQMIGRATE: " + msg );
//				if ( jQuery.migrateTrace && console.trace ) {
//					console.trace();
//				}
//			}
//		}
		var timeout = 5000;
		if (typeof spNmAjax == 'function') timeout = 10;
		window.setTimeout(
			function() {
				try {
					spNmAjax({
						'sp.site': '102001',
						'sp.event': 'jqm-01',
						'sp.msg': msg
					});
				} catch (e) {}
			}, timeout);
	}
}

function migrateWarnProp( obj, prop, value, msg ) {
	if ( Object.defineProperty ) {
		// On ES5 browsers (non-oldIE), warn if the code tries to get prop;
		// allow property to be overwritten in case some other plugin wants it
		try {
			Object.defineProperty( obj, prop, {
				configurable: true,
				enumerable: true,
				get: function() {
					migrateWarn( msg );
					return value;
				},
				set: function( newValue ) {
					migrateWarn( msg );
					value = newValue;
				}
			});
			return;
		} catch( err ) {
			// IE8 is a dope about Object.defineProperty, can't warn there
		}
	}

	// Non-ES5 (or broken) browser; just set the property
	jQuery._definePropertyBroken = true;
	obj[ prop ] = value;
}

if ( document.compatMode === "BackCompat" ) {
	// jQuery has never supported or tested Quirks Mode
	migrateWarn( "jQuery is not compatible with Quirks Mode" );
}


var attrFn = jQuery( "<input/>", { size: 1 } ).attr("size") && jQuery.attrFn,
	oldAttr = jQuery.attr,
	valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get ||
		function() { return null; },
	valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set ||
		function() { return undefined; },
	rnoType = /^(?:input|button)$/i,
	rnoAttrNodeType = /^[238]$/,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	ruseDefault = /^(?:checked|selected)$/i;

// jQuery.attrFn
migrateWarnProp( jQuery, "attrFn", attrFn || {}, "jQuery.attrFn is deprecated" );

jQuery.attr = function( elem, name, value, pass ) {
	var lowerName = name.toLowerCase(),
		nType = elem && elem.nodeType;

	if ( pass ) {
		// Since pass is used internally, we only warn for new jQuery
		// versions where there isn't a pass arg in the formal params
		if ( oldAttr.length < 4 ) {
			migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
		}
		if ( elem && !rnoAttrNodeType.test( nType ) &&
			(attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name])) ) {
			return jQuery( elem )[ name ]( value );
		}
	}

	// Warn if user tries to set `type`, since it breaks on IE 6/7/8; by checking
	// for disconnected elements we don't warn on $( "<button>", { type: "button" } ).
	if ( name === "type" && value !== undefined && rnoType.test( elem.nodeName ) && elem.parentNode ) {
		migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
	}

	// Restore boolHook for boolean property/attribute synchronization
	if ( !jQuery.attrHooks[ lowerName ] && rboolean.test( lowerName ) ) {
		jQuery.attrHooks[ lowerName ] = {
			get: function( elem, name ) {
				// Align boolean attributes with corresponding properties
				// Fall back to attribute presence where some booleans are not supported
				var attrNode,
					property = jQuery.prop( elem, name );
				return property === true || typeof property !== "boolean" &&
					( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?

					name.toLowerCase() :
					undefined;
			},
			set: function( elem, value, name ) {
				var propName;
				if ( value === false ) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr( elem, name );
				} else {
					// value is true since we know at this point it's type boolean and not false
					// Set boolean attributes to the same name and set the DOM property
					propName = jQuery.propFix[ name ] || name;
					if ( propName in elem ) {
						// Only set the IDL specifically if it already exists on the element
						elem[ propName ] = true;
					}

					elem.setAttribute( name, name.toLowerCase() );
				}
				return name;
			}
		};

		// Warn only for attributes that can remain distinct from their properties post-1.9
		if ( ruseDefault.test( lowerName ) ) {
			migrateWarn( "jQuery.fn.attr('" + lowerName + "') may use property instead of attribute" );
		}
	}

	return oldAttr.call( jQuery, elem, name, value );
};

// attrHooks: value
jQuery.attrHooks.value = {
	get: function( elem, name ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrGet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value') no longer gets properties");
		}
		return name in elem ?
			elem.value :
			null;
	},
	set: function( elem, value ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrSet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
		}
		// Does not return so that setAttribute is also used
		elem.value = value;
	}
};


var matched, browser,
	oldInit = jQuery.fn.init,
	oldParseJSON = jQuery.parseJSON,
	// Note: XSS check is done below after string is trimmed
	rquickExpr = /^([^<]*)(<[\w\W]+>)([^>]*)$/;

// $(html) "looks like html" rule change
jQuery.fn.init = function( selector, context, rootjQuery ) {
	var match;

	if ( selector && typeof selector === "string" && !jQuery.isPlainObject( context ) &&
			(match = rquickExpr.exec( jQuery.trim( selector ) )) && match[ 0 ] ) {
		// This is an HTML string according to the "old" rules; is it still?
		if ( selector.charAt( 0 ) !== "<" ) {
			migrateWarn("$(html) HTML strings must start with '<' character");
		}
		if ( match[ 3 ] ) {
			migrateWarn("$(html) HTML text after last tag is ignored");
		}
		// Consistently reject any HTML-like string starting with a hash (#9521)
		// Note that this may break jQuery 1.6.x code that otherwise would work.
		if ( match[ 0 ].charAt( 0 ) === "#" ) {
			migrateWarn("HTML string cannot start with a '#' character");
			jQuery.error("JQMIGRATE: Invalid selector string (XSS)");
		}
		// Now process using loose rules; let pre-1.8 play too
		if ( context && context.context ) {
			// jQuery object as context; parseHTML expects a DOM object
			context = context.context;
		}
		if ( jQuery.parseHTML ) {
			return oldInit.call( this, jQuery.parseHTML( match[ 2 ], context, true ),
					context, rootjQuery );
		}
	}
	return oldInit.apply( this, arguments );
};
jQuery.fn.init.prototype = jQuery.fn;

// Let $.parseJSON(falsy_value) return null
jQuery.parseJSON = function( json ) {
	if ( !json && json !== null ) {
		migrateWarn("jQuery.parseJSON requires a valid JSON string");
		return null;
	}
	return oldParseJSON.apply( this, arguments );
};

jQuery.sub = function() {
	function jQuerySub( selector, context ) {
		return new jQuerySub.fn.init( selector, context );
	}
	jQuery.extend( true, jQuerySub, this );
	jQuerySub.superclass = this;
	jQuerySub.fn = jQuerySub.prototype = this();
	jQuerySub.fn.constructor = jQuerySub;
	jQuerySub.sub = this.sub;
	jQuerySub.fn.init = function init( selector, context ) {
		if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
			context = jQuerySub( context );
		}

		return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
	};
	jQuerySub.fn.init.prototype = jQuerySub.fn;
	var rootjQuerySub = jQuerySub(document);
	migrateWarn( "jQuery.sub() is deprecated" );
	return jQuerySub;
};


// Ensure that $.ajax gets the new parseJSON defined in core.js
jQuery.ajaxSetup({
	converters: {
		"text json": jQuery.parseJSON
	}
});


var oldFnData = jQuery.fn.data;

jQuery.fn.data = function( name ) {
	var ret, evt,
		elem = this[0];

	// Handles 1.7 which has this behavior and 1.8 which doesn't
	if ( elem && name === "events" && arguments.length === 1 ) {
		ret = jQuery.data( elem, name );
		evt = jQuery._data( elem, name );
		if ( ( ret === undefined || ret === evt ) && evt !== undefined ) {
			migrateWarn("Use of jQuery.fn.data('events') is deprecated");
			return evt;
		}
	}
	return oldFnData.apply( this, arguments );
};


var rscriptType = /\/(java|ecma)script/i,
	oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;

jQuery.fn.andSelf = function() {
	migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
	return oldSelf.apply( this, arguments );
};

// Since jQuery.clean is used internally on older versions, we only shim if it's missing
if ( !jQuery.clean ) {
	jQuery.clean = function( elems, context, fragment, scripts ) {
		// Set context per 1.8 logic
		context = context || document;
		context = !context.nodeType && context[0] || context;
		context = context.ownerDocument || context;

		migrateWarn("jQuery.clean() is deprecated");

		var i, elem, handleScript, jsTags,
			ret = [];

		jQuery.merge( ret, jQuery.buildFragment( elems, context ).childNodes );

		// Complex logic lifted directly from jQuery 1.8
		if ( fragment ) {
			// Special handling of each script element
			handleScript = function( elem ) {
				// Check if we consider it executable
				if ( !elem.type || rscriptType.test( elem.type ) ) {
					// Detach the script and store it in the scripts array (if provided) or the fragment
					// Return truthy to indicate that it has been handled
					return scripts ?
						scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
						fragment.appendChild( elem );
				}
			};

			for ( i = 0; (elem = ret[i]) != null; i++ ) {
				// Check if we're done after handling an executable script
				if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
					// Append to fragment and handle embedded scripts
					fragment.appendChild( elem );
					if ( typeof elem.getElementsByTagName !== "undefined" ) {
						// handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
						jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );

						// Splice the scripts into ret after their former ancestor and advance our index beyond them
						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
						i += jsTags.length;
					}
				}
			}
		}

		return ret;
	};
}

var eventAdd = jQuery.event.add,
	eventRemove = jQuery.event.remove,
	eventTrigger = jQuery.event.trigger,
	oldToggle = jQuery.fn.toggle,
	oldLive = jQuery.fn.live,
	oldDie = jQuery.fn.die,
	ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
	rajaxEvent = new RegExp( "\\b(?:" + ajaxEvents + ")\\b" ),
	rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
	hoverHack = function( events ) {
		if ( typeof( events ) !== "string" || jQuery.event.special.hover ) {
			return events;
		}
		if ( rhoverHack.test( events ) ) {
			migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
		}
		return events && events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

// Event props removed in 1.9, put them back if needed; no practical way to warn them
if ( jQuery.event.props && jQuery.event.props[ 0 ] !== "attrChange" ) {
	jQuery.event.props.unshift( "attrChange", "attrName", "relatedNode", "srcElement" );
}

// Undocumented jQuery.event.handle was "deprecated" in jQuery 1.7
if ( jQuery.event.dispatch ) {
	migrateWarnProp( jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated" );
}

// Support for 'hover' pseudo-event and ajax event warnings
jQuery.event.add = function( elem, types, handler, data, selector ){
	if ( elem !== document && rajaxEvent.test( types ) ) {
		migrateWarn( "AJAX events should be attached to document: " + types );
	}
	eventAdd.call( this, elem, hoverHack( types || "" ), handler, data, selector );
};
jQuery.event.remove = function( elem, types, handler, selector, mappedTypes ){
	eventRemove.call( this, elem, hoverHack( types ) || "", handler, selector, mappedTypes );
};

jQuery.fn.error = function() {
	var args = Array.prototype.slice.call( arguments, 0);
	migrateWarn("jQuery.fn.error() is deprecated");
	args.splice( 0, 0, "error" );
	if ( arguments.length ) {
		return this.bind.apply( this, args );
	}
	// error event should not bubble to window, although it does pre-1.7
	this.triggerHandler.apply( this, args );
	return this;
};

jQuery.fn.toggle = function( fn, fn2 ) {

	// Don't mess with animation or css toggles
	if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
		return oldToggle.apply( this, arguments );
	}
	migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");

	// Save reference to arguments for access in closure
	var args = arguments,
		guid = fn.guid || jQuery.guid++,
		i = 0,
		toggler = function( event ) {
			// Figure out which function to execute
			var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
			jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

			// Make sure that clicks stop
			event.preventDefault();

			// and execute the function
			return args[ lastToggle ].apply( this, arguments ) || false;
		};

	// link all the functions, so any of them can unbind this click handler
	toggler.guid = guid;
	while ( i < args.length ) {
		args[ i++ ].guid = guid;
	}

	return this.click( toggler );
};

jQuery.fn.live = function( types, data, fn ) {
	migrateWarn("jQuery.fn.live() is deprecated");
	if ( oldLive ) {
		return oldLive.apply( this, arguments );
	}
	jQuery( this.context ).on( types, this.selector, data, fn );
	return this;
};

jQuery.fn.die = function( types, fn ) {
	migrateWarn("jQuery.fn.die() is deprecated");
	if ( oldDie ) {
		return oldDie.apply( this, arguments );
	}
	jQuery( this.context ).off( types, this.selector || "**", fn );
	return this;
};

// Turn global events into document-triggered events
jQuery.event.trigger = function( event, data, elem, onlyHandlers  ){
	if ( !elem && !rajaxEvent.test( event ) ) {
		migrateWarn( "Global events are undocumented and deprecated" );
	}
	return eventTrigger.call( this,  event, data, elem || document, onlyHandlers  );
};
jQuery.each( ajaxEvents.split("|"),
	function( _, name ) {
		jQuery.event.special[ name ] = {
			setup: function() {
				var elem = this;

				// The document needs no shimming; must be !== for oldIE
				if ( elem !== document ) {
					jQuery.event.add( document, name + "." + jQuery.guid, function() {
						jQuery.event.trigger( name, null, elem, true );
					});
					jQuery._data( this, name, jQuery.guid++ );
				}
				return false;
			},
			teardown: function() {
				if ( this !== document ) {
					jQuery.event.remove( document, name + "." + jQuery._data( this, name ) );
				}
				return false;
			}
		};
	}
);


})( jQuery, window );
/*!
 * Spon jquery migration helper
 * provide jQuery.browser
 */

(function( jQuery, window, undefined ) {
	jQuery.uaMatch = function( ua ) {
		ua = ua.toLowerCase();

		var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
			/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
			/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
			/(msie) ([\w.]+)/.exec( ua ) ||
			ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
			[];

		return {
			browser: match[ 1 ] || "",
			version: match[ 2 ] || "0"
		};
	};	
	
	if ( !jQuery.browser ) {
		matched = jQuery.uaMatch( navigator.userAgent );
		browser = {};

		if ( matched.browser ) {
			browser[ matched.browser ] = true;
			browser.version = matched.version;
		}

		// Chrome is Webkit, but Webkit is also Safari.
		if ( browser.chrome ) {
			browser.webkit = true;
		} else if ( browser.webkit ) {
			browser.safari = true;
		}

		jQuery.browser = browser;
	}
	
})( jQuery, window );
/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);
/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( event.wheelDelta ) { delta = event.wheelDelta/120; }
    if ( event.detail     ) { delta = -event.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return $.event.dispatch.apply(this, args);
}

})(jQuery);/*
 * jScrollPane - v2.0.0beta11 - 2011-07-04
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */
(function(b,a,c){b.fn.jScrollPane=function(e){function d(D,O){var az,Q=this,Y,ak,v,am,T,Z,y,q,aA,aF,av,i,I,h,j,aa,U,aq,X,t,A,ar,af,an,G,l,au,ay,x,aw,aI,f,L,aj=true,P=true,aH=false,k=false,ap=D.clone(false,false).empty(),ac=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";aI=D.css("paddingTop")+" "+D.css("paddingRight")+" "+D.css("paddingBottom")+" "+D.css("paddingLeft");f=(parseInt(D.css("paddingLeft"),10)||0)+(parseInt(D.css("paddingRight"),10)||0);function at(aR){var aM,aO,aN,aK,aJ,aQ,aP=false,aL=false;az=aR;if(Y===c){aJ=D.scrollTop();aQ=D.scrollLeft();D.css({overflow:"hidden",padding:0});ak=D.innerWidth()+f;v=D.innerHeight();D.width(ak);Y=b('<div class="jspPane" />').css("padding",aI).append(D.children());am=b('<div class="jspContainer" />').css({width:ak+"px",height:v+"px"}).append(Y).appendTo(D)}else{D.css("width","");aP=az.stickToBottom&&K();aL=az.stickToRight&&B();aK=D.innerWidth()+f!=ak||D.outerHeight()!=v;if(aK){ak=D.innerWidth()+f;v=D.innerHeight();am.css({width:ak+"px",height:v+"px"})}if(!aK&&L==T&&Y.outerHeight()==Z){D.width(ak);return}L=T;Y.css("width","");D.width(ak);am.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Y.css("overflow","auto");if(aR.contentWidth){T=aR.contentWidth}else{T=Y[0].scrollWidth}Z=Y[0].scrollHeight;Y.css("overflow","");y=T/ak;q=Z/v;aA=q>1;aF=y>1;if(!(aF||aA)){D.removeClass("jspScrollable");Y.css({top:0,width:am.width()-f});n();E();R();w();ai()}else{D.addClass("jspScrollable");aM=az.maintainPosition&&(I||aa);if(aM){aO=aD();aN=aB()}aG();z();F();if(aM){N(aL?(T-ak):aO,false);M(aP?(Z-v):aN,false)}J();ag();ao();if(az.enableKeyboardNavigation){S()}if(az.clickOnTrack){p()}C();if(az.hijackInternalLinks){m()}}if(az.autoReinitialise&&!aw){aw=setInterval(function(){at(az)},az.autoReinitialiseDelay)}else{if(!az.autoReinitialise&&aw){clearInterval(aw)}}aJ&&D.scrollTop(0)&&M(aJ,false);aQ&&D.scrollLeft(0)&&N(aQ,false);D.trigger("jsp-initialised",[aF||aA])}function aG(){if(aA){am.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));U=am.find(">.jspVerticalBar");aq=U.find(">.jspTrack");av=aq.find(">.jspDrag");if(az.showArrows){ar=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aE(0,-1)).bind("click.jsp",aC);af=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aE(0,1)).bind("click.jsp",aC);if(az.arrowScrollOnHover){ar.bind("mouseover.jsp",aE(0,-1,ar));af.bind("mouseover.jsp",aE(0,1,af))}al(aq,az.verticalArrowPositions,ar,af)}t=v;am.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){t-=b(this).outerHeight()});av.hover(function(){av.addClass("jspHover")},function(){av.removeClass("jspHover")}).bind("mousedown.jsp",function(aJ){b("html").bind("dragstart.jsp selectstart.jsp",aC);av.addClass("jspActive");var s=aJ.pageY-av.position().top;b("html").bind("mousemove.jsp",function(aK){V(aK.pageY-s,false)}).bind("mouseup.jsp mouseleave.jsp",ax);return false});o()}}function o(){aq.height(t+"px");I=0;X=az.verticalGutter+aq.outerWidth();Y.width(ak-X-f);try{if(U.position().left===0){Y.css("margin-left",X+"px")}}catch(s){}}function z(){if(aF){am.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));an=am.find(">.jspHorizontalBar");G=an.find(">.jspTrack");h=G.find(">.jspDrag");if(az.showArrows){ay=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aE(-1,0)).bind("click.jsp",aC);x=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aE(1,0)).bind("click.jsp",aC);
if(az.arrowScrollOnHover){ay.bind("mouseover.jsp",aE(-1,0,ay));x.bind("mouseover.jsp",aE(1,0,x))}al(G,az.horizontalArrowPositions,ay,x)}h.hover(function(){h.addClass("jspHover")},function(){h.removeClass("jspHover")}).bind("mousedown.jsp",function(aJ){b("html").bind("dragstart.jsp selectstart.jsp",aC);h.addClass("jspActive");var s=aJ.pageX-h.position().left;b("html").bind("mousemove.jsp",function(aK){W(aK.pageX-s,false)}).bind("mouseup.jsp mouseleave.jsp",ax);return false});l=am.innerWidth();ah()}}function ah(){am.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){l-=b(this).outerWidth()});G.width(l+"px");aa=0}function F(){if(aF&&aA){var aJ=G.outerHeight(),s=aq.outerWidth();t-=aJ;b(an).find(">.jspCap:visible,>.jspArrow").each(function(){l+=b(this).outerWidth()});l-=s;v-=s;ak-=aJ;G.parent().append(b('<div class="jspCorner" />').css("width",aJ+"px"));o();ah()}if(aF){Y.width((am.outerWidth()-f)+"px")}Z=Y.outerHeight();q=Z/v;if(aF){au=Math.ceil(1/y*l);if(au>az.horizontalDragMaxWidth){au=az.horizontalDragMaxWidth}else{if(au<az.horizontalDragMinWidth){au=az.horizontalDragMinWidth}}h.width(au+"px");j=l-au;ae(aa)}if(aA){A=Math.ceil(1/q*t);if(A>az.verticalDragMaxHeight){A=az.verticalDragMaxHeight}else{if(A<az.verticalDragMinHeight){A=az.verticalDragMinHeight}}av.height(A+"px");i=t-A;ad(I)}}function al(aK,aM,aJ,s){var aO="before",aL="after",aN;if(aM=="os"){aM=/Mac/.test(navigator.platform)?"after":"split"}if(aM==aO){aL=aM}else{if(aM==aL){aO=aM;aN=aJ;aJ=s;s=aN}}aK[aO](aJ)[aL](s)}function aE(aJ,s,aK){return function(){H(aJ,s,this,aK);this.blur();return false}}function H(aM,aL,aP,aO){aP=b(aP).addClass("jspActive");var aN,aK,aJ=true,s=function(){if(aM!==0){Q.scrollByX(aM*az.arrowButtonSpeed)}if(aL!==0){Q.scrollByY(aL*az.arrowButtonSpeed)}aK=setTimeout(s,aJ?az.initialDelay:az.arrowRepeatFreq);aJ=false};s();aN=aO?"mouseout.jsp":"mouseup.jsp";aO=aO||b("html");aO.bind(aN,function(){aP.removeClass("jspActive");aK&&clearTimeout(aK);aK=null;aO.unbind(aN)})}function p(){w();if(aA){aq.bind("mousedown.jsp",function(aO){if(aO.originalTarget===c||aO.originalTarget==aO.currentTarget){var aM=b(this),aP=aM.offset(),aN=aO.pageY-aP.top-I,aK,aJ=true,s=function(){var aS=aM.offset(),aT=aO.pageY-aS.top-A/2,aQ=v*az.scrollPagePercent,aR=i*aQ/(Z-v);if(aN<0){if(I-aR>aT){Q.scrollByY(-aQ)}else{V(aT)}}else{if(aN>0){if(I+aR<aT){Q.scrollByY(aQ)}else{V(aT)}}else{aL();return}}aK=setTimeout(s,aJ?az.initialDelay:az.trackClickRepeatFreq);aJ=false},aL=function(){aK&&clearTimeout(aK);aK=null;b(document).unbind("mouseup.jsp",aL)};s();b(document).bind("mouseup.jsp",aL);return false}})}if(aF){G.bind("mousedown.jsp",function(aO){if(aO.originalTarget===c||aO.originalTarget==aO.currentTarget){var aM=b(this),aP=aM.offset(),aN=aO.pageX-aP.left-aa,aK,aJ=true,s=function(){var aS=aM.offset(),aT=aO.pageX-aS.left-au/2,aQ=ak*az.scrollPagePercent,aR=j*aQ/(T-ak);if(aN<0){if(aa-aR>aT){Q.scrollByX(-aQ)}else{W(aT)}}else{if(aN>0){if(aa+aR<aT){Q.scrollByX(aQ)}else{W(aT)}}else{aL();return}}aK=setTimeout(s,aJ?az.initialDelay:az.trackClickRepeatFreq);aJ=false},aL=function(){aK&&clearTimeout(aK);aK=null;b(document).unbind("mouseup.jsp",aL)};s();b(document).bind("mouseup.jsp",aL);return false}})}}function w(){if(G){G.unbind("mousedown.jsp")}if(aq){aq.unbind("mousedown.jsp")}}function ax(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");if(av){av.removeClass("jspActive")}if(h){h.removeClass("jspActive")}}function V(s,aJ){if(!aA){return}if(s<0){s=0}else{if(s>i){s=i}}if(aJ===c){aJ=az.animateScroll}if(aJ){Q.animate(av,"top",s,ad)}else{av.css("top",s);ad(s)}}function ad(aJ){if(aJ===c){aJ=av.position().top}am.scrollTop(0);I=aJ;var aM=I===0,aK=I==i,aL=aJ/i,s=-aL*(Z-v);if(aj!=aM||aH!=aK){aj=aM;aH=aK;D.trigger("jsp-arrow-change",[aj,aH,P,k])}u(aM,aK);Y.css("top",s);D.trigger("jsp-scroll-y",[-s,aM,aK]).trigger("scroll")}function W(aJ,s){if(!aF){return}if(aJ<0){aJ=0}else{if(aJ>j){aJ=j}}if(s===c){s=az.animateScroll}if(s){Q.animate(h,"left",aJ,ae)
}else{h.css("left",aJ);ae(aJ)}}function ae(aJ){if(aJ===c){aJ=h.position().left}am.scrollTop(0);aa=aJ;var aM=aa===0,aL=aa==j,aK=aJ/j,s=-aK*(T-ak);if(P!=aM||k!=aL){P=aM;k=aL;D.trigger("jsp-arrow-change",[aj,aH,P,k])}r(aM,aL);Y.css("left",s);D.trigger("jsp-scroll-x",[-s,aM,aL]).trigger("scroll")}function u(aJ,s){if(az.showArrows){ar[aJ?"addClass":"removeClass"]("jspDisabled");af[s?"addClass":"removeClass"]("jspDisabled")}}function r(aJ,s){if(az.showArrows){ay[aJ?"addClass":"removeClass"]("jspDisabled");x[s?"addClass":"removeClass"]("jspDisabled")}}function M(s,aJ){var aK=s/(Z-v);V(aK*i,aJ)}function N(aJ,s){var aK=aJ/(T-ak);W(aK*j,s)}function ab(aW,aR,aK){var aO,aL,aM,s=0,aV=0,aJ,aQ,aP,aT,aS,aU;try{aO=b(aW)}catch(aN){return}aL=aO.outerHeight();aM=aO.outerWidth();am.scrollTop(0);am.scrollLeft(0);while(!aO.is(".jspPane")){s+=aO.position().top;aV+=aO.position().left;aO=aO.offsetParent();if(/^body|html$/i.test(aO[0].nodeName)){return}}aJ=aB();aP=aJ+v;if(s<aJ||aR){aS=s-az.verticalGutter}else{if(s+aL>aP){aS=s-v+aL+az.verticalGutter}}if(aS){M(aS,aK)}aQ=aD();aT=aQ+ak;if(aV<aQ||aR){aU=aV-az.horizontalGutter}else{if(aV+aM>aT){aU=aV-ak+aM+az.horizontalGutter}}if(aU){N(aU,aK)}}function aD(){return -Y.position().left}function aB(){return -Y.position().top}function K(){var s=Z-v;return(s>20)&&(s-aB()<10)}function B(){var s=T-ak;return(s>20)&&(s-aD()<10)}function ag(){am.unbind(ac).bind(ac,function(aM,aN,aL,aJ){var aK=aa,s=I;Q.scrollBy(aL*az.mouseWheelSpeed,-aJ*az.mouseWheelSpeed,false);return aK==aa&&s==I})}function n(){am.unbind(ac)}function aC(){return false}function J(){Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){ab(s.target,false)})}function E(){Y.find(":input,a").unbind("focus.jsp")}function S(){var s,aJ,aL=[];aF&&aL.push(an[0]);aA&&aL.push(U[0]);Y.focus(function(){D.focus()});D.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(aO){if(aO.target!==this&&!(aL.length&&b(aO.target).closest(aL).length)){return}var aN=aa,aM=I;switch(aO.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=aO.keyCode;aK();break;case 35:M(Z-v);s=null;break;case 36:M(0);s=null;break}aJ=aO.keyCode==s&&aN!=aa||aM!=I;return !aJ}).bind("keypress.jsp",function(aM){if(aM.keyCode==s){aK()}return !aJ});if(az.hideFocus){D.css("outline","none");if("hideFocus" in am[0]){D.attr("hideFocus",true)}}else{D.css("outline","");if("hideFocus" in am[0]){D.attr("hideFocus",false)}}function aK(){var aN=aa,aM=I;switch(s){case 40:Q.scrollByY(az.keyboardSpeed,false);break;case 38:Q.scrollByY(-az.keyboardSpeed,false);break;case 34:case 32:Q.scrollByY(v*az.scrollPagePercent,false);break;case 33:Q.scrollByY(-v*az.scrollPagePercent,false);break;case 39:Q.scrollByX(az.keyboardSpeed,false);break;case 37:Q.scrollByX(-az.keyboardSpeed,false);break}aJ=aN!=aa||aM!=I;return aJ}}function R(){D.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function C(){if(location.hash&&location.hash.length>1){var aL,aJ,aK=escape(location.hash);try{aL=b(aK)}catch(s){return}if(aL.length&&Y.find(aK)){if(am.scrollTop()===0){aJ=setInterval(function(){if(am.scrollTop()>0){ab(aK,true);b(document).scrollTop(am.position().top);clearInterval(aJ)}},50)}else{ab(aK,true);b(document).scrollTop(am.position().top)}}}}function ai(){b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")}function m(){ai();b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack",function(){var s=this.href.split("#"),aJ;if(s.length>1){aJ=s[1];if(aJ.length>0&&Y.find("#"+aJ).length>0){ab("#"+aJ,true);return false}}})}function ao(){var aK,aJ,aM,aL,aN,s=false;am.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(aO){var aP=aO.originalEvent.touches[0];aK=aD();aJ=aB();aM=aP.pageX;aL=aP.pageY;aN=false;s=true}).bind("touchmove.jsp",function(aR){if(!s){return}var aQ=aR.originalEvent.touches[0],aP=aa,aO=I;Q.scrollTo(aK+aM-aQ.pageX,aJ+aL-aQ.pageY);aN=aN||Math.abs(aM-aQ.pageX)>5||Math.abs(aL-aQ.pageY)>5;
return aP==aa&&aO==I}).bind("touchend.jsp",function(aO){s=false}).bind("click.jsp-touchclick",function(aO){if(aN){aN=false;return false}})}function g(){var s=aB(),aJ=aD();D.removeClass("jspScrollable").unbind(".jsp");D.replaceWith(ap.append(Y.children()));ap.scrollTop(s);ap.scrollLeft(aJ)}b.extend(Q,{reinitialise:function(aJ){aJ=b.extend({},az,aJ);at(aJ)},scrollToElement:function(aK,aJ,s){ab(aK,aJ,s)},scrollTo:function(aK,s,aJ){N(aK,aJ);M(s,aJ)},scrollToX:function(aJ,s){N(aJ,s)},scrollToY:function(s,aJ){M(s,aJ)},scrollToPercentX:function(aJ,s){N(aJ*(T-ak),s)},scrollToPercentY:function(aJ,s){M(aJ*(Z-v),s)},scrollBy:function(aJ,s,aK){Q.scrollByX(aJ,aK);Q.scrollByY(s,aK)},scrollByX:function(s,aK){var aJ=aD()+Math[s<0?"floor":"ceil"](s),aL=aJ/(T-ak);W(aL*j,aK)},scrollByY:function(s,aK){var aJ=aB()+Math[s<0?"floor":"ceil"](s),aL=aJ/(Z-v);V(aL*i,aK)},positionDragX:function(s,aJ){W(s,aJ)},positionDragY:function(aJ,s){V(aJ,s)},animate:function(aJ,aM,s,aL){var aK={};aK[aM]=s;aJ.animate(aK,{duration:az.animateDuration,easing:az.animateEase,queue:false,step:aL})},getContentPositionX:function(){return aD()},getContentPositionY:function(){return aB()},getContentWidth:function(){return T},getContentHeight:function(){return Z},getPercentScrolledX:function(){return aD()/(T-ak)},getPercentScrolledY:function(){return aB()/(Z-v)},getIsScrollableH:function(){return aF},getIsScrollableV:function(){return aA},getContentPane:function(){return Y},scrollToBottom:function(s){V(i,s)},hijackInternalLinks:function(){m()},destroy:function(){g()}});at(O)}e=b.extend({},b.fn.jScrollPane.defaults,e);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){e[this]=e[this]||e.speed});return this.each(function(){var f=b(this),g=f.data("jsp");if(g){g.reinitialise(e)}else{g=new d(f,e);f.data("jsp",g)}})};b.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,stickToBottom:false,stickToRight:false,clickOnTrack:true,autoReinitialise:false,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:false,animateDuration:300,animateEase:"linear",hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}})(jQuery,this);/*! jQuery UI - v1.10.1 -- * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.resizable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.slider.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-fade.js, jquery.ui.effect-highlight.js, jquery.ui.effect-slide.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */
(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.10.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(){n=!1}),e.widget("ui.mouse",{version:"1.10.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e,t){function h(e,t,n){return[parseFloat(e[0])*(l.test(e[0])?t/100:1),parseFloat(e[1])*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}function d(t){var n=t[0];return n.nodeType===9?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,v,m,g,y,b=e(t.of),w=e.position.getWithinInfo(t.within),E=e.position.getScrollInfo(w),S=(t.collision||"flip").split(" "),x={};return y=d(b),b[0].preventDefault&&(t.at="left top"),l=y.width,v=y.height,m=y.offset,g=e.extend({},m),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),x[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),S.length===1&&(S[1]=S[0]),t.at[0]==="right"?g.left+=l:t.at[0]==="center"&&(g.left+=l/2),t.at[1]==="bottom"?g.top+=v:t.at[1]==="center"&&(g.top+=v/2),n=h(x.at,l,v),g.left+=n[0],g.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),d=p(this,"marginLeft"),y=p(this,"marginTop"),T=f+d+p(this,"marginRight")+E.width,N=c+y+p(this,"marginBottom")+E.height,C=e.extend({},g),k=h(x.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:d,marginTop:y},e.each(["left","top"],function(r,i){e.ui.position[S[r]]&&e.ui.position[S[r]][i](C,{targetWidth:l,targetHeight:v,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:w,elem:a})}),t.using&&(u=function(e){var n=m.left-C.left,s=n+l-f,o=m.top-C.top,u=o+v-c,h={target:{element:b,left:m.left,top:m.top,width:l,height:v},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),v<c&&i(o+u)<v&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}()})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n,r=this,i=!1,s=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),n=this.element[0];while(n&&(n=n.parentNode))n===document&&(i=!0);return!i&&this.options.helper==="original"?!1:(this.options.revert==="invalid"&&!s||this.options.revert==="valid"&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1)},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo),r[0]!==this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);if(i.containment==="document"||i.containment==="window")this.containment=[i.containment==="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,i.containment==="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(i.containment==="document"?0:e(window).scrollLeft())+e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(i.containment==="document"?0:e(window).scrollTop())+(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(i.containment)&&i.containment.constructor!==Array){n=e(i.containment),r=n[0];if(!r)return;t=e(r).css("overflow")!=="hidden",this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(t?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else i.containment.constructor===Array&&(this.containment=i.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i,s,o=this.options,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName),f=t.pageX,l=t.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(r=this.relative_container.offset(),n=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment[2]+r.left,this.containment[3]+r.top]):n=this.containment,t.pageX-this.offset.click.left<n[0]&&(f=n[0]+this.offset.click.left),t.pageY-this.offset.click.top<n[1]&&(l=n[1]+this.offset.click.top),t.pageX-this.offset.click.left>n[2]&&(f=n[2]+this.offset.click.left),t.pageY-this.offset.click.top>n[3]&&(l=n[3]+this.offset.click.top)),o.grid&&(i=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=n?i-this.offset.click.top>=n[1]||i-this.offset.click.top>n[3]?i:i-this.offset.click.top>=n[1]?i-o.grid[1]:i+o.grid[1]:i,s=o.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,f=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t==="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("ui-draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"ui-sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("ui-draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper==="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("ui-draggable"),i=this;e.each(r.sortables,function(){var s=!1,o=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(s=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(s=!1),s})),s?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),n=e(this).data("ui-draggable").options;t.css("cursor")&&(n._cursor=t.css("cursor")),t.css("cursor",n.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var n=e(this).data("ui-draggable"),r=n.options,i=!1;if(n.scrollParent[0]!==document&&n.scrollParent[0].tagName!=="HTML"){if(!r.axis||r.axis!=="x")n.overflowOffset.top+n.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-n.overflowOffset.top<r.scrollSensitivity&&(n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop-r.scrollSpeed);if(!r.axis||r.axis!=="y")n.overflowOffset.left+n.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-n.overflowOffset.left<r.scrollSensitivity&&(n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft-r.scrollSpeed)}else{if(!r.axis||r.axis!=="x")t.pageY-e(document).scrollTop()<r.scrollSensitivity?i=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(i=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed));if(!r.axis||r.axis!=="y")t.pageX-e(document).scrollLeft()<r.scrollSensitivity?i=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity&&(i=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed))}i!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(n,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),n=t.options;t.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var n=e(this),r=n.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:n.outerWidth(),height:n.outerHeight(),top:r.top,left:r.left})})},drag:function(t,n){var r,i,s,o,u,a,f,l,c,h,p=e(this).data("ui-draggable"),d=p.options,v=d.snapTolerance,m=n.offset.left,g=m+p.helperProportions.width,y=n.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--){u=p.snapElements[c].left,a=u+p.snapElements[c].width,f=p.snapElements[c].top,l=f+p.snapElements[c].height;if(!(u-v<m&&m<a+v&&f-v<y&&y<l+v||u-v<m&&m<a+v&&f-v<b&&b<l+v||u-v<g&&g<a+v&&f-v<y&&y<l+v||u-v<g&&g<a+v&&f-v<b&&b<l+v)){p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1;continue}d.snapMode!=="inner"&&(r=Math.abs(f-b)<=v,i=Math.abs(l-y)<=v,s=Math.abs(u-g)<=v,o=Math.abs(a-m)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f-p.helperProportions.height,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u-p.helperProportions.width}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a}).left-p.margins.left)),h=r||i||s||o,d.snapMode!=="outer"&&(r=Math.abs(f-y)<=v,i=Math.abs(l-b)<=v,s=Math.abs(u-m)<=v,o=Math.abs(a-g)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(r||i||s||o||h)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=r||i||s||o||h}}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,n=this.data("ui-draggable").options,r=e.makeArray(e(n.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!r.length)return;t=parseInt(e(r[0]).css("zIndex"),10)||0,e(r).each(function(n){e(this).css("zIndex",t+n)}),this.css("zIndex",t+r.length)}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);(function(e,t){function n(e){return parseInt(e,10)||0}function r(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,n,r,i,s,o=this,u=this.options;this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!u.aspectRatio,aspectRatio:u.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:u.helper||u.ghost||u.animate?u.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=u.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor===String){this.handles==="all"&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={};for(n=0;n<t.length;n++)r=e.trim(t[n]),s="ui-resizable-"+r,i=e("<div class='ui-resizable-handle "+s+"'></div>"),i.css({zIndex:u.zIndex}),"se"===r&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(i)}this._renderAxis=function(t){var n,r,i,s;t=t||this.element;for(n in this.handles){this.handles[n].constructor===String&&(this.handles[n]=e(this.handles[n],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(r=e(this.handles[n],this.element),s=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth(),i=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join(""),t.css(i,s),this._proportionallyResize());if(!e(this.handles[n]).length)continue}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=i&&i[1]?i[1]:"se")}),u.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(u.disabled)return;e(this).removeClass("ui-resizable-autohide"),o._handles.show()}).mouseleave(function(){if(u.disabled)return;o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,n=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(n(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),n(this.originalElement),this},_mouseCapture:function(t){var n,r,i=!1;for(n in this.handles){r=e(this.handles[n])[0];if(r===t.target||e.contains(r,t.target))i=!0}return!this.options.disabled&&i},_mouseStart:function(t){var r,i,s,o=this.options,u=this.element.position(),a=this.element;return this.resizing=!0,/absolute/.test(a.css("position"))?a.css({position:"absolute",top:a.css("top"),left:a.css("left")}):a.is(".ui-draggable")&&a.css({position:"absolute",top:u.top,left:u.left}),this._renderProxy(),r=n(this.helper.css("left")),i=n(this.helper.css("top")),o.containment&&(r+=e(o.containment).scrollLeft()||0,i+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:r,top:i},this.size=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalPosition={left:r,top:i},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof o.aspectRatio=="number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor",s==="auto"?this.axis+"-resize":s),a.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var n,r=this.helper,i={},s=this.originalMousePosition,o=this.axis,u=this.position.top,a=this.position.left,f=this.size.width,l=this.size.height,c=t.pageX-s.left||0,h=t.pageY-s.top||0,p=this._change[o];if(!p)return!1;n=p.apply(this,[t,c,h]),this._updateVirtualBoundaries(t.shiftKey);if(this._aspectRatio||t.shiftKey)n=this._updateRatio(n,t);return n=this._respectSize(n,t),this._updateCache(n),this._propagate("resize",t),this.position.top!==u&&(i.top=this.position.top+"px"),this.position.left!==a&&(i.left=this.position.left+"px"),this.size.width!==f&&(i.width=this.size.width+"px"),this.size.height!==l&&(i.height=this.size.height+"px"),r.css(i),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(i)||this._trigger("resize",t,this.ui()),!1},_mouseStop:function(t){this.resizing=!1;var n,r,i,s,o,u,a,f=this.options,l=this;return this._helper&&(n=this._proportionallyResizeElements,r=n.length&&/textarea/i.test(n[0].nodeName),i=r&&e.ui.hasScroll(n[0],"left")?0:l.sizeDiff.height,s=r?0:l.sizeDiff.width,o={width:l.helper.width()-s,height:l.helper.height()-i},u=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null,a=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null,f.animate||this.element.css(e.extend(o,{top:a,left:u})),l.helper.height(l.size.height),l.helper.width(l.size.width),this._helper&&!f.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,n,i,s,o,u=this.options;o={minWidth:r(u.minWidth)?u.minWidth:0,maxWidth:r(u.maxWidth)?u.maxWidth:Infinity,minHeight:r(u.minHeight)?u.minHeight:0,maxHeight:r(u.maxHeight)?u.maxHeight:Infinity};if(this._aspectRatio||e)t=o.minHeight*this.aspectRatio,i=o.minWidth/this.aspectRatio,n=o.maxHeight*this.aspectRatio,s=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),i>o.minHeight&&(o.minHeight=i),n<o.maxWidth&&(o.maxWidth=n),s<o.maxHeight&&(o.maxHeight=s);this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),r(e.left)&&(this.position.left=e.left),r(e.top)&&(this.position.top=e.top),r(e.height)&&(this.size.height=e.height),r(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,n=this.size,i=this.axis;return r(e.height)?e.width=e.height*this.aspectRatio:r(e.width)&&(e.height=e.width/this.aspectRatio),i==="sw"&&(e.left=t.left+(n.width-e.width),e.top=null),i==="nw"&&(e.top=t.top+(n.height-e.height),e.left=t.left+(n.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,n=this.axis,i=r(e.width)&&t.maxWidth&&t.maxWidth<e.width,s=r(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=r(e.width)&&t.minWidth&&t.minWidth>e.width,u=r(e.height)&&t.minHeight&&t.minHeight>e.height,a=this.originalPosition.left+this.originalSize.width,f=this.position.top+this.size.height,l=/sw|nw|w/.test(n),c=/nw|ne|n/.test(n);return o&&(e.width=t.minWidth),u&&(e.height=t.minHeight),i&&(e.width=t.maxWidth),s&&(e.height=t.maxHeight),o&&l&&(e.left=a-t.minWidth),i&&l&&(e.left=a-t.maxWidth),u&&c&&(e.top=f-t.minHeight),s&&c&&(e.top=f-t.maxHeight),!e.width&&!e.height&&!e.left&&e.top?e.top=null:!e.width&&!e.height&&!e.top&&e.left&&(e.left=null),e},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length)return;var e,t,n,r,i,s=this.helper||this.element;for(e=0;e<this._proportionallyResizeElements.length;e++){i=this._proportionallyResizeElements[e];if(!this.borderDif){this.borderDif=[],n=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")],r=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];for(t=0;t<n.length;t++)this.borderDif[t]=(parseInt(n[t],10)||0)+(parseInt(r[t],10)||0)}i.css({height:s.height()-this.borderDif[0]-this.borderDif[2]||0,width:s.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var n=this.originalSize,r=this.originalPosition;return{left:r.left+t,width:n.width-t}},n:function(e,t,n){var r=this.originalSize,i=this.originalPosition;return{top:i.top+n,height:r.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!=="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).data("ui-resizable"),r=n.options,i=n._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&e.ui.hasScroll(i[0],"left")?0:n.sizeDiff.height,u=s?0:n.sizeDiff.width,a={width:n.size.width-u,height:n.size.height-o},f=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,l=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null;n.element.animate(e.extend(a,l&&f?{top:l,left:f}:{}),{duration:r.animateDuration,easing:r.animateEasing,step:function(){var r={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};i&&i.length&&e(i[0]).css({width:r.width,height:r.height}),n._updateCache(r),n._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,r,i,s,o,u,a,f=e(this).data("ui-resizable"),l=f.options,c=f.element,h=l.containment,p=h instanceof e?h.get(0):/parent/.test(h)?c.parent().get(0):h;if(!p)return;f.containerElement=e(p),/document/.test(h)||h===document?(f.containerOffset={left:0,top:0},f.containerPosition={left:0,top:0},f.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(p),r=[],e(["Top","Right","Left","Bottom"]).each(function(e,i){r[e]=n(t.css("padding"+i))}),f.containerOffset=t.offset(),f.containerPosition=t.position(),f.containerSize={height:t.innerHeight()-r[3],width:t.innerWidth()-r[1]},i=f.containerOffset,s=f.containerSize.height,o=f.containerSize.width,u=e.ui.hasScroll(p,"left")?p.scrollWidth:o,a=e.ui.hasScroll(p)?p.scrollHeight:s,f.parentData={element:p,left:i.left,top:i.top,width:u,height:a})},resize:function(t){var n,r,i,s,o=e(this).data("ui-resizable"),u=o.options,a=o.containerOffset,f=o.position,l=o._aspectRatio||t.shiftKey,c={top:0,left:0},h=o.containerElement;h[0]!==document&&/static/.test(h.css("position"))&&(c=a),f.left<(o._helper?a.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-a.left:o.position.left-c.left),l&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=u.helper?a.left:0),f.top<(o._helper?a.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-a.top:o.position.top),l&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?a.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,n=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),r=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-a.top)+o.sizeDiff.height),i=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),i&&s&&(n-=o.parentData.left),n+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-n,l&&(o.size.height=o.size.width/o.aspectRatio)),r+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-r,l&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.containerOffset,i=t.containerPosition,s=t.containerElement,o=e(t.helper),u=o.offset(),a=o.outerWidth()-t.sizeDiff.width,f=o.outerHeight()-t.sizeDiff.height;t._helper&&!n.animate&&/relative/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f}),t._helper&&!n.animate&&/static/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};typeof n.alsoResize=="object"&&!n.alsoResize.parentNode?n.alsoResize.length?(n.alsoResize=n.alsoResize[0],r(n.alsoResize)):e.each(n.alsoResize,function(e){r(e)}):r(n.alsoResize)},resize:function(t,n){var r=e(this).data("ui-resizable"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0},a=function(t,r){e(t).each(function(){var t=e(this),i=e(this).data("ui-resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var n=(i[t]||0)+(u[t]||0);n&&n>=0&&(s[t]=n||null)}),t.css(s)})};typeof i.alsoResize=="object"&&!i.alsoResize.nodeType?e.each(i.alsoResize,function(e,t){a(e,t)}):a(i.alsoResize)},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof n.ghost=="string"?n.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size,i=t.originalSize,s=t.originalPosition,o=t.axis,u=typeof n.grid=="number"?[n.grid,n.grid]:n.grid,a=u[0]||1,f=u[1]||1,l=Math.round((r.width-i.width)/a)*a,c=Math.round((r.height-i.height)/f)*f,h=i.width+l,p=i.height+c,d=n.maxWidth&&n.maxWidth<h,v=n.maxHeight&&n.maxHeight<p,m=n.minWidth&&n.minWidth>h,g=n.minHeight&&n.minHeight>p;n.grid=u,m&&(h+=a),g&&(p+=f),d&&(h-=a),v&&(p-=f),/^(se|s|e)$/.test(o)?(t.size.width=h,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.top=s.top-c):/^(sw)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.left=s.left-l):(t.size.width=h,t.size.height=p,t.position.top=s.top-c,t.position.left=s.left-l)}})})(jQuery);(function(e,t){var n=0,r={},i={};r.height=r.paddingTop=r.paddingBottom=r.borderTopWidth=r.borderBottomWidth="hide",i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.10.1",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),!t.collapsible&&(t.active===!1||t.active==null)&&(t.active=0),this._processPanels(),t.active<0&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e(),content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this.options.heightStyle!=="content"&&e.css("height","")},_setOption:function(e,t){if(e==="active"){this._activate(t);return}e==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),e==="collapsible"&&!t&&this.options.active===!1&&this._activate(0),e==="icons"&&(this._destroyIcons(),t&&this._createIcons()),e==="disabled"&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)},_keydown:function(t){if(t.altKey||t.ctrlKey)return;var n=e.ui.keyCode,r=this.headers.length,i=this.headers.index(t.target),s=!1;switch(t.keyCode){case n.RIGHT:case n.DOWN:s=this.headers[(i+1)%r];break;case n.LEFT:case n.UP:s=this.headers[(i-1+r)%r];break;case n.SPACE:case n.ENTER:this._eventHandler(t);break;case n.HOME:s=this.headers[0];break;case n.END:s=this.headers[r-1]}s&&(e(t.target).attr("tabIndex",-1),e(s).attr("tabIndex",0),s.focus(),t.preventDefault())},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels();if(t.active===!1&&t.collapsible===!0||!this.headers.length)t.active=!1,this.active=e();t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var t,r=this.options,i=r.heightStyle,s=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++n);this.active=this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(t){var n=e(this),r=n.attr("id"),i=n.next(),s=i.attr("id");r||(r=o+"-header-"+t,n.attr("id",r)),s||(s=o+"-panel-"+t,i.attr("id",s)),n.attr("aria-controls",s),i.attr("aria-labelledby",r)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(r.event),i==="fill"?(t=s.height(),this.element.siblings(":visible").each(function(){var n=e(this),r=n.css("position");if(r==="absolute"||r==="fixed")return;t-=n.outerHeight(!0)}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):i==="auto"&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var n=this._findActive(t)[0];if(n===this.active[0])return;n=n||this.active[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return typeof t=="number"?this.headers.eq(t):e()},_setupEvents:function(t){var n={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,n),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i[0]===r[0],o=s&&n.collapsible,u=o?e():i.next(),a=r.next(),f={oldHeader:r,oldPanel:a,newHeader:o?e():i,newPanel:u};t.preventDefault();if(s&&!n.collapsible||this._trigger("beforeActivate",t,f)===!1)return;n.active=o?!1:this.headers.index(i),this.active=s?e():i,this._toggle(f),r.removeClass("ui-accordion-header-active ui-state-active"),n.icons&&r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),s||(i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),n.icons&&i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),i.next().addClass("ui-accordion-content-active"))},_toggle:function(t){var n=t.newPanel,r=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=n,this.prevHide=r,this.options.animate?this._animate(n,r,t):(r.hide(),n.show(),this._toggleComplete(t)),r.attr({"aria-expanded":"false","aria-hidden":"true"}),r.prev().attr("aria-selected","false"),n.length&&r.length?r.prev().attr("tabIndex",-1):n.length&&this.headers.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),n.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,n){var s,o,u,a=this,f=0,l=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},h=l&&c.down||c,p=function(){a._toggleComplete(n)};typeof h=="number"&&(u=h),typeof h=="string"&&(o=h),o=o||h.easing||c.easing,u=u||h.duration||c.duration;if(!t.length)return e.animate(i,u,o,p);if(!e.length)return t.animate(r,u,o,p);s=e.show().outerHeight(),t.animate(r,{duration:u,easing:o,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(i,{duration:u,easing:o,complete:p,step:function(e,n){n.now=Math.round(e),n.prop!=="height"?f+=n.now:a.options.heightStyle!=="content"&&(n.now=Math.round(s-t.outerHeight()-f),f=0)}})},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})})(jQuery);(function(e,t){var n=0;e.widget("ui.autocomplete",{version:"1.10.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,n,r,i=this.element[0].nodeName.toLowerCase(),s=i==="textarea",o=i==="input";this.isMultiLine=s?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[s||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){t=!0,r=!0,n=!0;return}t=!1,r=!1,n=!1;var s=e.ui.keyCode;switch(i.keyCode){case s.PAGE_UP:t=!0,this._move("previousPage",i);break;case s.PAGE_DOWN:t=!0,this._move("nextPage",i);break;case s.UP:t=!0,this._keyEvent("previous",i);break;case s.DOWN:t=!0,this._keyEvent("next",i);break;case s.ENTER:case s.NUMPAD_ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));break;case s.TAB:this.menu.active&&this.menu.select(i);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());break;default:n=!0,this._searchTimeout(i)}},keypress:function(r){if(t){t=!1,r.preventDefault();return}if(n)return;var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("previous",r);break;case i.DOWN:this._keyEvent("next",r)}},input:function(e){if(r){r=!1,e.preventDefault();return}this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({input:e(),role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)&&t.close()})})},menufocus:function(t,n){if(this.isNewMenu){this.isNewMenu=!1;if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)});return}}var r=n.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),e==="source"&&this._initSource(),e==="appendTo"&&this.menu.element.appendTo(this._appendTo()),e==="disabled"&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,n,r=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(n,r){r(e.ui.autocomplete.filter(t,n.term))}):typeof this.options.source=="string"?(n=this.options.source,this.source=function(t,i){r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){i(e)},error:function(){i([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){e=e!=null?e:this._value(),this.term=this._value();if(e.length<this.options.minLength)return this.close(t);if(this._trigger("search",t)===!1)return;return this._search(e)},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,t=++n;return function(r){t===n&&e.__response(r),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return typeof t=="string"?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var n=this.menu.element.empty();this._renderMenu(n,t),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var r=this;e.each(n,function(e,n){r._renderItemData(t,n)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,n){return e("<li>").append(e("<a>").text(n.label)).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term),this.menu.blur();return}this.menu[e](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(e,t),t.preventDefault()}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments);if(this.options.disabled||this.cancelSearch)return;e&&e.length?t=this.options.messages.results(e.length):t=this.options.messages.noResults,this.liveRegion.text(t)}})})(jQuery);(function(e,t){var n,r,i,s,o="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=e(this).find(":ui-button");setTimeout(function(){t.button("refresh")},1)},l=function(t){var n=t.name,r=t.form,i=e([]);return n&&(n=n.replace(/'/g,"\\'"),r?i=e(r).find("[name='"+n+"']"):i=e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})),i};e.widget("ui.button",{version:"1.10.1",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,u=this.options,a=this.type==="checkbox"||this.type==="radio",c=a?"":"ui-state-active",h="ui-state-focus";u.label===null&&(u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled)return;this===n&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled)return;e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){u.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){t.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,function(){t.buttonElement.removeClass(h)}),a&&(this.element.bind("change"+this.eventNamespace,function(){if(s)return;t.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){if(u.disabled)return;s=!1,r=e.pageX,i=e.pageY}).bind("mouseup"+this.eventNamespace,function(e){if(u.disabled)return;if(r!==e.pageX||i!==e.pageY)s=!0})),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var n=t.element[0];l(n).not(n).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).addClass("ui-state-active"),n=this,t.document.one("mouseup",function(){n=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(u.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",u.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(o+" "+u+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){t?this.element.prop("disabled",!0):this.element.prop("disabled",!1);return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?l(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(a),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),r=this.options.icons,i=r.primary&&r.secondary,s=[];r.primary||r.secondary?(this.options.text&&s.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary")),r.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>"),r.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>"),this.options.text||(s.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):s.push("ui-button-text-only"),t.addClass(s.join(" "))}}),e.widget("ui.buttonset",{version:"1.10.1",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(e,t){var n={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},r={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.10.1",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;n<0&&e(this).css("top",t.top-n)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var n=this;if(!this._isOpen||this._trigger("beforeClose",t)===!1)return;this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||e(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){n._trigger("close",t)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,t){var n=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return n&&!t&&this._trigger("focus",e),n},open:function(){var t=this;if(this._isOpen){this._moveToTop()&&this._focusTabbable();return}this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._trigger("open")},_focusTabbable:function(){var e=this.element.find("[autofocus]");e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function n(){var t=this.document[0].activeElement,n=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);n||this._focusTabbable()}t.preventDefault(),n.call(this),this._delay(n)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE){t.preventDefault(),this.close(t);return}if(t.keyCode!==e.ui.keyCode.TAB)return;var n=this.uiDialog.find(":tabbable"),r=n.filter(":first"),i=n.filter(":last");t.target!==i[0]&&t.target!==this.uiDialog[0]||!!t.shiftKey?(t.target===r[0]||t.target===this.uiDialog[0])&&t.shiftKey&&(i.focus(1),t.preventDefault()):(r.focus(1),t.preventDefault())},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,n=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty();if(e.isEmptyObject(n)||e.isArray(n)&&!n.length){this.uiDialog.removeClass("ui-dialog-buttons");return}e.each(n,function(n,r){var i,s;r=e.isFunction(r)?{click:r,text:n}:r,r=e.extend({type:"button"},r),i=r.click,r.click=function(){i.apply(t.element[0],arguments)},s={icons:r.icons,text:r.showText},delete r.icons,delete r.showText,e("<button></button>",r).button(s).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){function r(e){return{position:e.position,offset:e.offset}}var t=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,i){e(this).addClass("ui-dialog-dragging"),t._blockFrames(),t._trigger("dragStart",n,r(i))},drag:function(e,n){t._trigger("drag",e,r(n))},stop:function(i,s){n.position=[s.position.left-t.document.scrollLeft(),s.position.top-t.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),t._unblockFrames(),t._trigger("dragStop",i,r(s))}})},_makeResizable:function(){function o(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var t=this,n=this.options,r=n.resizable,i=this.uiDialog.css("position"),s=typeof r=="string"?r:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:s,start:function(n,r){e(this).addClass("ui-dialog-resizing"),t._blockFrames(),t._trigger("resizeStart",n,o(r))},resize:function(e,n){t._trigger("resize",e,o(n))},stop:function(r,i){n.height=e(this).height(),n.width=e(this).width(),e(this).removeClass("ui-dialog-resizing"),t._unblockFrames(),t._trigger("resizeStop",r,o(i))}}).css("position",i)},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,o={};e.each(t,function(e,t){i._setOption(e,t),e in n&&(s=!0),e in r&&(o[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(e,t){var n,r,i=this.uiDialog;e==="dialogClass"&&i.removeClass(this.options.dialogClass).addClass(t);if(e==="disabled")return;this._super(e,t),e==="appendTo"&&this.uiDialog.appendTo(this._appendTo()),e==="buttons"&&this._createButtons(),e==="closeText"&&this.uiDialogTitlebarClose.button({label:""+t}),e==="draggable"&&(n=i.is(":data(ui-draggable)"),n&&!t&&i.draggable("destroy"),!n&&t&&this._makeDraggable()),e==="position"&&this._position(),e==="resizable"&&(r=i.is(":data(ui-resizable)"),r&&!t&&i.resizable("destroy"),r&&typeof t=="string"&&i.resizable("option","handles",t),!r&&t!==!1&&this._makeResizable()),e==="title"&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))},_size:function(){var e,t,n,r=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),r.minWidth>r.width&&(r.width=r.minWidth),e=this.uiDialog.css({height:"auto",width:r.width}).outerHeight(),t=Math.max(0,r.minHeight-e),n=typeof r.maxHeight=="number"?Math.max(0,r.maxHeight-e):"none",r.height==="auto"?this.element.css({minHeight:t,maxHeight:n,height:"auto"}):this.element.height(Math.max(0,r.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_createOverlay:function(){if(!this.options.modal)return;e.ui.dialog.overlayInstances||this._delay(function(){e.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(t){!e(t.target).closest(".ui-dialog").length&&!e(t.target).closest(".ui-datepicker").length&&(t.preventDefault(),e(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable())})}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),e.ui.dialog.overlayInstances++},_destroyOverlay:function(){if(!this.options.modal)return;this.overlay&&(e.ui.dialog.overlayInstances--,e.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),e.ui.dialog.overlayInstances=0,e.uiBackCompat!==!1&&e.widget("ui.dialog",e.ui.dialog,{_position:function(){var t=this.options.position,n=[],r=[0,0],i;if(t){if(typeof t=="string"||typeof t=="object"&&"0"in t)n=t.split?t.split(" "):[t[0],t[1]],n.length===1&&(n[1]=n[0]),e.each(["left","top"],function(e,t){+n[e]===n[e]&&(r[e]=n[e],n[e]=t)}),t={my:n[0]+(r[0]<0?r[0]:"+"+r[0])+" "+n[1]+(r[1]<0?r[1]:"+"+r[1]),at:n.join(" ")};t=e.extend({},e.ui.dialog.prototype.options.position,t)}else t=e.ui.dialog.prototype.options.position;i=this.uiDialog.is(":visible"),i||this.uiDialog.show(),this.uiDialog.position(t),i||this.uiDialog.hide()}})})(jQuery);(function(e,t){e.widget("ui.menu",{version:"1.10.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var n=e(t.target).closest(".ui-menu-item");!this.mouseHandled&&n.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(t),n.has(".ui-menu").length?this.expand(t):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget);n.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,n)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){e(t.target).closest(".ui-menu").length||this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var n,r,i,s,o,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,r=this.previousFilter||"",i=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),i===r?s=!0:i=r+i,o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n,n.length||(i=String.fromCharCode(t.keyCode),o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),n.length?(this.focus(t,n),n.length>1?(this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,n=this.options.icons.submenu,r=this.element.find(this.options.menus);r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),r=t.prev("a"),i=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);r.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",r.attr("id"))}),t=r.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-\u2014\u2013\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){e==="icons"&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),this._super(e,t)},focus:function(e,t){var n,r;this.blur(e,e&&e.type==="focus"),this._scrollIntoView(t),this.active=t.first(),r=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",r.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&e.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=t.children(".ui-menu"),n.length&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,r,i,s,o,u;this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-n-r,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),u=t.height(),i<0?this.activeMenu.scrollTop(s+i):i+u>o&&this.activeMenu.scrollTop(s+i-o+u))},blur:function(e,t){t||clearTimeout(this.timer);if(!this.active)return;this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer);if(e.attr("aria-hidden")!=="true")return;this.timer=this._delay(function(){this._close(),this._open(e)},this.delay)},_open:function(t){var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer),this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element),this._close(r),this.blur(t),this.activeMenu=r},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var r;this.active&&(e==="first"||e==="last"?r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):r=this.active[e+"All"](".ui-menu-item").eq(0));if(!r||!r.length||!this.active)r=this.activeMenu.children(".ui-menu-item")[t]();this.focus(n,r)},nextPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isLastItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r-i<0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())},previousPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isFirstItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r+i>0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)}})})(jQuery);(function(e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,n,r=this.options,i=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),s="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];n=r.values&&r.values.length||1,i.length>n&&(i.slice(n).remove(),i=i.slice(0,n));for(t=i.length;t<n;t++)o.push(s);this.handles=i.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,n="";t.range?(t.range===!0&&(t.values?t.values.length&&t.values.length!==2?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),!this.range||!this.range.length?(this.range=e("<div></div>").appendTo(this.element),n="ui-slider-range ui-widget-header ui-corner-all"):this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}),this.range.addClass(n+(t.range==="min"||t.range==="max"?" ui-slider-range-"+t.range:""))):this.range=e([])},_setupEvents:function(){var e=this.handles.add(this.range).filter("a");this._off(e),this._on(e,this._handleEvents),this._hoverable(e),this._focusable(e)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));if(i>n||i===n&&(t===l._lastChangedValue||l.values(t)===c.min))i=n,s=e(this),o=t}),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();r=this.options.values,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;t==="range"&&this.options.range===!0&&(n==="min"?(this.options.value=this._values(0),this.options.values=null):n==="max"&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e),e},_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t),t;if(this.options.values&&this.options.values.length){n=this.options.values.slice();for(r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(n[r]);return n}return[]},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))},_handleEvents:{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)},click:function(e){e.preventDefault()},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}})})(jQuery);(function(e,t){function i(){return++n}function s(e){return e.hash.length>1&&decodeURIComponent(e.href.replace(r,""))===decodeURIComponent(location.href.replace(r,""))}var n=0,r=/#.*$/;e.widget("ui.tabs",{version:"1.10.1",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,n=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),n.active=this._initialActive(),e.isArray(n.disabled)&&(n.disabled=e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(n.active):this.active=e(),this._refresh(),this.active.length&&this.load(n.active)},_initialActive:function(){var t=this.options.active,n=this.options.collapsible,r=location.hash.substring(1);if(t===null){r&&this.tabs.each(function(n,i){if(e(i).attr("aria-controls")===r)return t=n,!1}),t===null&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active")));if(t===null||t===-1)t=this.tabs.length?0:!1}return t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),t===-1&&(t=n?!1:0)),!n&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var n=e(this.document[0].activeElement).closest("li"),r=this.tabs.index(n),i=!0;if(this._handlePageNav(t))return;switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:i=!1,r--;break;case e.ui.keyCode.END:r=this.anchors.length-1;break;case e.ui.keyCode.HOME:r=0;break;case e.ui.keyCode.SPACE:t.preventDefault(),clearTimeout(this.activating),this._activate(r);return;case e.ui.keyCode.ENTER:t.preventDefault(),clearTimeout(this.activating),this._activate(r===this.options.active?!1:r);return;default:return}t.preventDefault(),clearTimeout(this.activating),r=this._focusNextTab(r,i),t.ctrlKey||(n.attr("aria-selected","false"),this.tabs.eq(r).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",r)},this.delay))},_panelKeydown:function(t){if(this._handlePageNav(t))return;t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-1,!1)),!0;if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab:function(t,n){function i(){return t>r&&(t=0),t<0&&(t=r),t}var r=this.tabs.length-1;while(e.inArray(i(),this.options.disabled)!==-1)t=n?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){if(e==="active"){this._activate(t);return}if(e==="disabled"){this._setupDisabled(t);return}this._super(e,t),e==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),!t&&this.options.active===!1&&this._activate(0)),e==="event"&&this._setupEvents(t),e==="heightStyle"&&this._setupHeightStyle(t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,n=this.tablist.children(":has(a[href])");t.disabled=e.map(n.filter(".ui-state-disabled"),function(e){return n.index(e)}),this._processTabs(),t.active===!1||!this.anchors.length?(t.active=!1,this.active=e()):this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(n,r){var i,o,u,a=e(r).uniqueId().attr("id"),f=e(r).closest("li"),l=f.attr("aria-controls");s(r)?(i=r.hash,o=t.element.find(t._sanitizeSelector(i))):(u=t._tabId(f),i="#"+u,o=t.element.find(i),o.length||(o=t._createPanel(u),o.insertAfter(t.panels[n-1]||t.tablist)),o.attr("aria-live","polite")),o.length&&(t.panels=t.panels.add(o)),l&&f.data("ui-tabs-aria-controls",l),f.attr({"aria-controls":i.substring(1),"aria-labelledby":a}),o.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var n=0,r;r=this.tabs[n];n++)t===!0||e.inArray(n,t)!==-1?e(r).addClass("ui-state-disabled").attr("aria-disabled","true"):e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var n={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var n,r=this.element.parent();t==="fill"?(n=r.height(),n-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),r=t.css("position");if(r==="absolute"||r==="fixed")return;n-=t.outerHeight(!0)}),this.element.children().not(this.panels).each(function(){n-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,n-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):t==="auto"&&(n=0,this.panels.each(function(){n=Math.max(n,e(this).height("").height())}).height(n))},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i.closest("li"),o=s[0]===r[0],u=o&&n.collapsible,a=u?e():this._getPanelForTab(s),f=r.length?this._getPanelForTab(r):e(),l={oldTab:r,oldPanel:f,newTab:u?e():s,newPanel:a};t.preventDefault();if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",t,l)===!1)return;n.active=u?!1:this.tabs.index(s),this.active=o?e():s,this.xhr&&this.xhr.abort(),!f.length&&!a.length&&e.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,l)},_toggle:function(t,n){function o(){r.running=!1,r._trigger("activate",t,n)}function u(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),i.length&&r.options.show?r._show(i,r.options.show,o):(i.show(),o())}var r=this,i=n.newPanel,s=n.oldPanel;this.running=!0,s.length&&this.options.hide?this._hide(s,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s.hide(),u()),s.attr({"aria-expanded":"false","aria-hidden":"true"}),n.oldTab.attr("aria-selected","false"),i.length&&s.length?n.oldTab.attr("tabIndex",-1):i.length&&this.tabs.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}),n.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var n,r=this._findActive(t);if(r[0]===this.active[0])return;r.length||(r=this.active),n=r.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return typeof e=="string"&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),n=t.data("ui-tabs-aria-controls");n?t.attr("aria-controls",n).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(n){var r=this.options.disabled;if(r===!1)return;n===t?r=!1:(n=this._getIndex(n),e.isArray(r)?r=e.map(r,function(e){return e!==n?e:null}):r=e.map(this.tabs,function(e,t){return t!==n?t:null})),this._setupDisabled(r)},disable:function(n){var r=this.options.disabled;if(r===!0)return;if(n===t)r=!0;else{n=this._getIndex(n);if(e.inArray(n,r)!==-1)return;e.isArray(r)?r=e.merge([n],r).sort():r=[n]}this._setupDisabled(r)},load:function(t,n){t=this._getIndex(t);var r=this,i=this.tabs.eq(t),o=i.find(".ui-tabs-anchor"),u=this._getPanelForTab(i),a={tab:i,panel:u};if(s(o[0]))return;this.xhr=e.ajax(this._ajaxSettings(o,n,a)),this.xhr&&this.xhr.statusText!=="canceled"&&(i.addClass("ui-tabs-loading"),u.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){u.html(e),r._trigger("load",n,a)},1)}).complete(function(e,t){setTimeout(function(){t==="abort"&&r.panels.stop(!1,!0),i.removeClass("ui-tabs-loading"),u.removeAttr("aria-busy"),e===r.xhr&&delete r.xhr},1)}))},_ajaxSettings:function(t,n,r){var i=this;return{url:t.attr("href"),beforeSend:function(t,s){return i._trigger("beforeLoad",n,e.extend({jqXHR:t,ajaxSettings:s},r))}}},_getPanelForTab:function(t){var n=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}})})(jQuery);(function(e){function n(t,n){var r=(t.attr("aria-describedby")||"").split(/\s+/);r.push(n),t.data("ui-tooltip-id",n).attr("aria-describedby",e.trim(r.join(" ")))}function r(t){var n=t.data("ui-tooltip-id"),r=(t.attr("aria-describedby")||"").split(/\s+/),i=e.inArray(n,r);i!==-1&&r.splice(i,1),t.removeData("ui-tooltip-id"),r=e.trim(r.join(" ")),r?t.attr("aria-describedby",r):t.removeAttr("aria-describedby")}var t=0;e.widget("ui.tooltip",{version:"1.10.1",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(t,n){var r=this;if(t==="disabled"){this[n?"_disable":"_enable"](),this.options[t]=n;return}this._super(t,n),t==="content"&&e.each(this.tooltips,function(e,t){r._updateContent(t)})},_disable:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var n=this,r=e(t?t.target:this.element).closest(this.options.items);if(!r.length||r.data("ui-tooltip-id"))return;r.attr("title")&&r.data("ui-tooltip-title",r.attr("title")),r.data("ui-tooltip-open",!0),t&&t.type==="mouseover"&&r.parents().each(function(){var t=e(this),r;t.data("ui-tooltip-open")&&(r=e.Event("blur"),r.target=r.currentTarget=this,n.close(r,!0)),t.attr("title")&&(t.uniqueId(),n.parents[this.id]={element:this,title:t.attr("title")},t.attr("title",""))}),this._updateContent(r,t)},_updateContent:function(e,t){var n,r=this.options.content,i=this,s=t?t.type:null;if(typeof r=="string")return this._open(t,e,r);n=r.call(e[0],function(n){if(!e.data("ui-tooltip-open"))return;i._delay(function(){t&&(t.type=s),this._open(t,e,n)})}),n&&this._open(t,e,n)},_open:function(t,r,i){function f(e){a.of=e;if(s.is(":hidden"))return;s.position(a)}var s,o,u,a=e.extend({},this.options.position);if(!i)return;s=this._find(r);if(s.length){s.find(".ui-tooltip-content").html(i);return}r.is("[title]")&&(t&&t.type==="mouseover"?r.attr("title",""):r.removeAttr("title")),s=this._tooltip(r),n(r,s.attr("id")),s.find(".ui-tooltip-content").html(i),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):s.position(e.extend({of:r},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.show&&this.options.show.delay&&(u=this.delayedShow=setInterval(function(){s.is(":visible")&&(f(a.of),clearInterval(u))},e.fx.interval)),this._trigger("open",t,{tooltip:s}),o={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var n=e.Event(t);n.currentTarget=r[0],this.close(n,!0)}},remove:function(){this._removeTooltip(s)}};if(!t||t.type==="mouseover")o.mouseleave="close";if(!t||t.type==="focusin")o.focusout="close";this._on(!0,r,o)},close:function(t){var n=this,i=e(t?t.currentTarget:this.element),s=this._find(i);if(this.closing)return;clearInterval(this.delayedShow),i.data("ui-tooltip-title")&&i.attr("title",i.data("ui-tooltip-title")),r(i),s.stop(!0),this._hide(s,this.options.hide,function(){n._removeTooltip(e(this))}),i.removeData("ui-tooltip-open"),this._off(i,"mouseleave focusout keyup"),i[0]!==this.element[0]&&this._off(i,"remove"),this._off(this.document,"mousemove"),t&&t.type==="mouseleave"&&e.each(this.parents,function(t,r){e(r.element).attr("title",r.title),delete n.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:s}),this.closing=!1},_tooltip:function(n){var r="ui-tooltip-"+t++,i=e("<div>").attr({id:r,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[r]=n,i},_find:function(t){var n=t.data("ui-tooltip-id");return n?e("#"+n):e()},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0),e("#"+n).remove(),r.data("ui-tooltip-title")&&(r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))})}})})(jQuery);jQuery.effects||function(e,t){var n="ui-effects-";e.effects={effect:{}},function(e,t){function h(e,t,n){var r=u[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function p(t){var n=s(),r=n._rgba=[];return t=t.toLowerCase(),c(i,function(e,i){var s,u=i.re.exec(t),a=u&&i.parse(u),f=i.space||"rgba";if(a)return s=n[f](a),n[o[f].cache]=s[o[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&e.extend(r,l.transparent),n):l[t]}function d(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},a=s.support={},f=e("<p>")[0],l,c=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",a.rgba=f.style.backgroundColor.indexOf("rgba")>-1,c(o,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),s.fn=e.extend(s.prototype,{parse:function(n,r,i,u){if(n===t)return this._rgba=[null,null,null,null],this;if(n.jquery||n.nodeType)n=e(n).css(r),r=t;var a=this,f=e.type(n),d=this._rgba=[];r!==t&&(n=[n,r,i,u],f="array");if(f==="string")return this.parse(p(n)||l._default);if(f==="array")return c(o.rgba.props,function(e,t){d[t.idx]=h(n[t.idx],t)}),this;if(f==="object")return n instanceof s?c(o,function(e,t){n[t.cache]&&(a[t.cache]=n[t.cache].slice())}):c(o,function(t,r){var i=r.cache;c(r.props,function(e,t){if(!a[i]&&r.to){if(e==="alpha"||n[e]==null)return;a[i]=r.to(a._rgba)}a[i][t.idx]=h(n[e],t,!0)}),a[i]&&e.inArray(null,a[i].slice(0,3))<0&&(a[i][3]=1,r.from&&(a._rgba=r.from(a[i])))}),this},is:function(e){var t=s(e),n=!0,r=this;return c(o,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],c(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return c(o,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=o[r],a=this.alpha()===0?s("transparent"):this,f=a[i.cache]||i.to(a._rgba),l=f.slice();return n=n[i.cache],c(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],a=u[r.type]||{};if(o===null)return;s===null?l[i]=o:(a.mod&&(o-s>a.mod/2?s+=a.mod:s-o>a.mod/2&&(s-=a.mod)),l[i]=h((o-s)*t+s,r))}),this[r](l)},blend:function(t){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba;return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop();return t&&n.push(~~(r*255)),"#"+e.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),s.fn.parse.prototype=s.fn,o.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,u===0?c=0:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},o.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(d(o,s,t+1/3)*255),Math.round(d(o,s,t)*255),Math.round(d(o,s,t-1/3)*255),i]},c(o,function(n,i){var o=i.props,u=i.cache,a=i.to,f=i.from;s.fn[n]=function(n){a&&!this[u]&&(this[u]=a(this._rgba));if(n===t)return this[u].slice();var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,p=this[u].slice();return c(o,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=p[t.idx]),p[t.idx]=h(n,t)}),f?(r=s(f(p)),r[u]=p,r):s(p)},c(o,function(t,i){if(s.fn[t])return;s.fn[t]=function(s){var o=e.type(s),u=t==="alpha"?this._hsla?"hsla":"rgba":n,a=this[u](),f=a[i.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=e.type(s)),s==null&&i.empty?this:(o==="string"&&(l=r.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[i.idx]=s,this[u](a)))}})}),s.hook=function(t){var n=t.split(" ");c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,o,u="";if(r!=="transparent"&&(e.type(r)!=="string"||(i=p(r)))){r=s(i||r);if(!a.rgba&&r._rgba[3]!==1){o=n==="backgroundColor"?t.parentNode:t;while((u===""||u==="transparent")&&o&&o.style)try{u=e.css(o,"backgroundColor"),o=o.parentNode}catch(f){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(f){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=s(t.elem,n),t.end=s(t.end),t.colorInit=!0),e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})},s.hook(n),e.cssHooks.borderColor={expand:function(e){var t={};return c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(t){var n,r,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={};if(i&&i.length&&i[0]&&i[i[0]]){r=i.length;while(r--)n=i[r],typeof i[n]=="string"&&(s[e.camelCase(n)]=i[n])}else for(n in i)typeof i[n]=="string"&&(s[n]=i[n]);return s}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").addBack():r;f=f.map(function(){var t=e(this);return{el:t,start:i(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=e.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return arguments.length>1?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass.apply(this,arguments)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function r(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function i(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]}e.extend(e.effects,{version:"1.10.1",save:function(e,t){for(var r=0;r<t.length;r++)t[r]!==null&&e.data(n+t[r],e[0].style[t[r]])},restore:function(e,r){var i,s;for(s=0;s<r.length;s++)r[s]!==null&&(i=e.data(n+r[s]),i===t&&(i=""),e.css(r[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function o(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,o=t.mode;(r.is(":hidden")?o==="hide":o==="show")?u():s.call(r[0],t,u)}var t=r.apply(this,arguments),n=t.mode,i=t.queue,s=e.effects.effect[t.effect];return e.fx.off||!s?n?this[n](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):i===!1?this.each(o):this.queue(i||"fx",o)},_show:e.fn.show,show:function(e){if(i(e))return this._show.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(i(e))return this._hide.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(i(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);(function(e,t){e.effects.effect.fade=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"toggle");r.animate({opacity:i},{queue:!1,duration:t.duration,easing:t.easing,complete:n})}})(jQuery);(function(e,t){e.effects.effect.highlight=function(t,n){var r=e(this),i=["backgroundImage","backgroundColor","opacity"],s=e.effects.setMode(r,t.mode||"show"),o={backgroundColor:r.css("backgroundColor")};s==="hide"&&(o.opacity=0),e.effects.save(r,i),r.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),n()}})}})(jQuery);(function(e,t){e.effects.effect.slide=function(t,n){var r=e(this),i=["position","top","bottom","left","right","width","height"],s=e.effects.setMode(r,t.mode||"show"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left",l,c={};e.effects.save(r,i),r.show(),l=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(r).css({overflow:"hidden"}),o&&r.css(a,f?isNaN(l)?"-"+l:-l:l),c[a]=(o?f?"+=":"-=":f?"-=":"+=")+l,r.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.8.4
 *
 */
(function(a,b,c,d){var e=a(b);a.fn.lazyload=function(c){function i(){var b=0;f.each(function(){var c=a(this);if(h.skip_invisible&&!c.is(":visible"))return;if(!a.abovethetop(this,h)&&!a.leftofbegin(this,h))if(!a.belowthefold(this,h)&&!a.rightoffold(this,h))c.trigger("appear"),b=0;else if(++b>h.failure_limit)return!1})}var f=this,g,h={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return c&&(d!==c.failurelimit&&(c.failure_limit=c.failurelimit,delete c.failurelimit),d!==c.effectspeed&&(c.effect_speed=c.effectspeed,delete c.effectspeed),a.extend(h,c)),g=h.container===d||h.container===b?e:a(h.container),0===h.event.indexOf("scroll")&&g.bind(h.event,function(a){return i()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(h.appear){var d=f.length;h.appear.call(b,d,h)}a("<img />").bind("load",function(){c.hide().attr("src",c.data(h.data_attribute))[h.effect](h.effect_speed),b.loaded=!0;var d=a.grep(f,function(a){return!a.loaded});f=a(d);if(h.load){var e=f.length;h.load.call(b,e,h)}}).attr("src",c.data(h.data_attribute))}}),0!==h.event.indexOf("scroll")&&c.bind(h.event,function(a){b.loaded||c.trigger("appear")})}),e.bind("resize",function(a){i()}),/iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent.persisted&&f.each(function(){a(this).trigger("appear")})}),a(b).load(function(){i()}),this},a.belowthefold=function(c,f){var g;return f.container===d||f.container===b?g=e.height()+e.scrollTop():g=a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return f.container===d||f.container===b?g=e.width()+e.scrollLeft():g=a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return f.container===d||f.container===b?g=e.scrollTop():g=a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return f.container===d||f.container===b?g=e.scrollLeft():g=a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!a.rightoffold(b,c)&&!a.leftofbegin(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})})(jQuery,window,document)
var spLanguage = 'de';
var sp_webcfg_global;

if (!window.console) {
    window.console = {};
    window.console.log = function (text) {}
}

function goURL(frmlrname){
	adresse = document.forms[frmlrname].to.options[document.forms[frmlrname].to.selectedIndex].value;
	if(adresse=="") adresse = "javascript:void(0)";
	if(adresse.substr(0,1) == '/') adresse = spnetENV_SERVER + adresse;
	window.location = adresse;
}

function spon_popup(seite,breite,hoehe,scroll,rsize) {
	sbars = (scroll==1)? "yes" : "no";
	rsize = (rsize==1)? "yes" : "no";
	if(seite.substr(0,1) == '/') seite = spnetENV_SERVER + seite;
	var win_name = breite+hoehe;
	var win_attr = "menubar=no,location=no,directories=no,toolbar=no,screenX=0,screenY=0";
	win_attr += ",width=" + breite + ",height=" + hoehe + ",scrollbars=" + sbars + ",resizable=" + rsize;
	sponWin = open(seite,win_name,win_attr);
	if(sponWin != null) sponWin.focus();
}

function spCounterGallery(galleryid) {
	spCounter('/fotostrecke/fotostrecke-' + galleryid + '-count.html');
}
function spCounterFlash(flashid) {
	spCounter('/flash/flash-' + flashid + '-count.html');
}
function spCounterContentainer(contentainerid) {
//	spCounter('/count/contentainer/0,,' + contentainerid + ',00.html');
}
function spCounter(url) {
	if (typeof(spon_vdz_countframe) != 'undefined') spon_vdz_countframe.location.href = spnetENV_SERVER + url;
}

function SPONgetCookie (name)
{
	function SPONgetCookieVal (offset)
	{
		var endstr = document.cookie.indexOf (";", offset);
		if (endstr == -1)
			endstr = document.cookie.length;
		return unescape(document.cookie.substring(offset, endstr));
	}
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return SPONgetCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}

function spGetHashParams() {
	var loc=(document.location+"");
	var pos=loc.indexOf("#");
	if (pos == -1)
		return {};
	var hashQs=loc.substring(pos+1, loc.length);
	return spSplitParams(hashQs);
}

function spGetHashParam(name) {
	try {
		var params=spGetHashParams();
		var param = params[name];
		if (param != null) return param;
	} catch (e) {}
	return null;
}

function spStripHashParams(url) {
	var pos=url.indexOf("#");
	if (pos == -1)
		return url;
	url = url.substring(0,pos);
	return url;
}

function spHasHashParams() {
	var loc=(document.location+"");
	var pos=loc.indexOf("#");
	if (pos == -1)
		return false;
	return true;
}

function spSplitParams(params) {
	var result={};
	var pairs=params.split("&");
	for (var i=0; i < pairs.length; i++) {
		var kv=pairs[i].split("=");
		if (kv.length == 2) 
			result[kv[0]]=decodeURIComponent(kv[1]);
	}
	return result;
}
function spShowOASPos(pos) {
	var color='red';
	if (typeof OAS_listpos != 'undefined' && typeof OAS_allposlist != 'undefined') {
		var searchpos = new RegExp('(^|,)'+pos+'(,|$)');
		if (searchpos.exec(OAS_listpos)) {
			color='lightgreen';
		} else if (searchpos.exec(OAS_allposlist)) {
			color='yellow';
		}
	}
	document.write('<div class="qc-oas-pos '+pos+'" style="background-color:'+color+';">Ad: '+pos+'</div>');
	return 'SHOWPOS';
}


function spOpenLargePicture(page, width, height) {
	spon_popup(page,width+20,height+25,false,false);	
}

function spSetCookie(name, value, daystoexpire, path, domain, secure) {

	var expires = new Date();
	expires.setTime(expires.getTime() + (daystoexpire * 86400000));

	document.cookie= name + "=" + escape(value) +
		((expires) ? "; expires=" + expires.toGMTString() : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
} 

function spGetCookie (name)
{
	function SPONgetCookieVal (offset)
	{
		var endstr = document.cookie.indexOf (";", offset);
		if (endstr == -1)
			endstr = document.cookie.length;
		return unescape(document.cookie.substring(offset, endstr));
	}
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return SPONgetCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}

// HP-Channelboxen
function spHPTeaserInit(allchannels) {
	spHPTeaserLen = {};
	var cookie = SPONgetCookie('spHPTeaser');
	if (cookie != null) {
		var channel = cookie.split(' ');

		for (var i in channel) {
			spHPTeaserLen[channel[i]] = 1;
		}
	}
	var allchannelslist = allchannels.split(' ');
	for (var c in allchannelslist) {
		spHPTeaserToggle(allchannelslist[c],(typeof(spHPTeaserLen[allchannelslist[c]]) == 'undefined' ? 'less' : 'more'),0);
	}
	return false;
}

function spHPTeaserToggle(channelname, what, save) {
	if (typeof(spHPTeaserLen) == 'undefined') {
		spHPTeaserLen = {};
	}
	if (what == 'more') {
		spHPTeaserLen[channelname] = '1';
		document.getElementById('spRTmore_'+channelname).style.display = 'block';
		document.getElementById('spRTless_'+channelname).style.display = 'none';
	} else if (what == 'less'){
		if (typeof(spHPTeaserLen[channelname]) != 'undefined') {
			delete spHPTeaserLen[channelname];
		}
		document.getElementById('spRTmore_'+channelname).style.display = 'none';
		document.getElementById('spRTless_'+channelname).style.display = 'block';
	} else {
		return false;
	}
	
	if (save == 1) {
		var cookie = '';
		for (var c in spHPTeaserLen) {
			cookie = cookie + (cookie.length > 0 ? ' ' : '') + c
		}
		spSetCookie('spHPTeaser',cookie,365);
	}
	return false;
}

function spSetObjectHeight(id,newSize) {
    document.getElementById(id).height = newSize;
}
function spSetObjectSize(id,newWidth,newHeight) {
    document.getElementById(id).height = newHeight;
    document.getElementById(id).width  = newWidth;
}

/** User Agent detection **/
(function($) {

	var spBrowserDetector = function(options) {

		var settings = $.extend({
			'ua' : navigator.userAgent.toLowerCase(),
			/*'uv' : navigator.vendor.toLowerCase(),*/
			'href' : window.location.href
		}, options);
		
		return {
			getUserAgent : function () {
				return settings.ua;
			},
			isFirefox : function() {
				return settings.ua.search(/firefox/i) > -1;
			},
			isInternetExplorer : function() {
				return settings.ua.search(/msie/i) > -1 && !this.isWindowsPhone();
			},
			isSafari : function() {
				return settings.ua.search(/safari/i) > -1 && !this.isIPhone() && !this.isIPad()
					&& !this.isAndroid() && !this.isAndroid4() && !this.isChrome() 
					&& !this.isBlackBerry() && !this.isOpera();
			},
			isChrome : function() {
				return settings.ua.search(/chrome/i) > -1
					&& !this.isAndroid();
			},
			isOpera : function() {
				return settings.ua.search(/opera/i) > -1;
			},			
			isIDevice : function() {
				return (this.isIPad() || this.isIPhone());
			},
			isAndroid : function() {
				return settings.ua.search(/android/i) > -1;
			},
			isAndroid4 : function() {
				return settings.ua.search(/android 4/i) > -1;
			},
			isBlackBerry : function() {
				return settings.ua.search(/blackberry/i) > -1;
			},
			isIPad : function() {
				return settings.ua.search(/ipad/i) > -1;
			},
			isIPhone : function() {
				return settings.ua.search(/(iphone|ipod)/i) > -1;			
			},

			isWindowsPhone : function() {
				return (settings.ua.search(/windows phone/i) > -1 && settings.ua
						.search(/iemobile/i) > -1)
			},
			isMobileDevice : function() {
				return (this.isIDevice() || this.isAndroid() || this.isWindowsPhone());
			},
			
			/* Sites */
			isWww : function() {
				return settings.href.search(/spiegel.de/i) > -1 && !this.isMobile() && !this.isApp();
			},
			isMobile : function() {
				return settings.href.search(/m.spiegel.de/i) > -1;
			},
			isApp : function() {
				return settings.href.search(/a.spiegel.de/i) > -1;
			},
			
			/* legacy functions */ 
			isDevice : function() {
				return this.isIDevice();
			},
			isiPad : function() {
				return this.isIPad();
			},
			isBlackberry : function() {
				return this.isBlackBerry();
			}
		}
	};

	$.fn.spBrowserDetector = function(method) {
		return new spBrowserDetector();
	};
})(jQuery);

var spUA = $().spBrowserDetector();

/*  */

function spUtfSubmit(f) {
	if (navigator.appVersion.toLowerCase().indexOf("msie 6.") > 0 || navigator.appVersion.toLowerCase().indexOf("msie 7.") > 0) {  
		var url=f.action + '?';
		for (i = 0; i < f.elements.length; i++) {
			if (f.elements[i].name != 'undefined' && f.elements[i].name != '') {
				if (i>0) url += '&';
				url += f.elements[i].name + '=' + encodeURIComponent(f.elements[i].value)
			}
		}
		this.location.href=url;
		return false;
	} else {
		return true;
	}
}

function spAjax(url, data, callback) {
	$.ajax({
        type: "POST",
        url: url,
        data: data,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
	})
	.done(function( response ) {
	    callback({ajaxSuccess: true, data: response} );
	})
	.fail(function(response, textStatus, errorThrown) {
		callback({ajaxSuccess: false, text: textStatus, error: errorThrown} );
	});
}

//Laterpay-Tooltip
function spLaterpayTooltipOnHover() {
    var tooltipContent = $('<span class="laterpay-tooltip"><strong>Sofort lesen, sp&auml;ter zahlen</strong><span class="list"><span class="list-item">Keine Bindung</span><span class="list-item">Keine Vorab-Registrierung</span><span class="list-item">Sie bezahlen erst, wenn Sie eine Summe von f&uuml;nf Euro erreichen</span></ul></span>');
    var tooltipArea = $('<span class="laterpay-tooltip-area"></span>');

    if ($('.spCenterpageContent').length > 0 || $('#home').length > 0) {
        $('.laterpay-icon-big .laterpay-icon').append(tooltipArea);

        $('.laterpay-icon-big .laterpay-icon .laterpay-tooltip-area').hover(
               function () {
                      $(this).append(tooltipContent);
               }, function () {
                      $('.laterpay-tooltip').remove();
               }
        );
    }
}

$(document).ready(function(){
	
	// Multibox Accordion

	if ( $('.accordion-box').length > 0 ) {
		if ( $(this).find('.multi-box-content').length > 1 ) {
			$('.accordion-box').accordion({
				header: ".multi-box-tab",
				heightStyle: "content",
				icons: false
			});
		}
	}

	// Multibox Reiter

	if ( $('.asset-multi-tab-box .tabs').length > 0 ) {
		$('.asset-multi-tab-box .tabs').tabs();
	}
	

	// Top-Kasten mit Tabs
	// Content via JSON und Ajax

	if ( $('.asset-tab-box .tabs').length > 0 ) {
		var maxCount;
		var loadedTabs=new Array();
		$('.asset-tab-box .tabs').tabs({
			active: 1, // default-start mit tab x (0-based index)
			beforeLoad: function (event, ui) {
				if (typeof(maxCount) == 'undefined') {
					if ($('#home').length == 0) {
						maxCount=10;
					} else { 
						maxCount=$().hpColumnExpander().spGetTabsCount();
					}
				}

				var url = ui.ajaxSettings.url;
				var counter = 1;
				var headlinetag, credittag;
				var tabcontent = '';
	
				if ($('#home').length == 0)
					$('.ui-tabs-panel').css('min-height','200px');
//				$('#home').length > 0 ?	$('.ui-tabs-panel').css('min-height','140px') : 
				

				var act=$('.asset-tab-box .tabs').tabs("option", "active");

				if ($.inArray(act, loadedTabs) == -1) {
				
					loadedTabs.push(act);

					$(this).find('.load-icon').show();
					
					$.getJSON(url, function(json) {
					    $.each(json, function() {
		
					    	if ( this.topic == '' ) {
					    		headlinetag = '<span class="asset-headline">'+this.headline+'</span>';
					    	} 
					    	if ( this.channel == '785' && this.topic == '' ) {
					    		headlinetag = '<span class="asset-headline-intro">SATIRE@SPIEGEL ONLINE:</span> <span class="asset-headline">'+this.headline+'</span>';
					    	} else {
					    		headlinetag = '<span class="asset-headline-intro">'+this.topic+':</span> <span class="asset-headline">'+this.headline+'</span>';
					    	}

				    		tabcontent += '<li><div class="item-number">'+counter+'</div><div class="item-text"><a href="'+this.link+'">'+headlinetag+'</a></div></li>';

					    	counter++;
		
					    	if ( counter == '6' && url.match(/[0-9][.json]/) ) {
					    		// ausser auf HP nur max 5 Elemente anzeigen
					    		$(".tabs .load-icon").hide();
					    		return false;
					    	}
					    	else if (!url.match(/[0-9][.json]/) && counter > maxCount) {
					    		$(".tabs .load-icon").hide();
					    		return false;
					    	}

					    });
					    
						ui.panel.html('<ul>');
						ui.panel.find('ul').append( tabcontent );

					}).done(function(){
						$(".tabs .load-icon").hide();
					});
				}
				
	            return false;
	        }
		});
	}
	
	
	// Form-Elemente mit Platzhalter versehen
	$('[placeholder]')
		.focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
		    input.val('');
		    input.removeClass('placeholder');
		  }
		})
		.blur(function() {
		  var input = $(this);
		  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		    input.addClass('placeholder');
		    input.val(input.attr('placeholder'));
		  }
		})
		.blur()
		.parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			})
		});


	// Einestagesartikel bewerten
	spInitEtRating();

	// Article-Overscroll aktivieren
	var articleoverscroll = new spArticleOverscroll();
	
	//Laterpay Tooltip
	spLaterpayTooltipOnHover();

	
}); // /document ready

function spToggleSubNavi(bereichid) {
	$('#spSubNavi').find('li').each(function(){
		var id=$(this).attr('data-bereichid');
		if (id == bereichid) {
			$(this).addClass('active');
		}
	});	
}

function cookieprotect(cbsuccess, cbfail) {
	$.ajax({
		type : "POST",
		url : '/jsapi/usercookie/init.json',
        success: cbsuccess, 
		error: 	 cbfail
	});
}

function submitVote(voteform) {

	if ($(voteform).find("input[type=radio]:checked").length == 0) {
		document.location.href='/forum/votes/vote-' + $(voteform).attr("data-id") + '.html'; 
		return false;
	}; 

	cookieprotect(	function() { $(voteform).unbind("submit")
											.removeAttr("onsubmit")
											.submit(); 
					},
					function() { alert("Ein Fehler ist aufgetreten");}
				);
	return false;
}

var NMABD;
function spGetAbdStatus() {
	var abd = 0;
	if (typeof NMADB == 'undefined') {
		try {
			NMABD = new ADIABD();
		} catch(e) {
			return -9;
		};
	}  
	return NMABD.getStatus();
}

// Multimedialeisten
function init2picMumelei(e) {
	var mpics  = $(e).find('.mumelei-pics');
	var mpager = $(e).find('.mumelei-pager');
	mpics.slick({
		        	lazyLoad: 'none',
		        	variableWidth: true,
		        	slidesToShow: 2,
		        	slidesToScroll: 2,
		        	prevArrow: '<span class="button back white link-left"> </span>',
		        	nextArrow: '<span class="button fwd  white link-right"> </span>',
		        	dots:true,				
		        	appendDots: mpager,
		        	customPaging: function(slider, i) {	return '<span class="slick-dot">' + (i + 1) + '</span>';}
				})
			.on("afterChange",	function(event, slick, currentSlide, nextSlide) {
									if (slick.$slides.length-2 < currentSlide) {
										// Bug bei ungeraden Anzahlen im letzten Slide
										slick.$slider.find(".slick-slide[data-slick-index='"+ (parseInt(currentSlide)+1) +"']").addClass("slick-active");
										slick.$slider.find(".slick-slide[data-slick-index='"+ (parseInt(currentSlide)-1) +"']").removeClass("slick-active");
									}

	            					slick.$slides.filter("[data-slick-index='"+ (parseInt(currentSlide)-1) +"'], [data-slick-index='"+ (parseInt(currentSlide)) +"'], [data-slick-index='"+ (parseInt(currentSlide)+1) +"'], [data-slick-index='"+ (parseInt(currentSlide)+2)+"']").find("img[data-lazy]").each(
	            							function(index, that2) {
	            								 var image = $(that2);
	            								 var imageSource = image.attr('data-lazy');
	            								 image
	            								 	.load(function() { image.animate({ opacity: 1 }, 200); })
	            								 	.css({ opacity: 0 })
	            								 	.attr('src', imageSource)
	            								 	.removeAttr('data-lazy')
	            								 	.removeClass('slick-loading');
	            							  }
	            					);
								}
			);
    
	if (!mpager.is(':empty')) {
		mpager.prepend($('<span>').addClass("button back link-left").on("click", function() {$(e).find('.mumelei-pics .button.back').click()}));
		mpager.append( $('<span>').addClass("button fwd link-right").on("click", function() {$(e).find('.mumelei-pics .button.fwd').click()}));
	}
}

// /components/newsletter/form/default
function nl_form_submit(thisForm) {
	var email     = $(thisForm).children(".nl-email:first").val();
	var group_id  = $(thisForm).children(".nl-group_id:first").val();
	var language  = $(thisForm).children(".nl-language:first").val();
	var mainDiv   = $(thisForm).parent();
	var iframeDiv = $(mainDiv).children(".js-nl-order-result:first");
	var iframeUrl = 'https://newsletterversand.spiegel.de?action=subscribeinline&newsletter=' + group_id + '&lang=' + language+ '&email=' + email;
	if(group_id == 'verwalten') {
		iframeUrl = 'https://newsletterversand.spiegel.de/list.php?lang=' + language + '&email=' + email;
	}
	// $('<iframe />').attr('src', iframeUrl).appendTo(iframeDiv);; 
	$('<iframe />', {
	    class: 'nl-form-iframe strytl',
	   	src: iframeUrl,
	   	scrolling: 'no'
	}).appendTo(iframeDiv);
	$(mainDiv).children('.js-nl-order-inline').hide();
	iFrameResize({
		heightCalculationMethod: 'lowestElement', 
		inPageLinks: true
	});
	return(false);
}
$(document).ready(function() { 
	 $('form.js-nl-order-inline input.nl-email')
	    .click(function(){
	    	$(this).closest('div.nl-order').find('.js-nl-optin-text').show();
	    });
	$('.js-nl-order-inline').submit(function(e) {
		e.preventDefault();
		nl_form_submit($(this));
		return(false);
	});
});

// Sticky Lasche deaktivieren
function stickyOff() {
	spSetCookie('stickyHide', true, 90, '/', 'spiegel.de');
	$('.sticky-overlay').hide();
	if (typeof(ga) == "function") ga('send', 'event', 'newContentAlert', 'deactivate',  window.location.href);
	
}

//Sticky Lasche schließen bis zum nächsten Mal
function stickyClose() {
	$('.sticky-overlay').hide();
	if (typeof(ga) == "function") ga('send', 'event', 'newContentAlert', 'close',  window.location.href);
}

function stickyOn() {
	spSetCookie('stickyHide', false, -1, '/', 'spiegel.de');
}

function stickyShow() { 
	if (!SPONgetCookie('stickyHide')) {
		$('.sticky-overlay').show();
	}
	if (typeof(ga) == "function") ga('send', 'event', 'newContentAlert', 'show',  window.location.href);
}

function spTriggerHpNotifier() {
		if (!SPONgetCookie('stickyHide') && 
			currentHpArticles.articles && 
			sp_webcfg_global.stickyOverlay != undefined &&
			sp_webcfg_global.stickyOverlay == true) {
		
	    var i = setInterval(function () {
	        $.ajax( {
	        	url: "/jsapi/notification/alltops.json", 
	            dataType: 'json',
	            success: function (json) {
	            	var articleids = json.articles;
	            	var stopPolling=false;
	            	if (articleids) {
	            		$.each(articleids, function(i, item) {
	                        if ($.inArray(item, currentHpArticles.articles) < 0) {
	                        	stopPolling=true;
	                        	// Overlay wegen HP-Cachezeiten erst nach 30s oeffnen
	                        	window.setTimeout(stickyShow, 30000);
	                        }
	                    });
	            	}
	            	if (stopPolling)
	            		clearInterval(i);
	            },
	            error: function () {
	                clearInterval(i);
	            }
	        });
	    }, 30000);
	}
}


/**
 * 
 */
var spCE;
(function($) {
	
	var hpColumnExpander = function(options) {
		var settings = $.extend({
			'minColumnHeight' : 50, // min height to add ContentBox
			'minTabBoxHeight' : 24, // min height to add ContentBox
			'nextItemTimeout' : 50  // timeout before insert next Item
		}, options);
		
		return {
			spAddColumnBox : function () {
				if ($('#js-column-dynamic-ref') && $('#js-column-dynamic')) {
					var all  = $('#js-column-dynamic-ref').height();
					var used = $('#js-column-dynamic').height();
					var diff = all -used;
					//console.log("diff: "+diff);
					if (diff > settings.minColumnHeight && $("#js-column-dynamic-content").children().length > 0) {
						var el      = $("#js-column-dynamic-content").children(":first");

						if (el.prop("tagName") == "IFRAME" && el.prop("src").toLowerCase().indexOf("_rm_empty_") > -1) {
							//console.log(el.prop("tagName") + ': ' + el.prop("src").toLowerCase().indexOf("_rm_empty_"));
							el.remove();
							el=null;
							spCE.spAddColumnBox();
						}
						if (el != null) {
							if (el.prop("tagName") == "SCRIPT") {
								el.remove();
								spCE.spAddColumnBox();
							}
							else {
								var elheight = $(el).show().outerHeight(true);
								$(el).hide();

								if (elheight > diff) {
									//console.log("less space left");
									el.hide();
									spCE.spAddTabItems();
								}
								else {
									el.appendTo('#js-column-dynamic');
									el.show();
									used=$('#js-column-dynamic').height();
									diff=all-used;
									if (diff < 0) {
										el.remove();
										//console.log("element to height - remove");
										spCE.spAddTabItems();
									}
									else {
										window.setTimeout("spCE.spAddColumnBox()", settings.nextItemTimeout);	
									}
								}
							}
						}
					}
					else {
						spCE.spAddTabItems();
					}					
				}
			},
			spAddTabItems : function () {
				var all=$('#js-column-dynamic-ref').height();
				var used=$('#js-column-dynamic').height();
				var diff=parseInt(all -used);
				if (diff > settings.minTabBoxHeight) {
					$("div.asset-tab-box div#tabs-2 ul li").each(function(i) {
						var cssclass=$(this).attr("class");
						if (cssclass == 'is-hidden') {
							$(this).removeClass('is-hidden');
							spCE.spAddTabItems();
							return false;
						}
					});
				}
				$('div.asset-tab-box').css('min-height',$('div.asset-tab-box').height()+'px')
			},
			spGetTabsCount : function () {
				var counter=0;
				$("div.asset-tab-box div#tabs-2 ul li").each(function(i) {
					var cssclass=$(this).attr("class");
					if (cssclass == 'is-hidden') {
						return;
					}
					counter++;
				});
				return counter;
			}
		}
	};
	$.fn.hpColumnExpander = function(method) {
		return new hpColumnExpander();
	};
})(jQuery);
spCE = $().hpColumnExpander();

//----------------------------------------------------
// HP Ressortbox slider
// main function @see commonpager

$.spHpSlideBox = function(obj, callback, param){

	var ressort = $(obj).find('.ressort-slide').attr('rel');
	var src = "/fragments/centerpage/navibox-" + ressort + ".json";

//	var dblHPIDs=$('#HPIDs').length ? $('#HPIDs').html().split(",") : {};
	var dblRessortIDs=$(obj).find('#'+ressort+'-Ids').length ? $(obj).find('#'+ressort+'-Ids').html().split(",") : {};
	
	$.ajax({
		  dataType: "json",
		  url: src
	}).done(function(data) {
		 var index = 0,
		 	page=1;
		 
		 var items = '<ul class="list-float clearfix">';
		 var complete=false;
		 $.each(data, function() {

//			 if ($.inArray(this.id+'', dblHPIDs) == -1 && $.inArray(this.id+'', dblRessortIDs) == -1) {
			 if ($.inArray(this.id+'', dblRessortIDs) == -1) {
				 // only if image
				 if( this.image != undefined ) {
					// max. 3 Slider-pages
					 if(page == 3) {
						 complete=true;
						 return;
					 }
					 
					 if (index % 6 == 0 && index != 0) {
						 // Slider-pages
						 items += '</ul>';
						 $(obj).find('.commonpager-page').eq(page).empty();
						 $(obj).find('.commonpager-page').eq(page).append(items);
						 page++;
						 items='<ul class="list-float clearfix">';
					 }
					 var linmbr = index % 6;
					 var liclas = "";
					 if (linmbr == 0 || linmbr == 3) {
						 var liclas = " first";
					}
					 this.topic != undefined ? itemtopic = ' <span class="headline-intro">' + this.topic + ':</span>' : itemtopic = '';
					 this.headline != undefined ? itemheadline = ' <span class="headline">' + this.headline + '</span>' : itemheadline = '';
					 items += '<li class="list-float-left' + liclas + '"><a href="' + this.link + '"><img alt="" data-src="' + this.image + '" width="'+this.width+'" height="'+this.height+'"/>' + itemtopic + itemheadline + '</a></li>';
					 index ++;
				 }
			 }
		 });
		 // remove unused page
		 if (page == 1) {
			 $(obj).find('.commonpager-indicator .bullet').eq(2).remove();
			 $(obj).find('.commonpager-page').eq(2).remove();
		 }
		 
		 if (!complete) {	
			 items += '</ul>';
			 $(obj).find('.commonpager-page').eq(page).empty();
			 $(obj).find('.commonpager-page').eq(page).append(items);
		 }

		 // adapt needed height
		 var neededHeight=$(obj).find('.commonpager-page:first-child').height();
		 $(obj).find('.commonpager-page').each(function() {
			if ( $(this).height() > neededHeight )
				neededHeight = $(this).height();
		 });
		 $(obj).find('.commonpager-page').css('height', neededHeight);
		
		if (callback) {
			$[callback](obj, param);
			$[callback](obj, 2);
		}
	});
}

$.spHpSlideBoxCallback = function(obj, param) {
	var ressort = $(obj).find('.ressort-slide').attr('rel');
	spNmReloadMergeParams({'sp.df' : 'ressortbox_'+ressort});
	spIvwReload();
}

function topPosterInit(hashParams) { 
	if (typeof hashParams != 'undefined' && hashParams["action"] == '404') {
		$('.top-poster').show();
		$('.top-poster-ai')
			.addClass("spWait")
			.show()
			.append($('<div>')	.addClass("top-poster-ai-content error")
								.load('/static/sys/v10/json/errordoc-404.html', function() {$('.top-poster-ai').removeClass("spWait");})
					);
		return;
	}
	
	var device = spFindDevice(spDeviceConfig, spUA.getUserAgent());
	if (typeof hashParams != 'undefined' && hashParams["ai"] != null) {

		// Mobil leitet weiter zum Artikel
		if (device != null && device.target == 'mobileplus' && !spUA.isiPad()) {
			document.location.href="http://m.spiegel.de/artikel/a-"+hashParams["ai"]+".html#ref="+encodeURIComponent(hashParams["ref"]);
			return;
		}
		
		// Artikel-Anzeige HP-Poster
		$('.top-poster-ai').addClass("spWait")
						   .show();
		$('.top-poster').show();

		$.ajax({
			type: "GET",
			url: "/fragments/article/a-"+hashParams["ai"]+".json",
			success: function(data) {
				
						var hl = $('<a>').attr("href",data.path);
						var hltext = '';
						if (typeof data.topic != 'undefined' && data.topic != "") {
							if (!data.topic.match(/[:?!]$/)) {
								data.topic = data.topic + ":";
							}
							hl.append($('<span>').addClass("headline-intro").text(data.topic + " "));
							hltext = data.topic + " ";
						}
			 		 	hl.append($('<span>').addClass("headline").text(data.title));
			 		 	hltext += data.title;
				
						var contentbox = $('<div>')	.addClass("top-poster-ai-content")
													.addClass(hashParams["aitype"])
													.append($('<div>').addClass("module-title").text("Ihr Artikel"));
						var content = $('<div>').addClass("teaser");
						if (typeof data.imageurl != 'undefined' && data.imageurl != '') {
							content.append(
								$('<div>') 	.addClass("article-image-box box-position thumbsmall asset-align-left")
											.html(
												  $('<a>').attr("href",data.path)
												  		  .attr("title", hltext)
												  		  .html(
												  					$('<img>').attr({
												  										"src": data.imageurl,
												  										"width": "90",
												  										"height": "90",
												  										"alt": ""
												  					})
												  					
												  			)
												  			
												)
							);
						};
						  						
						content.append(
								$('<h2>').addClass("article-title")
								         .html(hl)
						);
						if (typeof data.teaser == 'undefined') data.teaser = "";
						content.append(
								$('<p>').addClass("article-intro")
										.html(data.teaser)
										.append(	" ",
								        		 	$('<a>').attr("href",data.path)
								        		 			.attr("title", hltext)
								        		 			.text("mehr..."),
								        		 	" (",
								        		 	data.date,
								        		 	" Uhr)"
										)
						);
						contentbox.append(content);
						$('.top-poster-ai')	.removeClass("spWait")
											.append(contentbox);
					},
			error: function(data) {
						$('.top-poster-ai').removeClass("spWait").hide();
						$('.top-poster').hide();
						topPosterInit();
					}
		});
	}
	else if (device != null && device.target == 'mobileplus' && !spUA.isiPad()) {
			$('.top-poster').show();
			$('.top-poster-redirect').show();
	}
	else if (!spUA.isiPad()) {
		// iPad hat eigenes Popup, dort nicht zeigen
		var cookieTopPosterHide = SPONgetCookie('topPosterHide2');
		cookieTopPosterHide = (cookieTopPosterHide != null && cookieTopPosterHide == 'true');
		if( ! cookieTopPosterHide ) {
			$('.top-poster').show();
			$('.top-poster-startpage').show();
			$(document).ready(function(){
				$('.top-poster-startpage-content').slideDown('slow');
			});
		}
	}
}

function topPosterOff() {
	spSetCookie('topPosterHide2', true, 90, '/', 'spiegel.de');
	$('.top-poster-startpage').hide();
	$('.top-poster').hide();
}

$(document).ready(function() {
	
//	$.ajaxSetup ({cache: false});
    var ajax_load = "<div class='load-icon'><img src='/static/sys/v10/icons/ani-loader_small.gif' alt='loading...' /></div>";
    var newContent, aid;
    
    $('.nav-channel li[class$="-border-bottom"]').hover(function(){
    	$currentItem = $(this);

    	//	Channel-Nav >> Top-Meldungen nachladen und anzeigen
    	if($currentItem.find('.nav-channel-sub-assets .js-nav-channel-sub-teaser').length < 1) {
	    	$currentItem.find('.asset').each(function(){
	    		var aid = $(this).html();
	    		$(this).parent().append('<div class="'+aid+' js-nav-channel-sub-teaser"></div>');
	    		$(this).parent().find('.'+aid).empty().html(ajax_load);
	    		$(this).parent().find('.'+aid).load("/fragments/centerpage/navibox-"+ aid +".html");
	    	});
    	}

    	$hovernav = $currentItem.find('.nav-channel-sub');

    	if($hovernav.length > 0) {
    		//	wenn hover-Element ueber rechten Rand hinausreicht >> neu positionieren

			var itempos = $hovernav.parent().position();
			var itemwidth = $hovernav.width();
			var visarea = $(".nav-channel > ul").width() - 10;
			var cpos = (itempos.left + itemwidth);

			if ( cpos >= visarea && $(this).find('.pos-right').length < 1) {
				$hovernav.addClass('pos-right');
			}

    		//	hover-klasse setzen, damit highlight auch bei focus auf layer funktioniert
			$(this).find('.nav-channel-name').addClass('js-hover');

    	}

    }, function() {
    	if($(this).find('.nav-channel-name').hasClass('js-hover')) {
    		$(this).find('.nav-channel-name').removeClass('js-hover');
    	}
    });
});
/**
 * @author trixta
 * @version 1.2
 */
(function($){

var mwheelI = {
			pos: [-260, -260]
		},
	minDif 	= 3,
	doc 	= document,
	root 	= doc.documentElement,
	body 	= doc.body,
	longDelay, shortDelay
;

function unsetPos(){
	if(this === mwheelI.elem){
		mwheelI.pos = [-260, -260];
		mwheelI.elem = false;
		minDif = 3;
	}
}

$.event.special.mwheelIntent = {
	setup: function(){
		var jElm = $(this).bind('mousewheel', $.event.special.mwheelIntent.handler);
		if( this !== doc && this !== root && this !== body ){
			jElm.bind('mouseleave', unsetPos);
		}
		jElm = null;
        return true;
    },
	teardown: function(){
        $(this)
			.unbind('mousewheel', $.event.special.mwheelIntent.handler)
			.unbind('mouseleave', unsetPos)
		;
        return true;
    },
    handler: function(e, d){
		var pos = [e.clientX, e.clientY];
		if( this === mwheelI.elem || Math.abs(mwheelI.pos[0] - pos[0]) > minDif || Math.abs(mwheelI.pos[1] - pos[1]) > minDif ){
            mwheelI.elem = this;
			mwheelI.pos = pos;
			minDif = 250;
			
			clearTimeout(shortDelay);
			shortDelay = setTimeout(function(){
				minDif = 10;
			}, 200);
			clearTimeout(longDelay);
			longDelay = setTimeout(function(){
				minDif = 3;
			}, 1500);
			e = $.extend({}, e, {type: 'mwheelIntent'});
            return $.event.dispatch.apply(this, arguments);
		}
    }
};
$.fn.extend({
	mwheelIntent: function(fn) {
		return fn ? this.bind("mwheelIntent", fn) : this.trigger("mwheelIntent");
	},
	
	unmwheelIntent: function(fn) {
		return this.unbind("mwheelIntent", fn);
	}
});

$(function(){
	body = doc.body;
	//assume that document is always scrollable, doesn't hurt if not
	$(doc).bind('mwheelIntent.mwheelIntentDefault', $.noop);
});
})(jQuery);
function onPreRenderCallback(renderSlot, bannerDescriptionAPI, renderControlAPI) {
	var options;
	var htxt = '';
	var wcss = '';
	options = bannerDescriptionAPI.getOptions();
	if (options.wrapper && parseInt(options.wrapper) > 0) {
		$.each( options, function( k, v ) {
			if (k == 'header_text')  { htxt = v; }
			if (k == 'wrapad_class') { wcss = v; }
		});
		pushWrapAdDIVs(renderControlAPI, renderSlot.getAttribute('id'), options.wrapad_class, options.header_text);
	}
}


function pushWrapAdDIVs(renderControlAPI, slotName, customWrapAdCssClass, customAdLabel) {
	var wrapAdClasses;
	wrapAdClasses = ['wrapad'];
	var innerWrapAdClasses;
	innerWrapAdClasses = ['innerwrapad'];
	if (slotName !== undefined) {
		wrapAdClasses.push(slotName);
	}
	if (customWrapAdCssClass !== undefined) {
		wrapAdClasses.push(customWrapAdCssClass);
	}
	if (customAdLabel == undefined) {
		innerWrapAdClasses.push('qc-nolabel');
	}
	renderControlAPI.addInnerWrapper(document.createElement('div')).className = wrapAdClasses.join(' ');
	renderControlAPI.addInnerWrapper(document.createElement('div')).className = innerWrapAdClasses.join(' ');
}


function OAS_RICH(pos) {}


var XADI = function(dsblSwitch) {
	var $this = this;
	this.aobj = null;
	this.dsblSwitch = dsblSwitch;
	this.pvars  = {};
	this.suppress  = {};
	this.campaigns = {};
	this.message = function(messagetype, message) {};
	this.debug = false;
	this.showpos = false;
	this.previewprofile = null;
	this.blocked = false;

	var dsabl_sad = {};
	dsabl_sad.hp = typeof sp_webcfg_global.dsabl_sad_hp != 'undefined' ? sp_webcfg_global.dsabl_sad_hp : false;
	dsabl_sad.all = typeof sp_webcfg_global.dsabl_sad != 'undefined' ? sp_webcfg_global.dsabl_sad : false;
	
	this.disabled = function(pos) {
		if (dsabl_sad.all) {
			return "alle Positionen unterdrueckt (GlobalConfig all)!";
		} else 	if (dsblSwitch && dsblSwitch == 'noads') {
			return "alle Positionen unterdrueckt (setup noads)!";
		} else if (dsblSwitch && typeof dsabl_sad[dsblSwitch] != 'undefined' && dsabl_sad[dsblSwitch]) {    	  
			return "alle Positionen unterdrueckt (GlobalConfig switch '"+dsblSwitch+"')!";	
		} else if (pos && $this.suppress[pos]) {    	  
			return "Position '"+pos+"' unterdrueckt (Flags)!";
		} 
		return null;
	};

	this.setSuppressed = function(mode) {
		if (mode == 1) {
			
			ADI.suppress 	= {"content_ad_1": true,"content_ad_2": true,"spezial_teaser": true};
		} else if (mode == 2) {
			ADI.suppress 	= {	"layer_ad": true, "superbanner": true, "billboard_1": true, "content_ad_1": true, "content_ad_2": true, "aaa_skyscraper_left": true,"footer_ad": true,
								"spezial_teaser": true,"skyscraper": true,"subchannel_teaser": true,"promotion_ad_vertrieb": true,		
								"promotion_ad_1": true,"promotion_ad_2": true,"promotion_ad_3": true,"promotion_ad_4": true,"promotion_ad_5": true		
						  	  };
		}
	};

	this.ad = function(pos) {
		var content = this.disabled(pos);
		if (content === null) {
			if (typeof $this.campaigns[pos] == 'undefined') {
				content = $this.message("error", "Position '"+pos+"' undefiniert!");
				if ($this.showpos) { $('#'+pos).addClass('adition-error'); }
			} else {
				if (typeof adition != 'undefined') {
					if ($this.showpos != '1') {
						adition.srq.push(function(api) { api.renderSlot(pos); });
					}
					if ($this.showpos) { $('#'+pos).addClass('adition-ok'); }
				} else { 
					if ($this.debug) { content = $this.message("error", 'WARNING: adition is ' + typeof adition); }
				}
			}
		} else {
			content = $this.message("info", content);
			if ($this.showpos) { $('#'+pos).addClass('adition-suppressed'); }
		}
		if (content) document.write(content);
		if ($this.showpos) $('#'+pos).addClass('adition-showpos');
	};
	
	this.write = function(pos) {
		document.write('<div class="adition" id="'+pos+'" data-position="'+pos+'"><scr' + 'ipt type="text/javascript">ADI.ad("'+pos+'");</scr' + 'ipt></div>');
		if ($this.debug) {
			 // var m=ADI.message("error",'WARNING: ADI.write deprecated (Migrationsaufruf aus HTML-Asset?)'); 
			 // if(m) document.write(m);
		}
	};

	this.setup = function(aobj) {
		// initiales Laden - nur, wenn Not-Aus nicht aktiv
		$this.aobj = (typeof aobj != 'undefined' ? aobj : null);
		$this.blocked = ($this.aobj === null);

		var hash = new HashParams();
		$this.previewprofile = hash.value("adition.preview");
	};

	this.campaignsToRender = function() {
		// quickfix: Kampagnen alphanumerisch sortiert initialisieren
		var sorted = [],
			keys   = [],
			k, i, len;

		for (k in $this.campaigns) {
			if (k === 'preroll' || k === 'postroll') continue;
			if ($this.campaigns.hasOwnProperty(k)) keys.push(k);
		}
		keys.sort();
		len = keys.length;
		for (i = 0; i < len; i++) {
			k = keys[i];
			sorted.push({name: k, value: $this.campaigns[k]});
		}
		return sorted;
	}
	
	this.reload = function(adposition) {
		if (typeof adposition == 'undefined') {
			$this.aobj.srq.push(function(api) {
				api.reload();
			});
		} else {
			$this.aobj.srq.push(function(api) {
				api.reload([adposition]).completeRendering();;
			});
		}
	}
}

function ADIABD() {
	var instance = this;
	instance.status = 0;
	instance.message = null;
	instance._detect = function() {
		
		if (typeof ADI == 'undefined' || typeof ADI.blocked != 'boolean') {
			instance.status = -8;
			instance.message = "no ADI setup";
			return;
		}	
		if (ADI.dsblSwitch == 'noads') {
			instance.status = -3;
			instance.message = "no ads by setup call";
			return;
		}
		if (!ADI.blocked && ADI.aobj == null) {
			if (ADI.disabled()) {
				instance.status = -2;
				instance.message = "no ads by global config";
			} else {
				instance.status = -4;
				instance.message = "error on adition setup call";
			}
			return;
		}
		if (spnetENV_SERVER && spnetENV_SERVER != window.location.protocol + "/"+"/"+window.location.host) {
			instance.status = -5;
			instance.message = "no cross domain ajax call allowed ("+spnetENV_SERVER+" <=> " + window.location.protocol + "/"+"/"+window.location.host + ")";
			return;
		}
		
		try {
			
			var gc = $.ajax({
						url: spnetENV_SERVER + "/static/sys/v10/bannerad/ad.gif",
						async: false,
						success: function() {
							if (ADI.blocked) {
								instance.status = 2;
							} else {
								instance.status = 4;	
							}
						},
						error: function() { 
							if (ADI.blocked) {
								instance.status = 1;
							} else {
								instance.status = 3;	
							}
						}
					});
	
		} catch(e) {
			instance.status = -7;
			instance.message = "ABD.detect error";
			return;
		}
		instance._setCachedStatus();
	};
		
		
	instance._setCachedStatus = function() {
		var lifetime = 300;
		var date = new Date();
	    var expires = Math.round((date.setSeconds(date.getSeconds()+lifetime))/1000);
		var cache = {status: instance.status, expires: expires};
		try {
			localStorage.setItem("ABD", JSON.stringify(cache));
		}
		catch (e) {
			console.log("ABD: No storage available, nothing cached.");
		}
	    console.log("ABD-status to cache",instance.status);
	}

	instance._getCachedStatus = function() {
	    var date = new Date();
	    var current = Math.round(+date/1000);
	    var cache =null;
	    try {
		    var cache = JSON.parse(localStorage.getItem("ABD"));
	    }
		catch (e) {
			return false;
		}
		if (cache == null) 
			return false;
		var stored_time = cache.expires;
		if (stored_time==undefined || stored_time=='null' || stored_time < current)
			return false;
	    
	    console.log("ABD-status from cache",cache.status);
	    instance.status = cache.status;
	    return true;
	}

	instance.getStatus = function() {
		if (instance.status !== 0)
			return instance.status;
		if (instance._getCachedStatus()) 
			return instance.status;
		instance._detect();
		return instance.status;
	};
};


/*** runterschieben Top-Asset bei belegtem Subchannel - wird als Callback aufgerufen ***/
/*** oas Middle1 adition subchannel_teaser ***/
function spSwitchTopAsset() {
	try {
		var asset		= document.getElementById('js-article-top-wide-asset');
		var articlecol	= document.getElementById('js-article-column');

		var nodes = asset.childNodes;
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			var c = node.className;
			if(c && c.toString().indexOf('spXXLPano') > -1){
				node.className = c.replace('spXXLPano', 'panoV9');
				node.removeAttribute('style');
			}
		}
		
		if ($('#einestages').length > 0) {
			$('#content-main > .column-both').addClass('einestages-middle1-active');
		} else {
			$(articlecol).prepend($(asset).html());
			$(asset).empty();
		}
		
		$('#js-article-column .panoV9:first-child a').removeAttr('style');

		return false;
	}
	catch (e) {}
}


/**
 * QC-Belegungen in Ressort-Boxen HP
 */
hpRessortAd = function(pdiv, x, force) {
	if ($(pdiv).attr("id").indexOf('promotion_ad_hp_') == 0) {
		if((typeof force == "boolean" &&  force) || $(pdiv).find('.wrapad').length > 0) {
			var p = $(pdiv).parent().parent();
			$(p).find('.js-ressort-content').remove();
			$(p).find('div[class^="js-ressort-ad"]').show();
		}
	}
};
var spMobilePlusUrl;
var spOldMobileUrl;
var spSkipDelegation;

var spDeviceConfig ={
	"devices": [
	           {"name": "iPad", "target":"ignore",
	        	"patterngroups": [
	        	                  {"white": ["ipad"]}
	        	                  ]
	           }, 
	           {"name": "iPhone/iPod", "target":"mobileplus",
	        	   "patterngroups": [
	        	                     {"white": ["iphone"]},
	        	                     {"white": ["ipod"]}
	        	                     ]
	           }, 
	           {"name": "OperaMini", "target":"ignore",
	        	   "patterngroups": [
	        	                     {"white": ["opera","mobile"]},
	        	                     {"white": ["opera","mini"]},
	        	                     {"white": ["opera","htc"]}
	        	                     ]
	           },
	           {"name": "AndroidMobile", "target":"mobileplus",
	        	   "patterngroups": [
	        	                     {"white": ["android"]},
	        	                     {"white": ["mobile"]}      	                     
	        	                     ]
	           },
	           {"name": "Android", "target":"ignore",
	        	   "patterngroups": [
	        	                     {"white": ["android"]}
	        	                     ]
	           },
	           {"name": "ChromeOS", "target":"www",
	        	   "patterngroups": [
	        	                     {"white": ["CrOS"], "black": ["Microsoft"]}
	        	                     ]
	           },
	           {"name": "FirefoxOS", "target":"mobileplus",
	        	   "patterngroups": [
	        	                     {"white": ["mobile","firefox/"]},
	        	                     {"white": ["tablet","firefox/"]}
	        	                     ]
	           },
	           {"name": "Windows Phone", "target":"mobileplus",
	        	   "patterngroups": [
	        	                     	{"white": ["Windows Phone", "IEMobile/7"]},
	        	                     	{"white": ["Windows Phone", "IEMobile/8"]},
	        	                     	{"white": ["Windows Phone", "IEMobile/9"]},
	        	                     	{"white": ["Windows Phone", "IEMobile/10"]},
	        	                     	{"white": ["Windows Phone", "IEMobile/11"]}
	        	                     ]
	           },
	           {"name": "Windows Tablet ARM", "target":"www",
	        	   "patterngroups": [
	        	                     	{"white": ["MSIE", " arm"]}
	        	                     ]
	           },
	           {"name": "Blackberry", "target":"mobileplus",
	        	   "patterngroups": [
	        	                     	{"white": ["blackberry","Version/6"]},
	        	                     	{"white": ["blackberry","Version/7"]},
	        	                     	{"white": ["blackberry","Version/8"]},
	        	                     	{"white": ["bb10","Version/10"]}
	        	                     ]
	           },
	           {"name": "OldMobileDevice","target":"mobile",
	        	   "patterngroups": [
									{"white": ["blackberry"]},
									{"white": ["midp"]},
									{"white": ["240x320"]},
									{"white": ["480x640"]},
									{"white": ["netfront"]},
									{"white": ["nokia"]},
									{"white": ["panasonic"]},
									{"white": ["portalmmm"]},
									{"white": ["sharp"]},
									{"white": ["sie-"]},
									{"white": ["sonyericsson"]},
									{"white": ["symbian"]},
									{"white": ["windows ce"]},
									{"white": ["benq"]},
									{"white": ["mda"]},
									{"white": ["mot-"]},
									{"white": ["opera mini"]},
									{"white": ["philips"]},
									{"white": ["pocket pc"]},
									{"white": ["sagem"]},
									{"white": ["samsung"]},
									{"white": ["sda"]},
									{"white": ["sgh-"]},
									{"white": ["vodafone"]},
									{"white": ["xda"]},
									{"white": ["htc"]},
									{"white": ["palm"]},
									{"white": ["webos"]},
									{"white": ["mobile"]},
									{"white": ["mobi"]},
									{"white": ["mini"]},
									{"white": ["XV6850"]},
									{"white": ["plucker"]},
									{"white": ["Phone"]},
									{"white": ["Novarra-Vision"]},	        	                     
	        	                    {"white": ["windows", "mobi"]},
	        	                    {"white": ["opera", "mobi"]},
	        	                    {"white": ["nintendo", "dsi"]}
	        	                     ]
		       },
	           {"name": "Desktop", "target":"www",
	        	   "patterngroups": [
	        	                     {"white": ["Windows"]},
	        	                     {"white": ["Linux"]},
	        	                     {"white": ["konqueror"]},
	        	                     {"white": ["Macintosh"]},
	        	                     {"white": ["mac_powerpc"]}
	        	                     ]
			   }
	           ]
};

function spDelegate(forceDelegation) {
	var murl = $("#alternate-mobileplus").attr("href");
	if (murl) {
		
		var skipDelegation = SPONgetCookie('spSkipDelegation');
		skipDelegation=(skipDelegation != null && skipDelegation == 'true');
		
		// never do the spSkipDelegation for black berries (cookie must be set by mobile server only):
		if(spUA.isBlackBerry()) spSkipDelegation=false;
		
		if (!skipDelegation || spSkipDelegation) {	
			var redirectHash="spRedirectedFrom=www&referrrer="+document.referrer;
			var ua=navigator.userAgent;
			var device=spFindDevice(spDeviceConfig, ua);
			if (device != null) {
				if (device.target != 'www' && device.target != 'ignore') {
					if (spSkipDelegation && !forceDelegation) {
						// renew cookie each time
						spSetCookie('spSkipDelegation', true, 0.17, '/', 'spiegel.de');
					}
					else { 
						if(window.location.hash) {
							redirectHash = redirectHash + '&' + window.location.hash.substr(1);
						}
						document.location.href=murl+'#'+redirectHash;
					}
				}
			}
		}
	}
}



spDelegate(false);

function spMobileRedirect(){
	spSetCookie('spSkipDelegation', false, 0, '/', 'spiegel.de');
	spDelegate(true);
}


function spFindDevice(spDeviceConfig, ua) {
	ua=ua.toLowerCase();
	var devices=spDeviceConfig.devices;
	for (var key in devices) {
		var device=devices[key];

		var patterngroups=device.patterngroups
		for (var p in patterngroups) {

			var  found = true;
			var patternList=patterngroups[p].white
			for (var k in patternList) {
				var pattern=patternList[k].toLowerCase();
				if (ua.indexOf(pattern) == -1) {
					found=false;
					break;
				}
			}
			if (found) {
				var patternList=patterngroups[p].black
				for (var k in patternList) {
					var pattern=patternList[k].toLowerCase();
					if (ua.indexOf(pattern) != -1) {
						found=false;
						break;
					}
				}
			}
			if (found)
				return device;			
		}
	}
	return null;
}!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):"object"==typeof exports?exports.jwplayer=b():a.jwplayer=b()}(this,function(){return function(a){function b(c){if(d[c])return d[c].exports;var e=d[c]={exports:{},id:c,loaded:!1};return a[c].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c=window.webpackJsonpjwplayer;window.webpackJsonpjwplayer=function(d,f){for(var g,h,i=0,j=[];i<d.length;i++)h=d[i],e[h]&&j.push.apply(j,e[h]),e[h]=0;for(g in f)a[g]=f[g];for(c&&c(d,f);j.length;)j.shift().call(null,b)};var d={},e={0:0};return b.e=function(a,c){if(0===e[a])return c.call(null,b);if(void 0!==e[a])e[a].push(c);else{e[a]=[c];var d=document.getElementsByTagName("head")[0],f=document.createElement("script");f.type="text/javascript",f.charset="utf-8",f.async=!0,f.src=b.p+""+({2:"provider.youtube",3:"provider.dashjs",4:"provider.shaka",5:"provider.cast"}[a]||a)+".js",d.appendChild(f)}},b.m=a,b.c=d,b.p="",b(0)}([function(a,b,c){a.exports=c(38)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(a,b,c){var d,e;d=[c(39),c(171),c(47)],e=function(a,b,c){return window.jwplayer?window.jwplayer:c.extend(a,b)}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(40),c(45),c(165)],e=function(a,b){return c.p=b.loadFrom(),a.selectPlayer}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(41),c(93),c(47)],e=function(a,b,c){var d=a.selectPlayer,e=function(){var a=d.apply(this,arguments);return a?a:{registerPlugin:function(a,c,d){"jwpsrv"!==a&&b.registerPlugin(a,c,d)}}};return c.extend(a,{selectPlayer:e})}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(42),c(47),c(76),c(74),c(70),c(93)],e=function(a,b,c,d,e,f){function g(a){var f=a.getName().name;if(!b.find(e,b.matches({name:f}))){if(!b.isFunction(a.supports))throw{message:"Tried to register a provider with an invalid object"};e.unshift({name:f,supports:a.supports})}var g=function(){};g.prototype=c,a.prototype=new g,d[f]=a}var h=[],i=0,j=function(b){var c,d;return b?"string"==typeof b?(c=k(b),c||(d=document.getElementById(b))):"number"==typeof b?c=h[b]:b.nodeType&&(d=b,c=k(d.id)):c=h[0],c?c:d?l(new a(d,m)):{registerPlugin:f.registerPlugin}},k=function(a){for(var b=0;b<h.length;b++)if(h[b].id===a)return h[b];return null},l=function(a){return i++,a.uniqueId=i,h.push(a),a},m=function(a){for(var b=h.length;b--;)if(h[b].uniqueId===a.uniqueId){h.splice(b,1);break}},n={selectPlayer:j,registerProvider:g,availableProviders:e,registerPlugin:f.registerPlugin};return j.api=n,n}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(66),c(65),c(63),c(45),c(81),c(47),c(43),c(162),c(163),c(164),c(58)],e=function(a,b,c,d,e,f,g,h,i,j,k){function l(a){d.addClass(a,"jw-tab-focus")}function m(a){d.removeClass(a,"jw-tab-focus")}var n=function(n,o){var p,q=this,r=!1,s={};f.extend(this,c),this.utils=d,this._=f,this.Events=c,this.version=k,this.trigger=function(a,b){return b=f.isObject(b)?f.extend({},b):{},b.type=a,c.trigger.call(q,a,b)},this.on=function(a,b){if(f.isString(b))throw new TypeError("eval callbacks depricated");var e=function(){try{b.apply(this,arguments)}catch(c){d.log('There was an error calling back an event handler for "'+a+'". Error: '+c.message)}};return c.on.call(q,a,e)},this.dispatchEvent=this.trigger,this.removeEventListener=this.off.bind(this);var t=function(){p=new g(n),h(q,p),i(q,p),p.on(a.JWPLAYER_PLAYLIST_ITEM,function(){s={}}),p.on(a.JWPLAYER_MEDIA_META,function(a){f.extend(s,a.metadata)}),p.on(a.JWPLAYER_VIEW_TAB_FOCUS,function(a){a.hasFocus===!0?l(this.getContainer()):m(this.getContainer())}),p.on(a.JWPLAYER_READY,function(a){r=!0,u.tick("ready"),a.setupTime=u.between("setup","ready")}),p.on("all",q.trigger)};t(),j(this),this.id=n.id;var u=this._qoe=new e;u.tick("init");var v=function(){r=!1,s={},q.off(),p&&p.off(),p&&p.playerDestroy&&p.playerDestroy()},w=function(a){var b=q.plugins;return b&&b[a]};return this.setup=function(a){return u.tick("setup"),v(),t(),d.foreach(a.events,function(a,b){var c=q[a];"function"==typeof c&&c.call(q,b)}),a.id=q.id,p.setup(a,this),q},this.qoe=function(){var b=p.getItemQoe(),c=u.between("setup","ready"),d=b.between(a.JWPLAYER_MEDIA_PLAY_ATTEMPT,a.JWPLAYER_MEDIA_FIRST_FRAME);return{setupTime:c,firstFrame:d,player:u.dump(),item:b.dump()}},this.getContainer=function(){return p.getContainer?p.getContainer():n},this.getMeta=this.getItemMeta=function(){return s},this.getPlaylistItem=function(a){if(!d.exists(a))return p._model.get("playlistItem");var b=q.getPlaylist();return b?b[a]:null},this.getRenderingMode=function(){return"html5"},this.load=function(a){var b=w("vast")||w("googima");return b&&b.destroy(),p.load(a),q},this.play=function(a){if(a===!0)return p.play(),q;if(a===!1)return p.pause(),q;switch(a=q.getState()){case b.PLAYING:case b.BUFFERING:p.pause();break;default:p.play()}return q},this.pause=function(a){return f.isBoolean(a)?this.play(!a):this.play()},this.createInstream=function(){return p.createInstream()},this.castToggle=function(){p&&p.castToggle&&p.castToggle()},this.playAd=this.pauseAd=d.noop,this.remove=function(){return o(q),q.trigger("remove"),v(),q},this};return n}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(44),c(71)],e=function(a,b){var d=a.prototype.setup;return a.prototype.setup=function(){d.apply(this,arguments);var a=this._model.get("edition"),e=b(a),f=this._model.get("cast"),g=this;e("casting")&&f&&f.appid&&c.e(5,function(a){var b=c(156);g._castController=new b(g,g._model),g.castToggle=g._castController.castToggle.bind(g._castController)})},a}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(59),c(113),c(61),c(47),c(88),c(110),c(67),c(99),c(45),c(114),c(63),c(64),c(65),c(66),c(154)],e=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(a){return function(){var b=Array.prototype.slice.call(arguments,0);this.eventsQueue.push([a,b])}}function q(a){return a===m.LOADING||a===m.STALLED?m.BUFFERING:a}var r=function(a){this.originalContainer=this.currentContainer=a,this.eventsQueue=[],d.extend(this,k),this._model=new g};return r.prototype={play:p("play"),pause:p("pause"),setVolume:p("setVolume"),setMute:p("setMute"),seek:p("seek"),stop:p("stop"),load:p("load"),playlistNext:p("playlistNext"),playlistPrev:p("playlistPrev"),playlistItem:p("playlistItem"),setFullscreen:p("setFullscreen"),setCurrentCaptions:p("setCurrentCaptions"),setCurrentQuality:p("setCurrentQuality"),setup:function(g,k){function o(){S.mediaModel.on("change:state",function(a,b){var c=q(b);S.set("state",c)})}function p(){V=null,S.on("change:state",l,this),S.on("change:castState",function(a,b){$.trigger(n.JWPLAYER_CAST_SESSION,b)}),S.on("change:fullscreen",function(a,b){$.trigger(n.JWPLAYER_FULLSCREEN,{fullscreen:b})}),S.on("change:playlistItem",function(a,b){$.trigger(n.JWPLAYER_PLAYLIST_ITEM,{index:a.get("item"),item:b})}),S.on("change:playlist",function(a,b){b.length&&$.trigger(n.JWPLAYER_PLAYLIST_LOADED,{playlist:b})}),S.on("change:volume",function(a,b){$.trigger(n.JWPLAYER_MEDIA_VOLUME,{volume:b})}),S.on("change:mute",function(a,b){$.trigger(n.JWPLAYER_MEDIA_MUTE,{mute:b})}),S.on("change:scrubbing",function(a,b){b?x():v()}),S.on("change:captionsList",function(a,b){$.trigger(n.JWPLAYER_CAPTIONS_LIST,{tracks:b,track:N()})}),S.mediaController.on("all",$.trigger.bind($)),T.on("all",$.trigger.bind($)),this.showView(T.element()),window.addEventListener("beforeunload",function(){Q()||w(!0)}),d.defer(r)}function r(){for($.trigger(n.JWPLAYER_READY,{setupTime:0}),$.trigger(n.JWPLAYER_PLAYLIST_LOADED,{playlist:S.get("playlist")}),$.trigger(n.JWPLAYER_PLAYLIST_ITEM,{index:S.get("item"),item:S.get("playlistItem")}),$.trigger(n.JWPLAYER_CAPTIONS_LIST,{tracks:S.get("captionsList"),track:S.get("captionsIndex")}),S.get("autostart")&&v();$.eventsQueue.length>0;){var a=$.eventsQueue.shift(),b=a[0],c=a[1]||[];$[b].apply($,c)}}function s(a){switch(w(!0),S.get("autostart")&&S.once("setItem",v),typeof a){case"string":t(a);break;case"object":S.setPlaylist(a),S.setItem(0);break;case"number":S.setItem(a)}}function t(a){var b=new h;b.on(n.JWPLAYER_PLAYLIST_LOADED,function(a){s(a.playlist)}),b.on(n.JWPLAYER_ERROR,function(a){S.set("state",m.ERROR),s([]),a.message="Could not load playlist: "+a.message,$.trigger.call($,a.type,a)}),b.load(a)}function u(){var a=$._instreamAdapter&&$._instreamAdapter.getState();return d.isString(a)?a:S.get("state")}function v(){var a;if(S.get("state")!==m.ERROR){var b=$._instreamAdapter&&$._instreamAdapter.getState();if(d.isString(b))return k.pauseAd(!1);if(S.get("state")===m.COMPLETE&&(w(!0),S.setItem(0)),!Y&&(Y=!0,$.trigger(n.JWPLAYER_MEDIA_BEFOREPLAY,{}),Y=!1,X))return X=!1,void(W=null);if(y()){if(0===S.get("playlist").length)return!1;a=i.tryCatch(function(){S.loadVideo()})}else S.get("state")===m.PAUSED&&(a=i.tryCatch(function(){S.playVideo()}));return a instanceof i.Error?($.trigger(n.JWPLAYER_ERROR,a),W=null,!1):!0}}function w(a){S.off("setItem",v);var b=!a;W=null;var c=i.tryCatch(function(){_().stop()},$);return c instanceof i.Error?($.trigger(n.JWPLAYER_ERROR,c),!1):(b&&(Z=!0),Y&&(X=!0),!0)}function x(){W=null;var a=$._instreamAdapter&&$._instreamAdapter.getState();if(d.isString(a))return k.pauseAd(!0);switch(S.get("state")){case m.ERROR:return!1;case m.PLAYING:case m.BUFFERING:var b=i.tryCatch(function(){_().pause()},this);if(b instanceof i.Error)return $.trigger(n.JWPLAYER_ERROR,b),!1;break;default:Y&&(X=!0)}return!0}function y(){var a=S.get("state");return a===m.IDLE||a===m.COMPLETE||a===m.ERROR}function z(a){S.get("state")!==m.ERROR&&(S.get("scrubbing")||S.get("state")===m.PLAYING||v(!0),_().seek(a))}function A(a){w(!0),S.setItem(a),v()}function B(){A(S.get("item")-1)}function C(){A(S.get("item")+1)}function D(){if(y()){if(Z)return void(Z=!1);W=D;var a=S.get("item");return a===S.get("playlist").length-1?void(S.get("repeat")?C():(S.set("state",m.COMPLETE),$.trigger(n.JWPLAYER_PLAYLIST_COMPLETE,{}))):void C()}}function E(a){_().setCurrentQuality(a)}function F(){return _()?_().getCurrentQuality():-1}function G(){return this._model?this._model.getConfiguration():void 0}function H(){if(this._model.mediaModel)return this._model.mediaModel.get("visualQuality");var a=I();if(a){var b=F(),c=a[b];if(c)return{level:d.extend({index:b},c),mode:"",reason:""}}return null}function I(){return _()?_().getQualityLevels():null}function J(a){_().setCurrentAudioTrack(a)}function K(){return _()?_().getCurrentAudioTrack():-1}function L(){return _()?_().getAudioTracks():null}function M(a){S.setVideoSubtitleTrack(a),$.trigger(n.JWPLAYER_CAPTIONS_CHANGED,{tracks:O(),track:a})}function N(){return U.getCurrentIndex()}function O(){return U.getCaptionsList()}function P(){var a=S.getVideo();if(a){var b=a.detachMedia();if(b instanceof HTMLVideoElement)return b}return null}function Q(){var a=S.getVideo();return a?a.isCaster:!1}function R(a){var b=i.tryCatch(function(){S.getVideo().attachMedia(a)});return b instanceof i.Error?void i.log("Error calling _attachMedia",b):void("function"==typeof W&&W())}var S,T,U,V,W,X,Y=!1,Z=!1,$=this,_=function(){return S.getVideo()},aa=new a(g);S=this._model.setup(aa),T=this._view=new j(k,S),U=new f(k,S),V=new e(k,S,T),V.on(n.JWPLAYER_READY,p,this),V.on(n.JWPLAYER_SETUP_ERROR,function(a){$.setupError(a.message)}),S.mediaController.on(n.JWPLAYER_MEDIA_COMPLETE,function(){d.defer(D)}),S.mediaController.on(n.JWPLAYER_MEDIA_ERROR,function(a){S.set("state",m.ERROR);var b=d.extend({},a);b.type=n.JWPLAYER_ERROR,this.trigger(b.type,b)},this),o(),S.on("change:mediaModel",o),this.play=v,this.pause=x,this.seek=z,this.stop=w,this.load=s,this.playlistNext=C,this.playlistPrev=B,this.playlistItem=A,this.setCurrentCaptions=M,this.setCurrentQuality=E,this.detachMedia=P,this.attachMedia=R,this.getCurrentQuality=F,this.getQualityLevels=I,this.setCurrentAudioTrack=J,this.getCurrentAudioTrack=K,this.getAudioTracks=L,this.getCurrentCaptions=N,this.getCaptionsList=O,this.getVisualQuality=H,this.getConfig=G,this.getState=u,this.setVolume=S.setVolume,this.setMute=S.setMute,this.getProvider=function(){return S.get("provider")},this.getWidth=function(){return S.get("containerWidth")},this.getHeight=function(){return S.get("containerHeight")},this.getContainer=function(){return this.currentContainer},this.resize=T.resize,this.getSafeRegion=T.getSafeRegion,this.setCues=T.addCues,this.setFullscreen=T.fullscreen,this.addButton=function(a,b,c,e){var f={img:a,tooltip:b,callback:c,id:e},g=S.get("dock");g=g?g.slice(0):[],g=d.reject(g,d.matches({id:f.id})),g.push(f),S.set("dock",g)},this.removeButton=function(a){var b=S.get("dock")||[];b=d.reject(b,d.matches({id:a})),S.set("dock",b)},this.checkBeforePlay=function(){return Y},this.getItemQoe=function(){return S._qoeItem},this.setControls=function(a){S.set("controls",a)},this.playerDestroy=function(){this.stop(),this.showView(this.originalContainer),T&&T.destroy(),S&&S.destroy(),V&&(V.destroy(),V=null)},this.isBeforePlay=this.checkBeforePlay,this.isBeforeComplete=function(){return S.getVideo().checkComplete()},this.createInstream=function(){return this.instreamDestroy(),this._instreamAdapter=new c(this,S,T),this._instreamAdapter},this.skipAd=function(){this._instreamAdapter&&this._instreamAdapter.skipAd()},this.instreamDestroy=function(){$._instreamAdapter&&$._instreamAdapter.destroy()},b(k,this),V.start()},showView:function(a){(document.documentElement.contains(this.currentContainer)||(this.currentContainer=document.getElementById(this._model.get("id")),this.currentContainer))&&(this.currentContainer.parentElement&&this.currentContainer.parentElement.replaceChild(a,this.currentContainer),this.currentContainer=a)},setupError:function(a){var b=i.createElement(o(this._model.get("id"),this._model.get("skin"),a)),c=this._model.get("width"),e=this._model.get("height");i.style(b,{width:c.toString().indexOf("%")>0?c:c+"px",height:e.toString().indexOf("%")>0?e:e+"px"}),this.showView(b);var f=this;d.defer(function(){f.trigger(n.JWPLAYER_SETUP_ERROR,{message:a})})}},r}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(50),c(47),c(51),c(52),c(54),c(46),c(55),c(48),c(56),c(49)],e=function(a,b,c,d,e,f,g,h,i,j){var k={};return k.log=function(){window.console&&("object"==typeof console.log?console.log(Array.prototype.slice.call(arguments,0)):console.log.apply(console,arguments))},k.between=function(a,b,c){return Math.max(Math.min(a,c),b)},k.foreach=function(a,b){var c,d;for(c in a)"function"===k.typeOf(a.hasOwnProperty)?a.hasOwnProperty(c)&&(d=a[c],b(c,d)):(d=a[c],b(c,d))},k.indexOf=b.indexOf,k.noop=function(){},k.seconds=a.seconds,k.prefix=a.prefix,k.suffix=a.suffix,b.extend(k,f,h,c,g,d,e,i,j),k}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(48),c(49)],e=function(a,b,c){function d(a){return/^(?:(?:https?|file)\:)?\/\//.test(a)}var e={};return e.getAbsolutePath=function(a,c){if(b.exists(c)||(c=document.location.href),b.exists(a)){if(d(a))return a;var e,f=c.substring(0,c.indexOf("://")+3),g=c.substring(f.length,c.indexOf("/",f.length+1));if(0===a.indexOf("/"))e=a.split("/");else{var h=c.split("?")[0];h=h.substring(f.length+g.length+1,h.lastIndexOf("/")),e=h.split("/").concat(a.split("/"))}for(var i=[],j=0;j<e.length;j++)e[j]&&b.exists(e[j])&&"."!==e[j]&&(".."===e[j]?i.pop():i.push(e[j]));return f+g+"/"+i.join("/")}},e.getScriptPath=a.memoize(function(a){for(var b=document.getElementsByTagName("script"),c=0;c<b.length;c++){var d=b[c].src;if(d&&d.indexOf(a)>=0)return d.substr(0,d.indexOf(a))}return""}),e.parseXML=function(a){var b=null;return c.tryCatch(function(){if(window.DOMParser){b=(new window.DOMParser).parseFromString(a,"text/xml");var c=b.childNodes;c&&c.length&&c[0].firstChild&&"parsererror"===c[0].firstChild.nodeName&&(b=null)}else b=new window.ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)}),b},e.serialize=function(a){if(void 0===a)return null;if("string"==typeof a&&a.length<6){var b=a.toLowerCase();if("true"===b)return!0;if("false"===b)return!1;if(!isNaN(Number(a))&&!isNaN(parseFloat(a)))return Number(a)}return a},e.parseDimension=function(a){return"string"==typeof a?""===a?0:a.lastIndexOf("%")>-1?a:parseInt(a.replace("px",""),10):a},e.timeFormat=function(a){if(a>0){var b=Math.floor(a/3600),c=Math.floor((a-3600*b)/60),d=Math.floor(a%60);return(b?b+":":"")+(10>c?"0":"")+c+":"+(10>d?"0":"")+d}return"00:00"},e.adaptiveType=function(a){if(-1!==a){var b=-120;if(b>=a)return"DVR";if(0>a||a===1/0)return"LIVE"}return"VOD"},e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){var a={},b=Array.prototype,c=Object.prototype,d=Function.prototype,e=b.slice,f=b.concat,g=c.toString,h=c.hasOwnProperty,i=b.map,j=b.forEach,k=b.filter,l=b.every,m=b.some,n=b.indexOf,o=Array.isArray,p=Object.keys,q=d.bind,r=function(a){return a instanceof r?a:this instanceof r?void 0:new r(a)},s=r.each=r.forEach=function(b,c,d){if(null==b)return b;if(j&&b.forEach===j)b.forEach(c,d);else if(b.length===+b.length){for(var e=0,f=b.length;f>e;e++)if(c.call(d,b[e],e,b)===a)return}else for(var g=r.keys(b),e=0,f=g.length;f>e;e++)if(c.call(d,b[g[e]],g[e],b)===a)return;return b};r.map=r.collect=function(a,b,c){var d=[];return null==a?d:i&&a.map===i?a.map(b,c):(s(a,function(a,e,f){d.push(b.call(c,a,e,f))}),d)},r.find=r.detect=function(a,b,c){var d;return t(a,function(a,e,f){return b.call(c,a,e,f)?(d=a,!0):void 0}),d},r.filter=r.select=function(a,b,c){var d=[];return null==a?d:k&&a.filter===k?a.filter(b,c):(s(a,function(a,e,f){b.call(c,a,e,f)&&d.push(a)}),d)},r.reject=function(a,b,c){return r.filter(a,function(a,d,e){return!b.call(c,a,d,e)},c)},r.compact=function(a){return r.filter(a,r.identity)},r.every=r.all=function(b,c,d){c||(c=r.identity);var e=!0;return null==b?e:l&&b.every===l?b.every(c,d):(s(b,function(b,f,g){return(e=e&&c.call(d,b,f,g))?void 0:a}),!!e)};var t=r.some=r.any=function(b,c,d){c||(c=r.identity);var e=!1;return null==b?e:m&&b.some===m?b.some(c,d):(s(b,function(b,f,g){return e||(e=c.call(d,b,f,g))?a:void 0}),!!e)};r.size=function(a){return null==a?0:a.length===+a.length?a.length:r.keys(a).length},r.after=function(a,b){return function(){return--a<1?b.apply(this,arguments):void 0}},r.before=function(a,b){var c;return function(){return--a>0&&(c=b.apply(this,arguments)),1>=a&&(b=null),c}};var u=function(a){return null==a?r.identity:r.isFunction(a)?a:r.property(a)};r.sortedIndex=function(a,b,c,d){c=u(c);for(var e=c.call(d,b),f=0,g=a.length;g>f;){var h=f+g>>>1;c.call(d,a[h])<e?f=h+1:g=h}return f};var t=r.some=r.any=function(b,c,d){c||(c=r.identity);var e=!1;return null==b?e:m&&b.some===m?b.some(c,d):(s(b,function(b,f,g){return e||(e=c.call(d,b,f,g))?a:void 0}),!!e)};r.contains=r.include=function(a,b){return null==a?!1:(a.length!==+a.length&&(a=r.values(a)),r.indexOf(a,b)>=0)},r.where=function(a,b){return r.filter(a,r.matches(b))},r.findWhere=function(a,b){return r.find(a,r.matches(b))},r.max=function(a,b,c){if(!b&&r.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);var d=-(1/0),e=-(1/0);return s(a,function(a,f,g){var h=b?b.call(c,a,f,g):a;h>e&&(d=a,e=h)}),d},r.difference=function(a){var c=f.apply(b,e.call(arguments,1));return r.filter(a,function(a){return!r.contains(c,a)})},r.without=function(a){return r.difference(a,e.call(arguments,1))},r.indexOf=function(a,b,c){if(null==a)return-1;var d=0,e=a.length;if(c){if("number"!=typeof c)return d=r.sortedIndex(a,b),a[d]===b?d:-1;d=0>c?Math.max(0,e+c):c}if(n&&a.indexOf===n)return a.indexOf(b,c);for(;e>d;d++)if(a[d]===b)return d;return-1};var v=function(){};r.bind=function(a,b){var c,d;if(q&&a.bind===q)return q.apply(a,e.call(arguments,1));if(!r.isFunction(a))throw new TypeError;return c=e.call(arguments,2),d=function(){if(!(this instanceof d))return a.apply(b,c.concat(e.call(arguments)));v.prototype=a.prototype;var f=new v;v.prototype=null;var g=a.apply(f,c.concat(e.call(arguments)));return Object(g)===g?g:f}},r.partial=function(a){var b=e.call(arguments,1);return function(){for(var c=0,d=b.slice(),e=0,f=d.length;f>e;e++)d[e]===r&&(d[e]=arguments[c++]);for(;c<arguments.length;)d.push(arguments[c++]);return a.apply(this,d)}},r.once=r.partial(r.before,2),r.memoize=function(a,b){var c={};return b||(b=r.identity),function(){var d=b.apply(this,arguments);return r.has(c,d)?c[d]:c[d]=a.apply(this,arguments)}},r.delay=function(a,b){var c=e.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},r.defer=function(a){return r.delay.apply(r,[a,1].concat(e.call(arguments,1)))},r.throttle=function(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:r.now(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=r.now();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}},r.keys=function(a){if(!r.isObject(a))return[];if(p)return p(a);var b=[];for(var c in a)r.has(a,c)&&b.push(c);return b},r.invert=function(a){for(var b={},c=r.keys(a),d=0,e=c.length;e>d;d++)b[a[c[d]]]=c[d];return b},r.defaults=function(a){return s(e.call(arguments,1),function(b){if(b)for(var c in b)void 0===a[c]&&(a[c]=b[c])}),a},r.extend=function(a){return s(e.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a},r.pick=function(a){var c={},d=f.apply(b,e.call(arguments,1));return s(d,function(b){b in a&&(c[b]=a[b])}),c},r.omit=function(a){var c={},d=f.apply(b,e.call(arguments,1));for(var g in a)r.contains(d,g)||(c[g]=a[g]);return c},r.clone=function(a){return r.isObject(a)?r.isArray(a)?a.slice():r.extend({},a):a},r.isArray=o||function(a){return"[object Array]"==g.call(a)},r.isObject=function(a){return a===Object(a)},s(["Arguments","Function","String","Number","Date","RegExp"],function(a){r["is"+a]=function(b){return g.call(b)=="[object "+a+"]"}}),r.isArguments(arguments)||(r.isArguments=function(a){return!(!a||!r.has(a,"callee"))}),r.isFunction=function(a){return"function"==typeof a},r.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},r.isNaN=function(a){return r.isNumber(a)&&a!=+a},r.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==g.call(a)},r.isNull=function(a){return null===a},r.isUndefined=function(a){return void 0===a},r.has=function(a,b){return h.call(a,b)},r.identity=function(a){return a},r.constant=function(a){return function(){return a}},r.property=function(a){return function(b){return b[a]}},r.propertyOf=function(a){return null==a?function(){}:function(b){return a[b]}},r.matches=function(a){return function(b){if(b===a)return!0;for(var c in a)if(a[c]!==b[c])return!1;return!0}},r.now=Date.now||function(){return(new Date).getTime()},r.result=function(a,b){if(null==a)return void 0;var c=a[b];return r.isFunction(c)?c.call(a):c};var w=0;return r.uniqueId=function(a){var b=++w+"";return a?a+b:b},r}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(49)],e=function(a,b){var c={};return c.exists=function(a){switch(typeof a){case"string":return a.length>0;case"object":return null!==a;case"undefined":return!1}return!0},c.isHTTPS=function(){return 0===window.location.href.indexOf("https")},c.isRtmp=function(a,b){return 0===a.indexOf("rtmp")||"rtmp"===b},c.isYouTube=function(a,b){return"youtube"===b||/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(a)},c.youTubeID=function(a){var c=b.tryCatch(function(){return/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(a).slice(1).join("").replace("?","")});return c instanceof b.Error?"":c},c.typeOf=function(b){if(null===b)return"null";var c=typeof b;return"object"===c&&a.isArray(b)?"array":c},c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){var a=function(a,c,d){if(c=c||this,d=d||[],window.jwplayer&&window.jwplayer.debug)return a.apply(c,d);try{return a.apply(c,d)}catch(e){return new b(a.name,e)}},b=function(a,b){this.name=a,this.message=b};return{tryCatch:a,Error:b}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47)],e=function(a){function b(a){return a.indexOf("(format=m3u8-")>-1?"m3u8":!1}var c=function(a){return a.replace(/^\s+|\s+$/g,"")},d=function(a,b,c){for(a=""+a,c=c||"0";a.length<b;)a=c+a;return a},e=function(a,b){for(var c=0;c<a.attributes.length;c++)if(a.attributes[c].name&&a.attributes[c].name.toLowerCase()===b.toLowerCase())return a.attributes[c].value.toString();return""},f=function(a){if(!a||"rtmp"===a.substr(0,4))return"";var c=b(a);return c?c:(a=a.substring(a.lastIndexOf("/")+1,a.length).split("?")[0].split("#")[0],a.lastIndexOf(".")>-1?a.substr(a.lastIndexOf(".")+1,a.length).toLowerCase():void 0)},g=function(a){var b=parseInt(a/3600),c=parseInt(a/60)%60,e=a%60;return d(b,2)+":"+d(c,2)+":"+d(e.toFixed(3),6)},h=function(b){if(a.isNumber(b))return b;b=b.replace(",",".");var c=b.split(":"),d=0;return"s"===b.slice(-1)?d=parseFloat(b):"m"===b.slice(-1)?d=60*parseFloat(b):"h"===b.slice(-1)?d=3600*parseFloat(b):c.length>1?(d=parseFloat(c[c.length-1]),d+=60*parseFloat(c[c.length-2]),3===c.length&&(d+=3600*parseFloat(c[c.length-3]))):d=parseFloat(b),d},i=function(b,c){return a.map(b,function(a){return c+a})},j=function(b,c){return a.map(b,function(a){return a+c})};return{trim:c,pad:d,xmlAttribute:e,extension:f,hms:g,seconds:h,suffix:j,prefix:i}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(49)],e=function(a,b){function c(a){return function(){return e(a)}}var d={},e=a.memoize(function(a){var b=navigator.userAgent.toLowerCase();return null!==b.match(a)}),f=d.isInt=function(a){return parseFloat(a)%1===0};d.isFlashSupported=function(){var a=d.flashVersion();return a&&a>=11.2},d.isFF=c(/firefox/i),d.isChrome=c(/chrome/i),d.isIPod=c(/iP(hone|od)/i),d.isIPad=c(/iPad/i),d.isSafari602=c(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i);var g=d.isIETrident=function(a){return a?(a=parseFloat(a).toFixed(1),e(new RegExp("trident/.+rv:\\s*"+a,"i"))):e(/trident/i)},h=d.isMSIE=function(a){return a?(a=parseFloat(a).toFixed(1),e(new RegExp("msie\\s*"+a,"i"))):e(/msie/i)};d.isIE=function(a){return a?(a=parseFloat(a).toFixed(1),a>=11?g(a):h(a)):h()||g()},d.isSafari=function(){return e(/safari/i)&&!e(/chrome/i)&&!e(/chromium/i)&&!e(/android/i)};var i=d.isIOS=function(a){return e(a?new RegExp("iP(hone|ad|od).+\\sOS\\s"+a,"i"):/iP(hone|ad|od)/i)};d.isAndroidNative=function(a){return j(a,!0)};var j=d.isAndroid=function(a,b){return b&&e(/chrome\/[123456789]/i)&&!e(/chrome\/18/)?!1:a?(f(a)&&!/\./.test(a)&&(a=""+a+"."),e(new RegExp("Android\\s*"+a,"i"))):e(/Android/i)};return d.isMobile=function(){return i()||j()},d.isIframe=function(){return window.frameElement&&"IFRAME"===window.frameElement.nodeName},d.flashVersion=function(){if(d.isAndroid())return 0;var a,c=navigator.plugins;if(c&&(a=c["Shockwave Flash"],a&&a.description))return parseFloat(a.description.replace(/\D+(\d+\.?\d*).*/,"$1"));if("undefined"!=typeof window.ActiveXObject){var e=b.tryCatch(function(){return a=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),a?parseFloat(a.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/,".")):void 0});return e instanceof b.Error?0:e}return 0},d}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(50),c(47),c(53)],e=function(a,b,c){var d={};return d.createElement=function(a){var b=document.createElement("div");return b.innerHTML=a,b.firstChild},d.styleDimension=function(a){return a+(a.toString().indexOf("%")>0?"":"px")},d.classList=function(a){return a.classList?a.classList:a.className.split(" ")},d.hasClass=c.hasClass,d.addClass=function(c,d){var e=b.isString(c.className)?c.className.split(" "):[],f=b.isArray(d)?d:d.split(" ");b.each(f,function(a){b.contains(e,a)||e.push(a)}),c.className=a.trim(e.join(" "))},d.removeClass=function(c,d){var e=b.isString(c.className)?c.className.split(" "):[],f=b.isArray(d)?d:d.split(" ");c.className=a.trim(b.difference(e,f).join(" "))},d.toggleClass=function(a,c,e){var f=d.hasClass(a,c);e=b.isBoolean(e)?e:!f,e!==f&&(e?d.addClass(a,c):d.removeClass(a,c))},d.emptyElement=function(a){for(;a.firstChild;)a.removeChild(a.firstChild)},d.addStyleSheet=function(a){var b=document.createElement("link");b.rel="stylesheet",b.href=a,document.getElementsByTagName("head")[0].appendChild(b)},d.empty=function(a){if(a)for(;a.childElementCount>0;)a.removeChild(a.children[0])},d.bounds=function(a){var b={left:0,right:0,width:0,height:0,top:0,bottom:0};if(!a||!document.body.contains(a))return b;if(a.getBoundingClientRect){var c=a.getBoundingClientRect(a),d=window.pageYOffset,e=window.pageXOffset;if(!(c.width||c.height||c.left||c.top))return b;b.left=c.left+e,b.right=c.right+e,b.top=c.top+d,b.bottom=c.bottom+d,b.width=c.right-c.left,b.height=c.bottom-c.top}else{b.width=0|a.offsetWidth,b.height=0|a.offsetHeight;do b.left+=0|a.offsetLeft,b.top+=0|a.offsetTop;while(a=a.offsetParent);b.right=b.left+b.width,b.bottom=b.top+b.height}return b},d}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){return{hasClass:function(a,b){var c=" "+b+" ";return 1===a.nodeType&&(" "+a.className+" ").replace(/[\t\r\n\f]/g," ").indexOf(c)>=0}}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(50)],e=function(a){function b(a){a=a.split("-");for(var b=1;b<a.length;b++)a[b]=a[b].charAt(0).toUpperCase()+a[b].slice(1);return a.join("")}function c(b,c,d){if(""===c||void 0===c||null===c)return"";var e=d?" !important":"";return"string"==typeof c&&isNaN(c)?/png|gif|jpe?g/i.test(c)&&c.indexOf("url")<0?"url("+c+")":c+e:0===c||"z-index"===b||"opacity"===b?""+c+e:/color/i.test(b)?"#"+a.pad(c.toString(16).replace(/^0x/i,""),6)+e:Math.ceil(c)+"px"+e}var d,e={},f=function(a,b){d||(d=document.createElement("style"),d.type="text/css",document.getElementsByTagName("head")[0].appendChild(d));var c=a+JSON.stringify(b).replace(/"/g,""),f=document.createTextNode(c);e[a]&&d.removeChild(e[a]),e[a]=f,d.appendChild(f)},g=function(a,d){if(void 0!==a&&null!==a){void 0===a.length&&(a=[a]);var e,f={};for(e in d)f[e]=c(e,d[e]);for(var g=0;g<a.length;g++){var h,i=a[g];if(void 0!==i&&null!==i)for(e in f)h=b(e),i.style[h]!==f[e]&&(i.style[h]=f[e])}}},h=function(a){for(var b in e)b.indexOf(a)>=0&&(d.removeChild(e[b]),delete e[b])},i=function(a,b){var c="transform",d={};b=b||"",d[c]=b,d["-webkit-"+c]=b,d["-ms-"+c]=b,d["-moz-"+c]=b,d["-o-"+c]=b,g(a,d)},j=function(a,b){var c="rgb";a?(a=String(a).replace("#",""),3===a.length&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2])):a="000000";var d=[parseInt(a.substr(0,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(4,2),16)];return void 0!==b&&100!==b&&(c+="a",d.push(b/100)),c+"("+d.join(",")+")"};return{css:f,style:g,clearCss:h,transform:i,hexToRgba:j}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(48),c(46),c(49)],e=function(a,b,c,d){function e(a){return a&&a.indexOf("://")>=0&&a.split("/")[2]!==window.location.href.split("/")[2]}function f(a,b,c){return function(){a("Error loading file",b,c)}}function g(a,b,c,d,e){return function(){if(4===a.readyState)switch(a.status){case 200:h(a,b,c,d,e)();break;case 404:d("File not found",b,a)}}}function h(b,d,e,f,g){return function(){var h,i;if(g)e(b);else{try{if(h=b.responseXML,h&&(i=h.firstChild,h.lastChild&&"parsererror"===h.lastChild.nodeName))return void(f&&f("Invalid XML",d,b))}catch(j){}if(h&&i)return e(b);var k=c.parseXML(b.responseText);if(!k||!k.firstChild)return void(f&&f(b.responseText?"Invalid XML":d,d,b));b=a.extend({},b,{responseXML:k}),e(b)}}}var i={};return i.ajax=function(a,c,i,j){var k,l=!1;if(a.indexOf("#")>0&&(a=a.replace(/#.*$/,"")),e(a)&&b.exists(window.XDomainRequest))k=new window.XDomainRequest,k.onload=h(k,a,c,i,j),k.ontimeout=k.onprogress=function(){},k.timeout=5e3;else{if(!b.exists(window.XMLHttpRequest))return i&&i("",a,k),k;k=new window.XMLHttpRequest,k.onreadystatechange=g(k,a,c,i,j)}k.overrideMimeType&&k.overrideMimeType("text/xml"),k.onerror=f(i,a,k);var m=d.tryCatch(function(){k.open("GET",a,!0)});return m instanceof d.Error&&(l=!0),setTimeout(function(){if(l)return void(i&&i(a,a,k));var b=d.tryCatch(function(){k.send()});b instanceof d.Error&&i&&i(a,a,k);
},0),k},i}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(57),c(47),c(48),c(46),c(58)],e=function(a,b,c,d,e){var f={};return f.repo=b.memoize(function(){var b=e.split("+")[0],d=a.repo+b+"/";return c.isHTTPS()?d.replace("http://","https://ssl."):d}),f.versionCheck=function(a){var b=("0"+a).split(/\W/),c=e.split(/\W/),d=parseFloat(b[0]),f=parseFloat(c[0]);return d>f?!1:d===f&&parseFloat("0"+b[1])>parseFloat(c[1])?!1:!0},f.loadFrom=function(){return f.repo()},f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){return{repo:"http://p.jwpcdn.com/player/v/",SkinsIncluded:["seven"],SkinsLoadable:["beelden","bekle","five","glow","roundster","six","stormtrooper","vapor"]}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){return"7.1.4+commercial_v7-1-4.56.commercial.a19733.jwplayer.63daec.analytics.44220f.vast.3f7507.googima.3b8231.plugins.a856bc"}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(60),c(47)],e=function(a,b,d){function e(b){d.each(b,function(c,d){b[d]=a.serialize(c)})}function f(a){return a.slice&&"px"===a.slice(-2)&&(a=a.slice(0,-2)),a}function g(b,c){if(-1===c.toString().indexOf("%"))return 0;if("string"!=typeof b||!a.exists(b))return 0;var d=b.indexOf(":");if(-1===d)return 0;var e=parseFloat(b.substr(0,d)),f=parseFloat(b.substr(d+1));return 0>=e||0>=f?0:f/e*100+"%"}var h={autostart:!1,controls:!0,cookies:!0,displaytitle:!0,displaydescription:!0,mobilecontrols:!1,repeat:!1,castAvailable:!1,skin:"seven",stretching:b.UNIFORM,mute:!1,volume:90,width:480,height:270},i=function(b){var i=d.extend({},(window.jwplayer||{}).defaults,b);e(i);var j=d.extend({},h,i);return"."===j.base&&(j.base=a.getScriptPath("jwplayer.js")),j.base=(j.base||a.loadFrom()).replace(/\/?$/,"/"),c.p=j.base,j.width=f(j.width),j.height=f(j.height),j.flashplayer=j.flashplayer||a.getScriptPath("jwplayer.js")+"jwplayer.flash.swf","http:"===window.location.protocol&&(j.flashplayer=j.flashplayer.replace("https","http")),j.aspectratio=g(j.aspectratio,j.width),d.isObject(j.skin)&&(j.skinUrl=j.skin.url,j.skinColorInactive=j.skin.inactive,j.skinColorActive=j.skin.active,j.skinColorBackground=j.skin.background,j.skin=d.isString(j.skin.name)?j.skin.name:h.skin),d.isString(j.skin)&&j.skin.indexOf(".xml")>0&&(console.log("JW Player does not support XML skins, please update your config"),j.skin=j.skin.replace(".xml","")),j.aspectratio||delete j.aspectratio,j.playlist||(j.playlist=d.clone(j)),j};return i}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(45),c(54)],e=function(a,b,c){var d={NONE:"none",FILL:"fill",UNIFORM:"uniform",EXACTFIT:"exactfit"},e=function(a,b,d,e,f){var g="";b=b||1,d=d||1,e=0|e,f=0|f,(1!==b||1!==d)&&(g="scale("+b+", "+d+")"),(e||f)&&(g&&(g+=" "),g="translate("+e+"px, "+f+"px)"),c.transform(a,g)},f=e,g=function(e,g,h,i,j,k){if(!g)return!1;if(!(h&&i&&j&&k))return!1;e=e||d.UNIFORM;var l=2*Math.ceil(h/2)/j,m=2*Math.ceil(i/2)/k,n="video"===g.tagName.toLowerCase(),o=!1,p="jw-stretch-"+e.toLowerCase(),q=!1;switch(e.toLowerCase()){case d.FILL:l>m?m=l:l=m,o=!0;break;case d.NONE:l=m=1;case d.EXACTFIT:o=!0;break;case d.UNIFORM:default:l>m?(j*m/h>.95?(o=!0,p="jw-stretch-exactfit"):(j*=m,k*=m),q=!0):(k*l/i>.95?(o=!0,p="jw-stretch-exactfit"):(j*=l,k*=l),q=!1),o&&(l=2*Math.ceil(h/2)/j,m=2*Math.ceil(i/2)/k)}if(n){var r={left:"",right:"",width:"",height:""};if(o?(j>h&&(r.left=r.right=Math.ceil((h-j)/2)),k>i&&(r.top=r.bottom=Math.ceil((i-k)/2)),r.width=j,r.height=k,f(g,l,m,0,0)):(o=!1,c.transform(g)),b.isIOS(8)&&o===!1){var s={width:"auto",height:"auto"};e.toLowerCase()===d.UNIFORM&&(s[q===!1?"width":"height"]="100%"),a.extend(r,s)}c.style(g,r)}else g.className=g.className.replace(/\s*jw\-stretch\-(none|exactfit|uniform|fill)/g,"")+" "+p;return o};return{scale:e,stretching:d,stretch:g}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(62),c(87),c(66),c(65),c(45),c(63),c(47)],e=function(a,b,c,d,e,f,g){function h(c){var d=c.get("provider").name||"";return d.indexOf("flash")>=0?b:a}var i={skipoffset:null,tag:null},j=function(a,b,f){function j(a,b){b=b||{},u.tag&&!b.tag&&(b.tag=u.tag),this.trigger(a,b)}function k(a){s._adModel.set("duration",a.duration),s._adModel.set("position",a.position)}function l(a){if(m&&t+1<m.length){s._adModel.set("state","buffering"),b.set("skipButton",!1),t++;var d,e=m[t];n&&(d=n[t]),this.loadItem(e,d)}else a.type===c.JWPLAYER_MEDIA_COMPLETE&&(j.call(this,a.type,a),this.trigger(c.JWPLAYER_PLAYLIST_COMPLETE,{})),this.destroy()}var m,n,o,p,q,r=h(b),s=new r(a,b),t=0,u={},v=g.bind(function(a){a=a||{},a.hasControls=!!b.get("controls"),this.trigger(c.JWPLAYER_INSTREAM_CLICK,a),s&&s._adModel&&(s._adModel.get("state")===d.PAUSED?a.hasControls&&s.instreamPlay():s.instreamPause())},this),w=g.bind(function(){s&&s._adModel&&s._adModel.get("state")===d.PAUSED&&b.get("controls")&&(a.setFullscreen(),a.play())},this);this.type="instream",this.init=function(){o=b.getVideo(),p=b.get("position"),q=b.get("playlist")[b.get("item")],s.on("all",j,this),s.on(c.JWPLAYER_MEDIA_TIME,k,this),s.on(c.JWPLAYER_MEDIA_COMPLETE,l,this),s.init(),o.detachMedia(),b.mediaModel.set("state",d.BUFFERING),a.checkBeforePlay()||0===p&&!o.checkComplete()?(p=0,b.set("preInstreamState","instream-preroll")):o&&o.checkComplete()||b.get("state")===d.COMPLETE?b.set("preInstreamState","instream-postroll"):b.set("preInstreamState","instream-midroll");var g=b.get("state");return(g===d.PLAYING||g===d.BUFFERING)&&o.pause(),f.setupInstream(s._adModel),s._adModel.set("state",d.BUFFERING),f.clickHandler().setAlternateClickHandlers(e.noop,null),this.setText("Loading ad"),this},this.loadItem=function(a,d){return e.isAndroid(2.3)?void this.trigger({type:c.JWPLAYER_ERROR,message:"Error loading instream: Cannot play instream on Android 2.3"}):(g.isArray(a)&&(m=a,n=d,a=m[t],n&&(d=n[t])),this.trigger(c.JWPLAYER_PLAYLIST_ITEM,{index:t,item:a}),u=g.extend({},i,d),s.load(a),this.addClickHandler(),void(u.skipoffset&&(s._adModel.set("skipMessage",u.skipMessage),s._adModel.set("skipText",u.skipText),s._adModel.set("skipOffset",u.skipoffset),b.set("skipButton",!0))))},this.play=function(){s.instreamPlay()},this.pause=function(){s.instreamPause()},this.hide=function(){s.hide()},this.addClickHandler=function(){f.clickHandler().setAlternateClickHandlers(v,w),s.on(c.JWPLAYER_MEDIA_META,this.metaHandler,this)},this.skipAd=function(a){var b=c.JWPLAYER_AD_SKIPPED;this.trigger(b,a),l.call(this,{type:b})},this.metaHandler=function(a){a.width&&a.height&&f.resizeMedia()},this.destroy=function(){if(this.off(),b.set("skipButton",!1),s){f.clickHandler()&&f.clickHandler().revertAlternateClickHandlers(),s.instreamDestroy(),f.destroyInstream(),s=null,a.attachMedia();var c=b.get("preInstreamState");switch(c){case"instream-preroll":case"instream-midroll":var d=g.extend({},q);d.starttime=p,b.loadVideo(d),o.play();break;case"instream-postroll":case"instream-idle":o.stop()}}},this.getState=function(){return s&&s._adModel?s._adModel.get("state"):!1},this.setText=function(a){f.setAltText(a?a:"")},this.hide=function(){f.useExternalControls()}};return g.extend(j.prototype,f),j}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(63),c(64),c(66),c(65),c(67)],e=function(a,b,c,d,e,f){var g=function(g,h){function i(){var b=m.getVideo();if(n!==b){if(n=b,!b)return;b.off(),b.on("all",function(b,c){c=a.extend({},c,{type:b}),this.trigger(b,c)},o),b.on(d.JWPLAYER_MEDIA_BUFFER_FULL,l),b.on(d.JWPLAYER_PLAYER_STATE,j),b.attachMedia(),b.mute(h.get("mute")),b.volume(h.get("volume")),m.on("change:state",c,o)}}function j(a){switch(a.newstate){case e.PLAYING:m.set("state",a.newstate);break;case e.PAUSED:m.set("state",a.newstate)}}function k(a){h.trigger(a.type,a),o.trigger(d.JWPLAYER_FULLSCREEN,{fullscreen:a.jwstate})}function l(){m.getVideo().play()}var m,n,o=a.extend(this,b);return g.on(d.JWPLAYER_FULLSCREEN,function(a){this.trigger(d.JWPLAYER_FULLSCREEN,a)},o),this.init=function(){m=(new f).setup({id:h.get("id"),volume:h.get("volume"),fullscreen:h.get("fullscreen"),mute:h.get("mute")}),m.on("fullscreenchange",k),this._adModel=m},o.load=function(a){m.setPlaylist([a]),m.setItem(0),i(),m.off(d.JWPLAYER_ERROR),m.on(d.JWPLAYER_ERROR,function(a){this.trigger(d.JWPLAYER_ERROR,a)},o),m.loadVideo()},this.instreamDestroy=function(){m&&(m.off(),this.off(),n&&(n.detachMedia(),n.off(),n.destroy()),m=null,g.off(null,null,this),g=null)},o.instreamPlay=function(){m.getVideo()&&m.getVideo().play(!0)},o.instreamPause=function(){m.getVideo()&&m.getVideo().pause(!0)},o};return g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47)],e=function(a){var b=[],c=b.slice,d={on:function(a,b,c){if(!f(this,"on",a,[b,c])||!b)return this;this._events||(this._events={});var d=this._events[a]||(this._events[a]=[]);return d.push({callback:b,context:c}),this},once:function(b,c,d){if(!f(this,"once",b,[c,d])||!c)return this;var e=this,g=a.once(function(){e.off(b,g),c.apply(this,arguments)});return g._callback=c,this.on(b,g,d)},off:function(b,c,d){var e,g,h,i,j,k,l,m;if(!this._events||!f(this,"off",b,[c,d]))return this;if(!b&&!c&&!d)return this._events=void 0,this;for(i=b?[b]:a.keys(this._events),j=0,k=i.length;k>j;j++)if(b=i[j],h=this._events[b]){if(this._events[b]=e=[],c||d)for(l=0,m=h.length;m>l;l++)g=h[l],(c&&c!==g.callback&&c!==g.callback._callback||d&&d!==g.context)&&e.push(g);e.length||delete this._events[b]}return this},trigger:function(a){if(!this._events)return this;var b=c.call(arguments,1);if(!f(this,"trigger",a,b))return this;var d=this._events[a],e=this._events.all;return d&&g(d,b,this),e&&g(e,arguments,this),this}},e=/\s+/,f=function(a,b,c,d){if(!c)return!0;if("object"==typeof c){for(var f in c)a[b].apply(a,[f,c[f]].concat(d));return!1}if(e.test(c)){for(var g=c.split(e),h=0,i=g.length;i>h;h++)a[b].apply(a,[g[h]].concat(d));return!1}return!0},g=function(a,b,c){var d,e=-1,f=a.length,g=b[0],h=b[1],i=b[2];switch(b.length){case 0:for(;++e<f;)(d=a[e]).callback.call(d.context||c);return;case 1:for(;++e<f;)(d=a[e]).callback.call(d.context||c,g);return;case 2:for(;++e<f;)(d=a[e]).callback.call(d.context||c,g,h);return;case 3:for(;++e<f;)(d=a[e]).callback.call(d.context||c,g,h,i);return;default:for(;++e<f;)(d=a[e]).callback.apply(d.context||c,b);return}};return d}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(65)],e=function(a){function b(b){return b===a.COMPLETE||b===a.ERROR?a.IDLE:b}return function(a,c,d){if(c=b(c),d=b(d),c!==d){var e=c.replace(/(?:ing|d)$/,""),f={type:e,newstate:c,oldstate:d,reason:a.mediaModel.get("state")};this.trigger(e,f)}}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){return{BUFFERING:"buffering",IDLE:"idle",COMPLETE:"complete",PAUSED:"paused",PLAYING:"playing",ERROR:"error",LOADING:"loading",STALLED:"stalled"}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){var a={DRAG:"drag",DRAG_START:"dragStart",DRAG_END:"dragEnd",CLICK:"click",DOUBLE_CLICK:"doubleClick",TAP:"tap",DOUBLE_TAP:"doubleTap",OVER:"over",OUT:"out"},b={COMPLETE:"complete",ERROR:"error",JWPLAYER_AD_CLICK:"adClick",JWPLAYER_AD_COMPANIONS:"adCompanions",JWPLAYER_AD_COMPLETE:"adComplete",JWPLAYER_AD_ERROR:"adError",JWPLAYER_AD_IMPRESSION:"adImpression",JWPLAYER_AD_META:"adMeta",JWPLAYER_AD_PAUSE:"adPause",JWPLAYER_AD_PLAY:"adPlay",JWPLAYER_AD_SKIPPED:"adSkipped",JWPLAYER_AD_TIME:"adTime",JWPLAYER_CAST_AD_CHANGED:"castAdChanged",JWPLAYER_MEDIA_COMPLETE:"complete",JWPLAYER_READY:"ready",JWPLAYER_MEDIA_SEEK:"seek",JWPLAYER_MEDIA_BEFOREPLAY:"beforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"beforeComplete",JWPLAYER_MEDIA_BUFFER_FULL:"bufferFull",JWPLAYER_DISPLAY_CLICK:"displayClick",JWPLAYER_PLAYLIST_COMPLETE:"playlistComplete",JWPLAYER_CAST_SESSION:"cast",JWPLAYER_MEDIA_ERROR:"mediaError",JWPLAYER_MEDIA_FIRST_FRAME:"firstFrame",JWPLAYER_MEDIA_PLAY_ATTEMPT:"playAttempt",JWPLAYER_MEDIA_LOADED:"loaded",JWPLAYER_MEDIA_SEEKED:"seeked",JWPLAYER_SETUP_ERROR:"setupError",JWPLAYER_ERROR:"error",JWPLAYER_PLAYER_STATE:"state",JWPLAYER_CAST_AVAILABLE:"castAvailable",JWPLAYER_MEDIA_BUFFER:"bufferChange",JWPLAYER_MEDIA_TIME:"time",JWPLAYER_MEDIA_TYPE:"mediaType",JWPLAYER_MEDIA_VOLUME:"volume",JWPLAYER_MEDIA_MUTE:"mute",JWPLAYER_MEDIA_META:"meta",JWPLAYER_MEDIA_LEVELS:"levels",JWPLAYER_MEDIA_LEVEL_CHANGED:"levelsChanged",JWPLAYER_CONTROLS:"controls",JWPLAYER_FULLSCREEN:"fullscreen",JWPLAYER_RESIZE:"resize",JWPLAYER_PLAYLIST_ITEM:"playlistItem",JWPLAYER_PLAYLIST_LOADED:"playlist",JWPLAYER_AUDIO_TRACKS:"audioTracks",JWPLAYER_AUDIO_TRACK_CHANGED:"audioTrackChanged",JWPLAYER_LOGO_CLICK:"logoClick",JWPLAYER_CAPTIONS_LIST:"captionsList",JWPLAYER_CAPTIONS_CHANGED:"captionsChanged",JWPLAYER_PROVIDER_CHANGED:"providerChanged",JWPLAYER_PROVIDER_FIRST_FRAME:"providerFirstFrame",JWPLAYER_USER_ACTION:"userAction",JWPLAYER_PROVIDER_CLICK:"providerClick",JWPLAYER_VIEW_TAB_FOCUS:"tabFocus",JWPLAYER_CONTROLBAR_DRAGGING:"scrubbing",JWPLAYER_INSTREAM_CLICK:"instreamClick"};return b.touchEvents=a,b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(82),c(68),c(79),c(80),c(47),c(63),c(86),c(66),c(65)],e=function(a,b,c,d,e,f,g,h,i,j){var k=function(){function h(a,b){switch(a){case"flashBlocked":return void this.set("flashBlocked",!0);case"flashUnblocked":return void this.set("flashBlocked",!1);case"volume":case"mute":return void this.set(a,b[a]);case i.JWPLAYER_MEDIA_TYPE:this.mediaModel.set("mediaType",b.mediaType);break;case i.JWPLAYER_PLAYER_STATE:return void this.mediaModel.set("state",b.newstate);case i.JWPLAYER_MEDIA_BUFFER:this.set("buffer",b.bufferPercent);break;case i.JWPLAYER_MEDIA_BUFFER_FULL:this.playVideo();break;case i.JWPLAYER_MEDIA_TIME:this.mediaModel.set("position",b.position),this.mediaModel.set("duration",b.duration),this.set("position",b.position),this.set("duration",b.duration);break;case i.JWPLAYER_PROVIDER_CHANGED:this.set("provider",m.getName());break;case i.JWPLAYER_MEDIA_LEVELS:this.setQualityLevel(b.currentQuality,b.levels),this.mediaModel.set("levels",b.levels);break;case i.JWPLAYER_MEDIA_LEVEL_CHANGED:this.setQualityLevel(b.currentQuality,b.levels);break;case i.JWPLAYER_AUDIO_TRACKS:this.setCurrentAudioTrack(b.currentTrack,b.tracks),this.mediaModel.set("audioTracks",b.tracks);break;case i.JWPLAYER_AUDIO_TRACK_CHANGED:this.setCurrentAudioTrack(b.currentTrack,b.tracks);break;case"visualQuality":var c=f.extend({},b);this.mediaModel.set("visualQuality",c)}var d=f.extend({},b,{type:a});this.mediaController.trigger(a,d)}var k,m,n=this,o={},p=a.noop;this.mediaController=f.extend({},g),this.mediaModel=new l,this.set("mediaModel",this.mediaModel),e.model(this),this.setup=function(b){return b.cookies&&(d.model(this),o=d.getAllItems()),f.extend(this.attributes,b,o,{state:j.IDLE,flashBlocked:!1,fullscreen:!1,compactUI:!1,scrubbing:!1,duration:0,position:0,buffer:0}),a.isMobile()&&this.set("autostart",!1),this.updateProviders(),this},this.getConfiguration=function(){return f.omit(this.clone(),["mediaModel"])},this.updateProviders=function(){k=new c(this.getConfiguration())},this.setQualityLevel=function(a,b){a>-1&&b.length>1&&"youtube"!==m.getName().name&&this.mediaModel.set("currentLevel",parseInt(a))},this.setCurrentAudioTrack=function(a,b){a>-1&&b.length>1&&this.mediaModel.set("currentAudioTrack",parseInt(a))},this.changeVideoProvider=function(a){var b;m&&(m.off(null,null,this),b=m.getContainer(),b&&m.remove()),p=new a(n.get("id"),n.getConfiguration()),b&&p.setContainer(b),this.set("provider",p.getName()),m=p,m.volume(n.get("volume")),m.mute(n.get("mute")),m.on("all",h,this)},this.destroy=function(){m&&(m.off(null,null,this),m.destroy())},this.getVideo=function(){return m},this.setFullscreen=function(a){a=!!a,a!==n.get("fullscreen")&&n.set("fullscreen",a)},this.setPlaylist=function(a){var c=b(a);return c=b.filterPlaylist(c,k,n.get("androidhls"),this.get("drm")),this.set("playlist",c),0===c.length?void this.mediaController.trigger(i.JWPLAYER_ERROR,{message:"Error loading playlist: No playable sources found"}):void 0},this.chooseProvider=function(a){return k.choose(a).provider},this.setItem=function(a){var b=n.get("playlist"),c=(a+b.length)%b.length;this.mediaModel.off(),this.mediaModel=new l,this.set("mediaModel",this.mediaModel),this.set("item",c);var d=this.get("playlist")[c];this.set("playlistItem",d);var e=d&&d.sources&&d.sources[0];if(void 0!==e){var f=this.chooseProvider(e);if(!f)throw new Error("No suitable provider found");p instanceof f||n.changeVideoProvider(f),p.init&&p.init(d),this.trigger("setItem")}},this.resetProvider=function(){p=null},this.setVolume=function(a){a=Math.round(a),n.set("volume",a),m&&m.volume(a);var b=0===a;b!==n.get("mute")&&n.setMute(b)},this.setMute=function(b){if(a.exists(b)||(b=!n.get("mute")),n.set("mute",b),m&&m.mute(b),!b){var c=Math.max(10,n.get("volume"));this.setVolume(c)}},this.loadVideo=function(a){if(this.mediaController.trigger(i.JWPLAYER_MEDIA_PLAY_ATTEMPT),!a){var b=this.get("item");a=this.get("playlist")[b]}this.set("position",a.starttime||0),this.set("duration",a.duration||0),m.load(a)},this.playVideo=function(){m.play()},this.setVideoSubtitleTrack=function(a){this.set("captionsIndex",a),m.setSubtitlesTrack&&m.setSubtitlesTrack(a)}},l=k.MediaModel=function(){this.set("state",j.IDLE)};return f.extend(k.prototype,h),f.extend(l.prototype,h),k}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(69)],e=function(a){return a.prototype.providerSupports=function(a,b){return a.supports(b,this.config.edition)},a}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(70),c(74),c(47)],e=function(a,b,c){function d(b){this.providers=a.slice(),this.config=b||{},"flash"===this.config.primary&&f(this.providers,"html5","flash")}function e(a,b){for(var c=0;c<a.length;c++)if(a[c].name===b)return c;return-1}function f(a,b,c){var d=e(a,b),f=e(a,c),g=a[d];a[d]=a[f],a[f]=g}return c.extend(d.prototype,{providerSupports:function(a,b){return a.supports(b)},choose:function(a){a=c.isObject(a)?a:{};for(var d=this.providers.length,e=0;d>e;e++){var f=this.providers[e];if(this.providerSupports(f,a)){var g=d-e-1;return{priority:g,name:f.name,type:a.type,provider:b[f.name]}}}return null}}),d}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(71),c(47),c(72)],e=function(a,b,c,d){var e=c.find(d,c.matches({name:"flash"})),f=e.supports;return e.supports=function(c,d){if(!a.isFlashSupported())return!1;var e=c&&c.type;if("hls"===e||"m3u8"===e){var g=b(d);return g("hls")}return f.apply(this,arguments)},d}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47)],e=function(a){var b={setup:["free","premium","enterprise","ads","trial"],"custom-rightclick":["premium","enterprise","ads","trial"],dash:["premium","enterprise","ads","trial"],drm:["enterprise","ads","trial"],hls:["premium","ads","enterprise","trial"],ads:["ads","trial"],casting:["premium","enterprise","ads","trial"]},c=function(c){return function(d){return a.contains(b[d],c)}};return c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(47),c(73)],e=function(a,b,c){function d(b){if("hls"===b.type)if(b.androidhls!==!1){var c=a.isAndroidNative;if(c(2)||c(3)||c("4.0"))return!1;if(a.isAndroid())return!0}else if(a.isAndroid())return!1;return null}var e=[{name:"youtube",supports:function(b){return a.isYouTube(b.file,b.type)}},{name:"html5",supports:function(b){var e={aac:"audio/mp4",mp4:"video/mp4",f4v:"video/mp4",m4v:"video/mp4",mov:"video/mp4",mp3:"audio/mpeg",mpeg:"audio/mpeg",ogv:"video/ogg",ogg:"video/ogg",oga:"video/ogg",vorbis:"video/ogg",webm:"video/webm",f4a:"video/aac",m3u8:"application/vnd.apple.mpegurl",m3u:"application/vnd.apple.mpegurl",hls:"application/vnd.apple.mpegurl"},f=b.file,g=b.type,h=d(b);if(null!==h)return h;if(a.isRtmp(f,g))return!1;if(!e[g])return!1;if(c.canPlayType){var i=c.canPlayType(e[g]);return!!i}return!1}},{name:"flash",supports:function(c){var d={flv:"video",f4v:"video",mov:"video",m4a:"video",m4v:"video",mp4:"video",aac:"video",f4a:"video",mp3:"sound",mpeg:"sound",smil:"rtmp"},e=b.keys(d);if(!a.isFlashSupported())return!1;var f=c.file,g=c.type;return a.isRtmp(f,g)?!0:b.contains(e,g)}}];return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){return document.createElement("video")}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(75),c(77)],e=function(a,b){var c={html5:a,flash:b};return c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(54),c(45),c(60),c(47),c(66),c(65),c(76),c(63)],e=function(a,b,c,d,e,f,g,h){function i(a,c){b.foreach(a,function(a,b){c.addEventListener(a,b,!1)})}function j(a,c){b.foreach(a,function(a,b){c.removeEventListener(a,b,!1)})}function k(a){if("hls"===a.type)if(a.androidhls!==!1){var c=b.isAndroidNative;if(c(2)||c(3)||c("4.0"))return!1;if(b.isAndroid())return!0}else if(b.isAndroid())return!1;return null}function l(g,l){function v(a){$.trigger("click",a)}function w(){if(fa){var a=la.duration;W!==a&&(W=a),s&&ba>0&&a>ba&&$.seek(ba),x()}}function x(a){B(a),fa&&($.state===f.PLAYING&&(ea=d.now(),X=la.currentTime,a&&(aa=!0),$.trigger(e.JWPLAYER_MEDIA_TIME,{position:X,duration:W})),$.state===f.STALLED&&$.setState(f.PLAYING))}function y(){$.trigger(e.JWPLAYER_MEDIA_META,{duration:la.duration,height:la.videoHeight,width:la.videoWidth})}function z(){fa&&(aa||(aa=!0,C()))}function A(){fa&&(z(),la.muted&&(la.muted=!1,la.muted=!0),y())}function B(){aa&&ba>0&&!s&&(p?setTimeout(function(){ba>0&&$.seek(ba)},200):$.seek(ba))}function C(){Y||(Y=!0,$.trigger(e.JWPLAYER_MEDIA_BUFFER_FULL))}function D(){fa&&(ea=d.now(),$.setState(f.PLAYING),$.trigger(e.JWPLAYER_PROVIDER_FIRST_FRAME,{}))}function E(){fa&&(ha||la.paused||la.ended||$.state!==f.LOADING&&($.seeking||$.setState(f.STALLED)))}function F(){fa&&(b.log("Error playing media: %o %s",la.error,la.src||V.file),$.trigger(e.JWPLAYER_MEDIA_ERROR,{message:"Error loading media: File could not be played"}))}function G(a){var c;return"array"===b.typeOf(a)&&a.length>0&&(c=d.map(a,function(a,b){return{label:a.label||b}})),c}function H(a){Z=a,ga=I(a);var b=G(a);b&&$.trigger(e.JWPLAYER_MEDIA_LEVELS,{levels:b,currentQuality:ga})}function I(a){var b=Math.max(0,ga),c=l.qualityLabel;if(a)for(var d=0;d<a.length;d++)if(a[d]["default"]&&(b=d),c&&a[d].label===c)return d;return b}function J(){return q||r}function K(a,c){V=Z[ga],m(ca),ca=setInterval(N,o),ba=0;var d=la.src!==V.file;d||J()?(q||$.setState(f.LOADING),aa=!1,Y=!1,W=c,ha=k(V),la.src=V.file,la.load()):(0===a&&(ba=-1,$.seek(a)),y(),la.play()),X=la.currentTime,q&&C(),b.isIOS()&&$.getFullScreen()&&(la.controls=!0),a>0&&$.seek(a)}function L(){$.seeking=!1,$.trigger(e.JWPLAYER_MEDIA_SEEKED)}function M(){$.trigger("volume",{volume:Math.round(100*la.volume)}),$.trigger("mute",{mute:la.muted})}function N(){if(fa){var a=O();a!==da&&(da=a,$.trigger(e.JWPLAYER_MEDIA_BUFFER,{bufferPercent:100*a}));var b=la.currentTime;b===X?d.now()-ea>n&&E():(ea=d.now(),X=b)}}function O(){var a=la.buffered,c=la.duration;return!a||0===a.length||0>=c||c===1/0?0:b.between(a.end(a.length-1)/c,0,1)}function P(){if(fa&&$.state!==f.IDLE&&$.state!==f.COMPLETE){if(m(ca),ga=-1,ia=!0,$.trigger(e.JWPLAYER_MEDIA_BEFORECOMPLETE),!fa)return;Q()}}function Q(){$.setState(f.COMPLETE),ia=!1,$.trigger(e.JWPLAYER_MEDIA_COMPLETE)}function R(a){ja=!0,T(a),b.isIOS()&&(la.controls=!1)}function S(a){ja=!1,T(a),b.isIOS()&&(la.controls=!1)}function T(a){$.trigger("fullscreenchange",{target:a.target,jwstate:ja})}this.state=f.IDLE,this.seeking=!1,d.extend(this,h),this.trigger=function(a,b){return fa?h.trigger.call(this,a,b):void 0};var U,V,W,X,Y,Z,$=this,_={click:v,durationchange:w,ended:P,error:F,loadedmetadata:A,canplay:z,playing:D,progress:B,seeked:L,timeupdate:x,volumechange:M,webkitbeginfullscreen:R,webkitendfullscreen:S},aa=!1,ba=0,ca=-1,da=-1,ea=-1,fa=!0,ga=-1,ha=null,ia=!1,ja=!1,ka=document.getElementById(g),la=ka?ka.querySelector("video"):void 0;la=la||document.createElement("video"),la.className="jw-video jw-reset",i(_,la),t||(la.controls=!0,la.controls=!1),la.setAttribute("x-webkit-airplay","allow"),la.setAttribute("webkit-playsinline",""),this.stop=function(){fa&&(m(ca),la.removeAttribute("src"),p||la.load(),ga=-1,this.setState(f.IDLE))},this.destroy=function(){j(_,la),this.remove(),this.off()},this.load=function(a){fa&&(H(a.sources),this.sendMediaType(a.sources),K(a.starttime||0,a.duration||0))},this.play=function(){return $.seeking?($.setState(f.LOADING),void $.once(e.JWPLAYER_MEDIA_SEEKED,$.play)):void la.play()},this.pause=function(){la.pause(),this.setState(f.PAUSED)},this.seek=function(a){if(fa)if(0===ba&&this.trigger(e.JWPLAYER_MEDIA_SEEK,{position:la.currentTime,offset:a}),aa){ba=0;var c=b.tryCatch(function(){$.seeking=!0,la.currentTime=a});c instanceof b.Error&&(ba=a)}else ba=a},this.volume=function(a){a=b.between(a/100,0,1),la.volume=a},this.mute=function(a){la.muted=!!a},this.checkComplete=function(){return ia},this.detachMedia=function(){return m(ca),fa=!1,la},this.attachMedia=function(a){fa=!0,a||(aa=!1),la.loop=!1,ia&&Q()},this.setContainer=function(a){U=a,a.appendChild(la)},this.getContainer=function(){return U},this.remove=function(){la&&(la.removeAttribute("src"),p||la.load()),m(ca),ga=-1,U===la.parentNode&&U.removeChild(la)},this.setVisibility=function(b){b=!!b,b||s?a.style(U,{visibility:"visible",opacity:1}):a.style(U,{visibility:"",opacity:0})},this.resize=function(a,b,d){return c.stretch(d,la,a,b,la.videoWidth,la.videoHeight)},this.setFullscreen=function(a){if(a=!!a){var c=b.tryCatch(function(){var a=la.webkitEnterFullscreen||la.webkitEnterFullScreen;a&&a.apply(la)});return c instanceof b.Error?!1:$.getFullScreen()}var d=la.webkitExitFullscreen||la.webkitExitFullScreen;return d&&d.apply(la),a},$.getFullScreen=function(){return ja||!!la.webkitDisplayingFullscreen},this.setCurrentQuality=function(a){if(ga!==a&&(a=parseInt(a,10),a>=0&&Z&&Z.length>a)){ga=a,this.trigger(e.JWPLAYER_MEDIA_LEVEL_CHANGED,{currentQuality:a,levels:G(Z)});var b=la.currentTime||0,c=la.duration;0>=c&&(c=W),K(b,c||0)}},this.getCurrentQuality=function(){return ga},this.getQualityLevels=function(){return G(Z)},this.getName=function(){return{name:u}}}var m=window.clearInterval,n=256,o=100,p=b.isMSIE(),q=b.isMobile(),r=b.isSafari(),s=b.isAndroidNative(),t=b.isIOS(7),u="html5",v=function(){};return v.prototype=g,l.prototype=new v,l}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(66),c(65),c(47)],e=function(a,b,c,d){var e=a.noop,f=d.constant(!1),g={supports:f,play:e,load:e,stop:e,volume:e,mute:e,seek:e,resize:e,remove:e,destroy:e,setVisibility:e,setFullscreen:f,getFullscreen:e,getContainer:e,setContainer:f,getName:e,getQualityLevels:e,getCurrentQuality:e,setCurrentQuality:e,getAudioTracks:e,getCurrentAudioTrack:e,setCurrentAudioTrack:e,checkComplete:e,setControls:e,attachMedia:e,detachMedia:e,setState:function(a){var d=this.state||c.IDLE;this.state=a,a!==d&&this.trigger(b.JWPLAYER_PLAYER_STATE,{newstate:a})},sendMediaType:function(a){var c=a[0].type,d="oga"===c||"aac"===c||"mp3"===c||"mpeg"===c||"vorbis"===c;this.trigger(b.JWPLAYER_MEDIA_TYPE,{mediaType:d?"audio":"video"})}};return g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(47),c(66),c(65),c(78),c(76),c(63)],e=function(a,b,c,d,e,f,g){function h(a){return a+"_swf_"+j++}function i(i,j){function k(a){if(B)for(var b=0;b<a.length;b++){var c=a[b];if(c.bitrate){var d=Math.round(c.bitrate/1024);c.label=l(d)}}}function l(a){var b=B[a];if(!b){for(var c=1/0,d=B.bitrates.length;d--;){var e=Math.abs(B.bitrates[d]-a);if(e>c)break;c=e}b=B.labels[B.bitrates[d+1]],B[a]=b}return b}function m(){var a=j.hlslabels;if(!a)return null;var b={},c=[];for(var d in a){var e=parseFloat(d);if(!isNaN(e)){var f=Math.round(e);b[f]=a[d],c.push(f)}}return 0===c.length?null:(c.sort(function(a,b){return a-b}),{labels:b,bitrates:c})}var n,o,p,q=null,r=-1,s=!1,t=-1,u=null,v=-1,w=null,x=!0,y=!1,z=function(){return o&&o.__ready},A=function(){o&&o.triggerFlash.apply(o,arguments)},B=m();b.extend(this,g,{load:function(a){q=a,s=!1,this.setState(d.LOADING),A("load",a),this.sendMediaType(a.sources)},play:function(){A("play")},pause:function(){A("pause"),this.setState(d.PAUSED)},stop:function(){A("stop"),t=-1,q=null,this.setState(d.IDLE)},seek:function(a){A("seek",a)},volume:function(a){if(b.isNumber(a)){var c=Math.min(Math.max(0,a),100);z()&&A("volume",c)}},mute:function(a){z()&&A("mute",a)},setState:function(){return f.setState.apply(this,arguments)},checkComplete:function(){return s},attachMedia:function(){x=!0,s&&(this.setState(d.COMPLETE),this.trigger(c.JWPLAYER_MEDIA_COMPLETE),s=!1)},detachMedia:function(){return x=!1,null},getSwfObject:function(a){var b=a.getElementsByTagName("object")[0];return b?(b.off(null,null,this),b):e.embed(j.flashplayer,a,h(i))},getContainer:function(){return n},setContainer:function(e){function f(a){clearTimeout(r),"resume"===a.state?g.trigger.call(h,"flashUnblocked"):r=setTimeout(function(){g.trigger.call(h,"flashBlocked")},250)}if(n!==e){n=e,o=this.getSwfObject(e);var h=this;r=setTimeout(function(){g.trigger.call(h,"flashBlocked")},2e3),o.once("embedded",function(){clearTimeout(r),g.trigger.call(h,"flashUnblocked")},this),o.once("ready",function(){o.once("pluginsLoaded",function(){o.queueCommands=!1,A("setupCommandQueue",o.__commandQueue),o.__commandQueue=[]});var a=b.extend({},j);A("setup",a),o.__ready=!0},this);var i=[c.JWPLAYER_MEDIA_META,c.JWPLAYER_MEDIA_ERROR,"subtitlesTracks","subtitlesTrackChanged","subtitlesTrackData"],l=[c.JWPLAYER_MEDIA_BUFFER,c.JWPLAYER_MEDIA_TIME],m=[c.JWPLAYER_MEDIA_BUFFER_FULL];o.on(c.JWPLAYER_MEDIA_LEVELS,function(a){k(a.levels),t=a.currentQuality,u=a.levels,this.trigger(a.type,a)},this),o.on(c.JWPLAYER_MEDIA_LEVEL_CHANGED,function(a){k(a.levels),t=a.currentQuality,u=a.levels,this.trigger(a.type,a)},this),o.on(c.JWPLAYER_AUDIO_TRACKS,function(a){v=a.currentTrack,w=a.tracks,this.trigger(a.type,a)},this),o.on(c.JWPLAYER_AUDIO_TRACK_CHANGED,function(a){v=a.currentTrack,w=a.tracks,this.trigger(a.type,a)},this),o.on(c.JWPLAYER_PLAYER_STATE,function(a){var b=a.newstate;b!==d.IDLE&&this.setState(b)},this),o.on(l.join(" "),function(a){"Infinity"===a.duration&&(a.duration=1/0),this.trigger(a.type,a)},this),o.on(i.join(" "),function(a){this.trigger(a.type,a)},this),o.on(m.join(" "),function(a){this.trigger(a.type)},this),o.on(c.JWPLAYER_MEDIA_BEFORECOMPLETE,function(a){s=!0,this.trigger(a.type),x===!0&&(s=!1)},this),o.on(c.JWPLAYER_MEDIA_COMPLETE,function(a){s||(this.setState(d.COMPLETE),this.trigger(a.type))},this),o.on(c.JWPLAYER_MEDIA_SEEK,function(a){this.trigger(c.JWPLAYER_MEDIA_SEEK,a)},this),o.on("visualQuality",function(a){a.reason=a.reason||"api",this.trigger("visualQuality",a),this.trigger(c.JWPLAYER_PROVIDER_FIRST_FRAME,{})},this),o.on(c.JWPLAYER_PROVIDER_CHANGED,function(a){p=a.message,this.trigger(c.JWPLAYER_PROVIDER_CHANGED,a)},this),o.on(c.JWPLAYER_ERROR,function(b){a.log("Error playing media: %o %s",b.code,b.message,b),this.trigger(c.JWPLAYER_MEDIA_ERROR,b)},this),a.isChrome()&&o.on("throttle",f,this)}},remove:function(){t=-1,u=null,e.remove(o)},setVisibility:function(a){a=!!a,n.style.opacity=a?1:0},resize:function(a,b,c){c&&A("stretch",c)},setControls:function(a){A("setControls",a)},setFullscreen:function(a){y=a,A("fullscreen",a)},getFullScreen:function(){return y},setCurrentQuality:function(a){A("setCurrentQuality",a)},getCurrentQuality:function(){return t},setSubtitlesTrack:function(a){A("setSubtitlesTrack",a)},getName:function(){return p?{name:"flash_"+p}:{name:"flash"}},getQualityLevels:function(){return u||q.sources},getAudioTracks:function(){return w},getCurrentAudioTrack:function(){return v},setCurrentAudioTrack:function(a){A("setCurrentAudioTrack",a)},destroy:function(){this.remove(),o&&(o.off(),o=null),n=null,q=null,this.off()}}),this.trigger=function(a,b){return x?g.trigger.call(this,a,b):void 0}}var j=0,k=function(){};return k.prototype=f,i.prototype=new k,i}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){
var d,e;d=[c(45),c(63),c(47)],e=function(a,b,c){function d(a,b,c){var d=document.createElement("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)}function e(e,f,h,i){var j;if(i=i||"opaque",a.isMSIE()){var k=document.createElement("div");f.appendChild(k),k.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="'+h+'" name="'+h+'" tabindex="0"><param name="movie" value="'+e+'"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="'+i+'"><param name="bgcolor" value="'+g+'"><param name="menu" value="false"></object>';for(var l=f.getElementsByTagName("object"),m=l.length;m--;)l[m].id===h&&(j=l[m])}else j=document.createElement("object"),j.setAttribute("type","application/x-shockwave-flash"),j.setAttribute("data",e),j.setAttribute("width","100%"),j.setAttribute("height","100%"),j.setAttribute("bgcolor",g),j.setAttribute("id",h),j.setAttribute("name",h),d(j,"allowfullscreen","true"),d(j,"allowscriptaccess","always"),d(j,"wmode",i),d(j,"menu","false"),f.appendChild(j,f);return j.className="jw-swf jw-reset",j.style.display="block",j.style.position="absolute",j.style.left=0,j.style.right=0,j.style.top=0,j.style.bottom=0,c.extend(j,b),j.queueCommands=!0,j.triggerFlash=function(b){var c=this;if("setup"!==b&&c.queueCommands||!c.__externalCall){for(var d=c.__commandQueue,e=d.length;e--;)d[e][0]===b&&d.splice(e,1);return d.push(Array.prototype.slice.call(arguments)),c}var f=Array.prototype.slice.call(arguments,1),g=a.tryCatch(function(){if(f.length){var a=JSON.stringify(f);c.__externalCall(b,a)}else c.__externalCall(b)});return g instanceof a.Error&&console.error({command:b,error:g}),c},j.__commandQueue=[],j}function f(a){a&&a.parentNode&&(a.style.display="none",a.parentNode.removeChild(a))}var g="#000000";return{embed:e,remove:f}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(45)],e=function(a,b){function c(){for(var a={},c=document.cookie.split("; "),d=0;d<c.length;d++){var e=c[d].split("=");if("jwplayer."===e[0].substr(0,9)){var f=e[0].substr(9);a[f]=b.serialize(e[1])}}return a}function d(a){return c()[a]}function e(a,b){document.cookie="jwplayer."+a+"="+b+"; path=/"}function f(a){e(a,"; expires=Thu, 01 Jan 1970 00:00:01 GMT")}function g(){var b=c();a.each(b,function(a,b){f(b)})}function h(b){a.each(i,function(a){b.on("change:"+a,function(b,c){e(a,c)})})}var i=["volume","mute","captionLabel","qualityLabel"];return{model:h,getAllItems:c,getItem:d,setItem:e,removeItem:f,clear:g}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(81),c(66),c(47)],e=function(a,b,c){function d(a){a.mediaController.off(b.JWPLAYER_MEDIA_PLAY_ATTEMPT,a._onPlayAttempt),a.mediaController.off(b.JWPLAYER_PROVIDER_FIRST_FRAME,a._triggerFirstFrame),a.mediaController.off(b.JWPLAYER_MEDIA_TIME,a._onTime)}function e(a){d(a),a._triggerFirstFrame=c.once(function(){var c=a._qoeItem;c.tick(b.JWPLAYER_MEDIA_FIRST_FRAME);var e=c.between(b.JWPLAYER_MEDIA_PLAY_ATTEMPT,b.JWPLAYER_MEDIA_FIRST_FRAME);a.mediaController.trigger(b.JWPLAYER_MEDIA_FIRST_FRAME,{loadTime:e}),d(a)}),a._onTime=g(a._triggerFirstFrame),a._onPlayAttempt=function(){a._qoeItem.tick(b.JWPLAYER_MEDIA_PLAY_ATTEMPT)},a.mediaController.once(b.JWPLAYER_MEDIA_PLAY_ATTEMPT,a._onPlayAttempt),a.mediaController.once(b.JWPLAYER_PROVIDER_FIRST_FRAME,a._triggerFirstFrame),a.mediaController.on(b.JWPLAYER_MEDIA_TIME,a._onTime)}function f(c){c.on("change:mediaModel",function(c,d,f){c._qoeItem&&c._qoeItem.end(f.get("state")),c._qoeItem=new a,c._qoeItem.tick(b.JWPLAYER_PLAYLIST_ITEM),c._qoeItem.start(d.get("state")),e(c),d.on("change:state",function(a,b,d){c._qoeItem.end(d),c._qoeItem.start(b)})})}var g=function(a){var b=Number.MIN_VALUE;return function(c){c.position>b&&a(),b=c.position}};return{model:f}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47)],e=function(a){var b=function(){var b={},c={},d={},e={};return{start:function(c){b[c]=a.now(),d[c]=d[c]+1||1},end:function(d){if(b[d]){var e=a.now()-b[d];c[d]=c[d]+e||e}},dump:function(){return{counts:d,sums:c,events:e}},tick:function(b,c){e[b]=c||a.now()},between:function(a,b){return e[b]&&e[a]?e[b]-e[a]:-1}}};return b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(83),c(84),c(47),c(68)],e=function(a,b,c,d){function e(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=b.choose(d);if(e)return d.type}return null}var f=function(b){return b=c.isArray(b)?b:[b],c.compact(c.map(b,a))};f.filterPlaylist=function(a,b,d,e){var f=[];return c.each(a,function(a){a=c.extend({},a),a.sources=g(a.sources,b,d,a.drm||e),a.sources.length&&(a.file=a.sources[0].file,f.push(a))}),f};var g=f.filterSources=function(a,f,g,h){f&&f.choose||(f=new d({primary:f?"flash":null})),a=c.compact(c.map(a,function(a){return c.isObject(a)?(g&&(a.androidhls=g),(a.drm||h)&&(a.drm=a.drm||h),b(a)):void 0}));var i=e(a,f);return c.where(a,{type:i})};return f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(84),c(85)],e=function(a,b,c){var d={sources:[],tracks:[]},e=function(e){e=e||{},a.isArray(e.tracks)||delete e.tracks;var f=a.extend({},d,e);a.isObject(f.sources)&&!a.isArray(f.sources)&&(f.sources=[b(f.sources)]),a.isArray(f.sources)&&0!==f.sources.length||(e.levels?f.sources=e.levels:f.sources=[b(e)]);for(var g=0;g<f.sources.length;g++){var h=f.sources[g];if(h){var i=h["default"];i?h["default"]="true"===i.toString():h["default"]=!1,f.sources[g].label||(f.sources[g].label=g.toString()),f.sources[g]=b(f.sources[g])}}return f.sources=a.compact(f.sources),a.isArray(f.tracks)||(f.tracks=[]),a.isArray(f.captions)&&(f.tracks=f.tracks.concat(f.captions),delete f.captions),f.tracks=a.compact(a.map(f.tracks,c)),f};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(50),c(47)],e=function(a,b,c){var d={"default":!1},e=function(e){if(e&&e.file){var f=c.extend({},d,e);f.file=b.trim(""+f.file);var g=/^[^\/]+\/(?:x-)?([^\/]+)$/;if(g.test(f.type)&&(f.type=f.type.replace(g,"$1")),!f.type)if(a.isYouTube(f.file))f.type="youtube";else if(a.isRtmp(f.file))f.type="rtmp";else{var h=b.extension(f.file);f.type=h}if(f.type)return"m3u8"===f.type&&(f.type="hls"),"smil"===f.type&&(f.type="rtmp"),"m4a"===f.type&&(f.type="aac"),c.each(f,function(a,b){""===a&&delete f[b]}),f}};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47)],e=function(a){var b={kind:"captions","default":!1},c=function(c){return c&&c.file?a.extend({},b,c):void 0};return c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(63)],e=function(a,b){var c=a.extend({get:function(a){return this.attributes=this.attributes||{},this.attributes[a]},set:function(a,b){if(this.attributes=this.attributes||{},this.attributes[a]!==b){var c=this.attributes[a];this.attributes[a]=b,this.trigger("change:"+a,this,b,c)}},clone:function(){return a.clone(this.attributes)}},b);return c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(63),c(67),c(64),c(66),c(65),c(47)],e=function(a,b,c,d,e,f){var g=function(a,d){this.model=d,this._adModel=(new b).setup({id:d.get("id"),volume:d.get("volume"),fullscreen:d.get("fullscreen"),mute:d.get("mute")}),this._adModel.on("change:state",c,this);var e=a.getContainer();this.swf=e.querySelector("object")};return g.prototype=f.extend({init:function(){this.swf.on("instream:state",function(a){switch(a.newstate){case e.PLAYING:this._adModel.set("state",a.newstate);break;case e.PAUSED:this._adModel.set("state",a.newstate)}},this).on("instream:time",function(a){this._adModel.set("position",a.position),this._adModel.set("duration",a.duration),this.trigger(d.JWPLAYER_MEDIA_TIME,a)},this).on("instream:complete",function(a){this.trigger(d.JWPLAYER_MEDIA_COMPLETE,a)},this).on("instream:error",function(a){this.trigger(d.JWPLAYER_MEDIA_ERROR,a)},this),this.swf.triggerFlash("instream:init")},instreamDestroy:function(){this._adModel&&(this.off(),this.swf.off(null,null,this),this.swf.triggerFlash("instream:destroy"),this.swf=null,this._adModel.off(),this._adModel=null,this.model=null)},load:function(a){this.swf.triggerFlash("instream:load",a)},instreamPlay:function(){this.swf.triggerFlash("instream:play")},instreamPause:function(){this.swf.triggerFlash("instream:pause")}},a),g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(89),c(63),c(47),c(66)],e=function(a,b,c,d){var e=function(b,e,f,g){function h(){m("Setup Timeout Error","Setup took longer than "+g+" seconds to complete.")}function i(){c.each(p,function(a){a.complete!==!0&&a.running!==!0&&null!==b&&k(a.depends)&&(a.running=!0,j(a))})}function j(a){var c=function(b){b=b||{},l(a,b)};a.method(c,e,b,f)}function k(a){return c.all(a,function(a){return p[a].complete})}function l(a,b){"error"===b.type?m(b.msg,b.reason):"complete"===b.type?(clearTimeout(n),o.trigger(d.JWPLAYER_READY)):(a.complete=!0,i())}function m(a,b){clearTimeout(n),o.trigger(d.JWPLAYER_SETUP_ERROR,{message:a+": "+b}),o.destroy()}var n,o=this,p=a.getQueue();g=g||10,this.start=function(){n=setTimeout(h,1e3*g),i()},this.destroy=function(){clearTimeout(n),this.off(),p.length=0,b=null,e=null,f=null}};return e.prototype=b,e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(90),c(71),c(47),c(45),c(92)],e=function(a,b,d,e,f){function g(a,b,c){if(b){var d=b.client;delete b.client,/\.(js|swf)$/.test(d||"")||(d=e.repo()+c),a[d]=b}}function h(a,c){var f=d.clone(c.get("plugins"))||{},h=c.get("edition"),i=b(h),j=/\.(js|swf)$/,k=e.repo(),l=c.get("advertising");i("ads")&&l&&(j.test(l.client)?f[l.client]=l:f[k+l.client+".js"]=l,delete l.client);var m=c.get("analytics");d.isObject(m)||(m={}),g(f,m,"jwpsrv.js"),g(f,c.get("ga"),"gapro.js"),g(f,c.get("sharing"),"sharing.js"),g(f,c.get("related"),"related.js"),c.set("plugins",f),a()}function i(b,c){var d=c.get("key")||window.jwplayer&&window.jwplayer.key,e=new a(d),g=e.edition();c.set("key",d),c.set("edition",g),c.updateProviders(),"invalid"===g?f.error(b,"Error setting up player",(void 0===d?"Missing":"Invalid")+" license key"):b()}function j(a,b){var d=b.get("dash");"dashjs"===d?c.e(3,function(d){var e=c(106);e.register(window.jwplayer),b.updateProviders(),a()}):d?c.e(4,function(d){var e=c(108);e.register(window.jwplayer),b.updateProviders(),a()}):a()}function k(){var a=f.getQueue();return a.LOAD_PLAYLIST.depends.push("LOAD_PROVIDERS"),a.LOAD_PROVIDERS={method:j,depends:[]},a.LOAD_PROVIDERS.depends.push("CHECK_KEY"),a.CHECK_KEY={method:i,depends:["LOAD_POLYFILLS"]},a.FILTER_PLUGINS={method:h,depends:["CHECK_KEY"]},a.LOAD_PLUGINS.depends.push("CHECK_KEY"),a.LOAD_PLUGINS.depends.push("FILTER_PLUGINS"),a}return{getQueue:k}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(91),c(71)],e=function(a,b,c){var d="invalid",e="RnXcsftYjWRDA^Uy",f=function(f){function g(f){a.exists(f)||(f="");try{f=b.decrypt(f,e);var g=f.split("/");h=g[0],"pro"===h&&(h="premium");var k=c(h);if(g.length>2&&k("setup")){i=g[1];var l=parseInt(g[2]);l>0&&(j=new Date,j.setTime(l))}else h=d}catch(m){h=d}}var h,i,j;this.edition=function(){return j&&j.getTime()<(new Date).getTime()?d:h},this.token=function(){return i},this.expiration=function(){return j},g(f)};return f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){var a=function(a){return window.atob(a)},b=function(a){return unescape(encodeURIComponent(a))},c=function(a){try{return decodeURIComponent(escape(a))}catch(b){return a}},d=function(a){for(var b=new Array(Math.ceil(a.length/4)),c=0;c<b.length;c++)b[c]=a.charCodeAt(4*c)+(a.charCodeAt(4*c+1)<<8)+(a.charCodeAt(4*c+2)<<16)+(a.charCodeAt(4*c+3)<<24);return b},e=function(a){for(var b=new Array(a.length),c=0;c<a.length;c++)b[c]=String.fromCharCode(255&a[c],a[c]>>>8&255,a[c]>>>16&255,a[c]>>>24&255);return b.join("")};return{decrypt:function(f,g){if(f=String(f),g=String(g),0==f.length)return"";for(var h,i,j=d(a(f)),k=d(b(g).slice(0,16)),l=j.length,m=j[l-1],n=j[0],o=2654435769,p=Math.floor(6+52/l),q=p*o;0!=q;){i=q>>>2&3;for(var r=l-1;r>=0;r--)m=j[r>0?r-1:l-1],h=(m>>>5^n<<2)+(n>>>3^m<<4)^(q^n)+(k[3&r^i]^m),n=j[r]-=h;q-=o}var s=e(j);return s=s.replace(/\0+$/,""),c(s)}}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(93),c(99),c(96),c(57),c(47),c(45),c(66)],e=function(a,b,d,e,f,g,h){function i(){var a={LOAD_POLYFILLS:{method:j,depends:[]},LOAD_PLUGINS:{method:k,depends:["LOAD_POLYFILLS"]},LOAD_YOUTUBE:{method:u,depends:["LOAD_PLAYLIST"]},LOAD_SKIN:{method:t,depends:[]},LOAD_PLAYLIST:{method:o,depends:["LOAD_PLUGINS"]},SETUP_COMPONENTS:{method:v,depends:["LOAD_PLAYLIST","LOAD_SKIN","LOAD_YOUTUBE"]},SEND_READY:{method:w,depends:["LOAD_PLUGINS","SETUP_COMPONENTS"]}};return a}function j(a){window.btoa&&window.atob?a():c.e(1,function(b){c(104),a()})}function k(b,c,d){y=a.loadPlugins(c.get("id"),c.get("plugins")),y.on(h.COMPLETE,f.partial(l,b,c,d)),y.on(h.ERROR,f.partial(n,b)),y.load()}function l(a,b,c){y.setupPlugins(c,b,f.partial(m,c)),a()}function m(a,b,c,d){var e=a.id;return function(){var a=document.querySelector("#"+e+" .jw-overlays");a&&d&&a.appendChild(c),"function"==typeof b.resize&&(b.resize(a.clientWidth,a.clientHeight),setTimeout(function(){b.resize(a.clientWidth,a.clientHeight)},400)),a&&a.style&&(c.left=a.style.left,c.top=a.style.top)}}function n(a,b){x(a,"Could not load plugin",b.message)}function o(a,c){var d=c.get("playlist");f.isString(d)?(z=new b,z.on(h.JWPLAYER_PLAYLIST_LOADED,function(b){p(a,c,b.playlist)}),z.on(h.JWPLAYER_ERROR,f.partial(q,a)),z.load(d)):p(a,c,d)}function p(a,b,c){b.setPlaylist(c);var d=b.get("playlist");return f.isArray(d)&&0!==d.length?void a():void q(a,"Playlist type not supported")}function q(a,b){b&&b.message?x(a,"Error loading playlist",b.message):x(a,"Error loading player","No playable sources found")}function r(a,b){return f.contains(e.SkinsLoadable,a)?b+"skins/"+a+".css":void 0}function s(a){for(var b=document.styleSheets,c=0,d=b.length;d>c;c++)if(b[c].href===a)return!0;return!1}function t(a,b){var c=b.get("skin"),g=b.get("skinUrl");if(f.contains(e.SkinsIncluded,c))return void a();if(g||(g=r(c,b.get("base"))),f.isString(g)&&!s(g)){b.set("skin-loading",!0);var i=!0,j=new d(g,i);j.addEventListener(h.COMPLETE,function(){b.set("skin-loading",!1)}),j.addEventListener(h.ERROR,function(){console.log("The given skin failed to load : ",g),b.set("skin","seven"),b.set("skin-loading",!1)}),j.load()}f.defer(function(){a()})}function u(a,b){var d=b.get("playlist"),e=f.some(d,function(a){return g.isYouTube(a.file,a.type)});e?c.e(2,function(b){var d=c(105);d.register(window.jwplayer),a()}):a()}function v(a,b,c,d){b.setItem(0),d.setup(),a()}function w(a){a({type:"complete"})}function x(a,b,c){a({type:"error",msg:b,reason:c})}var y,z;return{getQueue:i,error:x}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(94),c(97),c(98),c(95)],e=function(a,b,c,d){var e={},f={},g=function(c,d){return f[c]=new a(new b(e),d),f[c]},h=function(a,b,f,g){var h=d.getPluginName(a);e[h]||(e[h]=new c(a)),e[h].registerPlugin(a,b,f,g)};return{loadPlugins:g,registerPlugin:h}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(95),c(45),c(66),c(63),c(47),c(96)],e=function(a,b,c,d,e,f){var g=function(g,h){function i(){o||(o=!0,n=f.loaderstatus.COMPLETE,m.trigger(c.COMPLETE))}function j(){if(!q&&(h&&0!==e.keys(h).length||i(),!o)){var d=g.getPlugins();l=e.after(p,i),e.each(h,function(e,g){var h=a.getPluginName(g),i=d[h],j=i.getJS(),k=i.getTarget(),n=i.getStatus();n!==f.loaderstatus.LOADING&&n!==f.loaderstatus.NEW&&(j&&!b.versionCheck(k)&&m.trigger(c.ERROR,{message:"Incompatible player version"}),l())})}}function k(a){if(!q){var d="File not found";a.url&&b.log(d,a.url),this.off(),this.trigger(c.ERROR,{message:d}),j()}}var l,m=e.extend(this,d),n=f.loaderstatus.NEW,o=!1,p=e.size(h),q=!1;this.setupPlugins=function(c,d,f){var h=[],i={},j=g.getPlugins(),k=d.get("plugins");e.each(k,function(d,g){var l=a.getPluginName(g),m=j[l],n=m.getFlashPath(),o=m.getJS(),p=m.getURL();if(n){var q=e.extend({name:l,swf:n,pluginmode:m.getPluginmode()},d);h.push(q)}var r=b.tryCatch(function(){if(o&&k[p]){var a=document.createElement("div");a.id=c.id+"_"+l,a.className="jw-plugin jw-reset",i[l]=m.getNewInstance(c,e.extend({},k[p]),a),c.onReady(f(i[l],a,!0)),c.onResize(f(i[l],a))}});r instanceof b.Error&&b.log("ERROR: Failed to load "+l+".")}),c.plugins=i,d.set("flashPlugins",h)},this.load=function(){if(b.exists(h)&&"object"!==b.typeOf(h))return void j();n=f.loaderstatus.LOADING,e.each(h,function(a,d){if(b.exists(d)){var e=g.addPlugin(d);e.on(c.COMPLETE,j),e.on(c.ERROR,k)}});var a=g.getPlugins();e.each(a,function(a){a.load()}),j()},this.destroy=function(){q=!0,this.off()},this.getStatus=function(){return n}};return g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(50)],e=function(a){var b={},c=b.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};return b.getPluginPathType=function(b){if("string"==typeof b){b=b.split("?")[0];var d=b.indexOf("://");if(d>0)return c.ABSOLUTE;var e=b.indexOf("/"),f=a.extension(b);return!(0>d&&0>e)||f&&isNaN(f)?c.RELATIVE:c.CDN}},b.getPluginName=function(a){return a.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")},b.getPluginVersion=function(a){return a.replace(/[^-]*-?([^\.]*).*$/,"$1")},b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(66),c(63),c(47)],e=function(a,b,c){var d={},e={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},f=function(f,g){function h(b){k=e.ERROR,j.trigger(a.ERROR,b)}function i(b){k=e.COMPLETE,j.trigger(a.COMPLETE,b)}var j=c.extend(this,b),k=e.NEW;this.addEventListener=this.on,this.removeEventListener=this.off,this.makeStyleLink=function(a){var b=document.createElement("link");return b.type="text/css",b.rel="stylesheet",b.href=a,b},this.makeScriptTag=function(a){var b=document.createElement("script");return b.src=a,b},this.makeTag=g?this.makeStyleLink:this.makeScriptTag,this.load=function(){if(k===e.NEW){var b=d[f];if(b&&(k=b.getStatus(),2>k))return b.on(a.ERROR,h),void b.on(a.COMPLETE,i);var c=document.getElementsByTagName("head")[0]||document.documentElement,j=this.makeTag(f),l=!1;j.onload=j.onreadystatechange=function(a){l||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(l=!0,i(a),j.onload=j.onreadystatechange=null,c&&j.parentNode&&!g&&c.removeChild(j))},j.onerror=h,c.insertBefore(j,c.firstChild),k=e.LOADING,d[f]=this}},this.getStatus=function(){return k}};return f.loaderstatus=e,f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(95),c(98)],e=function(a,b){var c=function(c){this.addPlugin=function(d){var e=a.getPluginName(d);return c[e]||(c[e]=new b(d)),c[e]},this.getPlugins=function(){return c}};return c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(95),c(66),c(63),c(96),c(47)],e=function(a,b,c,d,e,f){var g={FLASH:0,JAVASCRIPT:1,HYBRID:2},h=function(h){function i(){switch(b.getPluginPathType(h)){case b.pluginPathType.ABSOLUTE:return h;case b.pluginPathType.RELATIVE:return a.getAbsolutePath(h,window.location.href)}}function j(){f.defer(function(){q=e.loaderstatus.COMPLETE,p.trigger(c.COMPLETE)})}function k(){q=e.loaderstatus.ERROR,p.trigger(c.ERROR,{url:h})}var l,m,n,o,p=f.extend(this,d),q=e.loaderstatus.NEW;this.load=function(){if(q===e.loaderstatus.NEW){if(h.lastIndexOf(".swf")>0)return l=h,q=e.loaderstatus.COMPLETE,void p.trigger(c.COMPLETE);if(b.getPluginPathType(h)===b.pluginPathType.CDN)return q=e.loaderstatus.COMPLETE,void p.trigger(c.COMPLETE);q=e.loaderstatus.LOADING;var a=new e(i());a.on(c.COMPLETE,j),a.on(c.ERROR,k),a.load()}},this.registerPlugin=function(a,b,d,f){o&&(clearTimeout(o),o=void 0),n=b,d&&f?(l=f,m=d):"string"==typeof d?l=d:"function"==typeof d?m=d:d||f||(l=a),q=e.loaderstatus.COMPLETE,p.trigger(c.COMPLETE)},this.getStatus=function(){return q},this.getPluginName=function(){return b.getPluginName(h)},this.getFlashPath=function(){if(l)switch(b.getPluginPathType(l)){case b.pluginPathType.ABSOLUTE:return l;case b.pluginPathType.RELATIVE:return h.lastIndexOf(".swf")>0?a.getAbsolutePath(l,window.location.href):a.getAbsolutePath(l,i())}return null},this.getJS=function(){return m},this.getTarget=function(){return n},this.getPluginmode=function(){return void 0!==typeof l&&void 0!==typeof m?g.HYBRID:void 0!==typeof l?g.FLASH:void 0!==typeof m?g.JAVASCRIPT:void 0},this.getNewInstance=function(a,b,c){return new m(a,b,c)},this.getURL=function(){return h}};return h}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(100),c(101),c(45),c(66),c(63),c(47)],e=function(a,b,c,d,e,f){var g=function(){function g(e){var f=c.tryCatch(function(){for(var c=e.responseXML.childNodes,f="",g=0;g<c.length&&(f=c[g],8===f.nodeType);g++);if("xml"===a.localName(f)&&(f=f.nextSibling),"rss"!==a.localName(f))return void i("Not a valid RSS feed");var h=b.parse(f);k.trigger(d.JWPLAYER_PLAYLIST_LOADED,{playlist:h})});f instanceof c.Error&&i()}function h(a){i(a.match(/invalid/i)?"Not a valid RSS feed":"")}function i(a){k.trigger(d.JWPLAYER_ERROR,{message:a?a:"Error loading file"})}var j,k=f.extend(this,e);this.load=function(a){j=c.ajax(a,g,h)},this.destroy=function(){this.off(),j=null}};return g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(50)],e=function(a){return{localName:function(a){return a?a.localName?a.localName:a.baseName?a.baseName:"":""},textContent:function(b){return b?b.textContent?a.trim(b.textContent):b.text?a.trim(b.text):"":""},getChildNode:function(a,b){return a.childNodes[b]},numChildren:function(a){return a.childNodes?a.childNodes.length:0}}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(50),c(100),c(102),c(103),c(83)],e=function(a,b,c,d,e){function f(b){for(var f={},h=0;h<b.childNodes.length;h++){var i=b.childNodes[h],k=j(i);if(k)switch(k.toLowerCase()){case"enclosure":f.file=a.xmlAttribute(i,"url");break;case"title":f.title=g(i);break;case"guid":f.mediaid=g(i);break;case"pubdate":f.date=g(i);break;case"description":f.description=g(i);break;case"link":f.link=g(i);break;case"category":f.tags?f.tags+=g(i):f.tags=g(i)}}return f=d(b,f),f=c(b,f),new e(f)}var g=b.textContent,h=b.getChildNode,i=b.numChildren,j=b.localName,k={};return k.parse=function(a){for(var b=[],c=0;c<i(a);c++){var d=h(a,c),e=j(d).toLowerCase();if("channel"===e)for(var g=0;g<i(d);g++){var k=h(d,g);"item"===j(k).toLowerCase()&&b.push(f(k))}}return b},k}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(100),c(50),c(45)],e=function(a,b,c){var d="jwplayer",e=function(e,f){for(var g=[],h=[],i=b.xmlAttribute,j="default",k="label",l="file",m="type",n=0;n<e.childNodes.length;n++){var o=e.childNodes[n];if(o.prefix===d){var p=a.localName(o);"source"===p?(delete f.sources,g.push({file:i(o,l),"default":i(o,j),label:i(o,k),type:i(o,m)})):"track"===p?(delete f.tracks,h.push({file:i(o,l),"default":i(o,j),kind:i(o,"kind"),label:i(o,k)})):(f[p]=c.serialize(a.textContent(o)),"file"===p&&f.sources&&delete f.sources)}f[l]||(f[l]=f.link)}if(g.length)for(f.sources=[],n=0;n<g.length;n++)g[n].file.length>0&&(g[n][j]="true"===g[n][j]?!0:!1,g[n].label.length||delete g[n].label,f.sources.push(g[n]));if(h.length)for(f.tracks=[],n=0;n<h.length;n++)h[n].file.length>0&&(h[n][j]="true"===h[n][j]?!0:!1,h[n].kind=h[n].kind.length?h[n].kind:"captions",h[n].label.length||delete h[n].label,f.tracks.push(h[n]));return f};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(100),c(50),c(45)],e=function(a,b,c){var d=b.xmlAttribute,e=a.localName,f=a.textContent,g=a.numChildren,h="media",i=function(a,b){function j(a){var b={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};return b[a]?b[a]:a}var k,l,m="tracks",n=[];for(l=0;l<g(a);l++)if(k=a.childNodes[l],k.prefix===h){if(!e(k))continue;switch(e(k).toLowerCase()){case"content":d(k,"duration")&&(b.duration=c.seconds(d(k,"duration"))),g(k)>0&&(b=i(k,b)),d(k,"url")&&(b.sources||(b.sources=[]),b.sources.push({file:d(k,"url"),type:d(k,"type"),width:d(k,"width"),label:d(k,"label")}));break;case"title":b.title=f(k);break;case"description":b.description=f(k);break;case"guid":b.mediaid=f(k);break;case"thumbnail":b.image||(b.image=d(k,"url"));break;case"player":break;case"group":i(k,b);break;case"subtitle":var o={};o.file=d(k,"url"),o.kind="captions",d(k,"lang").length>0&&(o.label=j(d(k,"lang"))),n.push(o)}}for(b.hasOwnProperty(m)||(b[m]=[]),l=0;l<n.length;l++)b[m].push(n[l]);return b};return i}.apply(b,d),!(void 0!==e&&(a.exports=e))},,,,,,,function(a,b,c){var d,e;d=[c(100),c(111),c(112),c(45)],e=function(a,b,c,d){var e=function(e,f){function g(a){d.log("CAPTIONS("+a+")")}function h(a,b){q=[],r={},s={},t=0;var c,d,e,f=b.tracks;for(e=0;e<f.length;e++)c=f[e],d=c.kind.toLowerCase(),("captions"===d||"subtitles"===d)&&(c.file?(j(c),k(c)):c.data&&j(c));var g=o();this.setCaptionsList(g),p()}function i(a,b){return 0===b?void n(a,null):void n(a,q[b-1])}function j(a){"number"!=typeof a.id&&(a.id=a.name||a.file||"cc"+q.length),a.data=a.data||[],a.label||(a.label="Unknown CC",t++,t>1&&(a.label+=" ("+t+")")),q.push(a),r[a.id]=a}function k(a){d.ajax(a.file,function(b){l(b,a)},m,!0)}function l(e,f){var h,i=e.responseXML?e.responseXML.firstChild:null;if(i)for("xml"===a.localName(i)&&(i=i.nextSibling);i.nodeType===i.COMMENT_NODE;)i=i.nextSibling;h=i&&"tt"===a.localName(i)?d.tryCatch(function(){f.data=c(e.responseXML)}):d.tryCatch(function(){f.data=b(e.responseText)}),h instanceof d.Error&&g(h.message+": "+f.file)}function m(a){g(a)}function n(a,b){a.set("captionsTrack",b),b?a.set("captionLabel",b.label):a.set("captionLabel","Off")}function o(){for(var a=[{id:"off",label:"Off"}],b=0;b<q.length;b++)a.push({id:q[b].id,label:q[b].label});return a}function p(){for(var a=0,b=f.get("captionLabel"),c=0;c<q.length;c++){var d=q[c];if(b&&b===d.label){a=c+1;break}d["default"]||d.defaulttrack?a=c+1:d.autoselect}f.set("captionsIndex",a)}f.on("change:playlistItem",h,this),f.on("change:captionsIndex",i,this),f.mediaController.on("subtitlesTracks",function(a){if(a.tracks.length){f.mediaController.off("meta"),q=[],r={},s={},t=0;for(var b=a.tracks||[],c=0;c<b.length;c++){var d=b[c];d.id=d.name,d.label=d.name||d.language,j(d)}var e=o();this.setCaptionsList(e),p()}},this),f.mediaController.on("subtitlesTrackData",function(a){var b=r[a.name];if(b){for(var c=a.captions||[],d=!1,e=0;e<c.length;e++){var f=c[e],g=a.name+"_"+f.begin+"_"+f.end;s[g]||(s[g]=f,b.data.push(f),d=!0)}d&&b.data.sort(function(a,b){return a.begin-b.begin})}},this),f.mediaController.on("meta",function(a){var b=a.metadata;if(b&&"textdata"===b.type){var c=r[b.trackid];if(!c){c={kind:"captions",id:b.trackid,data:[]},j(c);var d=o();this.setCaptionsList(d)}var e=a.position||f.get("position"),g=""+Math.round(10*e)+"_"+b.text,h=s[g];h||(h={begin:e,text:b.text},s[g]=h,c.data.push(h))}},this);var q=[],r={},s={},t=0;this.getCurrentIndex=function(){return f.get("captionsIndex")},this.getCaptionsList=function(){return f.get("captionsList")},this.setCurrentIndex=function(a){e.setCurrentCaptions(a)},this.setCaptionsList=function(a){f.set("captionsList",a)}};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(50)],e=function(a,b){function c(a){var b={},c=a.split("\r\n");1===c.length&&(c=a.split("\n"));var e=1;if(c[0].indexOf(" --> ")>0&&(e=0),c.length>e+1&&c[e+1]){var f=c[e],g=f.indexOf(" --> ");g>0&&(b.begin=d(f.substr(0,g)),b.end=d(f.substr(g+5)),b.text=c.slice(e+1).join("<br/>"))}return b}var d=a.seconds;return function(a){var d=[];a=b.trim(a);var e=a.split("\r\n\r\n");1===e.length&&(e=a.split("\n\n"));for(var f=0;f<e.length;f++)if("WEBVTT"!==e[f]){var g=c(e[f]);g.text&&d.push(g)}if(!d.length)throw new Error("Invalid SRT file");return d}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(50)],e=function(a){function b(a){a||c()}function c(){throw new Error("Invalid DFXP file")}var d=a.seconds;return function(e){b(e);var f=[],g=e.getElementsByTagName("p");b(g),g.length||(g=e.getElementsByTagName("tt:p"),g.length||(g=e.getElementsByTagName("tts:p")));for(var h=0;h<g.length;h++){var i=g[h],j=i.innerHTML||i.textContent||i.text||"",k=a.trim(j).replace(/>\s+</g,"><").replace(/tts?:/g,"");if(k){var l=i.getAttribute("begin"),m=i.getAttribute("dur"),n=i.getAttribute("end"),o={begin:d(l),text:k};n?o.end=d(n):m&&(o.end=o.begin+d(m)),f.push(o)}}return f.length||c(),f}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[],e=function(){return function(a,b){a.getPlaylistIndex=a.getItem;var c={jwPlay:b.play,jwPause:b.pause,jwSetMute:b.setMute,jwLoad:b.load,jwPlaylistItem:b.item,jwGetAudioTracks:b.getAudioTracks,jwDetachMedia:b.detachMedia,jwAttachMedia:b.attachMedia,jwAddEventListener:b.on,jwRemoveEventListener:b.off,jwStop:b.stop,jwSeek:b.seek,jwSetVolume:b.setVolume,jwPlaylistNext:b.next,jwPlaylistPrev:b.prev,jwSetFullscreen:b.setFullscreen,jwGetQualityLevels:b.getQualityLevels,jwGetCurrentQuality:b.getCurrentQuality,jwSetCurrentQuality:b.setCurrentQuality,jwSetCurrentAudioTrack:b.setCurrentAudioTrack,jwGetCurrentAudioTrack:b.getCurrentAudioTrack,jwGetCaptionsList:b.getCaptionsList,jwGetCurrentCaptions:b.getCurrentCaptions,jwSetCurrentCaptions:b.setCurrentCaptions,jwSetCues:b.setCues};a.callInternal=function(a){console.log("You are using the deprecated callInternal method for "+a);var d=Array.prototype.slice.call(arguments,1);c[a].apply(b,d)}}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(115),c(66),c(152)],e=function(a,b,c){var d=function(d,e){var f=new a(d,e),g=f.setup;return f.setup=function(){if(g.call(this),"trial"===e.get("edition")){var a=document.createElement("div");a.className="jw-icon jw-rightclick-logo jw-watermark",this.element().appendChild(a)}e.on("change:skipButton",this.onSkipButton,this),e.on("change:castActive change:playlistItem",this.showDisplayIconImage,this)},f.showDisplayIconImage=function(a){var b=a.get("castActive"),c=a.get("playlistItem"),d=f.controlsContainer().getElementsByClassName("jw-display-icon-container")[0];b?(d.style.backgroundImage="url("+c.image+")",d.style.backgroundSize="contain"):(d.style.backgroundImage="",d.style.backgroundSize="")},f.onSkipButton=function(a,b){b?this.addSkipButton():this._skipButton&&(this._skipButton.destroy(),this._skipButton=null)},f.addSkipButton=function(){this._skipButton=new c(this.instreamModel),this._skipButton.on(b.JWPLAYER_AD_SKIPPED,function(){this.api.skipAd()},this),this.controlsContainer().appendChild(this._skipButton.element())},f};return d}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(66),c(63),c(65),c(126),c(127),c(128),c(130),c(116),c(132),c(146),c(147),c(150),c(47),c(151)],e=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=a.style,q=a.bounds,r=a.isMobile(),s=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],t=function(t,u){function v(b){var c=a.between(u.get("position")+b,0,u.get("duration"));t.seek(c)}function w(b){var c=a.between(u.get("volume")+b,0,100);t.setVolume(c)}function x(a){return a.ctrlKey||a.metaKey?!1:u.get("controls")?!0:!1}function y(a){if(!x(a))return!0;switch(Ha||aa(),a.keyCode){case 27:t.setFullscreen(!1);break;case 13:case 32:t.play();break;case 37:Ha||v(-5);break;case 39:Ha||v(5);break;case 38:w(10);break;case 40:w(-10);break;case 77:t.setMute();break;case 70:t.setFullscreen();break;default:if(a.keyCode>=48&&a.keyCode<=59){var b=a.keyCode-48,c=b/10*u.get("duration");t.seek(c)}}return/13|32|37|38|39|40/.test(a.keyCode)?(a.preventDefault(),!1):void 0}function z(){Ma=!0,Na.trigger(b.JWPLAYER_VIEW_TAB_FOCUS,{hasFocus:!1})}function A(){var a=!Ma;Ma=!1,a&&Na.trigger(b.JWPLAYER_VIEW_TAB_FOCUS,{hasFocus:!0}),Ha||aa()}function B(){Ma=!1,Na.trigger(b.JWPLAYER_VIEW_TAB_FOCUS,{hasFocus:!1})}function C(){var a=q(ia),c=Math.round(a.width),d=Math.round(a.height);return document.body.contains(ia)?c&&d&&(c!==ma||d!==na)&&(ma=c,na=d,clearTimeout(Ka),Ka=setTimeout(W,50),u.set("containerWidth",c),
u.set("containerHeight",d),Na.trigger(b.JWPLAYER_RESIZE,{width:c,height:d})):(window.removeEventListener("resize",C),r&&window.removeEventListener("orientationchange",C)),a}function D(b,c){c=c||!1,a.toggleClass(ia,"jw-flag-casting",c)}function E(b,c){a.toggleClass(ia,"jw-flag-cast-available",c),a.toggleClass(ja,"jw-flag-cast-available",c)}function F(b,c,d){d&&a.removeClass(ia,"jw-stretch-"+d),a.addClass(ia,"jw-stretch-"+c)}function G(b,c){a.toggleClass(ia,"jw-flag-compact-player",c)}function H(a){a&&!r&&(a.element().addEventListener("mousemove",K,!1),a.element().addEventListener("mouseout",L,!1))}function I(){u.get("state")!==d.IDLE&&u.get("state")!==d.COMPLETE||!u.get("controls")||t.play(),Ja?_():aa()}function J(a){a.link?(t.pause(!0),t.setFullscreen(!1),window.open(a.link,a.linktarget)):t.play()}function K(){clearTimeout(Ea)}function L(){aa()}function M(a){Na.trigger(a.type,a)}function N(b,c){c?(za&&za.destroy(),a.addClass(ia,"jw-flag-flash-blocked")):(za&&za.setup(u,ia,ia),a.removeClass(ia,"jw-flag-flash-blocked"))}function O(){u.get("controls")&&t.setFullscreen()}function P(){ra=new f(u,ka),ra.on("click",function(){M({type:b.JWPLAYER_DISPLAY_CLICK}),u.get("controls")&&t.play()}),ra.on("tap",function(){M({type:b.JWPLAYER_DISPLAY_CLICK}),I()}),ra.on("doubleClick",O);var c=new g(u);c.on("click",function(){M({type:b.JWPLAYER_DISPLAY_CLICK}),t.play()}),c.on("tap",function(){M({type:b.JWPLAYER_DISPLAY_CLICK}),I()}),ja.appendChild(c.element()),ta=new h(u),ua=new i(u),ua.on(b.JWPLAYER_LOGO_CLICK,J);var d=document.createElement("div");d.className="jw-controls-right jw-reset",u.get("logo")&&d.appendChild(ua.element()),d.appendChild(ta.element()),ja.appendChild(d),wa=new e(u),wa.setup(u.get("captions")),ja.parentNode.insertBefore(wa.element(),va.element());var k=u.get("height");r&&("string"==typeof k||k>=1.5*Ga)?a.addClass(ia,"jw-flag-touch"):(za=new l,za.setup(u,ia,ia)),pa=new j(t,u),pa.on(b.JWPLAYER_USER_ACTION,aa),u.on("change:scrubbing",R),u.on("change:compactUI",G),ja.appendChild(pa.element()),ia.onfocusin=A,ia.onfocusout=B,ia.addEventListener("focus",A),ia.addEventListener("blur",B),ia.addEventListener("keydown",y),ia.onmousedown=z}function Q(b){return b.get("state")===d.PAUSED?void b.once("change:state",Q):void(b.get("scrubbing")===!1&&a.removeClass(ia,"jw-flag-dragging"))}function R(b,c){b.off("change:state",Q),c?a.addClass(ia,"jw-flag-dragging"):Q(b)}function S(b,c,d){var e,f=ia.className;d=!!d,d&&(f=f.replace(/\s*aspectMode/,""),ia.className!==f&&(ia.className=f),a.style(ia,{display:"block"},d)),a.exists(b)&&a.exists(c)&&(u.set("width",b),u.set("height",c)),e={width:b},a.hasClass(ia,"jw-flag-aspect-mode")||(e.height=c),p(ia,e,!0),ua&&ua.offset(pa&&ua.position().indexOf("bottom")>=0?pa.element().clientHeight:0),T(c),W(b,c)}function T(b){if(xa=U(b),pa&&!xa){var c=Ha?oa:u;ha(c.get("state"))}a.toggleClass(ia,"jw-flag-audio-player",xa)}function U(a){if(u.get("aspectratio"))return!1;if(n.isString(a)&&a.indexOf("%")>-1)return!1;var b=n.isNumber(a)?a:u.get("containerHeight");return V(b)}function V(a){return a&&Ga*(r?1.75:1)>=a}function W(b,c){if(!b||isNaN(Number(b))){if(!ka)return;b=ka.clientWidth}if(!c||isNaN(Number(c))){if(!ka)return;c=ka.clientHeight}a.isMSIE(9)&&document.all&&!window.atob&&(b=c="100%");var d=u.getVideo();if(d){var e=d.resize(b,c,u.get("stretching"));e&&(clearTimeout(Ka),Ka=setTimeout(W,250)),wa.resize(),pa.checkCompactMode(b)}}function X(){if(La){var a=document.fullscreenElement||document.webkitCurrentFullScreenElement||document.mozFullScreenElement||document.msFullscreenElement;return!(!a||a.id!==u.get("id"))}return Ha?oa.getVideo().getFullScreen():u.getVideo().getFullScreen()}function Y(a){var b=void 0!==a.jwstate?a.jwstate:X();La?Z(ia,b):$(b)}function Z(b,c){a.removeClass(b,"jw-flag-fullscreen"),c?(a.addClass(b,"jw-flag-fullscreen"),p(document.body,{"overflow-y":"hidden"}),aa()):p(document.body,{"overflow-y":""}),W(),$(c)}function $(a){u.setFullscreen(a),oa&&oa.setFullscreen(a),a&&(clearTimeout(Ka),Ka=setTimeout(W,200))}function _(){Ja=!1,clearTimeout(Ea),pa.hideComponents(),a.addClass(ia,"jw-flag-user-inactive")}function aa(){Ja||(a.removeClass(ia,"jw-flag-user-inactive"),pa.checkCompactMode(ka.clientWidth)),Ja=!0,clearTimeout(Ea),Ea=setTimeout(_,Fa)}function ba(){ya=!0,Ra(!1)}function ca(){sa&&sa.setState(u.get("state")),u.mediaModel.on("change:mediaType",function(b,c){var d="audio"===c;a.toggleClass(ia,"jw-flag-media-audio",d)})}function da(b,c){var d="LIVE"===a.adaptiveType(c);a.toggleClass(ia,"jw-flag-live",d),Na.setAltText(d?"Live Broadcast":"")}function ea(a,b){ya=!1,ha(b)}function fa(a){ea(u,d.ERROR),va.updateText(u,{title:a.message})}function ga(){var a=u.getVideo();return a?a.isCaster:!1}function ha(b){if(a.removeClass(ia,"jw-state-"+Aa),a.addClass(ia,"jw-state-"+b),Aa=b,ga())return void a.addClass(ka,"jw-media-show");switch(b){case d.PLAYING:W();break;case d.PAUSED:aa()}}var ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,Aa,Ba,Ca,Da,Ea=-1,Fa=r?4e3:2e3,Ga=40,Ha=!1,Ia=!1,Ja=!1,Ka=-1,La=!1,Ma=!1,Na=n.extend(this,c);this.model=u,this.api=t,ia=a.createElement(o({id:u.get("id")}));var Oa=u.get("width"),Pa=u.get("height");p(ia,{width:Oa.toString().indexOf("%")>0?Oa:Oa+"px",height:Pa.toString().indexOf("%")>0?Pa:Pa+"px"}),Ca=ia.requestFullscreen||ia.webkitRequestFullscreen||ia.webkitRequestFullScreen||ia.mozRequestFullScreen||ia.msRequestFullscreen,Da=document.exitFullscreen||document.webkitExitFullscreen||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen,La=Ca&&Da,this.onChangeSkin=function(b,c,d){d&&a.removeClass(ia,"jw-skin-"+d),c&&a.addClass(ia,"jw-skin-"+c)},this.handleColorOverrides=function(){function b(b,d,e){if(e){b=a.prefix(b,"#"+c+" ");var f={};f[d]=e,a.css(b.join(", "),f)}}var c=u.get("id"),d=u.get("skinColorActive"),e=u.get("skinColorInactive"),f=u.get("skinColorBackground");b([".jw-toggle",".jw-button-color:hover"],"color",d),b([".jw-active-option",".jw-progress",".jw-playlist-container .jw-option.jw-active-option",".jw-playlist-container .jw-option:hover"],"background",d),b([".jw-text",".jw-option",".jw-button-color",".jw-toggle.jw-off",".jw-tooltip-title",".jw-skip .jw-skip-icon",".jw-playlist-container .jw-icon"],"color",e),b([".jw-cue",".jw-knob"],"background",e),b([".jw-playlist-container .jw-option"],"border-bottom-color",e),b([".jw-background-color",".jw-tooltip-title",".jw-playlist",".jw-playlist-container .jw-option"],"background",f),b([".jw-playlist-container ::-webkit-scrollbar"],"border-color",f)},this.setup=function(){if(!Ia){this.handleColorOverrides(),u.get("skin-loading")===!0&&(a.addClass(ia,"jw-flag-skin-loading"),u.once("change:skin-loading",function(){a.removeClass(ia,"jw-flag-skin-loading")})),this.onChangeSkin(u,u.get("skin"),""),u.on("change:skin",this.onChangeSkin,this),ka=ia.getElementsByClassName("jw-media")[0],ja=ia.getElementsByClassName("jw-controls")[0],la=ia.getElementsByClassName("jw-aspect")[0];var c=ia.getElementsByClassName("jw-preview")[0];qa=new k(u),qa.setup(c);var e=ia.getElementsByClassName("jw-title")[0];va=new m(u),va.setup(e),P(),aa(),u.getVideo().setContainer(ka),u.mediaController.on("fullscreenchange",Y);for(var f=s.length;f--;)document.addEventListener(s[f],Y,!1);window.removeEventListener("resize",C),window.addEventListener("resize",C,!1),r&&(window.removeEventListener("orientationchange",C),window.addEventListener("orientationchange",C,!1)),u.on("change:controls",Qa),Qa(u,u.get("controls")),u.on("change:state",ea),u.on("change:duration",da,this),u.on("change:flashBlocked",N),N(u,u.get("flashBlocked")),u.mediaController.on(b.JWPLAYER_MEDIA_ERROR,fa),t.onPlaylistComplete(ba),t.onPlaylistItem(ca),u.on("change:castAvailable",E),E(u,u.get("castAvailable")),u.on("change:castActive",D),D(u,u.get("castActive")),u.get("stretching")&&F(u,u.get("stretching")),u.on("change:stretching",F),ea(null,d.IDLE),r||(ra.element().addEventListener("mouseout",aa,!1),ra.element().addEventListener("mousemove",aa,!1)),H(pa),H(ua),u.get("aspectratio")&&(a.addClass(ia,"jw-flag-aspect-mode"),a.style(la,{"padding-top":u.get("aspectratio")})),setTimeout(function(){C(),S(u.get("width"),u.get("height"))},0)}};var Qa=function(b,c){if(c){var d=Ha?oa.get("state"):u.get("state");ea(b,d)}c?a.removeClass(ia,"jw-flag-controls-disabled"):a.addClass(ia,"jw-flag-controls-disabled"),b.getVideo().setControls(c)},Ra=this.fullscreen=function(b){if(a.exists(b)||(b=!u.get("fullscreen")),b=!!b,b!==u.get("fullscreen")){var c=u.getVideo();La?(b?Ca.apply(ia):Da.apply(document),Z(ia,b)):a.isIE()?Z(ia,b):(oa&&oa.getVideo()&&oa.getVideo().setFullscreen(b),c.setFullscreen(b)),c&&0===c.getName().name.indexOf("flash")&&c.setFullscreen(b)}};this.resize=function(a,b){var c=!0;S(a,b,c),C()},this.resizeMedia=W,this.reset=function(){document.contains(ia)&&ia.parentNode.replaceChild(Ba,ia),a.emptyElement(ia)},this.setupInstream=function(b){this.instreamModel=oa=b,oa.on("change:controls",Qa,this),oa.on("change:state",ea,this),Ha=!0,a.addClass(ia,"jw-flag-ads"),aa()},this.setAltText=function(a){pa.setAltText(a)},this.useExternalControls=function(){a.addClass(ia,"jw-flag-ads-hide-controls")},this.destroyInstream=function(){if(Ha=!1,oa&&(oa.off(null,null,this),oa=null),this.setAltText(""),a.removeClass(ia,"jw-flag-ads"),a.removeClass(ia,"jw-flag-ads-hide-controls"),u.getVideo){var b=u.getVideo();b.setContainer(ka)}da(u,u.get("duration")),ra.revertAlternateClickHandlers()},this.addCues=function(a){pa&&pa.addCues(a)},this.clickHandler=function(){return ra},this.controlsContainer=function(){return ja},this.getContainer=this.element=function(){return ia},this.getSafeRegion=function(b){var c={x:0,y:0,width:u.get("containerWidth")||0,height:u.get("containerHeight")||0},d=u.get("dock");return d&&d.length&&u.get("controls")&&(c.y=ta.element().clientHeight,c.height-=c.y),b=b||!a.exists(b),b&&u.get("controls")&&(c.height-=pa.element().clientHeight),c},this.destroy=function(){window.removeEventListener("resize",C),window.removeEventListener("orientationchange",C);for(var b=s.length;b--;)document.removeEventListener(s[b],Y,!1);u.mediaController&&u.mediaController.off("fullscreenchange",Y),ia.removeEventListener("keydown",y,!1),za&&za.destroy(),sa&&(u.off("change:state",sa.statusDelegate),sa.destroy(),sa=null),ja&&(ra.element().removeEventListener("mousemove",aa),ra.element().removeEventListener("mouseout",aa)),Ha&&this.destroyInstream(),a.clearCss("#"+u.get("id"))}};return t}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(117),c(45),c(66),c(47),c(63),c(118)],e=function(a,b,c,d,e,f){var g=b.style,h={linktarget:"_blank",margin:8,hide:!1,position:"top-right"},i=function(i){function j(){n=d.extend({},h,p),n.hide="true"===n.hide.toString(),k()}function k(){if(m=b.createElement(f({file:n.file})),n.file){if(n.hide&&b.addClass(m,"jw-hide"),n.position!==h.position||n.margin!==h.margin){var c=/(\w+)-(\w+)/.exec(n.position),d={top:"auto",right:"auto",bottom:"auto",left:"auto"};3===c.length&&(d[c[1]]=n.margin,d[c[2]]=n.margin,g(m,d))}var e=new a(m);e.on("click tap",l)}}function l(a){b.exists(a)&&a.stopPropagation&&a.stopPropagation(),o.trigger(c.JWPLAYER_LOGO_CLICK,{link:n.link,linktarget:n.linktarget})}var m,n,o=this,p=d.extend({},i.get("logo"));return d.extend(this,e),this.element=function(){return m},this.offset=function(a){g(m,{marginBottom:a})},this.position=function(){return n.position},this.margin=function(){return parseInt(n.margin,10)},j(),this};return i}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(63),c(66),c(47),c(45)],e=function(a,b,c,d){function e(a,b){return/touch/.test(a.type)?(a.originalEvent||a).changedTouches[0]["page"+b]:a["page"+b]}function f(a){var b=a||window.event;return a instanceof MouseEvent?"which"in b?3===b.which:"button"in b?2===b.button:!1:!1}function g(a,b,c){var d;return d=b instanceof MouseEvent||!b.touches&&!b.changedTouches?b:b.touches&&b.touches.length?b.touches[0]:b.changedTouches[0],{type:a,target:b.target,currentTarget:c,pageX:d.pageX,pageY:d.pageY}}function h(a){(a instanceof MouseEvent||a instanceof window.TouchEvent)&&(a.preventManipulation&&a.preventManipulation(),a.cancelable&&a.preventDefault&&a.preventDefault())}var i=!c.isUndefined(window.PointerEvent),j=!i&&d.isMobile(),k=!i&&!j,l=function(a,d){function j(a){(k||i&&"touch"!==a.pointerType)&&p(b.touchEvents.OVER,a)}function l(c){(k||i&&"touch"!==c.pointerType&&!a.contains(document.elementFromPoint(c.x,c.y)))&&p(b.touchEvents.OUT,c)}function m(b){q=b.target,u=e(b,"X"),v=e(b,"Y"),f(b)||(i?b.isPrimary&&(d.preventScrolling&&(r=b.pointerId,a.setPointerCapture(r)),a.addEventListener("pointermove",n),a.addEventListener("pointerup",o),a.addEventListener("pointercancel",o)):k&&(document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)),q.addEventListener("touchmove",n),q.addEventListener("touchend",o),q.addEventListener("touchcancel",o))}function n(a){var c=b.touchEvents,f=6;if(t)p(c.DRAG,a);else{var g=e(a,"X"),i=e(a,"Y"),j=g-u,k=i-v;j*j+k*k>f*f&&(p(c.DRAG_START,a),t=!0,p(c.DRAG,a))}d.preventScrolling&&h(a)}function o(c){var e=b.touchEvents;i?(d.preventScrolling&&a.releasePointerCapture(r),a.removeEventListener("pointermove",n),a.removeEventListener("pointercancel",o),a.removeEventListener("pointerup",o)):k&&(document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",o)),q.removeEventListener("touchmove",n),q.removeEventListener("touchcancel",o),q.removeEventListener("touchend",o),t?p(e.DRAG_END,c):d.directSelect&&c.target!==a||(i&&c instanceof window.PointerEvent?"touch"===c.pointerType?p(e.TAP,c):p(e.CLICK,c):k?p(e.CLICK,c):(p(e.TAP,c),h(c))),q=null,t=!1}function p(a,e){var f;if(d.enableDoubleTap&&(a===b.touchEvents.CLICK||a===b.touchEvents.TAP))if(c.now()-w<x){var h=a===b.touchEvents.CLICK?b.touchEvents.DOUBLE_CLICK:b.touchEvents.DOUBLE_TAP;f=g(h,e,s),y.trigger(h,f),w=0}else w=c.now();f=g(a,e,s),y.trigger(a,f)}var q,r,s=a,t=!1,u=0,v=0,w=0,x=300;d=d||{},i?(a.addEventListener("pointerdown",m),d.useHover&&(a.addEventListener("pointerover",j),a.addEventListener("pointerout",l))):k&&(a.addEventListener("mousedown",m),d.useHover&&(a.addEventListener("mouseover",j),a.addEventListener("mouseout",l))),a.addEventListener("touchstart",m);var y=this;return this.triggerEvent=p,this.destroy=function(){a.removeEventListener("touchstart",m),a.removeEventListener("mousedown",m),q&&(q.removeEventListener("touchmove",n),q.removeEventListener("touchcancel",o),q.removeEventListener("touchend",o)),i&&(d.preventScrolling&&a.releasePointerCapture(r),a.removeEventListener("pointerdown",m),a.removeEventListener("pointermove",n),a.removeEventListener("pointercancel",o),a.removeEventListener("pointerup",o)),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",o)},this};return c.extend(l.prototype,a),l}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(119);a.exports=(d["default"]||d).template({1:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'src="'+h((e=null!=(e=b.file||(null!=a?a.file:a))?e:g,typeof e===f?e.call(a,{name:"file",hash:{},data:d}):e))+'"'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f='<div class="jw-logo jw-reset">\n    <img class="jw-logo-image" ';return e=b["if"].call(a,null!=a?a.file:a,{name:"if",hash:{},fn:this.program(1,d),inverse:this.noop,data:d}),null!=e&&(f+=e),f+">\n</div>"},useData:!0})},function(a,b,c){a.exports=c(120)},function(a,b,c){"use strict";var d=c(121),e=c(123)["default"],f=c(124)["default"],g=c(122),h=c(125),i=function(){var a=new d.HandlebarsEnvironment;return g.extend(a,d),a.SafeString=e,a.Exception=f,a.Utils=g,a.escapeExpression=g.escapeExpression,a.VM=h,a.template=function(b){return h.template(b,a)},a},j=i();j.create=i,j["default"]=j,b["default"]=j},function(a,b,c){"use strict";function d(a,b){this.helpers=a||{},this.partials=b||{},e(this)}function e(a){a.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new g("Missing helper: '"+arguments[arguments.length-1].name+"'")}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse,e=c.fn;if(b===!0)return e(this);if(b===!1||null==b)return d(this);if(k(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):d(this);if(c.data&&c.ids){var g=q(c.data);g.contextPath=f.appendContextPath(c.data.contextPath,c.name),c={data:g}}return e(b,c)}),a.registerHelper("each",function(a,b){if(!b)throw new g("Must pass iterator to #each");var c,d,e=b.fn,h=b.inverse,i=0,j="";if(b.data&&b.ids&&(d=f.appendContextPath(b.data.contextPath,b.ids[0])+"."),l(a)&&(a=a.call(this)),b.data&&(c=q(b.data)),a&&"object"==typeof a)if(k(a))for(var m=a.length;m>i;i++)c&&(c.index=i,c.first=0===i,c.last=i===a.length-1,d&&(c.contextPath=d+i)),j+=e(a[i],{data:c});else for(var n in a)a.hasOwnProperty(n)&&(c&&(c.key=n,c.index=i,c.first=0===i,d&&(c.contextPath=d+n)),j+=e(a[n],{data:c}),i++);return 0===i&&(j=h(this)),j}),a.registerHelper("if",function(a,b){return l(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||f.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){l(a)&&(a=a.call(this));var c=b.fn;if(f.isEmpty(a))return b.inverse(this);if(b.data&&b.ids){var d=q(b.data);d.contextPath=f.appendContextPath(b.data.contextPath,b.ids[0]),b={data:d}}return c(a,b)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)}),a.registerHelper("lookup",function(a,b){return a&&a[b]})}var f=c(122),g=c(124)["default"],h="2.0.0";b.VERSION=h;var i=6;b.COMPILER_REVISION=i;var j={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};b.REVISION_CHANGES=j;var k=f.isArray,l=f.isFunction,m=f.toString,n="[object Object]";b.HandlebarsEnvironment=d,d.prototype={constructor:d,logger:o,log:p,registerHelper:function(a,b){if(m.call(a)===n){if(b)throw new g("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){m.call(a)===n?f.extend(this.partials,a):this.partials[a]=b},unregisterPartial:function(a){delete this.partials[a]}};var o={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(o.level<=a){var c=o.methodMap[a];"undefined"!=typeof console&&console[c]&&console[c].call(console,b)}}};b.logger=o;var p=o.log;b.log=p;var q=function(a){var b=f.extend({},a);return b._parent=a,b};b.createFrame=q},function(a,b,c){"use strict";function d(a){return j[a]}function e(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function f(a){return a instanceof i?a.toString():null==a?"":a?(a=""+a,l.test(a)?a.replace(k,d):a):a+""}function g(a){return a||0===a?o(a)&&0===a.length?!0:!1:!0}function h(a,b){return(a?a+".":"")+b}var i=c(123)["default"],j={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},k=/[&<>"'`]/g,l=/[&<>"'`]/;b.extend=e;var m=Object.prototype.toString;b.toString=m;var n=function(a){return"function"==typeof a};n(/x/)&&(n=function(a){return"function"==typeof a&&"[object Function]"===m.call(a)});var n;b.isFunction=n;var o=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===m.call(a):!1};b.isArray=o,b.escapeExpression=f,b.isEmpty=g,b.appendContextPath=h},function(a,b){"use strict";function c(a){this.string=a}c.prototype.toString=function(){return""+this.string},b["default"]=c},function(a,b){"use strict";function c(a,b){var c;b&&b.firstLine&&(c=b.firstLine,a+=" - "+c+":"+b.firstColumn);for(var e=Error.prototype.constructor.call(this,a),f=0;f<d.length;f++)this[d[f]]=e[d[f]];c&&(this.lineNumber=c,this.column=b.firstColumn)}var d=["description","fileName","lineNumber","message","name","number","stack"];c.prototype=new Error,b["default"]=c},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=l;if(b!==c){if(c>b){var d=m[c],e=m[b];throw new k("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new k("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){if(!b)throw new k("No environment passed to template");if(!a||!a.main)throw new k("Unknown template object: "+typeof a);b.VM.checkRevision(a.compiler);var c=function(c,d,e,f,g,h,i,l,m){g&&(f=j.extend({},f,g));var n=b.VM.invokePartial.call(this,c,e,f,h,i,l,m);if(null==n&&b.compile){var o={helpers:h,partials:i,data:l,depths:m};i[e]=b.compile(c,{data:void 0!==l,compat:a.compat},b),n=i[e](f,o)}if(null!=n){if(d){for(var p=n.split("\n"),q=0,r=p.length;r>q&&(p[q]||q+1!==r);q++)p[q]=d+p[q];n=p.join("\n")}return n}throw new k("The partial "+e+" could not be compiled when running in runtime-only mode")},d={lookup:function(a,b){for(var c=a.length,d=0;c>d;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:j.escapeExpression,invokePartial:c,fn:function(b){return a[b]},programs:[],program:function(a,b,c){var d=this.programs[a],e=this.fn(a);return b||c?d=f(this,a,e,b,c):d||(d=this.programs[a]=f(this,a,e)),d},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=j.extend({},b,a)),c},noop:b.VM.noop,compilerInfo:a.compiler},e=function(b,c){c=c||{};var f=c.data;e._setup(c),!c.partial&&a.useData&&(f=i(b,f));var g;return a.useDepths&&(g=c.depths?[b].concat(c.depths):[b]),a.main.call(d,b,d.helpers,d.partials,f,g)};return e.isTop=!0,e._setup=function(c){c.partial?(d.helpers=c.helpers,d.partials=c.partials):(d.helpers=d.merge(c.helpers,b.helpers),a.usePartial&&(d.partials=d.merge(c.partials,b.partials)))},e._child=function(b,c,e){if(a.useDepths&&!e)throw new k("must pass parent depths");return f(d,b,a[b],c,e)},e}function f(a,b,c,d,e){var f=function(b,f){return f=f||{},c.call(a,b,a.helpers,a.partials,f.data||d,e&&[b].concat(e))};return f.program=b,f.depth=e?e.length:0,f}function g(a,b,c,d,e,f,g){var h={partial:!0,helpers:d,partials:e,data:f,depths:g};if(void 0===a)throw new k("The partial "+b+" could not be found");return a instanceof Function?a(c,h):void 0}function h(){return""}function i(a,b){return b&&"root"in b||(b=b?n(b):{},b.root=a),b}var j=c(122),k=c(124)["default"],l=c(121).COMPILER_REVISION,m=c(121).REVISION_CHANGES,n=c(121).createFrame;b.checkRevision=d,b.template=e,b.program=f,b.invokePartial=g,b.noop=h},function(a,b,c){var d,e;d=[c(45),c(54),c(65),c(47)],e=function(a,b,c,d){var e=b.style,f={back:!0,fontSize:15,fontFamily:"Arial,sans-serif",fontOpacity:100,color:"#FFF",backgroundColor:"#000",backgroundOpacity:100,edgeStyle:null,windowColor:"#FFF",windowOpacity:0},g=function(g){function h(b){b=b||"";var c="jw-captions-window jw-reset";b?(r.innerHTML=b,q.className=c+" jw-captions-window-active"):(q.className=c,a.empty(r))}function i(a){o=a,m&&j(m.data,o)}function j(a,b){if(a&&b){var c=-1;if(!(n>=0&&k(a,b,n))){for(var d=0;d<a.length;d++)if(k(a,b,d)){c=d;break}-1===c?h(""):c!==n&&(n=c,h(a[n].text))}}}function k(a,b,c){var e=b.position;if(a[c].useMPEGTS){if(!b.metadata||!d.isNumber(b.metadata.mpegts))return!1;e=b.metadata.mpegts}return a[c].begin<=e&&(!a[c].end||a[c].end>=e)&&(c===a.length-1||a[c+1].begin>=e)}function l(a,c,d){var e=b.hexToRgba("#000000",d);"dropshadow"===a?c.textShadow="0 2px 1px "+e:"raised"===a?c.textShadow="0 0 5px "+e+", 0 1px 5px "+e+", 0 2px 5px "+e:"depressed"===a?c.textShadow="0 -2px 1px "+e:"uniform"===a&&(c.textShadow="-2px 0 1px "+e+",2px 0 1px "+e+",0 -2px 1px "+e+",0 2px 1px "+e+",-1px 1px 1px "+e+",1px 1px 1px "+e+",1px -1px 1px "+e+",1px 1px 1px "+e)}var m,n,o,p,q,r,s={};p=document.createElement("div"),p.className="jw-captions jw-reset",this.show=function(){p.className="jw-captions jw-captions-enabled jw-reset"},this.hide=function(){p.className="jw-captions jw-reset"},this.populate=function(a){return n=-1,m=a,a?void j(a.data,o):void h("")},this.resize=function(){var a=p.clientWidth,b=Math.pow(a/400,.6);if(b){var c=s.fontSize*b;e(p,{fontSize:Math.round(c)+"px"})}},this.setup=function(a){if(q=document.createElement("div"),r=document.createElement("span"),q.className="jw-captions-window jw-reset",r.className="jw-captions-text jw-reset",s=d.extend({},f,a),a){var c=s.fontOpacity,h=s.windowOpacity,i=s.edgeStyle,j=s.backgroundColor,k={},m={color:b.hexToRgba(s.color,c),fontFamily:s.fontFamily,fontStyle:s.fontStyle,fontWeight:s.fontWeight,textDecoration:s.textDecoration};h&&(k.backgroundColor=b.hexToRgba(s.windowColor,h)),l(i,m,c),s.back?m.backgroundColor=b.hexToRgba(j,s.backgroundOpacity):null===i&&l("uniform",m),e(q,k),e(r,m)}q.appendChild(r),p.appendChild(q),this.populate(g.get("captionsTrack"))},this.element=function(){return p},g.on("change:item",function(){o=null,n=-1,h("")},this),g.on("change:captionsTrack",function(a,b){this.populate(b)},this),g.mediaController.on("seek",function(){n=-1},this),g.mediaController.on("time seek",function(a){i(a)},this),g.mediaController.on("subtitlesTrackData",function(){m&&j(m.data,o)},this),g.on("change:state",function(a,b){switch(b){case c.IDLE:case c.ERROR:case c.COMPLETE:this.hide();break;default:this.show()}},this)};return g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(117),c(66),c(63),c(47)],e=function(a,b,c,d){var e=function(e,f){function g(a){return e.get("flashBlocked")?void 0:j?void j(a):void m.trigger(a.type===b.touchEvents.CLICK?"click":"tap")}function h(){return k?void k():void m.trigger("doubleClick")}var i,j,k;d.extend(this,c),i=f,this.element=function(){return i};var l=new a(i,{enableDoubleTap:!0});l.on("click tap",g),l.on("doubleClick doubleTap",h),this.clickHandler=g;var m=this;this.setAlternateClickHandlers=function(a,b){j=a,k=b||null},this.revertAlternateClickHandlers=function(){j=null,k=null}};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(63),c(117),c(129),c(47)],e=function(a,b,c,d,e){var f=function(f){e.extend(this,b),this.model=f,this.el=a.createElement(d({}));var g=this;this.iconUI=new c(this.el).on("click tap",function(a){g.trigger(a.type)})};return e.extend(f.prototype,{element:function(){return this.el}}),f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(119);a.exports=(d["default"]||d).template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="jw-display-icon-container jw-background-color jw-reset">\n    <div class="jw-icon jw-icon-display jw-button-color jw-reset"></div>\n</div>\n'},useData:!0})},function(a,b,c){var d,e;d=[c(131),c(45),c(47),c(117)],e=function(a,b,c,d){var e=function(a){this.model=a,this.setup(),this.model.on("change:dock",this.render,this)};return c.extend(e.prototype,{setup:function(){var c=this.model.get("dock"),e=this.click.bind(this),f=a(c);this.el=b.createElement(f),new d(this.el).on("click tap",e)},getDockButton:function(a){return b.hasClass(a.target,"jw-dock-button")?a.target:b.hasClass(a.target,"jw-dock-text")?a.target.parentElement.parentElement:a.target.parentElement},click:function(a){var b=this.getDockButton(a),d=b.getAttribute("button"),e=this.model.get("dock"),f=c.findWhere(e,{id:d});f&&f.callback&&f.callback()},render:function(){var c=this.model.get("dock"),d=a(c),e=b.createElement(d);this.el.innerHTML=e.innerHTML},element:function(){return this.el}}),e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(119);a.exports=(d["default"]||d).template({1:function(a,b,c,d){var e,f,g="function",h=b.helperMissing,i=this.escapeExpression,j='    <div class="jw-dock-button jw-background-color jw-reset" button="'+i((f=null!=(f=b.id||(null!=a?a.id:a))?f:h,typeof f===g?f.call(a,{name:"id",hash:{},data:d}):f))+'">\n        <div class="jw-icon jw-dock-image jw-reset" style="background-image: url('+i((f=null!=(f=b.img||(null!=a?a.img:a))?f:h,typeof f===g?f.call(a,{name:"img",hash:{},data:d}):f))+')"></div>\n        <div class="jw-arrow jw-reset"></div>\n';return e=b["if"].call(a,null!=a?a.tooltip:a,{name:"if",hash:{},fn:this.program(2,d),inverse:this.noop,data:d}),null!=e&&(j+=e),j+"    </div>\n"},2:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">'+h((e=null!=(e=b.tooltip||(null!=a?a.tooltip:a))?e:g,typeof e===f?e.call(a,{name:"tooltip",hash:{},data:d}):e))+"</span>\n        </div>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f='<div class="jw-dock jw-reset">\n';return e=b.each.call(a,a,{name:"each",hash:{},fn:this.program(1,d),inverse:this.noop,data:d}),null!=e&&(f+=e),f+"</div>"},useData:!0})},function(a,b,c){var d,e;d=[c(45),c(47),c(63),c(117),c(134),c(133),c(140),c(142),c(144),c(145)],e=function(a,b,c,d,e,f,g,h,i,j){function k(a,b){var c=document.createElement("div");return c.className="jw-icon jw-icon-inline jw-button-color jw-reset "+a,c.style.display="none",b&&new d(c).on("click tap",function(){b()}),{element:function(){return c},toggle:function(a){a?this.show():this.hide()},show:function(){c.style.display=""},hide:function(){c.style.display="none"}}}function l(a){var b=document.createElement("span");return b.className="jw-text jw-reset "+a,b}function m(a){var b=new g(a);return b}function n(a,c){var d=document.createElement("div");return d.className="jw-group jw-controlbar-"+a+"-group jw-reset",b.each(c,function(a){a.element&&(a=a.element()),d.appendChild(a)}),d}function o(b,c){this._api=b,this._model=c,this._isMobile=a.isMobile(),this._compactModeMaxSize=400,this._maxCompactWidth=-1,this.setup()}return b.extend(o.prototype,c,{setup:function(){this.build(),this.initialize()},build:function(){var a,c,d,g,o=new f(this._model,this._api),p=new j("jw-icon-more");this._model.get("visualplaylist")!==!1&&(a=new h("jw-icon-playlist")),this._isMobile||(g=k("jw-icon-volume",this._api.setMute),c=new e("jw-slider-volume","horizontal"),d=new i(this._model,"jw-icon-volume")),this.elements={alt:l("jw-text-alt"),play:k("jw-icon-playback",this._api.play),prev:k("jw-icon-prev",this._api.playlistPrev),next:k("jw-icon-next",this._api.playlistNext),playlist:a,elapsed:l("jw-text-elapsed"),time:o,duration:l("jw-text-duration"),drawer:p,hd:m("jw-icon-hd"),cc:m("jw-icon-cc"),audiotracks:m("jw-icon-audio-tracks"),mute:g,volume:c,volumetooltip:d,cast:k("jw-icon-cast jw-off",this._api.castToggle),fullscreen:k("jw-icon-fullscreen",this._api.setFullscreen)},this.layout={left:[this.elements.play,this.elements.prev,this.elements.playlist,this.elements.next,this.elements.elapsed],center:[this.elements.time,this.elements.alt],right:[this.elements.duration,this.elements.hd,this.elements.cc,this.elements.audiotracks,this.elements.drawer,this.elements.mute,this.elements.cast,this.elements.volume,this.elements.volumetooltip,this.elements.fullscreen],drawer:[this.elements.hd,this.elements.cc,this.elements.audiotracks]},this.menus=b.compact([this.elements.playlist,this.elements.hd,this.elements.cc,this.elements.audiotracks,this.elements.volumetooltip]),this.layout.left=b.compact(this.layout.left),this.layout.center=b.compact(this.layout.center),this.layout.right=b.compact(this.layout.right),this.layout.drawer=b.compact(this.layout.drawer),this.el=document.createElement("div"),this.el.className="jw-controlbar jw-background-color jw-reset",this.elements.left=n("left",this.layout.left),this.elements.center=n("center",this.layout.center),this.elements.right=n("right",this.layout.right),this.el.appendChild(this.elements.left),this.el.appendChild(this.elements.center),this.el.appendChild(this.elements.right)},initialize:function(){this.elements.play.show(),this.elements.fullscreen.show(),this.elements.mute&&this.elements.mute.show(),
this.onVolume(this._model,this._model.get("volume")),this.onPlaylist(this._model,this._model.get("playlist")),this.onPlaylistItem(this._model,this._model.get("playlistItem")),this.onCastAvailable(this._model,this._model.get("castAvailable")),this.onCaptionsList(this._model,this._model.get("captionsList")),this._model.on("change:volume",this.onVolume,this),this._model.on("change:mute",this.onMute,this),this._model.on("change:playlist",this.onPlaylist,this),this._model.on("change:playlistItem",this.onPlaylistItem,this),this._model.on("change:castAvailable",this.onCastAvailable,this),this._model.on("change:duration",this.onDuration,this),this._model.on("change:position",this.onElapsed,this),this._model.on("change:fullscreen",this.onFullscreen,this),this._model.on("change:captionsList",this.onCaptionsList,this),this._model.on("change:captionsIndex",this.onCaptionsIndex,this),this._model.on("change:compactUI",this.onCompactUI,this),this.elements.volume&&this.elements.volume.on("update",function(a){var b=a.percentage;this._api.setVolume(b)},this),this.elements.volumetooltip&&(this.elements.volumetooltip.on("update",function(a){var b=a.percentage;this._api.setVolume(b)},this),this.elements.volumetooltip.on("toggleValue",function(){this._api.setMute()},this)),this.elements.playlist&&this.elements.playlist.on("select",function(a){this._model.once("setItem",function(){this._api.play()},this),this._api.load(a)},this),this.elements.hd.on("select",function(a){this._model.getVideo().setCurrentQuality(a)},this),this.elements.hd.on("toggleValue",function(){this._model.getVideo().setCurrentQuality(0===this._model.getVideo().getCurrentQuality()?1:0)},this),this.elements.cc.on("select",function(a){this._api.setCurrentCaptions(a)},this),this.elements.cc.on("toggleValue",function(){var a=this._model.get("captionsIndex");this._api.setCurrentCaptions(a?0:1)},this),this.elements.audiotracks.on("select",function(a){this._model.getVideo().setCurrentAudioTrack(a)},this),new d(this.elements.duration).on("click tap",function(){"DVR"===a.adaptiveType(this._model.get("duration"))&&this._api.seek(-.1)},this),new d(this.el).on("click tap drag",function(){this.trigger("userAction")},this),this.elements.drawer.on("open-drawer close-drawer",function(b,c){a.toggleClass(this.el,"jw-drawer-expanded",c.isOpen),c.isOpen||this.closeMenus()},this),b.each(this.menus,function(a){a.on("open-tooltip",this.closeMenus,this)},this)},onCaptionsList:function(a,b){var c=a.get("captionsIndex");this.elements.cc.setup(b,c),this.clearCompactMode()},onCaptionsIndex:function(a,b){this.elements.cc.selectItem(b)},onPlaylist:function(a,b){var c=b.length>1;this.elements.next.toggle(c),this.elements.prev.toggle(c),this.elements.playlist&&this.elements.playlist.setup(b,a.get("item"))},onPlaylistItem:function(c){this.elements.time.updateBuffer(0),this.elements.time.render(0),this.elements.duration.innerHTML="00:00",this.elements.elapsed.innerHTML="00:00",this.clearCompactMode();var d=c.get("item");this.elements.playlist&&this.elements.playlist.selectItem(d),this.elements.audiotracks.setup(),this._model.mediaModel.on("change:levels",function(a,b){this.elements.hd.setup(b,a.get("currentLevel")),this.clearCompactMode()},this),this._model.mediaModel.on("change:currentLevel",function(a,b){this.elements.hd.selectItem(b)},this),this._model.mediaModel.on("change:audioTracks",function(a,c){var d=b.map(c,function(a){return{label:a.name}});this.elements.audiotracks.setup(d,a.get("currentAudioTrack"),{toggle:!1}),this.clearCompactMode()},this),this._model.mediaModel.on("change:currentAudioTrack",function(a,b){this.elements.audiotracks.selectItem(b)},this),this._model.mediaModel.on("change:state",function(b,c){"complete"===c&&(this.elements.drawer.closeTooltip(),a.removeClass(this.el,"jw-drawer-expanded"))},this)},onVolume:function(a,b){this.renderVolume(a.get("mute"),b)},onMute:function(a,b){this.renderVolume(b,a.get("volume"))},renderVolume:function(b,c){this.elements.mute&&a.toggleClass(this.elements.mute.element(),"jw-off",b),this.elements.volume&&this.elements.volume.render(b?0:c),this.elements.volumetooltip&&(this.elements.volumetooltip.volumeSlider.render(b?0:c),a.toggleClass(this.elements.volumetooltip.element(),"jw-off",b))},onCastAvailable:function(a,b){this.elements.cast.toggle(b),this.clearCompactMode()},onElapsed:function(b,c){var d,e=b.get("duration");d="DVR"===a.adaptiveType(e)?"-"+a.timeFormat(-e):a.timeFormat(c),this.elements.elapsed.innerHTML=d},onDuration:function(b,c){var d;"DVR"===a.adaptiveType(c)?(d="Live",this.clearCompactMode()):d=a.timeFormat(c),this.elements.duration.innerHTML=d},onFullscreen:function(b,c){a.toggleClass(this.elements.fullscreen.element(),"jw-off",c)},element:function(){return this.el},getVisibleBounds:function(){var b,c=this.el,d=getComputedStyle?getComputedStyle(c):c.currentStyle;return"table"===d.display?a.bounds(c):(c.style.visibility="hidden",c.style.display="table",b=a.bounds(c),c.style.visibility=c.style.display="",b)},setAltText:function(a){this.elements.alt.innerHTML=a},addCues:function(a){this.elements.time&&(b.each(a,function(a){this.elements.time.addCue(a)},this),this.elements.time.drawCues())},closeMenus:function(a){b.each(this.menus,function(b){a&&a.target===b.el||b.closeTooltip(a)})},hideComponents:function(){this.closeMenus(),this.elements.drawer.closeTooltip(),a.removeClass(this.el,"jw-drawer-expanded")},clearCompactMode:function(){this._maxCompactWidth=-1,this._model.set("compactUI",!1)},setCompactModeBounds:function(){if(this.element().offsetWidth>0){var b=this.elements.left.offsetWidth+this.elements.right.offsetWidth;if("LIVE"===a.adaptiveType(this._model.get("duration")))this._maxCompactWidth=b+this.elements.alt.offsetWidth;else{var c=b+(this.elements.center.offsetWidth-this.elements.time.el.offsetWidth),d=.25;this._maxCompactWidth=c/(1-d)}}},checkCompactMode:function(a){-1===this._maxCompactWidth&&this.setCompactModeBounds(),-1!==this._maxCompactWidth&&(this._model.get("compactUI")?a>this._compactModeMaxSize&&a>this._maxCompactWidth&&this._model.set("compactUI",!1):(a<=this._compactModeMaxSize||a<=this._maxCompactWidth)&&this._model.set("compactUI",!0))},onCompactUI:function(c,d){a.removeClass(this.el,"jw-drawer-expanded"),this.elements.drawer.setup(this.layout.drawer,d),(!d||this.elements.drawer.activeContents.length<2)&&b.each(this.layout.drawer,function(a){this.elements.right.insertBefore(a.el,this.elements.drawer.el)},this)}}),o}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(134),c(45),c(137),c(138),c(139)],e=function(a,b,c,d,e,f){var g=d.extend({setup:function(){this.text=document.createElement("span"),this.text.className="jw-text jw-reset",this.img=document.createElement("div"),this.img.className="jw-reset";var a=document.createElement("div");a.className="jw-time-tip jw-background-color jw-reset",a.appendChild(this.img),a.appendChild(this.text),c.removeClass(this.el,"jw-hidden"),this.addContent(a)},image:function(a){c.style(this.img,a)},update:function(a){this.text.innerHTML=a}}),h=b.extend({constructor:function(c,d){this._model=c,this._api=d,this.timeTip=new g("jw-tooltip-time"),this.timeTip.setup(),this.seekThrottled=a.throttle(this.performSeek,400),this._model.on("change:playlistItem",this.onPlaylistItem,this).on("change:position",this.onPosition,this).on("change:buffer",this.onBuffer,this),b.call(this,"jw-slider-time","horizontal")},setup:function(){b.prototype.setup.apply(this,arguments),this.onPlaylistItem(this._model,this._model.get("playlistItem")),this.elementRail.appendChild(this.timeTip.element()),this.elementRail.addEventListener("mousemove",this.showTimeTooltip.bind(this),!1),this.elementRail.addEventListener("mouseout",this.hideTimeTooltip.bind(this),!1)},update:function(c){this.activeCue&&a.isNumber(this.activeCue.pct)?this.seekTo=this.activeCue.pct:this.seekTo=c,this.seekThrottled(),b.prototype.update.apply(this,arguments)},dragStart:function(){this._model.set("scrubbing",!0),b.prototype.dragStart.apply(this,arguments)},dragEnd:function(){b.prototype.dragEnd.apply(this,arguments),this._model.set("scrubbing",!1)},onSeeked:function(){this._model.get("scrubbing")&&this.performSeek()},onBuffer:function(a,b){this.updateBuffer(b)},onPosition:function(a,b){var d=0,e=this._model.get("duration");if(e){var f=c.adaptiveType(e);"DVR"===f?d=(e-b)/e*100:"VOD"===f&&(d=b/e*100)}this.render(d)},onPlaylistItem:function(b,c){this.reset(),b.mediaModel.on("seeked",this.onSeeked,this);var d=c.tracks;a.each(d,function(a){a&&a.kind&&"thumbnails"===a.kind.toLowerCase()?this.loadThumbnails(a.file):a&&a.kind&&"chapters"===a.kind.toLowerCase()&&this.loadChapters(a.file)},this)},performSeek:function(){var a,b=this._model.get("duration"),d=c.adaptiveType(b);"LIVE"===d||0===b?this._api.play():"DVR"===d?(a=(1-this.seekTo/100)*b,this._api.seek(Math.min(a,-.25))):(a=this.seekTo/100*b,this._api.seek(Math.min(a,b-.25)))},showTimeTooltip:function(a){var b=this._model.get("duration");if(!(0>=b)){var d=c.bounds(this.elementRail),e=a.pageX?a.pageX-d.left:a.x;e=c.between(e,0,d.width);var f,g=e/d.width,h=b*g;f=this.activeCue?this.activeCue.text:c.timeFormat(h),this.timeTip.update(f),this.showThumbnail(h),c.addClass(this.timeTip.el,"jw-open"),this.timeTip.el.style.left=100*g+"%"}},hideTimeTooltip:function(){c.removeClass(this.timeTip.el,"jw-open")},reset:function(){this.resetChapters(),this.resetThumbnails()}});return a.extend(h.prototype,e,f),h}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(135),c(117),c(136),c(45)],e=function(a,b,c,d){var e=a.extend({constructor:function(a,b){this.className=a+" jw-background-color jw-reset",this.orientation=b,this.dragStartListener=this.dragStart.bind(this),this.dragMoveListener=this.dragMove.bind(this),this.dragEndListener=this.dragEnd.bind(this),this.tapListener=this.tap.bind(this),this.setup()},setup:function(){var a={"default":this["default"],className:this.className,orientation:"jw-slider-"+this.orientation};this.el=d.createElement(c(a)),this.elementRail=this.el.getElementsByClassName("jw-slider-container")[0],this.elementBuffer=this.el.getElementsByClassName("jw-buffer")[0],this.elementProgress=this.el.getElementsByClassName("jw-progress")[0],this.elementThumb=this.el.getElementsByClassName("jw-knob")[0],this.userInteract=new b(this.element(),{preventScrolling:!0}),this.userInteract.on("dragStart",this.dragStartListener),this.userInteract.on("drag",this.dragMoveListener),this.userInteract.on("dragEnd",this.dragEndListener),this.userInteract.on("tap click",this.tapListener)},dragStart:function(){this.trigger("dragStart"),this.railBounds=d.bounds(this.elementRail)},dragEnd:function(a){this.dragMove(a),this.trigger("dragEnd")},dragMove:function(a){var b,c,e=this.railBounds=this.railBounds?this.railBounds:d.bounds(this.elementRail);return"horizontal"===this.orientation?(b=a.pageX,c=b<e.left?0:b>e.right?100:100*d.between((b-e.left)/e.width,0,1)):(b=a.pageY,c=b>=e.bottom?0:b<=e.top?100:100*d.between((e.height-(b-e.top))/e.height,0,1)),this.render(c),this.update(c),!1},tap:function(a){this.railBounds=d.bounds(this.elementRail),this.dragMove(a)},update:function(a){this.trigger("update",{percentage:a})},render:function(a){a=Math.max(0,Math.min(a,100)),"horizontal"===this.orientation?(this.elementThumb.style.left=a+"%",this.elementProgress.style.width=a+"%"):(this.elementThumb.style.bottom=a+"%",this.elementProgress.style.height=a+"%")},updateBuffer:function(a){this.elementBuffer.style.width=a+"%"},element:function(){return this.el}});return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(63),c(47)],e=function(a,b){function c(){}var d=function(a,c){var d,e=this;d=a&&b.has(a,"constructor")?a.constructor:function(){return e.apply(this,arguments)},b.extend(d,e,c);var f=function(){this.constructor=d};return f.prototype=e.prototype,d.prototype=new f,a&&b.extend(d.prototype,a),d.__super__=e.prototype,d};return c.extend=d,b.extend(c.prototype,a),c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(119);a.exports=(d["default"]||d).template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'<div class="'+h((e=null!=(e=b.className||(null!=a?a.className:a))?e:g,typeof e===f?e.call(a,{name:"className",hash:{},data:d}):e))+" "+h((e=null!=(e=b.orientation||(null!=a?a.orientation:a))?e:g,typeof e===f?e.call(a,{name:"orientation",hash:{},data:d}):e))+' jw-reset">\n    <div class="jw-slider-container jw-reset">\n        <div class="jw-rail jw-reset"></div>\n        <div class="jw-buffer jw-reset"></div>\n        <div class="jw-progress jw-reset"></div>\n        <div class="jw-knob jw-reset"></div>\n    </div>\n</div>'},useData:!0})},function(a,b,c){var d,e;d=[c(135),c(45)],e=function(a,b){var c=a.extend({constructor:function(a){this.el=document.createElement("div"),this.el.className="jw-icon jw-icon-tooltip "+a+" jw-button-color jw-reset jw-hidden",this.container=document.createElement("div"),this.container.className="jw-overlay jw-reset",this.openClass="jw-open",this.componentType="tooltip",this.el.appendChild(this.container)},addContent:function(a){this.content&&this.removeContent(),this.content=a,this.container.appendChild(a)},removeContent:function(){this.content&&(this.container.removeChild(this.content),this.content=null)},hasContent:function(){return!!this.content},element:function(){return this.el},openTooltip:function(a){this.trigger("open-"+this.componentType,a,{isOpen:!0}),this.isOpen=!0,b.toggleClass(this.el,this.openClass,this.isOpen)},closeTooltip:function(a){this.trigger("close-"+this.componentType,a,{isOpen:!1}),this.isOpen=!1,b.toggleClass(this.el,this.openClass,this.isOpen)},toggleOpenState:function(a){this.isOpen?this.closeTooltip(a):this.openTooltip(a)}});return c}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(45),c(111)],e=function(a,b,c){function d(a,b){this.time=a,this.text=b,this.el=document.createElement("div"),this.el.className="jw-cue jw-reset"}a.extend(d.prototype,{align:function(a){"%"===this.time.toString().slice(-1)?this.pct=this.time:this.pct=this.time/a*100,this.el.style.left=this.pct+"%"}});var e={loadChapters:function(a){b.ajax(a,this.chaptersLoaded.bind(this),this.chaptersFailed,!0)},chaptersLoaded:function(b){var d=c(b.responseText);a.isArray(d)&&(a.each(d,this.addCue,this),this.drawCues())},chaptersFailed:function(){},addCue:function(a){this.cues.push(new d(a.begin,a.text))},drawCues:function(){var b=this._model.mediaModel.get("duration");if(!b||0>=b)return void this._model.mediaModel.once("change:duration",this.drawCues,this);var c=this;a.each(this.cues,function(a){a.align(b),a.el.addEventListener("mouseover",function(){c.activeCue=a}),a.el.addEventListener("mouseout",function(){c.activeCue=null}),c.elementRail.appendChild(a.el)})},resetChapters:function(){a.each(this.cues,function(a){a.el.parentNode&&a.el.parentNode.removeChild(a.el)},this),this.cues=[]}};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(45),c(111)],e=function(a,b,c){function d(a){this.begin=a.begin,this.end=a.end,this.img=a.text}var e={loadThumbnails:function(a){a&&(this.vttPath=a.split("?")[0].split("/").slice(0,-1).join("/"),this.individualImage=null,b.ajax(a,this.thumbnailsLoaded.bind(this),this.thumbnailsFailed.bind(this),!0))},thumbnailsLoaded:function(b){var e=c(b.responseText);a.isArray(e)&&(a.each(e,function(a){this.thumbnails.push(new d(a))},this),this.drawCues())},thumbnailsFailed:function(){},chooseThumbnail:function(b){var c=a.sortedIndex(this.thumbnails,{end:b},a.property("end"));c>=this.thumbnails.length&&(c=this.thumbnails.length-1);var d=this.thumbnails[c].img;return d.indexOf("://")<0&&(d=this.vttPath?this.vttPath+"/"+d:d),d},loadThumbnail:function(b){var c=this.chooseThumbnail(b),d={display:"block",margin:"0 auto",backgroundPosition:"0 0"},e=c.indexOf("#xywh");if(e>0)try{var f=/(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(c);c=f[1],d.backgroundPosition=-1*f[2]+"px "+-1*f[3]+"px",d.width=f[4],d.height=f[5]}catch(g){return}else this.individualImage||(this.individualImage=new Image,this.individualImage.onload=a.bind(function(){this.individualImage.onload=null,this.timeTip.image({width:this.individualImage.width,height:this.individualImage.height})},this),this.individualImage.src=c);return d.backgroundImage=c,d},showThumbnail:function(a){this.thumbnails.length<1||this.timeTip.image(this.loadThumbnail(a))},resetThumbnails:function(){this.timeTip.image({backgroundImage:"",width:0,height:0}),this.thumbnails=[]}};return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(137),c(45),c(47),c(117),c(141)],e=function(a,b,c,d,e){var f=a.extend({setup:function(a,f,g){this.iconUI||(this.iconUI=new d(this.el,{useHover:!0,directSelect:!0}),this.toggleValueListener=this.toggleValue.bind(this),this.toggleOpenStateListener=this.toggleOpenState.bind(this),this.openTooltipListener=this.openTooltip.bind(this),this.closeTooltipListener=this.closeTooltip.bind(this),this.selectListener=this.select.bind(this)),this.reset(),a=c.isArray(a)?a:[],b.toggleClass(this.el,"jw-hidden",a.length<2);var h=a.length>2||2===a.length&&g&&g.toggle===!1,i=!h&&2===a.length;if(b.toggleClass(this.el,"jw-toggle",i),b.toggleClass(this.el,"jw-button-color",!i),this.isActive=h||i,h){b.removeClass(this.el,"jw-off"),this.iconUI.on("tap",this.toggleOpenStateListener).on("over",this.openTooltipListener).on("out",this.closeTooltipListener);var j=e(a),k=b.createElement(j);this.addContent(k),this.contentUI=new d(this.content).on("click tap",this.selectListener)}else i&&this.iconUI.on("click tap",this.toggleValueListener);this.selectItem(f)},toggleValue:function(){this.trigger("toggleValue")},select:function(a){if(a.target.parentElement===this.content){var d=b.classList(a.target),e=c.find(d,function(a){return 0===a.indexOf("jw-item")});e&&(this.trigger("select",parseInt(e.split("-")[2])),this.closeTooltipListener())}},selectItem:function(a){if(this.content)for(var c=0;c<this.content.children.length;c++)b.toggleClass(this.content.children[c],"jw-active-option",a===c);else b.toggleClass(this.el,"jw-off",0===a)},reset:function(){b.addClass(this.el,"jw-off"),this.iconUI.off(),this.contentUI&&this.contentUI.off().destroy(),this.removeContent()}});return f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(119);a.exports=(d["default"]||d).template({1:function(a,b,c,d){var e=this.lambda,f=this.escapeExpression;return"        <li class='jw-text jw-option jw-item-"+f(e(d&&d.index,a))+" jw-reset'>"+f(e(null!=a?a.label:a,a))+"</li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f='<ul class="jw-menu jw-background-color jw-reset">\n';return e=b.each.call(a,a,{name:"each",hash:{},fn:this.program(1,d),inverse:this.noop,data:d}),null!=e&&(f+=e),f+"</ul>"},useData:!0})},function(a,b,c){var d,e;d=[c(45),c(47),c(137),c(117),c(143)],e=function(a,b,c,d,e){var f=c.extend({setup:function(c,e){if(this.iconUI||(this.iconUI=new d(this.el,{useHover:!0}),this.toggleOpenStateListener=this.toggleOpenState.bind(this),this.openTooltipListener=this.openTooltip.bind(this),this.closeTooltipListener=this.closeTooltip.bind(this),this.selectListener=this.onSelect.bind(this)),this.reset(),c=b.isArray(c)?c:[],a.toggleClass(this.el,"jw-hidden",c.length<2),c.length>=2){this.iconUI=new d(this.el,{useHover:!0}).on("tap",this.toggleOpenStateListener).on("over",this.openTooltipListener).on("out",this.closeTooltipListener);var f=this.menuTemplate(c,e),g=a.createElement(f);this.addContent(g),this.contentUI=new d(this.content),this.contentUI.on("click tap",this.selectListener)}this.originalList=c},menuTemplate:function(a,c){var d=b.map(a,function(a,b){return{active:b===c,label:b+1+".",title:a.title}});return e(d)},onSelect:function(c){var d=c.target;if("UL"!==d.tagName){"LI"!==d.tagName&&(d=d.parentElement);var e=a.classList(d),f=b.find(e,function(a){return 0===a.indexOf("jw-item")});f&&(this.trigger("select",parseInt(f.split("-")[2])),this.closeTooltip())}},selectItem:function(a){this.setup(this.originalList,a)},reset:function(){this.iconUI.off(),this.contentUI&&this.contentUI.off().destroy(),this.removeContent()}});return f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(119);a.exports=(d["default"]||d).template({1:function(a,b,c,d){var e,f="";return e=b["if"].call(a,null!=a?a.active:a,{name:"if",hash:{},fn:this.program(2,d),inverse:this.program(4,d),data:d}),null!=e&&(f+=e),f},2:function(a,b,c,d){var e=this.lambda,f=this.escapeExpression;return"                <li class='jw-option jw-text jw-active-option jw-item-"+f(e(d&&d.index,a))+' jw-reset\'>\n                    <span class="jw-label jw-reset"><span class="jw-icon jw-icon-play jw-reset"></span></span>\n                    <span class="jw-name jw-reset">'+f(e(null!=a?a.title:a,a))+"</span>\n                </li>\n"},4:function(a,b,c,d){var e=this.lambda,f=this.escapeExpression;return"                <li class='jw-option jw-text jw-item-"+f(e(d&&d.index,a))+' jw-reset\'>\n                    <span class="jw-label jw-reset">'+f(e(null!=a?a.label:a,a))+'</span>\n                    <span class="jw-name jw-reset">'+f(e(null!=a?a.title:a,a))+"</span>\n                </li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f='<div class="jw-menu jw-playlist-container jw-background-color jw-reset">\n\n    <div class="jw-tooltip-title jw-reset">\n        <span class="jw-icon jw-icon-inline jw-icon-playlist jw-reset"></span>\n        <span class="jw-text jw-reset">PLAYLIST</span>\n    </div>\n\n    <ul class="jw-playlist jw-reset">\n';return e=b.each.call(a,a,{name:"each",hash:{},fn:this.program(1,d),inverse:this.noop,data:d}),null!=e&&(f+=e),f+"    </ul>\n</div>"},useData:!0})},function(a,b,c){var d,e;d=[c(137),c(134),c(117),c(45)],e=function(a,b,c,d){var e=a.extend({constructor:function(e,f){this._model=e,a.call(this,f),this.volumeSlider=new b("jw-slider-volume jw-volume-tip","vertical"),this.addContent(this.volumeSlider.element()),this.volumeSlider.on("update",function(a){this.trigger("update",a)},this),d.removeClass(this.el,"jw-hidden"),new c(this.el,{useHover:!0,directSelect:!0}).on("click",this.toggleValue,this).on("tap",this.toggleOpenState,this).on("over",this.openTooltip,this).on("out",this.closeTooltip,this),this._model.on("change:volume",this.onVolume,this)},toggleValue:function(){this.trigger("toggleValue")}});return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(137),c(45),c(47),c(117)],e=function(a,b,c,d){var e=a.extend({constructor:function(b){a.call(this,b),this.container.className="jw-overlay-horizontal jw-reset",this.openClass="jw-open-drawer",this.componentType="drawer"},setup:function(a,e){this.iconUI||(this.iconUI=new d(this.el,{useHover:!0,directSelect:!0}),this.toggleOpenStateListener=this.toggleOpenState.bind(this),this.openTooltipListener=this.openTooltip.bind(this),this.closeTooltipListener=this.closeTooltip.bind(this)),this.reset(),a=c.isArray(a)?a:[],this.activeContents=c.filter(a,function(a){return a.isActive}),b.toggleClass(this.el,"jw-hidden",!e||this.activeContents.length<2),e&&this.activeContents.length>1&&(b.removeClass(this.el,"jw-off"),this.iconUI.on("tap",this.toggleOpenStateListener).on("over",this.openTooltipListener).on("out",this.closeTooltipListener),c.each(a,function(a){this.container.appendChild(a.el)},this))},reset:function(){b.addClass(this.el,"jw-off"),this.iconUI.off(),this.contentUI&&this.contentUI.off().destroy(),this.removeContent()}});return e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47)],e=function(a){var b=function(a){this.model=a,this.model.on("change:playlistItem",this.loadImage,this)};return a.extend(b.prototype,{setup:function(a){this.el=a,this.loadImage(this.model,this.model.get("playlistItem"))},loadImage:function(b,c){var d=c.image;a.isString(d)?(d=encodeURI(d),this.el.style.backgroundImage='url("'+d+'")'):this.el.style.backgroundImage=""},element:function(){return this.el}}),b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(71),c(148),c(47),c(58)],e=function(a,b,c,d){function e(a){return a.charAt(0).toUpperCase()+a.slice(1)}function f(a){return"pro"===a?"p":"premium"===a?"r":"enterprise"===a?"e":"ads"===a?"a":"f"}var g=function(){};return c.extend(g.prototype,b.prototype,{buildArray:function(){var c=b.prototype.buildArray.apply(this,arguments),g=this.model.get("edition"),h=d.split("+")[0],i="//jwplayer.com/learn-more/?m=h&e="+f(g)+"&v="+d;c.items[0].link=i,c.items[0].title="About JW Player "+e(g)+" "+h;var j=a(g);if(!j("custom-rightclick"))return c;if(this.model.get("abouttext")){var k={title:this.model.get("abouttext"),link:this.model.get("aboutlink")||i};c.items.splice(1,0,k)}return c}}),g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(45),c(149),c(47),c(58)],e=function(a,b,c,d){var e=function(){};return c.extend(e.prototype,{buildArray:function(){var b=d.split("+"),c=b[0],e={items:[{title:"About JW Player "+c,featured:!0,link:"//jwplayer.com/learn-more/?m=h&e=o&v="+d}]},f=c.indexOf("-")>0,g=b[1];if(f&&g){var h=g.split(".");e.items.push({title:"build: ("+h[0]+"."+h[1]+")",link:"#"})}var i=this.model.get("provider").name;if(i.indexOf("flash")>=0){var j="Flash Version "+a.flashVersion();e.items.push({title:j,link:"http://www.adobe.com/software/flash/about/"})}return e},buildMenu:function(){var c=this.buildArray();return a.createElement(b(c))},updateHtml:function(){this.el.innerHTML=this.buildMenu().innerHTML},rightClick:function(a){return this.lazySetup(),this.mouseOverContext?!1:(this.hideMenu(),this.showMenu(a),!1)},getOffset:function(a){for(var b=a.target,c=a.offsetX||a.layerX,d=a.offsetY||a.layerY;b!==this.playerElement;)c+=b.offsetLeft,d+=b.offsetTop,b=b.parentNode;return{x:c,y:d}},showMenu:function(b){var c=this.getOffset(b);return this.el.style.left=c.x+"px",this.el.style.top=c.y+"px",a.addClass(this.playerElement,"jw-flag-rightclick-open"),a.addClass(this.el,"jw-open"),!1},hideMenu:function(){this.mouseOverContext||(a.removeClass(this.playerElement,"jw-flag-rightclick-open"),a.removeClass(this.el,"jw-open"))},lazySetup:function(){this.el||(this.el=this.buildMenu(),this.layer.appendChild(this.el),this.hideMenuCallback=this.hideMenu.bind(this),this.playerElement.onclick=this.hideMenuCallback,document.addEventListener("mousedown",this.hideMenuCallback,!1),this.model.on("change:provider",this.updateHtml,this),this.el.onmouseover=function(){this.mouseOverContext=!0}.bind(this),this.el.onmouseout=function(){this.mouseOverContext=!1}.bind(this))},setup:function(a,b,c){this.playerElement=b,this.model=a,this.mouseOverContext=!1,this.layer=c,b.oncontextmenu=this.rightClick.bind(this)},destroy:function(){this.el&&this.hideMenu(),this.playerElement&&(this.playerElement.oncontextmenu=null),this.model&&(this.model.off("change:provider",this.updateHtml),this.model=null)}}),e}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(119);a.exports=(d["default"]||d).template({1:function(a,b,c,d){var e,f,g="function",h=b.helperMissing,i=this.escapeExpression,j='        <li class="jw-reset';return e=b["if"].call(a,null!=a?a.featured:a,{name:"if",hash:{},fn:this.program(2,d),inverse:this.noop,data:d}),null!=e&&(j+=e),j+='">\n            <a href="'+i((f=null!=(f=b.link||(null!=a?a.link:a))?f:h,typeof f===g?f.call(a,{name:"link",hash:{},data:d}):f))+'" class="jw-reset" target="_top">\n',e=b["if"].call(a,null!=a?a.featured:a,{name:"if",hash:{},fn:this.program(4,d),inverse:this.noop,data:d}),null!=e&&(j+=e),j+"                "+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:h,typeof f===g?f.call(a,{name:"title",hash:{},data:d}):f))+"\n            </a>\n        </li>\n"},2:function(a,b,c,d){return" jw-featured"},4:function(a,b,c,d){return'                <span class="jw-icon jw-rightclick-logo jw-reset"></span>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f='<div class="jw-rightclick jw-reset">\n    <ul class="jw-reset">\n';return e=b.each.call(a,null!=a?a.items:a,{name:"each",hash:{},fn:this.program(1,d),inverse:this.noop,data:d}),null!=e&&(f+=e),f+"    </ul>\n</div>"},useData:!0})},function(a,b,c){var d,e;d=[c(47)],e=function(a){var b=function(a){this.model=a};return a.extend(b.prototype,{hide:function(){this.el.style.display="none"},show:function(){this.el.style.display=""},setup:function(a){this.el=a;var b=this.el.getElementsByTagName("div");this.title=b[0],this.description=b[1],this.model.on("change:playlistItem",this.playlistItem,this),this.playlistItem(this.model,this.model.get("playlistItem"))},playlistItem:function(a,b){a.get("displaytitle")||a.get("displaydescription")?this.updateText(a,b):this.hide()},updateText:function(a,b){this.title.innerHTML=b.title&&a.get("displaytitle")?b.title:"",this.description.innerHTML=b.description&&a.get("displaydescription")?b.description:"",this.title.firstChild||this.description.firstChild?this.show():this.hide()},element:function(){return this.el}}),b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(119);a.exports=(d["default"]||d).template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'<div id="'+h((e=null!=(e=b.id||(null!=a?a.id:a))?e:g,typeof e===f?e.call(a,{name:"id",hash:{},data:d}):e))+'" class="jwplayer jw-reset" tabindex="0">\n    <div class="jw-aspect jw-reset"></div>\n    <div class="jw-media jw-reset"></div>\n    <div class="jw-preview jw-reset"></div>\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset"></div>\n        <div class="jw-title-secondary jw-reset"></div>\n    </div>\n    <div class="jw-overlays jw-reset"></div>\n    <div class="jw-controls jw-reset"></div>\n</div>'},useData:!0})},function(a,b,c){var d,e;d=[c(45),c(66),c(117),c(63),c(47),c(153)],e=function(a,b,c,d,e,f){var g=function(a){this.model=a,this.setup()};return e.extend(g.prototype,d,{setup:function(){this.destroy(),this.skipMessage=this.model.get("skipText"),this.skipMessageCountdown=this.model.get("skipMessage"),this.setWaitTime(this.model.get("skipOffset"));var b=f();this.el=a.createElement(b),this.skiptext=this.el.getElementsByClassName("jw-skiptext")[0],this.skipAdOnce=e.once(this.skipAd.bind(this)),new c(this.el).on("click tap",e.bind(function(){this.skippable&&this.skipAdOnce()},this)),this.model.on("change:duration",this.onChangeDuration,this),this.model.on("change:position",this.onChangePosition,this),this.onChangeDuration(this.model,this.model.get("duration")),this.onChangePosition(this.model,this.model.get("position"))},updateMessage:function(a){this.skiptext.innerHTML=a},updateCountdown:function(a){this.updateMessage(this.skipMessageCountdown.replace(/xx/gi,Math.ceil(this.waitTime-a)))},onChangeDuration:function(b,c){if(c){if(this.waitPercentage){if(!c)return;this.itemDuration=c,this.setWaitTime(this.waitPercentage),delete this.waitPercentage}a.removeClass(this.el,"jw-hidden")}},onChangePosition:function(b,c){this.waitTime-c>0?this.updateCountdown(c):(this.updateMessage(this.skipMessage),this.skippable=!0,a.addClass(this.el,"jw-skippable"))},element:function(){return this.el},setWaitTime:function(b){if(e.isString(b)&&"%"===b.slice(-1)){var c=parseFloat(b);return void(this.itemDuration&&!isNaN(c)?this.waitTime=this.itemDuration*c/100:this.waitPercentage=b)}e.isNumber(b)?this.waitTime=b:"string"===a.typeOf(b)?this.waitTime=a.seconds(b):isNaN(Number(b))?this.waitTime=0:this.waitTime=Number(b)},skipAd:function(){this.trigger(b.JWPLAYER_AD_SKIPPED)},destroy:function(){this.el&&(this.el.removeEventListener("click",this.skipAdOnce),this.el.parentElement&&this.el.parentElement.removeChild(this.el)),delete this.skippable,delete this.itemDuration,delete this.waitPercentage}}),g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(119);a.exports=(d["default"]||d).template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="jw-skip jw-background-color jw-hidden jw-reset">\n    <span class="jw-text jw-skiptext jw-reset"></span>\n    <span class="jw-icon-inline jw-skip-icon jw-reset"></span>\n</div>';
},useData:!0})},function(a,b,c){var d,e;d=[c(155)],e=function(a){function b(b,c,d,e){return a({id:b,skin:c,title:d,body:e})}return b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(119);a.exports=(d["default"]||d).template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'<div id="'+h((e=null!=(e=b.id||(null!=a?a.id:a))?e:g,typeof e===f?e.call(a,{name:"id",hash:{},data:d}):e))+'"class="jw-skin-'+h((e=null!=(e=b.skin||(null!=a?a.skin:a))?e:g,typeof e===f?e.call(a,{name:"skin",hash:{},data:d}):e))+' jw-error jw-reset">\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset">'+h((e=null!=(e=b.title||(null!=a?a.title:a))?e:g,typeof e===f?e.call(a,{name:"title",hash:{},data:d}):e))+'</div>\n        <div class="jw-title-secondary jw-reset">'+h((e=null!=(e=b.body||(null!=a?a.body:a))?e:g,typeof e===f?e.call(a,{name:"body",hash:{},data:d}):e))+'</div>\n    </div>\n\n    <div class="jw-icon-container jw-reset">\n        <div class="jw-display-icon-container jw-background-color jw-reset">\n            <div class="jw-icon jw-icon-display jw-reset"></div>\n        </div>\n    </div>\n</div>\n'},useData:!0})},,,,function(a,b,c){var d,e;d=[],e=function(){var a=window.chrome,b={};return b.NS="urn:x-cast:com.longtailvideo.jwplayer",b.debug=!1,b.availability=null,b.available=function(c){c=c||b.availability;var d="available";return a&&a.cast&&a.cast.ReceiverAvailability&&(d=a.cast.ReceiverAvailability.AVAILABLE),c===d},b.log=function(){if(b.debug){var a=Array.prototype.slice.call(arguments,0);console.log.apply(console,a)}},b.error=function(){var a=Array.prototype.slice.call(arguments,0);console.error.apply(console,a)},b}.apply(b,d),!(void 0!==e&&(a.exports=e))},,,function(a,b,c){var d,e;d=[c(93),c(47)],e=function(a,b){return function(c,d){var e=["seek","skipAd","stop","playlistNext","playlistPrev","playlistItem","resize","addButton","removeButton","registerPlugin","attachMedia"];b.each(e,function(a){c[a]=function(){return d[a].apply(d,arguments),c}}),c.registerPlugin=a.registerPlugin}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47)],e=function(a){return function(b,c){var d=["buffer","controls","position","duration","fullscreen","volume","mute","item","stretching","playlist"];a.each(d,function(a){var d=a.slice(0,1).toUpperCase()+a.slice(1);b["get"+d]=function(){return c._model.get(a)}});var e=["getAudioTracks","getCaptionsList","getWidth","getHeight","getCurrentAudioTrack","setCurrentAudioTrack","getCurrentCaptions","setCurrentCaptions","getCurrentQuality","setCurrentQuality","getQualityLevels","getVisualQuality","getConfig","getState","getSafeRegion","isBeforeComplete","isBeforePlay","getProvider","detachMedia"],f=["setControls","setFullscreen","setVolume","setMute","setCues"];a.each(e,function(a){b[a]=function(){return c[a]?c[a].apply(c,arguments):null}}),a.each(f,function(a){b[a]=function(){return c[a].apply(c,arguments),b}})}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(47),c(66)],e=function(a,b){return function(c){var d={onBufferChange:b.JWPLAYER_MEDIA_BUFFER,onBufferFull:b.JWPLAYER_MEDIA_BUFFER_FULL,onError:b.JWPLAYER_ERROR,onSetupError:b.JWPLAYER_SETUP_ERROR,onFullscreen:b.JWPLAYER_FULLSCREEN,onMeta:b.JWPLAYER_MEDIA_META,onMute:b.JWPLAYER_MEDIA_MUTE,onPlaylist:b.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:b.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:b.JWPLAYER_PLAYLIST_COMPLETE,onReady:b.JWPLAYER_READY,onResize:b.JWPLAYER_RESIZE,onComplete:b.JWPLAYER_MEDIA_COMPLETE,onSeek:b.JWPLAYER_MEDIA_SEEK,onTime:b.JWPLAYER_MEDIA_TIME,onVolume:b.JWPLAYER_MEDIA_VOLUME,onBeforePlay:b.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:b.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:b.JWPLAYER_DISPLAY_CLICK,onControls:b.JWPLAYER_CONTROLS,onQualityLevels:b.JWPLAYER_MEDIA_LEVELS,onQualityChange:b.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:b.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:b.JWPLAYER_CAPTIONS_CHANGED,onAdError:b.JWPLAYER_AD_ERROR,onAdClick:b.JWPLAYER_AD_CLICK,onAdImpression:b.JWPLAYER_AD_IMPRESSION,onAdTime:b.JWPLAYER_AD_TIME,onAdComplete:b.JWPLAYER_AD_COMPLETE,onAdCompanions:b.JWPLAYER_AD_COMPANIONS,onAdSkipped:b.JWPLAYER_AD_SKIPPED,onAdPlay:b.JWPLAYER_AD_PLAY,onAdPause:b.JWPLAYER_AD_PAUSE,onAdMeta:b.JWPLAYER_AD_META,onCast:b.JWPLAYER_CAST_SESSION,onAudioTrackChange:b.JWPLAYER_AUDIO_TRACK_CHANGED,onAudioTracks:b.JWPLAYER_AUDIO_TRACKS},e={onBuffer:"buffer",onPause:"pause",onPlay:"play",onIdle:"idle"};a.each(e,function(b,d){c[d]=a.partial(c.on,b,a)}),a.each(d,function(b,d){c[d]=a.partial(c.on,b,a)})}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d=c(166);"string"==typeof d&&(d=[[a.id,d,""]]);c(170)(d,{});d.locals&&(a.exports=d.locals)},function(a,b,c){b=a.exports=c(167)(),b.push([a.id,".jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:'jw-icons';src:url("+c(168)+") format('woff'),url("+c(169)+') format(\'truetype\');font-weight:normal;font-style:normal}.jw-icon-inline,.jw-icon-tooltip,.jw-icon-display,.jw-controlbar .jw-menu .jw-option:before{font-family:\'jw-icons\';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-icon-audio-tracks:before{content:"\\e600"}.jw-icon-buffer:before{content:"\\e601"}.jw-icon-cast:before{content:"\\e603"}.jw-icon-cast.jw-off:before{content:"\\e602"}.jw-icon-cc:before{content:"\\e605"}.jw-icon-cue:before{content:"\\e606"}.jw-icon-menu-bullet:before{content:"\\e606"}.jw-icon-error:before{content:"\\e607"}.jw-icon-fullscreen:before{content:"\\e608"}.jw-icon-fullscreen.jw-off:before{content:"\\e613"}.jw-icon-hd:before{content:"\\e60a"}.jw-rightclick-logo:before{content:"\\e60b"}.jw-icon-next:before{content:"\\e60c"}.jw-icon-pause:before{content:"\\e60d"}.jw-icon-play:before{content:"\\e60e"}.jw-icon-prev:before{content:"\\e60f"}.jw-icon-replay:before{content:"\\e610"}.jw-icon-volume:before{content:"\\e612"}.jw-icon-volume.jw-off:before{content:"\\e611"}.jw-icon-more:before{content:"\\e614"}.jw-icon-close:before{content:"\\e615"}.jw-icon-playlist:before{content:"\\e616"}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto !important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer:focus,.jwplayer .jw-swf{outline:none}.jwplayer:hover .jw-display-icon-container{background-color:#333;background:#333;background-size:#333}.jw-media,.jw-preview,.jw-overlays,.jw-controls{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-media.jw-media-show{visibility:visible;opacity:1}.jw-media video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jw-media video::-webkit-media-controls-start-playback-button{display:none}.jw-controls.jw-controls-disabled{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:normal;color:white;text-align:center;font-variant:normal;font-stretch:normal}.jw-plugin{position:absolute}.jw-cast-screen{width:100%;height:100%}.jw-instream{position:absolute;top:0;right:0;bottom:0;left:0;display:none}.jw-icon-playback:before{content:"\\e60e"}.jw-tab-focus:focus{outline:solid 2px #0b7ef4}.jw-preview,.jw-captions,.jw-title,.jw-overlays,.jw-controls{pointer-events:none}.jw-overlays>div,.jw-media,.jw-controlbar,.jw-dock,.jw-logo,.jw-skip,.jw-display-icon-container{pointer-events:all}.jw-click{position:absolute;width:100%;height:100%}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jwplayer .jw-preview,.jw-error .jw-preview,.jw-stretch-uniform .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display-icon-container{position:relative;top:50%;display:table;height:3.5em;width:3.5em;margin:-1.75em auto 0;cursor:pointer}.jw-display-icon-container .jw-icon-display{position:relative;display:table-cell;text-align:center;vertical-align:middle !important;background-position:50% 50%;background-repeat:no-repeat;font-size:2em}.jw-flag-audio-player .jw-display-icon-container,.jw-flag-dragging .jw-display-icon-container{display:none}.jw-icon{font-family:\'jw-icons\';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-controlbar{display:table;position:absolute;right:0;left:0;bottom:0;height:2em;padding:0 .25em}.jw-controlbar .jw-hidden{display:none}.jw-controlbar.jw-drawer-expanded .jw-controlbar-left-group,.jw-controlbar.jw-drawer-expanded .jw-controlbar-center-group{opacity:0}.jw-background-color{background-color:#414040}.jw-group{display:table-cell}.jw-controlbar-center-group{width:100%;padding:0 .25em}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-knob:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-icon-display:hover,.jw-option:before:hover{color:#eee}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-elapsed,.jw-text-duration{display:inline-block;height:2em;position:relative;line-height:2em;vertical-align:middle;cursor:pointer}.jw-icon-inline,.jw-icon-tooltip{min-width:1.25em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em}.jw-icon-inline:after,.jw-icon-tooltip:after{width:100%;height:100%;font-size:1em}.jw-icon-cast{display:none}.jw-slider-volume.jw-slider-horizontal,.jw-icon-inline.jw-icon-volume{display:none}.jw-dock{margin:.75em;display:block;opacity:1;clear:right}.jw-dock:after{content:\'\';clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;position:relative;width:2.5em;height:2.5em;margin:.5em}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-0.2em;width:.5em;height:.2em;left:50%;margin-left:-0.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-overlay,.jw-dock-button:hover .jw-arrow{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top, #000 0, #000 18%, rgba(0,0,0,0) 100%);background:linear-gradient(to bottom, #000 0, #000 18%, rgba(0,0,0,0) 100%)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:75%;color:white;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.jw-title-primary{font-weight:bold}.jw-title-secondary{margin-top:-0.5em}.jw-slider-container{display:inline-block;height:1em;position:relative;-ms-touch-action:none;touch-action:none}.jw-rail,.jw-buffer,.jw-progress{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:#aaa}.jw-buffer{background-color:#202020}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{background-color:#fff;width:.1em;height:.4em}.jw-knob{background-color:#aaa;width:.4em;height:.4em}.jw-slider-horizontal{width:4em;height:1em}.jw-slider-horizontal.jw-slider-volume{margin-right:5px}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress{width:100%;height:.4em}.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-buffer{width:0}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-slider-container{width:100%}.jw-slider-horizontal .jw-knob{left:0;margin-left:-0.325em}.jw-slider-vertical{width:.75em;height:4em;bottom:0;position:absolute;padding:1em}.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress{bottom:0;height:100%}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-buffer{height:0}.jw-slider-vertical .jw-slider-container,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-progress{bottom:0;width:.75em;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-slider-container{height:4em;position:relative}.jw-slider-vertical .jw-knob{bottom:0;left:0;right:0;margin:0 auto}.jw-slider-time{right:0;left:0;width:100%}.jw-tooltip-time{position:absolute}.jw-slider-volume .jw-buffer{display:none}.jw-captions{position:absolute;display:none;margin:0 auto;width:100%;left:0;bottom:1.75em;right:0;max-width:90%;text-align:center}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{display:inline-block;color:white;background-color:black;word-wrap:break-word;white-space:pre-line;font-style:normal;font-weight:normal;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jw-rightclick{display:none}.jw-rightclick.jw-open{display:block}.jw-rightclick{position:absolute;white-space:nowrap}.jw-rightclick ul{list-style:none;font-weight:bold;border-radius:.15em;margin:0;border:1px solid #d9dde6;padding-left:0}.jw-rightclick .jw-rightclick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #d9dde6}.jw-rightclick a{color:#000;text-decoration:none;padding:1em;display:block;font-size:.6875em}.jw-rightclick li{background-color:#f2f3f6;border-bottom:1px solid #d9dde6}.jw-rightclick li:last-child{border-bottom:none}.jw-rightclick li:hover a,.jw-rightclick li.jw-featured:hover{background-color:#e4e6ed;cursor:pointer;color:#ff0046}.jw-rightclick li.jw-featured{background-color:#fff;vertical-align:middle}.jw-rightclick li.jw-featured a{color:#aab4c8}.jw-logo{float:right;padding:.75em;cursor:pointer;pointer-events:all}.jw-logo .jw-flag-audio-player{display:none}.jw-watermark{position:relative;top:45%;height:100%;width:100%;text-align:center;font-size:14em;color:#eee;opacity:.33;pointer-events:none}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-icon-tooltip.jw-hidden{display:none}.jw-overlay-horizontal{display:none}.jw-icon-tooltip.jw-open-drawer:before{display:none}.jw-icon-tooltip.jw-open-drawer .jw-overlay-horizontal{opacity:1;display:inline-block;vertical-align:top}.jw-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:rgba(0,0,0,0);content:" "}.jw-time-tip,.jw-volume-tip,.jw-menu{position:relative;left:-50%;border:solid 1px #000;margin:0}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;color:#aaa;bottom:1em;border:solid 4px #000}.jw-time-tip .jw-text{line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;color:#aaa;padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:hover,.jw-controlbar .jw-option:before:hover{color:#eee}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-playlist-container ::-webkit-scrollbar-track{background-color:#333;border-radius:10px}.jw-playlist-container ::-webkit-scrollbar{width:5px;border:10px solid black;border-bottom:0;border-top:0}.jw-playlist-container ::-webkit-scrollbar-thumb{background-color:white;border-radius:5px}.jw-tooltip-title{border-bottom:1px solid #444;text-align:left;padding-left:.7em}.jw-playlist{max-height:11em;min-height:4.5em;overflow-x:hidden;overflow-y:scroll;width:calc(100% - 4px)}.jw-playlist .jw-option{height:3em;margin-right:5px;color:white;padding-left:1em;font-size:.8em}.jw-playlist .jw-label,.jw-playlist .jw-name{display:inline-block;line-height:3em;text-align:left;overflow:hidden;white-space:nowrap}.jw-playlist .jw-label{width:1em}.jw-playlist .jw-name{width:11em}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em}.jw-skip.jw-skippable{cursor:pointer}.jw-skip.jw-hidden{visibility:hidden}.jw-skip .jw-skip-icon{display:none;margin-left:-0.75em}.jw-skip .jw-skip-icon:before{content:"\\e60c"}.jw-skip .jw-text,.jw-skip .jw-skip-icon{color:#aaa;vertical-align:middle;line-height:1.5em;font-size:.7em}.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip.jw-skippable:hover .jw-text,.jw-skip.jw-skippable:hover .jw-skip-icon{color:#eee}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jwplayer.jw-state-playing.jw-flag-casting .jw-display-icon-container,.jwplayer.jw-state-paused.jw-flag-casting .jw-display-icon-container{display:table}.jwplayer.jw-flag-casting .jw-display-icon-container{border-radius:0;top:8em;padding:2em 5em;border:1px solid white}.jwplayer.jw-flag-casting .jw-display-icon-container .jw-icon{font-size:3em}.jw-cast{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:auto;background-position:50% 50%}.jw-cast-label{position:absolute;left:10px;right:10px;bottom:50%;margin-bottom:100px;text-align:center}.jw-cast-name{color:#ccc}.jwplayer.jw-state-idle .jw-preview{display:block}.jwplayer.jw-state-idle .jw-icon-display:before{content:"\\e60e"}.jwplayer.jw-state-idle .jw-controlbar{display:none}.jwplayer.jw-state-idle .jw-captions{display:none}.jwplayer.jw-state-idle .jw-title{display:block}.jwplayer.jw-state-playing .jw-display-icon-container{display:none}.jwplayer.jw-state-playing .jw-display-icon-container .jw-icon-display:before{content:"\\e60d"}.jwplayer.jw-state-playing .jw-icon-playback:before{content:"\\e60d"}.jwplayer.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-state-paused .jw-display-icon-container .jw-icon-display:before{content:"\\e60e"}.jwplayer.jw-state-paused .jw-icon-playback:before{content:"\\e60e"}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display:before{content:"\\e601"}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg)}}@keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-buffering .jw-icon-playback:before{content:"\\e60d"}.jwplayer.jw-state-complete .jw-preview{display:block}.jwplayer.jw-state-complete .jw-display-icon-container .jw-icon-display:before{content:"\\e610"}.jwplayer.jw-state-complete .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-complete .jw-icon-playback:before{content:"\\e60e"}.jwplayer.jw-state-complete .jw-captions{display:none}body .jw-error .jw-title,.jwplayer.jw-state-error .jw-title{display:block}body .jw-error .jw-title .jw-title-primary,.jwplayer.jw-state-error .jw-title .jw-title-primary{white-space:normal}body .jw-error .jw-preview,.jwplayer.jw-state-error .jw-preview{display:block}body .jw-error .jw-controlbar,.jwplayer.jw-state-error .jw-controlbar{display:none}body .jw-error .jw-captions,.jwplayer.jw-state-error .jw-captions{display:none}body .jw-error:hover .jw-display-icon-container,.jwplayer.jw-state-error:hover .jw-display-icon-container{cursor:default;color:#fff;background:#000}body .jw-error .jw-icon-display,.jwplayer.jw-state-error .jw-icon-display{cursor:default;font-family:\'jw-icons\';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}body .jw-error .jw-icon-display:before,.jwplayer.jw-state-error .jw-icon-display:before{content:"\\e607"}body .jw-error .jw-icon-display:hover,.jwplayer.jw-state-error .jw-icon-display:hover{color:#fff}body .jw-error{font-size:16px;background-color:#000;color:#eee;width:100%;height:100%;display:table;opacity:1;position:relative}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer.jw-flag-cast-available .jw-controlbar{display:table}.jwplayer.jw-flag-cast-available .jw-icon-cast{display:inline-block}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100% !important;height:100% !important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-fullscreen.jw-flag-user-inactive{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline}.jw-flag-user-inactive.jw-state-playing .jw-controlbar,.jw-flag-user-inactive.jw-state-playing .jw-dock{display:none}.jw-flag-user-inactive.jw-state-playing .jw-logo.jw-hide{display:none}.jw-flag-audio-player{background-color:transparent}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-controlbar{display:table;bottom:0;margin:0;width:100%;min-width:100%;opacity:1}.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume{display:inline-block}.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar{display:table;left:0}.jwplayer.jw-flag-audio-player .jw-controlbar{height:auto}.jwplayer.jw-flag-audio-player .jw-preview{display:none}.jwplayer.jw-flag-media-audio .jw-controlbar{display:table}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-preview,.jwplayer.jw-flag-ads .jw-dock{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-text,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads .jw-logo{display:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none !important}.jwplayer.jw-flag-ads.jw-flag-touch .jw-controlbar{display:table}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-controls-disabled .jw-controls{display:none}.jw-flag-controls-disabled .jw-media{cursor:auto}body .jwplayer.jw-flag-flash-blocked .jw-controls{display:none}body .jwplayer.jw-flag-flash-blocked .jw-overlays{display:none}body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch .jw-controlbar{font-size:1.5em}.jw-flag-touch .jw-icon-tooltip.jw-open-drawer:before{display:inline}.jw-flag-touch .jw-icon-tooltip.jw-open-drawer:before{content:"\\e615"}.jw-flag-touch .jw-display-icon-container{pointer-events:none}.jw-flag-compact-player .jw-icon-playlist,.jw-flag-compact-player .jw-icon-next,.jw-flag-compact-player .jw-icon-prev,.jw-flag-compact-player .jw-text-elapsed,.jw-flag-compact-player .jw-text-duration{display:none}.jw-skin-seven .jw-background-color{background:#000}.jw-skin-seven .jw-controlbar{border-top:#333 1px solid;height:2.5em}.jw-skin-seven .jw-group{vertical-align:middle}.jw-skin-seven .jw-playlist{background-color:rgba(0,0,0,0.5)}.jw-skin-seven .jw-playlist-container{left:-43%;background-color:rgba(0,0,0,0.5)}.jw-skin-seven .jw-playlist-container .jw-option{border-bottom:1px solid #444}.jw-skin-seven .jw-playlist-container .jw-option:hover,.jw-skin-seven .jw-playlist-container .jw-option.jw-active-option{background-color:black}.jw-skin-seven .jw-playlist-container .jw-option:hover .jw-label{color:#ff0046}.jw-skin-seven .jw-playlist-container .jw-icon-playlist{margin-left:0}.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play{color:#ff0046}.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play:before{padding-left:0}.jw-skin-seven .jw-tooltip-title{background-color:#000;color:#fff}.jw-skin-seven .jw-text{color:#fff}.jw-skin-seven .jw-button-color{color:#fff}.jw-skin-seven .jw-button-color:hover{color:#ff0046}.jw-skin-seven .jw-toggle{color:#ff0046}.jw-skin-seven .jw-toggle.jw-off{color:#fff}.jw-skin-seven .jw-controlbar .jw-icon:before,.jw-skin-seven .jw-text-elapsed,.jw-skin-seven .jw-text-duration{padding:0 .7em}.jw-skin-seven .jw-controlbar .jw-icon-prev:before{padding-right:.25em}.jw-skin-seven .jw-controlbar .jw-icon-playlist:before{padding:0 .45em}.jw-skin-seven .jw-controlbar .jw-icon-next:before{padding-left:.25em}.jw-skin-seven .jw-icon-prev,.jw-skin-seven .jw-icon-next{font-size:.7em}.jw-skin-seven .jw-icon-prev:before{border-left:1px solid #666}.jw-skin-seven .jw-icon-next:before{border-right:1px solid #666}.jw-skin-seven .jw-icon-display{color:#fff}.jw-skin-seven .jw-icon-display:before{padding-left:0}.jw-skin-seven .jw-display-icon-container{border-radius:50%;border:1px solid #333}.jw-skin-seven .jw-rail{background-color:#384154;box-shadow:none}.jw-skin-seven .jw-buffer{background-color:#666f82}.jw-skin-seven .jw-progress{background:#ff0046}.jw-skin-seven .jw-knob{width:.6em;height:.6em;background-color:#fff;box-shadow:0 0 0 1px #000;border-radius:1em}.jw-skin-seven .jw-slider-horizontal .jw-slider-container{height:.95em}.jw-skin-seven .jw-slider-horizontal .jw-rail,.jw-skin-seven .jw-slider-horizontal .jw-buffer,.jw-skin-seven .jw-slider-horizontal .jw-progress{height:.2em;border-radius:0}.jw-skin-seven .jw-slider-horizontal .jw-knob{top:-0.2em}.jw-skin-seven .jw-slider-horizontal .jw-cue{top:-0.05em;width:.3em;height:.3em;background-color:#fff;border-radius:50%}.jw-skin-seven .jw-slider-vertical .jw-rail,.jw-skin-seven .jw-slider-vertical .jw-buffer,.jw-skin-seven .jw-slider-vertical .jw-progress{width:.2em}.jw-skin-seven .jw-volume-tip{width:100%;left:-45%;padding-bottom:.7em}.jw-skin-seven .jw-text-duration{color:#666f82}.jw-skin-seven .jw-controlbar-right-group .jw-icon-tooltip:before,.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:before{border-left:1px solid #666}.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:first-child:before{border:none}.jw-skin-seven .jw-dock .jw-dock-button{border-radius:50%;border:1px solid #333}.jw-skin-seven .jw-dock .jw-overlay{border-radius:2.5em}.jw-skin-seven .jw-icon-tooltip .jw-active-option{background-color:#ff0046;color:#fff}.jw-skin-seven .jw-icon-volume{min-width:2.6em}.jw-skin-seven .jw-time-tip,.jw-skin-seven .jw-menu,.jw-skin-seven .jw-volume-tip,.jw-skin-seven .jw-skip{border:1px solid #333}.jw-skin-seven .jw-time-tip{padding:.2em;bottom:1.3em}.jw-skin-seven .jw-menu,.jw-skin-seven .jw-volume-tip{bottom:.24em}.jw-skin-seven .jw-skip{padding:.4em;border-radius:1.75em}.jw-skin-seven .jw-skip .jw-text,.jw-skin-seven .jw-skip .jw-icon-inline{color:#fff;line-height:1.75em}.jw-skin-seven .jw-skip.jw-skippable:hover .jw-text,.jw-skin-seven .jw-skip.jw-skippable:hover .jw-icon-inline{color:#ff0046}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon:before,.jw-skin-seven.jw-flag-touch .jw-text-elapsed,.jw-skin-seven.jw-flag-touch .jw-text-duration{padding:0 .35em}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon-prev:before{padding:0 .125em 0 .7em}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon-next:before{padding:0 .7em 0 .125em}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon-playlist:before{padding:0 .225em}',""])},function(a,b){a.exports=function(){var a=[];return a.toString=function(){for(var a=[],b=0;b<this.length;b++){var c=this[b];c[2]?a.push("@media "+c[2]+"{"+c[1]+"}"):a.push(c[1])}return a.join("")},a.i=function(b,c){"string"==typeof b&&(b=[[null,b,""]]);for(var d={},e=0;e<this.length;e++){var f=this[e][0];"number"==typeof f&&(d[f]=!0)}for(e=0;e<b.length;e++){var g=b[e];"number"==typeof g[0]&&d[g[0]]||(c&&!g[2]?g[2]=c:c&&(g[2]="("+g[2]+") and ("+c+")"),a.push(g))}},a}},function(a,b){a.exports="data:application/font-woff;base64,d09GRgABAAAAABQ4AAsAAAAAE+wAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxID2WNtYXAAAAFoAAAAVAAAAFQaVsydZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAD3AAAA9wKJaoQ2hlYWQAABE0AAAANgAAADYIhqKNaGhlYQAAEWwAAAAkAAAAJAmCBdxobXR4AAARkAAAAGwAAABscmAHPWxvY2EAABH8AAAAOAAAADg2EDnwbWF4cAAAEjQAAAAgAAAAIAAiANFuYW1lAAASVAAAAcIAAAHCwZOZtHBvc3QAABQYAAAAIAAAACAAAwAAAAMEmQGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA5hYDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOYW//3//wAAAAAAIOYA//3//wAB/+MaBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAABABgAAAFoAOAADoAPwBEAEkAACUVIi4CNTQ2Ny4BNTQ+AjMyHgIVFAYHHgEVFA4CIxEyFhc+ATU0LgIjIg4CFRQWFz4BMxExARUhNSEXFSE1IRcVITUhAUAuUj0jCgoKCkZ6o11do3pGCgoKCiM9Ui4qSh4BAjpmiE1NiGY6AQIeSioCVQIL/fWWAXX+i0oBK/7VHh4jPVIuGS4VH0MiXaN6RkZ6o10iQx8VLhkuUj0jAcAdGQ0bDk2IZjo6ZohNDhsNGR3+XgNilZXglZXglZUAAAABAEAAAAPAA4AAIQAAExQeAjMyPgI1MxQOAiMiLgI1ND4CMxUiDgIVMYs6ZohNTYhmOktGeqNdXaN6RkZ6o11NiGY6AcBNiGY6OmaITV2jekZGeqNdXaN6Rks6ZohNAAAEAEAAAATAA4AADgAcACoAMQAAJS4BJyERIREuAScRIREhByMuAyc1HgMXMSsBLgMnNR4DFzErATUeARcxAn8DBQQCDPxGCysLBDz9v1NaCERrjE9irINTCLVbByc6Sio9a1I1CLaBL0YMQgsoCgLB/ukDCgIBSPzCQk6HaEIIWAhQgKdgKUg5JgdYBzRRZzx9C0QuAAAAAAUAQAAABMADgAAOABkAJwA1ADwAACUuASchESERLgEnESERIQE1IREhLgMnMQEjLgMnNR4DFzErAS4DJzUeAxcxKwE1HgEXMQKAAgYFAg38QAwqCgRA/cD+gANA/iAYRVlsPgEtWghFa4xPYq2DUgmzWgcnO0oqPGpSNgm6gDBEDEAMKAwCwP7tAggDAUb8wAHQ8P3APWdUQRf98E2IaEIHWghQgKhgKUg4JgdaCDVRZzt9DEMuAAAEAEAAAAXAA4AABAAJAGcAxQAANxEhESEBIREhEQU+ATc+ATMyFhceARceARceARcjLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3Mw4BBw4BBw4BBw4BIyImJy4BJy4BJy4BNTQ2Nz4BNzEhPgE3PgEzMhYXHgEXHgEXHgEXIy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNzMOAQcOAQcOAQcOASMiJicuAScuAScuATU0Njc+ATcxQAWA+oAFNvsUBOz8Iw4hExQsGBIhEA8cDQwUCAgLAlsBBQUECgYHDggIEAkQGgsLEgcHCgMDAwMDAwoHBxILCxoQFiEMDA8DWgIJBwgTDQwcERAkFBgsFBMhDg0VBwcHBwcHFQ0Bug0hFBMsGREhEBAcDAwVCAgKAloCBQQECwYGDggIEQgQGwsLEgcHCgMDAwMDAwoHBxILCxsQFSIMDA4DWwIJCAcUDAwdEBEkExksExQhDQ4UBwcICAcHFA4AA4D8gAM1/RYC6tcQGAgJCQUFBQ8KChgPDiETCQ4HBwwFBQgDAwIGBgYRCgoYDQ0cDg0aDQ0XCgoRBgYGDQ0OIhYUJBEQHAsLEgYGBgkICRcPDyQUFCwXGC0VFCQPEBgICQkFBQUPCgoYDw4hEwkOBwcMBQUIAwMCBgYGEQoKGA0NHA4NGg0NFwoKEQYGBg0NDiIWFCQREBwLCxIGBgYJCAkXDw8kFBQsFxgtFRQkDwAAAAADAEAAAAXAA4AAEABvAM4AACUhIiY1ETQ2MyEyFhURFAYjAT4BNz4BNz4BMzIWFx4BFx4BFx4BFzMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATc+ATc+ATcjDgEHDgEjIiYnLgEnLgEnLgE1NDY3OQEhPgE3PgE3PgEzMhYXHgEXHgEXHgEXMy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNz4BNz4BNyMOAQcOASMiJicuAScuAScuATU0Njc5AQUs+6g9V1c9BFg9V1c9/JoDCgcGEgsLGxAJEAgIDgYHCgQEBgFaAgoICBQNDBwQDyESGCwUEyEODRUHBwcHBwcVDQ4hExQrGRQkEBAdDAwUCAcJAloDDwwMIhUQGwsLEgYHCgMEAwMEAbkDCgcHEgsLGxAIEQgHDwYGCwQEBQFbAgoICBUMDBwQECERGSwTFCENDhQHBwgIBwcUDg0hFBMsGRMkERAdDAwUBwgJAlsDDgwNIRUQGwsLEgcHCgMDAwMDAFc+AlY+V1c+/ao+VwH0DRgKCxAGBgYCAwMIBQUMBwcOCRMhDg8YCgoOBgUFCQkIGBAPJBQVLRgXLBQUJA8PFwkICQYGBhILCxwQESQUFiIODQ0GBgYRCgoXDQ0aDg4bDQ0YCgsQBgYGAgMDCAUFDAcHDgkTIQ4PGAoKDgYFBQkJCBgQDyQUFS0YFywUFCQPDxcJCAkGBgYSCwscEBEkFBYiDg0NBgYGEQoKFw0NGg4OGw0AAAABAOAAoAMgAuAAFAAAARQOAiMiLgI1ND4CMzIeAhUDIC1OaTw8aU4tLU5pPDxpTi0BwDxpTi0tTmk8PGlOLS1OaTwAAAMAQAAQBEADkAADABAAHwAANwkBISUyNjU0JiMiBhUUFjMTNCYjIgYVERQWMzI2NRFAAgACAPwAAgAOFRUODhUVDiMVDg4VFQ4OFRADgPyAcBYQDxgWERAWAeYPGBYR/tcPGBYRASkAAgBAAAADwAOAAAcADwAANxEXNxcHFyEBIREnByc3J0CAsI2wgP5zAfMBjYCwjbCAAAGNgLCNsIADgP5zgLCNsIAAAAAFAEAAAAXAA4AABAAJABYAMwBPAAA3ESERIQEhESERATM1MxEjNSMVIxEzFSUeARceARceARUUBgcOAQcOAQcOASsBETMeARcxBxEzMjY3PgE3PgE3PgE1NCYnLgEnLgEnLgErAUAFgPqABTb7FATs/FS2YGC2ZGQCXBQeDg8UBwcJBgcHEwwMIRMTLBuwsBYqE6BHCRcJChIIBw0FBQUEAwINBwcTDAwgETcAA4D8gAM2/RcC6f7Arf5AwMABwK2dBxQODyIWFTAbGC4TFiIPDhgKCQcBwAIHB0P+5gQDAg0HBxcMDCETER0PDhgKCQ8EBQUABAA9AAAFwAOAABAAHQA7AFkAACUhIiY1ETQ2MyEyFhURFAYjASMVIzUjETM1MxUzEQUuAScuAScuASsBETMyNjc+ATc+ATc+ATUuASc5AQcOAQcOASsBETMyFhceARceARceARUUBgcOAQc5AQUq+6k+WFg+BFc+WFg+/bNgs2Rks2ABsAcXDA4fExMnFrCwGywTEx4PDBMHBwYCCAl3CBIKCRQMRzcTHgwMEwcHCwQDBAUFBQ0HAFg+AlQ+WFg+/aw+WAKdra3+QMDAAcB9FiIODxQHBwb+QAkHCRgPDiUTFiwYHTAW4ggNAgMEAR8EBQUPCgoYDw4fERMfDwwXBwAAAAABAEMABgOgA3oAjwAAExQiNScwJic0JicuAQcOARUcARUeARceATc+ATc+ATE2MhUwFAcUFhceARceATMyNjc+ATc+ATc+AzE2MhUwDgIVFBYXHgEXFjY3PgE3PgE3PgE3PgM3PAE1NCYnJgYHDgMxBiI1MDwCNTQmJyYGBw4BBw4DMQYiNTAmJy4BJyYGBw4BMRWQBgQIBAgCBQ4KBwkDFgcHIQ8QDwcHNgUEAwMHBQsJChcMBQ0FBwsHDBMICR8cFQUFAwQDCAUHFRERJBEMEwgJEgUOGQwGMjgvBAkHDBYEAz1IPAQFLyQRIhEQFgoGIiUcBQUEAgMYKCcmCgcsAboFBQwYDwUKBwUEAgMNBwcLBxRrDhENBwggDxOTCgqdMBM1EQwTCAcFBAIFCgcPIw4UQ0IxCgpTc3glEyMREBgIBwEKBxUKESUQJ00mE6/JrA8FBgIHDQMECAkGla2PCQk1VGYxNTsHAgUKChwQC2BqVQoKehYfTwUDRx8TkAMAAAAAAgBGAAAENgOAAAQACAAAJREzESMJAhEDxnBw/IADgPyAAAOA/IADgP5A/kADgAAAAgCAAAADgAOAAAQACQAAJREhESEBIREhEQKAAQD/AP4AAQD/AAADgPyAA4D8gAOAAAAAAAEAgAAABAADgAADAAAJAREBBAD8gAOAAcD+QAOA/kAAAgBKAAAEOgOAAAQACAAANxEjETMJAhG6cHADgPyAA4AAA4D8gAOA/kD+QAOAAAAAAQBDACADQwOgACkAAAEeARUUDgIjIi4CNTQ+AjM1DQE1Ig4CFRQeAjMyPgI1NCYnNwMNGhw8aYxPT4xoPT1ojE8BQP7APGlOLS1OaTw8aU4tFhNTAmMrYzVPjGg9PWiMT0+MaD2ArbOALU5pPDxpTi0tTmk8KUsfMAAAAAEAQABmAiADEwAGAAATETMlESUjQM0BE/7tzQEzARPN/VPNAAQAQAAABJADgAAXACsAOgBBAAAlJz4DNTQuAic3HgMVFA4CBzEvAT4BNTQmJzceAxUOAwcxJz4BNTQmJzceARUUBgcnBREzJRElIwPaKiY+KxcXKz4mKipDMBkZMEMqpCk5REQ5KSE0JBQBFCQzIcMiKCgiKiYwMCYq/c3NARP+7c0AIyheaXI8PHFpXikjK2ZyfEFBfHJmK4MjNZFUVJE1Ix5IUFgvL1lRRx2zFkgpK0YVIxxcNDVZHykDARPN/VPNAAACAEAAAAPDA4AABwAPAAABFyERFzcXBwEHJzcnIREnAypw/qlwl3mZ/iaWepZwAVdtAnNwAVdwlnqT/iOWepZw/qpsAAMAQAETBcACYAAMABkAJgAAARQGIyImNTQ2MzIWFSEUBiMiJjU0NjMyFhUhFAYjIiY1NDYzMhYVAY1iRUVhYUVFYgIWYUVFYmJFRWECHWFFRWJiRUVhAbpFYmJFRWFhRUViYkVFYWFFRWJiRUVhYUUAAAAAAQBmACYDmgNaACAAAAEXFhQHBiIvAQcGIicmND8BJyY0NzYyHwE3NjIXFhQPAQKj9yQkJGMd9vYkYx0kJPf3JCQkYx329iRjHSQk9wHA9iRjHSQk9/ckJCRjHfb2JGMdJCT39yQkJGMd9gAABgBEAAQDvAN8AAQACQAOABMAGAAdAAABIRUhNREhFSE1ESEVITUBMxUjNREzFSM1ETMVIzUBpwIV/esCFf3rAhX96/6dsrKysrKyA3xZWf6dWVn+nVlZAsaysv6dsrL+nbKyAAEAAAABGZqh06s/Xw889QALBAAAAAAA0dQiKwAAAADR1CIrAAAAAAXAA6AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABgAAAAAABcAAAQAAAAAAAAAAAAAAAAAAABsEAAAAAAAAAAAAAAACAAAABgAAYAQAAEAFAABABQAAQAYAAEAGAABABAAA4ASAAEAEAABABgAAQAYAAD0D4ABDBIAARgQAAIAEAACABIAASgOAAEMEwABABMAAQAQAAEAGAABABAAAZgQAAEQAAAAAAAoAFAAeAIgAuAEEAWAChgOyA9QECAQqBKQFJgXoBgAGGgYqBkIGgAaSBvQHFgdQB4YHuAABAAAAGwDPAAYAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADAAAAAEAAAAAAAIABwCNAAEAAAAAAAMADABFAAEAAAAAAAQADACiAAEAAAAAAAUACwAkAAEAAAAAAAYADABpAAEAAAAAAAoAGgDGAAMAAQQJAAEAGAAMAAMAAQQJAAIADgCUAAMAAQQJAAMAGABRAAMAAQQJAAQAGACuAAMAAQQJAAUAFgAvAAMAAQQJAAYAGAB1AAMAAQQJAAoANADganctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjEAVgBlAHIAcwBpAG8AbgAgADEALgAxanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==";
},function(a,b){a.exports="data:application/octet-stream;base64,AAEAAAALAIAAAwAwT1MvMg8SA9kAAAC8AAAAYGNtYXAaVsydAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZiiWqEMAAAF4AAAPcGhlYWQIhqKNAAAQ6AAAADZoaGVhCYIF3AAAESAAAAAkaG10eHJgBz0AABFEAAAAbGxvY2E2EDnwAAARsAAAADhtYXhwACIA0QAAEegAAAAgbmFtZcGTmbQAABIIAAABwnBvc3QAAwAAAAATzAAAACAAAwSZAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADmFgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg5hb//f//AAAAAAAg5gD//f//AAH/4xoEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAGAAAAWgA4AAOgA/AEQASQAAJRUiLgI1NDY3LgE1ND4CMzIeAhUUBgceARUUDgIjETIWFz4BNTQuAiMiDgIVFBYXPgEzETEBFSE1IRcVITUhFxUhNSEBQC5SPSMKCgoKRnqjXV2jekYKCgoKIz1SLipKHgECOmaITU2IZjoBAh5KKgJVAgv99ZYBdf6LSgEr/tUeHiM9Ui4ZLhUfQyJdo3pGRnqjXSJDHxUuGS5SPSMBwB0ZDRsOTYhmOjpmiE0OGw0ZHf5eA2KVleCVleCVlQAAAAEAQAAAA8ADgAAhAAATFB4CMzI+AjUzFA4CIyIuAjU0PgIzFSIOAhUxizpmiE1NiGY6S0Z6o11do3pGRnqjXU2IZjoBwE2IZjo6ZohNXaN6RkZ6o11do3pGSzpmiE0AAAQAQAAABMADgAAOABwAKgAxAAAlLgEnIREhES4BJxEhESEHIy4DJzUeAxcxKwEuAyc1HgMXMSsBNR4BFzECfwMFBAIM/EYLKwsEPP2/U1oIRGuMT2Ksg1MItVsHJzpKKj1rUjUItoEvRgxCCygKAsH+6QMKAgFI/MJCTodoQghYCFCAp2ApSDkmB1gHNFFnPH0LRC4AAAAABQBAAAAEwAOAAA4AGQAnADUAPAAAJS4BJyERIREuAScRIREhATUhESEuAycxASMuAyc1HgMXMSsBLgMnNR4DFzErATUeARcxAoACBgUCDfxADCoKBED9wP6AA0D+IBhFWWw+AS1aCEVrjE9irYNSCbNaByc7Sio8alI2CbqAMEQMQAwoDALA/u0CCAMBRvzAAdDw/cA9Z1RBF/3wTYhoQgdaCFCAqGApSDgmB1oINVFnO30MQy4AAAQAQAAABcADgAAEAAkAZwDFAAA3ESERIQEhESERBT4BNz4BMzIWFx4BFx4BFx4BFyMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATczDgEHDgEHDgEHDgEjIiYnLgEnLgEnLgE1NDY3PgE3MSE+ATc+ATMyFhceARceARceARcjLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3Mw4BBw4BBw4BBw4BIyImJy4BJy4BJy4BNTQ2Nz4BNzFABYD6gAU2+xQE7PwjDiETFCwYEiEQDxwNDBQICAsCWwEFBQQKBgcOCAgQCRAaCwsSBwcKAwMDAwMDCgcHEgsLGhAWIQwMDwNaAgkHCBMNDBwRECQUGCwUEyEODRUHBwcHBwcVDQG6DSEUEywZESEQEBwMDBUICAoCWgIFBAQLBgYOCAgRCBAbCwsSBwcKAwMDAwMDCgcHEgsLGxAVIgwMDgNbAgkIBxQMDB0QESQTGSwTFCENDhQHBwgIBwcUDgADgPyAAzX9FgLq1xAYCAkJBQUFDwoKGA8OIRMJDgcHDAUFCAMDAgYGBhEKChgNDRwODRoNDRcKChEGBgYNDQ4iFhQkERAcCwsSBgYGCQgJFw8PJBQULBcYLRUUJA8QGAgJCQUFBQ8KChgPDiETCQ4HBwwFBQgDAwIGBgYRCgoYDQ0cDg0aDQ0XCgoRBgYGDQ0OIhYUJBEQHAsLEgYGBgkICRcPDyQUFCwXGC0VFCQPAAAAAAMAQAAABcADgAAQAG8AzgAAJSEiJjURNDYzITIWFREUBiMBPgE3PgE3PgEzMhYXHgEXHgEXHgEXMy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNz4BNz4BNyMOAQcOASMiJicuAScuAScuATU0Njc5ASE+ATc+ATc+ATMyFhceARceARceARczLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3PgE3PgE3Iw4BBw4BIyImJy4BJy4BJy4BNTQ2NzkBBSz7qD1XVz0EWD1XVz38mgMKBwYSCwsbEAkQCAgOBgcKBAQGAVoCCggIFA0MHBAPIRIYLBQTIQ4NFQcHBwcHBxUNDiETFCsZFCQQEB0MDBQIBwkCWgMPDAwiFRAbCwsSBgcKAwQDAwQBuQMKBwcSCwsbEAgRCAcPBgYLBAQFAVsCCggIFQwMHBAQIREZLBMUIQ0OFAcHCAgHBxQODSEUEywZEyQREB0MDBQHCAkCWwMODA0hFRAbCwsSBwcKAwMDAwMAVz4CVj5XVz79qj5XAfQNGAoLEAYGBgIDAwgFBQwHBw4JEyEODxgKCg4GBQUJCQgYEA8kFBUtGBcsFBQkDw8XCQgJBgYGEgsLHBARJBQWIg4NDQYGBhEKChcNDRoODhsNDRgKCxAGBgYCAwMIBQUMBwcOCRMhDg8YCgoOBgUFCQkIGBAPJBQVLRgXLBQUJA8PFwkICQYGBhILCxwQESQUFiIODQ0GBgYRCgoXDQ0aDg4bDQAAAAEA4ACgAyAC4AAUAAABFA4CIyIuAjU0PgIzMh4CFQMgLU5pPDxpTi0tTmk8PGlOLQHAPGlOLS1OaTw8aU4tLU5pPAAAAwBAABAEQAOQAAMAEAAfAAA3CQEhJTI2NTQmIyIGFRQWMxM0JiMiBhURFBYzMjY1EUACAAIA/AACAA4VFQ4OFRUOIxUODhUVDg4VEAOA/IBwFhAPGBYREBYB5g8YFhH+1w8YFhEBKQACAEAAAAPAA4AABwAPAAA3ERc3FwcXIQEhEScHJzcnQICwjbCA/nMB8wGNgLCNsIAAAY2AsI2wgAOA/nOAsI2wgAAAAAUAQAAABcADgAAEAAkAFgAzAE8AADcRIREhASERIREBMzUzESM1IxUjETMVJR4BFx4BFx4BFRQGBw4BBw4BBw4BKwERMx4BFzEHETMyNjc+ATc+ATc+ATU0JicuAScuAScuASsBQAWA+oAFNvsUBOz8VLZgYLZkZAJcFB4ODxQHBwkGBwcTDAwhExMsG7CwFioToEcJFwkKEggHDQUFBQQDAg0HBxMMDCARNwADgPyAAzb9FwLp/sCt/kDAwAHArZ0HFA4PIhYVMBsYLhMWIg8OGAoJBwHAAgcHQ/7mBAMCDQcHFwwMIRMRHQ8OGAoJDwQFBQAEAD0AAAXAA4AAEAAdADsAWQAAJSEiJjURNDYzITIWFREUBiMBIxUjNSMRMzUzFTMRBS4BJy4BJy4BKwERMzI2Nz4BNz4BNz4BNS4BJzkBBw4BBw4BKwERMzIWFx4BFx4BFx4BFRQGBw4BBzkBBSr7qT5YWD4EVz5YWD79s2CzZGSzYAGwBxcMDh8TEycWsLAbLBMTHg8MEwcHBgIICXcIEgoJFAxHNxMeDAwTBwcLBAMEBQUFDQcAWD4CVD5YWD79rD5YAp2trf5AwMABwH0WIg4PFAcHBv5ACQcJGA8OJRMWLBgdMBbiCA0CAwQBHwQFBQ8KChgPDh8REx8PDBcHAAAAAAEAQwAGA6ADegCPAAATFCI1JzAmJzQmJy4BBw4BFRwBFR4BFx4BNz4BNz4BMTYyFTAUBxQWFx4BFx4BMzI2Nz4BNz4BNz4DMTYyFTAOAhUUFhceARcWNjc+ATc+ATc+ATc+Azc8ATU0JicmBgcOAzEGIjUwPAI1NCYnJgYHDgEHDgMxBiI1MCYnLgEnJgYHDgExFZAGBAgECAIFDgoHCQMWBwchDxAPBwc2BQQDAwcFCwkKFwwFDQUHCwcMEwgJHxwVBQUDBAMIBQcVEREkEQwTCAkSBQ4ZDAYyOC8ECQcMFgQDPUg8BAUvJBEiERAWCgYiJRwFBQQCAxgoJyYKBywBugUFDBgPBQoHBQQCAw0HBwsHFGsOEQ0HCCAPE5MKCp0wEzURDBMIBwUEAgUKBw8jDhRDQjEKClNzeCUTIxEQGAgHAQoHFQoRJRAnTSYTr8msDwUGAgcNAwQICQaVrY8JCTVUZjE1OwcCBQoKHBALYGpVCgp6Fh9PBQNHHxOQAwAAAAACAEYAAAQ2A4AABAAIAAAlETMRIwkCEQPGcHD8gAOA/IAAA4D8gAOA/kD+QAOAAAACAIAAAAOAA4AABAAJAAAlESERIQEhESERAoABAP8A/gABAP8AAAOA/IADgPyAA4AAAAAAAQCAAAAEAAOAAAMAAAkBEQEEAPyAA4ABwP5AA4D+QAACAEoAAAQ6A4AABAAIAAA3ESMRMwkCEbpwcAOA/IADgAADgPyAA4D+QP5AA4AAAAABAEMAIANDA6AAKQAAAR4BFRQOAiMiLgI1ND4CMzUNATUiDgIVFB4CMzI+AjU0Jic3Aw0aHDxpjE9PjGg9PWiMTwFA/sA8aU4tLU5pPDxpTi0WE1MCYytjNU+MaD09aIxPT4xoPYCts4AtTmk8PGlOLS1OaTwpSx8wAAAAAQBAAGYCIAMTAAYAABMRMyURJSNAzQET/u3NATMBE839U80ABABAAAAEkAOAABcAKwA6AEEAACUnPgM1NC4CJzceAxUUDgIHMS8BPgE1NCYnNx4DFQ4DBzEnPgE1NCYnNx4BFRQGBycFETMlESUjA9oqJj4rFxcrPiYqKkMwGRkwQyqkKTlERDkpITQkFAEUJDMhwyIoKCIqJjAwJir9zc0BE/7tzQAjKF5pcjw8cWleKSMrZnJ8QUF8cmYrgyM1kVRUkTUjHkhQWC8vWVFHHbMWSCkrRhUjHFw0NVkfKQMBE839U80AAAIAQAAAA8MDgAAHAA8AAAEXIREXNxcHAQcnNychEScDKnD+qXCXeZn+JpZ6lnABV20Cc3ABV3CWepP+I5Z6lnD+qmwAAwBAARMFwAJgAAwAGQAmAAABFAYjIiY1NDYzMhYVIRQGIyImNTQ2MzIWFSEUBiMiJjU0NjMyFhUBjWJFRWFhRUViAhZhRUViYkVFYQIdYUVFYmJFRWEBukViYkVFYWFFRWJiRUVhYUVFYmJFRWFhRQAAAAABAGYAJgOaA1oAIAAAARcWFAcGIi8BBwYiJyY0PwEnJjQ3NjIfATc2MhcWFA8BAqP3JCQkYx329iRjHSQk9/ckJCRjHfb2JGMdJCT3AcD2JGMdJCT39yQkJGMd9vYkYx0kJPf3JCQkYx32AAAGAEQABAO8A3wABAAJAA4AEwAYAB0AAAEhFSE1ESEVITURIRUhNQEzFSM1ETMVIzURMxUjNQGnAhX96wIV/esCFf3r/p2ysrKysrIDfFlZ/p1ZWf6dWVkCxrKy/p2ysv6dsrIAAQAAAAEZmqHTqz9fDzz1AAsEAAAAAADR1CIrAAAAANHUIisAAAAABcADoAAAAAgAAgAAAAAAAAABAAADwP/AAAAGAAAAAAAFwAABAAAAAAAAAAAAAAAAAAAAGwQAAAAAAAAAAAAAAAIAAAAGAABgBAAAQAUAAEAFAABABgAAQAYAAEAEAADgBIAAQAQAAEAGAABABgAAPQPgAEMEgABGBAAAgAQAAIAEgABKA4AAQwTAAEAEwABABAAAQAYAAEAEAABmBAAARAAAAAAACgAUAB4AiAC4AQQBYAKGA7ID1AQIBCoEpAUmBegGAAYaBioGQgaABpIG9AcWB1AHhge4AAEAAAAbAM8ABgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAMAAAAAQAAAAAAAgAHAI0AAQAAAAAAAwAMAEUAAQAAAAAABAAMAKIAAQAAAAAABQALACQAAQAAAAAABgAMAGkAAQAAAAAACgAaAMYAAwABBAkAAQAYAAwAAwABBAkAAgAOAJQAAwABBAkAAwAYAFEAAwABBAkABAAYAK4AAwABBAkABQAWAC8AAwABBAkABgAYAHUAAwABBAkACgA0AOBqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNWZXJzaW9uIDEuMQBWAGUAcgBzAGkAbwBuACAAMQAuADFqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNSZWd1bGFyAFIAZQBnAHUAbABhAHJqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=l[d.id];if(e){e.refs++;for(var f=0;f<e.parts.length;f++)e.parts[f](d.parts[f]);for(;f<d.parts.length;f++)e.parts.push(h(d.parts[f],b))}else{for(var g=[],f=0;f<d.parts.length;f++)g.push(h(d.parts[f],b));l[d.id]={id:d.id,refs:1,parts:g}}}}function e(a){for(var b=[],c={},d=0;d<a.length;d++){var e=a[d],f=e[0],g=e[1],h=e[2],i=e[3],j={css:g,media:h,sourceMap:i};c[f]?c[f].parts.push(j):b.push(c[f]={id:f,parts:[j]})}return b}function f(){var a=document.createElement("style"),b=o();return a.type="text/css",b.appendChild(a),a}function g(){var a=document.createElement("link"),b=o();return a.rel="stylesheet",b.appendChild(a),a}function h(a,b){var c,d,e;if(b.singleton){var h=q++;c=p||(p=f()),d=i.bind(null,c,h,!1),e=i.bind(null,c,h,!0)}else a.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(c=g(),d=k.bind(null,c),e=function(){c.parentNode.removeChild(c),c.href&&URL.revokeObjectURL(c.href)}):(c=f(),d=j.bind(null,c),e=function(){c.parentNode.removeChild(c)});return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}function i(a,b,c,d){var e=c?"":d.css;if(a.styleSheet)a.styleSheet.cssText=r(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function j(a,b){var c=b.css,d=b.media;b.sourceMap;if(d&&a.setAttribute("media",d),a.styleSheet)a.styleSheet.cssText=c;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(c))}}function k(a,b){var c=b.css,d=(b.media,b.sourceMap);d&&(c+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(d))))+" */");var e=new Blob([c],{type:"text/css"}),f=a.href;a.href=URL.createObjectURL(e),f&&URL.revokeObjectURL(f)}var l={},m=function(a){var b;return function(){return"undefined"==typeof b&&(b=a.apply(this,arguments)),b}},n=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),o=m(function(){return document.head||document.getElementsByTagName("head")[0]}),p=null,q=0;a.exports=function(a,b){b=b||{},"undefined"==typeof b.singleton&&(b.singleton=n());var c=e(a);return d(c,b),function(a){for(var f=[],g=0;g<c.length;g++){var h=c[g],i=l[h.id];i.refs--,f.push(i)}if(a){var j=e(a);d(j,b)}for(var g=0;g<f.length;g++){var i=f[g];if(0===i.refs){for(var k=0;k<i.parts.length;k++)i.parts[k]();delete l[i.id]}}}};var r=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join("\n")}}()},function(a,b,c){var d,e;d=[c(40),c(47),c(58),c(45),c(79),c(50),c(117),c(90),c(96),c(91),c(73),c(66),c(65),c(82),c(83),c(159),c(101),c(93)],e=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s={};return s.api=a,s._=b,s.version=c,s.utils=b.extend(d,f,{canCast:p.available,getCookies:e.getAllItems,saveCookie:e.setItem,key:h,extend:b.extend,scriptloader:i,rssparser:q,tea:j,UI:g}),s.utils.css.style=s.utils.style,s.vid=k,s.events=b.extend({},l,{state:m}),s.playlist=b.extend({},n,{item:o}),s.plugins=r,s.cast=p,s}.apply(b,d),!(void 0!==e&&(a.exports=e))}])});var spMinVideoIdForMobileDevices = 58671;

function redirectIE6(){
	if ($.browser.msie && parseInt($.browser.version, 10) <= 6) {
		window.location = '/artikel/a-774487.html';
		return false;
	}
}

// if we're in an Iframe, get SPON interface from parent window
// this is fatal if video is embedded by a third party site (x-domain, spon embed videos), so try-catch Bug 38750
var spInterface;
if (window.parent.location != window.location) {
	try {
		spInterface = window.parent.$().spInterface;
	}
	catch(e) {
		console.log("Error while trying to load spInterface from parent: " + e.message);
	}
}	

// if spUA is not defined, we're likely in an Iframe, so let's try it via SPON interface
if (!window.spUA && spInterface)
	window.spUA = spInterface('getBrowserDetector');

var spUseVideoIframe = true;

function spOpenVideo(a, videoid){
	if ($.browser.msie && parseInt($.browser.version, 10) <= 6) {
		window.location = '/artikel/a-774487.html';
		return false;
	}else{
		// for video component player that are inside Iframes, load the suggested new video in the parent
		if ($(a).parents('.videoplayer-framework').length && (window.parent.location != window.location)) {
			$(a).attr('target', '_top');
			return true;
		}

		// externe Videos in neuem Fenster oeffnen
		if (videoid >= 99000000) {
			a.target='_blank';
			return true;
		}

		// sind wir im iFrame?
		var loc=location.href;
		var pos=loc.indexOf("iframe.html");
		if (pos > -1){
			a.href = "/video/video-"+videoid+"-iframe.html";
			a.target="_self";
			return true;
		}

		// kein iFrame, wenn die aufrufende Seite das verbietet (Video-Ansichten)
		if (!spUseVideoIframe) {
			if (a.target === '') {
				a.target='_top';
			}
			return true;
		}

		// iFrame oeffnen
		if (document.images) {
			preload = new Image();
			preload.src = "/static/sys/v10/icons/ic_load-ani.gif";
		}
		
		var spGreyBox = document.createElement("DIV");

		spGreyBox.setAttribute("id", "js-grey-box");
		if (document.all)
			spGreyBox.attachEvent("onclick", closeVideoIframe);
		else
			spGreyBox.setAttribute("onclick", "closeVideoIframe();");

		var body = document.getElementsByTagName("BODY")[0];
		body.appendChild(spGreyBox);

		// iFrame-Position
		var scrolXOff = 0;
		var scrolYOff = 0;
		var windWidth = 0;
		var windHeigh = 0;
		var frameXpos = 0;
		var frameYpos = 0;

		if( typeof( window.innerWidth ) == 'number') {
			scrolXOff = window.pageXOffset;
			scrolYOff = window.pageYOffset;
			windWidth = window.innerWidth - 20;
			windHeigh = window.innerHeight - 20;
		} else if ( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
			scrolXOff = document.documentElement.scrollLeft;
			scrolYOff = document.documentElement.scrollTop;
			windWidth = document.documentElement.clientWidth - 20;
			windHeigh = document.documentElement.clientHeight - 20;
		} else if ( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
			scrolXOff = document.body.scrollLeft;
			scrolYOff = document.body.scrollTop;
			windWidth = document.body.clientWidth - 20;
			windHeigh = document.body.clientHeight - 20;
		}

		if(windWidth > 998){
			frameXpos = (Math.floor((windWidth - 998) / 2) + scrolXOff);
		}else{
			frameXpos = (scrolXOff + 15);
			if( spUA.isIDevice() || spUA.isAndroid() ){
				frameXpos = (scrolXOff);
			}
		}

		if(windHeigh > 725){
			frameYpos = (Math.floor((windHeigh - 725) / 2) + scrolYOff);
		}else{
			frameYpos = (scrolYOff + 30);
		}

		// Belegung weiterreichen
		var hashQs = "";

		// im Link direkt?
		var loc=(a.href + "");
		var pos=loc.indexOf("#");
		if (pos > -1){
			hashQs=loc.substring(pos, loc.length);
		}

		// oder in der aufrufenden Seite?
		else {
			var loc=(location.href + "");
			var pos=loc.indexOf("#");
			if (pos > -1){
				hashQs=loc.substring(pos, loc.length);
			}
		}

		var iframe = document.createElement("IFRAME");
		iframe.setAttribute("id", "video-iframe");
		iframe.setAttribute("src", "/video/video-"+videoid+"-iframe.html" + hashQs);
		iframe.setAttribute("width", "998");
		iframe.setAttribute("height", "725");
		iframe.setAttribute("border", "0");
		iframe.setAttribute("frameBorder", "0");
		iframe.setAttribute("scrolling", "no");
		iframe.setAttribute("allowfullscreen", "");
		iframe.style.left = frameXpos + 'px';
		iframe.style.top = frameYpos + 'px';
		if (!document.all)
			iframe.setAttribute("onload", "spIframeOnLoad(this.contentWindow.document.body.clientHeight);");

		var loadingDiv = document.createElement("DIV");
		loadingDiv.style.left = frameXpos + 'px';
		loadingDiv.style.top = frameYpos + 'px';
		loadingDiv.setAttribute("id", "spLoadingDiv");

		body.appendChild(loadingDiv);
		body.appendChild(iframe);
		if (navigator.userAgent.indexOf('iPad') > -1){
			var iframeWidth	= iframe.offsetWidth;
			var gbWidth		= window.innerWidth;
			var gbHeight	= document.getElementsByTagName('body')[0].offsetHeight;
			if(parseInt(iframeWidth) >= parseInt(gbWidth)){
				spGreyBox.style.width  = parseInt(iframeWidth) + 'px';
			}else{
				spGreyBox.style.width  = parseInt(gbWidth) + 'px';
			}
			spGreyBox.style.height = parseInt(gbHeight) + 'px';
		}

		return false;
	}
}

function spIframeOnLoad(iframeHeight) {
	spCloseLoadingDiv();
	if (!isNaN(iframeHeight)) {
		var iframe = document.getElementById("video-iframe");
		if (iframe !== null)
			iframe.style.height=iframeHeight+"px";
	}
}

function spCloseLoadingDiv() {
	if (this.parent) {
		var parentDoc = this.parent.document;
		if (parentDoc !== null) {
			var videoloadingdiv = parentDoc.getElementById('spLoadingDiv');
			if (videoloadingdiv !== null)
				videoloadingdiv.parentNode.removeChild(videoloadingdiv);
		}
	}
}

function closeVideoIframe(){
	var parentDoc = this.parent.document;
	var spGreyBox = parentDoc.getElementById('js-grey-box');
	spGreyBox.parentNode.removeChild(spGreyBox);
	var videoiframe = parentDoc.getElementById('video-iframe');
	videoiframe.parentNode.removeChild(videoiframe);
	spCloseLoadingDiv();
}

function isValidPluginVersion() {
	var fpversion = swfobject.getFlashPlayerVersion();
	var configuredVersion = sp_webcfg_global.flash.pluginversion;
	if((fpversion.major > configuredVersion.major) || ((fpversion.major == configuredVersion.major) && (fpversion.minor >= configuredVersion.minor))) {
		/* ab Version 11 alles ok, wenn Version 10 mindestens minor release 1 */
		return true;
	} else {
		return false;
	}
}


/**
 * Read video data & use that to insert a player for that video inside provided HTML element
 * @param  {String}   wrapperElemId  ID of HTML element where video player should be generated
 * @param  {Int}      videoId        ID of video to show
 * @param  {Boolean}  showAds        Whether or not to allow ads
 * @param  {mixed}    embedWidth     Sets width of the player in pixels, or "auto" to determine from wrapper element
 * @param  {Boolean}  autoplay       Whether to start video right away (only if supported by the device!)
 * @param  {Boolean}  showEndScreen  Whether to show related videos on video-end
 */
/* ##### NOTICE ##### This function must be callable from external h5app interface!
 *                    Don't just rename it or change parameters without consulting the producing department,
 *                    and make sure to test the h5app interface against the new changes!
 */
function spGetVideoDataAndInsertPlayer(wrapperElemId, videoId, showAds, embedWidth, autoplay, showEndScreen) {
	// check mandatory params
	if (!wrapperElemId || wrapperElemId === '' || !videoId || videoId === '') return false;
	// set defaults
	showAds = (typeof showAds === 'undefined') ? false : showAds;
	embedWidth = (typeof embedWidth === 'undefined') ? 'auto' : embedWidth;
	autoplay = (typeof autoplay === 'undefined') ? false : autoplay;
	showEndScreen = (typeof showEndScreen === 'undefined') ? false : showEndScreen;

	// verify that the wrapper element exists
	if ($('#' + wrapperElemId).length < 1) {
		console.error('spGetVideoDataAndInsertPlayer: no HTML element with provided wrapperElemId found: ' + wrapperElemId);
		return false;
	}

	// get width of wrapper element to determine player size
	if (!embedWidth || embedWidth === '' || embedWidth === 0 || embedWidth === 'auto') {
		embedWidth = $('#' + wrapperElemId).width();
		if (!embedWidth || embedWidth === 0)
			embedWidth = 640;  // if for any reason, no width could be determined, fall back to default
	}
	var embedHeight = Math.ceil(embedWidth / (16/9));  // when in doubt, rounds to 1px more cause black bars are more acceptible on top/bottom than left/right

	// prepare video info object to hold data about this video
	if (!window.spVideoInfo)
		window.spVideoInfo = {};
	if (!window.spVideoInfo[videoId])
		window.spVideoInfo[videoId] = {};

	// edge case: if we are creating a player for the same video twice (or more times), we don't need to reload video data!
	if (window.spVideoInfo[videoId].videoData) {
		spPrepareVideoData(wrapperElemId, videoId, window.spVideoInfo[videoId].videoData, showAds, embedWidth, embedHeight, autoplay, showEndScreen);
	}else{
		// read video asset data via JSON service
		$.getJSON('/video/video-' + videoId + '.json')
			.done(function(videoData) {
				// store video info for future access
				window.spVideoInfo[videoId].videoData = videoData;
				spPrepareVideoData(wrapperElemId, videoId, window.spVideoInfo[videoId].videoData, showAds, embedWidth, embedHeight, autoplay, showEndScreen);
			});
	}
}

/**
 * 
 * @param {String}
 *            wrapperElemId ID of HTML element where video player should be
 *            generated
 * @param {Int}
 *            videoId ID of video to show
 * @param {Object}
 *            videoData the ServerData of the Video
 * @param {Boolean}
 *            showAds Whether or not to allow ads
 * @param {Int}
 *            embedWidth Width of player in pixels
 * @param {Int}
 *            embedHeight Height of player in pixels
 * @param {Boolean}
 *            autoplay Whether to start video right away (only if supported by
 *            the device!)
 * @param {Boolean}
 *            showEndScreen Whether to show related videos on video-end
 * @return {void}
 */
function spPrepareVideoData(wrapperElemId, videoId, videoData, showAds, embedWidth, embedHeight, autoplay, showEndScreen){
	// determine pre- & postrolls if desired
	window.spVideoInfo[videoId].prerollGateway = '';
	window.spVideoInfo[videoId].postrollGateway = '';
	window.spVideoInfo[videoId].overlayGateway = '';
	$.each(videoData.adinfo.campaigns, function(i, val) {
		if (val.position && val.position !== '' && val.campaignId && val.campaignId !== '') {
			switch (val.position) {
				case 'preroll':
					window.spVideoInfo[videoId].prerollGateway = 'http://ad8.adfarm1.adition.com/banner?sid=' + val.campaignId + '&wpt=X';
					break;
	
				case 'postroll':
					window.spVideoInfo[videoId].postrollGateway = 'http://ad8.adfarm1.adition.com/banner?sid=' + val.campaignId + '&wpt=X';
					break;
	
				case 'video_overlay':
					window.spVideoInfo[videoId].overlayGateway = 'http://ad8.adfarm1.adition.com/banner?sid=' + val.campaignId + '&wpt=X';
					break;
			}
		}
	});
	
	// set language
	window.spVideoInfo[videoId].language = videoData.categoryid == 49 ? 'en' : 'de';
	// set date
	var dateParts = videoData.datum.substr(0, 10).split('-');
	window.spVideoInfo[videoId].formattedDate = window.spVideoInfo[videoId].language == 'en'
		? dateParts[1] + '/' + dateParts[2] + '/' + dateParts[0]
		: dateParts[2] + '.' + dateParts[1] + '.' + dateParts[0];
	
	// if an image is assigned to this video, get its details
	window.spVideoInfo[videoId].poster = '';
	if (videoData.image) {
		// read video image asset data via JSON service
		$.getJSON('/jsapi/assetlist/image/' + videoData.image + '-videoposter16.json')
			.done(function(imageData) {
				// store image info for future access
				window.spVideoInfo[videoId].imageData = imageData;
				if (imageData[videoData.image])
					window.spVideoInfo[videoId].poster = imageData[videoData.image].url;
				spCreateVideoPlayerFramework(wrapperElemId, videoId, showAds, embedWidth, embedHeight, autoplay, showEndScreen);
			});
	} else
		spCreateVideoPlayerFramework(wrapperElemId, videoId, showAds, embedWidth, embedHeight, autoplay, showEndScreen);
}

function spFindNextVideoAndCreateEndscreen(currentVideoId, playerWrapperElem){
	var callback = function(recommendations) {
		var nextVideoId = spFindNextVideo(currentVideoId, recommendations);
		spCreateEndscreen(currentVideoId, nextVideoId, playerWrapperElem);	
	};
	if(window.spVideoInfo[currentVideoId].recommendations)
		callback(window.spVideoInfo[currentVideoId].recommendations);
	else
		$.getJSON('/video/recommendation-' + currentVideoId + '.json').done( function(data) {
			// store recommendation info for future access
			window.spVideoInfo[currentVideoId].recommendations = data.recommendations;
			callback(data.recommendations);
		});
		
}

/** get the first not-played-video */
function spFindNextVideo(currentVideoId, recommendations){
	var res;
	$.each(recommendations, function(i, oid){
		if(!window.spVideoInfo[oid.split("_")[1]]){
			res = oid.split("_")[1];
			return false;// break;
		}
	});
	return res;
}

function spCreateEndscreen(currentVideoId, nextVideoId, playerWrapperElem){
	// read video asset data via JSON service
	$.getJSON('/video/video-' + nextVideoId + '.json')
		.done(function(videoData) {
			// reset video info
			if(!window.spVideoInfo)
				window.spVideoInfo = [];
			window.spVideoInfo[nextVideoId] = {};

			if(!videoData.image) // keine Videos mit pics
				window.spVideoInfo[nextVideoId] = {'error':'no Image -> No Continous Play'};
			if(videoData.displaycategoryid == 130) // Keine UEFA Videos
				window.spVideoInfo[nextVideoId] = {'error':' UEFA Videos -> No Continous Play'};
			if(window.videoIsEmbedded===true && !videoData.embeddable) // not embeddable abfragen
				window.spVideoInfo[nextVideoId] = {'error':'not embeddable -> No Continous Play'};
			if(window.spVideoInfo[nextVideoId].error){
				console.log('video ' + nextVideoId + ' could not played with Continous Play: "' + window.spVideoInfo[nextVideoId].error + '"');
				spFindNextVideoAndCreateEndscreen(currentVideoId, playerWrapperElem);
				return;
			}
			
			window.spVideoInfo[nextVideoId].videoData = videoData;
			var title = spCreateVideoTitle(videoData.thema, videoData.headline);
			var html = 
				  '	<a href="' + videoData.socialUrl + '" target="_top" onclick="return spOpenVideo(this,\'' + nextVideoId + '\')" title="' + title + '" class="recommended-video">\n'
				+ '		<div class="video-pic image-buttons-panel" />'
				+ '		<div class="video-meta" data-nextvideoid="flashvideo_' + nextVideoId + '">\n'
				+ '			NÄCHSTES VIDEO\n'
				+ '			<span class="video-date-time">' + videoData.duration + ' Min.</span>\n'
				+ '			<strong class="clearfix">' + title + '</strong>\n'
				+ '			<div class="video-next-progressbar"><div></div></div>\n'
				+ '		</div>\n'
				+ '	</a>';
			
			var endscreenWrapper = playerWrapperElem.find('.video-end-screen');
			if(endscreenWrapper.length <= 0){
				endscreenWrapper = $('<div class="video-end-screen jw-skin-spon" />');
				playerWrapperElem.append(endscreenWrapper);
			}
			endscreenWrapper.html(html);
			
			// add share buttons from player
			var touchabilityClass = 'jw-'+('ontouchstart' in document.createElement('div') ? '' : 'un')+'touchable';
			playerWrapperElem.find('.video-end-screen .sharebuttons-placeholder').replaceWith(
				$('<div class="jw-skin-spon ' + touchabilityClass + '"><div class="jw-dock"></div></div>')
			);
			playerWrapperElem.find('.video-end-screen .jw-dock').append(playerWrapperElem.find('.jw-dock-right').clone());
			playerWrapperElem.find('.video-end-screen .jw-icon-hd').remove();
			playerWrapperElem.find('.video-end-screen .jw-icon-share, .video-end-screen .jw-shares').addClass('jw-open');
			spAddVideoImageToEndscreen(videoData, playerWrapperElem);
		});
}

function spUpdateVideoMetaData(videoId, wrapperElem){
	var videoInfo = window.spVideoInfo[videoId];
	wrapperElem.closest('.video-player');
}

function spCreateVideoTitle(thema, headline){
	return (thema + ': ' + headline).replace(/\"/g, "");
}

function spAddVideoImageToEndscreen(videoData, playerWrapperElem){
	if(!videoData) {
		console.log("in spAddVideoImage(): videoData empty");
		return false;
	}
	// read video image asset data via JSON service and add to Informations
	$.getJSON('/jsapi/assetlist/image/' + videoData.image + '-videoposter16.json').done(function(imageData) {
			var linktext = spCreateVideoTitle(videoData.thema, videoData.headline);
			// store image info for future access
			window.spVideoInfo[videoData.videoid].imageData = imageData;
			if (imageData[videoData.image]){
				var url = imageData[videoData.image].url;
				window.spVideoInfo[videoData.videoid].poster = url;
				var html = 
					  '<img src="' + url + '" alt="Video &quot;' + linktext + '&quot;" />\n'
					+ '<span class="image-buttons">\n'
					+ '   <img src="/static/sys/v10/buttons/play-trans_37x37.png" width="39" height="39" class="btn-play-video" alt="Video abspielen..." title="Video abspielen..." />\n'
					+ '</span>\n';
				playerWrapperElem.find('.video-end-screen .video-pic').html(html);
			}
		});
}

/**
 * Create the HTML necessary to service as starting point for the video player
 * for a particular video
 * 
 * @param {String}
 *            wrapperElemId ID of HTML element where video player should be
 *            generated
 * @param {Int}
 *            videoId ID of video to show
 * @param {Boolean}
 *            showAds Whether or not to allow ads
 * @param {Int}
 *            embedWidth Width of player in pixels
 * @param {Int}
 *            embedHeight Height of player in pixels
 * @param {Boolean}
 *            autoplay Whether to start video right away (only if supported by
 *            the device!)
 * @param {Boolean}
 *            showEndScreen Whether to show related videos on video-end
 * @return {void}
 */
function spCreateVideoPlayerFramework(wrapperElemId, videoId, showAds, embedWidth, embedHeight, autoplay, showEndScreen) {
	var videoInfo = window.spVideoInfo[videoId];

	var html5PlayerContainer =
		'<div class="videoplayer-placeholder"></div>';

	var videoErrorPlaceholder = 
		'<div class="video-player-error"></div>';

	var startScreenHtml =
		'<div class="video-start-screen">' + 
			(videoInfo.poster !== '' ? '<img class="video-poster" src="' + videoInfo.poster + '" alt=""/>' : '') + 
			'<span class="image-buttons">' + spnetENV_VIDEOPLAYER_PLAYBUTTON_BIG + '</span>' + 
		'</div>';

	// put all player parts into player wrapper element
	var playerWrapperElem = $('#' + wrapperElemId);
	playerWrapperElem
		.addClass('videoplayer-wrapper videoplayer-framework')
		.data('currentVideoId', videoId)   // indicate which video is currently loaded here
		.css({
			width: embedWidth
		})
		.html('')    // empty wrapper before insertion of new framework elements
		.append(
			$('<div/>')
				.addClass('video-elements')
				.data('videoTitle', videoInfo.videoData.thema.trim() + ': ' + videoInfo.videoData.headline.trim())
				.data('videoTeaser', videoInfo.videoData.teaser)
				.data('videoDate', videoInfo.formattedDate)
				.data('videoLanguage', videoInfo.language)
				.data('videoEmbeddable', videoInfo.videoData.embeddable == 'true')
				.data('videoSocialUrl', videoInfo.videoData.socialUrl)
				.data('videoShortUrl', videoInfo.videoData.shortUrl)
				.css({
					width: embedWidth,
					height: embedHeight
				})
				.html(
					html5PlayerContainer +
					videoErrorPlaceholder +
					startScreenHtml
				)
		);

	// append video credit text if necessary
	if (videoInfo.videoData.credit !== '') {
		if (playerWrapperElem.find('.asset-credit').length)
			playerWrapperElem.find('.asset-credit').html(videoInfo.videoData.credit);
		else
			playerWrapperElem.append('<div class="asset-credit">' + videoInfo.videoData.credit + '</div>');
	}
	
	// callback to play the video
	var firstPlay = true;
	playerWrapperElem.find('.video-start-screen').on('click', function() {
		$(this).fadeOut(300).delay(300);
		var wrapperElemId = $(this).parents('.videoplayer-wrapper').first().attr('id');
		if (firstPlay) {
			spStartVideoPlayerInFramework(wrapperElemId, showAds, showEndScreen, false);
			firstPlay = false;
		} else
			spRestartVideo(wrapperElemId);
	});
	if (autoplay)
		playerWrapperElem.find('.video-start-screen').click();
}

/**
 * Starts videoplayer inside HTML framework previously created
 * @param  {String}  wrapperElemId  ID of HTML wrapper element of videoplayer framework
 * @param  {Boolean} showAds        Whether or not to allow ads
 * @param  {Boolean} showEndScreen  Whether to show related videos on video-end
 * @return {void}
 */
function spStartVideoPlayerInFramework(wrapperElemId, showAds, showEndScreen, isFollowupVideo ) {
	if(isFollowupVideo===undefined)isFollowupVideo = false;
	var wrapperElem = $('#' + wrapperElemId);
	var videoId = wrapperElem.data('currentVideoId');
	var videoInfo = window.spVideoInfo[videoId];
	var videoElementsWrapper = wrapperElem.find('.video-elements').first();

	// setup callback function for end of video
	var callbacks = {};
	if (showEndScreen) {
		callbacks.onFinalEnd = function() {
			new spEndScreen(wrapperElemId).spToggleEndScreen();
		};
	} else {
		callbacks.onFinalEnd = function() {
			$('#' + wrapperElemId + ' .video-start-screen').fadeIn(300).delay(300);
		};
	}

	spStartVideo({
		wrapperElemId:		wrapperElemId,
		videoId:			videoId,
		videoFilename:		{
			hq:					videoInfo.videoData.hqfilename,
			sq:					videoInfo.videoData.sqfilename
		},
		poster:				videoInfo.poster,
		prerollGateway:		videoInfo.prerollGateway,
		postrollGateway:	videoInfo.postrollGateway,
		overlayGateway:		videoInfo.overlayGateway,
		allowAds:			showAds && videoInfo.videoData.allowads,
		credit:				videoInfo.videoData.credit,
		displaycat:			videoInfo.videoData.displaycategoryid,
		videocat:			videoInfo.videoData.categoryid,
		server:				videoInfo.videoData.cdnhost,
		trackingsize:		'gross',
		autoplay:			true,  // autoplay always true, because "true autoplay" behaviour is handled in createVideoPlayer() already
		callbacks:			callbacks,
		embedWidth:			videoElementsWrapper.width(),
		embedHeight:		videoElementsWrapper.height(), 
		showEndScreen:		showEndScreen,
		isFollowupVideo:	isFollowupVideo
	});
}

/**
 * Remove videoplayer and the corresponding framework
 * @param  {String}  wrapperElemId  ID of HTML wrapper element of videoplayer framework
 * @return {void}
 */
/* ##### NOTICE ##### This function must be callable from external h5app interface!
 *                    Don't just rename it or change parameters without testing the h5app interface against the new changes!
 */
function spRemoveVideoPlayerWithFramework(wrapperElemId) {
	// check mandatory params
	if (!wrapperElemId || wrapperElemId === '') return false;
	// verify that the wrapper element exists
	var wrapperElem = $('#' + wrapperElemId);
	if (wrapperElem.length < 1) {
		console.error('spRemoveVideoPlayerWithFramework: no HTML element with provided wrapperElemId found: ' + wrapperElemId);
		return false;
	}

	// remove the player itself
	var jwplayerInstance = wrapperElem.find('.jwplayer').data('playerInstance');
	if (jwplayerInstance)
		jwplayerInstance.remove();

	// cleanup HTML changes to wrapper element which were done by the player framework creation process
	wrapperElem
		.removeClass('videoplayer-wrapper videoplayer-framework')
		.removeData('currentVideoId')
		.css({width: ''})
		.html('');
}

/**
 * Main videoplayer function to set up the player with all variables & behaviour like event handling, extra UI elements etc
 * @param  {Object}  config  The configuration object, can hold the following parameters (for defaults, see at start of function):
 *                   {
 *                       wrapperElemId    ID of HTML element wrapping parts (player placeholder, error field, start- & endscreen)
 *                       videoId          ID of video which should be played
 *                       videoFilename
 *                       {
 *                           hq           name of video file to be used for high quality
 *                           sq           name of video file to be used for standard quality
 *                       }
 *                       poster           image to be shown by player at start, when autoplay is off
 *                       prerollGateway   VAST URL for preroll ad
 *                       postrollGateway  VAST URL for postroll ad
 *                       overlayGateway   VAST URL for overlay ad (in-stream)
 *                       overlayStartAt   how many seconds into content video until overlay is shown
 *                       allowAds         whether to show ads
 *                       credit           tracking info
 *                       displaycat       tracking info
 *                       videocat         tracking info
 *                       server           videoserver URL to be used
 *                       trackingsize     parameter to distinguish different player styles (i.e. centerpage vs iframe vs embed etc)
 *                       autoplay         whether to play video on page load (not possible on mobile devices due to hardware restrictions)
 *                       callbacks
 *                       {
 *                           onAdStart    fires at the beginning of each pre/postroll ad
 *                           onAdEnd      fires at the end of each pre/postroll ad
 *                           onVideoEnd   fires at the end of the content video (but before postroll, if there is one)
 *                           onFinalEnd   fires at the end of everything including postroll
 *                       }
 *                       embedWidth       width of player
 *                       embedHeight      height of player
 *                   }
 * @return {void}
 */
function spStartVideo(config) {
	// set config param defaults
	var defaults = {
		prerollGateway:		'',
		postrollGateway:	'',
		overlayGateway:		'',
		overlayStartAt:		7,
		allowAds:			false,
		autoplay:			true,
		callbacks: 			{},
		embedWidth:			640,
		embedHeight:		360,
		showEndScreen:		true,
		isFollowupVideo:	false
	};
	config = $.extend({}, defaults, config);
	
	// make sure we have a wrapper ID
	if (!config.wrapperElemId || config.wrapperElemId === '') return false;
	
	if(!window.spVideoInfo)
		window.spVideoInfo = [];
	if(!window.spVideoInfo[config.videoId])
		window.spVideoInfo[config.videoId] = {};
	
	
	// special hash param switches to affect ads & statistics
	var hashParams = (typeof spGetHashParams === 'function' ? spGetHashParams() : []);
	// extra ref parameter for statistics
	var refParam = hashParams.ref !== null ? hashParams.ref : '';

	// deactivating ads, also possible through ADI
	if (hashParams["adition.keinevideowerbung"] == "1" || (typeof ADI == 'object' && ADI.disabled())) {
		config.prerollGateway	= "";
		config.postrollGateway	= "";
		config.overlayGateway	= "";
	}
	// setting extra parameter "videobelegung"
	if (hashParams["adition.videobelegung"] && hashParams["adition.videobelegung"] !== '') {
		if (config.prerollGateway)	config.prerollGateway	+= '&prf[videobelegung]=' + hashVideoBelegung;
		if (config.postrollGateway)	config.postrollGateway	+= '&prf[videobelegung]=' + hashVideoBelegung;
		if (config.overlayGateway)	config.overlayGateway	+= '&prf[videobelegung]=' + hashVideoBelegung;
	}

	// get ABD (ad-block detection) status - if function is not defined we're likely in an Iframe, so let's use the SPON interface in that case
	var abd = (!window.spGetAbdStatus && spInterface) ? spInterface('getAbdStatus') : spGetAbdStatus();

	var wrapperElem = $('#' + config.wrapperElemId);
	if (!wrapperElem.length) return false;   // wrapper element not found
	var html5PlayerWrapperId = wrapperElem.find('.videoplayer-placeholder').attr('id');
	if (!html5PlayerWrapperId) {
		// assign an ID to player wrapper element, because JW player needs an ID for setup
		var playerIdCount = 1;
		// make sure the ID doesn't exist yet
		while ($('#spVideoplayer-' + playerIdCount).length)
			playerIdCount++;
		html5PlayerWrapperId = 'spVideoplayer-' + playerIdCount;
		wrapperElem.find('.videoplayer-placeholder').attr('id', html5PlayerWrapperId);
	}

	
	if ((spUA.isIDevice() || spUA.isAndroid()) && parseInt(config.videoId) < spMinVideoIdForMobileDevices) {
		// this video is limited to desktop
		wrapperElem.find('.video-player-error')
			.html('Dieses Video steht für iOS- & Android-Geräte nicht zur Verfügung.')
			.show();
	} else if (!document.createElement('video').canPlayType && !isValidPluginVersion()) {
		// no HTML5 video possible & Flash version not sufficient for fallback play
		var fpversion = swfobject.getFlashPlayerVersion();
		wrapperElem.find('.video-player-error')
			.html('Dieses Video benötigt mindestens Version ' + sp_webcfg_global.flash.pluginversion.major + '.' + sp_webcfg_global.flash.pluginversion.minor + ' des Flash-Plugins. Gefundene Version: ' + fpversion.major + '.' + fpversion.minor + '.' + fpversion.release + ' ' + spnetENV_NOFLASHPLAYER_LINK)
			.show();
	} else {
		// make sure a filname is provided (note: JW Player can only play videofiles directly, no video ID HTML redirect possible)
		if (config.videoFilename === null || config.videoFilename === '') return;

		// set generic player options
		jwplayer.key = spnetENV_JWPLAYER_KEY;
		var jwplayerOptions = {
			flashplayer:	'/static/flash/flashvideo/jwplayer7.flash.swf',
			primary:		'flash',
			image:			config.poster,
			width:			config.embedWidth,
			height:			config.embedHeight,
			autostart:		config.autoplay,
			ga:				{},    // enable Google Analytics, uses the GA JS already on the page
			skin: {
				name:			'spon'
			}
		};

		// read cookie for HQ/SQ
		var qualityCookieName = 'sponVideoplayerQuality';
		var playerQuality = 'hq';
		if ($.cookie(qualityCookieName))
			playerQuality = $.cookie(qualityCookieName);
		else
			$.cookie(qualityCookieName, playerQuality, { expires: 365, path: '/' });

		// set video sources
		if (typeof config.videoFilename == 'object') {
			jwplayerOptions.sources = [];
			// check all quality levels that we're expecting
			$.each(['sq', 'hq'], function(i, quality) {
				if (config.videoFilename[quality] !== '') {
					var sourceInfo = {file: config.server + config.videoFilename[quality]};
					// set this quality as default if quality read from cookie matches
					if (playerQuality == quality)
						sourceInfo['default'] = true;
					jwplayerOptions.sources.push(sourceInfo);
				}
			});
		} else {
			// legacy: videoFilename is a single string
			jwplayerOptions.file = config.server + config.videoFilename;
		}

		if (config.showEndScreen) {
			var endScreen = new spEndScreen(config.wrapperElemId);
			wrapperElem.data("endScreen", endScreen);

			if (config.showEndScreen && spEndScreen.allowContinousPlay()) {
				// load endscreen asyncronously, cause it's not needed for the beginning of video anyway
				setTimeout(function(){
					spFindNextVideoAndCreateEndscreen(config.videoId, wrapperElem);
					},300);
				
				if(config.isFollowupVideo) // Zeige vor dem 2. Video das postroll statt dem Preroll.
					config.prerollGateway = config.postrollGateway;
				config.postrollGateway = '';
			}
		}
			
		
		if (config.allowAds && (config.prerollGateway !== '' || config.postrollGateway !== '' || config.overlayGateway !== '')) {
			// set player options for VAST ads
			jwplayerOptions.advertising = {
				client:		'vast',
				admessage:	spnetENV_JWPLAYER_ADMESSAGE,
				schedule:	{}
			};
			if (config.prerollGateway !== '')
				jwplayerOptions.advertising.schedule.preroll	= { offset: 'pre',  tag: config.prerollGateway };
			if (config.postrollGateway !== '')
				jwplayerOptions.advertising.schedule.postroll	= { offset: 'post', tag: config.postrollGateway };
			if (config.overlayGateway !== '')
				jwplayerOptions.advertising.schedule.overlay	= { offset: config.overlayStartAt, type: 'nonlinear', tag: config.overlayGateway };
		}

		// instantiate player
		var jwplayerInstance = jwplayer(html5PlayerWrapperId).setup(jwplayerOptions);

		jwplayerInstance.on('ready', function() {
			var playerElem = $('#' + this.id);

			// store player instance from JW Player setup for future reference (i.e. removing player)
			playerElem.data('playerInstance', jwplayerInstance);

			// detect if we're on a touch device
			var touchabilityClass = 'jw-'+('ontouchstart' in document.createElement('div') ? '' : 'un')+'touchable';
			playerElem.addClass(touchabilityClass);

			// detect if we're inside an iframe
			var isInIframe = window.parent != window.self;

			// get video data
			var videoData = playerElem.parents('.video-elements').data();

			// move duration display over to left group
			playerElem.find('.jw-text-duration').detach().appendTo(playerElem.find('.jw-controlbar-left-group'));

			// hover handler for icons, cause JW Player has a bug when keeping controls open (won't happen on hover for dock icons)
			playerElem.on('mouseenter', '.jw-icon', function() {
				playerElem.addClass('jw-flag-icon-hover');
			});
			playerElem.on('mouseleave', '.jw-icon', function() {
				playerElem.removeClass('jw-flag-icon-hover');
			});

			// add left dock with info button & addtional text
			playerElem.find('.jw-dock').append('<div class="jw-dock-left jw-reset"></div>');
			playerElem.find('.jw-dock-left').append('<div class="jw-icon jw-icon-info jw-button-color"></div>');

			var infoWindow = '<div class="jw-infowindow">'+
								'<a class="jw-spon-logo" href="/"'+(isInIframe ? ' target="_blank"' : '')+'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8CAIAAABZ6yszAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAdJREFUeNrsmL9PU1EUxymKAw7UwcVE2sWFaOgfYEKdxaSDiyxtR3WgmzK13WDr5ki7wKADiTpbEpx0aKOyuLSaOOhga6IhYcBPe/R4Oe+9UgqJNLnfvDTv3nt+3O/5ce+D2NOJ+MQ4Y3JizOEJeAKegCfgCXgCnoAn4Al4Av8P5834SuZ2PHVDhx8rT/Y73bnSYyPGJEu8uEvt6kYitxT08av1qVXdmIrPXCvc18lO492XrZfGgovd0moytzSdnJXht/oOT4gcf9Do8yb34OAwcMP8QRjYk1mqpxdDJb/Wd5DElJnHXZRxwBKKOvxQWnW3qs+hEpL4tWubu+U1fnmfmb/eY7/9er/7oxfL9mfeu833PeHsvV6cymt/wl/bJNLukHeE1biYYlLnxZ1REb+aUjzKBsLDH9oDhJb08asz2+lF4idLvDcKK26iVesnBJwh70GvTJp5o+L6FZuD6ifYA26Nbt+6c8IOI4Q4pmGGnB/BbwiBhVfP3eGz2CV9p6sup29eiM8caVeNkH2SpvOoRy1FzR+bwABMJ67yyPvb/MMzd4xGhepf6mubUqNkX7oiCpRBaNUySUo5OueKj4ZUccGuxEh4Ey/UX9w9+B51MANaSvpp8O4VmMIgZoePKFtEhSeqMk1Yx/4mPnSRuRfHkBfK8BdZ1Hyo06BfsxR+kTULK3JhKU6xU40pHDWd+2RkxMz/Ri8mZ/XzQzuVr6Opv0cn161cLmcEsXH/5+7Y41zUQjqdTiaTvbu90zFL8Xh8b2/vVNyPYMqoTAaXK5VKo9HIZDJw2NraarVavKtAKpWq1+uIGbaocD4UCgUZQpsh6q4Yq71P9E4HAZlBIJfLmT1Uq1XEMBjvA5ne13urhV90WR3EDzUjgQP0S6WS7lWtGzF86BB5xELtqynAnhALcjBR0w3gVGIUngGEkDDm4FOr1YrFolRU74Oi3Z6fnzd5aPVxZAEEC7Lb7a6vr7vbFWtBSVGnQCIJsHWTdIHoKDGs5/N5OBhbowGzzWaTMFGcJ/2YSyQSobzJu1S/mxZ+iZxLbDRIS9T7kF6KOlQoEKqA8LlFOHksT6a0yuVyNps9oquGsywlBIeoPGgTm0K1fw9ooUflwfQM8nAQ6yfhgAXJAzUcykFcBA/AQwRoViKBhAm2hCe0PaR+aHFjdwQQIK2l4QvBnkKSR3c3vDNPtWjuggcozJeXlwd41bNvQIaVAzKcEAOaflAYSJ8ciLjElpzubtPIZaQ3kdsSGjkYygHPJLr86jEgd4jQkI5k1bBCzL3syL9olfowGYiF0kBHClEqz429FigWg5UmZZbsw1QwQFeyhyLqOgzeIRJHsW+CJbr+I9DDw8PDw8PDw8PDY/zxW4ABADOl37fKzRkIAAAAAElFTkSuQmCC"/></a>'+
								'<div class="jw-info-title">'+videoData.videoTitle+'</div>'+
								'<div class="jw-info-text">';

			if (videoData.videoTeaser && videoData.videoTeaser !== '')
				infoWindow +=		'<p>'+videoData.videoTeaser+'</p>';

			if (videoData.videoArticleUrl && videoData.videoArticleUrl !== '') {
				if($('#video-embed-player').length) {
					infoWindow += '<a href="http://www.spiegel.de'+videoData.videoArticleUrl+'" target="_blank">Zum Artikel</a>';	
				}
				else {
					infoWindow += '<a href="'+videoData.videoArticleUrl+'" target="_top">Zum Artikel</a>';
				}
			}
				

			infoWindow +=			'<span class="jw-info-date">'+videoData.videoDate+'</span>'+
								'</div>'+
							'</div>';

			playerElem.find('.jw-dock-left').append(infoWindow);

			// click handler for info window
			playerElem.on('click touchstart', '.jw-icon-info', function() {
				$(this).add(playerElem.find('.jw-infowindow')).toggleClass('jw-open');
				playerElem.toggleClass('jw-flag-infowindow-open');
			});

			// add separate area for right dock
			playerElem.find('.jw-dock').append('<div class="jw-dock-right jw-reset"></div>');

			// add share buttons
			playerElem.find('.jw-dock-right').append('<div class="jw-icon jw-icon-share jw-button-color"></div>');
			playerElem.find('.jw-dock-right').append('<div class="jw-shares"></div>');
			playerElem.find('.jw-shares').append('<div class="jw-icon jw-icon-share-facebook jw-button-color"></div>');
			playerElem.find('.jw-shares').append('<div class="jw-icon jw-icon-share-twitter jw-button-color"></div>');
			playerElem.find('.jw-shares').append('<div class="jw-icon jw-icon-share-googleplus jw-button-color"></div>');
			playerElem.find('.jw-shares').append('<div class="jw-icon jw-icon-share-mail jw-button-color"></div>');
			playerElem.find('.jw-shares').append('<div class="jw-icon jw-icon-share-link jw-button-color"></div>');

			// copy share buttons to endscreen
			playerElem.parent().find('.video-end-screen .sharebuttons-placeholder').replaceWith(
				$('<div class="jw-skin-spon ' + touchabilityClass + '"><div class="jw-dock"></div></div>')
			);
			playerElem.parent().find('.video-end-screen .jw-dock').append(playerElem.find('.jw-dock-right').clone());
			playerElem.parent().find('.video-end-screen .jw-icon-share, .video-end-screen .jw-shares').addClass('jw-open');

			// click handlers for share buttons
			playerElem.on('click touchstart', '.jw-icon-share', function() {
				$(this).add(playerElem.find('.jw-shares')).toggleClass('jw-open');
			});
			
			// handler for actual shares has to be one element up, so that share buttons in endscreen are detected as well
			playerElem.parent().on('click touchstart', '.jw-shares .jw-icon', function() {
				// social media shares just open their respective share URLs inside new popup
				if ($(this).hasClass('jw-icon-share-facebook'))
					window.open('https://www.facebook.com/sharer/sharer.php?u='+videoData.videoSocialUrl+'&display=popup&ref=plugin&src=share_button', 'spon-share', 'top=150,left=200,toolbar=0,status=0,width=670,height=335');

				if ($(this).hasClass('jw-icon-share-twitter'))
					window.open('https://twitter.com/intent/tweet?original_referer='+videoData.videoSocialUrl+'&ref_src=twsrc%5Etfw&text='+encodeURIComponent(videoData.videoTitle)+'&tw_p=tweetbutton&url='+videoData.videoShortUrl+'&via=SPIEGELONLINE', 'spon-share', 'top=150,left=200,toolbar=0,status=0,width=550,height=420');

				if ($(this).hasClass('jw-icon-share-googleplus'))
					window.open('https://plus.google.com/share?url='+videoData.videoSocialUrl+'&hl='+videoData.videoLanguage, 'spon-share', 'top=150,left=200,toolbar=0,status=0,width=550,height=420');

				// mail & embed/URL shares may have to use parent methods if inside iframe (inline player or framework player inside iframe)
				if ($(this).hasClass('jw-icon-share-mail'))
					if ($('#video-inline-player').length || ($(this).parents('.videoplayer-framework').length && isInIframe))
						parent.spOpenSendForm('de', 'video', null, {videoId: config.videoId});
					else
						spOpenSendForm('de', 'video');

				if ($(this).hasClass('jw-icon-share-link')) {
					if ($('#video-inline-player').length || ($(this).parents('.videoplayer-framework').length && isInIframe))
						parent.spOpenEmbedForm(config.videoId, videoData.videoEmbeddable);
					else
						spOpenEmbedForm(config.videoId, videoData.videoEmbeddable);
				}
			});

			// flags to make sure that tracking is happening only once
			playerElem.data({
				startTracked:	false,
				endTracked:		false
			});
			
		});

		
		
		// define function for Netmind tracking (depends on whether we're in an Iframe or on a normal page)
		var doNmTracking = function(trackingParams) {

			// modify default tracking params by the ones passed to this function
			trackingParams = $.extend({
				'sp.atyp':				33,
				'sp.videocredit':		config.credit,
				'sp.df':				config.trackingsize,
				'sp.videodisplaycatid':	config.displaycat,
				'sp.videocatid':		config.videocat,
				'sp.aid':				config.videoId,
				'sp.followupVideo':		config.isFollowupVideo,
				'sp.channel':			781
			}, trackingParams);

			if (!window.spNmAjax && spInterface)
				spInterface('reCountPage', {newParamsOnly: true, params: trackingParams});
			else
				spNmAjax(trackingParams);
		};

		var doTrackEnd = function() {
			doNmTracking({
				'sp.site':	1001,
				'sp.event':	'end'
			});
			if (typeof config.callbacks.onVideoEnd === 'function')
				config.callbacks.onVideoEnd();
		};

		// callback for start of video
		jwplayerInstance.on('play', function() {
			var playerElem = $('#' + this.id);

			// move HD button over to dock, each time a new video plays - because JW Player puts it back into the controlbar on each new video
			playerElem.find('.jw-icon-hd').detach().prependTo(playerElem.find('.jw-dock-right'));

			// only track once! onPlay fires every time the player state switches to PLAYING (= also when unpausing the video)
			// onPlay does NOT fire on preroll - howevery this is desired, cause we want to track the actual content video
			if (!playerElem.data('startTracked')) {
				playerElem.data('startTracked', true);

				if (typeof(ga) == "function") 
					ga('send', 'event', 'video', 'continous:' + config.isFollowupVideo?'followupVideo':'firstVideo',  config.videoId);
				else 
					console.log('ga not a function');
				if(!config.isFollowupVideo){	
					doNmTracking({
						'ref':		refParam,
						'sp.site':	1,
						'sp.abd':	abd
					});
				}

				// also track usage of SQ quality
				if (playerQuality == 'sq') {
					doNmTracking({
						'sp.site':			1001,
						'sp.videoquality':	'sq'
					});
				}
			}
		});

		// callback for end of video (fires AFTER end of postroll, if there is one!)
		jwplayerInstance.on('complete', function() {
			var playerElem = $('#' + this.id);

			// if video end hasn't been tracked before (= if there is no postroll), track it now
			if (!playerElem.data('endTracked'))
				doTrackEnd();

			if (typeof config.callbacks.onFinalEnd === 'function')
				config.callbacks.onFinalEnd();
		});

		jwplayerInstance.on('adImpression', function(e) {
			var playerElem = $('#' + this.id);
			
			// always hide the dock & shares
			playerElem.find('.jw-icon-share, .jw-shares').removeClass('jw-open-forced');
			playerElem.find('.jw-dock, .jw-controlbar').removeAttr('style');

			// if we're at postroll start: track main content video end, because onComplete fires after postroll
			if (e.adposition == 'post') {
				// if endscreen is present, hide share buttons cause they don't really make sense after a postroll
				wrapperElem.find('.video-end-screen').addClass('jw-after-postroll');
				// make sure we don't track the video-end again on completion of postroll (which is when the JW Player "onComplete" fires)
				playerElem.data('endTracked', true);
				doTrackEnd();
			}

			if (typeof config.callbacks.onAdStart === 'function')
				config.callbacks.onAdStart();
		});

		jwplayerInstance.on('adComplete', function() {
			if (typeof config.callbacks.onAdEnd === 'function')
				config.callbacks.onAdEnd();
		});

		jwplayerInstance.on('time', function(player) {
			var playerElem = $('#' + this.id);

			// force display of controls, dock & shares when in last part of video
			if (player.position > player.duration - 3) {
				playerElem.find('.jw-icon-share, .jw-shares').addClass('jw-open-forced');
				playerElem.find('.jw-dock, .jw-controlbar').show();
			} else {
				playerElem.find('.jw-icon-share, .jw-shares').removeClass('jw-open-forced');
				playerElem.find('.jw-dock, .jw-controlbar').removeAttr('style');
			}

			if (config.showEndScreen && player.position > player.duration - 0.5) {
				$('#' + config.wrapperElemId + ' .jwplayer').data('playerInstance').pause();
				// if video end hasn't been tracked before (= if there is no postroll), track it now
				if (!playerElem.data('endTracked'))
					doTrackEnd();
				endScreen.spToggleEndScreen();
				if (typeof config.callbacks.onComplete === 'function')
					config.callbacks.onFinalEnd();
			}
		});

		jwplayerInstance.on('levelsChanged', function(e) {
			// track a change in quality when HQ/SQ is clicked
			var playerQuality = e.currentQuality == 1 ? 'hq' : 'sq';
			$.cookie(qualityCookieName, playerQuality, { expires: 365, path: '/' });
			// when switching to SQ we have to track explicitly, because the JW "onPlay" 1st tracking point was already fired
			if (playerQuality == 'sq') {
				doNmTracking({
					'sp.site': 1001,
					'sp.videoquality': 'sq'
				});
			}
		});

		// callback for errors, to display user-friendly info
		jwplayerInstance.on('error setupError', function(e) {
			$('#' + this.id).hide();

			var hasGeoBlocking = $('.video-player').hasClass('video-player-geoblocking');
			var errorText = hasGeoBlocking
				? 'Dieses Video ist leider an Ihrem Standort nicht verfügbar.'
				: 'Leider steht für dieses Video keine auf Ihrem Gerät abspielbare Datei zur Verfügung.';

			wrapperElem.find('.video-player-error')
				.html(errorText)
				.show();
		});
		// click handler for video end screen "replay" button (handler on parent, watching for end screen selector,
		// cause in case of video component player, where end screen is loaded asynchronously)
		wrapperElem.on('click touchstart', '.watch-video-again', function(e) {
			e.preventDefault();
			endScreen.hideEndScreen();
			spRestartVideo(config.wrapperElemId);
		});
	}

}


function spResetJwPlayerVars(wrapperElemId) {
	// reset tracking flags
	$('#' + wrapperElemId + ' .jwplayer').data({
		startTracked:	false,
		endTracked:		false
	});
	// also make sure that endscreen dock items are visible again
	$('#' + wrapperElemId + ' .video-end-screen').removeClass('jw-after-postroll');
}

function spRestartVideo(wrapperElemId) {
	// make sure IVW reload is also possible when we're inside an Iframe
	var doIvwReload = function() {
		if (!window.spIvwReload && spInterface)
			spInterface('reCountPage', {countNM: false, countIVW: true});
		else
			spIvwReload();
	};

	// check if there's a JW Player instance
	if (typeof jwplayer === 'function') {
		// restart the player inside provided wrapper element
		spResetJwPlayerVars(wrapperElemId);
		var player = $('#' + wrapperElemId + ' .jwplayer').data('playerInstance');
		player.seek(0);
		player.play();
		
		doIvwReload();
	} else {
		// no JW Player & no flash player = other (maybe legacy) video methods - to be sure we do a full page reload in this instance!
		document.location.reload();
	}

	return false;
}

///Class spEndScreen
	/**
	 * Alle Methoden um einen Endscreen anzuzeigen.
	 */
	var spEndScreen = function(wrapperElemId) {
		var instance = this;
		this.wrapperElemId = wrapperElemId;
		this.isHidden = true;
		this.wrapperElem = $('#' + wrapperElemId);
		
		this.getEndscreenElem = function(){
			// support legacy function call without specific ID
			if (!instance.wrapperElemId || instance.wrapperElemId === '')
				return $('.video-end-screen').first();
			else
				return $('#' + instance.wrapperElemId + ' .video-end-screen');
		};
		
		this.startNextVideo = function(nextvideoOid){
			if (nextvideoOid && nextvideoOid !== ''){
				var nextVideoId = nextvideoOid.split("_")[1];
				this.wrapperElem.data('currentVideoId', nextVideoId);
				spGetVideoDataAndInsertPlayer(this.wrapperElemId, nextVideoId, true, 'auto', true, true);
				//spStartVideoPlayerInFramework(this.wrapperElemId, true, true, true);
			}
		};

		this.animateProgressbar = function (element, waitTime){
			element.find('div').width('0px');
			element.find('div').animate({ width: element.width()}, waitTime, 'linear');
		};
		
		this.animatePreviewImage = function (endscreenElem){
			var videopicWraper = endscreenElem.find('.video-pic');
			var videopic = videopicWraper.children('img').first().clone();
			videopic.addClass('video-end-screen-animation-image');
			videopic.css({position:'absolute', width:videopicWraper.width(), height: videopicWraper.height(), top:'0px'});
			videopicWraper.append(videopic);
			videopic.animate({ 
				width: instance.wrapperElem.width(), 
				height: instance.wrapperElem.height(),
				left:'-60px',
				top:'-25px'}, 500, 'linear');
		};
		
		/** EndScreen anzeigen && Video erneut abspielen*/
		this.spToggleEndScreen = function () {
			$('.video-end-screen-animation-image').remove();
			var endscreenElem = instance.getEndscreenElem();
			/**waitTime before next video*/
			var waitTime = 5000;
			
			if(!endscreenElem.is(':visible') ){
				instance.showEndScreen();
				if(spEndScreen.allowContinousPlay()){
					var nextvideoOid = instance.wrapperElem.find('.video-end-screen .video-meta').attr('data-nextvideoid');
					if(nextvideoOid){
						instance.animateProgressbar(endscreenElem.find('.video-next-progressbar'), waitTime);
						setTimeout(function(){
							setTimeout(function(){
								if(!instance.isHidden){
									instance.startNextVideo(nextvideoOid, instance.wrapperElem, instance.wrapperElemId);
									instance.hideEndScreen(endscreenElem);
								}
							},500);
							instance.animatePreviewImage(endscreenElem);
							
						}, waitTime);
					}
				}
			}else{
				instance.hideEndScreen();
			}
		};
		
		this.showEndScreen = function() {
			instance.isHidden = false;
			var endscreenElem = instance.getEndscreenElem();
			endscreenElem.fadeToggle(300);
			instance.wrapperElem.find('.jwplayer').addClass('jw-state-endscreen');
			instance.wrapperElem.find('.jw-icon.jw-icon-playback').on('click touchstart', instance.restartVideoCallback);
		};

		this.hideEndScreen = function() {
			instance.isHidden = true;
			var endscreenElem = instance.getEndscreenElem();
			endscreenElem.fadeToggle(300).delay(300);
			instance.wrapperElem.find('.jwplayer').removeClass('jw-state-endscreen');
			instance.wrapperElem.find('.jw-icon.jw-icon-playback').off('click touchstart', instance.restartVideoCallback);
			$('.video-end-screen-animation-image').remove();
		};

		this.restartVideoCallback = function(e) {
			spRestartVideo(instance.wrapperElemId);
			instance.hideEndScreen();
		};

	};	
	//static variables and functions
	/**
	 * @returns true if ContinousPlay is activated
	 */
	spEndScreen.allowContinousPlay = function(){
		return (sp_webcfg_global.videoContinousPlay === undefined ||sp_webcfg_global.videoContinousPlay === true);
	};
/// end Class spEndScreen


// Embedding-Dialog
function spConfigureVideoEmbed(videoId, action){
	var aspectRatio		= 16 / 9;
	var userWidthValue	= 640;
	var userHeightValue	= Math.ceil(userWidthValue / aspectRatio + 1);   // add 1 to make sure video border is shown on all sides
	var userWidthElem	= $('#spVideoEmbedSourceWidth');
	var userHeightElem	= $('#spVideoEmbedSourceHeight');
	var errorElem		= $('#spVideoEmbedErrorMessage');
	var hasError		= {
		width:				false,
		height:				false
	};
	var limits			= {
		width: {
			min:			400,
			max:			1000
		},
		height: {
			min:			226,
			max:			564
		}
	};

	switch (action) {
		case 'breite':
			userWidthValue = userWidthElem.val().trim();
			if (!userWidthValue.match(/^[0-9]{3,4}$/) || userWidthValue < limits.width.min || userWidthValue > limits.width.max) {
				hasError.width = true;
				errorElem.html('Ungültiger Wert!\nBitte geben Sie eine Breite zwischen '+limits.width.min+' und '+limits.width.max+' an.');
			} else {
				hasError.width = false;
				// calc height from provided width
				userHeightValue = Math.ceil(userWidthValue / aspectRatio + 1);
			}
			break;

		case 'hoehe':
			userHeightValue = userHeightElem.val().trim();
			if (!userHeightValue.match(/^[0-9]{3}$/) || userHeightValue < limits.height.min || userHeightValue > limits.height.max) {
				hasError.height = true;
				errorElem.html('Ungültiger Wert!\nBitte geben Sie eine Höhe zwischen '+limits.height.min+' und '+limits.height.max+' an.');
			} else {
				hasError.height = false;
				// calc width from provided height
				userWidthValue = Math.floor((userHeightValue - 1) * aspectRatio);
			}
			break;
	}

	// set input field values & state
	userWidthElem
		.toggleClass('error', hasError.width)
		.val(userWidthValue);
	userHeightElem
		.toggleClass('error', hasError.height)
		.val(userHeightValue);
	errorElem.toggle(hasError.width || hasError.height);

	// set embed code, if no errors encountered (otherwise empty)
	var embedCode = (hasError.width || hasError.height) ? '' : '<iframe width="' + userWidthValue + '" height="' + userHeightValue + '" frameborder="0" scrolling="no" border="0" allowfullscreen src="http://www.spiegel.de/video/embedurl/video-' + videoId + '-' + userWidthValue + '_000_fff.html"></iframe>';
	$('#spVideoEmbedSourceArea').val(embedCode);
}

function spOpenEmbedForm(assetId, isEmbeddable){
	spOpenPopupLayer2(
		'js-'+(isEmbeddable ? 'embed' : 'shorturl')+'-video-popup-layer',
		null,
		(isEmbeddable ? 'Einbetten & ' : '') + 'Kurz-URL',
		'/video/embeddialog-' + assetId + '.html' + (isEmbeddable ? '#spAllowEmbed=true' : '')
	);

	var offset = 0;
	if( typeof( window.pageYOffset ) == 'number' ) {
		offset = window.pageYOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		offset = document.body.scrollTop;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
		offset = document.documentElement.scrollTop;
	}
	if (offset > 500) scrollTo(0,0);
}

function spDetectVideoContext(action){
	var getSendFormPopup = document.getElementById('send-form-popup');
	var SendFormPopupLocation = document.location.href.indexOf("videoversand");
	if(SendFormPopupLocation >= 0 || action == 'byFunction'){
		if(getSendFormPopup.className != 'spSendVideoFormPopup'){
			getSendFormPopup.className = 'spSendVideoFormPopup';
		}
	}
}

function spIpadRemoveOldVideolinks(){
	if ( spUA.isIDevice() || spUA.isAndroid() ){
		var css = document.styleSheets[0];
		var rule = ".js-no-ipad-video {display:none;}";
		css.insertRule(rule, css.cssRules.length);
	}
}

function spShowInlineVideo(pane) {
	var teasercontent 	= pane.find(".spPanoPlayerTeaser");
	var pic     		= pane.find(".spPanoPlayerTeaserPic");
	var credit  		= pane.find(".asset-credit");
	var newpane = $('<iframe>')
					.attr("src","/video/video-" + pane.attr("data-assetid") + "-inline.html")
					.attr("frameborder","0")
					.attr("scrolling","no")
					.attr("allowfullscreen", "")
					.attr("width", pic.width())
					.attr("height", pic.height() + credit.height());

	pane.append(newpane);
	teasercontent.hide();
}

function spHideInlineVideo(videoid) {
	var pane = 		$("#spPanoPlayerInline-"+videoid);
	pane.find(".spPanoPlayerTeaser").show();
	pane.find("iframe").remove();
}




$(document).ready(function(){
	if( (spUA.isIDevice() || spUA.isAndroid()) && $('body').attr('id') && $('body').attr('id').toLowerCase().match('video') !== null){
		var bbtn = document.getElementsByClassName('spIEsixPng'); // get BigButton // ACHTUNG :: .spIEsixPng gibt es bald nicht mehr
		for(i=0; i<bbtn.length; i++){
		   if(bbtn[i].width == 113 && bbtn[i].height == 50 && bbtn[i].style.display != 'block'){
		        bbtn[i].style.display='block';
		    }
		}
		var sbtn = document.getElementsByClassName('btn-play-video'); // get SmallButton
		for(i=0; i<sbtn.length; i++){
		   if(sbtn[i].style.display != 'block'){
		        sbtn[i].style.display='block';
		    }
		}
	}
});

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();function spSynchDatumBis(FORM)
{
    if (FORM.suchzeitraum.selectedIndex == 0)
    {
        // Nichts tun
    }
    else
    {                            // - Bis-Datum aus Rollo-Wert errechnen
        FORM.spSearchFromDate.value = getDatumFromKey(FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value);
        FORM.spSearchToDate.value = getDatumBisKey(FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value);
        if (FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value == "all")
        {
            FORM.spSearchToDate.value = "";
        }
    }
}

function spSynchDatumBisInternational(FORM)
{
    if (FORM.suchzeitraum.selectedIndex == 0)
    {
        // Nichts tun
    }
    else
    {                            // - Bis-Datum aus Rollo-Wert errechnen
        FORM.spSearchFromDate.value = getDatumFromKeyInternational(FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value);
        FORM.spSearchToDate.value = getDatumBisKeyInternational(FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value);
        if (FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value == "all")
        {
            FORM.spSearchToDate.value = "";
        }
    }
}


function getDatumBisKey(key)
{
    var ret = "";

    switch (key)
            {
        case ""           : ret = "";             break;
        case "all"      : ret = "";             break;
        case "2005"      : ret = "31.12.2004";     break;
        case "2000"       : ret = "31.12.1999";     break;
        case "1995"     : ret = "31.12.1994";     break;
        case "1990"     : ret = "31.12.1989";     break;
        case "1980"     : ret = "31.12.1979";     break;
        case "1970"     : ret = "31.12.1969";     break;
        case "1960"     : ret = "31.12.1959";     break;
        default           : ret = "";             break; // tt.mm.jjjj
    }

    return ret;
}

function getDatumBisKeyInternational(key)
{
    var ret = "";

    switch (key)
            {
        case ""           : ret = "";             break;
        case "all"      : ret = "";             break;
        case "2005"      : ret = "12/31/2004";     break;
        case "2000"       : ret = "12/31/1999";     break;
        case "1995"     : ret = "12/31/1994";     break;
        case "1990"     : ret = "12/31/1989";     break;
        case "1980"     : ret = "12/31/1979";     break;
        case "1970"     : ret = "12/31/1969";     break;
        case "1960"     : ret = "12/31/1959";     break;
        default           : ret = "";             break; // tt.mm.jjjj
    }

    return ret;
}

function getDatumFromKey(key)
{
    var ret = "";

    switch (key)
            {
        case ""           : ret = "";             break;
        case "week"   : ret = datum7Tage;     break;
        case "month"   : ret = datum30Tage;     break;
        case "year"      : ret = datum1Jahr;     break;
        case "ab2005"      : ret = "01.01.2005";     break;
        default           : ret = "";         break; // tt.mm.jjjj
    }

    return ret;
}

function getDatumFromKeyInternational(key)
{
    var ret = "";

    switch (key)
            {
        case ""           : ret = "";             break;
        case "week"   : ret = datum7TageInternational;     break;
        case "month"   : ret = datum30TageInternational;     break;
        case "year"      : ret = datum1JahrInternational;     break;
        case "ab2005"      : ret = "01/01/2005";     break;
        default           : ret = "";         break; // tt.mm.jjjj
    }

    return ret;
}

//-------------------------------------
//value-Werte fuer DATUM_ROLLO-Optionen
var datumHeute = "";
var datumGestern = "";
var datum7Tage = "";
var datum7TageInternational = "";
var datum30Tage = "";
var datum30TageInternational = "";
var datum90Tage = "";
var datum1Jahr = "";
var datum1JahrInternational = "";
var datum2Jahre = "";
var datum3Jahre = "";

makeValues_Datum_Rollo();
//-------------------------------------


function makeValues_Datum_Rollo()
{
    //      --- option-value-Werte fuer Rollo vb bzw. DATUM_ROLLO
    var dateNow = new Date();                  // Datum-heute, Typ Date
    var milliNow = dateNow.getTime();           // Datum-heute in Millisek. seit Computers Geburt

    var dateX = new Date();                  // Hilfsvar., Typ Date
    var milliX = 0;

    milliX = milliNow - 1000 * 60 * 60 * 24;    // vor 1 Tag: 7Tage*24Std*60min*60sec*1000ms
    dateX.setTime(milliX);                  // Date-Objekt
    datumGestern = date2datumAnzeige(dateX); // 'tt.mm.iijj'

    milliX = milliNow - 1000 * 60 * 60 * 24 * 7;    // vor 7 Tagen: 7Tage*24Std*60min*60sec*1000ms
    dateX.setTime(milliX);                  // Date-Objekt
    datum7Tage = date2datumAnzeige(dateX); // 'tt.mm.iijj'
    datum7TageInternational = date2datumAnzeigeInternational(dateX); // 'tt.mm.iijj'

    milliX = milliNow - 1000 * 60 * 60 * 24 * 30;   // vor 30 Tagen
    dateX.setTime(milliX);                  // Date-Objekt
    datum30Tage = date2datumAnzeige(dateX); // 'tt.mm.iijj'
    datum30TageInternational = date2datumAnzeigeInternational(dateX); // 'tt.mm.iijj'

    milliX = milliNow - 1000 * 60 * 60 * 24 * 90;   // vor 90 Tagen
    dateX.setTime(milliX);                  // Date-Objekt
    datum90Tage = date2datumAnzeige(dateX); // 'tt.mm.iijj'

    var yearNow = dateNow.getYear();    // numer. iijj oder jj
    if (yearNow < 1900)
        yearNow += 1900;                  // num iijj

    var monthNow = dateNow.getMonth() + 1;
    if (monthNow < 10)
        monthNow = "0" + monthNow;        // mm

    var dayNow = dateNow.getDate();
    if (dayNow < 10)
        dayNow = "0" + dayNow;            // tt

    var monthLastYear = "" + monthNow;
    var dayLastYear = "" + dayNow;

    if (monthNow == "02" && dayNow == "29")
    {
        monthLastYear = "03";
        dayLastYear = "01";
    }

    datumHeute = dayNow + "." + monthNow + "." + yearNow;
    datum1Jahr = dayLastYear + "." + monthLastYear + "." + (yearNow - 1);
    datum1JahrInternational = monthLastYear + "/" + dayLastYear + "/" + (yearNow - 1);
    datum2Jahre = dayLastYear + "." + monthLastYear + "." + (yearNow - 2);
    datum3Jahre = dayLastYear + "." + monthLastYear + "." + (yearNow - 3);
}

function date2datumAnzeige(dateObj)

    //      // Rein: Objekt, das mit dateObj = new Date(); def. wurde
    //      // Raus: String 'tt.mm.iijj' fuer FROM/TO_DATE_DISPLAY
{
    var yearDisplay = dateObj.getYear();
    if (yearDisplay < 1900) yearDisplay += 1900;

    var monthDisplay = dateObj.getMonth() + 1;
    if (monthDisplay < 10) monthDisplay = "0" + monthDisplay;

    var dayDisplay = dateObj.getDate();
    if (dayDisplay < 10) dayDisplay = "0" + dayDisplay;

    var dateDisplay = dayDisplay + "." + monthDisplay + "." + yearDisplay;
    return dateDisplay;
}

function date2datumAnzeigeInternational(dateObj)

    //      // Rein: Objekt, das mit dateObj = new Date(); def. wurde
    //      // Raus: String 'tt.mm.iijj' fuer FROM/TO_DATE_DISPLAY
{
    var yearDisplay = dateObj.getYear();
    if (yearDisplay < 1900) yearDisplay += 1900;

    var monthDisplay = dateObj.getMonth() + 1;
    if (monthDisplay < 10) monthDisplay = "0" + monthDisplay;

    var dayDisplay = dateObj.getDate();
    if (dayDisplay < 10) dayDisplay = "0" + dayDisplay;

    var dateDisplay = monthDisplay + "/" + dayDisplay + "/" + yearDisplay;
    return dateDisplay;
}



$(document).ready(function(){

	$('.commonpager').each(function (index, obj) {
		var $obj=$(this);

		var $enableTouch = $obj.attr('data-enable-touch');
		if ($enableTouch)
			$enableTouch = $enableTouch=='true';
		
		var $pages = $obj.find('.commonpager-page');
		if ($pages.length > 1) {
			var swipe=$obj.Swipe({
				continuous: true,
				startSlide: 0,
				speed: 250,
				enabletouch: $enableTouch,
				callback: function(index, element) {
					var $beforeSlide = $obj.attr('data-commonpager-beforeslide');
					if ($beforeSlide != null) {
						$[$beforeSlide]($obj, 'loadImages', index);
						$obj.removeAttr('data-commonpager-beforeslide');
					}
					else {
						$.loadImages($obj, index);
					}

					var $callback = $obj.attr('data-commonpager-callback');
					if ($callback != null) {
						$[$callback]($obj, index);
					}
					
					//remove & add active
					$obj.find('.commonpager-indicator .bullet.active, .commonpager-pagelink.active').removeClass('active');
					
					$obj.find('.commonpager-indicator .bullet').eq(index).addClass("active");
					$obj.find('.commonpager-pagelink[data-pagenum='+index+']').addClass("active");
					
				}
			}).data('Swipe');
			
			// Load Images
			$.loadImages=function(obj, index) {
				$(obj).find('.commonpager-page').eq(index).find('img[data-src]').each( function() {
					$(this).attr('src', $(this).attr('data-src'));
					$(this).attr('data-src', null);
				});					
			}
			

			
			// construct and append buttons
			$obj.find('.commonpager-indicator').each(function() {
				var $indicator = $(this);
				var pager='<span class="button back link-left"> </span>';
				$obj.find('.commonpager-pages>div').each(function(index,bullet){
					if (index==0)
						pager+='<span class="bullet active">&bull;</span>';
					else
						pager+='<span class="bullet">&bull;</span>';
				});
				pager+='<span class="button fwd link-right"> </span>';
				$indicator.append(pager);

				// buttons
				$obj.find('.fwd').bind('click', function(){swipe.next();});
				$obj.find('.back').bind('click', function(){swipe.prev();});

				// bullets
				$obj.find('.bullet').each(function(index, bullet) {
					$(this).bind('click', function(){swipe.slide(index);});
				});				
			});

			// events for pagelinks
			$obj.find('.commonpager-pagelink').each(function() {
				$(this).bind('click', function(){swipe.slide(parseInt($(this).attr('data-pagenum')));});
			});
			
			
			// set display block;
			$obj.find('.commonpager-pages>div').addClass("initialized");
		}
	
	});

});var spTmpImgSetToLoad;
//Muss ausserhalb des spEnhPaginators stehen, da per timeout aufgerufen...
function spLoadDeferImgSet(prefix) {
	for (var i=0; i < spTmpImgSetToLoad.length; i++) {
		var imgElement=document.getElementById(prefix + i);
		if (imgElement != null)
			imgElement.src = spTmpImgSetToLoad[i];
	}
}
var spEnhPaginator = function(paginatorId, imageSets) {
	this.pages=[];
	this.controls=[];
	this.imageSets=imageSets;
	this.completedImageSets=(imageSets != null) ? new Array(imageSets.length) : null;
	this.index=0;
	this.paginatorId=paginatorId;
	this.imageSetToLoad=null;
	this.currentPage=null;
	this.currentControl=null;
	this.initDone=false;
	this.onChangePage=null;
}
spEnhPaginator.prototype = {
		checkInit: function() {
	if (!this.initDone) {
		var container=document.getElementById(this.paginatorId);
		var pagesTmp=container.getElementsByTagName('DIV');
		for (key=0; key < pagesTmp.length; key++) {
			if (pagesTmp[key].className == 'paginator-page') {
				this.pages.push(pagesTmp[key]);
			}
		}
		var elementCounter=container.getElementsByTagName('li');
		for (i=0; i < elementCounter.length; i++) {
			if (elementCounter[i].className == 'paginator-control list-float-left' || elementCounter[i].className == 'paginator-control active list-float-left') {
				this.controls.push(elementCounter[i]);
			}
		}
		this.currentPage=this.pages[this.index];
		this.currentControl=this.controls[this.index];
		this.initDone=true;
	}
},
showNext: function(element) {
	this.checkInit();
	var oldIndex = this.index++;
	if (this.index >= this.pages.length)
		this.index = 0;
	if (this.onChangePage != null)
		this.onChangePage(this.pages[oldIndex]);
	this.switchToNewIndex();
},
showPrev: function(element) {
	this.checkInit();
	var oldIndex = this.index--;
	if (this.index < 0)
		this.index = this.pages.length - 1;
	if (this.onChangePage != null)
		this.onChangePage(this.pages[oldIndex]);
	this.switchToNewIndex();
},
showNum: function(element) {
	this.checkInit();
	var oldIndex = this.index;
	this.index = arguments[0];
	if (this.index < 0)
		this.index = this.pages.length - 1;
	if (this.onChangePage != null)
		this.onChangePage(this.pages[oldIndex]);
	this.switchToNewIndex();
},
switchToNewIndex: function(newPage) {
	this.currentPage.style.display='none';
	if (this.currentControl != null)
		this.currentControl.className = 'paginator-control list-float-left';
	this.currentPage=this.pages[this.index];
	this.currentControl=this.controls[this.index];
	this.currentPage.style.display='block';
	if (this.currentControl != null)
		this.currentControl.className = 'paginator-control active list-float-left';
	this.checkLoadImages();
},
checkLoadImages: function() {
	if (this.imageSets != null) {
		var imageSetIndex=this.index-1;
		if (this.imageSets[imageSetIndex] != null && !this.completedImageSets[imageSetIndex]) {
			spTmpImgSetToLoad=this.imageSets[imageSetIndex];
			window.setTimeout("spLoadDeferImgSet('" + this.paginatorId + imageSetIndex + "')", 20);
			this.completedImageSets[imageSetIndex]=true;
		}
	}
}
}
function spVideoGet(videoId) {
	if (navigator.appName.indexOf("Microsoft") != -1)
		return window[videoId];
	else
		return document[videoId];
}
function spVpPaginatorOnChangePage(element) {
	if (element == null || element.childNodes == null || element.childNodes.length == 0)
		return;
	var node=element.firstChild;
	while (node != null) {
		if (node.nodeName.toUpperCase() == "OBJECT") {
			var v=spVideoGet(node.id);
			if (v != null) {
				try {
					v.stopVideo();
					return;
				}
				catch(e) {
				}
			}
		}
		else if (node.childNodes != null && node.childNodes.length > 0)
			spVpPaginatorOnChangePage(node);
		node=node.nextSibling;
	}
}

function spVgWortCount(token) {
	document.write('<div style="display:none;"><img src="http://spiegel.met.vgwort.de/na/'+token+'" width="1" height="1" alt="" align="right" /></div>');
}
/**
 * Event handler function tests where the user clicked
 * and acts	according to this
 */
function spMouseUpEvent(e) {
	if (!e) var e = window.event;
	if (e.target) targ = e.target;
	else if (e.srcElement) targ = e.srcElement;
	if (targ.nodeType == 3) // defeat Safari bug
		targ = targ.parentNode;

	if (targ.id == "spTopicBoxToggleLink_" + spHpTopicBoxCurrentElement || targ.id == "spTopicBoxToggleLinkMore_" + spHpTopicBoxCurrentElement) {
		spStopMouseEvent();
		return false;
	}
	if (spHpTopicBoxCurrentElement && targ.id == "spSubjectBox_"+spHpTopicBoxCurrentElement) {
		return false;
	}


	var isHpTopicboxDiv = false;
	while(targ != null) {
		if (spHpTopicBoxCurrentElement && targ.id == "spSubjectBox_"+spHpTopicBoxCurrentElement) {
			isHpTopicboxDiv=true;
			break;
		}
		targ = targ.parentNode;
	}

	if (!isHpTopicboxDiv) {
		spHpTopicBoxToggle(spHpTopicBoxCurrentElement, false);
		spStopMouseEvent();
	}
	return false;
}

/**
 * starts EventHandling
 */
function spStartMouseEvent(){
	if (document.addEventListener) { // DOM Level 2 Event Model
		document.addEventListener("mouseup", spMouseUpEvent, true);
	}
	else if (document.attachEvent) { // IE 5+ Event Model
		document.attachEvent("onmouseup", spMouseUpEvent);
	}
	else { // IE 4 Event Model
		document.onmouseup=spMouseUpEvent;
	}
}
/**
 * stops EventHandling
 * spOldHandler is a hack for EI4 Event Model
 */
var spOldHandler = document.onmouseup;	// Eventhandler for EI 4 StopEvent
function spStopMouseEvent() {
//	Unregister the capturing event handlers.
	if (document.removeEventListener) { // DOM Event Model
		document.removeEventListener("mouseup", spMouseUpEvent, true);
	}
	else if (document.detachEvent) { // IE 5+ Event Model
		document.detachEvent("onmouseup", spMouseUpEvent);
	}
	else { // IE 4 Event Model
		document.onmouseup = spOldHandler;
	}
}



/**
 * 
 * @return
 */
var spHpTopicBoxState=false;
function spHpTopicBoxToggle(spElementName) {
	
	if (!spHpTopicBoxState) {
		spHpTopicBoxSetDisplay(spElementName, true);
		spStartMouseEvent();
	}
	else
		spHpTopicBoxSetDisplay(spElementName, false);
}
/**
 * 
 * @param spDisplay
 * @return
 */
var spHpTopicBoxCurrentElement=null;
function spHpTopicBoxSetDisplay(spElementName, spDisplay) {
	
	spHpTopicBoxElement = document.getElementById("spSubjectBox_"+spElementName).style;
	spHpTopicBoxElement.display = (spDisplay ? "block" : "none");
	spHpTopicBoxState=spDisplay;
	spHpTopicBoxCurrentElement=spElementName
}


/**
 * Simple in_array function
 * @param haystack (Array)
 * @param needle (Object)
 * @return
 */
function spInArray(haystack, needle) {
	for (var i in haystack) {
		if (haystack[i] == needle)
			return true;
	}
	return false;
}
function spOpenPopupLayer2(classname, openerObject, headline, framelocation)  {
	var popup = document.getElementById('js-popup-layer');
	var html = '<a href="javascript:spClosePopupLayer();" class="close-button"><img src="'+spnetENV_SERVER+'/static/sys/v10/buttons/btn_close_black.png" class="close-button" width="25" height="25" alt="Schlie&szlig;en" /><\/a>';
	html += '<h1>' + headline + '</h1>';
	html += '<iframe id="popup-layer-iframe" src="' + framelocation + '" scrolling="no" frameborder="0"></iframe>';
	html = '<div class="popup-layer-skin">' + html + '</div>';
	popup.innerHTML = html;
	popup.className = classname;
	
	var o = 100;
	
	if (openerObject != null) {
		var oPopup   = $("#js-popup-layer").offset().top;
		var hPopup	 = $("#js-popup-layer").height();
		var oWindow  = $(document).scrollTop();
		var oElement = $(openerObject).offset().top;
		var hElement = $(openerObject).height();

		o = oElement - hPopup + hElement + 50;	// Fenster über das Ausrichtungsobjekt legen, 50px sind der Rand des Popups
		if (o < oWindow) o = oWindow + 10;		// runter, wenn außerhalb des Sichtbereichs
		
	} else {
		// default
		var oWindow  = $(document).scrollTop();
		if (o < oWindow) oWindow = $(window).scrollTop(0);		// scrollen, wenn außerhalb des Sichtbereichs
	}
	$("#js-popup-layer").css({"top" : o + "px"});
}

function spOpenPopupLayer3(classname, openerObject, headline, framelocation)  {
	var popup = $('#js-popup-layer');
	var closer = $('<div>')	.addClass("closer")
							.on("click", function() {spClosePopupLayer()});

	var html = '';
	if (headline) {
		html += '<h1>' + headline + '</h1>';
	}
	if (framelocation) {
		html += '<iframe id="popup-layer-iframe" src="' + framelocation + '" scrolling="no" frameborder="0"></iframe>';
	}
	
	var content = 	$('<div>')	.addClass("popup-layer-skin")
								.html(html)
								.prepend(closer);	

	popup	.html(content)
			.removeClass()
		 	.addClass(classname)
		 	.addClass("closable");
	
	var x = 100;
	var y = 100;
	var w = 300;
	
	if (openerObject != null) {
		x = $(openerObject).offset().left - 5;			
		y = $(openerObject).offset().top - 5;
		w = $(openerObject).outerWidth() + 10;
	}
	popup.offset({top: y, left: x})
		 .width(w)

	return popup;
}

function spClosePopupLayer()  {
	$("#js-popup-layer")	.removeClass()
							.empty();
}

function spBestsellerShoplinkInit() {
	$('.spBestsellerEntry.shoplinked').each( function(index, elem) {
		var asin = $(elem).attr("data-asin");
		var isbn = $(elem).attr("data-isbn");
		var item = $(elem).attr("data-item");
		$(elem).append($('<div>').addClass("shopicon").html('<img src="/static/sys/v10/bestseller/warenkorb.png"></div>'));
		if (item == 'Buch') {
			$(elem).find(".cover, .shopicon, .bsttitel, .bstautor").each(function(i,e) {
				$(e)	.unbind("click")
						.bind("click", function() {
											var popup = spOpenPopupLayer3('bestseller', elem);
											var content = $(popup).find(".popup-layer-skin");
											var headline = $('<div>')	.addClass("spBestsellerHeadline")
																		.text(item + ' bestellen');
	
											var newcontent = $('<div>')	.addClass("spBestsellerEntry")
																		.append($(elem).find(".cover").clone())
																		.append($(elem).find(".bsttitel").clone())
																		.append($(elem).find(".bstautor").clone())
																		.append($(elem).find(".zus").clone());
	
											var links = $('<div>')	.addClass("spBestsellerShopLinks")
																	.append($('<div>').addClass("spBestsellerShopLink amazon")		.html($('<a>').text("Bestellen").attr("target","_blank").attr("href","http://www.amazon.de/dp/"+asin+"/ref=nosim?tag=wwwspiegelde-21&ascsubtag=bestseller")))
																	.append($('<div>').addClass("spBestsellerShopLink buchhandel")	.html($('<a>').text("Bestellen").attr("target","_blank").attr("href","https://www.buchhandel.de/buch/"+isbn+"?MVB-Kennnummer=5265725")));
	
											content.append(headline);
											content.append(links);
											content.append(newcontent);
											
											// teilweise ausserhalb des Blickfelds? Rein!
											var oPopup   = $(popup).offset().top;
											var hPopup	 = $(popup).height();
											var oWindow  = $(document).scrollTop();
											var hWindow	 = $(window).height();
											
											console.log(oPopup, hPopup, oWindow, hWindow);
											var screendiff = (oPopup + hPopup) - (oWindow + hWindow);  
											if (screendiff > 0) {
												 $('html, body').animate({ scrollTop: oPopup - hWindow + hPopup + 20}, 'slow');
											}
											oPopup   = $(popup).offset().top;
											oWindow  = $(document).scrollTop();
											if (oPopup < oWindow) {
												 $('html, body').animate({ scrollTop: oPopup-20}, 'slow');
											}
									    });
		    });
		} else {
			$(elem).find(".cover, .shopicon, .bsttitel, .bstautor").each(function(i,e) {
				$(e)	.unbind("click")
						.bind("click", function() {
											window.open("http://www.amazon.de/dp/"+asin+"/ref=nosim?tag=wwwspiegelde-21&ascsubtag=bestseller")
					    				});
		    });
		}
	});
}
function spMSisLoggedIn()  {
	return SPONgetCookie('boLIstatus') || (SPONgetCookie('digasnet.cookie.loginname') && SPONgetCookie('digasnet.cookie.passwd'));
}

function spMSLogin2(openerObject, backUrl, feature, language, silent)  {
	var headline;
	var framelocation = spnetENV_SERVER_SSL;
	var pagename;
	if (language == 'en') {
		framelocation += '/international/login/';
		headline = '<img src="'+spnetENV_SERVER+'/static/sys/v10/meinspiegel/logo_my_spiegel.png" id="ms-logo" alt="My SPIEGEL" />';
	} else {
		framelocation += '/meinspiegel/';
		headline = '<img src="'+spnetENV_SERVER+'/static/sys/v10/meinspiegel/logo_mein_spiegel.png" id="ms-logo" alt="Mein SPIEGEL" />';
		language = 'de';
	}
	if (silent) {
		pagename = "silentlogin-popup.html"
	} else {
		pagename = "login-popup.html"
	}
	if (backUrl == null) {
		if (feature != null) {
			backUrl = framelocation + feature + '.html';
			if ( spMSisLoggedIn() )	{
				top.location.href = backUrl;
			} else {
				framelocation += pagename + '?feature=' + feature + '&backUrl=' + framelocation + feature + '.html';
			}
		} else if (window.location.href.indexOf('logout.html')!=-1) {
			framelocation += pagename;
		} else {
			framelocation += pagename + '?backUrl=' + escape(window.location.href);
		}
	} else {
		framelocation += pagename + '?backUrl=' + escape(backUrl);
	}
	spOpenPopupLayer2('ms-login-popup-layer', openerObject, headline, framelocation);
}

function spMSSilentLogin(form) {
	spMSSilentLogin2(form,'de');
}

function spMSSilentLogin2(form, language) {
	var formdata = $(form).serialize();
	var basepath = language == 'en' ? '/international/login' : '/meinspiegel';
	spAjax(basepath + "/login.json",formdata,function(response) {
		if (response.ajaxSuccess) {
       	 	if (response.data.isError) {
    	   		alert(response.data.errormessage);
    	 		$("input[name='f.password']", form).val('');
       	 	} else {
       			$(document).trigger("spLoggedIn");
       	 	}
		} else {
	   		alert(response.errormessage);
	 		$("input[name='f.password']", form).val('');
		}
	});
}

function spUpdateMSLoginLinks()  {
	var $links = $(".login-links");
	var language = $links.hasClass('english') ? 'en' : 'de';
	var basepath = language == 'en' ? '/international/login' : '/meinspiegel';
	var ll = '';
	if ( language=='en' )	{
		if ( spMSisLoggedIn() )	{
			ll += '<li><a href="' + spnetENV_SERVER + '/international/login/logout.html?backUrl=' + escape(window.location.href) + '">Sign out<\/a>|<\/li>';
			ll += '<li><a href="' + spnetENV_SERVER + '/international/login/index.html">My SPIEGEL</a><\/li>';
		} else {
			ll += '<li><a onclick="spMSLogin2(null, null, null, \'en\'); return false;" href="' + spnetENV_SERVER + '/international/login/login.html">Sign in<\/a>|<\/li>';
			ll += '<li><a href="' + spnetENV_SERVER + '/international/login/register.html">Register<\/a><\/li>';
		}
	} else {
		
		if ( spMSisLoggedIn() )	{
			ll += '<li><a href="' + spnetENV_SERVER + '/meinspiegel/logout.html?backUrl=' + escape(window.location.href) + '">Logout<\/a>|<\/li>';
			ll += '<li><a href="' + spnetENV_SERVER + '/meinspiegel/index.html">Mein SPIEGEL</a><\/li>';
		} else {
			ll += '<li><a onclick="spMSLogin2(); return false;" href="' + spnetENV_SERVER + '/meinspiegel/login.html">Login<\/a>|<\/li>';
			ll += '<li><a href="' + spnetENV_SERVER + '/meinspiegel/artikel/a-703606.html">Registrierung<\/a><\/li>';
		}
	}
	$links.html(ll);
}


function spUpdateForumLoginLinks()  {
	var $links = $("#js-default-message");
	if ( spMSisLoggedIn() )	{
		$links.hide();
	}
}

/**
 * funktion, die benutzt wird um die Passwortstärke bei Registrierung und Passwort ändern Dialogen anzuzeigen 
 * @param pwd
 * @returns {Boolean}
 */
function showStrength(pwd)
{	 							
	var result = zxcvbn(pwd);
	if (pwd.length > 0)
	{
		// score 0 bis 4
		var strengthText;
		switch (result.score)
		{
			case 0: strengthText = 'Sehr unsicher'; break
			case 1: strengthText = 'unsicher'; break
			case 2: strengthText = 'mittelm&auml;&szlig;ig'; break
			case 3: strengthText = 'sicher'; break
			case 4: strengthText = 'Sehr sicher'; break
		}

		$("#passwordStrengthBar").removeClass("bg0 bg1 bg2 bg3 bg4").addClass(function(index) {return "bg"+result.score;});
		$("#strengthText").html( strengthText );
	} else {
		$("#passwordStrengthBar").attr("class", "strengthBar bg0");
		$("#strengthText").html("");
	}
		 		
	return false;
}

// Standard-Event-Login
function spEventLoggedIn() {
//	console.log("Standard-loggedIn");
	spUpdateMSLoginLinks();
	spClosePopupLayer();
}



// ready
$(document).ready(function() {
	$(document).bind('spLoggedIn', spEventLoggedIn);
});

 function spOpenSendForm(language, which, element, extraParams)  {
	// assert object for extraParams
	extraParams = $.extend({}, extraParams);
	var headline;
	var framelocation;
	if (which == 'video') {
        framelocation = spnetENV_SERVER + '/videoversand/index-' + language + '.html';
        if (language == 'en') {
            headline = 'Recommend this video by mail';
        } else {
            headline = 'Dieses Video versenden';
        }
        // inline video uses the send form of the parent, because the space inside inline iframe is usually too small
        // to ensure correct linking, pass video ID to popup explicitly
        if (extraParams.videoId && extraParams.videoId != '')
        	framelocation += '#spMetadataAssetTypeId=33&spMetadataAssetId=' + extraParams.videoId;

        spOpenPopupLayer2('js-send-video-popup-layer', null, headline, framelocation);
	}
	else if (which == 'grossbild') {
		framelocation = spnetENV_SERVER + '/empfehlen/index-' + language + '.html';
		if (language == 'en') {
			headline = 'Recommend this picture by mail';
		} else {
			headline = 'Dieses Bild versenden';
		}
		spOpenPopupLayer2('send-form-popup-layer', null, headline, framelocation);
	}
	else if (which == 'fotostrecke') {
		framelocation = spnetENV_SERVER + '/empfehlen/index-' + language + '.html';
		if (language == 'en') {
			headline = 'Recommend this picture by mail';
		} else {
			headline = 'Dieses Bild versenden';
		}
		spOpenPopupLayer2('send-form-popup-layer', null, headline, framelocation);
	}  
	else {
		framelocation = spnetENV_SERVER + '/artikelversand/index-' + language + '.html';
		if (language == 'en') {
			headline = 'Send this article';
		} else {
			headline = 'Artikel versenden';
		}
		spOpenPopupLayer2('send-form-popup-layer', element, headline, framelocation);
	}
}

function spDetectVideoContext(action){
	var getSendFormPopup = document.getElementById('send-form-popup');
	var SendFormPopupLocation = document.location.href.indexOf("videoversand");
	var EmbedVideoPopupLocation = document.location.href.indexOf("embeddialog");
	if(SendFormPopupLocation >= 0 || action == 'byFunction'){
		if(getSendFormPopup.className != 'js-send-video-form-popup'){
			getSendFormPopup.className = 'js-send-video-form-popup';
		}
	}else if(EmbedVideoPopupLocation >= 0 || action == 'byFunction'){
		if(getSendFormPopup.className != 'js-embed-video-popup-layer'){
			getSendFormPopup.className = 'js-embed-video-popup-layer';
		}
	}
}

function spSendFormSetAction(form, language)  {
	if (form.action == '') {
		var action = spnetENV_SERVER + '/artikelversand/';
		var hashParams = spGetHashParams();
		var assetId = parent.spMetadataAssetId;

        if (parent.spPageType == 'bild') {
            action = '/empfehlen/send/bild-';
            assetId = parent.spArticleId + '_' + parent.spImageId; 
        }
        else if (parent.spPageType == 'grossbild') {
            action = '/empfehlen/send/grossbild-';
            assetId = parent.spArticleId + '_' + parent.spImageId; 
        }
        else if (parent.spPageType == 'fotostrecke') {
            action = '/empfehlen/send/fotostrecke-';
            assetId = parent.spGalleryId + '_' + parent.spImageNum; 
        }
        else if (parent.spMetadataAssetTypeId == '29') {
			action += 'print/d-';
        }
        else if (parent.spMetadataAssetTypeId == '33' || (hashParams.spMetadataAssetTypeId && hashParams.spMetadataAssetTypeId == '33')) {
            action = '/video/send/video-';
            spDetectVideoContext('byFunction');
            if (hashParams.spMetadataAssetId && hashParams.spMetadataAssetId != '')
            	assetId = hashParams.spMetadataAssetId;
        }
		else {
			action += 'online/a-';
		}
		action += assetId + '-' + language + '.html';
		form.action = action;
	}
}

function spAutoOpenSendForm(language, which)  {
	var sendarticle = spGetHashParam("sp.sendarticle");
	if (sendarticle == null) return;
	spOpenSendForm(language, which, null);
}

function spOpenFeedbackForm(scrollelem, language)  {
	var headline;
	var framelocation;
	framelocation = spnetENV_SERVER + '/feedback/index-' + language + '.html';
	if (language == 'en') {
		headline = 'Letter to the editor';
	} else {
		headline = 'Feedback geben';
	}
	spOpenPopupLayer2('feedback-popup-layer', scrollelem, headline, framelocation);
}



function blogLoginCheck(fromElement) {
	if (spMSisLoggedIn()) {
		spBlogShowMessage('msg',spBlogCommentsPhrase.pruefelogin);
		var loggedIn = false;

		spAjax(spBlogCommentsPhrase.msprefix +  "forum/checkalias.json",null,function(response) {
			if (response.ajaxSuccess) {
				if (response.data.statuscode == 0) {
	   	 			spBlogOpenForm(fromElement, response.data)
	   	 		} else if (response.data.statuscode == 2) {
	   	 			spBlogLogin(fromElement);
	   	 		} else if (response.data.statuscode == 3) {
	   	 			spBlogShowMessage('err', response.data.message);
	   	 			spBlogLogin(fromElement);
	   	 		} else {
	   	 			spBlogShowMessage('err', 'Fehler - Statuscode ' + response.data.statuscode + ' - '+response.data.message);
	   	 		}
			} else {
	 			spBlogShowMessage('err', 'Ajax-Fehler: ' + response.errormessage);
			}
		});
	} else {
		spBlogLogin(fromElement);
	}
	spBlogShowMessage('msg','');
	return false;
}

function spBlogLogin(fromElement) {
	$(document).unbind("spLoggedIn");
	$(document).bind('spLoggedIn', function(){fromElement.click();});
	$(document).bind('spLoggedIn', spEventLoggedIn);
	spMSLogin2(fromElement,spStripHashParams(window.location.href)+'#sp.goto.blogcomment='+$(document).scrollTop(),null, spBlogCommentsPhrase.language,1);
}

function spBlogOpenForm(fromElement, forumresponse) {
	$(".js-blog-login-check").unbind('click');
	$("#js-comments-box-form-entry-submit").unbind('click').bind('click', 	function(event){spBlogFormSubmit($("#js-article-comments-box-form form"));});
	$("#js-article-comments-box-form form").unbind('submit').bind('submit', function(event){spBlogFormSubmit($("#js-article-comments-box-form form"));});

	$("#js-default-message").hide();

	if (!forumresponse.isForumuser) {
		spBlogShowMessage('msg', spBlogCommentsPhrase.ersterbeitrag);
		$("#js-comments-box-form-entry-alias").show();
		$("#js-comments-box-form-entry-alias input").val(forumresponse.suggestedAlias);
	} else {
		spBlogShowMessage('msg', spBlogCommentsPhrase.willkommen + ' ' + forumresponse.forumAlias);
	}
	fromElement.focus();
	fromElement.click();
}

function spGotoBlogComment(){
	var scroll = spGetHashParam("sp.goto.blogcomment");
	if (scroll != null) {
		scrollTo(0,scroll);
		blogLoginCheck($("#js-article-comments-box-form-subject input"));		
	}
}


function spBlogFormSubmit(form) {
	if (spMSisLoggedIn()) {
		// Submit deaktivieren
		$("#js-article-comments-box-form form").unbind('submit');
		$("#js-comments-box-form-entry-submit").unbind('click');
		$("#js-comments-box-form-entry-submit").addClass('spInaktiv');

		spBlogShowMessage('msg', spBlogCommentsPhrase.sendebeitrag);
		var formdata = $(form).serialize();	
		spAjax(spBlogCommentsPhrase.msprefix + "forum/postblogcomment.json",formdata,function(response) {
			if (response.ajaxSuccess) {
    	 		if (response.data.statuscode == 0) {
            	 	spBlogShowMessage('ok', spBlogCommentsPhrase.sendebeitragok);
            		$("#js-article-comments-box-form form").hide();
            		$("#js-default-message").hide();
    	 		} else if (response.data.statuscode == 2 || response.data.statuscode == 3) {
    	 			spBlogShowMessage('err', spBlogCommentsPhrase.loginexpired);
    	 			$("#js-default-message").show();    	 			
    	 			spBlogLogin($("#js-comments-box-form-entry-submit"));
    	 		} else if (response.data.statuscode == 5 && response.data.errors.length > 0) {
   	 				spBlogShowMessage('err', response.data.errors[0].message);
    	 		} else {
    	 			spBlogShowMessage('err', response.data.message);
    	 		}
			} else {
 				spBlogShowMessage('err', 'Ajax-Fehler: ' + response.error + ' - ' + response.text);
			}
		});
	} else {
		spBlogShowMessage('err', spBlogCommentsPhrase.loginexpired);
		$("#js-default-message").show();		
		spBlogLogin($("#js-comments-box-form-entry-submit"));
	}
	return false;
}

function spBlogShowMessage(cssClass, message) {
	if (message == '') {
		$("#js-message").html('');
	} else if (cssClass == 'err') {
		$("#js-message").html('');
		alert(message);
		// Submit wieder aktivieren
		$("#js-comments-box-form-entry-submit").unbind('click').bind('click', 	function(event){spBlogFormSubmit($("#js-article-comments-box-form form"));});
		$("#js-article-comments-box-form form").unbind('submit').bind('submit', function(event){spBlogFormSubmit($("#js-article-comments-box-form form"));});
		$("#js-comments-box-form-entry-submit").removeClass('spInaktiv');
	} else {
		$("#js-message").html('<span class="spMessageEntry_'+cssClass+'">'+message+'</span>');
	}
}

function showComment(quote) {
	$(quote).parent().parent().find(".js-article-post-teaser").hide();
	$(quote).parent().parent().find(".js-article-post-full-text").show();
}

function spPrepareQuotes() {
	$(".spForumQuoteHeadline").each( function() {
		var quote = $(this).html();
		quote = '[' + quote + '<a class="spForumQuoteShowLink" onclick="showForumQuotes(this);">' + spBlogCommentsPhrase.showquote + '</a>]';
		$(this).html(quote);
	});
	$(".js-article-post-teaser.js-article-post-more").each( function() {
		var teaser = $(this).html();
		teaser = teaser + '<a class="show-text-arrow" title="' + spBlogCommentsPhrase.showcomment + '" onclick="showComment(this);">&#9660;</a>';
		$(this).html(teaser);
	});
}

function showForumQuotes(quote) {
	$(quote).parent().parent().find(".spForumQuoteText").css("display","block").show();
	$(quote).hide();
}


/* Paginator */

var spBCPager = function(element, forum, threadid, entries) {
	var pp = this;

	this.pager = element;
	this.step=5;
	this.entries=entries;
	this.forum = forum;
	this.threadid = threadid;
	this.pageElement = $(element).find(".js-article-comments-box-content");
	this.currentOffset=null;
	this.setPos(1);
	this.comments = false;

	$(pp.pager).find(".js-article-comments-box-page-prev").each( function() {
		$(this).bind("click", function(ev) { pp.prev() });
	});
	$(pp.pager).find(".js-article-comments-box-page-next").each( function() {
		$(this).bind("click", function(ev) { pp.next() });
	});
	$(pp.pager).find(".js-article-comments-box-page-first").each( function() {
		$(this).bind("click", function(ev) { pp.first() });
	});
	$(pp.pager).find(".js-article-comments-box-page-last").each( function() {
		$(this).bind("click", function(ev) { pp.last() });
	});
	$(pp.pager).find(".js-article-comments-toggle-all").each( function() {
		$(this).bind("click", function(ev) { pp.toggleComments() });
	});
}

spBCPager.prototype = {
		offset: function(pos) {
			var pp = this;

			if (pos > this.entries) pos=this.entries - this.entries % this.step;
			if (pos < 1) pos=1;
			
			if (pos != this.currentOffset) {
				var url = "/fragments/community/" + this.forum + "-" + this.threadid + "-" + pos + ".html";
				$("body").addClass("spWait");
				$.ajax({
					type: "GET",
					url: url,
					success: function(data) {
								$(pp.pageElement).each(function(){
									$(this).html(data);
									spPrepareQuotes();
								});
								pp.setPos(pos);
								$("body").removeClass("spWait");

							},
					error: function(data) {
								$("body").removeClass("spWait");
							}
				});
			}
		},
		next: function() {
			this.offset(this.currentOffset + this.step);
		},
		prev: function() {
			this.offset(this.currentOffset - this.step);
		},
		first: function() {
			this.offset(1);
		},
		last: function() {
			this.offset((this.entries-1) - ((this.entries-1) % this.step) + 1);
		},
		setpage: function(page) {
			var p = parseInt(page);
			if (!isNaN(p)) {
				var newoffset = (p-1) * this.step + 1;
				if (newoffset < 1 ) this.first()
				else if (newoffset > this.entries) this.last()
				else this.offset(newoffset);
			}
		},
		setPos: function(pos) {
			var pp = this;
			if (pos == 1) {
				$(pp.pager).find(".js-article-comments-box-page-prev").each( function() {
					$(this).hide();
				});				
				$(pp.pager).find(".js-article-comments-box-page-first").each( function() {
					$(this).hide();
				});				
			} else if (pp.currentOffset == null || pp.currentOffset == 1) {
				$(pp.pager).find(".js-article-comments-box-page-prev").each( function() {
					$(this).show();
				});
				$(pp.pager).find(".js-article-comments-box-page-first").each( function() {
					$(this).show();
				});				
			}
			if (pos > pp.entries-pp.step) {
				$(pp.pager).find(".js-article-comments-box-page-next").each( function() {
					$(this).hide();
				});				
				$(pp.pager).find(".js-article-comments-box-page-last").each( function() {
					$(this).hide();
				});				
			} else if (pp.currentOffset == null || pp.currentOffset > pp.entries-pp.step) {
				$(pp.pager).find(".js-article-comments-box-page-next").each( function() {
					$(this).show();
				});
				$(pp.pager).find(".js-article-comments-box-page-last").each( function() {
					$(this).show();
				});
			}
			var techpos = pos-1;
			var techentries = this.entries-1;
			var seite  = (techpos - techpos % this.step) / this.step + 1;
			var seiten = (techentries - techentries % this.step) / this.step + 1;

			$(pp.pager).find("span.js-article-comments-box-page-count").each( function() {
				$(this).html(spBlogCommentsPhrase.seite + ' ' + seite + ' ' + spBlogCommentsPhrase.von + ' ' + seiten);
			});				
			this.currentOffset = pos;
		},

		toggleComments: function() {
			var pp=this;
			pp.comments = pp.comments ? false : true;
			if (pp.comments) {
				$(pp.pager).addClass('js-show-all-comments');
				$(pp.pager).find(".js-article-comments-toggle-all").each( function() {
					$(this).html(spBlogCommentsPhrase.closecomments);
				});
			} else {
				$(pp.pager).removeClass('js-show-all-comments');
				$(pp.pager).find(".js-article-comments-toggle-all").each( function() {
					$(this).html(spBlogCommentsPhrase.opencomments);
				});
			}
		}
}

function spReplaceCommentsBoxPageNavBarAnchors(){
	if($('.js-article-comments-box-nav > .js-pager-right').length > 0){
		$('.js-article-comments-box-nav > .js-pager-right').each(function(index){
		    if(index < 1){
		    	var countLinks = $(this).children('a').length;
		    	$('.js-article-comments-box-nav > .js-pager-right').children('a').each(function(index){
		            if(index < countLinks){
		                $(this).attr('href', 'javascript:void(0);');
		            }
		    	});
			}
		});
	}
}

function spShowForumUserPage(fromElement) {
	if (spMSisLoggedIn()) {
		spAjax(spBlogCommentsPhrase.msprefix +  "forum/checkalias.json",null,function(response) {
			if (response.ajaxSuccess) {
				if (response.data.statuscode == 0) {
	   	 			document.location.href = "/forum/member-" + response.data.userId + ".html";
	   	 			return false;
	   	 		} else {
	   	 			spBlogLogin(fromElement);
	   	 		}
			} else {
	 			spBlogShowMessage('err', 'Ajax-Fehler');
			}
		});
	} else {
		spBlogLogin(fromElement);
	}
	return false;
}


//ready
$(document).ready(function() {
	$(".js-blog-login-check").bind('click', function(event){ blogLoginCheck(this); });
	$("#js-article-comments-box-form form").bind('submit', function(event){ blogLoginCheck(this); });
	spPrepareQuotes();
	$("#js-article-comments-box-form").show();
	spReplaceCommentsBoxPageNavBarAnchors();
});

function epubContentToggle() {
	document.getElementById('js-epub-content-hidden').style.display = 'block';
	document.getElementById('js-epub-content-toggle').style.display = 'none';
}

function spShowMapMarker(a) {
	// zeigt Map-Marker, wenn Karte auf der Seite, ansonsten Deep-Link
	if (spMap != 'undefined') {
		document.location.hash = a.hash;
		var id = spGetHashParam('id');
		var lat = spGetHashParam('lat');
		var lng = spGetHashParam('lng');
		var zoom = spGetHashParam('zoom');
		spMap.showUserContent(id, lng, lat, zoom, true, true);
		return false;
	} else {
		return true;
	}
}

//----- social bar 10/2015: ----- 
$(document).ready(function(){
	if("ontouchstart" in document.documentElement) {
		$('div.social-button-more').on('click', function(e) {
			$(this).parent().children('.social-bar-expandx').show();
		});
		$('.social-bar-expandx').on('click', function(e) {
			$('.social-bar-expandx').hide();
		});
	}
	else {
		$('div.social-button-more').mouseenter(function() {
			$(this).parent().children('.social-bar-expandx').fadeIn("fast");
		});
		$('.social-bar-expandx').mouseleave(function() {
			$('.social-bar-expandx').hide();
		});
		$('div.social-button-more').on('click', function() {
			$(this).parent().children('.social-bar-expandx').show();
		});
		$('.social-bar-expandx').on('click', function() {
			$('.social-bar-expandx').hide();
		});
	}
	$('a.social-button-facebook').on('click', function(e) {
		e.preventDefault();
		spon_popup( $(this).attr('href'),650,425,0,0 );
	});
	$('a.social-button-twitter').on('click', function(e) {
		e.preventDefault();
		spon_popup( $(this).attr('href'),550,485,0,0 );
	});
	$('a.social-button-gplus').on('click', function(e) {
		e.preventDefault();
		spon_popup( $(this).attr('href'),600,400,0,0 );
	});
	$('a.social-button-linkedin').on('click', function(e) {
		e.preventDefault();
		spon_popup( $(this).attr('href'),600,400,0,0 );
	});
	$('a.social-button-tumblr').on('click', function(e) {
		e.preventDefault();
		spon_popup( $(this).attr('href'),600,400,0,0 );
	});
	$('a.social-button-pinterest').on('click', function(e) {
		e.preventDefault();
		var pinterest_url = $(this).attr('href');
		var og_image_url = $('meta[property=og\\:image]').attr('content');
		if(og_image_url) {
			pinterest_url = pinterest_url.replace(/media=.*&description=/, 'media='+og_image_url+'&description=');
		}
		spon_popup(pinterest_url ,750,600,0,0 );
	});
});


/* countpixel @ iPad galleries */
function spTabletGallCounterPix(pageCount, imgId){
	spIvwReload();
	spNmReloadMergeParams({'sp.picturesid':imgId, 'sp.part':pageCount});
}

/* Veeseo Iframe Articles/Video Recommendations */
function spDoVeeseo(veeseoArticleid, veeseoDate, veeseoChannelid, veeseoChannelname) {

	// test Okt. 2014: Pano anders
	if (veeseoChannelid == '10') {
		spDoVeeseoPano(veeseoArticleid, veeseoDate, veeseoChannelid, veeseoChannelname);
		return;
	}
	var veeseoDiv = document.getElementById("spVeeseo");
	if(typeof veeseoDiv == 'object' && veeseoArticleid != '' && veeseoChannelid != '') {

		// Artikel
		if(sp_webcfg_global != undefined) {
			var vp_url = '';
			var vp_type = '';
			if (sp_webcfg_global.veeseoArticles == true) {
				if (sp_webcfg_global.plistaArticles == true) {
					var vp_rate;
					if (typeof sp_webcfg_global.veeseoPlistaArticlesRate != 'undefined') {
						vp_rate = parseFloat(sp_webcfg_global.veeseoPlistaArticlesRate);
					} else {
						vp_rate = 0.5;
					}
					var z = Math.random();
					if (z <= vp_rate) {
						vp_type='veeseo';
					} else {
						vp_type='plista';
					}
				} else {
					vp_type='veeseo';
				}
			} else if (sp_webcfg_global.plistaArticles == true) {
				vp_type='plista';
			}
			
			if (vp_type != '') {
				if (vp_type == 'veeseo') {
					vp_url = 'http:/'+'/rce.veeseo.com/iframe/spiegel.php?url=http:/'+'/www.spiegel.de/artikel/a-'+veeseoArticleid+'.html&date='+veeseoDate+'&channelid='+veeseoChannelid;
					vp_height= '1180px';
				} else if (vp_type == 'plista') {
					var widgetname = 'belowArticle';
					if (spUA && spUA.isMobileDevice()) widgetname='belowArticle_mobile';
					vp_url = 'http:/'+'/farm.plista.com/iframeWidget.php?publickey=spiegel&widgetname='+widgetname+'&c='+encodeURI(veeseoChannelname)+'&item[objectid]='+veeseoArticleid+'&item[url]=http:/'+'/www.spiegel.de/artikel/a-'+veeseoArticleid+'.html&item[updated_at]='+veeseoDate;	
					vp_height= '1200px';
				}
				var veeseoNode = document.createElement("iframe");
				veeseoNode.setAttribute("src", vp_url);
				veeseoNode.style.width = "520px";
				veeseoNode.style.height = vp_height;
				veeseoNode.style.border = "none";
				veeseoNode.setAttribute("frameBorder", "0");
				veeseoNode.setAttribute("scrolling", "no");
				veeseoDiv.appendChild(veeseoNode);
				$(veeseoDiv).addClass("module-box");
			}
		}
		
		// Videos
		var showVeeseo = 0;
		var veeseo_config;
		var veeseo_url = '';
		if(sp_webcfg_global != undefined && sp_webcfg_global.veeseo_channels != undefined) { 
			for (var i = 0; i < sp_webcfg_global.veeseo_channels.length; ++i) {
				if(veeseoChannelid == sp_webcfg_global.veeseo_channels[i]) {
					veeseo_url = 'http:/'+'/spiegel.rce.veeseo.com/veeseorcw.html?url=http:/'+'/www.spiegel.de/artikel/a-'+veeseoArticleid+'.html&date='+veeseoDate+'&channelid='+veeseoChannelid;

					var veeseoNode = document.createElement("iframe");
					veeseoNode.setAttribute("src", veeseo_url);
					veeseoNode.style.width = "520px";
					veeseoNode.style.height = "265px";
					veeseoNode.style.border = "none";
					veeseoNode.setAttribute("frameBorder", "0");
					veeseoNode.setAttribute("scrolling", "no");
					veeseoDiv.appendChild(veeseoNode);
					$(veeseoDiv).addClass("module-box");
					
					break;
				}
			}
		}
	}
}

function spDoVeeseoPano(veeseoArticleid, veeseoDate, veeseoChannelid, veeseoChannelname) {
	var veeseoDiv = document.getElementById("spVeeseo");
	if(typeof veeseoDiv == 'object' && veeseoArticleid != '' && veeseoChannelid != '') {

		if(sp_webcfg_global != undefined) {
			// Videos
			var showVeeseo = 0;
			var veeseo_config;
			var veeseo_url = '';
			if(sp_webcfg_global.veeseo_channels != undefined) { 
				for (var i = 0; i < sp_webcfg_global.veeseo_channels.length; ++i) {
					if(veeseoChannelid == sp_webcfg_global.veeseo_channels[i]) {
						veeseo_url = 'http:/'+'/rce.veeseo.com/iframe/spiegel_video_2.php?url=http:/'+'/www.spiegel.de/artikel/a-'+veeseoArticleid+'.html&date='+veeseoDate+'&channelid='+veeseoChannelid;
						break;
					}
				}
			}
				
			if(veeseo_url != '') {
				$(veeseoDiv).append(
						$('<iframe>')
							.attr("src", veeseo_url)
							.attr("frameBorder", "0")
							.attr("scrolling", "no")
							.css("width", "520px")
							.css("height", "265px")
							.css("border", "none")
				);
			}
			
		
			// Artikel
			var vp_url = '';
			var vp_type = '';
			if (sp_webcfg_global.veeseoArticles == true) {
				if (sp_webcfg_global.plistaArticles == true) {
					var vp_rate;
					if (typeof sp_webcfg_global.veeseoPlistaArticlesRate != 'undefined') {
						vp_rate = parseFloat(sp_webcfg_global.veeseoPlistaArticlesRate);
					} else {
						vp_rate = 0.5;
					}
					var z = Math.random();
					if (z <= vp_rate) {
						vp_type='veeseo';
					} else {
						vp_type='plista';
					}
				} else {
					vp_type='veeseo';
				}
			} else if (sp_webcfg_global.plistaArticles == true) {
				vp_type='plista';
			}
			
			if (vp_type != '') {
				if (vp_type == 'veeseo') {
					vp_url = 'http:/'+'/rce.veeseo.com/iframe/spiegel_article_2.php?url=http:/'+'/www.spiegel.de/artikel/a-'+veeseoArticleid+'.html&date='+veeseoDate+'&channelid='+veeseoChannelid;
					vp_height= '1180px';
				} else if (vp_type == 'plista') {
					vp_url = 'http:/'+'/farm.plista.com/iframeWidget.php?publickey=spiegel&widgetname=belowArticle_panorama&c='+encodeURI(veeseoChannelname)+'&item[objectid]='+veeseoArticleid+'&item[url]=http:/'+'/www.spiegel.de/artikel/a-'+veeseoArticleid+'.html&item[updated_at]='+veeseoDate;	
					vp_height= '1200px';
				}

				$(veeseoDiv).append(
					$('<div>')
						.addClass("module-box")
						.html(
							$('<iframe>')
								.attr("src", vp_url)
								.attr("frameBorder", "0")
								.attr("scrolling", "no")
								.css("width", "520px")
								.css("height", vp_height)
								.css("border", "none")
						)
				);
			}
		}
	}
}

/* Plista SPIEGEL-Archiv (Dokumente) */
function spDoRecommendationFrame() {
	var recDiv = $("#spRecommendations");
	if(recDiv != null) {
		if(sp_webcfg_global != undefined) {
			if (sp_webcfg_global.plistaArticles == true) {
				var node = $('<iframe>')	.attr("src",'http://static.plista.com/widget.html#publickey=spiegel&widgetname=belowArticle_archiv&c=print')
											.attr("frameBorder", "0")
											.attr("scrolling", "no")
											.css({width: "520px", height: "1200px", border: "none"});
				recDiv.html(node).addClass("module-box");
			}
		}
	}
}

// BACKOFFICE
//#################################################################


$(document).ready(function(){

	//----- toggle Optional Fields
	
	if ( $('.ms-optional-fields-head').hasClass('active') ) {
		$('.ms-optional-fields').slideDown('slow');
	}
	
	$('.ms-optional-fields-head').on('click', function(){
		var $optFields = $('.ms-optional-fields');

		if ( $optFields.hasClass('active') ) {
			$optFields.removeClass('active').slideUp('slow');
			$('#show-optional').val('0');
			$(this).removeClass('active');
		} else {
			$optFields.addClass('active').slideDown('slow');
			$('#show-optional').val('1');
			$(this).addClass('active');
		}
	});	
})

/*
Bestseller
 */
function spBestsellerShoplinkInit2() {
	$('.content').each( function(index, elem) {
		var asin = $(elem).attr("data-asin");
		var isbn = $(elem).attr("data-isbn");
		$(elem).find(".bestseller-popup-link").each(function(i,e) {
			$(e)	.unbind("click")
					.bind("click", function() {
                                        var popup = spOpenPopupLayer3('Bestseller', elem);
                                        var content = $(popup).find(".popup-layer-skin");
                                        var popupContent = $(elem).find(".bestseller-popup-content").clone();
                                        content.append(popupContent);
                                        popupContent.css("display", "block");
                                        popup.css("display", "block");
                                        return false;
								    });
	    });
        $(elem).find(".bestseller-amazon-link").each(function(i,e) {
      			$(e)	.unbind("click")
      					.bind("click", function() {
							window.open("http://www.amazon.de/dp/"+asin+"/ref=nosim?tag=wwwspiegelde-21&ascsubtag=bestseller")
						});
      	    });
	});
}

function spArticleOverscroll() {
	if(sp_webcfg_global && sp_webcfg_global.articleOverscroll) {
		var ao 		= this;
		ao.activated = false;
		ao.div 	= $("#article-overscroll-area");
		if (ao.div.length == 0) return null;
		// exclude mobile devices (window height problem)
		if (spUA == null || spUA.isMobileDevice()) return null;

		this.init = function() {
			$(window).bind("scroll.spArticleOverscroll", ao.checkposition);
//			console.log("spArticleOverscroll BOUND CHECKPOSITION");
			ao.div.empty();
			ao.adjustposition('init'); 
		}
		
		this.checkposition = function() {
//			console.log("spArticleOverscroll checking position: ", $(window).scrollTop());
			if (!ao.activated) {
				if ($(window).scrollTop() + $(window).height()*2 > ao.div.offset().top) {
					// erst laden und aktivieren, wenn in die zweite Haelfte gescrollt wurde...
//					console.log("spArticleOverscroll loading...");
					
					ao.adjustposition('checkposition');

					ao.div.addClass("grid-homepage")
					   .prepend(
							   		$("<div>")	.attr("id", "article-overscroll-area-outer")
							   					.load("/fragments/centerpage/article-overscroll.html", ao.activateoverscroll())
							  );

				}
			}
		}

		this.adjustposition = function(where) {
//			console.log("adjust position ("+where+")", ($(window).scrollTop() + $(window).height()), ao.div.offset().top);
 			if (($(window).scrollTop() + $(window).height()) >= ao.div.offset().top) {
				// wenn schon beim aktivieren die Position zu tief ist, auf die Startkante scrollen
				$(window).scrollTop(ao.div.offset().top - $(window).height());
//				console.log("spArticleOverscroll adjust too low scrollposition... ("+where+")");
			}
		};
		
		this.activateoverscroll = function() {
//			console.log("spArticleOverscroll start activation");
			
			var indicator = 	$("<div>")	.attr("id", "article-overscroll-area-level")
		   									.append($("<div>").attr("id","article-overscroll-area-level-indicator"))
		   									.append($("<div>")
		   												.attr("id","article-overscroll-area-level-text")
		   												.html("zur Startseite")
		   												.on("click", function(){
		   																	document.location.href = '/#ref=article-overscroll-click';
		   																	$("#article-overscroll-area-level").addClass("active");
		   															 })
		   											);

			ao.div.append(indicator);
			ao.indicatorheight = indicator.outerHeight();
			ao.indicatorInnerHeight = indicator.height();


			
			$(window).unbind('scroll.spArticleOverscroll');
			window.setTimeout(function() {
				$(window).bind("scroll.spArticleOverscroll", ao.checkoverscroll);
				ao.activated = true;
//				console.log("spArticleOverscroll activated");
				// $(window).trigger("scroll");
				// ao.checkoverscroll();
				ao.adjustposition('activate');
			}, 200);
			
		}

		this.checkoverscroll = function() {
			var start 	= ao.div.offset().top-ao.indicatorheight/2;
			var bottom = $(window).scrollTop() + $(window).height();
			var go 		= ao.div.offset().top + ao.div.height();
//			console.log("spArticleOverscroll start",start,"bottom",bottom,"go", go);					
			
			if(bottom > start){
//				console.log("spArticleOverscroll bottom > start");
				var indicate = -195 + ((bottom - start) / ao.div.height()) * ao.indicatorInnerHeight;
				ao.div.find("#article-overscroll-area-level-indicator").css("background-position", "0 " + indicate + "px");
//				console.log("spArticleOverscroll indicate",indicate,"indheight",ao.indicatorheight,"indinnerheight",ao.indicatorInnerHeight);
				if(bottom>start+ao.indicatorheight+20) {
					var leveltop = $(window).height()-ao.indicatorheight-10;
//					console.log("spArticleOverscroll get sticky, top:", leveltop);
					ao.div.addClass("sticky");
					ao.div.find("#article-overscroll-area-level").css("top", leveltop + "px");
				} else {
//					console.log("spArticleOverscroll get floating");
					ao.div.removeClass("sticky");	
					ao.div.find("#article-overscroll-area-level").css("top", "-"+(ao.indicatorheight/2)+"px");
				}
		    
				if (bottom >= go) {
					$(window).unbind('scroll.spArticleOverscroll');
					ao.div.find("#article-overscroll-area-level-indicator").css("background-position", "0 0");
					$("#article-overscroll-area-level").addClass("active");
					
//					console.log("spArticleOverscroll - fired and UNBOUND");
					document.location.href = '/#ref=article-overscroll';
				}			
			} else {
//		    	console.log("spArticleOverscroll not visible");
				ao.div.removeClass("sticky");	
				ao.div.find("#article-overscroll-area-level").css("top", "-"+(ao.indicatorheight/2)+"px");
				ao.div.find("#article-overscroll-area-level-indicator").css("background-position", "0 -200px");
		    }
		};
		
		ao.init();
	}
}


// Location-Change-Forms
function spLocationselect(select) {
	var url = $(select).val();
	window.location.href=url;
	return false;
}

// einestages - pruefen, ob Artikel bereits bewertet wurde
var spArticleRatingStorage="spArticleRating";
function spInitEtRating() {
	
	var articleid = $(".js-article-rating").attr("data-articleid");

	var canRate = true;

	var ratedArticles = getRatingStorage(spArticleRatingStorage);
	
	if (ratedArticles != null) {
		var tmprating=ratedArticles[articleid];
		if (tmprating > 0)
			canRate = false;
	}
	else {
		ratedArticles = new Object();
	}
		


	if (canRate) {

		$('.js-article-rating span').each(function(){
			var that=this;
			$(that).bind('click', function () {
				
				var rating=$(this).attr("data-id");

				onRate(articleid, rating);
				
				ratedArticles[articleid]=rating;

				if (spHasStore())
					localStorage.setItem(spArticleRatingStorage, JSON.stringify(ratedArticles));
			});
			
			$(that).parent().bind('mouseover', function () {
				$(this).parent().addClass('on-hover');
			});
			$(that).parent().bind('mouseout', function () {
				$(this).parent().removeClass('on-hover');
			});
			
		});
		
		canRate = false;
	} else {
		$('.js-article-rating span').each(function(){
			
			var that=this;
			
			$(that).unbind('click');
			$(that).parent()
				.unbind('mouseover')
				.unbind('mouseout')
				.parent().removeClass('on-hover');
			
			$(that).bind('click', function () {
				if ($('.article-rating .small-info').length > 0) {
					$('.article-rating .small-info').each(function() {
						$(this).remove();
					});
				}
				$('.article-rating').append('<span class="small-info">Sie haben diesen Artikel bereits bewertet.</span>');
			});
		});
	}
}

//einestages - Artikel Bewertungen auslesen
function spEvaluateRating(data) {

	var ratingText = 'Bewertungen';
	var averageRating = '';
	var averageRatingRounded = '';
	var tmpClass = $('.js-article-rating').attr("class").match(/average[\w-]*\b/);
	
//	$.each( data, function( key, val ) {
		averageRating = Math.round(data.averageRating * 10) / 10;
		averageRatingRounded = Math.round(data.averageRating);
		
		if(data.ratingCount) {
			if(data.ratingCount == 1) {
				ratingText = 'Bewertung';
			}
			$('.article-rating-text').text(averageRating + ' ('+ data.ratingCount + ' ' + ratingText + ')');
		} else {
			$('.article-rating-text').text('Artikel bewerten');
		}
		
		$('.js-article-rating').removeClass(tmpClass[0]);
		
		switch (averageRatingRounded) {
			case 1:
				$('.js-article-rating').addClass('average-rating-1');
				break;
			case 2:
				$('.js-article-rating').addClass('average-rating-2');
				break;
			case 3:
				$('.js-article-rating').addClass('average-rating-3');
				break;
			case 4:
				$('.js-article-rating').addClass('average-rating-4');
				break;
			case 5:
				$('.js-article-rating').addClass('average-rating-5');
				break;
			default:
				break;
		}
//	});
}

// einestages - Artikel bewerten
function onRate(articleID, rating) {
	
	var ratedArticles = getRatingStorage(spArticleRatingStorage);

	if (ratedArticles != null)
		var storedRating=ratedArticles[articleID];

	cookieprotect( function(){
						$.ajax({
							type : "POST",
							url : '/setrating/artikel/' + articleID + '-' + rating + '.json',
							dataType : "json"
						})
						
						// Artikel bewerten
						.done(function( data ) {
							$('.article-rating .small-info').remove();
							if (data.logMessage == 'REJECT') {
								$('.article-rating').append('<span class="small-info">Der Artikel wurde von Ihnen bereits bewertet.</span>');
							} else {
								$('.article-rating').append('<span class="small-info">Vielen Dank. Ihre Bewertung wurde gespeichert.</span>');
								spInitEtRating();
								spEvaluateRating(data);
							}
						})
						
						.fail(function() {
							// Artikel wurde schon bewertet
							if (storedRating > 0 ) {
								$('.article-rating .small-info').remove();
								$('.article-rating').append('<span class="small-info">Der Artikel wurde von Ihnen bereits bewertet.</span>');
							} else {
								$('.article-rating .small-info').remove();
								$('.article-rating').append('<span class="small-info">Es ist ein Fehler aufgetreten.</span>');
							}
						});
					},
					function() { 
						$('.article-rating .small-info').remove();
						$('.article-rating').append('<span class="small-info">Es ist ein Fehler aufgetreten.</span>');
					}
	);
}

/**
 * 
 * @param storageName
 * @returns
 */
function getRatingStorage(storageName) {
	if(spHasStore()) {
		var store = null;
		try {
			store = localStorage.getItem(storageName);
		} catch(e) {
			return null;
		}
		if (store != null) {
			store = $.parseJSON(store);
		}
		
		if (typeof store == "object" && store != null) {
			return store;
		}
	}
	return null;
}

function spHasStore() {
	return typeof(Storage)!=="undefined";
}/*
 * Swipe 2.0
 *
 * Brad Birdsall
 * Copyright 2013, MIT License
 *
*/

function Swipe(container, options) {

  "use strict";

  // utilities
  var noop = function() {}; // simple no operation function
  var offloadFn = function(fn) { setTimeout(fn || noop, 0) }; // offload a functions execution

  options = options || {};

  // check browser capabilities
  var browser = {
    addEventListener: !!window.addEventListener,
    //
    touch: (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) && options.enabletouch,
    transitions: (function(temp) {
      var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
      for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
      return false;
    })(document.createElement('swipe'))
  };

  // quit if no root element
  if (!container) return;
  var element=$(container).find('.commonpager-pages')[0];
  //var element = container.children[0];
  var slides, slidePos, width, length;
  var index = parseInt(options.startSlide, 10) || 0;
  var speed = options.speed || 300;
  options.continuous = options.continuous !== undefined ? options.continuous : true;

  function setup() {

    // cache slides
    slides = element.children;
    length = slides.length;

    // set continuous to false if only one slide
    if (slides.length < 2) options.continuous = false;

    //special case if two slides
    if (browser.transitions && options.continuous && slides.length < 3) {
      element.appendChild(slides[0].cloneNode(true));
      element.appendChild(element.children[1].cloneNode(true));
      slides = element.children;
    }

    // create an array to store current positions of each slide
    slidePos = new Array(slides.length);

    // determine width of each slide
//    width = container.getBoundingClientRect().width || container.offsetWidth;
    width = $(slides[0]).width();
    
    element.style.width = (slides.length * width) + 'px';

    // stack elements
    var pos = slides.length;
    while(pos--) {

      var slide = slides[pos];

      slide.style.width = width + 'px';
      slide.setAttribute('data-index', pos);

      if (browser.transitions) {
        slide.style.left = (pos * -width) + 'px';
        move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
      }

    }

    // reposition elements before and after index
    if (options.continuous && browser.transitions) {
      move(circle(index-1), -width, 0);
      move(circle(index+1), width, 0);
    }

    if (!browser.transitions) element.style.left = (index * -width) + 'px';

    container.style.visibility = 'visible';

  }

  function prev() {

    if (options.continuous) slide(index-1);
    else if (index) slide(index-1);

  }

  function next() {

    if (options.continuous) slide(index+1);
    else if (index < slides.length - 1) slide(index+1);

  }

  function circle(index) {

    // a simple positive modulo using slides.length
    return (slides.length + (index % slides.length)) % slides.length;

  }

  function slide(to, slideSpeed) {

    // do nothing if already on requested slide
    if (index == to) return;
    
    if (browser.transitions) {

      var direction = Math.abs(index-to) / (index-to); // 1: backward, -1: forward

      // get the actual position of the slide
      if (options.continuous) {
        var natural_direction = direction;
        direction = -slidePos[circle(to)] / width;

        // if going forward but to < index, use to = slides.length + to
        // if going backward but to > index, use to = -slides.length + to
        if (direction !== natural_direction) to =  -direction * slides.length + to;

      }

      var diff = Math.abs(index-to) - 1;

      // move all the slides between index and to in the right direction
      while (diff--) move( circle((to > index ? to : index) - diff - 1), width * direction, 0);
            
      to = circle(to);

      move(index, width * direction, slideSpeed || speed);
      move(to, 0, slideSpeed || speed);

      if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place
      
    } else {     
      
      to = circle(to);
      animate(index * -width, to * -width, slideSpeed || speed);
      //no fallback for a circular continuous if the browser does not accept transitions
    }

    index = to;
    offloadFn(options.callback && options.callback(index, slides[index]));
  }

  function move(index, dist, speed) {
	  
	//console.log("move: " +index + " | " +dist +" | "+speed);
    translate(index, dist, speed);
    slidePos[index] = dist;

  }

  function translate(index, dist, speed) {

    var slide = slides[index];
    var style = slide && slide.style;

    if (!style) return;

    style.webkitTransitionDuration = 
    style.MozTransitionDuration = 
    style.msTransitionDuration = 
    style.OTransitionDuration = 
    style.transitionDuration = speed + 'ms';

    style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
    style.msTransform = 
    style.MozTransform = 
    style.OTransform = 'translateX(' + dist + 'px)';

  }

  function animate(from, to, speed) {

    // if not an animation, just reposition
    if (!speed) {

      element.style.left = to + 'px';
      return;

    }
    
    var start = +new Date;
    
    var timer = setInterval(function() {

      var timeElap = +new Date - start;
      
      if (timeElap > speed) {

        element.style.left = to + 'px';

        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

        clearInterval(timer);
        return;

      }

      element.style.left = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';

    }, 4);

  }

  // setup auto slideshow
  var delay = options.auto || 0;
  var interval;

  function begin() {

    interval = setTimeout(next, delay);

  }

  function stop() {

    delay = 0;
    clearTimeout(interval);

  }


  // setup initial vars
  var start = {};
  var delta = {};
  var isScrolling;      

  // setup event capturing
  var events = {

    handleEvent: function(event) {

      switch (event.type) {
        case 'touchstart': this.start(event); break;
        case 'touchmove': this.move(event); break;
        case 'touchend': offloadFn(this.end(event)); break;
        case 'webkitTransitionEnd':
        case 'msTransitionEnd':
        case 'oTransitionEnd':
        case 'otransitionend':
        case 'transitionend': offloadFn(this.transitionEnd(event)); break;
        case 'resize': offloadFn(setup.call()); break;
      }

      if (options.stopPropagation) event.stopPropagation();

    },
    start: function(event) {

      var touches = event.touches[0];
      
//      options.beforestart && options.beforestart(index, slides[index], this);
      
//      move(0, -20, speed)
//      move(1, -20, speed)
//      move(2, -40, speed)
      
      // measure start values
      start = {

        // get initial touch coords
        x: touches.pageX,
        y: touches.pageY,

        // store time to determine touch duration
        time: +new Date

      };
      
      // used for testing first move event
      isScrolling = undefined;

      // reset delta and end measurements
      delta = {};

      // attach touchmove and touchend listeners
      element.addEventListener('touchmove', this, false);
      element.addEventListener('touchend', this, false);

    },
    move: function(event) {

      // ensure swiping with one touch and not pinching
      if ( event.touches.length > 1 || event.scale && event.scale !== 1) return

      if (options.disableScroll) event.preventDefault();

      var touches = event.touches[0];

      // measure change in x and y
      delta = {
        x: touches.pageX - start.x,
        y: touches.pageY - start.y
      }

      // determine if scrolling test has run - one time test
      if ( typeof isScrolling == 'undefined') {
        isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
      }

      // if user is not trying to scroll vertically
      if (!isScrolling) {

        // prevent native scrolling 
        event.preventDefault();

        // stop slideshow
        stop();

        // increase resistance if first or last slide
        if (options.continuous) { // we don't add resistance at the end

          translate(circle(index-1), delta.x + slidePos[circle(index-1)], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(circle(index+1), delta.x + slidePos[circle(index+1)], 0);

        } else {

          delta.x = 
            delta.x / 
              ( (!index && delta.x > 0               // if first slide and sliding left
                || index == slides.length - 1        // or if last slide and sliding right
                && delta.x < 0                       // and if sliding at all
              ) ?                      
              ( Math.abs(delta.x) / width + 1 )      // determine resistance level
              : 1 );                                 // no resistance if false
          
          // translate 1:1
          translate(index-1, delta.x + slidePos[index-1], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(index+1, delta.x + slidePos[index+1], 0);
        }

      }

    },
    end: function(event) {

//    	options.beforeend && options.beforeend(index, slides[index]);
    	
      // measure duration
      var duration = +new Date - start.time;

      // determine if slide attempt triggers next/prev slide
      var isValidSlide = 
            Number(duration) < 250               // if slide duration is less than 250ms
            && Math.abs(delta.x) > 20            // and if slide amt is greater than 20px
            || Math.abs(delta.x) > width/2;      // or if slide amt is greater than half the width

      // determine if slide attempt is past start and end
      var isPastBounds = 
            !index && delta.x > 0                            // if first slide and slide amt is greater than 0
            || index == slides.length - 1 && delta.x < 0;    // or if last slide and slide amt is less than 0

      if (options.continuous) isPastBounds = false;
      
      // determine direction of swipe (true:right, false:left)
      var direction = delta.x < 0;

      // if not scrolling vertically
      if (!isScrolling) {

        if (isValidSlide && !isPastBounds) {

          if (direction) {

            if (options.continuous) { // we need to get the next in this direction in place

              move(circle(index-1), -width, 0);
              move(circle(index+2), width, 0);

            } else {
              move(index-1, -width, 0);
            }

            move(index, slidePos[index]-width, speed);
            move(circle(index+1), slidePos[circle(index+1)]-width, speed);
            index = circle(index+1);  
                      
          } else {
            if (options.continuous) { // we need to get the next in this direction in place

              move(circle(index+1), width, 0);
              move(circle(index-2), -width, 0);

            } else {
              move(index+1, width, 0);
            }

            move(index, slidePos[index]+width, speed);
            move(circle(index-1), slidePos[circle(index-1)]+width, speed);
            index = circle(index-1);

          }

          options.callback && options.callback(index, slides[index]);

        } else {

          if (options.continuous) {

            move(circle(index-1), -width, speed);
            move(index, 0, speed);
            move(circle(index+1), width, speed);

          } else {

            move(index-1, -width, speed);
            move(index, 0, speed);
            move(index+1, width, speed);
          }

        }

      }

      // kill touchmove and touchend event listeners until touchstart called again
      element.removeEventListener('touchmove', events, false)
      element.removeEventListener('touchend', events, false)

    },
    transitionEnd: function(event) {
      if (parseInt(event.target.getAttribute('data-index'), 10) == index) {
        
        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

      }

    }

  }

  // trigger setup
  setup();

  // start auto slideshow if applicable
  if (delay) begin();


  // add event listeners
  if (browser.addEventListener) {
    
    // set touchstart event on element    
    if (browser.touch) element.addEventListener('touchstart', events, false);

    if (browser.transitions) {
      element.addEventListener('webkitTransitionEnd', events, false);
      element.addEventListener('msTransitionEnd', events, false);
      element.addEventListener('oTransitionEnd', events, false);
      element.addEventListener('otransitionend', events, false);
      element.addEventListener('transitionend', events, false);
    }

    // set resize event on window
    window.addEventListener('resize', events, false);

  } else {

    window.onresize = function () { setup() }; // to play nice with old IE

  }

  // expose the Swipe API
  return {
    setup: function() {

      setup();

    },
    slide: function(to, speed) {
      
      // cancel slideshow
      stop();
      
      slide(to, speed);

    },
    prev: function() {

      // cancel slideshow
      stop();

      prev();

    },
    next: function() {

      // cancel slideshow
      stop();

      next();

    },
    getPos: function() {

      // return current index position
      return index;

    },
    getNumSlides: function() {
      
      // return total number of slides
      return length;
    },
    kill: function() {

      // cancel slideshow
      stop();

      // reset element
      element.style.width = 'auto';
      element.style.left = 0;

      // reset slides
      var pos = slides.length;
      while(pos--) {

        var slide = slides[pos];
        slide.style.width = '100%';
        slide.style.left = 0;

        if (browser.transitions) translate(pos, 0, 0);

      }

      // removed event listeners
      if (browser.addEventListener) {

        // remove current event listeners
        element.removeEventListener('touchstart', events, false);
        element.removeEventListener('webkitTransitionEnd', events, false);
        element.removeEventListener('msTransitionEnd', events, false);
        element.removeEventListener('oTransitionEnd', events, false);
        element.removeEventListener('otransitionend', events, false);
        element.removeEventListener('transitionend', events, false);
        window.removeEventListener('resize', events, false);

      }
      else {

        window.onresize = null;

      }

    }
  }

}


if ( window.jQuery || window.Zepto ) {
  (function($) {
    $.fn.Swipe = function(params) {
      return this.each(function() {
        $(this).data('Swipe', new Swipe($(this)[0], params));
      });
    }
  })( window.jQuery || window.Zepto )
}function spDoGa(isCenterpage) {
	/* Meetrics */
	if( sp_webcfg_global.meetricsMX != undefined && sp_webcfg_global.meetricsMX != '') {
		(function() {
		  var mwa = document.createElement('script');
		  mwa.type = 'text/javascript'; mwa.async = true;
		  mwa.src = ('https:' == document.location.protocol ? 'https:/'+'/' : 'http:/'+'/') + sp_webcfg_global.meetricsMX;
		  var n = document.getElementsByTagName('script')[0];
		  n.parentNode.insertBefore(mwa, n);
		})();
	}
	
	/* Google Analytics */
	if( sp_webcfg_global.google_analytics != undefined && sp_webcfg_global.google_analytics == true) {
		(function(i,s,o,g,r,a,m){
			i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		 })(window,document,'script','/'+'/www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-26045149-1', 'auto' , {
        	anonymizeIp: true
        });
		ga('set', 'dimension1', window.location.hash);
        ga('send', 'pageview');
	}

	/* Outbrain */
	if(sp_webcfg_global.outbrain != undefined && sp_webcfg_global.outbrain == true && 'http:' == document.location.protocol) {
		var automate = (isCenterpage ? true : false);
		var _vrq = window._vrq = [];
		_vrq.push(['id', 768]);
		_vrq.push(['automate', automate]);
		_vrq.push(['track', function(){}]);
		(function(d, a){
			var s = d.createElement(a),
			x = d.getElementsByTagName(a)[0];
			s.async = true;
			s.src = 'http://a.visualrevenue.com/vrs.js';
			x.parentNode.insertBefore(s, x);
		})(document, 'script');
	}
	
	/* Linkpulse */
	if(sp_webcfg_global.linkpulse != undefined && sp_webcfg_global.linkpulse == true && 'http:' == document.location.protocol) {
		(function() {
		  var lipu = document.createElement('script');
		  lipu.type = 'text/javascript'; 
		  lipu.async = true;
		  lipu.src = '//pp.lp4.io/app/56/aa/07/56aa07b7e45a1df04402f66e.js';
		  var n = document.getElementsByTagName('script')[0];
		  n.parentNode.insertBefore(lipu, n);
		})();
	}

}

function spDoGoogleEnhancedEcommerce(isCenterpage)
{
    if( sp_webcfg_global.google_analytics != undefined && sp_webcfg_global.google_analytics == true && isCenterpage)
    {
        console.log("tracking laterpay events for centerpage/homepage");
        ga('require', 'ec');
        var usedPositions = [];
        $('.js-lp-article-link').each(function (index, elem) {
            var position = $(elem).attr("data-lp-position");
            if (position != null && $.inArray(position, usedPositions) < 0)
            {
                var id = $(elem).attr("data-lp-article-id");
                var name = $(elem).attr("data-lp-article-name");
                var category = $(elem).attr("data-lp-channel");
                var brand = $(elem).attr("data-lp-brand");
                var url      = window.location.href;
                ga("ec:addImpression", {
                  "id": 	id,
                  "name": name,
                  "category": category,
                  'brand': brand,
                  'variant': '',
                  'list': url,
                  'position': position
                });
                console.log("send tracking event for article " + id + ", on position " + position);
                //eventhandler für klick auf den artikellink
                $(elem).click(function() {
                    ga("ec:addProduct", {
                      "id": 	id,
                      "name": name,
                      "category": category,
                      'brand': brand,
                      'variant': '',
                      'list': url,
                      'position': position
                    });
                    ga('ec:setAction', 'click', {list: url});
                    ga('send', 'event', 'EC-Action', 'todetailclick', id);
                    console.log("send tracking event for click on article link " + id + ", on position " + position);
                });
                usedPositions.push(position);
            }
        });
        ga('send', 'pageview');
    }
}/* Notifier Top- und Eilmeldungen */
function Notifier() {
	var that = this;

	that.isStarted = false;
	that.isStartable = false;
	that.needsPermission = false;

	that.notifiedList = [];
	that.notifiedCount = 0;
	that.timer = null;
	that.refreshFrequency = 60000; // ms
	that.retryFrequency = 150000; // ms
	that.retry = false;
	that.token = null;
	that.icon = '/static/sys/v10/icons/touch-icon58.png';
	that.checkTopsFirst = true;

	that.addToList = function(articles) {
		if (typeof articles == "String") {articles = [articles];}
		var notify = [];

		for (var i=0; i<articles.length; i++) {
			var aid = articles[i];
//			console.log("SUCHE "+aid+" in",that.notifiedList);
			var pos = $.inArray(aid, that.notifiedList);
			if (pos == -1) {
				that.notifiedList.unshift(aid);
				notify.push(aid);
			} else {
//				console.log("Artikel #"+aid+" schon notified...",that.notifiedList, articles);
				if (pos > 10) {
					that.notifiedList.splice(pos,1);
					that.notifiedList.unshift(aid);
//					console.log("Artikel #"+aid+" von position "+pos+" an den Anfang notifiedList verschoben",that.notifiedList);
				}
			}
		}
		while (that.notifiedList.length > 20) that.notifiedList.pop(); 
		that.saveTops();
		return notify;
	};

	that.init = function() {
		that.notificationType = that.getNotificationType();
		that.isStarted = false;
		that.isStartable = false;
		that.needsPermission = false;

		if (that.notificationType) {
			if (that.hasPermission() == null) {
				that.needsPermission = true;
				$('.top-poster-startpage-content-notifier').show();
				$('.notifierstartbutton')	
					.text('Benachrichtigungen starten')
					.removeClass('disabled')
					.click(function() {that.requestPermission(that.init)});
			} else if (that.hasPermission()) {
				that.isStartable = true;
				that.start();
				$('.notifierstartbutton')	
					.text('Benachrichtigungen sind eingeschaltet')
					.addClass('disabled')
					.unbind('click');
			} else {
				$('.notifierstartbutton')	
					.text('Benachrichtigungen sind ausgeschaltet')
					.addClass('disabled')
					.unbind('click');
//				console.log("NOTIFIER NOT STARTED (no permission)");
			}
		} else {
			$('.notifierstartbutton')	
				.text('Ihr Browser unterstuetzt diese Funktion nicht')
				.addClass('disabled')
				.unbind('click');

//			console.log("NOTIFIER NOT STARTED (Browser does not support notifications)");
		}


	
	}

	
	that.start = function() {

		// read or generate token
		that.token = sessionStorage.getItem("token");
		if (that.token == null) {
			that.token = Math.floor(Math.random()*9999999999999999) + "-" + new Date().getTime();
			sessionStorage.setItem("token",that.token);
//			console.log("NEW NOTIFIER SESSSION: ",that.token);
		} else {
//			console.log("NOTIFIER SESSSION FOUND: ",that.token);
		}
		
		// check if another instance is active
//		console.log("activeToken", localStorage.getItem("token"))
		var lastUpdate = 0; 
		var item;
		try {
			item = localStorage.getItem("token");
		} catch(e) {
			return;
		}
		
		if (item != null) {
			if (that.token != localStorage.getItem("token")) {
				// check last update - if too old, set this session active
				if (localStorage.getItem("last") != null) {
					lastUpdate = new Date().getTime() - localStorage.getItem("last"); 
					if (lastUpdate < that.refreshFrequency * 2) {
//						console.log("NOTIFIER NOT STARTED (other session active)");
						that.checkTopsFirst = false;
						that.retry();
						return;
					} else {
//						console.log("last update of active session too old ("+lastUpdate+" ms) - set this session active");
						if (lastUpdate > 21600000) {
							// letztes Update > 6h -> keine Notification beim Start
//							console.log ("letztes Update > 6h -> keine Notification beim Start");
							that.checkTopsFirst = true;
						} else {
							that.checkTopsFirst = false;
						}
					}
				} else {
//					console.log("no last update found");
				}
			} else {
//				console.log("this token is marked active");
				lastUpdate = new Date().getTime() - localStorage.getItem("last"); 
				that.checkTopsFirst = false;
			}
		} else {
//			console.log("no active token found");
		}
		
		if (that.hasPermission() == null) {
			that.requestPermission(that.start);
//			console.log("NOTIFIER NOT YET STARTED (waiting for permission)");
			return;
		}
		
		if (that.hasPermission()) {
			that.updateNotifiedList();
			var realRefreshTime = that.refreshFrequency - lastUpdate;
			if (realRefreshTime <= 0) {
				that.refresh();
			} else {
				that.timer = setTimeout(that.refresh, realRefreshTime);
			}
//			console.log("NOTIFIER STARTED! lastUpdate: "+lastUpdate+", refresh in "+ realRefreshTime +"ms");
		} else {
//			console.log("NOTIFIER NOT STARTED (no permission)");
			return;
		}
	}

	that.stop = function() {
		if (that.timer != null)  {
			that.timer = clearTimeout(that.timer);
//			console.log("NOTIFIER STOPPED!");
		}
	}
	
	that.retry = function() {
//		console.log("Retry to start notifier in "+ that.retryFrequency + " ms");
		setTimeout(function(){that.start()}, that.retryFrequency);
	}

	that.updateNotifiedList = function() {
//		console.log("updateNotifiedList");
		localStorage.setItem("token",that.token);
		var notified = localStorage.getItem("Notifier.tops");
		if (notified != null) {
			that.notifiedList = notified.split(",");
//			console.log("NOTIFIED from localStorage:" , that.notifiedList)
		}
		 if (notified == null || that.checkTopsFirst) {
			that.getTops(function(tops) {
				that.addToList(tops);
			});
//			console.log("NOTIFIED get/save:" , that.notifiedList)
		}
	}
	that.refresh = function() {
//		console.log("REFRESH");
		that.getTops(function(tops) {
			var notify = that.addToList(tops);
			for (var i=0; i<notify.length; i++) {
				var aid = notify[i];
				$.ajax({
					type: "GET",
					url: spnetENV_SERVER + "/fragments/article/a-"+aid+".json",
					success: function(data) {
								var headline = data.topic;
								if (typeof headline != 'undefined' && headline != "" && !data.topic.match(/[:?!]$/)) {
									headline += ":";
								}
								headline += " " + data.title;
								// that.notify(headline,data.teaser);
								that.notify(headline, '');
							}
				});
			}
		});
		that.timer = setTimeout(that.refresh, that.refreshFrequency);
	}

	that.getNotificationType = function() {
		try {
			localStorage.setItem("test","1");
			localStorage.removeItem("test");
		}
		catch (e) {
			return 0;
		}

		// FF hart rausnehmen
		if (spUA.isFirefox())
			return 0;

		// (FF + Chrome + Safari)
		if (typeof window.Notification != 'undefined' && typeof window.Notification.permission != 'undefined') 
			return 1;
		

		// (Safari)
		if (window.webkitNotifications) 
			return 2;

//		if ('localStorage' in window && window['localStorage'] !== null && 'sessionStorage' in window && window['sessionStorage'] !== null)
//			return 3; // Test alert
		return 0;
	}

	that.getTops = function(callback) {
//		console.log("GET TOPS...");
		$.ajax({
			type: "GET",
			url: spnetENV_SERVER + "/jsapi/notification/top.json",
			success: function(data) {
						if (typeof callback != 'undefined') callback(data.articles);
					}
		});
	}
	
	that.saveTops = function() {
		localStorage.setItem("Notifier.tops", that.notifiedList.join(","));
		localStorage.setItem("last",new Date().getTime());
//		console.log("SAVED NOTIFIEDLIST: ", that.notifiedList.join(","));
	}
	
	that.hasPermission = function() {
		var p = null;
		if (that.notificationType == 1) {
//			alert("Notificaton.permission = "+Notification.permission)
			if (Notification.permission === "granted") {
				p = true
			} else if (Notification.permission === "denied") {
				p = false;
			}
		} else if(that.notificationType == 2) {
//			alert("window.webkitNotifications.checkPermission() = "+window.webkitNotifications.checkPermission());
			if (window.webkitNotifications.checkPermission() == 0) {
				p = true
			} else if (window.webkitNotifications.checkPermission() == 2) {
				p = false;
			}
		} else if(that.notificationType == 3) {
			p = sessionStorage.getItem("hasPermission");
		}
//		console.log("PERMISSION: ", p);
		return p;
	}

	that.requestPermission = function(callback) {
//		console.log("Requesting permission for notifications.");
		if (that.notificationType == 1) {
			Notification.requestPermission(callback);
		} else if(that.notificationType == 2) {
			webkitNotifications.requestPermission(callback); 
		} else if(that.notificationType == 3) {
			var c = confirm("Moechten Sie einen Hinweis bei neuen Nachrichten auf unserer Startseite bekommen?");
			sessionStorage.setItem("hasPermission", c);
			if (callback) callback();
		}
	}
	
	that.showHp = function() {
//		console.log("Show HP");
		var loc = document.location.pathname;
		document.location.href="/#ref=notification";
		if (loc == '/') document.location.reload();
		window.focus();
	}

	that.notify = function(title, text) {
		var notification = null;
		if (that.notificationType == 1) {
			var options = {};
			options['body'] = text;
			options['icon'] = that.icon;
			
			notification= new Notification(title, options);
			notification.onclick = that.showHp;
		} else if (that.notificationType == 2) {
			notification =  window.webkitNotifications.createNotification(that.icon, title, text);
			notification.onclick = that.showHp;
			notification.show();
		} else if (that.notificationType == 3) {
			var c = confirm(title + "\n" + text + "\n\n" + "Auf der Startseite anzeigen?");
			if (c) that.showHp();
		} else {
			return;
		}
		that.notifiedCount++;
//		console.log("NOTIFY: "+notification);
	}
};

$(document).ready( function() {
	var noti = new Notifier();
	noti.init();

});/* Paginator Memberposts */

function MemberPostPaginator(element, entries, userid) {
	var pp = this;

	this.pager = element;
	this.step = 20;
	this.entries = entries;
	this.pageElement = $(element).find("#memberPostList");
	this.currentOffset = null;
	this.setPos(0);
	this.userid = userid

	$(pp.pager).find(".js-article-comments-box-page-prev").each( function() {
		$(this).bind("click", function(ev) { pp.prev() });
	});
	$(pp.pager).find(".js-article-comments-box-page-next").each( function() {
		$(this).bind("click", function(ev) { pp.next() });
	});
}

MemberPostPaginator.prototype.offset = function(pos) {
	var pp = this;

	if (pos > this.entries) {
		pos = this.entries - this.entries % this.step;
	}
	if (pos < 0) {
		pos = 0;
	}
	
	if (pos != this.currentOffset) {
		var url = "/components/forum/memberposts-" + this.userid;
		if(pos > 0) {
			url += "-" + pos;
		}
		url += ".html";
		$("body").addClass("spWait");
		$.ajax({
			type: "GET",
			url: url,
			success: function(data) {
						pp.pageElement.replaceWith(data);
						pp.pageElement = $(pp.pager).find("#memberPostList");
						pp.setPos(pos);
						$("body").removeClass("spWait");

					},
			error: function(data) {
						$("body").removeClass("spWait");
					}
		});
	}
}

MemberPostPaginator.prototype.next = function() {
	this.offset(this.currentOffset + this.step);
}

MemberPostPaginator.prototype.prev = function() {
	this.offset(this.currentOffset - this.step);
}

MemberPostPaginator.prototype.setPos = function(pos) {
	var pp = this;
	if (pos == 0) {
		$(pp.pager).find(".js-article-comments-box-page-prev").each( function() {
			$(this).hide();
		});					
	} else if (pp.currentOffset == null || pp.currentOffset == 0) {
		$(pp.pager).find(".js-article-comments-box-page-prev").each( function() {
			$(this).show();
		});	
	}
	if (pos > pp.entries - pp.step) {
		$(pp.pager).find(".js-article-comments-box-page-next").each( function() {
			$(this).hide();
		});					
	} else if (pp.currentOffset == null || pp.currentOffset > pp.entries - pp.step) {
		$(pp.pager).find(".js-article-comments-box-page-next").each( function() {
			$(this).show();
		});
	}		
	this.currentOffset = pos;
}

function initForumChooser() {
	$('#chooserButton').click(function() { $('#chooserList').toggle(); });
	$('body').click(
		function(e) {
			if(e.target.id != 'chooserButton') {
				$('#chooserList').hide();
			}
		}
	);
}

function initFileUploader(uploadServer, maxFilecount) {
	fileCount = 0;
	var sponMapUploadButton = $('#threadUploadButton').empty();
	sponMapUploadButton.html('<input id="fileupload" type="file" multiple="multiple" name="qqfile" />Datei ausw&auml;hlen');
	$('#fileupload').fileupload({
		url: uploadServer + '/upload.php',
		dataType: 'json',
		dropZone: null,
		pasteZone: null,
		done: function (e, data) {
			if(data.result.success == true || data.result.success == 1) {
				var errorContainer = $('#forumNewThreadDialog .result');
				errorContainer.empty();
	    		errorContainer.hide();
				
				fileCount++;
				if (fileCount <= maxFilecount) {
					htmlid = "imageUpload-" + data.result.filename;
					var uploadDiv = $('<div id="' + htmlid + '" class="uploadthumb"></div>').appendTo('#uploadedImages');
					var close = $('<a>').appendTo(uploadDiv);
					close.click(function(event) {
						event.preventDefault();
						$(this).parent().remove();
						fileCount--;
						enableUpload();
					});
					
					uploadDiv.append('<img id="' + data.result.filename + '" src="' + uploadServer + "/public/tmpthumb/" + data.result.filename + '"/>');
				} else {
					fileCount = maxFilecount;
				}
				if(fileCount == maxFilecount) {
					disableUpload();
				}
			} else if (data.result.error.length > 0) {
				var errorContainer = $('#forumNewThreadDialog .result');
	    		errorContainer.html(data.result.error);
	    		errorContainer.css('float', 'left');
	    		errorContainer.show();
			}
			setTimeout(function() { $('#progress .bar').css('width', '0%'); }, 500);
        },
        submit: function(e, data) {
        	if(fileCount >= maxFilecount) {
				return false;
			}
        },
        progressall: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .bar').css('width', progress + '%');
        }
	});
	$('#fileupload').fileupload('option', {
	    xhrFields: {
	        withCredentials: true
	    }
	});
	$('#fileupload').fileupload(
	    'option',
	    'redirect',
	    location.protocol + '//' + location.hostname + '/result/postresult.html?%s'
	);
}

function disableUpload() {
	$('#fileupload').prop('disabled', true);
	$('#threadUploadButton').css({ color: '#ccc', cursor: 'auto' });
}

function enableUpload() {
	$('#fileupload').prop('disabled', false);
	$('#threadUploadButton').css({ color: '#900', cursor: 'pointer' });
}

function openPostGallery(postid, index) {
	var gallery = $('#postgallery' + postid);
	gallery.css("display","block");
	
	var scrollable = gallery.find('.scrollable').data('scrollable');
	var count = scrollable.getSize();
	var pos = scrollable.getIndex() + 1;
	
	gallery.find('#postGalleryPosition').html(pos + " von " + count);
	if (count > 1) {
		gallery.find('#postGalleryPrev').click(function(){ scrollable.prev(); });
		gallery.find('#postGalleryNext').click(function(){ scrollable.next(); });				
	} else {
		gallery.find('#postGalleryPrev').empty();
		gallery.find('#postGalleryNext').empty();
	}
				
	$("#postGalleryDialog").overlay({
		fixed: false,
		left: 0, // "center",
		top: 102,
		close: $(".closeDialog"),
		closeOnClick: true,
		load: true,
		mask: {
			color: "#000",
			loadSpeed: 200,
			opacity: 0.6
		},
		onClose: function(e) {
			gallery.find('#postGalleryPrev').unbind("click");
			gallery.find('#postGalleryNext').unbind("click");
			$(".postGallery").css("display","none");
		}
	});
	$("#postGalleryDialog").data("overlay").load();
	scrollable.seekTo(index);
}/* allgemeine Tools */
function HashParams() {
	var loc=(document.location+"");
	this.url = loc;
	this.hashQueryString = null;
	this.params = {};
	
	var pos=loc.indexOf("#");

	if (pos > -1) {
		this.hashQueryString = loc.substring(pos+1, loc.length);
		this.url 		 	 = loc.substring(0,pos);
		
		var pairs=this.hashQueryString.split("&");
		for (var i=0; i < pairs.length; i++) {
			var kv=pairs[i].split("=");
			if (kv.length == 2) 
				this.params[kv[0]]=decodeURIComponent(kv[1]);
		}
	}

	this.exist = function(which) {
		if (typeof which == 'undefined') {
			return (Object.keys(this.params).length > 0);
		} else {
			return (typeof this.params[which] != 'undefined');
		}
	}
	
	this.value = function(which) {
		return this.params[which];
	}
}/* allgemeiner Forms-Processor */
function FormsProcessor(id) {
	var that = this;

	that.id = id;
	that.processor = $("#"+id);
	that.form = $("#"+id+" form.forms-processor-form");
	that.box = $("#"+id+" .forms-messagebox")
	that.config = {};

	that.okmessage = '<strong>Ihre Nachricht wurde versandt</strong>';
	that.errormessage = '<strong>Ihre Nachricht konnte nicht versandt werden!</strong> Ein unbekannter Fehler ist aufgetreten';
	
	that.init = function(jsonconfig) {
		if (jsonconfig) {
			that.config = jsonconfig;
			if (jsonconfig.errormessage)
				that.errormessage = jsonconfig.errormessage;
			if (jsonconfig.okmessage)
				that.okmessage = jsonconfig.okmessage;
		}
		
		$(that.form).bind("submit", function(e) { that.send(); return false; });
		$(that.form).find("select.update").bind("change", function(e) { that.update(this) });
		$(that.form).find("textarea").val(function(index, value){ return $.trim(value); });
		
		// Pre-Select?
		var hashparams = new HashParams();
		if (hashparams.exist()) {
			$(that.form).find("select").each(function() {
				var elem = $(this);
				var name = elem.attr("name");
				if (elem.is(":visible")) {
					if (hashparams.exist("fp-"+name)) {
						elem.find("option[data-value='" + hashparams.value("fp-"+name) + "']").attr('selected',true);
						elem.trigger("change");
					}
				}
			});
		}
	}

	that.update = function(element) {

		$(that.box).empty()
		   .removeClass("messagebox")
		   .removeClass("ok")
		   .removeClass("error");
			
		var active_formpart = $(element).parent();
		var todo = $(active_formpart).find('select.update option:selected');
		
		// Felder trimmen
		$(that.form).find("textarea, input").val(function(index, value){ return $.trim(value); });
			
		// formparts nach dem aktuellen ausblenden und resetten
		var fparts = $(active_formpart).find('~ .formpart');
		$(fparts).hide();
		$(fparts).find(".error").removeClass("error");
		$(fparts).find('select.update').prop('selectedIndex',0);
		$(fparts).find('select.update option.info').show();
						
		// Display-Eigenschaften
		var allparts = $(that.form).find('.formpart');
		$(allparts).find(".formelement").removeClass("show")
									  	.removeClass("hide")
	  									.removeClass("req")
	  									.removeClass("noreq");
														
		var info = that.config;	

		$(allparts).filter(":visible").each(function(i, part) {
			var partkey = $(part).find('select.update option:selected').attr("data-value");
			$(part).find(".infobox").remove();
			if (partkey == null) {
				return true; // continue;
			}
			info = info[partkey];
			if (info == null) {
				return false; // break
			}
			if (info["display"]) {
				$.each(info["display"], function(key, value) {
					$('.formelement[data-id='+key+']').addClass(value ? 'show' : 'hide');
			    });
			}
			if (info["require"]) {
			    $.each(info["require"], function(key, value) {
			    	$('.formelement[data-id='+key+']').addClass(value ? 'req' : 'noreq');
			    });
			}
	
			if (info["infobox"]) {
				$(part).append($('<div>').addClass("infobox").html(info["infobox"]));
			}
	
		});
		
		// bitte waehlen etc. ausblenden
		if (!$(todo).hasClass("info")) {
			$(active_formpart).find('select.update option.info').hide();
		}
		
		// Folge-Formpart einblenden
		if ($(todo).attr("data-formpart")) {
			$(that.form).find('.formpart[data-id='+$(todo).attr("data-formpart")+']').show();
		}
		if ($(todo).attr("data-action") == "send") {
			$(that.form).find('.formpart[data-id=send]').show();
		}
		return false;
	};

	
	that.send = function() {
	
		that.disable();

		$(that.box).empty()
		   .removeClass("messagebox")
		   .removeClass("ok")
		   .removeClass("error");
		
		var postdata = {};
		var errordata = {};
		var isError = false;
		
		// check required
		var allparts = $(that.form).find('.formpart').filter(":visible");
		
		// trimmen
		$(allparts).find("textarea, input").val(function(index, value){ return $.trim(value); });
		// error reset
		$(allparts).find(".error").removeClass("error");
		

		$(allparts).each(function(i, part) {
			var fields = $(part).find(".required, .req").find("[name]").filter(":visible");
			$(fields).each( function(i, field) {
				if ($(field).val() == '') {
					$(field).addClass("error")
					 		.focus(function() {$(this).removeClass("error")});
					isError = true;
				}
			});
		});
		if (isError) {
			$(that.box)	.addClass("messagebox error")
						.html(that.errormessage);
			that.enable();
		} else {

			$(allparts).each(function(i, part) {
				var fields = $(part).find("[name]").filter(":visible");
				$(fields).each( function(i, field) {
					if ($(field).attr("type") == 'checkbox') {
						postdata[$(field).attr("name")] = $(field).is(':checked') ? 'ja' : 'nein';
					} else {
						postdata[$(field).attr("name")] = $(field).val();
					}
				});
			});

			// Konfiguration auslesen
			postdata["forms-config-xmlid"]  = $(that.processor).attr("data-forms-config-xmlid");
			postdata["forms-config-formid"] = that.id;
			
			var formsConfigPath = "";
			$(allparts).find('select.config').each(function(i, elem) {
				if (formsConfigPath != "") formsConfigPath +="&";
				formsConfigPath += $(elem).attr("name") + "=" + $(elem).find("option:selected").attr("data-value"); 
			});
			postdata["forms-config-path"] = formsConfigPath; 

			var formsConfigLabel = "";
			$(allparts).find("[name][data-label]").each(function(i, elem) {
				if (formsConfigLabel != "") formsConfigLabel +="&";
				formsConfigLabel += $(elem).attr("name") + "=" + $(elem).attr("data-label"); 
			});
			postdata["forms-config-label"] = formsConfigLabel; 
			
			$.ajax({
				type : "POST",
				url : $(that.processor).attr("data-forms-action"),
				contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType : "json",
				data: postdata
			})
			
			.done(function( data ) {
							if (data.rawmail) {
								$(that.box).addClass("messagebox ok")
										   .html("Auf diesem System werden keine Mails verschickt..<br />Hier die Mail samt Headern:<br /><br />")
										   .append($('<pre>').text(data.rawmail));
								that.enable();

					
							} else {
								$(that.box).html(that.okmessage)
										   .addClass("messagebox ok");
								$(that.form).remove();
								that.enable();
							};
			})
			
			.fail(function(data) {
							var msg;
							var resp = data.responseText;
							if (resp.status.errormessageinternal) {
								msg = resp.status.errormessageinternal;
							} else {
								msg = 'Ein Fehler ist aufgetreten.';
							}
							$(that.box)	.html('<strong>'+msg+'</strong>')
										.addClass("messagebox error");

							that.enable();

			});
		}
		return false;
	};
	
	that.disable = function() {

		$(that.processor).addClass("wait")
						 .find("input[type=submit]").addClass("disabled");
	}
	that.enable = function() {

		$(that.processor).removeClass("wait")
		 				 .find("input[type=submit]").removeClass("disabled");
		
		if ($(that.box).hasClass("messagebox")) {

			// Mitte des Screens
			var screenY	= $(document).scrollTop();
			var screenH = $(window).height();
			var boxY    = $(that.processor).offset().top;
			var boxH    = $(that.processor).height();

			var bestPos = boxY - (screenH-boxH)/2;
			if (bestPos < 0) bestPos = 0;
			if (bestPos > boxY) bestPos = boxY -20;

			if (screenY > boxY || screenY+screenH < boxY+boxH+20) {
				$('html, body').animate({
				    scrollTop: bestPos
				});
			}
		}

	}

};



!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,h,e=this;if(e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rtl:!1,slide:"",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,g=e.options.responsive||null,g&&g.length>-1){e.respondTo=e.options.respondTo||"window";for(h in g)g.hasOwnProperty(h)&&(e.breakpoints.push(g[h].breakpoint),e.breakpointSettings[g[h].breakpoint]=g[h].settings);e.breakpoints.sort(function(a,b){return e.options.mobileFirst===!0?a-b:b-a})}"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(e.hidden="msHidden",e.visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.init(),e.checkResponsive()}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=null!==c.options.asNavFor?a(c.options.asNavFor).slick("getSlick"):null;null!==d&&d.slideHandler(b,!0)},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),b.options.centerMode===!0&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.checkResponsive=function(){var c,d,e,b=this,f=b.$slider.width(),g=window.innerWidth||a(window).width();if("window"===b.respondTo?e=g:"slider"===b.respondTo?e=f:"min"===b.respondTo&&(e=Math.min(g,f)),b.originalSettings.responsive&&b.originalSettings.responsive.length>-1&&null!==b.originalSettings.responsive){d=null;for(c in b.breakpoints)b.breakpoints.hasOwnProperty(c)&&(b.originalSettings.mobileFirst===!1?e<b.breakpoints[c]&&(d=b.breakpoints[c]):e>b.breakpoints[c]&&(d=b.breakpoints[c]));null!==d?null!==b.activeBreakpoint?d!==b.activeBreakpoint&&(b.activeBreakpoint=d,"unslick"===b.breakpointSettings[d]?b.unslick():(b.options=a.extend({},b.originalSettings,b.breakpointSettings[d]),b.refresh())):(b.activeBreakpoint=d,"unslick"===b.breakpointSettings[d]?b.unslick():(b.options=a.extend({},b.originalSettings,b.breakpointSettings[d]),b.refresh())):null!==b.activeBreakpoint&&(b.activeBreakpoint=null,b.options=b.originalSettings,b.refresh())}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||a(b.target).parent().index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c);break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("data-slick-index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""}),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized"),b.$list.off(".slick"),a(window).off(".slick-"+b.instanceUid),a(document).off(".slick-"+b.instanceUid),b.$slider.html(b.$slides)},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)d=Math.ceil(a.slideCount/a.options.slidesToScroll);else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var a=this,b=0,c=0,d=[],e=a.options.infinite===!1?a.slideCount-a.options.slidesToShow+1:a.slideCount;for(a.options.centerMode===!0&&(e=a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.updateArrows(),b.updateDots()),b.$slider.trigger("init",[b])},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}).on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()})},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),b.options.autoplay===!0&&(a(document).on(b.visibilityChange,function(){b.visibility()}),b.options.pauseOnHover===!0&&(b.$list.on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}),b.$list.on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()}))),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.options.slide,b.$slideTrack).on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,function(){b.checkResponsive(),b.setPosition()}),a(window).on("resize.slick.slick-"+b.instanceUid,function(){a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))}),a("*[draggable!=true]",b.$slideTrack).on("dragstart",function(a){a.preventDefault()}),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy");b.load(function(){b.animate({opacity:1},200)}).css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.init(),b.changeSlide({data:{message:"index",index:c}},!0)},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.options.slide,b.$slideTrack).on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b])},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;if(a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1)a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length));else if(a.options.variableWidth===!0){var b=0;a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.children(".slick-slide").each(function(){b+=a.listWidth}),a.$slideTrack.width(Math.ceil(b)+1)}else a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length));var c=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-c)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:800,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(a,b,c){var d=this;d.options[a]=b,c===!0&&(d.unload(),d.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active"):d.length<=b.options.slidesToShow?d.addClass("slick-active"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.selectHandler=function(b){var c=this,d=parseInt(a(b.target).parents(".slick-slide").attr("data-slick-index"));return d||(d=0),c.slideCount<=c.options.slidesToShow?(c.$slider.find(".slick-slide").removeClass("slick-active"),c.$slides.eq(d).addClass("slick-active"),c.options.centerMode===!0&&(c.$slider.find(".slick-slide").removeClass("slick-center"),c.$slides.eq(d).addClass("slick-center")),c.asNavFor(d),void 0):(c.slideHandler(d),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?i.fadeSlide(e,function(){i.postSlide(e)}):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible").css("width","")},b.prototype.unslick=function(){var a=this;a.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))
},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):(a.paused=!1,a.autoPlay())},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a},a(function(){a("[data-slick]").slick()})});var SPLaterpay = (function ()
{

    return {
        callback: {
            hasAccess: function ()
            {
                console.log("SPLaterpay: User has access");
                deobfuscateText();
                handleTrackingEvent("User has Access", null);
            },
            handleTrackingEvent: function (eventAction, done)
            {
                return handleTrackingEvent(eventAction, done);
            }
        }
    };

    function deobfuscateText()
    {
        $('p.obfuscated').each(function (index, elem)
                               {
                                   replaceTextContent(elem);
                                   $(elem).removeClass("obfuscated").addClass("deobfuscated");
                               });
        $('div.obfuscated-content').each(function (index, elem)
                                         {
                                             $(elem).removeClass("obfuscated-content").addClass("deobfuscated-content");
                                         });
    }

    function replaceTextContent(elem)
    {
        $(elem).contents()
                .filter(function ()
                        {
                            return this.nodeType === 3;
                        })
                .replaceWith(function ()
                             {
                                 var obfuscatedText = this.data;
                                 var deobfuscatedText = "";
                                 for (var i = 0; i < obfuscatedText.length; i++)
                                 {
                                     var charValue = obfuscatedText.charCodeAt(i);
                                     if (charValue == 177)
                                     {
                                         deobfuscatedText += '&';
                                     }
                                     else if (charValue == 178)
                                     {
                                         deobfuscatedText += '!';
                                     }
                                     else if (charValue == 180)
                                     {
                                         deobfuscatedText += ';';
                                     }
                                     else if (charValue == 181)
                                     {
                                         deobfuscatedText += '=';
                                     }
                                     else if (charValue == 32)
                                     {
                                         deobfuscatedText += ' ';
                                     }
                                     else if (charValue > 33)
                                     {
                                         deobfuscatedText += String.fromCharCode(charValue - 1);
                                     }
                                 }
                                 return deobfuscatedText;
                             })
                .end()
                .filter(function ()
                        {
                            return this.nodeType === 1
                                    && !$(this).hasClass("text-link-int")
                                    && !$(this).hasClass("text-link-ext")
                                    && !$(this).hasClass("lp-text-link-int")
                                    && !$(this).hasClass("lp-text-link-ext")
                                    && !$(this).hasClass("spCelink");
                        })
                .each(function ()
                      {
                          replaceTextContent(this);
                      });
    }

    function handleTrackingEvent(eventAction, done)
    {
        console.log("SPLaterpay: handle tracking event " + eventAction);
        if (typeof ga == "undefined")
        {
            (function(i,s,o,g,r,a,m){
          			i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          		 })(window,document,'script','/'+'/www.google-analytics.com/analytics.js','ga');
          		ga('create', 'UA-26045149-1', 'auto');
                ga("set", "anonymizeIp", true);
        }
        ga('require', 'ec');
        var elem = $("body");
        var id = $(elem).attr("data-lp-article-id");
        var category = $(elem).attr("data-lp-channel");
        var brand = $(elem).attr("data-lp-brand");
        var price = $(elem).attr("data-lp-price");
        var title = $(".article-title").text();
        if ("Paid Content Replacement Show" == eventAction)
        {
            ga('ec:addProduct', {
                'id': id,
                'name': title,
                'category': category,
                'brand': brand,
                'variant': ''
            });
            ga('ec:setAction', 'detail');
            ga('send', 'pageview');
        }
        else if ("Paid Content Purchase" == eventAction)
        {
            ga('ec:addProduct', {
                'id': id,
                'name': title,
                'category': category,
                'brand': brand,
                'variant': '',
                'price': price,
                'quantity': 1
            });
            ga('ec:setAction', 'checkout');
            ga('send', 'event', 'EC-Action', 'checkout', id);
        }
        else if ("Purchase Complete" == eventAction)
        {
            $(document).ready(function ()
              {
                  var elem = $("body");
                  var id = $(elem).attr("data-lp-article-id");
                  var category2 = $(elem).attr("data-lp-channel");
                  var brand = $(elem).attr("data-lp-brand");
                  var price = $(elem).attr("data-lp-price");
                  var title = $(".article-title").text();
                  ga('ec:addProduct', {
                                  'id': id,
                                  'name': title,
                                  'category': category2,
                                  'brand': brand,
                                  'variant': '',
                                  'price': price,
                                  'quantity': 1
                              });
                              ga('ec:setAction', 'purchase', {
                                  'id': id,
                                  'affiliation': 'Laterpay',
                                  'revenue': price,
                                  'coupon': 'credit'
                              });
                              ga('send', 'event', 'EC-Action', 'conversion', id);
              });


        }
        else if ("User has Access" == eventAction)
        {
            ga('send', 'event', 'EC-Action', 'view', id);
        }
        done();
        return false;
    }
})();

var SPLaterpayCallbackHasAccess = function ()
{
    return SPLaterpay.callback.hasAccess();
};

var SPLaterpayCallbackTrackingEvent = function (eventAction, done)
{
    return SPLaterpay.callback.handleTrackingEvent(eventAction, done);
};

//legacy 6.30 (raus nach 7.0)
function initKalooga() {};

// legacy functions: V3.16 
function spClientIsIPad() {
	return spUA.isIPad();
}
function spClientIsIPhone() {
	return spUA.isIPhone();
}
function spClientIsIPod() {
	return spUA.isIPod();
}
function spClientIsIDevice() {
	return spUA.isIDevice();
}
/* V3.19
 * $().spBrowserDetector().isDevice()
 * $().spBrowserDetector().isiPad()
 * $().spBrowserDetector().isBlackberry()
 */

/* tabbed html-assets */
function spToggleMPC(cid,nr) {
	for (i=1;i<=50;i++) {
		var mytab = document.getElementById('spMPCTab-'+cid+'-'+i);
		if (mytab) {
			if (nr == i) {
				mytab.className = 'spMPCTab spMPCTabAktiv';
				document.getElementById('spMPCContent-'+cid+'-'+i).style.display = 'block';
				spCounterContentainer(cid);
			} else {
				mytab.className = 'spMPCTab';
				document.getElementById('spMPCContent-'+cid+'-'+i).style.display = 'none';
			}
		} else {
			break;
		}
	}
}


