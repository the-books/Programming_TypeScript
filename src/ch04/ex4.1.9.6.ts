/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type Log = {
  (message: string): string;
  (message: number): string;
  (message: boolean): string;
};

let myLog: Log = (
  message: string | number | boolean
): string => {
  if (typeof message === "string") {
    return `Log: ${message}`;
  } else if (typeof message === "number") {
    return message.toString();
  } else if (typeof message === "boolean") {
    return message.toString();
  }
  return message;
};

myLog();
export {};
