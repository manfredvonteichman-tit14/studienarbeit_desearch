	define([],function(){ 
	 checkEnter= function(e,isModal,sticky) {
		var characterCode;
		isModal = typeof(isModal) !== 'undefined' ? isModal : false;
		sticky = typeof(isModal) !== 'undefined' ? sticky : false;
		if (e && e.which) {
			e = e;
			characterCode = e.which;
		} else {
			e = event;
			characterCode = e.keyCode;
		}

		if (characterCode == 13) {
			return validateChangeSearchURL(isModal,sticky);
		} else {
			return true;
		}
	};

	srchValidate= function(isModal, sticky) {
		isModal = typeof(isModal) !== 'undefined' ? isModal : false;
		sticky = typeof(isModal) !== 'undefined' ? sticky : false;
		if (isModal && !sticky) {
			var txt = document.getElementById("searchModaltxt").value;
			document.getElementById("searchModaltxt").value = txt.replace(/[^a-zA-Z0-9\@\#\%\/\$\!\&\-\"\.\,\'\s]/g, ''); //Remove any special characters
			var searchTxt = document.getElementById("searchModaltxt");
			var dvError = document.getElementById("dvModalError");
		} 
		else if(sticky)
		{
			txt = document.getElementById("searchtxtSticky").value;
			document.getElementById("searchtxtSticky").value = txt.replace(/[^a-zA-Z0-9\@\#\%\/\$\!\&\-\"\.\,\'\s]/g, '');        
			searchTxt = document.getElementById("searchtxtSticky");
			dvError = document.getElementById("dvErrorSticky");
		}
		else {
			var txt = document.getElementById("searchtxt").value;
			document.getElementById("searchtxt").value = txt.replace(/[^a-zA-Z0-9\@\#\%\/\$\!\&\-\"\.\,\'\s]/g, ''); //Remove any special characters
			var searchTxt = document.getElementById("searchtxt");		
			var dvError = document.getElementById("dvError");

		}



		if (txt.trim() == "") {
			var errorHTML = "<div class='alert alert-danger alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Please enter search key words</div>"
			dvError.innerHTML = errorHTML;
			document.getElementById("searchModaltxt").value = "";
			document.getElementById("searchtxt").value = "";
			document.getElementById("searchtxtSticky").value = "";
			searchTxt.focus();
			return false;
		} else {
			if (txt.length > 255) {
				var errorHTML = "<div class='alert alert-danger alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Search terms cannot exceed 255 characters.</div>"
				dvError.innerHTML = errorHTML;
				searchTxt.focus();
				return false;
			} else {
				return true;
			}
		}
	};

	CloseError= function() {
		document.getElementById("dvError").style.display = "none";
	};

	signUpValidate= function() {
		var email = document.getElementById("Email").value;
		if (email == "") {
			document.getElementById("dvSignUpError").style.display = "inline";
			document.getElementById("lblSignUpError").innerHTML = "Please enter email address";
			document.getElementById("Email").focus();
			return false;
		} else {
			var emailValid = /^[a-zA-Z0-9_!&=`~#%'\/\$\^\|\+\?\{\}-]+(\.[a-zA-Z0-9_!&=`~#%'\/\$\^\|\+\?\{\}-]+)*@[a-zA-Z0-9]([a-zA-Z0-9_-])*(\.[a-zA-Z0-9][a-zA-Z0-9_-]*)+$/;
			if (!emailValid.test(email)) {
				document.getElementById("dvSignUpError").style.display = "inline";
				document.getElementById("lblSignUpError").innerHTML = "Please enter valid email address";
				document.getElementById("Email").focus();
				return false;
			}
		}
		return true;
	};

	CloseSignUpError= function() {
		document.getElementById("dvSignUpError").style.display = "none";
	};


	
	
	var currentSelectedState = "-1";
	SelectRegion= function (regionList) {
		document.getElementById("stateList_" + currentSelectedState).style.display = "none";
		currentSelectedState = regionList.options[regionList.selectedIndex].value;
		document.getElementById("stateList_" + currentSelectedState).style.display = "inline";
	};
	

	ToggleSearchCategories= function (parentFld, childCtrl) {
		if (parentFld.src.indexOf("open_PRN.gif") != "-1") {
			parentFld.src = "http://content.prnewswire.com/designimages/closed_PRN.gif";
			/* PRN-964 */
			document.getElementById(childCtrl).style.display = "block";
		} else {
			parentFld.src = "http://content.prnewswire.com/designimages/open_PRN.gif";
			document.getElementById(childCtrl).style.display = "none";
		}
	};

	ToggleAllSelection= function (parentSelection, childCtrl) {
		var childUl = document.getElementById(childCtrl);
		for (var i = 0; i < childUl.childNodes.length; i++) {
			var node = childUl.childNodes[i];

			if (node.nodeName == "LI") {
				for (var j = 0; j < node.childNodes.length; j++) {
					var subNode = node.childNodes[j];
					if (subNode.nodeName == "INPUT") {
						subNode.checked = parentSelection;
					}
				}
			}
		}
	};

	ResetAdvancedSearchFields= function () {
		document.getElementById("txtSearch").value = "";
		document.getElementById("ddldatePublished").selectedIndex = 0;

		//industries
		var counter = 0;
		for (var i = 0; i < document.forms[1].elements.length; i++) {
			if (document.forms[1].elements[i].nodeName == "INPUT")
				document.forms[1].elements[i].checked = false;
		}

	};

	// Commented the below function related to organization search to ignore this from Cat's Eye live.
	ValidateOrgSearch= function () {
		if (document.getElementById("txtOrgSearch").value == "") {
			document.getElementById("lblOrgError").style.display = "inline";
			document.getElementById("txtOrgSearch").focus();
			return false;
		} else {
			document.getElementById("lblOrgError").style.display = "none";
			document.orgSearch.submit();
		}
	};


	OnAdvSearchLoad= function () {
		var catArr = new Array();
		catArr[0] = "Industry";
		catArr[1] = "Subject";
		catArr[2] = "Geography";

		for (var catIndex = 0; catIndex < catArr.length; catIndex++) {


			var indCount = document.getElementById("hdn" + catArr[catIndex] + "Count").value;

			for (var indCounter = 1; indCounter <= indCount; indCounter++) {
				var chkCat = document.getElementById("chk" + catArr[catIndex] + indCounter);
				var ulCat = document.getElementById("ul" + catArr[catIndex] + indCounter);
				var chlCount = document.getElementById("hdn" + catArr[catIndex] + "Count" + indCounter).value;

				if (chkCat.checked == false) {
					var isChildChecked = false;
					for (var chlCounter = 1; chlCounter <= chlCount; chlCounter++) {
						if (document.getElementById("chk" + catArr[catIndex] + indCounter + "chld" + chlCounter).checked == true) {
							isChildChecked = true;
							ToggleSearchCategories(document.getElementById("img" + catArr[catIndex] + indCounter), "ul" + catArr[catIndex] + indCounter);
							break;
						}
					}
				}
			}
		}
		window.scroll(0, 0);
	};
	
	// Added for SEO friendly search ULRs
	validateChangeSearchURL= function (isModal,sticky) {
		isModal = typeof(isModal) !== 'undefined' ? isModal : false;
		sticky = typeof(sticky) !== 'undefined' ? sticky : false;
		// Do validation, if validation fails then return immediately
		var validation = srchValidate(isModal,sticky);
		if (!validation) {
			return false;
		}
		var searchForm = document.forms.searchOne;
		var redirectionUrl = '/search-results/';
		var searchTxt = "";
		if(isModal && !sticky) {
			searchTxt = document.getElementById("searchModaltxt").value;
		} 
		else if(sticky){
			searchTxt = document.getElementById("searchtxtSticky").value;
		}
		else
		{
			searchTxt = document.getElementById("searchtxt").value;
		}
		//searchTxt = searchTxt.replace(/\s+/g, '+');
		searchTxt = encodeURIComponent(searchTxt);
		redirectionUrl += 'news/' + encodeURI(searchTxt) + '-30-days-page-1-pagesize-25';
		location.href = redirectionUrl;
		return false;

	};

	OpenPopup= function (url, name) {
		window.open(url, name, 'width=925,height=480,resizable=yes,scrollbars=yes');
	};
});
