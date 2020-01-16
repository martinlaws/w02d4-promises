const fs = require('fs');

const finalDoc = [];

const done = finalResults => {
  console.log('All done!')
  console.log(finalResults)
}

fs.readFile('data/p1.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log('FAILED ON FILE 1')
  }

  console.log('SUCCESS!!!!', data);
  finalDoc.push(data);

  // start file 2
  fs.readFile('data/p2.txt', 'utf8', (err, data) => {
    if (err) {
      return console.log('FAILED ON FILE 2')
    }
  
    console.log('SUCCESS!!!!', data);
    finalDoc.push(data);

    // start file 3
    fs.readFile('data/p3.txt', 'utf8', (err, data) => {
      if (err) {
        return console.log('FAILED ON FILE 3')
      }
    
      console.log('SUCCESS!!!!', data);
      finalDoc.push(data);

      // start file 4
      fs.readFile('data/p4.txt', 'utf8', (err, data) => {
        if (err) {
          return console.log('FAILED ON FILE 4')
        }
      
        console.log('SUCCESS!!!!', data);
        finalDoc.push(data);
        done(finalDoc)
      })
    })
  })
})