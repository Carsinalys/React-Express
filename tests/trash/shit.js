test("inject Jquery", async () => {
  await page.addScriptTag({
    url: "https://code.jquery.com/jquery-3.4.1.min.js"
  });
  const result = await page.evaluate(() => {
    const $ = window.$; //otherwise the transpiler will rename it and won't work
    return $();
  });
  expect(result).toBeInstanceOf(Object);
});

test("get urls for shops", async () => {
  const urls = await readFile(path.join(__dirname, "./list.json"));
  curShop = JSON.parse(urls.toString()).URLS[0];
});

test("get current rule for single shop", async () => {
  await fetch(`https://api-beta.shoptagr.com/v2/admin/rule?url=${curShop}`, {
    method: "GET",
    headers: {
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE3Mjg3NjE5Nzd9.scvbbx_tnxNRoEi9-AQX623MJYWAdgx31SdtiRD851k"
    }
  })
    .then(data => data.json())
    .then(data => (curRules = data));
});

test("get url for single item from current shop", async () => {
  await page.focus('[role="combobox"]');
  await page.keyboard.type(curShop + " " + curRules.url_pattern);
  await page.keyboard.press("\n");
  await page.waitFor(1000);
  singleUrl = await page.evaluate(curShop => {
    let url = "";
    document.querySelectorAll("[data-async-context] a[href]").forEach(item => {
      const reg = new RegExp("/p/([\\w-]+)");
      if (reg.test(item.href) && item.href.startsWith(curShop)) {
        url = item.href;
      }
    });
    return url;
  }, curShop);
});

test("test fetching rules from shoptagrserver", async () => {
  await page.goto(`${singleUrl}`, { waitUntil: "domcontentloaded" });
  const name = await page.evaluate(curRules.name_getter);
  const image = await page.evaluate(curRules.image_getter);
  const price = await page.evaluate(curRules.price_getter);
  const originalPrice = await page.evaluate(curRules.original_price_getter);
  console.log(nameCheck(name));
  console.log(imageCheck(image));
  console.log(priceCheck(price));
  console.log(priceCheck(originalPrice));
}, 20000);
