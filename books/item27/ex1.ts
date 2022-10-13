/* eslint-disable @typescript-eslint/no-unused-vars */

type Greeting = "Hello, word";
type ShoutyGreeting = Uppercase<Greeting>;

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<"my_app">;


type CodeKey<Str extends string> = `KAI-${Str}`;

type str = '777';
let myKey: CodeKey<str>;

export {};
