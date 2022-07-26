/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type Filter = {
  // (array: unknown[], f: unknown): unknown[];
  // (array: number[], f: (item: number) => boolean): number[];
  // (array: string[], f: (item: string) => boolean): string[];
  // (array: object[], f: (item: object) => boolean): object[];
  <T>(array: T[], f: (item: T) => boolean): T[];
};

let filter: Filter = (array, f) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (f(item)) {
      result.push(item);
    }
  }
  return result;
};

filter([1, 2, 3, 5, 5], _ => _ > 2);

filter(["a", "b", "c", "d"], _ => _ !== "b");

let names = [
  { firstName: "Beth" },
  { firstName: "John" },
  { firstName: "Sue" },
];
filter(names, _ => _.firstName.startsWith("B"));

export {};
