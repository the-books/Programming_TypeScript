/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

class MyMap<K, V> {
  constructor(initialKey: K, initialValue: V) {
    //
  }
  get(key: K): V {
    //
  }
  set(key: K, value: V): void {
    //
  }
  merge<K1, V>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
    //
  }
  static of<K, V>(k: K, v: V): MyMap<K, V> {
    //
  }
}

let a = new MyMap<string, number>("k", 1);
let b = new MyMap("k", true);

a.get("k");
b.set("k", false);

export {};
