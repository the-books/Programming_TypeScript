/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type A = {
  a: number;
};
type B = {
  a: number | string;
};
type C = {
  a: number | string | boolean;
};
type D = {
  a: number | string | boolean | undefined;
}
type FnB = (b: B) => void;


let chirp: FnB = (b) => {
  console.log();
};

let a: A = { a: 1 };
let b: B = { a: "A" };
let c: C = { a: true };
let d: D = { a: undefined };

chirp(a);
chirp(b);
chirp(c);
chirp(d);


export {};
