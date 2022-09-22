/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = Weekday | "Sat" | "Sun";
type NextDay = { [K in Weekday]: Day };

let nextDay: NextDay = {
  Mon: "Tue",
  Tue: "Wed",
  Wed: "Thu",
  Thu: "Fri",
  Fri: "Sat",
};

type UnionType = "A" | "B" | "C";
type ValueType = 1000 | 2000;
type MyMappedType = {
  [Key in UnionType]: ValueType;
};

let mmt: MyMappedType = {
  A: 1000,
  B: 1000,
  C: 2000,
};

export {};
