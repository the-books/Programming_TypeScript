/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type Context = {
  appId?: string;
  userId?: string;
};

function log(message: string, context: Context = {}) {
  let time = new Date().toISOString();
  console.log(time, message, context.userId);
}

export {};
