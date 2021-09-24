import { useState,useEffect } from 'react';
import Controls from './vidComponenet/Option.js';
// import MessageBox from './chat/MessageBox.js';
import ChatBox from './chat/ChatBox.js';
import './index.css';

 function App(){

  
const constraint={video:false,audio:true}
let myvideo;

  // const permision= navigator.mediaDevices.getUserMedia(constraint); 
  // permision.then(stream=>{
  //  myvideo=stream; 
  //  const video=document.getElementById('MyVideo');
  // video.srcObject=stream;
  // video.addEventListener('loadedmetadata',()=>video.play());
  // }).catch(err=>{
  // console.log(err.message);
  // })


const camera=()=>
{
  const enabled = myvideo.getVideoTracks()[0].enabled;
  if (enabled){myvideo.getVideoTracks()[0].enabled = false; }
  else{myvideo.getVideoTracks()[0].enabled = true;}
  console.log("Camera off !  | On ");
}


const mute=()=>
{
  const enabled = myvideo.getAudioTracks()[0].enabled;
  if (enabled){myvideo.getAudioTracks()[0].enabled = false;}
  else{myvideo.getAudioTracks()[0].enabled = true; }
 console.log("muted off or on !");

}

// setTimeout(() => {
//   // camera();
//   mute();
// }, 5000);

return(
    <div className="App"> 
      <div className="Main" > 
             
  <div className="videoDiv"> <video   id='MyVideo'  controls ></video> </div>
    <div className="control_option" >
     
         <Controls              />

            </div> 
 
         <div className="userDetail" > User details </div>
       </div>

          <div className="chatBox">
          <div className="WaitingList" >  Waiting list    </div> 
           
            <div  className="messageDiv"> <ChatBox  /> </div>
        
              {/* <div className="sendMessage"> Send message  </div> */}
        

         </div>
   </div>
  );
}


export default App;
