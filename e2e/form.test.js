import puppeteer from "puppeteer";

describe("Page start", () => {
  let browser;
  let page = null;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: process.env.CI, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("Form loading and display popover title", async () => {
    await page.goto(baseUrl);

    const resultSelector = await page.waitForSelector("form");
    const resultButton = await resultSelector.$(".btn-popover");

    await resultButton.click();
    const resultPopover = await page.waitForSelector(".form__error");
    const titlePopover = await page.evaluate((t) => {
      return t.querySelector(".form__error-title").textContent;
    }, resultPopover);
    expect(titlePopover).toEqual("Popover title");
  });
});
