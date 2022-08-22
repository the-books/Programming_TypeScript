/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// 가변성
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

let a: A = { id: 1 };
let b: B = { id: true };
let c: C = { id: "Hello" };

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
