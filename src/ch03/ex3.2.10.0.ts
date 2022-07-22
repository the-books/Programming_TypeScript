/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let a = [1, 2, 3];
var b = ["a", "b"];
let c: string[] = ["a"];
let d = [1, "a"];
const e = [2, "b"];

let f = ["red"];
f.push("blue");
f.push(true); // ts2345

let g = [];
g.push(1);
g.push("red");

let h: number[] = [];
h.push(1);
h.push("red"); // ts2345

export {};
