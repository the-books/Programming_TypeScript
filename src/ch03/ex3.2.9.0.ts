/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type Age = number;
type Person = {
  name: string;
  age: Age;
};

let age: Age = 55;
let driver: Person = {
  name: "James May",
  age: age,
};

export {};
