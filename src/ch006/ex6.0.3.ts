/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// A <: B <: C
type C = {
  c: number;
};
type B = C & {
  b: number;
};
type A = B & {
  a: number;
};


let a: A = { c: 1, b: 2, a: 3 };
let b: B = { c: 1, b: 2 };
let c: C = { c: 1 };

let x: A = a;
x = b;
x = c;

let y: B = a;
y = b;
y = c;

let z: C = a;
z = b;
z = c;

export {};
