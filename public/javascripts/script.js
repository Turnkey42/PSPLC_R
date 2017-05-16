

var storyV = function (sectionArticle,storyArticle) {
		$(storyArticle).load( sectionArticle+" .articleTitle", function() {
			$(storyArticle).append($("<div>").load(sectionArticle+" .videoWrapper16x9"));
			$(storyArticle).append($("<div>").load(sectionArticle+" .articleStory"));
		}) ;
};
var storyP = function (sectionArticle,storyArticle) {
		$(storyArticle).load( sectionArticle+" .articleTitle", function() {
			$(storyArticle).append($("<div>").load(sectionArticle+" .articlePhoto"));
			$(storyArticle).append($("<div>").load(sectionArticle+" .articleStory"));
		}) ;
};	

$(document).ready(function(){
	/* http://stackoverflow.com/questions/11589387/load-txt-file-using-jquery-or-ajax */
	storyV("articles/sectLeftArt1.html","#sectLeftArt1");
	storyV("articles/sectLeftArt2.html","#sectLeftArt2");
	storyV("articles/sectLeftArt3.html","#sectLeftArt3");
	storyV("articles/sectLeftArt4.html","#sectLeftArt4");
	storyV("articles/sectLeftArt5.html","#sectLeftArt5");
	storyP("articles/sectRightArt1.html","#sectRightArt1");
	storyP("articles/sectRightArt2.html","#sectRightArt2");
	storyP("articles/sectRightArt3.html","#sectRightArt3");
	storyV("articles/sectRightArt4.html","#sectRightArt4");
	storyP("articles/cloudArticle.html","#cloudarticle");
	
	 
// Section Left height test
//		var sectLeftH = $("#sectionleft").css( "height" );
//		document.getElementById("sectLeftHeight").innerHTML = "<p>Section Left Height =</p>"+sectLeftH;
	 $("#banner").sparkle({
		  color: "#FFFFFF",
		  count: 10,
		  overlap: 0,
		  speed: 1,
		  minSize: 3,
		  maxSize: 6,
		  direction: "both"
});
	 
/*	 (function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));*/

});
