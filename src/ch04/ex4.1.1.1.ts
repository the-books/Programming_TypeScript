/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function log(message: string, userId = "Not signed in") {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId);
}

log("User clicked on a button", "da763be");

log("User signed out");


export {};
