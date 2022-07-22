/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */


function add(a: number, b: number) {
  return a + b;
}

function greet(name: string) {
  return "hello " + name;
}

add(1, 2);
greet("Crystal");

add(1); // error
add(1, "a"); // error

export {};
