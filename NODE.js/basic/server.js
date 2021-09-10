// this is event based programming for server 

const http= require("http");

const port =80;
const hostname='127.0.0.1'; 

// const server=http.createServer((req,res)=>{
// res.end(req.url);
// }).listen(port,hostname,()=>{console.log("Server is running !")});

const server= http.createServer();

server.on('request',(req,res)=>{
    res.end(req.url);
});


server.listen(port,hostname);


server.on('listening',()=>{
    console.log(`Server is running at port  ${port} and host  ${hostname} .`);
})
