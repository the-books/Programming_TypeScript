/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type SubUser = {
  id: number;
};
type SuperUser = {
  id: number | undefined;
};

// SubUser <: SuperUser
let subUser: SubUser = {
  id: 1111,
};
let superUser: SuperUser = {
  id: 2222,
};

// Error
subUser = superUser;
// Ok
// superUser = subUser;


subUser = {
  id: 1111,
};

export {};
