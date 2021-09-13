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

const url= require('url');

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

io.on("connection" , (socket)=>{

    // console.log(i++,")New user joined with socketId:\n " +socket.id);
   
    socket.on('newUser', (userData)=>
    {       
      let {roomId}=JSON.parse(userData);
      console.log(i++,")New user joined socketId:"+socket.id+"\n\tuser Details:\n\t",userData);
      usersData[socket.id]={...JSON.parse(userData)};
      socket.join(roomId);
      socket.to(roomId).broadcast.emit('userJoined', userData);//it broadcast user joined 
    })
  
   
   socket.on('disconnect', ()=>
   { let LeftUserData=usersData[socket.id];
       if(LeftUserData){
      delete usersData[socket.id];
      console.log(i++,")user disconnected:\n User details\n\t"+JSON.stringify(LeftUserData));
      let {roomId}=LeftUserData;
      socket.to(roomId).broadcast.emit('userDisconnect',JSON.stringify(LeftUserData));
    }
    else{
      console.log(i++,") Server reset ,No History ");
      }
  })
  

})



server.listen(port , ()=>{
  console.log("Server running on port : " + port);
})
