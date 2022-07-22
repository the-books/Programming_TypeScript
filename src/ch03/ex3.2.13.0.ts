/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

enum Language {
  English,
  Spanish,
  Russian,
  Deutsch,
}

enum LanguageCode {
  EN = 0,
  ES = 1,
  RU = 2,
  DE = 3,
}

let myFirstLanguage = Language.Russian;
let mySecondLanguage = LanguageCode["DE"];

export {};
