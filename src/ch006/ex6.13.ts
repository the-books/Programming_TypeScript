/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// number <: number | string
// () => number <: () => number| string
// (p: number | string) => void <: (p: number) => void
// (p: number) => void >: (p: number | string) => void

// {a: number} <: {a: number | string}
// () => {a: number} <: () => {a: number | string}
// (p: {a: number | string}) => void <: (p: {a: number}) => void
// (p: {a: number}) => void >: (p: {a: number | string}) => void

// {a: number; b: number} <: {a: number}
// () => {a: number; b: number} <: () => {a: number}
// (p: {a: number}) => void <: (p: {a: number; b: number}) => void
// (p: {a: number; b: number}) => void >: (p: {a: number}) => void

// A <: B
type A = number;
type B = number | string;

// FnA <: FnB
type FnA = () => A;
type FnB = () => B;

// FncA >: FncB
type FncA = (p: A) => void;
type FncB = (p: B) => void;

// OA <: OB
type OA = { a: number };
type OB = { a: number | string };

// FnOA <: FnOB
type FnOA = () => OA;
type FnOB = () => OB;

// FncOA >: FncOB
type FncOA = (p: OA) => void;
type FncOB = (p: OB) => void;

// OOA <: OOB
type OOA = { a: number; b: number; };
type OOB = { a: number; };

// FnOOA <: FnOOB
type FnOOA = () => OOA;
type FnOOB = () => OOB;

// FncOOA >: FncOOB
type FncOOA = (p: OOA) => void;
type FncOOB = (p: OOB) => void;

export {};
