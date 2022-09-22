/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type Keys = "A" | "B" | "C";
type Values = 100 | 300 | 500;
let c: Record<Keys, Values> = {
  A: 100,
  B: 300,
  C: 500,
};

type Code = {
  a: number;
  b: number;
}
let pa: Partial<Code> = {
  a: 100,
};

let re: Required<Code> = {
  a: 100,
  b: 300,
};

let rea: Readonly<Code> = {
  a: 100,
  b: 300,
};

let pi: Pick<Code, "b"> = {
  b: 300,
};

export {};
