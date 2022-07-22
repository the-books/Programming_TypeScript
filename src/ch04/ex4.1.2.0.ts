/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

sum([1, 2, 3]);

export {};
