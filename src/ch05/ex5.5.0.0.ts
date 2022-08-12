/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

class Zebra {
  trot() {
    console.info("tror");
  }
}

class Poodle {
  trot() {
    console.info("tror");
  }
}

function ambleAround(animal: Zebra) {
  animal.trot();
}

let zebra = new Zebra;
let poodle = new Poodle;

ambleAround(zebra);
ambleAround(poodle);


export {};
