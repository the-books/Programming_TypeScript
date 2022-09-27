/* eslint-disable @typescript-eslint/no-unused-vars */

type A = "A";
type B = "B";
type ABU = A & B; // never
type ABI = A | B; // "A" | "B"

let abu: ABU = "A";
abu = "B";

let abi: ABI = "A";
abi = "B";

export {}
