module.exports = name => {
  if (name) {
    if (name === "Done with error") return false;
    if (
      name.match(
        /^[a-zA-Z0-9-@!.,'"]{1}[a-zA-Z0-9-@!.,#'"& ]+[a-zA-Z0-9-@!.,'"]{1}$/
      )
    )
      return true;
  }
  return false;
};
