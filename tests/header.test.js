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

// test("simple start browser", async () => {
//   const browser = await puppeteer
//     .launch({
//       headless: false
//     })
//     .then(async browser => {
//       const page = await browser.newPage();
//       await page.goto("https://www.tut.by/", { waitUntil: "domcontentloaded" });
//       await browser.close();
//     });
// }, 20000);

// test("test", async () => {
//   try {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto("https://www.tut.by/", { waitUntil: "domcontentloaded" });
//
//     //await new Promise(resolve => setTimeout(resolve, 5000));
//     await browser.close();
//   } catch (e) {
//     console.log("Err", e);
//   }
// });

// describe("Google", () => {
//   beforeAll(async () => {
//     await page.goto("https://google.com");
//   });
//
//   it('should be titled "Google"', async () => {
//     await expect(page.title()).resolves.toMatch("Google");
//   });
// });
