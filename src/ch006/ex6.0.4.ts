/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// A <: B <: C
type A = number;
type B = number | boolean;
type C = number | boolean | string;

type FnA = (a: A) => A;
type FnB = (b: B) => B;
type FnC = (c: C) => C;

let fnA: FnA = (a: A) => 1;
let fnB: FnB = (b: B) => true;
let fnC: FnC = (c: C) => "Hello"

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
