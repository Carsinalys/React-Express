module.exports = price => {
  if (price === "") return true;
  if (price)
    if (price.indexOf(" ") < 0)
      if (price.match(/^[A-Z$€£]{1,3}\d{1,8}(\.\d{0,4})?$/)) return true;
  return false;
};
