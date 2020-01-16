const fs = require('fs').promises;

const readFourAgileFiles = (done) => {
  const finalDoc = [];

  fs.readFile('data/p1.txt', 'utf8')
    .then(data1 => {
      console.log('data1 is', data1);
      finalDoc.push(data1);
      return fs.readFile('data/p2.txt', 'utf8')
    })
    .then(data2 => {
      console.log('data2 is', data2);
      finalDoc.push(data2);
      return fs.readFile('data/p3.txt', 'utf8')
    })
    .then(data3 => {
      console.log('data3 is', data3);
      finalDoc.push(data3);
      return fs.readFile('data/p4.txt', 'utf8')
    })
    .then(data4 => {
      console.log('data4 is', data4);
      finalDoc.push(data4);
      
      return finalDoc;
    })
}

readFourAgileFiles();
