/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

const enum Language {
  English,
  Spanish,
  Russian,
}

let a = Language.English;
let b = Language.Tagalog; // error
let c = Language[0]; // error
let d = Language[6]; // error

export {};
