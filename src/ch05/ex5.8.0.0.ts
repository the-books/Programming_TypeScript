/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */

type ClassConstructor = new (...args: any[]) => {};

function withEXDebug<C extends ClassConstructor>(Class: C){
  return class extends Class {
    constructor(...args: any[]) {
      super(...args)
    }
  }
}

export {};
