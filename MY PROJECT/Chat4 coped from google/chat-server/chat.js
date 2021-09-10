const chat_user={};

function chat(io){
  io.on('connection', (socket) => {
       
    socket.on('user-joined',msg=>
    {
      let  msgs =JSON.parse(msg);
      console.log(msgs.uname+" joined the chat !")
       chat_user[socket.id]=msgs.uname;
       let event_id=socket.id+1;
       chat_user[event_id]=msgs['id'];
         socket.broadcast.emit(msgs['id'],msgs.uname+": joined the chat !");
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
    let  msgs =JSON.parse(msg);
    socket.broadcast.emit(msgs['id'],msgs['msg']);
    });
 



  socket.on('connect_error', (err) =>
   {
      console.log(`connect_error due to ${err.message}`);
    });




  });

};

module.exports = chat;



