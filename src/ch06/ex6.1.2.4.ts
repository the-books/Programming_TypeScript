/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type ExistngUser = {
  id: number;
  name: string;
};

type NewUser = {
  name: string;
};

function deleteUser(user: { id?: number, name: string; }) {
  delete user.id;
}

let existingUser: ExistngUser = {
  id: 123456,
  name: "I'm a User",
};

deleteUser(existingUser);
console.log(existingUser.id);
deleteUser(existingUser);

// number <: number | undefined
// { id: number } <: { id: number | undefined }
// { id: number, name: string } < { id: number | undefined, name: string }

export {};
