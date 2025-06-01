#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// ユーザーのダウンロードフォルダパス
const downloadDir = path.join(os.homedir(), 'Downloads');
const screenshotDir = path.join(__dirname, '..', 'logs', 'screenshots');

// logs/screenshotsディレクトリが存在しない場合は作成
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

// ダウンロードフォルダからドラフトゲーム関連のスクリーンショットを探す
fs.readdir(downloadDir, (err, files) => {
  if (err) {
    console.error('ダウンロードフォルダの読み込みエラー:', err);
    return;
  }

  // draft-game関連のPNGファイルを検索
  const screenshotFiles = files.filter(file => 
    (file.includes('draft-game') || file.includes('screenshot')) && file.endsWith('.png')
  );

  if (screenshotFiles.length === 0) {
    console.log('ドラフトゲーム関連のスクリーンショットが見つかりませんでした');
    return;
  }

  // ファイルを移動
  screenshotFiles.forEach(file => {
    const srcPath = path.join(downloadDir, file);
    const destPath = path.join(screenshotDir, file);
    
    fs.copyFile(srcPath, destPath, (err) => {
      if (err) {
        console.error(`ファイル移動エラー (${file}):`, err);
      } else {
        console.log(`✅ 移動完了: ${file} -> logs/screenshots/`);
        
        // 元ファイルを削除
        fs.unlink(srcPath, (unlinkErr) => {
          if (unlinkErr) {
            console.warn(`元ファイルの削除に失敗: ${file}`);
          }
        });
      }
    });
  });
});