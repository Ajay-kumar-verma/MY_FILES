const express = require("express");
const app= express();


app.get("/",(req,res)=>{
res.send("Normal text !"); //Any normal text
});

app.get("/index.php",(req,res)=>{
    res.send({// here we can pass only object
        name:"Ajay",
        numbe:9973541431
    });

});

app.get("/json",(req,res)=>{
res.json(
"I am lucky " // here we can send any thing that auto get converted into json format

);

});

app.listen(80);