
import React, { useEffect, useRef, useState } from "react"
import Peer from "simple-peer"
import io from "socket.io-client"

const socket = io.connect('http://localhost:2000')

const App1=()=>{

    const [ me, setMe ] = useState("");
	const [ stream, setStream ] = useState();
	const [ receivingCall, setReceivingCall ] = useState(false);
	const [ caller, setCaller ] = useState("");
	const [ callerSignal, setCallerSignal ] = useState();
	const [ callAccepted, setCallAccepted ] = useState(false);
	const [ idToCall, setIdToCall ] = useState("");
	const [ callEnded, setCallEnded] = useState(false);
	const [ name, setName ] = useState("");
    const [room,setRoom]=useState("");
    const [users,setUsers]=useState([]);
    const [mySignal,setMySignal]=useState(null);

	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()
    
  
  //   useEffect(() => {
	// 	navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
	// 		setStream(stream)
	// 			myVideo.current.srcObject = stream
	// 	})
	// socket.on("me", id =>setMe(id));
  //   setName("Ajay");
  //   setRoom("abc");

	// }, [])




//   useEffect(() => {

//     const peer = new Peer({initiator: true,trickle: false,stream: stream})
//     // console.log("This is peer:",peer);

//  // it is bydefault 
//  peer.on("signal", signal => {
//       setMySignal(signal);
//     // console.log("Thisis signal:",signal);
// })


// socket.on("newJoin", data => {
//    const peer = new Peer({initiator: false,trickle: false,stream: stream});
//    let {signal}=data;

 
//    peer.signal(signal)
     
//     peer.on("stream", (stream) => {
//         userVideo.current.srcObject = stream
//     })

   
//    console.log("New User joinned ...!",data); 
//   })
 

// connectionRef.current = peer

//   },[])




  

const  Join = () => {
   console.log("You sent joinning request..!");
   
   
  //  let myData= {room ,signal: mySignal,from: me,name: name}
   
   
  //  console.log("MyData is:",myData);
  //   socket.emit("joinRoom", myData);
 
}



// END UseEffect

return(
    <>

     
    {<video playsInline muted ref={myVideo} autoPlay style={{ width: "400px" }} />}
    <video playsInline ref={userVideo} autoPlay style={{ width: "300px"}} />
    <button onClick={()=>{Join()}}  > JOIN</button>   

    </>
)



}

export default App1;