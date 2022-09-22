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

type FnccA = (p: A) => A;
type FnccB = (p: B) => B;

type FncAB = (p: A) => B;
type FncBA = (p: B) => A;

export {};
