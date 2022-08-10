/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

/** 왕복
 * from: 출발일자
 * to: 귀성일자
 * destination: 여행지
 */
type TwoWayOption = {
  type: "TwoWay",
  from: string;
  to: string;
  destination: string;
};

type OneWayOption = {
  type: "OneWay",
  from: string;
  destination: string;
};

type Reservation = {
  f: string;
  t: string;
  d: string;
};

type Reserve = {
  /** 왕복 여행 예약 */
  (option: TwoWayOption): Reservation;
  /** 편도 여행 예약 */
  (option: OneWayOption): Reservation;
};

let reserve: Reserve = (
  option: TwoWayOption | OneWayOption
) => {
  if (option.type === "TwoWay") {
    /** 왕복 여행 예약 */
    return {
      f: option.from,
      t: option.to,
      d: option.destination,
    };
  }
  /** 편도 여행 예약 */
  return {
    f: option.from,
    t: "NONE",
    d: option.destination,
  };
}

let rTwo = reserve({
  type: "TwoWay",
  from: "20220801",
  to: "20220812",
  destination: "Hawaii"
});
console.log(rTwo);
let rOne = reserve(new Date("20220901"), "Rome");
console.log(rOne);
rTwo = reserve(new Date("20220918"), new Date("20220922"), "Texas");
console.log(rTwo);

reserve()

export {};
