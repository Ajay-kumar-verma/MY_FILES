import { useState } from 'react';
import './Option.css';

const Option=({camera,mute})=>{

return (<>

<div class="options">
                   
      <div  class="options__button" onClick={()=>{camera()}} >
                 <i class="fa fa-video-camera"></i>
                   </div>
         

         
                   <div  class="options__button" 
                   
                     
          // onClick={}
         
                   >
                     <i class="fa fa-microphone"></i>
                   </div>
       
                   <div  id="startMeeting" class="options__button">
                     <i class="fa fa-group"></i>
                   </div>
       
                   <div  id="startRecording" class="options__button" 
                  
                   
                   >
                    <p>Start Recording  </p>
                     </div>
       
                 <div  id="stopRecording" class="options__button"
                  
                  
                 >
                <p>Stop recording  </p> 
                </div>
          
          <div id="Lme" class="options__button" >
             <p>Leave Meeting  </p>
             </div>
       
                  </div>
</>)


}

export default Option;





