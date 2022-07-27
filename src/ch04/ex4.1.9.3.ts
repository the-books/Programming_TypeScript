/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type Reservation = {
  D: string;
  F: string;
  T?: string;
};

type Reserve = {
  /** 왕복 여행 예약 */
  (destination: string, from: Date, to: Date): Reservation;
  /** 편도 여행 예약 */
  (destination: string, from: Date): Reservation;
}

let reserve: Reserve = (
  destination: string,
  from: Date,
  to?: Date,
) => {
  if (to instanceof Date) {
    /** 왕복 여행 예약 */
    return {
      D: destination,
      F: from.toISOString(),
      T: to.toISOString(),
    };
  } else {
    /** 편도 여행 예약 */
    return {
      D: destination,
      F: from.toISOString(),
    };
  }
}

let r = reserve("Hawaii", new Date("20220801"), new Date("20220812"));
console.log(r);
r= reserve("Rome", new Date("20220901"));
console.log(r);
r= reserve("Texas", new Date("20220918"), new Date("20220922"));
console.log(r);

export {};
