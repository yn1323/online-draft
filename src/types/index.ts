/**
 * 型定義統合エクスポート
 */

// 基盤型
export * from './common/base';

// 機能別型 (重複を避けて個別にインポート推奨)
// export * from './firestore';
// export * from './draft';
// export * from './auth';
// export * from './ui';

// 互換性維持のため主要型のみエクスポート
export type { Groups } from './firestore';