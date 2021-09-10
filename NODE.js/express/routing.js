const express= require("express");
const app= express();


app.get("/",(req,res)=>{
res.send(" hello  from express");// res.send .it send the data and close the connection 
});



app.get("/hom",(req,res)=>{
res.write("heloo from home ");//it keep writting unless close
res.send();
});

app.get("/about/*",(req,res)=>{
res.status(200).send(" hello from about pages");
});

app.get("*",(req,res)=>{
res.send(" Not exist !")
});

app.listen(80,()=>{
    console.log("Server is running at post 80")
});