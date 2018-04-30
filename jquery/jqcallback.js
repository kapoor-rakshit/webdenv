
// Include CDN link in HTML file : <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

// with Jquery effects, the next line of code can be run even though the effect is not finished. This can create errors.
// To prevent this, we can create a callback function.
// A callback function is executed after the current effect is finished.

// Typical syntax: $(selector).hide(speed,callback);


$(document).ready(function(){
    $("button").click(function(){
        $("p").hide("slow", function(){                   // with callback func, 'alert' is shown after 'hide' effect finished
            alert("The paragraph is now hidden");         // else 'alert' would have been shown before 'hide' effect.
        });
    });
});