function getParameterByName(name) {
match = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
clicktags = ["clicktag", "clicktag1", "clicktag2", "clicktag3", "clicktag4", "clicktag5", "clicktag6", "clicktag7", "clicktag8", "clicktag9"];

for (var i = 0; i < clicktags.length; i++) {
tmpClicktag = getParameterByName(clicktags[i]);

if (tmpClicktag !== null) {
window[clicktags[i]] = tmpClicktag;
}
}