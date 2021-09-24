import { useState } from "react";

const Form1=()=>{
 
let [data,setdata]=useState("");


const onSubmit=(e)=>{
 e.preventDefault();
//  console.log(e.target)   
setdata("Ajay")
}

const inputData=(e)=>{
    console.log(e);    
console.log(e.target);
console.log(e.target.placeholder)
e.target.placeholder="xxxxxxxxxx";

}

  return(
<>
<p>My name is : {data}</p>

 <form onSubmit={onSubmit}   >
  
<input type="text"  placeholder="Enter you name !"
onChange={inputData}
/>
<br/>

<input type="text"  placeholder="Enter number !" 
onChange={inputData}
/>
<br/>
<input type="text"  placeholder="Enter gender !"

onChange={inputData}

/>
<br/>
<input type="submit"  value="Submit" />
</form>

</>
  )
}

export default Form1;