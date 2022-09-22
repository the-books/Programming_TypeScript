/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type Get = {
  <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1];
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(o: O, k1: K1, k2: K2): O[K1][K2];
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1], K3 extends keyof O[K1][K2]>(o: O, k1: K1, k2: K2, k3: K3): O[K1][K2][K3];
};

let get: Get = (o: object, ...keys: string[]) => {
  let result: any = o;
  keys.forEach(k => result = result[k]);
  return result;
};

type ActivityLog = {
  lastEvent: Date;
  events: {
    id: string;
    timestamp: Date;
    type: "Read" | "Write";
  }[];
};

let activityLog: ActivityLog = {
  lastEvent: new Date(),
  events: [
    {
      id: "0001A",
      timestamp: new Date("20220829"),
      type: "Read"
    },
    {
      id: "0002A",
      timestamp: new Date("20220830"),
      type: "Read"
    },
    {
      id: "0003A",
      timestamp: new Date("20220831"),
      type: "Write"
    },
  ],
};

get(activityLog, "events", 0, "type");
get(activityLog, "bad");

export {};
