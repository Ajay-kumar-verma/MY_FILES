// import { Component } from "react";
import {useState} from 'react';


 const  Timer =()=>{

let   [x, setx] = useState(0);
// let   [val,setaval]= useState("");


setInterval(() => {
    setx(x++);
}, 1000);




return(x)





}

export default Timer;