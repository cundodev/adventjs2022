function checkJump(heights) {
  const max = Math.max(...heights);
  const maxID = heights.indexOf(max);
  const up = heights.slice(0, maxID);
  const down = heights.slice(maxID);
  const orderUp = [...up].sort((a, b) => a - b);
  const orderDown = [...down].sort((a, b) => b - a);
  const minMax = [...heights].sort((a, b) => a - b);
  const maxMin = [...heights].sort((a, b) => b - a);
  if (heights.join() === minMax.join()) return false;
  if (maxMin.join() === heights.join()) return false;

  return up.join() === orderUp.join() && down.join() === orderDown.join();
}
