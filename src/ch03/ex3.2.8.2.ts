/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

let c: {
  firstName: string;
  lastName: string;
} = {
  firstName: "john",
  lastName: "barrowman",
};

class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) { }
}

c = new Person("matt", "smith");

export {};
