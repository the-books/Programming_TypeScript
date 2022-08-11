/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type MyEvent0<T = HTMLElement> = {
  target: T;
  type: string;
};

type MyEvent1<T extends HTMLElement = HTMLElement> = {
  target: T;
  type: string;
};

let event0: MyEvent0 = {
  target: document.querySelector("#myButton"),
  type: "dfj",
};

let event1: MyEvent1 = {
  target: document.querySelector("#myButton"),
  type: "dfj",
};
export {};
