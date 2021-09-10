const http= require("http");
const url=require("url");

const port=800;
const hostname="127.0.0.1";

const server= http.createServer((req,res)=>{

    if(req.url=='/'){
    res.end(" Hello its home page ");
}
else if(req.url=='/about'){
    res.end("Hello its About page ");
 }
 else{
     res.end("Page does not exist "+req.url);
 }

});

server.listen(port,hostname);



   