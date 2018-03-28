$(document).ready(function(){

	$("img").click(function(){
		var altIMG=$(this).attr("data-alt-src");
		$(this).attr("src",altIMG);
		$(this).attr("style","border:10px solid red")
	})

})