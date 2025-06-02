// const fs = require('fs');
// const math = require('./math');

// fs.writeFile('./test.txt', 'Hello World', () => {});
// console.log(math());

// // console.log({__filename, __dirname});


// function __require(id){
//     //... agar id . se shuru hua to user ki dir mai code ko dhundo
//     //... khud ke internal module mai dhundo
//     // ... Agr toh mill gya toh well and good 
//     // ... nhi toh node_modules mei dhundo
//     // ... user ko error thorw karo

// }

// const http = require('http');


const express = require('express');

const app = express();

app.use((req, res, next) => {
    next();
});

app.get('/', (req, res) => res.end('HomePage'));
app.get('/contact-us', (req, res) => res.end('Contact Us Page'));
app.get('/about-us', (req, res) => res.end('About Us Page'));


app.listen(8000, function () {
    console.log(`Server Started`);
});