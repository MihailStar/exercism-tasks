function encode(chars /*: string */) /*: string */ {
  const COUNTER_START_VALUE = 1;

  let counter = COUNTER_START_VALUE;
  let result = '';

  for (let index = 0; index < chars.length; index += 1) {
    const char = chars[index];
    const nextChar = chars[index + 1];

    if (char === nextChar) {
      counter += 1;
    } else {
      result += counter === COUNTER_START_VALUE ? char : `${counter}${char}`;
      counter = COUNTER_START_VALUE;
    }
  }

  return result;
}

function decode(chars /*: string */) /*: string */ {
  const COUNTER_START_VALUE = '';

  let counter = COUNTER_START_VALUE;
  let result = '';

  for (let index = 0; index < chars.length; index += 1) {
    const char = chars[index];

    if (char.match(/[1-9]/) === null) {
      result += counter === COUNTER_START_VALUE ? char : char.repeat(+counter);
      counter = COUNTER_START_VALUE;
    } else {
      counter += char;
    }
  }

  return result;
}

export { encode, decode };
