/* eslint-disable @typescript-eslint/no-unused-vars */
type Junmai = 'Junmai Daiginjo' | 'Junmai Ginjo' | 'Tokubetsu Junmai' | 'Junmai';
type HonjozoCategory = 'Daiginjo' | 'Ginjo' | 'Tokubetsu Honjozo' | 'Honjozo';
type FutsushuCategory = 'Futsushu';

type Group<T> ={
  name: string;
  ingredients : string[];
  categories: T[]
}

interface JunmaiGroup extends Group<Junmai> {
  type: 'junmai';

}
interface HonjozoGroup {
  type: 'honjozo';
  category: HonjozoCategory;
}
interface FutsushuGroup {
  type: 'futsushu';
  category: FutsushuCategory;
}

type SakeGroup = {
  junmai: JunmaiGroup;
  honjozo: HonjozoGroup;
  futsushu: FutsushuGroup;
};

type Meters = number & {_brand: 'meters'};
const m86 = 86;
const isMeters = (m: number): m is Meters => {
  return typeof m === 'number';
}

if (isMeters(m86)) {
  m86;
  m86._brand;
}

export {};
