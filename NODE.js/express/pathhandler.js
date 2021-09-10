// this is use for static webpages 

// const path= require("path");
const express= require("express");
const app= express();
// console.log(__dirname);
// const cur_dir=__dirname;
//it return absolute path pf current working directory

// const staticPath=path.join(cur_dir,"../public")

app.set("view engine","hbs");
const nm= "<h1> HELLOW WORLD</h1>";
app.get("/",(req , res)=>{
res.render("index.hbs",{
name:nm
});
});

app.get("*",(req,res)=>{
res.send("Page doesnot exists !  ")

});
// app.use(express.static(staticPath));

// console.log(staticPath);
app.listen(80);