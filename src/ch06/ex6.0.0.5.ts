/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type TypeA = {
  name: string;
};
type TypeB = {
  id?: number;
  name: string;
};
type TypeC = {
  id: number | undefined;
  name: string;
};
type TypeD = {
  id: number;
  name: string;
};

// TypeD <: TypeC <: TypeB :: TypeA

let typeA: TypeA = {
  name: "Lee",
};

let typeB: TypeB = {
  name: "John",
};
typeB = {
  id: undefined,
  name: "John",
};
typeB = {
  id: 111,
  name: "John",
};

let typeC: TypeC = {
  id: undefined,
  name: "Lee",
};
let typC1: TypeC = {
  id: 222,
  name: "Lee",
};
// let typC2: TypeC = {
//   name: "Lee",
// };

let typeD: TypeD = {
  id: 123,
  name: "Paul",
};

// TypeA
typeA = typeB;
// typeA = typeC;
// typeA = typeD;

// TypeB
typeB = typeA;
// typeB = typeC;
// typeB = typeD;

// TypeC
// typeC = typeD;

// Error TypeD
// typeD = typeA;
// typeD = typeB;
// typeD = typeC;

// Error TypeC
// typeC = typeA;
// typeC = typeB;


// function greeting(person: SuperType) {
//   console.log("greeting");
// }
// greeting(sup);
// greeting(sub);

// function greeting2(person: SubType) {
//   console.log("greeting2");
// }
// greeting2(sup);
// greeting2(sub);

export {};
