/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type HasSides = { numberOfSides: number };
type SidesHaveLength = { sideLength: number };

function logPerimeter<Shape extends HasSides & SidesHaveLength>(s: Shape): Shape {
  console.log(s.numberOfSides * s.sideLength);
  return s;
}

type Square = HasSides & SidesHaveLength;
let square: Square = { numberOfSides: 4, sideLength: 10 };
logPerimeter(square);

export {};
