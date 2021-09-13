const socket = io();// this is for same server 
// otherWise this 
// const socket = io("https://server-domain.com"); 

const peer = new Peer();

// Video and audio streamming is possible through this object only 
// const peerConnections = {}
let myVideoStream;
const userName=prompt("Enter you name :\n");

var videoGrid = document.getElementById('videoDiv')
const constraint={video:true, audio:true}
const permision=  navigator.mediaDevices.getUserMedia(constraint); 

// ask for camera and mice permission  and it return promises
// navigator.mediaDevices.getDisplayMedia(constraint); it ask for screen sharing 

// When promises resolve 
permision.then((stream)=>{ 
  myVideoStream = stream;
  var myvideo = document.createElement('video');
  myvideo.muted = true;
  myvideo.setAttribute('id',"MyVideo");
  addVideo(myvideo, stream);//adding client video for clinet  
}).catch(err=>{
    // alert(err.message);
console.log(err.message);
})



// Call start
peer.on('call' , call=>{ 
   call.answer(myVideoStream); // asking for streamming , it depend on other client
  let CallerId=call.peer;
  console.log("Caller ID is: ",CallerId); 
   let  vid = document.createElement('video');
     vid.setAttribute('id',CallerId);
 
    // caller Stream 
  call.on('stream' , userStream=>addVideo(vid , userStream));
  call.on('error', err=>alert(err));
  peerConnections[call.peer] = call;
  console.log(call);
})
//Call End 


// This execute when page load or start peering 
peer.on('open' , (peerId)=>{
  let myId=peerId;
  let myData={peerId:myId,roomId:roomID,userName:userName};
  console.log("My details:\n",myData);
  let obj=JSON.stringify(myData); 
  socket.emit("newUser", obj);
})



// it is when  new user joines 
socket.on('userJoined' , userData=>{
console.log("new user joined\n details: ",JSON.parse(userData));

let {peerId}=JSON.parse(userData);
let newUserPeerId=peerId;
const call  = peer.call(newUserPeerId, myVideoStream);
const vid = document.createElement('video');
      vid.setAttribute('id',newUserPeerId);
call.on('error' , err=>alert(err));
call.on('stream' , userStream=>addVideo(vid, userStream));
call.on('close' , ()=>{
  vid.remove();
    console.log(" User video removed ! "+peerId)
  })

// peerConnections[newUserPeerId] = div;
  
})


peer.on('error' , (err)=>{
  alert("Error in peers\n "+err.type);

});




// it is ,When user got disconnect 
socket.on('userDisconnect' , userData=>{
  let LeftUserData= JSON.parse(userData); 
  let {peerId}=LeftUserData;
  console.log("User got disconnected !",LeftUserData);
  document.getElementById(peerId).remove();
  // peerConnections[peerId].remove;
  // if(peerConnections[peerId]){
  //   peerConnections[peerId].close();
  //   console.log("Peer video not close yet !");
  // }
    

})





// This is for the add th video   
function addVideo(video , stream){
  video.srcObject = stream;
   video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video);
}






// Work for Button  
const muteButton = document.querySelector("#muteButton");
const stopVideo = document.querySelector("#stopVideo");
const startMeeting = document.querySelector("#startMeeting");


muteButton.addEventListener("click", () => {
  const enabled = myVideoStream.getAudioTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getAudioTracks()[0].enabled = false;
    html = `<i class="fas fa-microphone-slash"></i>`;
    muteButton.style.color="red";
    muteButton.innerHTML = html;
  } else {
    myVideoStream.getAudioTracks()[0].enabled = true;
    html = `<i class="fas fa-microphone"></i>`;
    muteButton.style.color="white";
    muteButton.innerHTML = html;
  }
});

stopVideo.addEventListener("click", () => {
  const enabled = myVideoStream.getVideoTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getVideoTracks()[0].enabled = false;
    html = `<i class="fas fa-video-slash"></i>`;
    stopVideo.style.color="red";
      stopVideo.innerHTML = html;
  } else {
    myVideoStream.getVideoTracks()[0].enabled = true;
    html = `<i class="fas fa-video"></i>`;
    stopVideo.style.color="white";
       stopVideo.innerHTML = html;
  }
});








