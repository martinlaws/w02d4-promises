const fs = require('fs').promises;

const p = fs.readFile('data/p1.txt', 'utf8');

// console.log(p);
let finalDoc = [];

p
  .then((data) => { // success callback
    // console.log(data);
    finalDoc.push(data);
    // return 'KV' // value
    return fs.readFile('data/p2.txt', 'utf8'); // => return Promise { <pending> }
  })
  .then((data) => {
    // console.log(data);
    finalDoc.push(data);
    return fs.readFile('data/p3fsadfsdafa.txt', 'utf8'); // => return 
  })
  .then((data) => {
    // console.log(data);
    finalDoc.push(data);
    return fs.readFile('data/p4.txt', 'utf8'); // => return 
  })
  .then((data) => {
    // console.log(data);
    finalDoc.push(data);
    console.log(finalDoc);
  })
  .catch((err) => {
    console.log('Could not successfully read all 4 files');
    console.log(err);
    console.log(finalDoc);
  });

console.log('AFTER PROMISE');

// Promises have .then
// The .then function returns a promise
// The return value of the prev .then is the argument into the callback for that new promise
// For the same promise, calling .then multiple times with diff callbacks, will trigger those callbacks in order with the same argument/data