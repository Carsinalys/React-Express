const puppeteer = require("puppeteer");
require("regenerator-runtime");

let browser, page;

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false,
    args: [
      "--disable-extensions",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "-disable-gpu",
      "--no-first-run",
      "--disable-notifications"
    ]
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3001/", { waitUntil: "domcontentloaded" });
});

afterEach(async () => {
  await browser.close();
});

test("check logo", async () => {
  await page.waitFor(".pizza__logo__pic");
  const logoLink = await page.$eval(".pizza__logo__pic", el =>
    el.getAttribute("src")
  );
  expect(logoLink).toContain("logo");
});

test("authentication", async () => {
  await page.waitFor(".prev__order__cover");
  await page.$$eval(".pizza__nav__link", el => {
    el[4].click();
  });
  await page.waitFor("#signIn");
  await page.focus("#auth__email");
  await page.keyboard.type("Cardinalys81@gmail.com");
  await page.focus("#auth__password");
  await page.keyboard.type("Cardinalys81");
  await page.click(".auth__submit");
  await page.waitFor(
    () => document.querySelectorAll(".pizza__nav__link").length > 5
  );
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
