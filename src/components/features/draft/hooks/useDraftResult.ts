import { useState } from 'react';
import type { SelectionItemType } from '@/src/hooks/firebase/selection/useSelection';
import type { ParticipantType } from '../mockData';

/**
 * ドラフト開票のFirestore処理hooks
 */
export const useDraftResult = (
  participants: ParticipantType[],
  selections: SelectionItemType[],
  currentRound: number,
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * 開票処理を実行してFirestoreを更新
   */
  const executeOpenResult = async () => {
    setLoading(true);
    setError(null);

    try {
      // TODO: 実際の開票処理を実装
      // - 現在のラウンドを終了
      // - 次のラウンドを開始
      // - 未入力参加者の処理
      console.log('開票処理実行');
      await new Promise((resolve) => setTimeout(resolve, 2000)); // モック処理
    } catch (err) {
      setError(err instanceof Error ? err.message : '開票処理に失敗しました');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * 参加者の入力状況をチェック
   */
  const checkParticipantStatus = async () => {
    try {
      const completedCount = selections.filter(
        (s) => s.round === currentRound,
      ).length;
      const allCompleted = completedCount === participants.length;
      const pendingCount = participants.length - completedCount;

      return {
        allCompleted,
        pendingCount,
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : '状況確認に失敗しました');
      throw err;
    }
  };

  return {
    loading,
    error,
    executeOpenResult,
    checkParticipantStatus,
  };
};
