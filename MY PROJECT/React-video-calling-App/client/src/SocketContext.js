import React,{createConext,useEffect,useState,useRef} from 'react';
import {io} from 'socket.io-client';
import Peer from 'simple-peer';
const SocketContext=createConext();
const socket=io('http://localhost:2000');


const ContextProvider =({data})=>{
   const [stream,setStream]=useState(null);
   const [me,setMe]=useState(null);
   const [call,setCall]=useState({});
   const [callAccepted,setCallAccepted]=useState(false);
   const [callEnded,setCallEnded]=useState(false);
   const [nme,setName]=useState('');
   
    const myVideo=useRef();
    const userVideo=useRef();
    const [connectionRef,setconnectionRef]=useRef();

    useEffect(() => {
  const constraint={video:true,audio:true};   
const permission=  navigator.mediaDevices.getUserMedia(constraint);
permission.then(currentStream=>{
     setStream(currentStream);
       myVideo.current.srcObject=currentStream;  

 })
  socket.on('me',id=>setMe(id));
  socket.on("calluser",({nme:callerName,from,signal})=>{
        setCall({isReceivedCall:true,from,nme:callerName,signal});
  })

 },[])


  
 const answerCall=()=>{
  setCallAccepted(true);
  const peer =new Peer({initiator:false,trickle:false,stream})
 peer.on('signal',(data)=>{
  socket.emit('answerCall',{signal:data,to:call.from});
 });

peer.on('stream',(currentStream)=>{
    userVideo.current.srcObject=currentStream;
})

peer.signal(call.signal);
connectionRef.current=peer;

}


const callUser=(id)=>{
   const peer =new Peer({initiator:true,trickle:false,stream})
  
  
   peer.on('signal',(data)=>{
    socket.emit('calluser',{userToCall:id,dignalData:data,from:me,nme});
   });
  
  peer.on('stream',(currentStream)=>{
      userVideo.current.srcObject=currentStream;
  })

  peer.on('callaccepted',signal=>{
      setCallAccepted(true);
      peer.signal(signal);
  })

 connectionRef.current=peer;
  } 

  const leaveCall=()=>{
  setCallEnded(true);
  connectionRef.current.destroy();
  window.location.reload();
  }

return (
<SocketContext.Provider value={{
call,
callaccepted,
myVideo,
userVideo,
stream,
nme,
setName,
callEnded,
callUser,
leaveCall,
answerCall

}}>
{data}
</SocketContext.Provider>
)

}

export {ContextProvider,SocketContext};



