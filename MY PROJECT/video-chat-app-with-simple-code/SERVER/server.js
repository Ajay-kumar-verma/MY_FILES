const exp= require('express');
const app= exp();

// const server= require('http').Server(app);
const ht=require('http');
const server=ht.createServer(app);
const cors=require('cors');
const io=require('socket.io')(server,{cors:{orgin:'*'}})
// For ROUTING ONLY app will handle 

io.on('connection',socket=>{
console.log("connected !");


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





// What ever the case only server will listen  not app
server.listen("3000",()=>{
    console.log("Server is running at port 3000 .");
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

