const  express = require('express'); // requirin or importorting express js
const  app = express();  // This will return object to be used 


app.listen(80,()=>{console.log('Server is running at port '+80+' and localhost .')});
// second para may hostname which is optional
// This responds with "Hello World" on the homepage
app.get('/', (req, res)=>{
    console.log("Got a GET request for the homepage");
    // console.log(req);
    res.send('Hello GET');
 })

 


 // This responds a POST request for the homepage
 app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
 })
 


 // This responds a DELETE request for the /del_user page.
 app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
 })
 


 // This responds a GET request for the /list_user page.
 app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
 })
 


 // This responds a GET request for abcd, abxcd, ab123cd, and so on
 app.get('/ab*cd', function(req, res) {   
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
 })
 
// This responds a GET request for any other address
app.get('/*', function(req, res) {   
   console.log("Got a GET request ,which is Invalid Address !");
   res.send('Invalid link !');
})



// app.listen(80,()=>{console.log('Server is running at port '+80+' and localhost .')});
// // second para may hostname which is optional

//  app.on('listening',()=>console.log('server is running !'));
 
