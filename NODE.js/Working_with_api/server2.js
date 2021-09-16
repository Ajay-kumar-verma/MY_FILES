var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

app.get('/home', function (req, res) {
    res.send('This is home page !');
});




// it is when one path different method 
app.route('/article')
.get(function(req, res){
    res.send('Get the article');
})
.post(function(req, res) {
    res.send('Add an article');
})
.put(function(req, res) {
    res.send('Update the article');
});


// 
app.get('/the*man', function(req, res) {
    res.send('the*man');
});

app.get(/bat/, function(req, res) {
    res.send('/bat/  This is bat file ');
});

app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});


app.listen("4000",()=>{
    console.log("Server is running at port 4000 !");
})

