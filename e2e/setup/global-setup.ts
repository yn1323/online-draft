import { type FullConfig } from '@playwright/test';

/**
 * グローバルセットアップ
 * E2Eテスト実行前の環境準備
 */
async function globalSetup(config: FullConfig) {
  // 環境変数の設定
  process.env.NODE_ENV = 'test';
  
  // Jotaiの複数インスタンス警告を抑制
  process.env.JOTAI_SKIP_WARNING = 'true';
  
  console.log('🚀 E2Eテスト環境を準備しています...');
  
  // Firebase Emulatorの起動が必要な場合はここで実装
  // await startFirebaseEmulator();
  
  return async () => {
    console.log('🧹 E2Eテスト環境をクリーンアップしています...');
    // クリーンアップ処理
  };
}

export default globalSetup;