const path = require("path");

//basename 

console.log(path.basename("/test/something"));//something
console.log(path.basename("/test/something.opr"));//something.opr
console.log(path.basename("/test/something.fgr","g.fgr"));//somethin
//first parameter for dir and second para is for last removal part


//dirname
console.log(path.dirname("/test/something/file.txt"));//something
 
//extname
console.log(path.extname("/test/something/file.txt"));//txt

//format

console.log(path.format({dir:"\test\something",base:"file.txt"}));//something

//isAbsolute
console.log(path.isAbsolute("public/index.html"));//false
console.log(path.isAbsolute("/public/index.html"));//true

//join
console.log(path.join('/','users','ajay','file.txt'));//users\ajay\file.txt

//normalize

//parse ""opposite of format

console.log(path.parse("/test/something/file.txt"));
//It split a url or dir

//resolve

console.log(path.resolve());
//absolute path till current dir

console.log(__dirname); 
//absolute path till current dir

console.log(path.resolve("index.hl"));
//index.hl file in current dir

console.log(path.resolve("public","index.html"));
// index.html in public of current dir
console.log(path.resolve("/public","index.html"));






console.log(__dirname);
const dir1=__dirname;
//it return absolute path pf current working directory

const dir2=path.resolve(dir1,"..");// one level up

console.log(path.resolve(dir2,".."));// two level up
