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

	    $("form :input").removeAttr("title");        // remove Attribute

	    var x = $("p").position();                   // returns position relative to the offset parent of top and left
	    alert("Top: " + x.top + " Left: " + x.left); // NOTE : positon value cannot be set

	    var x = $("p").offset();                    // returns position relative to the document of top and left
	    alert("Top: " + x.top + " Left: " + x.left);

	    $("p").offset({top:value,left:value});     // set offset values


// add new elements/content.

	    $("ol").append("<li>Appended item</li>");     // append an elem/text, making it a child of selected elem

	    $("ol").prepend("<li>Prepended item</li>");   // prepend an elem/text, making it a child of selected elem

	    $("<li>Appended item</li>").appendTo("ol");

		$("<li>Prepended item</li>").prependTo("ol");	    

	    $("img").after("Some text after img");           // insert elem/text after selected elem

		$("img").before("Some text before img");        // insert elem/text before selected elem

		$("Some text after img").insertAfter("img");

		$("Some text before img").insertBefore("img");


// remove existing HTML elements.

		$("#div1").detach();                      // removes matched elem, but retains JQuery data and events associated with removed elem.

		$("#div1").detach("img");                 

		$("#div1").remove();                      // removes the selected element(s) and its child elements, along with associated events

		$("#div1").empty();                       // removes the child elements of the selected element(s), same as .remove()

		$("p").remove(".test, .demo");           // filter applied (removes all <p> elements with class="test" and class="demo")

		$("form :input").removeAttr("title");    // remove Attribute


 // replace elements

		$("<b>New Content</b>").replaceAll("p");   // Replace occurrence of "p" tag and it's content with "<b>New Content</b>"
		$(".newclass").replaceAll(".oldclass");

		$(".oldclass").replaceWith(".newclass");


 // clone

		$(".classnaam").clone().appendTo("p");   // clone(withDataAndEvents, deepWithDataAndEvents)
												// withDataAndEvents : data and events handlers along with elements. default is false
					 // deepWithDataAndEvents : data and events handlers along with elements for all child elements. default is false


	});
});