/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// number
let a = 1042;

// string
let b = "apple and orange";

// "pineapple"
const c = "pineapple";

// boolean[]
let d = [true, true, false];

// {type: string}
let e = { type: "ficus" };

// (number | boolean)[]
let f = [1, false];

// number[]
const g = [3];

// any
let h = null;

let i: 3 = 3;
i = 4; // error

let j = [1, 2, 3];
j.push(4);
j.push("5"); // error

let k: never = 4; // error

let l: unknown = 4;
let m = l * 2; // error

if (typeof l === "number") {
  let n = l * 2;
}

export {};
