function sortToys(toys, positions) {
  let obj = {};
  positions.forEach((p, index) => {
    obj[p] = toys[index];
  });
  return Object.values(obj);
}
