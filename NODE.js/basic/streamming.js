const fs= require("fs");
const http= require("http");

const server= http.createServer();
// 1st WAy of  readding File
// server.on('request',(req,res)=>{
//     fs.readFile("file.txt",(err,data)=>{
//      res.end(data);
//     });
// });

//2st way of reading file 

server.on('request',(req,res)=>{
const rstream= fs.createReadStream("file.txt"); 

rstream.on('data',(chunkdata)=>{
res.write(chunkdata);    
});

rstream.on('end',()=>{
res.end();
});


});



server.listen(80,"localhost");