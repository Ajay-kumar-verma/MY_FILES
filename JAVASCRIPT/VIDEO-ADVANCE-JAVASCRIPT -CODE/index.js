const express=require('express');
const app= express();
const fs=require('fs');

app.get('/',(req,res)=>{
 res.send("Its working  !");

})

app.listen(80,()=>{
    console.log("serser is running !")
});