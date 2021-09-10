const fs= require("fs");
// Asynchronomous
fs.readFile("file.txt","utf-8",(er,data)=>{
console.log(data);
});

console.log("File read Asynchronomously");


const info=fs.readFileSync("file.txt","utf-8");
console.log(info);
console.log("File read Synchronomous ");
