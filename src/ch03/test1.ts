type Responses =
  | { status: 200, data: any }
  | { status: 301, to: string };

type Assassin = { skill: { name: string, level: number } };
type Skill = Assassin["skill"];

export {};
