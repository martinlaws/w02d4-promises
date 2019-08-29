// Write a function sum which takes in two numbers and adds them, but simulate a delay.
// It's async behaviour should be promise-based instead of using callbacks directly.

const sum = function(x, y) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x < 0 || y < 0) { 
        // fail with error!
        reject("No thanks");
      } else {
        // success!
        const result = x + y;
        resolve(result);
      }
    }, 1000);
  });
};

const p = sum(5, 2);

p
  .then((result) => {
    console.log('I have the result! ', result);
  });

const p2 = sum(5, -1);

p2
  .then((result) => {
    console.log('I have the result! ', result);
  })
  .catch(err => {
    console.log('Could not sum: ', err);
  });
  
