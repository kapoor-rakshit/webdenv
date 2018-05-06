// jQuery uses the $ sign as a shortcut for "jQuery"
// If two different frameworks are using the same shortcut, one of them might stop working.

// The noConflict() method releases the hold on the $ shortcut identifier, so that other scripts can use it.
// To use jQuery framework, write the full name "jQuery" instead of the shortcut "$"

$.noConflict();

jQuery(document).ready(function(){
    jQuery("button").click(function(){
        jQuery("p").text("jQuery is still working!");
    });
});


// we can create our own shortcut
// The noConflict() method returns a reference to jQuery, that we can save in a variable, for later use.

var jq = $.noConflict();

jq(document).ready(function(){
    jq("button").click(function(){
        jq("p").text("jQuery is still working!");
    });
});


// If a block of jQuery code which uses the $ shortcut and we do not want to change it all, 
// we can pass the '$'' sign in as a parameter to the function() of ready() method. 
// This allows us to access jQuery using '$', inside this function only, but outside of it, we will have to use "jQuery"

$.noConflict();

jQuery(document).ready(function($){                      // '$' passed as a param
    $("button").click(function(){                        // now we can use '$' inside jquery code block only
        $("p").text("jQuery is still working!");
    });
});