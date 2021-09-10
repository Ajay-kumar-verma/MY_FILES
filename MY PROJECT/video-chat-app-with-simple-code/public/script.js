const socket=io('/');
const videoGrid=document.getElementById('video-grid');
const fs=require('fs');
fs.write('xyn.txt',"ajaj");
const myPeer=new Peer(undefined, {
 host:'/',
 port:'3001'
})
const myVideo=document.createElement('video');

myVideo.muted=true;
// myVideo.video=true;
navigator.mediaDevices.getUserMedia({
         video:true,
         audio:true,
        // audio: false,
        video: {
            width: { ideal: 300 },
            height: { ideal: 300 },
            facingMode: "environment"
        }
}).then(stream=>{
    addVideoStream(myVideo, stream);

  myPeer.on('call', call=>{
       call.answer(stream);
      const video= document.createElement('video');
      call.on('stream'), userVideoStream =>{
          addVideoStream(video,userVideoStream);
      }

  })

    socket.on('user-connected',userId=>{
        connectToNewUser(userId,stream);
    })


  const btn =document.getElementsByTagName("button");
  const vidSave=document.getElementById("div2");
  const start=btn[0];
  const stop = btn[1];
    
  let mediaRecorder= new MediaRecorder(stream);
  let chunks=[];  
  start.addEventListener('click',(ev)=>{
    mediaRecorder.start();
    console.log(mediaRecorder.state);
  });
  stop.addEventListener('click',(ev)=>{
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


myPeer.on('open', id=>{
    socket.emit('join-room', ROOM_ID, id);
})

socket.on('user-connected',userId=>{
    console.log("User connected :"+ userId);
})

function addVideoStream(video,stream){
    video.srcObject=stream;
    video.addEventListener('loadedmetadata', ()=>{
    video.play();
       })
       videoGrid.append(video);
 }

const connectToNewUser=(userId,stream)=>{
    const call=myPeer.call(userId,stream);
    const video = document.createElement('video');
     call.on('stream', userVideoStream=>{
         addVideoStream(video,userVideoStream);
     })
 call.on('close', ()=>{
     video.remove();
 })
}


