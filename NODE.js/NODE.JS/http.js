import http from "http";

const host ="127.0.0.1";
const port=200 ;

const server= http.createServer();
    var req;
server.on("request",(req,res)=>{ 
res.write(req.url+"Hello Ajay kumar verma");
console.log(`Serrver is running ! at port ${port} ${req}`);

res.end();
});

server.listen(port,host,()=>{
console.log(`Serrver is running ! at port ${port} ${req}`);
})



// // Lengthy process
// http.createServer((req,res)=>{
//     res.end(req+"Hello ");
//   }).listen(port,host,()=>{
// console.log("Server is running ");

// });

