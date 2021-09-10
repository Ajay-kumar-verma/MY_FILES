const express=require('express');
const app=express();

const server=require('http').Server(app); 

const io=require('socket.io')(server);

const {v4 :  uuidV4}=require('uuid');


app.set('view engine','ejs');
app.use(express.static('public'));

 app.get('/',(req,res)=>{
    res.redirect(`/${uuidV4}`);
    // res.redirect('/home'); 
    console.log(uuidV4);
})

io.on('connection',socket=>{
    
socket.on('join-room',(roomId,userId)=>{
    console.log(roomId,userId);
    socket.join(roomId);
    // socket.to(roomId).broadcast.emit('user-connected',userId)
    socket.broadcast.emit('user-connected',userId)
})

})



app.get('/:room',(req,res)=>{
    res.render('room',{roomId:req.params.room});
})




server.listen(3000,()=>{
    console.log("Server is Running !");

})
