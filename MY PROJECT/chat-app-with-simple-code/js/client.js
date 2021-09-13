// window.addEventListener('online', ()=>{alert("you are online !")} );
//   window.addEventListener('offline', ()=>{alert("you are offline !")});

alert(window.offline);


const socket= io('http://localhost:3000');
// This is socket 

const  names =prompt("Enter your name :\n");
const room_id=(new String(window.location)).split('=')[1];
// console.log(room_id)
const connect_msgs=JSON.stringify({uname:names,id:room_id})
socket.emit('user-joined',connect_msgs);
// Please note that broadcasting is a server-only feature.   

socket.on(room_id,data=>{
  append(data,'left');
  console.log(data);  
});




const msgDiv=document.getElementsByClassName("container")[0];
const append=(msg,pos)=>
{
  let msg_div=document.createElement("div");
  msg_div.innerText=msg;
  msg_div.classList.add('message');
  msg_div.classList.add(pos);
  msgDiv.appendChild(msg_div);
  msgDiv.scrollTop=msgDiv.scrollHeight; // this will scroll top 
}

const msg=document.getElementsByTagName("input");
const para=document.getElementsByTagName("p");

let typing_event=room_id+1;
 msg[0].oninput=()=>
  {
    const msgs=JSON.stringify({msg:names+" is typing...",id:typing_event})
    socket.emit('send_msg',msgs)
  }
  


socket.on(typing_event,data=>
 {
  para[0].innerHTML=data;
   setTimeout(() =>
   {
   para[0].innerHTML="&nbsp;"
   },500);

})


function send()
{   
  const msgs=JSON.stringify({msg:names+": "+msg[0].value,id:room_id})
   if(msg[0].value)
  {socket.emit('send_msg',msgs);
    append(msg[0].value,'right');
    //  alert(msg[0].value)
    msg[0].value="";     
  }
 
}

  

  



