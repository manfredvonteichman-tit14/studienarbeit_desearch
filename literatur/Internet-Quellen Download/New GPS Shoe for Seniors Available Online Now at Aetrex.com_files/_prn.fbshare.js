window.fbAsyncInit = function() {
        FB.init({
           	 appId: "1437737463153499",
		 xfbml: true,
		 version    : 'v2.4',
                 status: true,
                 cookie: true
        });
	};
	
(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
function postToFeed_image(url,imageUrl) {
	FB.ui({
	  method: 'stream.share',
	  u: url,
	  picture: imageUrl,
	}, function(response){
		shareIt(this,'Facebook');
	});
}

function postToFeed(url) {
	FB.ui({
	  method: 'stream.share',
	  u: url,
	}, function(response){
		shareIt(this,'Facebook');
	});
}

function postToFeed_blog(url) {
	FB.ui({
	  method: 'stream.share',
	  u: url,
	}, function(response){
	});
}
