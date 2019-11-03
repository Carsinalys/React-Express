const puppeteer = require("puppeteer");
require("regenerator-runtime");

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    args: [
      "--disable-extensions",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "-disable-gpu",
      "--no-first-run",
      "--disable-notifications"
    ]
  });
});

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
});

afterEach(async () => {
  await page.close();
});

afterAll(async () => {
  await browser.close();
});

describe("main page", () => {
  test("check logo", async () => {
    await page.waitFor(".pizza__logo__pic");
    const logoLink = await page.$eval(".pizza__logo__pic", el =>
      el.getAttribute("src")
    );
    expect(logoLink).toContain("logo");
  });

  test("inject Jquery", async () => {
    await page.addScriptTag({
      url: "https://code.jquery.com/jquery-3.4.1.min.js"
    });
    const title = await page.evaluate(() => {
      const $ = window.$; //otherwise the transpiler will rename it and won't work
      return $("h2").text();
    });
    expect(title).toMatch("Welcome to custom pizza builder!");
  });

  // test("the same button", async () => {
  //   await page.waitFor(
  //     () => document.querySelectorAll(".prev__order__hover__btn").length === 3
  //   );
  //   await page.hover(".prev__order__cover");
  //   await page.$eval(".prev__order__hover__btn", el => {
  //     el.click();
  //   });
  //   await page.waitFor("#signIn");
  //   const pageTitle = await page.evaluate(() => {
  //     return document.querySelector(".auth__sign__in__title").textContent;
  //   });
  //   expect(pageTitle).toMatch("Sign in:");
  // });

  // test("the same button with login", async () => {
  //   await page.waitFor(".pizza__view__icon");
  //   await page.evaluate(() => {
  //     document.querySelectorAll(".pizza__nav__link")[4].click();
  //   });
  //   await page.waitFor("#signIn");
  //   await page.focus("#auth__email");
  //   await page.keyboard.type("Cardinalys81@gmail.com");
  //   await page.focus("#auth__password");
  //   await page.keyboard.type("Cardinalys81");
  //   await page.click(".auth__submit");
  //   await page.waitFor(
  //     () => document.querySelectorAll(".pizza__nav__link").length > 5
  //   );
  //   await page.waitFor(
  //     () => document.querySelectorAll(".prev__order__hover__btn").length === 3
  //   );
  //   await page.hover(".prev__order__cover");
  //   await page.$eval(".prev__order__hover__btn", el => {
  //     el.click();
  //   });
  //   await page.waitFor("#checkout__form");
  //   const pageTitle = await page.evaluate(() => {
  //     return document.querySelector(".checkout__content__title").textContent;
  //   });
  //   expect(pageTitle).toMatch("Checkout form:");
  // });
});

// test("authentication", async () => {
//   await page.waitFor(".prev__order__cover");
//   await page.$$eval(".pizza__nav__link", el => {
//     el[4].click();
//   });
//   if (
//     await page.evaluate(
//       () => document.querySelectorAll(".checkout__content__title").length
//     )
//   ) {
//     const title = page.evaluate(
//       () => document.querySelectorAll(".checkout__content__title").textContent
//     );
//     expect(title).toMatch("Checkout form:");
//   } else {
//     await page.waitFor("#signIn");
//     await page.focus("#auth__email");
//     await page.keyboard.type("Cardinalys81@gmail.com");
//     await page.focus("#auth__password");
//     await page.keyboard.type("Cardinalys81");
//     await page.click(".auth__submit");
//     await page.waitFor(
//       () => document.querySelectorAll(".pizza__nav__link").length > 5
//     );
//   }
// });
