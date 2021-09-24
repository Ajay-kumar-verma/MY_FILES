import { useState } from "react";
const SendMessage=({SendMsg})=>{

    let [msg,setmsg]=useState("");


const Text =(e)=>{
  console.log("typing....",e.target.value);
  setmsg(e.target.value);  
}

const nm="Ajay";


return(<>
      <div style={{display:"flex"}} >
      
 
       <input style={{flex:'4',height:'30px' }}
        type='text'
        placeholder="type here.... "
        onChange={Text}
        value={msg}
        required 
         />
   
        <input style={{flex:'1' }}
        type="submit"
        value="Send"
        onClick={()=>{SendMsg({nm:nm,msg:msg}); setmsg("")}} 
        />
      
      </div>

    </>)
}

export default SendMessage;