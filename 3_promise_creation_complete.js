// Write a function sum which takes in 2 numbers and adds them, but simulate a delay.
// It's async behaviour should be promise-based instead of using callbacks directly.

const addNumbers = function(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        // if (typeof a !== 'number' || typeof b !== 'number') {
        //     reject(new Error("Your numbers are no good"));
        // }

        resolve(a + b);
      }, 100); 
    });
  }
  
  const validResult = addNumbers(1, 2);
//   const invalidResult = addNumbers(1, 'b');
  
  console.log(validResult);
  
//   invalidResult
  validResult
    .then((sum) => {
      console.log('final value is: ', sum);
    })
    .catch((err) => {
      console.log(err);
    });