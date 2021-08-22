// text printed as if being typed

var i = 0;
var txt = "hi there. working with JS. Isn't it amazing. yeah it is.";
l = txt.length
var speed = 50;

window.onload = function(){
	typing();
}

function typing(){
	if (i<l){
		document.getElementById("content").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typing, speed);                                 // call 'typing' func just once after 'speed' millisec
	}
}

