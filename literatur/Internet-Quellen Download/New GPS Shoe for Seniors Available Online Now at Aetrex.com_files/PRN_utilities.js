function displayOMC()
 {
	var url=document.URL;
	/* if(url.indexOf('dev') > -1 || url.indexOf('stage') > -1){
	var portalHTML="<div style='height:5px;width:100%'></div><iframe frameborder='0' scrolling='no' width='100%' height='139px' src='https://portalqa.prnewswire.com/login_g.aspx'></iframe><div class='horizontalline' style='margin-bottom:-7px'>&nbsp;</div>";
	}else{
	var portalHTML="<div style='height:5px;width:100%'></div><iframe frameborder='0' scrolling='no' width='100%' height='139px' src='https://portal.prnewswire.com/login_g.aspx'></iframe><div class='horizontalline' style='margin-bottom:-7px'>&nbsp;</div>";
	}
	var portalCookie=readCookie('ObSSOCookie');
	if(portalCookie==null || portalCookie==""){
	document.getElementById("portalarea").innerHTML=portalHTML;
	} else{
	if(url.indexOf('dev') > -1 || url.indexOf('stage') > -1){
	document.location = "http://portalqa.prnewswire.com";
	}else{
	document.location = "http://portal.prnewswire.com";
	}
	} */
	
	if(url.indexOf('dev') > -1 || url.indexOf('stage') > -1){
	document.location = "http://portalqa.prnewswire.com";
	}else{
	document.location = "http://portal.prnewswire.com";
	}
 }

function displayColor(dispID)
 {
  var omcID = document.getElementById(dispID);
  omcID.style.color="#ffffff";
  omcID.style.cursor="pointer";
 }
 
function displayColor1(dispID1)
 {
  var omcID1 = document.getElementById(dispID1);
  omcID1.style.color="#848484";
 }

function randomString(length)
 {
  chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  pass = "";
  for(x=0;x<length;x++)
  {
    i = Math.floor(Math.random() * 62);
    pass += chars.charAt(i);
  }
  return pass;
 }

function checkDotcomDate(){
  var date = document.getElementById('datepicker').value;
  var SplitResult = date.split("/");
  document.getElementById('month').value = (SplitResult[0]-1);
  document.getElementById('day').value = SplitResult[1];
  document.getElementById('year').value = SplitResult[2];
  }
