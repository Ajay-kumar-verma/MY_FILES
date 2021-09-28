import React,{useState,useRef,useEffect} from 'react'

const UseState = () => {
//     let [data,setData]=useState(null);

//     console.log(data);
  
//    useEffect(() => {
//     console.log("Ajay kumar verma ") ;
  
//    },[]) // this is for only once execute
//     return (
//         <div>
//   {data}            

          
//   <input type="text" 
  
//   onChange={(e)=>{setData(e.target.value)}}
  
//   />

//         </div>
//     )



// const inputRef = useRef();
// useEffect(() => {
//   // Logs `HTMLInputElement` 
//   console.log(inputRef.current);
//   inputRef.current.focus();
// },[]);
// // Logs `undefined` during initial rendering
// console.log(inputRef.current);
// return <input ref={inputRef} type="text" />;




let [data,setData]=useState(null);
let [msg,setmsg]=useState('');
useEffect(() => {
   const id=  setInterval(() => {
        setmsg(data);
    }, 2000);

   return () => {
        clearInterval(id);
    }; //this is for clearingLast  last setInterval
  
  }, [data]);


  return <div>
      {msg}
<input type="text" 
      onChange={(e)=>{setData(e.target.value)}}
    />
 </div>;







}

export default UseState


//useState re render the WHOLE componet or fucntion through
// if anychanges make in any state 
//whereAs useref is not like that 
// Usestate always re render the ompnent each time 