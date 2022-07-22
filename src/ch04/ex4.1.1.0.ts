/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId || "Not signed in");
}

log("Page loaded");

log("User signed in", "da763be");

export {};
