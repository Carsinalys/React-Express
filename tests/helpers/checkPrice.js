module.exports = price => {
  if (price)
    if (price.indexOf(" ") < 0)
      if (
        price.startsWith("$") ||
        price.startsWith("€") ||
        price.startsWith("£") ||
        price.match(/^[A-Z]{2,3}\d{1,8}(\.\d{0,4})?$/)
      )
        return true;
  return false;
};
