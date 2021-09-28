import { useState } from "react";

const Form1=()=>{
 
let [data,setdata]=useState({});

const onSubmit=(e)=>{
  // It gets Whole form element
 e.preventDefault();
 console.log(e.target)   
}

const inputData=(e)=>{
console.log(e.target);
const {name,value}=e.target;
if(value){data[name]=value}
else{ delete data[name]; }
setdata({...data});
}

 
return(
<>
<p>My name is : {JSON.stringify(data)}</p>

 <form onSubmit={onSubmit}   >
 <input type="text"  placeholder="Enter you name !"
 name="name"
 onChange={inputData}
 /><br/>

<input type="text"  placeholder="Enter number !" 
name="number"
onChange={inputData}
/><br/>

<input type="text"  placeholder="Enter gender !"
name="gender"
onChange={inputData}
/><br/>

<input type="text"  placeholder="Enter Age !"
name="Age"
onChange={inputData}
/><br/>


<input type="submit"  value="Submit" />
</form>
</>
  )
}

export default Form1;