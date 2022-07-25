/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type CreateElement = {
  (tag: "a"): HTMLAnchorElement;
  (tag: "canvas"): HTMLCanvasElement;
  (tag: "table"): HTMLTableElement;
  (tag: string): HTMLElement;
};

let createElement: CreateElement = (tag: string): HTMLElement => {
  if (tag === "a") {
    return new HTMLAnchorElement();
  } else if (tag === "canvas") {
    return new HTMLCanvasElement();
  } else if (tag === "table"){
    return new HTMLTableElement();
  } else {
    return new HTMLElement();
  }
}

let tag: HTMLElement = createElement("a");
tag = createElement("canvas");
tag = createElement("table");
tag = createElement("foo");

export {};
