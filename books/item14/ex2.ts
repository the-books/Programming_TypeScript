interface Name {
  first: string;
  last: string;
}

type DancingDuo<T extends Name> = [T, T];

const couple0: DancingDuo<Name> = [
  { first: "Fred", last: "Astaire" },
  { first: "Ginger", last: "Rogers" },
];
const couple1: DancingDuo<Name> = [
  { first: "Sonny" },
  { first: "Cher" },
];

const dancingDuo = <T extends Name>(x: DancingDuo<T>) => x;

const couple2 = dancingDuo([
  { first: "Fred", last: "Astaire" },
  { first: "Ginger", last: "Rogers" },
]);
const couple3: dancingDuo([
  { first: "Sonny" },
  { first: "Cher" },
]);

export {
  couple0,
  couple1,
  couple2,
  couple3,
};
