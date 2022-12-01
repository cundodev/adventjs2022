function wrapping(gifts) {
  let wrapper;
  return gifts.map((gift) => {
    wrapper = "*".repeat(gift.length + 2);
    return `${wrapper}\n*${gift}*\n${wrapper}`;
  });
}
