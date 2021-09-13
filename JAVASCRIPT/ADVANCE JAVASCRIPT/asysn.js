const fs=require('fs');

console.log("hi i am  first para !"); //1 This will execute  

setTimeout(() => {
    console.log("hi i am inside setTimeout !");
},'w');//3 this will execute after 3 second 

// if second para is not a number ,it execute just  after execute all file   

console.log("hi i am second para !"); //2 this will execute  

//when javascript interpreter meet time taking function or block 
//javascript does not block execution  
//keep running paragraph 

// fs.readFile('ADVANCE JAVASCRIPT/file.txt',"utf-8",(err,data)=>{
//     console.log(err,data);
// })// this is time taking function or asyn in nature 


// let data=fs.readFileSync('ADVANCE JAVASCRIPT/file.txt','utf-8'); 
 

// this is bad practice this will block the code 
// this is sync reading file it will blck the execution of the code

// call back is its solution ,But hard to understand 

// we cant use callback and synchronmours method 
// we have another method names as promises 

// console.log(data);



console.log("before asyn a wait ")
const fsp=require('fs/promises');
const readFile= async ()=>{

    let data=fsp.readFile('ADVANCE JAVASCRIPT/file.txt','utf-8'); // it return promise 
    // when resolve it return data 
    console.log(data);
     
    data.then(data=>{console.log(data);})

    let data1=fsp.readFile('ADVANCE JAVASCRIPT/file.txt','utf-8'); // it return promise 
    
    let readData= await data1; // it is like synchronomours javascript 

    console.log(readData+"read by await !");
    return data;
}


// readFile().then(data=>{console.log(data)});
// connsole.log(returData)

// setTimeout(()=>{console.log(data);
// },6) // here i am ding manually 

console.log("i am after reading file ");

