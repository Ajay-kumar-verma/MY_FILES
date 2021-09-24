const https = require('https');

https.get('https://jsonplaceholder.typicode.com/users', res => {
  let data = [];
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);

  res.on('data', chunk => {
    data.push(chunk);
  });

  res.on('end', () => {
    console.log('Response ended: ');
    const users = JSON.parse(Buffer.concat(data).toString());

    for(user of users) {
      console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    }
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});












// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(res => {
//     const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//     console.log('Status Code:', res.status);
//     console.log('Date in Response header:', headerDate);

//     const users = res.data;

//     for(user of users) {
//       console.log(`Got user with id: ${user.id}, name: ${user.name}`);
//     }
//   })
//   .catch(err => {
//     console.log('Error: ', err.message);
//   });










// const got = require('got');

// got.get('https://jsonplaceholder.typicode.com/users', {responseType: 'json'})
//   .then(res => {
//     const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//     console.log('Status Code:', res.statusCode);
//     console.log('Date in Response header:', headerDate);

//     const users = res.body;
//     for(user of users) {
//       console.log(`Got user with id: ${user.id}, name: ${user.name}`);
//     }
//   })
//   .catch(err => {
//     console.log('Error: ', err.message);
//   });








// const superagent = require('superagent');

// (async () => {
//   try {
//     const res = await superagent.get('https://jsonplaceholder.typicode.com/users');
//     const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//     console.log('Status Code:', res.statusCode);
//     console.log('Date in Response header:', headerDate);

//     const users = res.body;
//     for(user of users) {
//       console.log(`Got user with id: ${user.id}, name: ${user.name}`);
//     }
//   } catch (err) {
//     console.log(err.message); //can be console.error
//   }
// })();





