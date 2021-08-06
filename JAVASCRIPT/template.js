// Here can include variable to string 
// No need to use "+" 
const nme="Ajay kumar verma";
const mob=9973541431;

console.log(`My name is ${nme} and mobile number is ${mob}`);

// String method 
// startsWith //it i used for checkung starting string 
console.log(`${nme}`.startsWith("A"));
// it will match will last String 
console.log(`${nme}`.endsWith("kumar"));
//It will check whether its includes are not 
console.log(`${nme}`.includes("AJAY")); // it is case sensitive 
// Reapeats is used for repeating it 
console.log(`${nme}`.repeat(2));


//SWapping numbers 
let a=10;
let  b= 5;

[a,b]=[b,a];  //Array destructuring 
console.log(`a is :${a} and b is :${b}`);

// Passing n parameter
// here we can pass n parameter  to this function 
const sum = (...inputs)=>{
    //  All input store in inputs array 
 console.log(inputs[1],7); // It is like python 

var sum=inputs.reduce((a,b)=>a+b);
// No need to iterate and sum this above function is enough to do 
console.log(sum);

}
 sum(1,2,3,4,5,);