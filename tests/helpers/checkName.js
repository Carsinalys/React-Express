module.exports = name => {
  if (name) {
    if (name.length > 0) {
      return true;
    }
  }
  return false;
};
