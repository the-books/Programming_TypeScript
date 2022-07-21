/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let a = "hello";
var b = "billy";
const c = "!";
let d = a + " " + b + c;
let e: string = "zoom";
let f: "john" = "john";
let g: "john" = "zoe"; // ts(2322)

export {};
