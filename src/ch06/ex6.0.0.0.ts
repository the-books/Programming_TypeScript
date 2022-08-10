/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type SuperType = number | undefined;
type SubType = number;

// SubTcype <: SuperType
let sup: SuperType = undefined;
let sub: SubType = 222;

sup = sub;

function dd(s: SuperType) {
  console.log(typeof s);
}

dd(sup);
dd(sub);
dd(33);
dd(undefined);
// Error
// dd("none");

export {};
