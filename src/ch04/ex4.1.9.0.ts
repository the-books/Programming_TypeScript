/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// 단축형 호출 시그니처
type ExLog = (message: string, userId: string) => void;

// 전체 호출 시그니처
type Log = {
  (message: string, userId?: string): void;
};

export {};
