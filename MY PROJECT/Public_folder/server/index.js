// Node server 
const express=require('express');
const app = express();

const http=require('http');
const server=http.createServer(app);

server.listen(3000,()=>{
    console.log("Server is running !");
})

// const io=require('socket.io')(server.listen(3000),{cors:{orgin:'*'}});

const io=require('socket.io')(server,{cors:{orgin:'*'}});


// app.get('/home',(req,res)=>{
//     res.send("hello ");
// })

app.get('*',(req,res)=>{
    res.send(" Invalid request ! \n This is only for chat ! ");
})

// server.listen(3000,()=>{
//     console.log("Server is running !");
// })



const chat_user={};

io.on('connection',(socket)=>{

    console.log("new use connected !"+socket.id);
    socket.on('user-joined',msg=>
    {
      let  msgs =JSON.parse(msg);
      console.log(msgs.uname+" joined !")
       chat_user[socket.id]=msgs.uname;
       let event_id=socket.id+1;
       chat_user[event_id]=msgs['id'];
         socket.broadcast.emit(msgs['id'],msgs.uname+": joined ! ");
    });
     


    socket.on('disconnect',()=>
    {
     console.log(chat_user[socket.id]+" left the chat");
     let event_id=chat_user[socket.id+1];
     let name=chat_user[socket.id];
     socket.broadcast.emit(event_id,name+" left the chat !")
                                       
    })



  socket.on('send_msg',msg=>
  { 
    //   Date.now()
    new Date(Date.now()).toLocaleTimeString()

    let  msgs =JSON.parse(msg);
    socket.broadcast.emit(msgs['id'],msgs['msg']);
    });
 



  socket.on('connect_error', (err) =>
   {
      console.log(`connect_error due to ${err.message}`);
    });

  

});