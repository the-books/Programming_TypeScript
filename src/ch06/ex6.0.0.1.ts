/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type SuperSuperType = {
  id: number | string | undefined;
  name: string;
};

type SuperTypeA = {
  id: number | undefined;
  name: string;
}

type SuperTypeB = {
  id: number | string;
  name: string;
}

type SubType = {
  id: number;
  name: string;
};

let sst: SuperSuperType = {
  id: 111,
  name: "Tom",
};

let sta: SuperTypeA = {
  id: 222,
  name: "Emily",
};

let stb: SuperTypeB = {
  id: "333",
  name: "Mao",
};

let sub: SubType = {
  id: 444,
  name: "Kim",
};


// SubType <: SuperTypeA
// SubType <: SuperTypeB
sta = sub;
stb = sub;

// SuperTypeA <: SuperSuperType
// SuperTypeB <: SuperSuperType
sst = sta;
sst = stb;

// SubType <: SuperSuperType
sst = sub;


export {};
