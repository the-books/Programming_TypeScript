/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let fibonacciGenerator = createFibonacciGenerator(); //

let r = fibonacciGenerator.next();
console.log(r);
r = fibonacciGenerator.next();
console.log(r);
r = fibonacciGenerator.next();
console.log(r);
r = fibonacciGenerator.next();
console.log(r);
r = fibonacciGenerator.next();
console.log(r);
r = fibonacciGenerator.next();
console.log(r);
r = fibonacciGenerator.next();
console.log(r);

export {};
