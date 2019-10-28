module.exports = image => {
  if (image) {
    if (image.indexOf("http") >= 0 && image.length > 20) {
      return true;
    }
  }
  return false;
};
