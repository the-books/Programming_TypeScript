/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

class Set {
  has(value: number): boolean {
    return false;
  }

  add(value: number): this {
    return this;
  }
}

class MutableSet extends Set {
  delete(value: number): boolean {
    return false;
  }
  // add(value: number): MutableSet {}
}

let set = new Set();
set.add(1).add(2).add(3);
set.has(2)
set.has(4);

let mset = new MutableSet();
mset.add(1).add(2).add(4);


export {};
