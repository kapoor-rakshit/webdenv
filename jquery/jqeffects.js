
// #panel {
//     padding: 50px;
//     display: none;               // set display to none to hide elem 
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

});