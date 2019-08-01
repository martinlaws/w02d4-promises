

const sum = function(x, y) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const total = x + y;
      if (x <= 0 || y <= 0) {
        reject("No dice!");
      } else {
        resolve(total);
      }
    }, 100);
  });
}

const p = sum(5, 5);
console.log(p);

p.then(val => console.log(val));

