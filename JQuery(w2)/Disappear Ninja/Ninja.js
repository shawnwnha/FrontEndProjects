
$(document).ready(function(){

	$("img").click(function(){
		$(this).css("visibility","hidden");
	})


	$("#restore").click(function(){
		$("img").css("visibility","visible");
	})


})