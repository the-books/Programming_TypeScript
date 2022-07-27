/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type SubId = number;
type SuperId = number | undefined;

// SubId <: SuperId
let subId: SubId = 1111;
let superId: SuperId = 2222;

// ? Ok
subId = superId;


subId = 3333;
subId = undefined;

// ? Error
subId = superId;


export {};
