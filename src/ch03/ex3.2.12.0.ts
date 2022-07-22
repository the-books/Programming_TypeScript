/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// number | null
function a(x: number) {
  if (x < 10) {
    return x;
  }
  return null;
}

// undefined
function b() {
  return undefined;
}

// void
function c() {
  let a = 2 + 2;
  let b = a * a;
}

// never
function d() {
  throw TypeError("I always error");
}

// never
function e() {
  while (true) {
    d();
  }
}

export {};
