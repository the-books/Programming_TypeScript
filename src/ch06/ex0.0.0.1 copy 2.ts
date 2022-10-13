/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type ISOString = Partial<{
  EN: string;
  KO: string;
  JP: string;
  FU: string;
}>;

type Group = {
  kind: "junmai" | "honjozo" | "futsushu";
  name: string;
  ingredients: string[];
  categories: {
    kind: "Junmai Daiginjo" | "Junmai Ginjo" | "Tokubetsu Junmai" | "Junmai" | "Daiginjo" | "Ginjo" | "Tokubetsu Honjozo" | "Honjozo" | "Futsushu";
    name: ISOString
    description: string;
    price: [number, number?]
  }[];
};
type GroupKind = Group["kind"];
type Category = Group["categories"][number];
type CategoryKind = Category["kind"];

type Brand = {
  kind: "kubota" | "koshi_no_kanbai" | "hakkaisan" | "dassai";
  name: ISOString
  brewery: ISOString
  location: ISOString
  feature: string;
  links: ISOString;
};
type BrandKind = Brand["kind"];

type Sake = {
  brandKind: BrandKind;
  categoryKind: CategoryKind;
  name: ISOString
  description: string;
  rice: ISOString
  ricePolishingRate: number;
  alcoholByVolume: number;
  sakeMeterValue: number;
  acidityLevel: number | "비공개";
  volumePrice: {
    volume: "1.8L" | "720ml" | "500ml" | "300ml";
    price: number | "-";
  }[];
};
export {};
