import React,{useState, useEffect,useRef} from 'react'
import io from "socket.io-client";
import Peer from 'peerjs';
let peer;
const socket=io.connect('http://localhost:2000/');
const App2 = () => {
 let myVideoStream=useRef();  
 let ss=useRef();
 const  [stream,setStream]=useState([]);


 const videoGrid=useRef();
 const UsersVideoStream=useRef();
 const micBtn=useRef();
 const videoBtn=useRef();


useEffect(() => {
 const constraint={video:true, audio:false}
 const   permission=  navigator.mediaDevices.getUserMedia(constraint); 

 permission.then(stream=>{ 
  myVideoStream.current=stream;
    addVideo(stream);
    }).catch(err=>{
console.log(err.message);
})
    creatPeer("user_media");
},[])


const creatPeer=(stream_type)=>
{   peer = new Peer();

    peer.on('open',(id,)=>{
    socket.emit("join",id,stream_type);
    console.log('Your Peer id is :',id);
    })
}


useEffect(() => {
  socket.on('newUser',(id)=>
  {
  const call  = peer.call(id, myVideoStream.current);
  call.on('error' , err=>alert(err));
  // call.on('stream' , userStream=>usersVideo(userStream,id));
  console.log("new user joinnend ..Peer is !",id);
         
  })

},[])


useEffect(()=>{
//  for Streamming 
    peer.on('call' , call=>{ 
    call.answer(myVideoStream.current); //asking for streamming , it depend on other client
    let CallerId=call.peer;
    call.on('stream' , userStream=>usersVideo(userStream,CallerId));
    call.on('error', err=>alert(err));
   })

},[])





function addVideo(stream){
  var video = document.createElement('video');
  video.setAttribute('height','500px');
  video.setAttribute('width','500px');
  video.muted = true;
  video.setAttribute('id',"Myvideo");
  video.srcObject = stream;
  video.controls=true;
  video.addEventListener('loadedmetadata', () => {
  video.play()
  })
  videoGrid.current.append(video);
}



const usersVideo=(UserStream,PeerId)=>{
  // user_Stream[PeerId]=UserStream;
   setStream([...stream,UserStream]) ; 
  let  UserVideo = document.createElement('video');
  UserVideo.setAttribute('height','200px');
  UserVideo.setAttribute('width','200px');
  UserVideo.style.margin='0 10px 0 10px';
  UserVideo.setAttribute('id',PeerId);
  UserVideo.srcObject = UserStream;
  UserVideo.controls=true;
  UserVideo.addEventListener('loadedmetadata', () => UserVideo.play());
  const div=document.createElement('div');
  div.appendChild(UserVideo);
      
  UsersVideoStream.current.append(div);

}

const  screanShare=()=>{
  const constraint={video:true, audio:false}
  const permission=  navigator.mediaDevices.getDisplayMedia(constraint); 
  permission.then(stream=>{ 
    
    creatPeer("user_screan");


      }).catch(err=>{
  console.log(err.message);
  })
  

}



const camera=()=>
{
  const enabled = myVideoStream.current.getVideoTracks()[0].enabled;
  if (enabled){myVideoStream.current.getVideoTracks()[0].enabled = false; }
  else{myVideoStream.current.getVideoTracks()[0].enabled = true;}
  console.log("Camera off !  | On ");
}







    return (
        <>
        <div >
     <div>
       
     <div  style={{height:"500px",width:"500px",border:"5px solid green"}} ref={videoGrid} >
     </div>
 
      <button onClick={()=>{screanShare();}}>ScreenShare</button>
      <button onClick={camera}>Off Camera </button>
       </div>

           <div  style={{position:"fixed",top:"20px",right:"30px",height:"400px",width:"400px",border:"2px dotted pink " }} ref={ss} >


           </div>
       


        <div ref={videoBtn} class="options__button">
              <i class="fa fa-video-camera"></i>
            </div>

           {<p> USERS VIDEO  </p>}

           <div style={{height:"200px",display:"flex",justifyContent:"center" 
            ,width:"80%",border:"5px solid blue",margin:"5px"}} ref={UsersVideoStream} ></div>

                 </div>
            

   </>
    )
}

export default App2
