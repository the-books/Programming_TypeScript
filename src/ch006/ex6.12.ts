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

export {};
