/* eslint-disable @typescript-eslint/no-unused-vars */

interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
}

type PersonSpan = Person & Lifespan;

const gg = {
  name: "gg",
  birth: new Date("2002-06-24"),
  death: new Date("2049-12-25"),
};
const ps: PersonSpan = gg;
console.log(ps.);

type PersonLife = Person | Lifespan;

let pl: PersonLife = {
  name: "gg",
};
pl = {
  birth: new Date("2002-12-24"),
};
pl = {
  name: "sdf",
  birth: new Date("2002-12-24"),
};

const people: Person[] = ["alice", "bob", "jan"].map((name: string): Person => ({name}));

export {};
