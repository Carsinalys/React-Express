const puppeteer = require("puppeteer");

test("add two numbers", () => {
  const a = 7;
  const c = 1;
  const b = a + c;
  expect(b).toEqual(8);
});

test("simple start browser", async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
});

// test("test", async () => {
//   try {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto("https://www.tut.by/", { waitUntil: "domcontentloaded" });
//
//     await new Promise(resolve => setTimeout(resolve, 5000));
//     console.log("done");
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
