
	// REFERENCE : https://www.w3schools.com/jquery/ajax_ajax.asp

	// The ajax() method is used to perform an AJAX (asynchronous HTTP) request.

function getUpdates(){
	var weburl = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));     /* indexOf(str_to_search,start_pos) */
	$.ajax(
	{
		type: "POST",                                        // Specifies the type of request. (GET or POST)
		url: weburl + '/readUpdates',                        // Specifies the URL to send the request to. Default is the current page
      // ------ use contentType, processData for sure ------ //
		contentType: false,                                  // The content type used when sending data to the server. Default is: "application/x-www-form-urlencoded"
		                                                     // false is used to tell jQuery to not set any content type header
		processData: false,                                  // A Boolean value specifying whether or not data sent with the request should be transformed into a query string. Default is: true
		beforeSend: function() {},                           // A function to run before the request is sent
		data: "enable",                                      // Specifies data to be sent to the server
		success: function(msg)                               // A function to be run when the request succeeds
		{
			var obj = JSON.parse(msg);
			var arr = obj["updates"];
			var arrFull = obj["updatesFull"];
			var l_updates = arr.length;
			
			if(l_updates == 0) {
				$("#updateDIV").css("display", "none");
				$("#updateTD").css("display", "none");
			}
			else{
				$("#updateDIV").css("display", "initial");
				$("#updateTD").css("display", "initial");
			}
			
			$(".marqueeTAG").empty();
			$("#popupDIV").empty();
			
			for(var i=0;i<l_updates;i++){
				$(".marqueeTAG").append('<p class="marqueeTEXT">' + arr[i] + '</p>');
				
				// mfp-hide class is required to make dialog hidden
				$("#popupDIV").append('<div id="update_' + i +'" class="white-popup mfp-hide">' + arrFull[i] + '</div>');
			}
			
			$('.updates-popup').magnificPopup({
				type: 'inline',
				alignTop:false,
				closeBtnInside: false,
				midClick: true
			});
		},
		error: function(xhr, status, error)                    // A function to run if the request fails.
		{
			
		}
	});
}


