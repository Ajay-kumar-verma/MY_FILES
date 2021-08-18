// This is the main file that display here 
// import logo from './logo.svg'; 
import './App.css';
import Header from './mycomponent/Header'; // This is how we can import any file here 
// Calling com by Name 
// import Section from './mycomponent/Section' 

import {Footer} from './mycomponent/Footer'

import Input from  './Form/Input';

import {useState} from 'react'; // 
import  Counter   from './Timer'

 const  App=()=>{

  // Here props is fetched that detail of function caller 
 
 let [bgc, setbgc] = useState("red");
 let [val,setaval]= useState("");

//  In useSate it return 2 arguments 
// 2 nd argument is for chaning  content of actual value

const fun=(props)=>{
 console.log("Btn is clicked !");
 console.log(props.target);
 console.log(props.target.id);
 console.log(val);
 setbgc("blue");
// props.target will return detail of caller component 
}



const update_val=(props)=>setaval(props.target.value);
// This is for updating the value  






return (
    <>  

{/* <Header  />
  <Input  clr={bgc}    type="number" val={val}  />
  <Input type="text"  onClick={update_val}   val={val} />
  <Input type="number"  val="click me " onClick={fun}  />
{/* 
 <Section name={"Kutta"} event={fun}  clr={"green"}  />

 <Section name={"Rajive gandgi"} event={fun}   clr={"purple"}  />
 
 <Section name={"Nagin kesav"} event={fun}   clr={"yellow"}  />
   
<Footer />
 */}

<Counter  />

 </>


);
}

export default App;
