let connection = new WebSocket('ws://localhost:9090');
let name = "";
let connectedUser, myConnection, dataChannel;

connection.onopen = function () { 
   console.log("Connected to 127.0.0.1:9090"); 
}
  
connection.onerror = function (err) { 
   console.log("Got error", err); 
}

// check if the browser supports the WebRTC 
function hasUserMedia() {
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	return navigator.getUserMedia;
}

// Alias for sending messages in JSON format 
function send(message) { 
	if (connectedUser) { 
     	message.name = connectedUser; 
   	} 
	
   	connection.send(JSON.stringify(message)); 
}

//creating data channel 
function openDataChannel() { 

   var dataChannelOptions = { 
      reliable:true 
   }; 
	
   dataChannel = myConnection.createDataChannel("myDataChannel", dataChannelOptions);
	
   dataChannel.onerror = function (error) { 
      console.log("Error:", error); 
   };
	
	//when we receive a message from the other peer, display it on the screen 
   dataChannel.onmessage = function (event) {
   	  let chatarea = document.querySelector("#chatarea");
   	  chatarea.value = event.data;
   };

   dataChannel.onclose = function () { 
         console.log("data channel is closed"); 
    };  
}

//when a user logs in 
function onLogin(success) {

   	if (success === false) { 
      	alert("try a different username"); 
   	} else { 

   		// get both video and audio streams from user's camera
		navigator.getUserMedia({video: true, audio: true}, (stream) => {
			// insert stream into the video tag
			let localVideo = document.querySelector("#localvideo");
			localVideo.srcObject = stream;

			 //creating our RTCPeerConnection object 
      		var configuration = {
         		"iceServers": [{ "url": "stun:stun.1.google.com:19302" }] 
      		}; 
		
      		myConnection = new webkitRTCPeerConnection(configuration, { 
         		optional: [{RtpDataChannels: true}] 
      		});

      		// setup stream listening 
      		myConnection.addStream(stream);

      		//when a remote user adds stream to the peer connection, we display it 
         	myConnection.onaddstream = function (e) {
         		let remoteVideo = document.querySelector("#remotevideo");
            	remoteVideo.srcObject = e.stream; 
         	};

      		console.log("RTCPeerConnection object was created"); 
      		console.log(myConnection); 
  
      		//setup ice handling
      		//when the browser finds an ice candidate we send it to another peer 
      		myConnection.onicecandidate = function (event) { 
         		if (event.candidate) { 
            		send({ type: "candidate", candidate: event.candidate }); 
         		} 
      		};

      		openDataChannel(); 

			// MediaStream API PROPERTIES
			let obj = {isStreamActive: stream.active, streamID: stream.id};
			console.table(obj);


			// MediaStream METHODS
			document.querySelector("#getAudioTracks").addEventListener("click", () => {
				let audioTracks = stream.getAudioTracks();
				console.log(`${audioTracks.length}`);
				for(let track of audioTracks){
					console.log(`AUDIO ==> ${track.id}`);
				}
			});

			document.querySelector("#getVideoTracks").addEventListener("click", () => {
				let videoTracks = stream.getVideoTracks();
				console.log(`${videoTracks.length}`);
				for(let track of videoTracks){
					console.log(`VIDEO ==> ${track.id}`);
				}
			});

			document.querySelector("#getTracks").addEventListener("click", () => {
				let tracks = stream.getTracks();
				console.log(`${tracks.length}`);
				for(let track of tracks){
					console.log(`${track.id}`);
				}
			});

			document.querySelector("#removeTrack").addEventListener("click", () => {
				console.log(`removing track`);
				stream.removeTrack(stream.getVideoTracks()[0]);
				stream.removeTrack(stream.getAudioTracks()[0]);
			});

		},
		(err) => {
			console.log(`${err}`)
		});
   	} 
}

//when somebody wants to call us 
function onOffer(offer, name) { 
   	connectedUser = name; 
   	myConnection.setRemoteDescription(new RTCSessionDescription(offer)); 
	
   	myConnection.createAnswer((answer) => { 
      	myConnection.setLocalDescription(answer); 	
      	send({ type: "answer", answer: answer }); 
		
   	}, (error) => { 
      	alert(`error ==> ${error}`); 
   	}); 
}
  
//when another user answers to our offer 
function onAnswer(answer) { 
   myConnection.setRemoteDescription(new RTCSessionDescription(answer)); 
} 
 
//when we got ice candidate from another user 
function onCandidate(candidate) { 
   myConnection.addIceCandidate(new RTCIceCandidate(candidate)); 
}

function onLeave() {
	connectedUser = null;
	let remoteVideo = document.querySelector("#remotevideo");
    remoteVideo.srcObject = null;

    myConnection.close();
    myConnection.onicecandidate = null;
    myConnection.onaddstream = null;
}

if(hasUserMedia()) {

	document.querySelector("#loginUserBtn").addEventListener("click", () => {
		name = document.querySelector("#loginUserInput").value.trim();

		if(name.length > 0) {
			send({type: "login", name: name});
		}
	});

	//handle messages from the server 
	connection.onmessage = function (message) {
   		console.log(`Got message ==> ${message.data}`);
   		var data = JSON.parse(message.data); 
	
   		switch(data.type) { 
      		case "login": 
         		onLogin(data.success); 
         		break; 
      		case "offer": 
         		onOffer(data.offer, data.name); 
         		break; 
      		case "answer": 
         		onAnswer(data.answer); 
         		break; 
      		case "candidate": 
         		onCandidate(data.candidate); 
         		break;
         	case "leave":
         		onLeave();
         		break;
      		default: 
         		break; 
   		} 
	};

	document.querySelector("#connectUserBtn").addEventListener("click", () => {
		connectedUser = document.querySelector("#connectUserInput").value.trim();

		if(connectedUser.length > 0) {
			//make an offer 
			myConnection.createOffer((offer) => {
				  send({ type: "offer", offer: offer });
				  myConnection.setLocalDescription(offer);
			}, (err) => {
				alert(`Some ERROR occurred`);
			});
		}
	});

	document.querySelector("#messageBtn").addEventListener("click", () => {
		let msg = document.querySelector("#messageInput").value.trim();
		dataChannel.send(msg);
	});

	document.querySelector("#removeRemoteTrack").addEventListener("click", () => {
		send({ type: "leave" }); 
		onLeave();
	});

} else {
	alert(`WebRTC is not supported on this browser`);
}