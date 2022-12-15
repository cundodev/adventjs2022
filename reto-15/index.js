function decorateTree(base) {
  const deco = {
    PP: "P",
    BB: "B",
    RR: "R",

    BP: "R",
    RP: "B",
    BR: "P",

    PB: "R",
    PR: "B",
    RB: "P",
  };
  const baseArray = base.split(" ");
  return [...Array.from({ length: baseArray.length - 1 })]
    .reduce(
      (acc, _, index) => {
        const next = [];
        for (let i = 0; i < acc[index].length - 1; i++) {
          next.push(deco[acc[index][i] + acc[index][i + 1]]);
        }
        acc.push(next);
        return acc;
      },
      [baseArray]
    )
    .reverse()
    .map((t) => t.join(" "));
}

//Otra SOLUCIóN
function decorateTree(base) {
  const deco = {
    PP: "P",
    BB: "B",
    RR: "R",

    BP: "R",
    RP: "B",
    BR: "P",

    PB: "R",
    PR: "B",
    RB: "P",
  };
  const baseArray = base.split(" ");
  return baseArray
    .slice(0, -1)
    .reduce(
      (acc, _, index) => {
        let next = acc[index]
          .slice(0, -1)
          .map((_, i) => deco[acc[index][i] + acc[index][i + 1]]);
        acc.push(next);
        return acc;
      },
      [baseArray]
    )
    .reverse()
    .map((t) => t.join(" "));
}
