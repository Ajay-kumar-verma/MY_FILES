import { useRef, useEffect } from 'react';
function RefForm() {
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  });
  
//  const input=()=>{
//    console.log(inputRef.current);
//   }

 const input1=(e)=>{
    //  console.log(e.target.value);

      setInterval(() => {
      console.log(inputRef.current.value);
       },1000);
     
    } 
 
  return <input ref={inputRef} type="text"
  
  onClick={input1}
  
  />;
}

export default RefForm;