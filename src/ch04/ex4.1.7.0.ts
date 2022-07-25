/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function sum(a: number, b: number): number {
  return a + b;
}

type Sum = (a: number, b: number) => number;

type Greet = (name: string) => string;

type Log = (message: string, userId?: string) => void;

type SumVariadicSafe = (...numbers: number[]) => number;

let log: Log = (message, userId = 'Not signed in') => {
  let time = new Date().toISOString();
  console.log(time, message, userId);
};

export {};
