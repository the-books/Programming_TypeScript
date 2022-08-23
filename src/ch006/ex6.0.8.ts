/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// A <: B <: C
type A = {
  id: number;
};
type B = {
  id: number | boolean;
};
type C = {
  id: number | boolean | string;
};

type FnA = (c: C) => A;
type FnB = (b: B) => B;
type FnC = (a: A) => C;

let fnA: FnA = (c: C) => ({ id: 1 });
let fnB: FnB = (b: B) => ({ id: true });
let fnC: FnC = (a: A) => ({ id: "Hello" });

let x: FnA = fnA;
x = fnB;
x = fnC;

let y: FnB = fnA;
y = fnB;
y = fnC;

let z: FnC = fnA;
z = fnB;
z = fnC;

export {};
