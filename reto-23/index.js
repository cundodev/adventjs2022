function executeCommands(commands) {
  const records = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0,
  };
  let index = 0;
  const cmds = {
    MOV: (x, y) =>
      (records[y] = x.startsWith("V") ? records[x] : Number(x) % 256),
    ADD: (x, y) => (records[x] = (records[x] + records[y]) % 256),
    DEC: (x) => (records[x] = (records[x] - 1 + 256) % 256),
    INC: (x) => (records[x] = (records[x] + 1) % 256),
    JMP: (x) => (index = records["V00"] ? Number(x) : index),
  };
  while (index < commands.length) {
    const [comm, rec] = commands[index].split(" ");
    const [x, y] = rec.split(",");
    index++;
    cmds[comm](x, y);
  }
  return Object.values(records);
}
