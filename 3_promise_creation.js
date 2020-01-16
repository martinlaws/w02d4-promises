const addNumbers = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject(new Error('Those aren\'t numbers you goof'))
      }

      resolve(a + b);
    }, 1000)
  })
}

const validInput = addNumbers(1, 2);
const invalidInput = addNumbers(1, 'b');

console.log(validInput)

invalidInput
  .then(data => console.log(data))
  .catch(err => console.log('There was a problem!! ', err.message))