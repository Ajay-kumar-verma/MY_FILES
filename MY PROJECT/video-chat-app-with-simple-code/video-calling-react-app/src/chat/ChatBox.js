import MessageBox  from "./MessageBox";
import SendMessage from "./SendMessage";
import { useState,useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:80";
const RoomId="abc-xyz";
const ChatBox=()=>{

  let [msgList,updatemsgList]=useState([]);

// // Temp code 
//   const append=(nm,msg)=>updatemsgList([...msgList,{nm:nm,msg:msg}]);
//   useEffect(() => {
//   append("Ajay","i am ajay kumar verma i am ajay kumar verma");
//   },[])
// //temp code 

 
  
let socket=socketIOClient(ENDPOINT);

 
const StartChat=(nm)=>socket.emit('Join',nm); 
const LeaveMessting=(nm)=>socket.emit('Left',nm);

 socket.on('BroadCastMsg',msg=>updatemsgList([...msgList,msg]));

 const SendMsg=(msg)=>{
   if(msg.msg!==""){
   msg.roomId=RoomId;
   socket.emit('Msg',msg);
   msg.nm="You";
   updatemsgList([...msgList,msg]);
   console.log("Msg send event fire !"); 
   }
   else{
     console.log("Message havnt sent !");
   }
          
  }


return (<>
  <MessageBox msgList={msgList}  />
  <SendMessage SendMsg={SendMsg}  /> 

 </>
 )

}

export default ChatBox;