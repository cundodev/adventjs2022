function getOptimalPath(path) {
  const findPath = (path, i, j) => {
    if (i === path.length) return 0;
    return (
      path[i][j] +
      Math.min(findPath(path, i + 1, j), findPath(path, i + 1, j + 1))
    );
  };
  const mindPath = findPath(path, 0, 0);
  return mindPath;
}
