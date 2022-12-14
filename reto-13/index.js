function getFilesToBackup(lastBackup, changes) {
  const searchChanges = changes
    .filter(([_, change]) => change > lastBackup)
    .map(([id, _]) => id);
  const filesToBackup = [...new Set(searchChanges)]
    .sort((a, b) => a - b);
  return filesToBackup;
}
