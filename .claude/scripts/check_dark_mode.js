const { chromium } = require('playwright');

async function checkDarkMode() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // ライトモードのスクリーンショット
  await page.goto('http://localhost:3001/join');
  await page.screenshot({
    path: 'logs/images/join-light-mode.png',
    fullPage: true,
  });

  // ダークモードに切り替え
  await page.click('button:has-text("ダーク")');
  await page.waitForTimeout(500); // 切り替えを待つ

  // ダークモードのスクリーンショット
  await page.screenshot({
    path: 'logs/images/join-dark-mode.png',
    fullPage: true,
  });

  await browser.close();
  console.log('Light and dark mode screenshots saved!');
}

checkDarkMode();
