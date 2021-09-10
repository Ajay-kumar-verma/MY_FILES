// This is event based programming for server
// pure javascript without using any framework  

const http= require("http"); //importing http object to use or create serve 

const port =80; // declararing  port 
const hostname='127.0.0.1';  // declararing server 


// Older and compeleted method 

  // const server=http.createServer((req,res)=>{
          // res.end(req.url);
           // }).listen(port,hostname,()=>{console.log("Server is running !")});


//END     



const server= http.createServer(); // it fires requests event

server.on('request',(req,res)=>{ //it is when serve request 
    if(req.url=='/')
    {  
        res.end("Hello Ajay");
    }
    else if (req.url=='/home')
    {
        res.end(" this is home page : \n Home ");
    }
    else if (req.url=='/about')
    {
        res.end(" this is Abot page : \n About  ");
    }
    else{
        res.end("Invalid url \n please chech !");
    }
  
 

});


server.listen(port); // it fires listening event when it works fine 


// Hostname can be a second paramenter its optional 

server.on('listening',()=>{
    console.log(`Server is running at port  ${port} and host  ${hostname} .`);
})
