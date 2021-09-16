import './App.css';
// import './script/script.js'
import Controls from './vidComponenet/Option.js';

function App() {
  
  return (
    <div className="App"> 

      <div className="Main" > 
             
          <div  className="videoDiv">  <video   id='MyVideo'    controls> </video> 
            </div>
        
            <div className="control_option">
            <Controls  stream={'myVideoStream'} />
            </div>

         <div className="userDetail"> User details </div>
       </div>


          <div className="chatBox">
          <div className="WaitingList" >  Waiting list    </div> 
             <div  className="messageDiv"> chat </div>
              <div className="sendMessage"> Send message  </div>
        
         </div>
   </div>
  );
}


export default App;
