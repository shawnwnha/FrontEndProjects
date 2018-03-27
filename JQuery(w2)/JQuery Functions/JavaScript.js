//-------------------------JQuery CODE----------------------------//	
		$(document).ready(function(){
			$("img").hide();

			$("#addClass").click(function(){
				$("#addition").addClass("red");
			}),

			$("#Slidetoggle").click(function(){
				$("img").slideToggle()
			})

			$("#Append").click(function(){
				$(".newpara").append("<p>This is a new paragraph generated!!!!</p>");
			})

			$("#text").click(function(){
				$(".newpara").text("text just changed the content!!!")
			})

			$("#hide").click(function(){
				$(".hide1").hide()
			})

			$("#show").click(function(){
				$(".hide1").show()
			})

			$("#toggle").click(function(){
				$(".toggle1").toggle()
			})

			$("#slideup").click(function(){
				$(".slideup1").slideUp("slow");
			})
			
			$("#slidedown").click(function(){
				$(".slideup1").slideDown("slow");
			})

			$("#fadeout").click(function(){
				$(".fade").fadeOut("slow");
			})

			$("#fadein").click(function(){
				$(".fade").fadeIn("slow");
			})

			$("#before").click(function(){
				$(".BandA").before("<p>Inserted Before</p>");
			})

			$("#after").click(function(){
				$(".BandA").after("<p>Inserted after</p>");
			})

			$("#html").click(function(){
				var x = $("body").html();
				$(".htmlclass").text(x);
			})

			$("#attr").click(function(){
				 $("#attr").attr("title","button for Attributes")		
			})

			$("#val").click(function(){
				$("input").val("THIS IS NOW FILLED");
			})

		})