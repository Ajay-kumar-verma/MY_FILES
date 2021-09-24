import './Style.css'
import { useState,useEffect } from 'react';


const MessageBox=({msgList})=>{

 useEffect(() => {
    const msgDiv=document.getElementsByClassName("container")[0];
    msgDiv.scrollTop=msgDiv.scrollHeight;
 }, [])  


return(
    <>
    <p>&nbsp;</p>
    <div className="container">
      {
      msgList.map(obj=>{
        let {nm,msg}=obj;
          
         return(
          <div> 
            {nm+":~"+msg}
            {<p></p>}  
          </div>   
           )

      })
     
     }
        </div>
    </>
)

}

export default MessageBox;