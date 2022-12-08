type OriginAlphabet =
  "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" |
  "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" |
  "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" |
  "y" | "z";
type CipherAlphabet =
  "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" |
  "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" |
  "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" |
  "Y" | "Z";
type CipherMap = {
  [index in OriginAlphabet]: CipherAlphabet;
};
  
const origins: OriginAlphabet[] = [
  "a", "b", "c", "d", "e", "f", "g", "h",
  "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x",
  "y", "z"
];
const ciphers: CipherAlphabet[] = [
  "A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X",
  "Y", "Z"
];
const TotalAlphabet = origins.length;



const modDigit = (digit: number) => {
  return digit % TotalAlphabet;
};

const cipherMap = (digit: number) => {
  const cipherMap = {};

  origins.forEach((origin, index) => {
    cipherMap[origin] = ciphers[modDigit(index + digit)]
  });

  return cipherMap as CipherMap;
}

const dd = cipherMap(3);
console.log(dd);

export {
  CipherMap,
  cipherMap,
};
