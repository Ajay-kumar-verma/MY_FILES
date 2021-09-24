import {useState} from "react";

const Form=()=>{

 let [inpt,setinpt]=useState("");
//  It is used for update the component 
 let [fullName,setfullName]=useState("My name... ")

const input=(data)=>{

//console.log("Form button clicked !");
//console.log(data.target.value);

setinpt(data.target.value);

}

return(
    <>
    <p>This is my Name {fullName} </p>
     <br/>
     <input
     placeholder="Enter your name !" 
     //defaultValue=""
     onChange={input}
     //this is also a way to call the function 
     />
         
 <br/>
 <input type="submit"  onClick={()=>{setfullName(inpt)}} value="Print My name ..." />
     </>
)
}
export default Form;