import { signInAnonymously, signOut } from 'firebase/auth';
import { collection, deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

export async function testFirebaseConnection() {
  const testResults: {
    auth: boolean;
    firestore: boolean;
    error?: string;
  } = {
    auth: false,
    firestore: false,
  };

  try {
    console.log('🔥 Firebase接続テスト開始...');

    // 1. 匿名認証テスト
    console.log('📝 匿名認証テスト中...');
    const userCredential = await signInAnonymously(auth);
    console.log('✅ 匿名認証成功:', userCredential.user.uid);
    testResults.auth = true;

    // 2. Firestore読み書きテスト
    console.log('💾 Firestore読み書きテスト中...');
    const testDocRef = doc(collection(db, 'test'), 'connection-test');

    // 書き込みテスト
    await setDoc(testDocRef, {
      message: 'Hello Firebase!',
      timestamp: new Date(),
      userId: userCredential.user.uid,
    });
    console.log('✅ Firestore書き込み成功');

    // 読み込みテスト
    const docSnap = await getDoc(testDocRef);
    if (docSnap.exists()) {
      console.log('✅ Firestore読み込み成功:', docSnap.data());
      testResults.firestore = true;
    } else {
      throw new Error('テストドキュメントが見つかりません');
    }

    // クリーンアップ
    await deleteDoc(testDocRef);
    console.log('🧹 テストデータクリーンアップ完了');

    // ログアウト
    await signOut(auth);
    console.log('👋 ログアウト完了');

    console.log('🎉 Firebase接続テスト完了！すべて正常に動作しています');
    return testResults;
  } catch (error) {
    console.error('❌ Firebase接続テストエラー:', error);
    testResults.error =
      error instanceof Error ? error.message : 'Unknown error';
    return testResults;
  }
}
