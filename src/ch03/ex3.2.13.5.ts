/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

const enum Flippable {
  Burger,
  Chair,
  Cup,
  Skateboard,
  Table,
}

function filp(f: Flippable) {
  return "filpped it";
}

filp(Flippable.Chair);
filp(Flippable.Cup);
filp(Flippable[1]); // error
filp(3); // !!!

export {};
