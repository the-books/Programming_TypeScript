/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let a = Symbol("a");
let b: symbol = Symbol("b");
var c = a === b;
let d = a + "x"; // ts(2649)

const e = Symbol("e");
const f: unique symbol = Symbol("f");
let g: unique symbol = Symbol("g"); // ts(1332)

let h = e === e;
let i = e === f; // ts(2367)

export {};
