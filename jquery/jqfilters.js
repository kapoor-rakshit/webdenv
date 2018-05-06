
$(document).ready(function(){

// filtering traversal

	 $("div").first();         // first element of the specified elements

	 $("div").last();         // last element of the specified elements

	 $("p").eq(1);            // returns an element with a specific index number of the selected elements
	                          // index numbers start at 0, so the first element will have the index number 0, (this example returns second <p>)

	 $("p").filter(".intro");  //  filter() method specify a criteria.  (here all <p> with class=intro)

	 $("p").not(".intro");     // not() method returns all elements that do not match the criteria   (here class not equal to intro)


// filtering tables
// loop through each table rows to check if there are any text values that matches the value of the input field.
// The toggle method hides the row (display:none) that does not match the search.

$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


// filtering lists

	$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


// filter almost anything using '*' (yeah almost :))

	 $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myDIV *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

});