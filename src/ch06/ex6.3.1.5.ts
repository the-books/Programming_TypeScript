/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

function get<
  O extends object,
  K extends keyof O
>(
  o: O,
  k: K
): O[K] {
  return o[k];
}

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
let lastEvent = get(activityLog, "lastEvent");
let events = get(activityLog, "events");

export {};
