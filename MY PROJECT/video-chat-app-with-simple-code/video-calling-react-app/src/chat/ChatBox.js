import MessageBox  from "./MessageBox";
import SendMessage from "./SendMessage";
import { useState,useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:2000";
const RoomId="abc-xyz";
const ChatBox=()=>{

  let [msgList,updatemsgList]=useState([]);


 
  
let socket=socketIOClient(ENDPOINT);

 
const StartChat=(nm)=>socket.emit('Join',nm); 
const LeaveMessting=(nm)=>socket.emit('Left',nm);

 socket.on('broadcast',msg=>updatemsgList([...msgList,msg]));
 const  SendMsg=(obj)=>{
  if(obj.msg){
  obj.roomId=RoomId;
  socket.emit('msg',obj);
  obj.nm="You";
  updatemsgList([...msgList,obj]);
  console.log("Msg send event fire !"); 
  }
  else{
    console.log("Message havnt sent !");
  }
         
 }

 
 useEffect(()=>{
  
 SendMsg();

},[])

return (<>
  <MessageBox msgList={msgList}  />
  <SendMessage SendMsg={SendMsg}  /> 

 </>
 )

}

export default ChatBox;