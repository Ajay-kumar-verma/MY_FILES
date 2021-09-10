import emiiter from "events";

const mye=new emiiter();


mye.on("waterfull",()=>{ // this will execute when event occur
    console.log("Please turn off the motor !");
 
    setTimeout(()=>{
   
console.log("Kindly request to turn off !");
    },1000);
});

mye.emit("waterfull"); // this is used for event fire

console.log("Code is still running !");
mye.emit("waterfull");
console.log("Code is still running !");