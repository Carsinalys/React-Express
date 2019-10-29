module.exports = async (method, page) => {
  let variable;
  try {
    variable = await page.evaluate(method);
  } catch (e) {
    variable = "Done with error";
  }
  return variable;
};
