/* eslint-disable prefer-rest-params */
/* eslint-disable no-constant-condition */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */

type DocuStatus = "NONE" | "READY" | "WORK" | "FAIL" | "FIN" | "SEND";
type DocuStatusKO = "초기" | "발행준비" | "발행중" | "발행실패" | "발행완료" | "발송완료";
type DocuMapped = {
  [Key in DocuStatus]: DocuStatusKO;
};
let dealDocuMapped: DocuMapped = {
  NONE: "초기",
  READY: "발행준비",
  WORK: "발행중",
  FAIL: "발행실패",
  FIN: "발행완료",
  SEND: "발송완료",
};

type Form = {
  intentKey: string;
  isPublic: boolean;
  investors: string[];
};

type OptionalForm = {
  [Key in keyof Form]?: Form[Key];
};

type NullableForm = {
  [Key in keyof Form]: Form[Key] | null;
};

type ReadonlyForm = {
  readonly [Key in keyof Form]: Form[Key];
};

type Form2 = {
  -readonly [Key in keyof ReadonlyForm]: Form[Key];
};

type Form3 = {
  [Key in keyof OptionalForm]-?: Form[Key];
};

export {};
