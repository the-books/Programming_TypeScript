/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// A <: B <: C <: D
type A = {
  a: number;
  b: number;
  c: number;
  d: number;
};
type B = {
  a?: number;
  b: number;
  c: number;
  d: number;
};
type C = {
  a?: number;
  b?: number;
  c: number;
  d: number;
};
type D = {
  a?: number;
  b?: number;
  c?: number;
  d: number;
};

let a: A = { a: 1, b: 2, c: 3, d: 4 };
let b: B = { b: 1, c: 2, d: 3 };
let c: C = { c: 1, d: 2 };
let d: D = { d: 1 };

let x: A = a;
x = b;
x = c;
x = d;

let y: B = a;
y = b;
y = c;
y = d;

let z: C = a;
z = b;
z = c;
z = d;

let w: D = a;
w = b;
w = c;
w = d;

export {};
