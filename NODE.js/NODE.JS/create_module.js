export  class fun{
   
    static sum(a,b){  
              return (a+b);
    } 
          
 static mul=(a,b)=>a*b// this is arrow function 
 static div=(a,b)=>a/b
 static sub=(a,b)=>a-b

static x=98
static name="kutta"

}

//  export x=90;// new fun();

// // module.exports=fun;



export  function simple() {
    console.log("Simple is imported ");
} 
export   function complex() {
    console.log("complex is imported ");

    // javascript support functional programmning it can return anything 
} 

export default  function complex1() {
    console.log("Default function imported ");
} 
