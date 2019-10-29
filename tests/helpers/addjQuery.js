module.exports = async page => {
  try {
    await page.evaluate(() => {
      const jQuery = window.$;
    });
  } catch (e) {
    console.log("can`t find and associate $ with jQuery in", curShop);
  }
  try {
    await page.addScriptTag({
      url: "https://code.jquery.com/jquery-3.4.1.min.js"
    });
  } catch (e) {
    console.log("can`t inject jQuery in", curShop);
  }
};
