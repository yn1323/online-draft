/**
 * MSWハンドラーの統合エクスポート
 */

import { firebaseAuthHandlers } from './firebase-auth';
import { firestoreHandlers } from './firestore';

// 全ての共通ハンドラー
export const handlers = [...firestoreHandlers, ...firebaseAuthHandlers];

// カテゴリ別にもエクスポート（必要に応じて個別利用可能）
export { firebaseAuthHandlers } from './firebase-auth';
export { firestoreHandlers } from './firestore';
