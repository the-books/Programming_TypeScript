/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type SuperSuperType = number | string | boolean;
type SuperType = number | boolean;
type SubType = number;

type SSType = {
  id: number | string | boolean;
};
type SType = {
  id: number | boolean;
};
type BType = {
  id: number;
};

type SS_O_Type = {
  a: number;
};
type S_O_Type = {
  a: number;
  b: number;
};
type B_O_Type = {
  a: number;
  b: number;
  c: number;
};

export {};
