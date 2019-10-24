
// Reference : http://jqueryui.com/accordion/

// Displays collapsible content panels for presenting information in a limited amount of space

/*
HTML code

<html>
<head>

	<!-- <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css"> -->

	   <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script type="text/javascript" src="jquery/jqaccordion.js"></script>
	
	<title>Testing</title>
</head>
<body>

<div id="accordion">
  <h3>Section 1</h3>
  <div>
    <p>
    Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
    ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
    amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
    odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
    </p>
  </div>
  <h3>Section 3</h3>
  <div>
    <p>
    Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
    Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
    ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
    lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
    </p>
    <ul>
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </ul>
  </div>
  <h3>Section 4</h3>
  <div>
    <p>
    Cras dictum. Pellentesque habitant morbi tristique senectus et netus
    et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
    faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
    mauris vel est.
    </p>
    <p>
    Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos.
    </p>
  </div>
</div>

</body>
</html>

*/

$(function(){
	 $("#accordion").accordion({
	 	collapsible: true,               // all tabs can be collapsed at once
	 	active:false,                  // tab that should be active on page loaded (0 based index, false for no active)
	 	animate:1000,                  // duration or "string (linear/swing) "
	 	classes: {
    "ui-accordion-header": "ui-corner-top",
    "ui-accordion-header-collapsed": "ui-corner-all",
    "ui-accordion-content": "ui-corner-bottom"
  },
	    event:"click",                // event that should trigger the header panel
	    heightStyle:"content",        // height of panel
	    icons: { "header": "ui-icon-triangle-1-e",
                 "activeHeader": "ui-icon-triangle-1-s" }
	 });
});
