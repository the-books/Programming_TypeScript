/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type Filter<T> = (array: T[], f: (item: T) => boolean) => T[];

let filter: Filter<string> = (array, f) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (f(item)) {
      result.push(item);
    }
  }
  return result;
}

// filter([1, 2, 3, 5, 5], _ => _ > 2);

filter(["a", "b", "c", "d"], _ => _ !== "b");

export {};
