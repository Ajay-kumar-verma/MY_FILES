import React,{useState,useEffect,useRef} from 'react'

const UseEffect2 = () => {
  const [count, setCount] = useState(0);
  const [name,setName]=useState("");
  const btn=useRef();

//When ever component gets update or any state gets changes 
//whole function will reset except defined variable and 
//function unless it called 

useEffect(()=>{
  console.log(" I will execute whenevere any state and props gets updates ");
},[])

  //  useEffect(() => {
  //   setTimeout(() => {// it call again and again itself when anychanges makes 
  //     setCount((count) => count + 1);
  //   }, 1000);
  //  },[count]);// it execute when count changes  

 const  btns=()=>{
     console.log("Button clicked ....!");
      if(name=="Ajay")
      {
        setName("");
      }
      else{
        setName("Ajay");
      }
    
  
    }

   setTimeout(() => {
   console.log(btn.current);
    },2000)



  return(



  <>
  <button  ref={btn}     onClick={btns}> Click here </button>
  <h1>I've rendered {count} times!</h1>
  </>
  );
}
export default UseEffect2;