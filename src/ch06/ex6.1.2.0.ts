/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// number <: number | undefined
// { id: number } <: { id: number | undefined }
// { id: number, name: string } < { id: number | undefined, name: string }

type SubId = number;
type SuperId = number | undefined;

type SubUser = {
  id: number;
};
type SuperUser = {
  id: number | undefined;
};

type SubUserInfo = {
  id: number;
  name: string;
};
type SuperUserInfo = {
  id: number | undefined;
  name: string;
};

export {};
