// Let's solve it again using promises!

const fs = require('fs').promises;

const finalDoc = [];
const p1 = fs.readFile('data/p1.txt', 'utf8');

// console.log('promise: ', p1);
let p3;

p1
  .then((data) => {
    // console.log('promise: ', p1);
    // console.log('data p1: ', data);
    finalDoc.push(data);

    return fs.readFile('data/p2.txt', 'utf8');
  })
  .then((data) => { // <= resolution of p2
    finalDoc.push(data);
    p3 = fs.readFile('data/p3.txt', 'utf8'); // returns a new promise (p3)
    return p3;
  })
  .then((data) => { // <= resolution of p3
    finalDoc.push(data);
    return fs.readFile('data/p4.txt', 'utf8'); // returns a new promise (p4)
  }) 
  .then((data) => { // <= resolution of p4
    finalDoc.push(data); 
    console.log(finalDoc);
  })
  .catch((err) => {
    console.log(p3);
    console.log('Something went wrong!', err);
  });