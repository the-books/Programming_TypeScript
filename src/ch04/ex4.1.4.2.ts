/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function fancyDate(this: Date) {
  return `${ this.getDate() } / ${ this.getMonth() } / ${ this.getFullYear() }`;
}

fancyDate.call(new Date);

fancyDate(); // error

export {};
