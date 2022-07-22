/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type A = readonly string[];
type B = ReadonlyArray<string>;
type C = Readonly<string[]>
type D = Readonly<Array<string>>

type E = readonly [number, string];
type F = Readonly<[number, string]>;

export {};
