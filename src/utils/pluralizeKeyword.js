export default function pluralizeKeywords(
  n,
  { one, two, five, seven, radix, twoMax, fiveMax, sevenMax },
) {
  const order = n.toString().length; // порядок числа
  const mod = Math.abs(n) % radix;
  let pattern;
  if (order === 1) {
    // числа от 0 до 9 включительно
    if (n === 1) pattern = one;
    else if (n >= 2 && n <= twoMax) pattern = two;
    else if (n >= 5 && n <= fiveMax) pattern = five;
    else if (n >= 7 && n <= sevenMax) pattern = seven;
    else pattern = five;
  } else if (order === 2) {
    // числа от 10 до 99 включительно
    const s = Math.floor(n / radix);
    if (s === 1) pattern = five;
    else if (s > 1) {
      if (mod === 0 || mod === 5 || mod === 6 || mod === 9) pattern = five;
      else if (mod >= 2 && mod <= twoMax) pattern = two;
      else if (mod === 7 || mod === 8) pattern = seven;
      else pattern = one;
    }
  }
  return pattern.replace('{}', n);
}
