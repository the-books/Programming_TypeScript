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


type FnA = (b: B) => A;
type FnB = (a: A) => B;

let a: FnB = (b: B) => {
  return { id: false };
};

export {};
