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

// FnC <: FnB <: FnA
type FnA = (a: A) => void;
type FnB = (b: B) => void;
type FnC = (c: C) => void;

let fnA: FnA = (a: A) => undefined;
let fnB: FnB = (b: B) => undefined;
let fnC: FnC = (c: C) => undefined;

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
