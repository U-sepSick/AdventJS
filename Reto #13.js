function getFilesToBackup(lastBackup, changes) {
  let files = changes.filter((element) => element[1] > lastBackup);
  let id = files.map((id) => id[0]);
  let res = [...new Set(id)].sort((a, b) => a - b);

  return res;
}