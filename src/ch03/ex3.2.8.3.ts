/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let a: {b: number};

a = {}; // ts(2741)

a = {
  b: 1,
  c: 2, // ts(2322)
};

export {};
