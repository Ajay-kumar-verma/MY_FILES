const express=require('express');
const app=express();

app.get('/',(req,res)=>{

    res.send("This is Main Page !");

})

// Change the 404 message modifing the middleware
app.use((req, res, next)=>{
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});


app.listen("80",()=>{
    console.log("Server is running at port 80 !");
})
