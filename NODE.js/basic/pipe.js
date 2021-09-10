const http= require("http");
const fs= require("fs");

const port="80";
const hostname="127.0.0.1";

const server= http.createServer();


server.on("request",(req,res)=>{
   const rstream=fs.createReadStream("file.txt");
    rstream.pipe(res);
});
server.listen(port,hostname);