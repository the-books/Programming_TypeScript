/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// 1
function greet1(name: string) {
  return "hello " + name;
}

// 2
let greet2 = function (name: string) {
  return "hello " + name;
}

// 3
let greet3 = (name: string) => {
  return "hello " + name;
}

// 4
let greet4 = (name: string) => "hello " + name;

// 5
let greet5 = new Function("name", "return 'hello' + name");

export {};
