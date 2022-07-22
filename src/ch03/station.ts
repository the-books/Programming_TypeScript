/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

type Door = "Right" | "Left";
type Line = "Line1" | "2" | "3" | "4" | "5" | "6" | "경의중앙선";
type Transfer = {
  line: Line,
  direction: string;
};

type Station = {
  name: string;
  /** 병기 역명 */
  subName?: string;
  enName: string;
  jpName: string;
  chName: string;
  door: Door;
  /** 게이트 내부 화장실 유무 */
  hasInToilet: boolean;
  /** 수유실 유무 */
  hasLactation: boolean;
  /** 환승가능 여부 */
  transferble: boolean;
  /** 환승가능 목록 */
  transfer?: Transfer[];
};

const e: Station = {
  name: "응암",
  enName: "Eungam",
  jpName: "e",
  chName: "ee",
  door: "Left",
  hasInToilet: false,
  hasLactation: true,
  transferble: false,
};
const d: Station = {
  name: "디지털미디어시티",
  enName: "DigitalMediaCity",
  jpName: "d",
  chName: "dd",
  door: "Right",
  hasInToilet: false,
  hasLactation: true,
  transferble: true,
  transfer: [
    { line: "경의중앙선", direction: "도라산" },
    { line: "경의중앙선", direction: "지평" },
  ],
};

console.log(e.name);
console.log(d.name);

export {};
