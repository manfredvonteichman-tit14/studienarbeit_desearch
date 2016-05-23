var titleAF = document.title;
var urlAF = document.location;
function addBookmark(title,url) {
if(document.all) {
window.external.AddFavorite( urlAF, titleAF);
} else {	window.sidebar.addPanel(titleAF, urlAF,""); 
}}

function setashomepage(hptext){
if (navigator.appName == "Netscape"){
alert(hptext);
} else{
document.getElementById("homepagebutton").style.behavior='url(#default#homepage)';
document.getElementById("homepagebutton").setHomePage(urlAF);
}}