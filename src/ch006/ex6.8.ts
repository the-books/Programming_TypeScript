/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// FnA <: FnB <: FnC <: FnD
type FnA = (a: {id: number | string | boolean | undefined}) => void;
type FnB = (b: {id: number | string | boolean}) => void;
type FnC = (c: {id: number | string}) => void;
type FnD = (d: {id: number}) => void;

let fnA: FnA = (a) => undefined;
let fnB: FnB = (b) => undefined;
let fnC: FnC = (c) => undefined;
let fnD: FnD = (d) => undefined;

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
