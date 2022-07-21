enum RadixType {
  Binary = 2,
  Octal = 8,
  Decimal = 10,
  Hexa = 16,
}

function onlyTwo(n: RadixType) {
  switch(n) {
    case RadixType.Binary:
      return '2진법';
    case RadixType.Octal:
      return '8진법';
    case RadixType.Decimal:
      return '10진법';
    case RadixType.Hexa:
      return '16진법';
    default:
      return '?진법';
  }
}

onlyTwo(RadixType.Binary);
onlyTwo(RadixType.Octal);
onlyTwo(RadixType.Decimal);
onlyTwo(RadixType.Hexa);
onlyTwo(1); // ?
onlyTwo(2);
onlyTwo(3); // ?
onlyTwo(100); // ?

export {};
