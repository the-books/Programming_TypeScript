/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let a: {
  b: number;
  c?: string;
  [key: number]: boolean;
};

a = {b: 1};
a = {b: 1, c: undefined};
a = {b: 1, c: "d"};
a = {b: 1, 10: true};
a = {b: 1, 10: true, 20: false};
a = {10: true}; //
a = {b: 1, 33: "red"}; //

export {};
