const fs= require("fs");

fs.writeFile("file.txt","hello buddy how are you !",(err)=>{
    console.log(err);
});


fs.writeFile("file.txt"," I am fine  !",(err)=>{
    console.log(err);
});


fs.appendFile("file.txt","Good",(err)=>{
console.log(err);
});

fs.readFile("file.txt",(err,data)=>{
console.log(err+" "+data);
});


 

