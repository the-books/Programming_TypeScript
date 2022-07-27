/* eslint-disable @typescript-eslint/no-explicit-any */
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
    return document.createElement(tag) as HTMLAnchorElement;
  } else if (tag === "canvas") {
    return document.createElement(tag) as HTMLCanvasElement;
  } else if (tag === "table") {
    return document.createElement(tag) as HTMLTableElement;
  }
  return document.createElement(tag);
}

let tag: HTMLElement = createElement("a");
tag = createElement("canvas");
tag = createElement("table");
tag = createElement("foo");

export {};
