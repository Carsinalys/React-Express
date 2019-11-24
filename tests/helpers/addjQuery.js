module.exports = async (page, curShop) => {
  let result;
  // try {
  //   await page.evaluate(() => {
  //     const jQuery = window.$;
  //   });
  //   result = "already present";
  // } catch (e) {
  //   console.log("can`t find and associate $ with jQuery in", curShop);
  // }
  try {
    await page.addScriptTag({
      url: "https://code.jquery.com/jquery-3.4.1.min.js"
    });
    result = true;
  } catch (e) {
    console.log("can`t inject jQuery in", curShop);
    result = false;
  }
  return result;
};
