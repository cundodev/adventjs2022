function getCompleted(part, total) {
  const timeWorked = part
    .split(":")
    .reduce((acc, current) => acc * 60 + +current, 0);
  const timeToWork = total
    .split(":")
    .reduce((acc, current) => acc * 60 + +current, 0);
  const findGcd = (a, b) => {
    return b ? findGcd(b, a % b) : a;
  };
  const gcd = findGcd(timeWorked, timeToWork);

  return `${timeWorked / gcd}/${timeToWork / gcd}`;
}
