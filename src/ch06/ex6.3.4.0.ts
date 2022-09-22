/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type Currency = {
  unit: "EUR" | "GBP" | "JPY" | "USD";
  value: number;
};
const Currency = {
  DEFAULT: "USD",
  from(value: number, unit = Currency.DEFAULT): Currency {
    return { unit, value };
  }
};

let amountDue: Currency = {
  unit: "JPY",
  value: 83733.10,
};

let ohterAmountDue = Currency.from(330, "EUR");

export {};
