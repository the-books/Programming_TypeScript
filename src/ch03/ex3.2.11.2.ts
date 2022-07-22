/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let as: readonly number[] = [1, 2, 3];
let bs: readonly number[] = as.concat(4);
let thtee = bs[2];

as[4] = 5; // ts2542
as.push(6); //ts2339

export {};
