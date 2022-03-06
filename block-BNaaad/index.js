console.log('Welcome to Node.js');

function square(n) {
  return n * n;
}

console.log(`The square of 5  ${square(5)}`);

let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum += i;
}

console.log(`The Sum of loop 10 is ${sum}`);
