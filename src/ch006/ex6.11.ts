/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// D <: C <: B <: A
type A = {
  a: number;
};
type B = {
  a: number;
  b: number;
};
type C = {
  a: number;
  b: number;
  c: number;
};
type D = {
  a: number;
  b: number;
  c: number;
  d: number;
};

// FnA <: FnB <: FnC <: FnD
type FnA = () => A;
type FnB = () => B;
type FnC = () => C;
type FnD = () => D;

let fnA: FnA = () => ({ a: 1 });
let fnB: FnB = () => ({ a: 1, b: 1 });
let fnC: FnC = () => ({ a: 1, b: 1, c: 1 });
let fnD: FnD = () => ({ a: 1, b: 1, c: 1, d: 1 });

let x: FnA = fnA;
x = fnB;
x = fnC;
x = fnD;

let y: FnB = fnA;
y = fnB;
y = fnC;
y = fnD;

let z: FnC = fnA;
z = fnB;
z = fnC;
z = fnD;

let w: FnD = fnA;
w = fnB;
w = fnC;
w = fnD;



export {};
