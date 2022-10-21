/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// type ISOString = {
//   EN: string;
//   KO: string;
//   JP: string;
//   FU: string;
// };
type Language = {
  KO: string;
  JP: string;
  FU?: string;
  EN?: string;
};

type Group = {
  groupType: "junmai" | "honjozo" | "futsushu";
  groupName: string;
  ingredients: string[];
  categories: {
    categoryType: 'Junmai Daiginjo' | 'Junmai Ginjo' | 'Tokubetsu Junmai' | 'Junmai' | 'Daiginjo' | 'Ginjo' | 'Tokubetsu Honjozo' | 'Honjozo' | 'Futsushu';
    name: Language;
    description: string;
    price: [number, number?]
  }[];
};
type GroupType = Group["groupType"];
type Category = Group["categories"][number];
type CategoryType = Category["categoryType"];

type Brand = {
  brandType: "kubota" | "koshi_no_kanbai" | "hakkaisan" | "dassai";
  brandName: Language;
  brewery: Language;
  location: Language;
  feature: string;
  links: Language;
};
type BrandType = Brand["brandType"];

type Sake = {
  brand: BrandType;
  category: CategoryType;
  productName: Language;
  description: string;
  rice: Language;
  ricePolishingRate: number;
  alcoholByVolume: number;
  sakeMeterValue: number;
  acidityLevel: number | "비공개";
  volumePrice: {
    volume: '1.8L' | '720ml' | '500ml' | '300ml';
    price: number | "-";
  }[];
};

declare const sake: Sake;
sake.productName.EN;

declare const brand: Brand;
console.log(brand.links.EN);

export {};
