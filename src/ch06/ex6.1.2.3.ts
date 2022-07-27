/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type SubUserInfo = {
  id: number;
  name: string;
};
type SuperUserInfo = {
  id: number | undefined;
  name: string;
};

// SubUserInfo <: SuperUserInfo
let subUserInfo: SubUserInfo = {
  id: 2222,
  name: "John",
};
let superUserInfo: SuperUserInfo = {
  id: 3333,
  name: "Kevin",
};

// Error
subUserInfo = superUserInfo;
// Ok
// superUserInfo = subUserInfo;

export {};
