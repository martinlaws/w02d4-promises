// Write a function sum which takes in 2 numbers and adds them, but simulate a delay.
// It's async behaviour should be promise-based instead of using callbacks directly.

const addNumbers = function(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(a + b);
      reject(new Error("KV no good"));
    }, 100); 
  });
}

const r = addNumbers(1, 2);

console.log(r);

r
  .then((sum) => {
    console.log('final value is: ', sum);
  })
  .catch((err) => {
    console.log(err);
  });