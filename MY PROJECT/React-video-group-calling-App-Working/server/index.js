const app = require("express")()
const server =require("http").Server(app)
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
})


io.on("connection", (socket) => {
	socket.emit("me", socket.id)
  console.log("New socket id:",socket.id);

	socket.on("disconnect", () => {
		// socket.broadcast.emit("callEnded")
    console.log("got Disconnected ...!",socket.id);
	})



	socket.on("joinRoom", (data) => {
	  console.log("New user joinning ...!",data);
    //  let {room}=data;
    socket.broadcast.emit('newJoin',data)	
  })


    socket.on('join',(id)=>{
		console.log("New user joinned PeerID is : ",id);
		socket.broadcast.emit('newUser',id);
	}) 

 
	
})

server.listen(2000, () => console.log("server is running on port 2000"))
