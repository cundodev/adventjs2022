function canExit(maze) {
  function replace(str) {
    return str
      .replace(/[S][\sE]/g, "SS")
      .replace(/[\sE][S]/g, "SS")
      .split("");
  }

  let resolve = [];
  Array.from({ length: 20 }, () => {
    let check = [...maze];
    maze.map((row, i) => {
      maze[i] = replace(row.join(""));
      maze[i] = maze[i]
        .map((_, i) => replace(maze.map((m) => m[i]).join("")))
        .map((m) => m[i]);
    });
    check.flat().join("") === maze.flat().join("") && resolve.push(check);
  });

  return !resolve.flat(2).includes("E");
}
