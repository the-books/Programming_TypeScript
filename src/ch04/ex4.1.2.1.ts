/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function sumVariadic(): number {
  return Array.from(arguments).reduce((total, n) => total + n, 0);
}

sumVariadic(1, 2, 3); // error

export {};
