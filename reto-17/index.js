function carryGifts(gifts, maxWeight) {
  let bag = [];
  let weight = 0;
  return [
    ...gifts
      .filter((gift) => gift.length <= maxWeight)
      .reduce((acc, gift) => {
        if (weight + gift.length > maxWeight) {
          bag = [];
          weight = 0;
        }
        bag.push(gift);
        weight += gift.length;
        return acc.add(bag);
      }, new Set()),
  ].map((bag) => bag.join(" "));
}
