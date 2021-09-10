import fs from "fs";



// this is Sysnchronomous method to  read the file 

// const data=fs.readFileSync("index.js","utf8"); //Compiler wait till read the file 
// console.log(data); 
// console.log("read file");




// this is asynchronoous method to read the file 
// fs.readFile("filehandling.js","utf8",(err,data)=>{ //compiler keep running the code 
// console.log(err, data);
// });
// console.log("Finished reading ");



// fs.writeFile("index.txt","This is Sachin kumar Vaerma ",(err,data)=>{
// console.log("Finishing writing ",err,data);
// });
// console.log("Done")


// fs.appendFile("index.txt","This is Sachin kumar Vaerma ",(err,data)=>{
//     console.log("Finishing writing ",err,data);
//     });
//     console.log("Done")
    

    // fs.appendFileSync("index.txt","This is Sachin kumar Vaerma ");
    //     console.log("Done")
    //     console.log("doon")
    



fs.writeFileSync("index.txt","Hello , How are you ?");

// fs.unlink("index.txt",(err,data)=>{
//     console.log(err,data);
    
//     })

// For basic understanding you can the run the code 
