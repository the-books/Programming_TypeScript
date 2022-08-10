/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type SuperType = {
  name: string;
};
type SubType = {
  id?: number;
  name: string;
};

// SubType :: SuperType
let sup: SuperType = {
  name: "John",
};
let sub: SubType = {
  id: 123,
  name: "Paul",
};

sup = sub;
sub = sup;

function greeting(person: SuperType) {
  console.log("greeting");
}
greeting(sup);
greeting(sub);

function greeting2(person: SubType) {
  console.log("greeting2");
}
greeting2(sup);
greeting2(sub);

export {};
