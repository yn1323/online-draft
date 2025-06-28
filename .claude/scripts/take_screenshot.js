const { chromium } = require('playwright');

async function takeScreenshot(url, filename) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputPath = `logs/images/${filename || 'screenshot'}-${timestamp}.png`;

  await page.screenshot({
    path: outputPath,
    fullPage: true,
  });

  await browser.close();
  console.log(`Screenshot saved to ${outputPath}`);
  return outputPath;
}

// コマンドライン引数から URL とファイル名を取得
const url = process.argv[2] || 'http://localhost:3000';
const filename = process.argv[3] || 'page';

takeScreenshot(url, filename);
