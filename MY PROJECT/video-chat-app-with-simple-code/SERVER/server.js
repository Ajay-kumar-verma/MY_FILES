const exp= require('express');
const app= exp();

// const cors=require('cors');
// app.use({cors:{orgin:'*'}})
// app.use(cors({cors:{orgin:'*'}}))

const ht=require('http');
const server=ht.createServer(app);
// const server= require('http').Server(app);


// const cors=require('cors');
// const io=require('socket.io')(server)
// For ROUTING ONLY app will handle 


const socketIo = require("socket.io");
const io = socketIo(server,{cors:{orgin:'*'}});


const users={};


io.on('connection',socket=>
{ let socketId=socket.id;
  console.log("connected !",socketId);

 socket.on('join',(nm)=>{
   console.log("new user join ");     
})

socket.on('Msg',msg=>
{ socket.broadcast.emit('BroadCastMsg',msg);
    console.log(msg);
    let {roomId}=msg;
    let socketlist=users[roomId];
   socketlist?(users[roomId]=[...socketlist,socketId]):users[roomId]=[socketId];
  console.log(socketlist);
})

socket.on('disconnect',()=>{

    console.log("disconnected !");
})

})





app.get('/',(req,res)=>{

    res.send(req.url);
})
app.get('*',(req,res)=>{
res.send("Invalid link !\n\t"+req.url);
})





// What ever the case only server will listen only  not app
server.listen("80",()=>{
    console.log("Server is running at port 80 .");
})
















// SERVER WITH EXPRESS



// const express=require('express');
// const app= express();
// app.get('/',(req,res)=>{

//     res.send(req.url);
// })
// app.get('*',(req,res)=>{
// res.send("Invalid link !\n\t"+req.url);
// })

// app.listen(2000);







// Server with HTTP



// // const http=require("http");
// //  const server=http.createServer();

// const server=require('http').Server();


// server.on('request',(req,res)=>{

//     if(req.url=='/'){
//         res.write("Hello this is home page !") 
//         res.end();
//     }else {
//         res.end("Invalid link !"+req.url);
//     }
// })

// server.listen(2000);
// server.on('listening',()=>{
//     console.log("Server is running at port 2000")
// })

