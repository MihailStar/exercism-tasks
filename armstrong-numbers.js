function isArmstrongNumber(number /*: number */) /*: boolean */ {
  return (
    number
      .toString(10)
      .split('')
      .reduce(
        (sum, digit, _, array) =>
          sum + Number.parseInt(digit, 10) ** array.length,
        0
      ) === number
  );
}

export { isArmstrongNumber };
