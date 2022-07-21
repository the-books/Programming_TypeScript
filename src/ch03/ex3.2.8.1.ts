/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let a = {
  b: "x",
}; // {b: string;}

a.b; // string

let b = {
  c: {
    d: "f",
  },
}; // {c: {d: string;}}

let c: { b: number } = {
  b: 12,
};

export {};
