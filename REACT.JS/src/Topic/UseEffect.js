import React, { useState, useEffect } from 'react';
  
function App() {
    
  const [count, setCount] = useState(0);
  const [name,setName]=useState("");
  
// this block will execute when Any variable gets changed their state 
// without second  paramete...!


//   useEffect(() => {
//     alert(`You clicked ${count} times`)
//     console.log("btn clicked");
//   },[]);
  

//if [] means it will execute only once in its whole life 
//  or 
    


  useEffect(() => {
    alert(`You clicked ${count} times`)
    console.log("btn clicked");
  },[count]);
// with second parameter 
// it will execute when count change 




  return (
    <div>  
      <div>You have clicked {count} times</div>
       <input 
        
        onChange={(e)=>{setName(e.target.value)}}
        
       />

      <button onClick={()=>{setCount (count + 1)}} >
        Click me
      </button>
    </div>
  );


  
}
  
export default App;


// . The dependencies of useEffect()

// A) Not provided: the side-effect runs after every rendering.

// import { useEffect } from 'react';
// function MyComponent() {
//   useEffect(() => {
//     // Runs after EVERY rendering
//   });  
// }



// B) An empty array []: the side-effect runs once after the initial rendering.

// import { useEffect } from 'react';
// function MyComponent() {
//   useEffect(() => {
//     // Runs ONCE after initial rendering
//   }, []);
// }



// C) Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs only when any depenendecy value changes.

// import { useEffect, useState } from 'react';
// function MyComponent({ prop }) {
//   const [state, setState] = useState('');
//   useEffect(() => {
//     // Runs ONCE after initial rendering
//     // and after every rendering ONLY IF `prop` or `state` changes
//   }, [prop, state]);
// }