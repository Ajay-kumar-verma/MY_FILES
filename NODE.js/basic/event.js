const EventsEmitter= require("events");
const event = new EventsEmitter();//for Event creator

const http=require("http");// module
const server= http.createServer();//server creation
const port = "120";// port number
const hostname="127.0.0.1";  // hostname

server.on("request",(req,res)=>{//when event occur on server for request
res.write("hello buddy");
res.end();
});

server.listen(port,hostname);


event.on("hi",()=>{// Event Listner 
    console.log("hi babby"); // function 
});


event.on("hi",(x)=>{
    console.log(x);
});

event.emit("hi","its Ajay kumar verma bro"); // Event Emitter and passing data
// it is purely javascript 

