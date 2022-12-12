function selectSleigh(distance, sleighs) {
  const selected = sleighs
    .filter((sleigh) => sleigh.consumption * distance <= 20)
    .at(-1);
  return selected ? selected.name : null;
}
