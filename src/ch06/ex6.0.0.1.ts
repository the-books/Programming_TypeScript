/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type SuperType = {
  id: number | string;
};
type SubType = {
  id: string;
};

// SubType <: SuperType
let sup: SuperType = {
  id: "123",
};
let sub: SubType = {
  id: "444",
};

sup = sub;
// Error
// sub = sup;

export {};
