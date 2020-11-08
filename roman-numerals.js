const ARABIC_NUMBERS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const ROMAN_NUMBERS = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

/**
 * @tutorial https://github.com/carlaam/roman-to-arabic-numerals/blob/master/lib/index.js#L25
 */
function toRoman(number /*: number */) /*: string */ {
  let arabicNumber = number;
  let result = '';

  ROMAN_NUMBERS.forEach((romanNumber, index) => {
    while (arabicNumber >= ARABIC_NUMBERS[index]) {
      result += romanNumber;
      arabicNumber -= ARABIC_NUMBERS[index];
    }
  });

  return result;
}

export { toRoman };
