/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function buildArray() {
  let a = [];
  a.push(1);
  a.push("x");
  return a;
}

let myArray = buildArray();
myArray.push(true); // ts2345

export {};
