function checkStepNumbers(systemNames, stepNumbers) {
  const obj = {};
  return systemNames.every((systemName, index) => {
    if (obj[systemName] >= stepNumbers[index]) return false;
    obj[systemName] = stepNumbers[index];
    return true;
  });
}
