/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// FnA <: FnB <: FnC <: FnD
type FnA = () => number;
type FnB = () => number | string;
type FnC = () => number | string | boolean;
type FnD = () => number | string | boolean | undefined;

let fnA: FnA = () => 1;
let fnB: FnB = () => "A";
let fnC: FnC = () => true;
let fnD: FnD = () => undefined;

let x: FnA = fnA;
x = fnB;
x = fnC;
x = fnD;

let y: FnB = fnA;
y = fnB;
y = fnC;
y = fnD;

let z: FnC = fnA;
z = fnB;
z = fnC;
z = fnD;

let w: FnD = fnA;
w = fnB;
w = fnC;
w = fnD;



export {};
