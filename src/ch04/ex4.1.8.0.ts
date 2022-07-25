/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function times(
  f: (index: number) => void,
  n: number,
) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}

times(n => console.log(n), 4);

function f(n) {
  console.log(n);
}

times(f, 4);

export {};
