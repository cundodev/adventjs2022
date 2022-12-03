const distributeGifts = (packOfGifts, reindeers) => {
  return Math.trunc(
    (reindeers.join("").length * 2) / packOfGifts.join("").length
  );
};

//Otra manera
const distributeGifts_2 = (packOfGifts, reindeers) => {
  return Math.trunc(
    reindeers.reduce((acc, reindeer) => (acc += reindeer.length * 2), 0) /
      packOfGifts.reduce((acc, gift) => (acc += gift.length), 0)
  );
};
