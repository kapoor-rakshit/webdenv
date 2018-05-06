// changing and manipulating HTML elements and attributes.

$(document).ready(function(){
	$("button").click(function(){

		alert($("#chk").text());                    // get text only, ignoring all tags (if written within selected elem).

		$("#disp").text("<b>hello</b>");           // set text, tags are considered as a text too.

		alert($("#chk").html());                  // get html code, with tags (if written within selected elem).

		$("#disp").html("<b>Hello in bold</b>");  // set html code

	    $("#test3").val();                       // get value of form elems

	    $("#test3").val("Value set");           // set value of form elems

	    $("#chk").attr("href");                // get value of attribute

	    $("#w3s").attr({
        "href" : "https://www.w3schools.com/jquery/",  // set value of attribute (here multiple attribs are dealt with)
        "title" : "W3Schools jQuery Tutorial"
					    });


// add new elements/content.

	    $("ol").append("<li>Appended item</li>");     // append an elem/text, making it a child of selected elem

	    $("ol").prepend("<li>Prepended item</li>");   // prepend an elem/text, making it a child of selected elem

	    $("img").after("Some text after");           // insert elem/text after selected elem

		$("img").before("Some text before");        // insert elem/text before selected elem


// remove existing HTML elements.

		$("#div1").remove();                      // removes the selected element(s) and its child elements.

		$("#div1").empty();                       // removes the child elements of the selected element(s)

		$("p").remove(".test, .demo");           // filter applied (removes all <p> elements with class="test" and class="demo")


	});
});