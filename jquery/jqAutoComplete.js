
// Include CDN links in HTML file
//     <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
//     <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>


$(function() {
    var availableTags = [
      "number",
      "TicketType",
      "RequesterSeniority",
      "Severity",
      "FiledAgainst",
      "Priority",
      "Satisfaction",
      "DaysOpen",
      "RequesterID",
      "IT_OWNER_ID",
      "Unclassified",
      "Minor",
      "Normal",
      "Major",
      "Critical",
      "Issue",
      "Request",
      "Junior",
      "Regular",
      "Senior",
      "Management",
      "Systems","Software","Access/Login","Hardware","Low","Medium","High","Unsatisfied","Satisfied","HighlySatisfied"
    ];
   
    function split( val ) {
      return val.split(/ \s*/);                           //ATTENTION : mind the (space) or your desired delimiter (,:;) after first / 
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#words" )
      // don't navigate away from the field on tab when selecting an item
      .on( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 1,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags, extractLast( request.term )) );
        },
        focus: function() {
          // prevent value inserted on focus on suggestions
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the space at the end
          terms.push( "" );
          this.value = terms.join(" ");                    //Add your desired delimiter (here (space))
          return false;
        }
      });
  } );
