module.exports = image => {
  if (image) {
    if (image.indexOf("http") >= 0 && image.length > 10) {
      return true;
    }
  }
  return false;
};
