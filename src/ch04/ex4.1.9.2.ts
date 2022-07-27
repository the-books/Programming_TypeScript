/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type ReservationTwoWay = {
  F: string;
  T: string;
  D: string;
};

type ReservationOneWay = {
  F: string;
  D: string;
};

type Reserve = {
  /** 왕복 여행 예약 */
  (from: Date, to: Date, destination: string): ReservationTwoWay;
  /** 편도 여행 예약 */
  (from: Date, destination: string, ): ReservationOneWay;
}

let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string,
): ReservationTwoWay & ReservationOneWay => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    /** 왕복 여행 예약 */
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

let rTwo = reserve(new Date("20220801"), new Date("20220812"), "Hawaii");
console.log(rTwo);
let rOne = reserve(new Date("20220901"), "Rome");
console.log(rOne);
rTwo = reserve(new Date("20220918"), new Date("20220922"), "Texas");
console.log(rTwo);

export {};
