const express = require('express');
const cors = require('cors');
const soc
const app = express();
app.use(cors(
    {
        origin: 'http://localhost:60794',
        optionsSuccessStatus: 200   //For legacy browser support
    }    ))


    


app.get('/', (req, res) => {
    res.json({
        message: 'Helrld'
    });
    console.log("local port is :",  req.socket.localPort);
    console.log("Remote port is :", req.socket.remotePort,"\n",req.origin,"\n");
});

app.get('/:name', (req, res) => {
    let name = req.params.name;

    res.json({
        message: `Hello ${name}`
    });
});

app.listen(2020, () => {
    console.log('server is listening on port 2020');
});