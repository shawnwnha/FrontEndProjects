
$(document).ready(function(){
	
	var x = $('img').attr("src");

	$("img").mouseenter(function(){
		var y = $(this).attr("data-alt-src");	
		$(this).attr("src",y);
	})
	$("img").mouseleave(function(){	
		$(this).attr("src",x);
	})


})