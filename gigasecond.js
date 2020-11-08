function gigasecond(date /*: Date */) /*: Date */ {
  const MILLISECONDS_IN_SECOND = 1e3;
  const GIGASECOND = 1e9;

  return new Date(date.valueOf() + GIGASECOND * MILLISECONDS_IN_SECOND);
}

export { gigasecond };
