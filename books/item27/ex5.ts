/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

type Position = "Lead Vocal" | "Main Rapper" | "Main Dancer" | "Sub Vocal" | "Lead Rapper" | "Lead Dancer";

interface IDol {
  name: string;
  group: string;
  position: Position[];
}

declare const rosters: { [tema: string]: IDol[] };

// let allIDols: IDol[] = [];
// for (const idol of Object.values(rosters)) {
//   allIDols = allIDols.concat(idol);
// }

const allIDols = Object.values(rosters).flat();


export {};
