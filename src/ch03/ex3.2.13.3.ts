/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

enum Color {
  Red = "#c10000",
  Blue = "#007ac1",
  Pink = 0xc10050,
  White = 255,
}

let red = Color.Red;
let pink = Color.Pink;

let a = Color.Red;
let b = Color.Green; // ts2339
let c = Color[255];
let d = Color[6]; // !!!

export {};
