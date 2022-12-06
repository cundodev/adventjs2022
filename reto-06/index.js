function createCube(size) {
  const cube = [];
  for (let i = size; i >= 1; i--) {
    cube.unshift(" ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size));
    cube.push(" ".repeat(size - i) + "\\/".repeat(i) + "_/".repeat(size));
  }
  return cube.join("\n");
}
