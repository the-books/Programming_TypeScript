/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// A <: B <: C
type A = {
  a: number;
  b: number;
  c: number;
};
type B = {
  b: number;
  c: number;
};
type C = {
  c: number;
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
