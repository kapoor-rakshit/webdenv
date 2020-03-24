let webSocket = require("ws");
let webSocketServer = webSocket.Server;

let server = new webSocketServer({port: 9090});

//all connected to the server users 
var users = {};

function sendTo(connection, message) { 
   connection.send(JSON.stringify(message)); 
}

//when a user connects to our sever 
server.on("connection", (connection) => {
	console.log(`USER CONNECTED`);

	 //when server gets a message from a connected user
	connection.on("message", (message) => {
		console.log(`USER MESSAGE ==> ${message}`);

		let data; 
		//accepting only JSON messages 
      	try {
        	data = JSON.parse(message); 
      	} catch (e) { 
         	console.log(`Invalid JSON ==> ${e}`); 
         	data = {}; 
        }

        //switching type of the user message 
      	switch (data.type) { 

        	//when a user tries to login 	
         	case "login":
            	console.log("User Logged In", data.name); 
				
            	//if anyone is logged in with this username then refuse 
            	if(users[data.name]) { 
               		sendTo(connection, { type: "login", success: false }); 
            	} else { 
               	//save user connection on the server 
               		users[data.name] = connection; 
               		connection.name = data.name; 
					
               		sendTo(connection, { type: "login", success: true }); 
            	}

            	break; 
				
         	case "offer": 
            	//for ex. UserA wants to call UserB then data.name has UserB
            	console.log("Sending offer to: ", data.name); 
				
            	//if UserB exists then send him offer details ie connection object
            	var conn = users[data.name];
				
            	if(conn != null) { 
               		//setting that UserA connected with UserB 
               		connection.otherName = data.name;
               		sendTo(conn, { type: "offer", offer: data.offer, name: connection.name }); 
            	}

            	break;  
				
         	case "answer":
         		//for ex. UserB answers UserA , then data.name has UserA
            	console.log("Sending answer to: ", data.name);
            	var conn = users[data.name]; 
				
            	if(conn != null) { 
               		connection.otherName = data.name; 
               		sendTo(conn, { type: "answer", answer: data.answer }); 
            	}

            	break;  
				
         	case "candidate":
         		//handling ICE candidate between users.
            	console.log("Sending candidate to:",data.name); 
            	var conn = users[data.name];  
				
            	if(conn != null) { 
               		sendTo(conn, { type: "candidate", candidate: data.candidate });
            	} 
				
            	break;  
				
         	case "leave": 
            	console.log("Disconnecting from", data.name); 
            	var conn = users[data.name]; 
            	conn.otherName = null; 
				
            	//notify the other user so he can disconnect his peer connection 
            	if(conn != null) { 
               		sendTo(conn, { type: "leave" }); 
            	}  
				
            	break;  
				
         	default: 
            	sendTo(connection, { type: "error", message: "Command not found: " + data.type }); 
				
            	break; 
      	}
	});

	//when user exits, for example closes a browser window 
   	//this may help if we are still in "offer","answer" or "candidate" state 
   	connection.on("close", function() {
	
      	if(connection.name) { 
      		delete users[connection.name]; 
		
         	if(connection.otherName) { 
            	console.log("Disconnecting from ", connection.otherName);
            	var conn = users[connection.otherName]; 
            	conn.otherName = null;  
				
            	if(conn != null) { 
               		sendTo(conn, { type: "leave" });
            	}  
         	} 
      	} 
   	});
});

