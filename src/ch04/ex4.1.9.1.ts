/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type Reservation = {
  F: string;
  T?: string;
  D: string;
};

type Reserve = {
  /** 왕복 여행 예약 */
  (from: Date, to: Date, destination: string): Reservation;
  /** 편도 여행 예약 */
  (from: Date, destination: string): Reservation;
}

let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string,
) => {
  /** 왕복 여행 예약 */
  if (toOrDestination instanceof Date && destination !== undefined) {
    return {
      F: from.toISOString(),
      T: toOrDestination.toISOString(),
      D: destination,
    };
  }
  /** 편도 여행 예약 */
  return {
    F: from.toISOString(),
    D: toOrDestination as string,
  };
}

let r = reserve(new Date("20220801"), new Date("20220812"), "Hawaii");
console.log(r);
r= reserve(new Date("20220901"), "Rome");
console.log(r);
r= reserve(new Date("20220918"), new Date("20220922"), "Texas");
console.log(r);

export {};
