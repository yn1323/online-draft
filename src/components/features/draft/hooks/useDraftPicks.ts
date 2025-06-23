import { useState } from 'react';
import type { EditingPickType } from '../DraftModals';

/**
 * ドラフトピック選択・編集のFirestore処理hooks
 */
export const useDraftPicks = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * アイテムを選択してFirestoreに保存
   */
  const selectItem = async (item: string, comment?: string) => {
    setLoading(true);
    setError(null);

    try {
      // TODO: Firestore保存処理を実装
      console.log('アイテム選択:', { item, comment });
      await new Promise((resolve) => setTimeout(resolve, 1000)); // モック処理
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'アイテム選択に失敗しました',
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * ピックを編集してFirestoreに保存
   */
  const editPick = async (pick: EditingPickType) => {
    setLoading(true);
    setError(null);

    try {
      // TODO: Firestore更新処理を実装
      console.log('ピック編集:', pick);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // モック処理
    } catch (err) {
      setError(err instanceof Error ? err.message : 'ピック編集に失敗しました');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    selectItem,
    editPick,
  };
};
