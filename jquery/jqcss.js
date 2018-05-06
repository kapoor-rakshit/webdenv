// manipulate the CSS of elements by adding, removing or toggling classes.

$(document).ready(function(){

	$("#div1, p, h1").addClass("important blue");    // multiple classes (important and blue) added to multiple elems (#div, p, h1)

	$("h1, h2, p").removeClass("blue important");   // multiple classes removed from elems

	$("h1, h2, p").toggleClass("blue");            // toggle classes to/from elems


// css() method sets or returns one or more style properties for the selected elements.

	$("p").css("background-color");             // return value of the FIRST matched element (<p>)

	$("p").css({"background-color": "yellow", "font-size": "200%"}); // set multiple CSS properties


// dimensions of elements and browser window

	$("#div1").width()

	$("#div1").height()                      // width/height of an element (excludes padding, border and margin).

	$("#div1").innerWidth()

	$("#div1").innerHeight()               // width/height of an element (includes padding).

	$("#div1").outerWidth()

	$("#div1").outerHeight()               // width/height of an element (includes padding and border).

	$("#div1").outerWidth(true)

	$("#div1").outerHeight(true)          // width/height of an element (includes padding, border, and margin).

	$(document).width()

	$(window).width()                    // width/height of the document (the HTML document) and window (the browser viewport)

	$("#div1").width(500).height(500)   // sets the width and height of a specified element (<div>)

});