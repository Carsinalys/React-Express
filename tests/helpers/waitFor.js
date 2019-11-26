const waitFor = async (page, rule) => {
  let waitForCounter = 0,
    error = false,
    waitForResult = false;
  do {
    try {
      await page.waitFor(3000);
      let curWaiter = rule
        .split("return")
        .pop()
        .split("})")[0];
      waitForResult = await page.evaluate(curWaiter);
      waitForCounter++;
    } catch (e) {
      error = "wait for function done with error";
    }
  } while (!waitForResult && waitForCounter < 3);
  waitForCounter = 0;
  waitForResult = false;
  return error;
};

module.exports = waitFor;
