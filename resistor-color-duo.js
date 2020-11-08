const COLORS_IN_NUMBERS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
} /* as const */;

/* type Color = keyof typeof COLORS_IN_NUMBERS; */

function decodedValue(colors /*: Array<Color> */) /*: number */ {
  return Number(
    colors
      .slice(0, 2)
      .map((color) => COLORS_IN_NUMBERS[color])
      .join('')
  );
}

export { decodedValue };
