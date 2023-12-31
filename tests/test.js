const { chromium } = require('playwright');

(async () => {
  // Launch a Chromium browser instance
  const browser = await chromium.launch();

  // Create a new browser page
  const page = await browser.newPage();

  // Navigate to your website
  await page.goto('https://final-individual-project-8gcfmmui3-is328-njitedu.vercel.app/'); // Replace with your website URL

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });

  // Close the browser
  await browser.close();
})();