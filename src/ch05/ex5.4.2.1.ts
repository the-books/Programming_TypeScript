/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

interface Animal {
  readonly name: string;
  eat(food: string): void;
  sleep(hours: number): void;
}

interface Feline {
  meow(): void;
}

class Cat implements Animal, Feline {
  name = "Whiskers";

  eat(food: string) {
    console.info("Ate some", food, ". Mmm!");
  }

  sleep(hours: number) {
    console.info("Slept for", hours, "hours");
  }

  meow() {
    console.info("Meow");
  }
}
export {};
