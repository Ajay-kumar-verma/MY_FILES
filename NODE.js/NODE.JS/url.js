// import url from 'url';  // only we can import we have provided type :"module"


// URL module for url handling 
// This proces is knokn as url creation 
const myURL = new URL('https://example.org:12345');

// URL is used for url  object creation 
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL)
console.log(myURL.href)

