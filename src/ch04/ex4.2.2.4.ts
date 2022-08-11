/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */


// (array: unknown[], f: (item: unknown) => unknown): unknown[]
type Map = <T, U>(array: T[], f: (item: T) => U) => U[];

let map: Map = (array, f) => {
  let result = [];

  for (let i = 1; i < array.length; i++) {
    result[i] = f(array[i]);
  }

  return result;
}

map([1, 2, 3, 4, 5], _ => _ * 2);
map([1, 2, 3, 4, 5], _ => _ > 2);
map([1, 2, 3, 4, 5], _ => `${_}`);

export {};
