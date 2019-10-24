
// include CDN link in html file : <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

// Basic syntax is: $(selector).action()


$(document).ready(function(){           // to prevent any jQuery code from running before the document is finished loading

// Selectors

    $("p").click(function(){           // handle elem with <p> tag
        $(this).hide();               // 'this' keyword is used to identify current object, "p" here
        alert(this.id);
    });

    $("#chkid").click(function(){      // handle elem with id = "chkid"

    });

    $(".chkcls").click(function(){    // handle elem with class = "chkcls"

    });

    $("*")                   // selects all elems

    $("p.intro")            // <p> elem with class = "intro"

    $("p:first")            // first <p> elem on page, similarly for 'last'

    $("ul li:first")	    // Selects the first <li> element on page that is inside <ul>

    $("ul li:first-child")	// Selects <li> element that is first child of <ul> meaning only that <li> which ocuurs immediately first inside <ul>

    $("[href]")	            // [] : Selects all elements with an attribute , 'href' here

    $("p[background]")	    // Selects all '<p>' elements with 'background' attribute

    $("a[target='_blank']")	// Selects all '<a>' elements with a 'target attribute' value equal to "_blank"

    $("a[target!='_blank']")	// Selects all '<a>' elements with a 'target attribute' value NOT equal to "_blank"

    $("tr:even")	           // Selects all even <tr> elements

    $("tr:odd")	              // Selects all odd <tr> elements

    $("form :input")         // <input> tag from <form>

	 $("div, p, .classnaam").first().css("background-color", "yellow");       // first element on page amongst the specified elements (div | p | .classnaam)

	 $("div, p, .classnaam").last().css("background-color", "yellow");        // last element on page amongst the specified elements (div | p | .classnaam)

	 $("p").eq(1).css("background-color", "yellow");;            // returns an element with a specific index number of the selected elements
	                                                             // index numbers start at 0, so the first element will have the index number 0, (this example returns second <p>)

	 $("p, h1").filter(".intro, #rt").css("background-color", "yellow");;  //  filter() method specify a criteria.  (here all p and h1 with class=intro or id=rt)

	 $("p, h1").not(".intro, #rt").css("background-color", "yellow");;   // not() method returns all elements that do not match the criteria   (here class not equal to intro or id not equal to rt)


// Events

    $("p").click(function(){

    });

    $("p").dblclick(function(){

    });

    $("#p1").mouseenter(function(){     // mouseenter event only triggers when the mouse pointer enters the selected element
    alert("You entered p1!");
    });
	
    $("div.over").mouseover(function(){  // mouseover event is triggered if mouse pointer enters any descendants (inside) as well the selected element.
    $(".over p").text(x += 1);
    });

    $("#p1").mouseleave(function(){     // mouseleave event is only triggered when the mouse pointer leaves the selected element
    alert("Bye! You now leave p1!");
    });
	
    $("div.over").mouseout(function(){  // mouseout event triggers when mouse pointer leaves any descendants (inside) as well the selected element.
    $(".over span").text(x += 1);
    });

    $("#p1").mousedown(function(){     // executed, when the left, middle or right mouse button is pressed down, while the mouse is over the HTML element
    alert("Mouse down over p1!");
    });

    $("#p1").mouseup(function(){       // executed, when the left, middle or right mouse button is released, while the mouse is over the HTML element
    alert("Mouse up over p1!");
    });

    $("#p1").hover(function(){        // takes two functions and is a combination of the mouseenter() (first func) and
    alert("You entered p1!");
    },function(){                     // mouseleave() (second func) methods.
    alert("Bye! You now leave p1!");  // NOTE : it's not mouseover() | mouseout()
    });                               // NOTE : If only one function is specified, it will run for both mouseenter and mouseleave events.
	
    $("div.move").mousemove(function(){  // mousemove event triggers every time mouse pointer is moved over it or it's descendants (inside)
    $(".move p").text(z += 1);
    });

    $("input").focus(function(){      // similar to 'onfocus'
    $(this).css("background-color", "#cccccc");
    });

    $("input").blur(function(){      // similar to 'onblur'
    $(this).css("background-color", "#ffffff");
    });

    $("p").on({                     // 'on' : Attach multiple event handlers to an element
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    }, 
    click: function(){
        $(this).css("background-color", "yellow");
    } 
    });

});
