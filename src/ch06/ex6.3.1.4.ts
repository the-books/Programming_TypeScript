/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function get<
  O extends object,
  K extends keyof O
>(
  o: O,
  k: K
): O[K] {
  return o[k];
}

let pig = {
  weight: 99,
  unit: "kg",
};

get(pig, "weight");
get(pig, "unit");

export {};
