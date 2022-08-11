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

map<string, boolean>(["a", "b", "c", "d", "e"], _ => _ === "b");

// Error
// map<string>(["a", "b", "c", "d", "e"], _ => _ === "b");

map<string, boolean | string>(["a", "b", "c", "d", "e"], _ => _ === "b");

// Error
// map<string, number>(["a", "b", "c", "d", "e"], _ => _ === "b");

export {};
