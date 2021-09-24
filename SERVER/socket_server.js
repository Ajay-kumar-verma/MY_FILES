// const exp= require('express');
// const app= exp();
const app=require('express')();
 

// const ht=require('http');
// const server=ht.createServer(app);
// const server= require('http').Server(app);

const server=require('http').createServer(app);



// const cors=require('cors');
// const io=require('socket.io')(server)
// For ROUTING ONLY app will handle 




// Routing handling using app 
app.get('/',(req,res)=>{

    res.send(req.url);
})
app.get('*',(req,res)=>{
res.send("Invalid link !\n\t"+req.url);
})






const socketIo = require("socket.io");
const io = socketIo(server,{cors:{orgin:'*'}});


// Socket handling usng this 
io.on('connection',socket=>{
console.log("connected !",socket.id);


socket.on('disconnect',()=>{

    console.log("disconnected !",socket.id);
})

})







// What ever the case only server will listen  not app
server.listen("3000",()=>{
    console.log("Server is running at port 3000 .");
})

//  app.listen(3000,()=>{
//     console.log("Server is running at port 3000 .");
// })
// this will handle only server not socket  

















// SERVER WITH EXPRESS


// const express=require('express');
// const app= express();

// const app=require('express')();


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

