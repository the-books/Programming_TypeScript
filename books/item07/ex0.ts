/* eslint-disable @typescript-eslint/no-unused-vars */

type Dog = {
  legs: number;
};
type Bird = {
  wings: number;
}
type DBI = Dog | Bird;
type DBU = Dog & Bird;

let dbi: DBI = {
  legs: 4,
};
dbi = {
  wings: 2,
};
dbi = {
  legs: 4,
  wings: 2,
};

let dbu: DBU = {
  legs: 4,
}
dbu = {
  wings: 2,
};
dbu = {
  legs: 4,
  wings: 2,
};

interface IDog {
  legs: number;
}
interface IMonkey extends IDog {
  arms: number;
}
const im: IMonkey = {
  legs: 2,
  arms: 2,
};
type Monkey = Dog & {
  arms: number;
};
const tm: Monkey = {
  legs: 2,
  arms: 2,
};

export {}
