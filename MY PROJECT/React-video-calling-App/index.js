const app=require('express')();
const server=require('http').Server(app);
app.get('*',(req,res)=>{
    res.send("Server is running at port 2000");
})

const io=require('socket.io')(server,{cors:{origin:"*",method:['GET','POST']}});

io.on("connection",socket=>{
 console.log("new User joined ..!");
 socket.emit('me',socket.id);


  socket.on('calluser',({userToCall,signalData,from,nme})=>{
   io.to(userToCall).emit("calluser",{signal:signalData,from,nme});
        
  })

  socket.on('answerCall',(data)={
      io.to(data.to).emit('callaccepted',data.signal)
  })


 socket.on("disconnect",()=>{
    socket.broadcast.emit('callEnded');
    console.log("left",socket.id);
 }); 
    
});








server.listen("2000",()=>{
    console.log("Server is running at port 2000 ");
})
