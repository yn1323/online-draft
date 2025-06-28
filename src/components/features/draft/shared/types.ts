/**
 * draft機能の共通型定義
 * 重複する型定義を統合し、一貫性を保つ
 */

/**
 * 参加者の基底型
 * avatar型はstring（Firestore準拠）で統一
 */
export type BaseParticipant = {
  id: string;
  name: string;
  avatar: string;
};
