const fs = require('fs');

let finalDoc = [];

let counter = 0;

fs.readFile('data/p1.txt', 'utf8', (err, p1) => {
  if (err) {
    console.log(err.message);
    return
  }
  finalDoc.push(p1);
  // start reading file 2
  fs.readFile('data/p2.txt', 'utf8', (err, p2) => {
    if (err) {
      console.log(err.message);
      return
    }
    finalDoc.push(p2);
    fs.readFile('data/p3.txt', 'utf8', (err, p3) => {
      if (err) {
        console.log(err.message);
        return
      }
      finalDoc.push(p3);
      fs.readFile('data/p4.txt', 'utf8', (err, p4) => {
        if (err) {
          console.log(err.message);
          return
        }
        finalDoc.push(p4);
        console.log(finalDoc);
      });
    });
  });
});

