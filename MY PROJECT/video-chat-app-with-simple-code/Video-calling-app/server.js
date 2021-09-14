const express = require('express');
const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

const port = process.env.PORT || 80;

const {v4:uuidv4} = require('uuid');

const {ExpressPeerServer} = require('peer');
const { json } = require('express');

const peer = ExpressPeerServer(server , {
  debug:true
});

app.use('/peerjs', peer);

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/' , (req,res)=>{
    res.send("Room id is :" +uuidv4());
});

app.get('/:room' , (req,res)=>{
   res.render('index' , {RoomId:req.params.room});
    
});

let i=1;
let usersData={};
let adminData={};
let waitingUserData={};
io.on("connection" , (socket)=>{
    // console.log(i++,")New user joined with socketId:\n " +socket.id);

   socket.on('broad_cast',(userData)=>{
    let {roomId}=JSON.parse(userData);
    console.log(i++,")broadCasting  socketId:"+socket.id+"\n\tuser Details:\n\t",JSON.parse(userData));
    usersData[socket.id]={...JSON.parse(userData)};
    socket.join(roomId);
    // socket.to(roomId).broadcast.emit('userJoined', userData);//it broadcast user joined 
    // socket.to(ro`omId).emit('userJoined', userData);
    socket.broadcast.emit('userJoined', userData);
  })


   
  //When admin allowed 
   socket.on('admin_allowed',userData=>{
       let {peerId}=JSON.parse(userData);
       let socketId=waitingUserData[peerId];
       socket.broadcast.to(socketId).emit('allowed',userData);
    })



   //When user ask for joing the  meeting    to Admin  
    socket.on('ask_admin', (userData)=>
    {
      let {roomId,peerId}=JSON.parse(userData);
      if(adminData[roomId])
      {
        let adminSocketId=adminData[roomId];
        console.log(i++,")User Waiting for join: \n\tuser Details:\n\t",JSON.parse(userData));
        waitingUserData[peerId]=socket.id;
        socket.broadcast.to(adminSocketId).emit('userWaiting', userData);//it broadcast user joined 
       }else{
          usersData[socket.id]={...JSON.parse(userData)};
          console.log(i++,")Admin details :\n\t",JSON.parse(userData));
        adminData[roomId]=socket.id;
       }

    })
  

 
  // socket.on('leaveMe',(userData)=>{
  //   // let {roomId}=JSON.parse(userData);
  //   // socket.leave(socket.id);  
  //   console.log("Leaving user details\n\t",userData)
  //  })

   
  //this is when user disconnet  
   socket.on('disconnect', ()=>
   { let LeftUserData=usersData[socket.id];
       if(LeftUserData){ delete usersData[socket.id];
       let {roomId}=LeftUserData;
       
      //  io.socket.in(roomId).broadcast.emit('userDisconnect',LeftUserData);
       
       socket.broadcast.emit('userDisconnect',LeftUserData);
       

       if(adminData[roomId]==socket.id){
          delete adminData[roomId];
         console.log(i++," Admin Left :\n Admin details\n\t",LeftUserData);
        }else{
        console.log(i++,")user disconnected:\n User details\n\t",LeftUserData);
        } 
     }
    else{
      console.log(i++,") Server reset ,No History ");
      }
  })
  

})



server.listen(port , ()=>{
  console.log("Server running on port : " + port);
})
