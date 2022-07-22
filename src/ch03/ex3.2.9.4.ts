/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function trueOrNull(isTrue: boolean) {
  if (isTrue) {
    return "true";
  }
  return null;
}

function stringOrNumber(a: string, b: number) {
  return a || b;
}

export {};
