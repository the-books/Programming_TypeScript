/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

interface BasketballPlayer {
  name: string;
  team: string;
  salary: number;
}

declare const rosters: {[team: string]: BasketballPlayer[]};

// T[][] => T[]
const allPlayers = Object.values(rosters).flat();

export {};
