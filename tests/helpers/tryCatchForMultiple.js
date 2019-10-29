module.exports = async (rule, page) => {
  let multiResult;
  try {
    multiResult = await page.evaluate(rule);
  } catch (e) {
    console.log(
      "can`t execute multi getter for getting single url in",
      curShop
    );
  }
  return multiResult;
};
