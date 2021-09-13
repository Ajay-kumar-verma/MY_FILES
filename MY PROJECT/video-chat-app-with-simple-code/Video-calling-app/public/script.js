const socket = io();// this is for same server 
// otherWise this 
// const socket = io("https://server-domain.com"); 

const peer = new Peer();

// Video and audio streamming is possible through this object only 
// const peerConnections = {}

const userData={};

let myVideoStream;
const userName=prompt("Enter you name :\n");

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



//  for Streamming 
peer.on('call' , call=>{ 
  call.answer(myVideoStream); // asking for streamming , it depend on other client
  let CallerId=call.peer;
  console.log("Caller ID is: ",CallerId); 
   let  vid = document.createElement('video');
    vid.setAttribute('id',CallerId);
  call.on('stream' , userStream=>addVideo(vid , userStream));
  call.on('error', err=>alert(err));
 })

 

// it is when  new user joines or permitted by admin 
socket.on('userJoined' , userData=>{
  console.log("broadCasting   \n details: ",JSON.parse(userData));
  let {peerId}=JSON.parse(userData);
  let newUserPeerId=peerId;
  const call  = peer.call(newUserPeerId, myVideoStream);
  const vid = document.createElement('video');
   vid.setAttribute('id',newUserPeerId);
  call.on('error' , err=>alert(err));
  call.on('stream' , userStream=>addVideo(vid, userStream));
  })
  





// This execute when page load or start peering 
 let myData;
peer.on('open' , (peerId)=>{
  let myId=peerId;
   myData={peerId:myId,roomId:roomID,userName:userName};
  console.log("My details:\n",myData);
  })

  // For starting meeting  
const Metting=()=>{
  console.log("you send request for this meeting !");
  let  obj=JSON.stringify(myData); 
  socket.emit("ask_admin", obj);
  // socket.emit("broad_cast", obj);
}
const startMeeting = document.querySelector("#startMeeting");
startMeeting.addEventListener('click',Metting);







 const userWaitingDetail=document.getElementById('userwaiting');
 
 // User waiting and  asking for joinning the   meeting 
   socket.on('userWaiting',userData=>{
    let {userName}=JSON.parse(userData);
     let para=document.createElement("p");
     para.onclick=()=>{
      console.log("you allowed "+userName);
      para.remove();socket.emit('admin_allowed',userData);
      }
     para.innerText=userName;
     userWaitingDetail.appendChild(para);
  })



  // when Admin allowed
  socket.on('allowed',userData=>{
   console.log(" I am on meeting ,Admin allowed me !");
   socket.emit("broad_cast",userData);
 }) 





// it is ,When user got disconnect 
socket.on('userDisconnect' , userData=>{
  let LeftUserData= JSON.parse(userData); 
  let {peerId}=LeftUserData;
  console.log("User got disconnected !",LeftUserData);
  document.getElementById(peerId).remove();
  })





// it i son error
peer.on('error' , (err)=>{
  alert("Error in peers\n "+err.type);

});







// This is for the add th video  
var videoGrid = document.getElementById('videoDiv')
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





// recording part 

const vidSave=document.getElementById("div2");
const start=document.getElementById('startRecording');
const stop = document.getElementById("stopRecording");

start.addEventListener('click',()=>{
  
const constraint={video:true, audio:true}
const permision=  navigator.mediaDevices.getDisplayMedia(constraint); 

permision.then(stream=>{
  let chunks=[];  
  let mediaRecorder = new MediaRecorder(stream);


 mediaRecorder.start();
  console.log(mediaRecorder.state);



stop.addEventListener('click',()=>{
  mediaRecorder.stop();
  console.log(mediaRecorder.state);

});


mediaRecorder.ondataavailable=(ev)=>{
   chunks.push(ev.data); 
}


mediaRecorder.onstop=(ev)=>{
  let blob =new Blob(chunks,{'type':'video/mp4'});
  chunks=[];
  let videoUrl=window.URL.createObjectURL(blob);
  vidSave.src=videoUrl;
  
  var object = new ActiveXObject("Scripting.FileSystemObject");
      var file = object.GetFile(videoUrl);
    file.Move("./Docus/");
      console.log("File is moved successfully");
}


})
});


