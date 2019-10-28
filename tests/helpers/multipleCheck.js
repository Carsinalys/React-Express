module.exports = multiple => {
  if (multiple === "Done with error") return false;
  if (multiple) if (multiple.length > 0) return true;
  return false;
};
