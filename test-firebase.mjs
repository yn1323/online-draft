// Firebase接続テスト用スクリプト
import { testFirebaseConnection } from './src/lib/firebase-test.js';

(async () => {
  console.log('🚀 Firebase接続テストを開始します...\n');
  
  const results = await testFirebaseConnection();
  
  console.log('\n📊 テスト結果:');
  console.log('認証:', results.auth ? '✅ 成功' : '❌ 失敗');
  console.log('Firestore:', results.firestore ? '✅ 成功' : '❌ 失敗');
  
  if (results.error) {
    console.log('エラー:', results.error);
    process.exit(1);
  } else {
    console.log('\n🎉 Firebase統合準備完了！');
    process.exit(0);
  }
})();
