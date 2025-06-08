/**
 * ドラフト選択処理サービス
 */

import type { Selection, SubmitSelectionRequest, UpdateSelectionRequest } from '@/src/types/draft';

/**
 * 選択提出
 */
export const submitSelection = async (_request: SubmitSelectionRequest): Promise<Selection> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * 選択更新
 */
export const updateSelection = async (request: UpdateSelectionRequest): Promise<Selection> => {
  // TODO: Firestore実装
  console.log('updateSelection called with:', request);
  throw new Error('Not implemented');
};

/**
 * ユーザー選択取得
 */
export const getUserSelection = async (
  _groupId: string,
  _roundNumber: number,
  _userId: string
): Promise<Selection | null> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * ラウンド選択一覧取得
 */
export const getRoundSelections = async (
  _groupId: string,
  _roundNumber: number
): Promise<Selection[]> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * ユーザー全選択取得
 */
export const getUserAllSelections = async (
  _groupId: string,
  _userId: string
): Promise<Selection[]> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * 選択削除
 */
export const deleteSelection = async (
  _groupId: string,
  _roundNumber: number,
  _userId: string
): Promise<void> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * 選択確認
 */
export const confirmSelection = async (
  _groupId: string,
  _roundNumber: number,
  _userId: string
): Promise<Selection> => {
  return updateSelection({
    selectionId: '', // TODO: 実際のselectionIdを取得
    item: '',
    comment: '',
  });
};