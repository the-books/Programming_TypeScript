/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type A = [number, string];
let a: A = [720, "ml"];

type LanguageEn = string;
type LanguageKO = string;
type LanguageJP = string;
type Name = [LanguageEn, LanguageKO, LanguageJP];

let name: Name = ["Kim", "김", "10"];
name[0];


type ISOString = {
  EN: string;
  KO: string;
  JP: string;
  FU: string;
};

type Sake = {
  name: Pick<ISOString, "EN" | "KO" | "JP">;
  rice: Pick<ISOString, "KO" | "JP">;
};

let sake: Sake = {
  name: { EN: "", KO: "", JP: "" },
  rice: { KO: "", JP: "" },
};

type Group = {
  groupType: "junmai" | "honjozo" | "futsushu";
  groupName: string;
  ingredients: string[];
  categories: {
    categoryType: 'Junmai Daiginjo' | 'Junmai Ginjo' | 'Tokubetsu Junmai' | 'Junmai' | 'Daiginjo' | 'Ginjo' | 'Tokubetsu Honjozo' | 'Honjozo' | 'Futsushu';
    name: Pick<ISOString, "KO" | "JP" | "FU">;
    description: string;
    price: [number, number?]
  }[];
};
type GroupType = Group["groupType"];
type Category = Group["categories"][number];
type CategoryType = Group["categories"][number]["categoryType"];

export {};
