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

type FnA = () => A;
type FnB = () => B;
type FnC = () => C;

let fnA: FnA = () => 1;
let fnB: FnB = () => true;
let fnC: FnC = () => "Hello"

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
