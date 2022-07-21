/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let a = true; // boolean
var b = false; // boolean
const c = true; // true

let d: boolean = true; // boolean
let e: true = true; // true
let f: true = false; // ts(2322)

export {};
