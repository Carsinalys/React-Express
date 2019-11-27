const puppeteer = require("puppeteer");
require("regenerator-runtime");
const mongoose = require("mongoose");
const Tests = require("./schema");

const nameCheck = require("./helpers/checkName");
const imageCheck = require("./helpers/imageCheck");
const priceCheck = require("./helpers/checkPrice");
const originalPriceCheck = require("./helpers/checkOriginalPrice");
const multipleCheck = require("./helpers/multipleCheck");
const tryCatchForRules = require("./helpers/tryCatchForRules");
const addjQuery = require("./helpers/addjQuery");
const tryCatchForMultiple = require("./helpers/tryCatchForMultiple");
const fetchData = require("./helpers/fetch");
const waitFor = require("./helpers/waitFor");

let browser, page;
let curRules;
let curShop;
let singleUrl;
let result = {};
let singleTagLink = "";
let arrOfSingleUrls = [];
let counter = 0;
let context;

//const iPhone = puppeteer.devices['iPhone 6'];
//await page.emulate(iPhone);

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    args: [
      "--disable-extensions",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-gpu",
      "--no-first-run",
      "--disable-notifications",
      "--incognito"
      //"--user-data-dir=/tmp/session"
      //"--proxy-server=174.127.155.118:32505"
    ]
  });
  context = await browser.createIncognitoBrowserContext();
});

beforeEach(async () => {
  page = await context.newPage();
});

afterAll(async () => {
  await browser.close();
});

afterEach(async () => {
  await page.close();
});

describe("test list of shops", () => {
  //loop shops
  for (let i = 61; i < 65; i++) {
    test(`testing list shops, shop - ${i + 1}`, async () => {
      curShop = "";
      //fetching rules for single shop
      curRules = await fetchData(
        `https://api-beta.shoptagr.com/v2/rules/${i + 1}`
      );
      singleTagLink = await fetchData(
        `https://api-beta.shoptagr.com/v2/stores/${i + 1}/popular_tag`
      );
      if (curRules.url_regex) {
        console.log(`testing ${curRules.url_regex} id ${i + 1}`);
        curShop = curRules.url_regex;
        if (!singleTagLink.tag_url) {
          result[i + 1] = {
            url: curRules.url_regex,
            error: `can\`t get tag url form server for`
          };
        } else {
          let name,
            image,
            price,
            originalPrice,
            multiple,
            brand,
            jquery,
            passCheck = false,
            error = "false";
          // check for valid result
          do {
            // if url has been find do shit
            await page.setDefaultNavigationTimeout(60000);
            // check if present some errors in navigation
            try {
              await page.goto(singleTagLink.tag_url, {
                waitUntil: "domcontentloaded"
              });
            } catch (e) {
              error =
                "Error something wrong with navigation, maybe too many redirects";
            }
            //inject jQuery
            jquery = await addjQuery(page, curRules.url_regex);
            // implementation waitForFunction
            error = await waitFor(page, curRules.wait);
            // testing rules
            name = await tryCatchForRules(curRules.name_getter, page);
            brand = await tryCatchForRules(curRules.brand_getter, page);
            image = await tryCatchForRules(curRules.image_getter, page);
            price = await tryCatchForRules(curRules.price_getter, page);
            originalPrice = await tryCatchForRules(
              curRules.original_price_getter,
              page
            );
            multiple = await tryCatchForMultiple(
              curRules.multi_products_getter,
              page,
              curRules.url_regex
            );
            arrOfSingleUrls.push(singleTagLink.tag_url);
            counter++;
            singleTagLink = await fetchData(
              `https://api-beta.shoptagr.com/v2/stores/${i + 1}/popular_tag`
            );
          } while (
            (!nameCheck(name) ||
              !nameCheck(brand) ||
              !imageCheck(image) ||
              !priceCheck(price)) &&
            counter < 3
          );
          if (
            nameCheck(name) &&
            nameCheck(brand) &&
            imageCheck(image) &&
            priceCheck(price) &&
            priceCheck(originalPrice)
          ) {
            if (
              parseFloat(price.replace(/^[A-Z$€£]{1,3}/, "")) <=
              parseFloat(originalPrice.replace(/^[A-Z$€£]{1,3}/, ""))
            )
              passCheck = true;
          }
          result[i + 1] = {
            url: curRules.url_regex,
            arrUrls: arrOfSingleUrls.length > 0 ? arrOfSingleUrls : [],
            id: curRules.id,
            validShop: passCheck,
            name: {
              valid: nameCheck(name),
              value: name
            },
            brand: {
              valid: nameCheck(brand),
              value: brand
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
            },
            jquery: jquery,
            error: error
          };
        }
        await Tests.create(result[i + 1]);
        arrOfSingleUrls = [];
        counter = 0;
        singleUrl = "";
      }
    }, 90000);
  }

  test("console.log result", async () => {
    //console.log(result);
    await mongoose.connection.close();
  }, 10000);
});
