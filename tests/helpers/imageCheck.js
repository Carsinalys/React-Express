module.exports = image => {
  if (image) {
    if (
      image.indexOf("http") >= 0 &&
      image.length > 20 &&
      image.indexOf(".") > 0
    ) {
      return true;
    }
  }
  return false;
};
