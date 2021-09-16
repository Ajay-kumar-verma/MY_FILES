const http=require('http');

    http.get('http:/localhost:2020/',res=>{
      res.on('data', chunk => {
          console.log("data fetched ");
          console.log(chunk.toString());
      });
          
    })