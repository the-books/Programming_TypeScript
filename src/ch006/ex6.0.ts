/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// C <: B <: A
type C = number;
type B = number | boolean;
type A = number | boolean | string;

let c: C = 1;
let b: B = true;
let a: A = "Hello";

let z: C = c;
z = b;
z = a;

let y: B = c;
y = b;
y = a;

let x: A = c;
x = b;
x = a;






export {};
