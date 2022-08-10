/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */


type TypeAA = {
  id?: number | string;
  name: string;
};
type TypeBB = {
  name: string;
};
type TypeCC = {
  id: number | string | undefined;
  name: string;
};

type TypeSS = {
  id: number | string;
  name: string;
};
type TypeEE = {
  id: number | undefined;
  name: string;
};
type TypeHH = {
  id: string | undefined;
  name: string;
};

type TypeDD = {
  id?: number;
  name: string;
};
type TypeFF = {
  id: number;
  name: string;
};
type TypeGG = {
  id?: string;
  name: string;
}

type TypII = {
  id: string;
  name: string;
};

let s: TypeSS = {
  id: "sss",
  name: "Kate",
};
let a: TypeAA = {
  id: "111",
  name: "Lauren",
};
let b: TypeBB = {
  name: "Lee",
};
let c: TypeCC = {
  id: undefined,
  name: "Sam",
};
let d: TypeDD = {
  name: "John",
};
let e: TypeEE = {
  id: undefined,
  name: "Lee",
};
let f: TypeFF = {
  id: 123,
  name: "Paul",
};
let g: TypeGG = {
  id: "444",
  name: "James",
};
let h: TypeHH = {
  id: "555",
  name: "Sue",
};
let i: TypII = {
  id: "666",
  name: "Emily",
};


s = a;
a = s;
s = b;
b = s;
s = c;
c = s;
s = d;
d = s;

a = b;
a = c;
a = d;
a = e;
a = f;
a = g;
a = h;
a = i;

b = a;
b = c;
b = d;
b = e;
b = f;
b = g;
b = h;
b = i;

c = a;
c = b;
c = d;
c = e;

// d = c;
export {};
