/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let a = 1234n;
const b = 5678n;
var c = a + b;
let d = a < 1235;
let e = 88.5n; // ts(1353)
let f: bigint = 100n;
let g: 100n = 100n;
let h: bigint = 100; // ts(2322)

export {};
