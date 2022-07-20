/* eslint-disable prefer-const */

3 + []; // ts(2365)

let obj = {};
obj.foo; // ts(2339)

function a(b: number) {
  return b / 2;
}

a("z"); // ts(2345)

export {};
