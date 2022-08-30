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
  b: number;
  c: number;
  d: number;
};
type C = {
  c: number;
  d: number;
};
type D = {
  d: number;
};
// FnA <: FnB <: FnC <: FnD
type FnA = (a: A) => void;
type FnB = (b: B) => void;
type FnC = (c: C) => void;
type FnD = (d: D) => void;

let fnA: FnA = (a) => undefined;
let fnB: FnB = (b) => undefined;
let fnC: FnC = (c) => undefined;
let fnD: FnD = (d) => undefined;

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
