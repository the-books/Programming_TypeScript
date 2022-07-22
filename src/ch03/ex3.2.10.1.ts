/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let d = [1, "a"];
d.map(_ => {
  if (typeof _ === "number") {
    return _ * 3;
  }
  return _.toUpperCase();
});

export {};
