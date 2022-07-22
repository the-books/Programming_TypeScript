/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

type Press = boolean | number;
let p: Press = true;
p = false;
p = 1;
p = 2;
p;


type PressLevel = false | 1 | 2 | 3;
let pl: PressLevel = false;
// pl = true;
pl = 1;
pl = 2;
pl = 3;
// pl = 4;
pl;


type PressLevelStatus = "NONE" | "L1" | "L2" | "L3";
let pls: PressLevelStatus = "NONE";
pls = "L1";
pls = "L2";
pls = "L3";

type PressLevelStatusShort = "NONE" | "L1"
let plss: PressLevelStatusShort = "L1";
pls = plss;
export {};
