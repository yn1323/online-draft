import type { SelectionItemType } from '@/src/hooks/firebase/selection/useSelection';
import type { ParticipantType } from '../mockData';
import { useAsyncOperation } from './common/useAsyncOperation';

/**
 * ドラフト開票のFirestore処理hooks
 * 汎用useAsyncOperationを利用した軽量実装
 */
export const useDraftResult = (
  participants: ParticipantType[],
  selections: SelectionItemType[],
  currentRound: number,
) => {
  // 開票処理を定義
  const executeOpenResultOperation = async () => {
    // TODO: 実際の開票処理を実装
    // - 現在のラウンドを終了
    // - 次のラウンドを開始
    // - 未入力参加者の処理
    console.log('開票処理実行');
    await new Promise((resolve) => setTimeout(resolve, 2000)); // モック処理
  };

  const {
    loading,
    error,
    execute: executeOpenResult,
  } = useAsyncOperation(executeOpenResultOperation);

  /**
   * 参加者の入力状況をチェック
   * 純粋な計算処理のため、useAsyncOperationは使用しない
   */
  const checkParticipantStatus = async () => {
    const completedCount = selections.filter(
      (s) => s.round === currentRound,
    ).length;
    const allCompleted = completedCount === participants.length;
    const pendingCount = participants.length - completedCount;

    return {
      allCompleted,
      pendingCount,
    };
  };

  return {
    loading,
    error,
    executeOpenResult,
    checkParticipantStatus,
  };
};
