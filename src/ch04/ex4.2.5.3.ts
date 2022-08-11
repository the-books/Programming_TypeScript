/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function call<T extends [number, string], U>(
  f: (...args: T) => U,
  ...args: T
): unknown {
  return f(...args);
}

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

call(fill, 10, "a");

// call(fill, 10);

// call(fill, 10, "a", "b");

export {};
