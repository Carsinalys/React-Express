module.exports = name => {
  if (name) {
    if (name === "Done with error") return false;
    if (name.length > 0 && name.indexOf("<") < 0) return true;
  }
  return false;
};
