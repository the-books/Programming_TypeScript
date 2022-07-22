/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type Cat = {
  name: string;
  purrs: boolean;
};
type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};
type CatOrDogOrBoth = Cat | Dog; // union
type CatAndDog = Cat & Dog; //intersection

// Cat
let a: CatOrDogOrBoth = {
  name: "Bonkers",
  purrs: true,
};

// Dog
a = {
  name: "Domino",
  barks: true,
  wags: true,
};

// Both
a = {
  name: "Donkers",
  purrs: true,
  barks: true,
  wags: true,
};

let b: CatAndDog = {
  name: "Pinky",
  purrs: true,
  barks: true,
  wags: true,
};

export {};
