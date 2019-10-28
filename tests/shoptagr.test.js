const puppeteer = require("puppeteer");
const fetch = require("node-fetch");
require("regenerator-runtime");
const fs = require("fs");
const path = require("path");
const util = require("util");
const readFile = util.promisify(fs.readFile);

const nameCheck = require("./helpers/checkName");
const imageCheck = require("./helpers/imageCheck");
const priceCheck = require("./helpers/checkPrice");
const multipleCheck = require("./helpers/multipleCheck");

let browser, page;
let url = "https://www.google.com/";
let curRules;
let curShop;
let singleUrl;
let urlList;
let result = {};

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    args: [
      "--disable-extensions",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "-disable-gpu",
      "--no-first-run",
      "--disable-notifications"
      //"--proxy-server=159.65.237.253:8080"
    ]
  });
  getUrls();
});

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });
});

afterAll(async () => {
  await browser.close();
});

afterEach(async () => {
  await page.close();
});

const getUrls = async () => {
  const urls = await readFile(path.join(__dirname, "./list.json"));
  urlList = JSON.parse(urls.toString()).URLS;
};

describe("test list of shops", () => {
  test("testing list shops", async () => {
    console.log(urlList);
    //loop shops
    for (let i = 0; i < urlList.length; i++) {
      curShop =
        urlList[i].indexOf("https://") >= 0
          ? urlList[i]
          : "https://" + urlList[i];
      //fetching rules for single shop
      await fetch(
        `https://api-beta.shoptagr.com/v2/admin/rule?url=${curShop}`,
        {
          method: "GET",
          headers: {
            authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE3Mjg3NjE5Nzd9.scvbbx_tnxNRoEi9-AQX623MJYWAdgx31SdtiRD851k"
          }
        }
      )
        .then(data => data.json())
        .then(data => (curRules = data));
      //searching for single item url
      await page.focus('[role="combobox"]');
      await page.keyboard.type(curShop + " " + curRules.url_pattern + " item");
      await page.keyboard.press("\n");
      await page.waitFor(1000);
      const props = {
        shopUrl: curShop,
        regexp: curRules.url_pattern
      };
      // if rules have url_pattern try to search in google single page
      if (curRules.url_pattern) {
        singleUrl = await page.evaluate(props => {
          let url = "";
          document
            .querySelectorAll("[data-async-context] a[href]")
            .forEach(item => {
              const reg = new RegExp(props.regexp);
              if (reg.test(item.href) && item.href.startsWith(props.shopUrl)) {
                url = item.href;
              }
            });
          return url;
        }, props);
      }
      // if google search doesn`t find url matches conditions
      if (!singleUrl) {
        await page.goto(url, { waitUntil: "domcontentloaded" });
        await page.focus('[role="combobox"]');
        await page.keyboard.type(curShop + " item buy");
        await page.keyboard.press("\n");
        await page.waitFor(1000);
        let multipleUrl;
        try {
          multipleUrl = await page.evaluate(props => {
            let url = "";
            document
              .querySelectorAll("[data-async-context] a[href]")
              .forEach(item => {
                if (item.href.startsWith(props.shopUrl)) {
                  if (url.length < item.href.length) url = item.href;
                }
              });
            return url;
          }, props);
        } catch (e) {
          console.log("can`t find url in goolgle for ", curShop);
        }
        // if can`t find url in google
        if (!multipleUrl) {
          multipleUrl = curShop;
        }
        await page.goto(`${multipleUrl}`, { waitUntil: "domcontentloaded" });
        //inject jQuery
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
        let multiResult;
        try {
          multiResult = await page.evaluate(curRules.multi_products_getter);
        } catch (e) {
          console.log("can`t execute multi getter code in", curShop);
        }
        if (multiResult) singleUrl = multiResult[0][2];
        else singleUrl = multipleUrl;
      }
      // if can`t find url in google
      if (!singleUrl || !singleUrl.startsWith("http")) {
        result[i] = { error: "can`t find url" };
      } else {
        // if url has been find do shit
        await page.goto(`${singleUrl}`, { waitUntil: "domcontentloaded" });
        await page.setDefaultNavigationTimeout(60000);
        //inject jQuery
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
        let name, image, price, originalPrice, multiple;
        try {
          name = await page.evaluate(curRules.name_getter);
        } catch (e) {
          name = "Done with error";
        }
        try {
          image = await page.evaluate(curRules.image_getter);
        } catch (e) {
          image = "Done with error";
        }
        try {
          price = await page.evaluate(curRules.price_getter);
        } catch (e) {
          price = "Done with error";
        }
        try {
          originalPrice = await page.evaluate(curRules.original_price_getter);
        } catch (e) {
          originalPrice = "Done with error";
        }
        try {
          multiple = await page.evaluate(curRules.multi_products_getter);
        } catch (e) {
          multiple = "Done with error";
        }
        await page.goto(url, { waitUntil: "domcontentloaded" });
        result[i] = {
          url: singleUrl,
          name: {
            valid: nameCheck(name),
            value: name
          },
          image: {
            valid: imageCheck(image),
            value: image
          },
          price: {
            valid: priceCheck(price),
            value: price
          },
          originalPrice: {
            valid: priceCheck(originalPrice),
            value: originalPrice
          },
          multiple: {
            valid: multipleCheck(multiple),
            value: multiple
          }
        };
      }
      singleUrl = "";
    }
  }, 600000);

  test("console.log result", () => {
    console.log(result);
  });
});
