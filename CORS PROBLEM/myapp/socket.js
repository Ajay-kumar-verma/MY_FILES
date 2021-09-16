// Node server 
const express=require('express');
const app = express();

const http=require('http');
const server=http.createServer(app);

const io=require('socket.io')(server,{cors:{orgin:'*'}});
app.get('*',(req,res)=>{
    res.send(" Invalid request ! \n This is only for chat ! ");
})




io.on('connection',(socket)=>{

 console.log("connected")     


    socket.on('disconnect',()=>
    {
        console.log("disconnect");
   })



  socket.on('connect_error', (err) =>
   {
      console.log(`connect_error due to ${err.message}`);
    });
  

});


server.listen(3000,()=>{
  console.log("Server is running !");
})

// app.listen(3000);