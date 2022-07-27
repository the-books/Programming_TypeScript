/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type SuperTypeS = number | string | undefined;
type SuperTypeA = number | undefined;
type SuperTypeB = number | string;
type SubType = number;

let superS: SuperTypeS = 111;
let superA: SuperTypeA = 222;
let superB: SuperTypeB = "333";
let sub: SubType = 444;

// SubType <: SuperTypeA
// SubType <: SuperTypeB
// superA = sub;
// superB = sub;

// SuperTypeA <: SuperTypeS
// SuperTypeB <: SuperTypeS
// superS = superA;
// superS = superB;

// SubType <: SuperTypeS
// superS = sub;

superA = superS;
superB = superS;


export {};
