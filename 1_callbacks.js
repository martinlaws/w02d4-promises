const fs = require('fs');

let finalDoc = [];

let counter = 0;

fs.readFile('data/p1.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err.message);
    return
  }
  finalDoc.push(data);

  counter++;
  if (counter === 2) {
    console.log('GOT IT ALL!', finalDoc);
  }
});

fs.readFile('data/p2.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err.message);
    return
  }
  finalDoc.push(data);
  counter++;

  if (counter === 2) {
    console.log('GOT IT ALL!', finalDoc);
  }
});

// Dangerous hackery.
// setTimeout(() => {
//   console.log('finalDoc after timeout:', finalDoc); // => ???
// }, 4);

console.log(finalDoc); // => []
console.log('END OF FILE (LAST LINE OF CODE)');