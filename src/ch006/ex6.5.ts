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
  a: number;
  b: number;
  c: number;
};
type C = {
  a: number;
  b: number;
};
type D = {
  a: number;
};
type FnB = (b: B) => void;


let chirp: FnB = (b) => {
  console.log();
};

let a: A = { a: 1, b: 2, c: 3, d: 4 };
let b: B = { a: 1, b: 2, c: 3 };
let c: C = { a: 1, b: 2 };
let d: D = { a: 1 };

chirp(a);
chirp(b);
chirp(c);
chirp(d);


export {};
