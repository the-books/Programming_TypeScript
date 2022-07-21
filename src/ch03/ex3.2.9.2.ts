/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type Color = "red";

let x = Math.random() < .5;

if (x) {
  type Color = "blue";
  let b: Color = "blue";
} else {
  let c: Color = "red";
}

export {};
