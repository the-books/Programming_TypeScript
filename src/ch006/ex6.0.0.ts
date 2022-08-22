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

let a: A = 1;
let b: B = true;
let c: C = "Hello";

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
