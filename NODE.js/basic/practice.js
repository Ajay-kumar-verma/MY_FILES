
const md= require("./own_module");// This file path provide own_module one level up  
 
 mod= new md();
  
console.log(mod.name(" Ajay"));
console.log(mod.age("98"));

// console.log(mod.sum(45,6));
console.log(mod.id);
console.log(mod.psw);
 

// const http=require("http");
// const port = "80";
// const host ="localhost";

// const server= http.createServer((req,res)=>{

//  if(req.url=="/"){
//     res.write("This is local host");
   
//  }
// else if(req.url=="/home"){
//     res.write("This is home");
    
// }
// else{
//     res.write("This is unknown");
// }

// res.end();   
 
//     });

// server.on("request",(req,res)=>{

// res.write(req.url);
// res.end();

// });


// server.listen(port,host,()=>{
//     console.log("Server is running at port "+port+" and localhost");
// })





