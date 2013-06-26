initScreen = function(){
	var sPath = window.location.pathname;
	var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
	var iIndex = parseInt(sPage.substring(0, sPage.lastIndexOf('.')), 10);

	goNext = function(){
		if (isNaN(iIndex))
		{
			document.location.replace("0.html");
		}
		else
		{
			if  (iIndex < magazine.pages.length)
				document.location.replace((iIndex+1) + ".html");
			else
				document.location.replace("cover.html");
		}
	}

	goPrevious = function(){
		if (iIndex > 0)
			document.location.replace((iIndex-1) + ".html");
		else
			document.location.replace("cover.html");
	}

	$("#tbcover").click(function(){
		document.location.replace("2.html");
	});

	$("#tbprevious").click(goPrevious);

	$("#tbnext").click(goNext);

	$("#tbcontents").click(function(){
		document.location.replace("2.html");
	});

	$(".tbtitle").click(function(){
		document.location.replace("cover.html");
	});

	$("html").bind("swipeone",function(e,p){
		if (p.direction.lastX > 0)
			goPrevious();
		else
			goNext();
	});
};

/*** Facebook integration ***/

window.fbAsyncInit = function() {
// init the FB JS SDK
FB.init({
  appId      : '422509097802752', // App ID from the App Dashboard
  channelUrl : '//extimidades.com/channel.html', // Channel File for x-domain communication
  status     : true, // check the login status upon init?
  cookie     : true, // set sessions cookies to allow your server to access the session?
  xfbml      : true  // parse XFBML tags on this page?
});
// Additional initialization code such as adding Event Listeners goes here
};
// Load the SDK's source Asynchronously
(function(d, debug){
 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement('script'); js.id = id; js.async = true;
 js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
 ref.parentNode.insertBefore(js, ref);
}(document, /*debug*/ false));

function callback(response) {
  document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
}

/*** Google Analytics ***/

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36202743-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();