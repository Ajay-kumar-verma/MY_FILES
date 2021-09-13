const arr=[3,4,5,16,34,23]
// Filter method 
const nwarr=arr.filter(age=>age>=18)// it will check each element and return only satisfying data
//Here each elemenet is passing as age and if true it will return that element or else not 
console.log(nwarr)


// map method  // it return manipulated data
const map_arr=arr.map(a=>a*a)// it will check each element and return manipulated data satisfying data
console.log(map_arr)

const  number =[1,2,3,4,5];
const sum= number.reduce((a,b)=>a+""+b);

console.log(sum);
