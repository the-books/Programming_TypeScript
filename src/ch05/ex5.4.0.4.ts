/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

interface A {
  good(x: number): string;
  bad(x: number): string;
}

interface B extends A {
  good(x: number | string): string;
  bad(x: string): string;
}

export {};
