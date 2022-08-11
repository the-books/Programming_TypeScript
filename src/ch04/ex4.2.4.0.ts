/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type MyEvent<T> = {
  target: T;
  type: string;
};

type ButtonEvent = MyEvent<HTMLButtonElement>;

let myEvent: MyEvent<HTMLButtonElement | null> = {
  target: document.querySelector('#myButton'),
  type: 'click',
};

type TimedEvent<T> = {
  event: MyEvent<T>;
  from: Date;
  to: Date;
};

function triggerEvent<T>(event: MyEvent<T>): void {
  console.log("trigger event");
}

triggerEvent({ target: 400, type: 'Not Found' });

triggerEvent({ target: document.querySelector("#myButton"), type: "mouseOver"});

export {};
