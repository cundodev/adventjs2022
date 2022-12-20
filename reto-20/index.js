function howManyReindeers(reindeerTypes, gifts) {
  return gifts.map(({ country, weight }) => {
    let maxCapacity = reindeerTypes
      .reduce((acc, curr) =>
        (acc += curr.weightCapacity), 0);
    const reindeers = reindeerTypes
      .sort((a, b) =>
        b.weightCapacity - a.weightCapacity)
      .map(({ type, weightCapacity }) => {
        const num = Math.floor(weight / maxCapacity);
        maxCapacity -= weightCapacity;
        weight -= num * weightCapacity;
        return { type, num }
      })
      .filter(reindeer => reindeer.num !== 0)
    return { country, reindeers };
  })
}