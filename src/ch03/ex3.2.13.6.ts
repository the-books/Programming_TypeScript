/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

const enum Flippable {
  Burger = "Burger",
  Chair = "Chair",
  Cup = "Cup",
  Skateboard = "Skateboard",
  Table = "Table",
}

function filp(f: Flippable) {
  return "filpped it";
}

filp(Flippable.Chair);
filp(Flippable.Cup);
filp(Flippable[0]); // error
filp(3); // error

export {};
