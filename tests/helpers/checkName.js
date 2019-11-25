module.exports = name => {
  if (name) {
    if (name === "Done with error") return false;
    if (
      name.match(
        /^[\wА-Яа-я-@!.,'"]{1}[\wА-Яа-я-@!.,#'"& ]+[\wА-Яа-я-@!.,'"]{1}$/
      )
    )
      return true;
  }
  return false;
};
