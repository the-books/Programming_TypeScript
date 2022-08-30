/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type A = number;
type B = number | string;
type C = number | string | boolean;
type D = number | string | boolean | undefined;

type FnB = (b: B) => void;


let chirp: FnB = (b) => {
  console.log();
};

let a: A = 10;
let b: B = "Hi";
let c: C = false;
let d: D = undefined;

chirp(a);
chirp(b);
chirp(c);
chirp(d);


export {};
