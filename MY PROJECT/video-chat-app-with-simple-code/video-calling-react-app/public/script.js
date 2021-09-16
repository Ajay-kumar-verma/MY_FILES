const socket = io('localhost:80');



let myVideoStream;

const userName="ajay";
const constraint={
    video: {
      width: { min: 240, ideal: 1050 },
      height: { min: 500, ideal: 300 },
      aspectRatio: { ideal: 1 }
    },
    audio: {
      sampleSize: 16,
      channelCount: 2
    }
  }


const permision=  navigator.mediaDevices.getUserMedia(constraint); 
permision.then((stream)=>{ 
  myVideoStream = stream;
  var myvideo = document.getElementById("MyVideo");
  myvideo.muted = true;
  myvideo.srcObject = stream;
  myvideo.controls=true;
  myvideo.addEventListener('loadedmetadata', () => {
  myvideo.play()
  })
}).catch(err=>{
    // alert(err.message);
console.log(err.message);
})



// working with Audio and video 
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

