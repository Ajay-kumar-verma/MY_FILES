let a= 23;
let b=a; // Here value is assign 
a=345;
console.log("a==",a, "b==",b)

let ar=[2,4,6,8,10] //Here address is assigning 

let nwar=ar;
ar.splice(1,2,34,67);

console.log("ar=",ar,"nwar=",nwar);



let sndar=[...ar];// This is for copying the orginal content
ar.push(34);

console.log(sndar,ar)


// array behave like pointer


let obj={
    name:"Rajiv"
}


let nwobj=obj;
let scobj={...obj};
obj.mob=9880;
obj.name="AJAY KUMAR VERMA";
console.log(obj,nwobj,scobj);





