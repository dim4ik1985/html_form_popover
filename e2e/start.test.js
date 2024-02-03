import puppeteer from "puppeteer";

jest.setTimeout(30000);

describe("Page start", () => {
  let browser;
  let page = null;
  const baseUrl = "http://localhost:9000";

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: process.env.CI, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterEach(async () => {
    await browser.close();
  });

  test("Page should have the correct title", async () => {
    await page.goto(baseUrl);

    const title = await page.title();

    expect(title).toBe("Popover");
  });
});
