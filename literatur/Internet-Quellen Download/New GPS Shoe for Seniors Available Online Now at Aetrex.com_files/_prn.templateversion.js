define(['jquery'], function($) {
    return function prnTemplateVersion() {
        var templateVersion = serverJSONObj.templateVersion;
        console.log("serverJSONObj.includeImageScrollJS:: " + serverJSONObj.includeImageScrollJS);
        if (serverJSONObj.includeImageJS || serverJSONObj.contentTypeName == "PRN News Release" || serverJSONObj.contentTypeName == "PRN QA News Release" || serverJSONObj.contentTypeName == "PRN DEV News Release") {
            try {
                if (serverJSONObj.includeImageScrollJS) {
                    initSlideShow();
                    console.log("initialSlideShow");
                }
            } catch (err) {
                console.log("error" + err);
            }
            var imgs = document.getElementsByTagName('IMG');
            var imgHeight = 0;
            var imgWidth = 0;
            var divs = document.getElementsByTagName('DIV');
            var carimages = $('img.logo').length;
            var tempDetailPage = document.getElementById("templateDetailPage");
            // Commented below for loop as we are not using 'dvPrettyImage' div  (prettyphoto)
            /*   for (var i = 0; i < imgs.length; i++) {
        var imgItem = imgs[i];
        if (imgItem.getAttribute('rel') == "newsImage") {
			
			//Condition to scale the images and center align
			var imageIndex = imgItem.id.substring(imgItem.id.indexOf("_")-(-1));
			var imgDiv = document.getElementById("dvPrettyImage_"+imageIndex);
			//Center aligning image to container
			if(imgDiv.className == "highlightedLogo" && imgDiv.id== "dvPrettyImage_1" && carimages == 1)
			{
			var imgMaxWidth = 400;
	        var imgMaxHeight = 250;		
			}
			else
			{
			var imgMaxWidth = 175;
	        var imgMaxHeight = 175;	
			}
			if(imgItem.height > imgMaxHeight)
				imgItem.height = imgMaxHeight;
			if(imgItem.width > imgMaxWidth)
				imgItem.width = imgMaxWidth;
			if(imgDiv.className == "highlightedLogo" && imgDiv.id== "dvPrettyImage_1" && carimages == 1)
			{
			var leftMargin = (400 - imgItem.width)/2;	
			var botMargin = (250 - imgItem.height)/2;
			}
			else
			{
			var leftMargin = (176 - imgItem.width)/2;
			var botMargin = (175 - imgItem.height)/2;
			}
			imgDiv.style.marginLeft = leftMargin + "px";
			imgDiv.style.marginBottom = botMargin + "px";
			
			if(document.getElementById("imgVideo_"+imageIndex) != null)
			{
				var playIcon = document.getElementById("imgVideo_"+imageIndex);document.getElementById("imgVideo_"+imageIndex);
				playIconLeftMargin = (imgItem.width-52)/2;//52 is play icon width, 2 is image border
				playIconBottomMargin = (imgItem.height-52)/2;//52 is play icon height, 2 is image border
				playIcon.style.marginLeft = playIconLeftMargin+"px";
				playIcon.style.marginBottom = playIconBottomMargin+"px";
			}
			
			else
			{
			 if (imgItem.height > imgHeight) 
                imgHeight = imgItem.height;
			}
           imgWidth += imgItem.width + 20;
        }
        
    } */

            for (var i = 0; i < divs.length; i++) {
                if (divs[i].getAttribute('rel') != null && divs[i].getAttribute('rel') == "newsImageSlider") {

                } else
                if (divs[i].getAttribute('rel') != null && divs[i].getAttribute('rel') == "newsImageDiv") {
                    if (imgWidth > 600) {
                        divs[i].style.width = 685 + 'px';
                    } else {
                        divs[i].style.width = parseInt(imgWidth) + 'px';
                    }

                    if (document.getElementById("dvFlexViewall") != null)
                        document.getElementById("dvFlexViewall").style.width = parseInt(imgWidth) + 'px';
                } else
                if (divs[i].getAttribute('rel') != null && divs[i].getAttribute('rel').indexOf("newsImage") > -1) {

                } else if (location.search.toLowerCase().indexOf('ispopup') == -1 && divs[i].className == "divOverflow" && divs[i].offsetWidth < divs[i].scrollWidth) {
                    console.log("tempDetailPage::" + tempDetailPage.className);
                    if (tempDetailPage.className == 'templateDetailPage' || tempDetailPage.className == 'legacyDetailPage') {
                        divs[i].className = "divOverflow table-wide release-table table-Overflow";
                        if (tempDetailPage.className == 'legacyDetailPage') {
                            document.getElementById("dvWideRelease").style.display = "inline";
                        }
                        /*$('.table-wide table').each(function() {
                        	var attributes = this.attributes;
                        	var i = attributes.length;
                        	while( i-- ){
                        		this.removeAttributeNode(attributes[i]);
                        	}
                        	});
                        $(".table-wide table").addClass("table");*/
                    }
                } else if (location.search.toLowerCase().indexOf('ispopup') >= 0 && divs[i].className == "divNoOverflow" && divs[i].offsetWidth < divs[i].scrollWidth) {
                    console.log("ispopup condition tempDetailPage::" + tempDetailPage.className);
                    if (tempDetailPage.className == 'templateDetailPage' || tempDetailPage.className == 'legacyDetailPage') {
                        divs[i].className = "divNoOverflow table-wide release-table";
                    }
                    /*$('.table-wide table').each(function() {
                    	var attributes = this.attributes;
                    	var i = attributes.length;
                    	while( i-- ){
                    		this.removeAttributeNode(attributes[i]);
                    	}
                    	});
                    $(".table-wide table").addClass("table");*/
                }

            }

            //Headline space formatting
            var headlineImg = document.getElementById("imgHeadline");
            if (headlineImg != null) {
                if (headlineImg.width > 144) {
                    headlineImg.width = 144;
                }

                var dvHeadlineObj = document.getElementById("dvHeadline");
                var dvHeadObj = document.getElementById("dvHead");
                var dvHeadlineImgObj = document.getElementById("dvHeadlineImg");
                var h1HeadlineObj = document.getElementById("h1Headline");
                var imgHeight = dvHeadlineImgObj.offsetHeight;
                var dvHeadlineHeight = dvHeadlineObj.offsetHeight;
                if (imgHeight > dvHeadlineHeight) {
                    var diff = imgHeight - dvHeadlineHeight;
                    dvHeadlineObj.style.marginTop = diff + "px";
                    dvHeadObj.style.height = h1HeadlineObj.offsetHeight + "px";
                }
            }
            $(".table-Overflow").before('<a class="btn btn-default hidden-xs hidden-sm hidden-tablet btn-view-larger-table mb-lg" onclick="javascript:OpenRelPopup();return false;" alt="Click to view news release full screen" title="Click to view news release full screen"><i class="fa fa-expand"></i>View Table Fullscreen</a>');
            $("table").wrap("<div class='table-responsive'></div>");
            console.log("loaded");
        }
    }
});

