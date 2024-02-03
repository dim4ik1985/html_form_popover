import puppeteer from "puppeteer";

jest.setTimeout(30000);

describe("Page start", () => {
  let browser;
  let page = null;
  // let server = null;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("Page should have the correct title", async () => {
    await page.goto(baseUrl);

    const title = await page.title();

    expect(title).toBe("Popover");
  });
});
