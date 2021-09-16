const express=require('express');
const app=express();



app.get('/',(req,res)=>{
    res.send("This is Main Page !");
})

app.get('/home',(req,res)=>{
res.send("This is home pages !");
})





// Change the 404 message modifing the middleware
app.use((req, res, next)=>{
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
  next();
});


app.listen("80",()=>{
    console.log("Server is running at port 80 !");
})
