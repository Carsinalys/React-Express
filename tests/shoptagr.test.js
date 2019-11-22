const puppeteer = require("puppeteer");
require("regenerator-runtime");

const nameCheck = require("./helpers/checkName");
const imageCheck = require("./helpers/imageCheck");
const priceCheck = require("./helpers/checkPrice");
const originalPriceCheck = require("./helpers/checkOriginalPrice");
const multipleCheck = require("./helpers/multipleCheck");
const tryCatchForRules = require("./helpers/tryCatchForRules");
const addjQuery = require("./helpers/addjQuery");
const tryCatchForMultiple = require("./helpers/tryCatchForMultiple");
const fetchData = require("./helpers/fetch");

let browser, page;
let curRules;
let curShop;
let singleUrl;
let result = {};
let singleTagLink = "";

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
      //"--proxy-server=174.127.155.118:32505"
    ]
  });
});

beforeEach(async () => {
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

afterEach(async () => {
  await page.close();
});

describe("test list of shops", () => {
  //loop shops
  for (let i = 0; i < 20; i++) {
    test(`testing list shops, shop - ${i + 1}`, async () => {
      curShop = "";
      //fetching rules for single shop
      curRules = await fetchData(
        `https://api-beta.shoptagr.com/v2/rules/${i + 1}`
      );
      singleTagLink = await fetchData(
        `https://api-beta.shoptagr.com/v2/stores/${i + 1}/popular_tag`
      );
      curShop = curRules.url_regex;
      // if can`t find url in google
      if (!singleTagLink.tag_url) {
        result[i] = { error: "can`t fget urls form server" };
      } else {
        // if url has been find do shit
        await page.setDefaultNavigationTimeout(60000);
        console.log(singleTagLink.tag_url);
        await page.goto(singleTagLink.tag_url, {
          waitUntil: "domcontentloaded"
        });
        await page.waitFor(1000);
        //inject jQuery
        await addjQuery(page);
        let name, image, price, originalPrice, multiple;
        name = await tryCatchForRules(curRules.name_getter, page);
        image = await tryCatchForRules(curRules.image_getter, page);
        price = await tryCatchForRules(curRules.price_getter, page);
        originalPrice = await tryCatchForRules(
          curRules.original_price_getter,
          page
        );
        console.log(price);
        multiple = await tryCatchForMultiple(
          curRules.multi_products_getter,
          page
        );
        result[i] = {
          url: singleTagLink.tag_url,
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
            valid: originalPriceCheck(originalPrice),
            value: originalPrice
          },
          multiple: {
            valid: multipleCheck(multiple),
            value: multiple
          }
        };
      }
      singleUrl = "";
    });
  }

  test("console.log result", () => {
    console.log(result);
  });
});
