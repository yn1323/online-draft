import { useSelection } from '@/src/hooks/firebase/selection/useSelection';
import { useAsyncOperation } from './common/useAsyncOperation';

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
 * 汎用useAsyncOperationを利用した軽量実装
 */
export const useDraftPicks = (
  groupId: string,
  userId: string,
  currentRound: number,
) => {
  const { createSelection } = useSelection();

  // アイテム選択処理を定義
  const selectItemOperation = async (item: string, comment?: string) => {
    // Firestoreに選択データを保存
    await createSelection(groupId, userId, item, comment || '', currentRound);
  };

  // ピック編集処理を定義
  const editPickOperation = async (pick: EditingPickType) => {
    // TODO: Firestore更新処理を実装
    console.log('ピック編集:', pick);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // モック処理
  };

  const {
    loading: selectLoading,
    error: selectError,
    execute: selectItem,
  } = useAsyncOperation(selectItemOperation);

  const {
    loading: editLoading,
    error: editError,
    execute: editPick,
  } = useAsyncOperation(editPickOperation);

  // 統合されたloading/error状態
  const loading = selectLoading || editLoading;
  const error = selectError || editError;

  return {
    loading,
    error,
    selectItem,
    editPick,
  };
};
