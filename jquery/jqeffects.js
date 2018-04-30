
// include CDN link in html file : <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

// #panel {
//     padding: 50px;
//     display: none;               // set display prop to 'none' to hide elem in css file OR <style> tag
// }

$(document).ready(function(){

	$("p").click(function(){        // effectmthd(speed,callback)
	    $(this).hide("slow");       // speed parameter can take the following values: "slow", "fast", or milliseconds.
	});                             // callback parameter is a function to be executed after 'effectmthd' completes.

	$("p").click(function(){
	    $(this).show("fast");
	});

	$("button").click(function(){
		$("div p").toggle("slow");
	});



	$("button").click(function(){   // (speed,callback)
	    $("div").fadeIn("fast");
	});

	$("button").click(function(){
	    $("div").fadeOut("slow");
	});

	$("button").click(function(){
	    $("div").fadeToggle();
	});

	$("button").click(function(){         // fadeTo : allows fading to a given opacity (value between 0 and 1).
	    $("#div3").fadeTo("slow", 0.7);   // (speed,opacity,callback)
	});



    $("#flip").click(function(){  // (speed,callback)
	    $("#panel").slideDown();
	});

    $("#flip").click(function(){
	    $("#panel").slideUp();
	});

	$("#flip").click(function(){
	    $("#panel").slideToggle("slow");
	});



// jQuery Method Chaining
// Chaining allows us to run multiple jQuery commands, one after the other, on the same element(s).
// NOTE: This way, browsers do not have to find the same element(s) more than once.

	 $("#p1").css("color", "red").slideUp(2000).slideDown(2000);    
																	 // OR more readable 
	 $("#p1").css("color", "red")
			 .slideUp(2000)
			 .slideDown(2000);

});