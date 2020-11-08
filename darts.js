const CENTER = [0, 0];

const Radius = {
  OUTHER: 10,
  MIDDLE: 5,
  INNER: 1,
};

const RadiusInPoints = {
  OUTHER: 1,
  MIDDLE: 5,
  INNER: 10,
};

/**
 * @tutorial https://ru.wikipedia.org/wiki/Евклидова_метрика
 */
function score(x /*: number */, y /*: number */) /*: number */ {
  const [q1, q2] = CENTER;
  const [p1, p2] = [x, y];
  const distance = Math.sqrt((p1 - q1) ** 2 + (p2 - q2) ** 2);

  if (distance <= Radius.INNER) return RadiusInPoints.INNER;
  if (distance <= Radius.MIDDLE) return RadiusInPoints.MIDDLE;
  if (distance <= Radius.OUTHER) return RadiusInPoints.OUTHER;

  return 0;
}

export { score };
