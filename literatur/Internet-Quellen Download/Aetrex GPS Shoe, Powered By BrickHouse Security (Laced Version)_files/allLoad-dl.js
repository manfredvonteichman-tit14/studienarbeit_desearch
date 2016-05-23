jQuery(document).ready(
	function($){	
		// NO P.O. SHIPPING IMPLEMENTATION FROM REV 9/12/12
		$('#billingForm input.address[name*="street"]').blur(function(){
			$(this).each(function(){
				var pattern = new RegExp('[PO.]*\\s?B(ox)?.*\\d+', 'i');
				var redline = 0;
		
				if ($(this).val().match(pattern)){
					$('#noship').remove();
					$(this).after('<div id="noship" style="color:#ff0000;display:hidden; font-style:italic;">We offer standard shipping only to PO box addresses.</div>');
					$('noship').show();
					$('#billingForm :checkbox[name$=postOfficeBox]').attr('checked', true);
		
				}
				else{
					$('#billingForm :checkbox[name$=postOfficeBox]').attr('checked', false);
					$('#noship').hide();
					$('#noship').remove();
				}
			});
		});
		
		$('#btnContinueBillingForm').click(
			function(){
				if ($('#billingForm :checkbox[name$=postOfficeBox]').attr('checked')){
					alert("Click here to verify that we offer standard shipping only to PO box addresses.");
				}
			}
		);

		if($('.row-fluid').length){
			$('.row-fluid').each(		
				function(){		
					var trimHtmlStr = $(this).html();
					var trimmedHtmlStr = $.trim(trimHtmlStr);
					$(this).html(trimmedHtmlStr);		
				}		
			);
		}

		if($('#home-enhanced.gateway #left-nav').length){
			
			var newTopPosition = 0;
			
			var getHeight = function(){
				try{
					var currentPosition = $('#home-enhanced.gateway #left-nav').position().top;
					var globalBannerHeight = $('#GlobalBanner').length ? $('#GlobalBanner').height() : 0;
					
					if(currentPosition > 0 && globalBannerHeight > 0){
						newTopPosition = currentPosition + globalBannerHeight;
					} 
				} catch(e) {
					//console.debug('error message: ' + e.message);
				}				
				
				if(newTopPosition > 0){
					$('#home-enhanced.gateway #left-nav').css('top', newTopPosition + 'px');
				}			
			}
			
			getHeight();
		
		}
	}
);