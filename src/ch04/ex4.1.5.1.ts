/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function* createNumbers(): Generator<number> {
  let n = 0;
  while (1) {
    yield n++;
  }
}

let numbers = createNumbers();
let r = numbers.next();
console.log(r);
r = numbers.next();
console.log(r);
r = numbers.next();
console.log(r);
r = numbers.next();
console.log(r);
r = numbers.next();
console.log(r);

export {};
