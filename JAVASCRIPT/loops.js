var x=6;
// Entry level checking 
// its execution depends on condition 
console.log("While loop")
while(x<5){
    console.log(x)
    x++
}

console.log("\n")
console.log("\n")
console.log("\n")

// Exits levels checking 
// its executes atleast onces 
console.log("Do While loop")
x=6;
do{
    console.log(x)
    x++
}while(x<5)

console.log("\n")
// It is purely loop
let array=[1,2,3,4,5,6];
console.log("Traditional iterating ")
for (let i = 0; i < array.length; i++) {
console.log(array[i]);
}
console.log("\n");
// it is used for iterating an array

console.log("For of for Array Iteration ")
for(let ele of array) {
    console.log(ele);
}

// String is array of character 
// so it is iteraable using foOf loop 
let str="ajay"
for(let ele of str) {
    console.log(ele)
}






// For each loop 
console.log(`// array.forEach `)
array.forEach(ele=>{console.log(ele)});


console.log("Objects iteration using for of loop")
let obj={fname:"Ajay",lname:"kumar",mob:"997354"}
// Here key will return key of elements 
for (let key in obj) {
console.log(obj[key]); // here we getting key values 
// here key is a string so we are using [] 
}
console.log(obj.fname,obj["fname"]);


// loop using for OF 

for (let [key ,value] of obj) {
    
console.log(key,value);

}




