import { BrowserRouter as Router } from 'react-router-dom';
import Header from './mycomponent/Header'
import {Todos} from "./mycomponent/Todos";
import {Footer} from "./mycomponent/Footer";
import React, { useState , useEffect } from 'react';
import { AddTodo } from './mycomponent/AddTodo';


function App() {
   let inittodo;
  let dta= localStorage.getItem("data");
  if(dta===null){
      inittodo=[];
   }else{
     inittodo=[...JSON.parse(dta)];
     console.log(...dta);
       
    }

    let  [list,updatelist]=useState(inittodo);
    useEffect(() => {
   localStorage.setItem("data",JSON.stringify(list));


    },list)


  const onDelete=(key)=>{
 updatelist(
   list.filter((e)=>{ // this code will generate new updated array 
  return  e!==key;
})
// Here we can pass any array  or updated array 
)
 
}


  // updatelist(dta);

// updatelist([...dta]);
// console.log();
  
const AddsTodo=(title,desc)=>{
  // console.log("Set todo is called ")  
  
updatelist([{sno:8,title:title,desc:desc},...list]);

  


}

  
      return (
        <>
 <Router>
    {/* This is for search bar  */}
    <Header  title="My Todos List" searchbar={false} /> 
{/* This is for add the todo  It is form   */}
  <AddTodo setTodo={AddsTodo}   /> 


{/* It is list of todos */}
  <Todos  todo={list}   onDelete={onDelete}  />


{/* It is fro fotter  */}
   <Footer/>

     </Router>
        </>
    
  );
}

export default App;
