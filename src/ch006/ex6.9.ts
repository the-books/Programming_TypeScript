/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// FnA <: FnB <: FnC <: FnD
type FnA = () => {id: number};
type FnB = () => {id: number | string};
type FnC = () => {id: number | string | boolean};
type FnD = () => {id: number | string | boolean | undefined};

let fnA: FnA = () => ({id: 1});
let fnB: FnB = () => ({id: "A"});
let fnC: FnC = () => ({id: true});
let fnD: FnD = () => ({id: undefined});

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
