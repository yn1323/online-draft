import { useState } from 'react';
import { useSelection } from '@/src/hooks/firebase/selection/useSelection';

// 編集対象ピックの型定義
export type EditingPickType = {
  round: number;
  playerId: string;
  playerName: string;
  currentPick: string;
  category: string;
};

/**
 * ドラフトピック選択・編集のFirestore処理hooks
 */
export const useDraftPicks = (
  groupId: string,
  userId: string,
  currentRound: number,
) => {
  const { createSelection } = useSelection();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * アイテムを選択してFirestoreに保存
   */
  const selectItem = async (item: string, comment?: string) => {
    setLoading(true);
    setError(null);

    try {
      // Firestoreに選択データを保存
      await createSelection(groupId, userId, item, comment || '', currentRound);
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
