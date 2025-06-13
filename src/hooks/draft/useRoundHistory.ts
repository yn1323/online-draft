/**
 * ラウンド履歴管理フック
 * Firebase Firestore リアルタイム同期対応
 */

import type { Round } from '@/src/types/draft';
import { useCallback, useEffect, useState } from 'react';
import {
  getRounds,
  subscribeToRounds,
} from '../../services/draft/roundService';

export interface RoundHistoryData {
  rounds: Round[];
  currentRound: Round | null;
  pastRounds: Round[];
  loading: boolean;
  error: string | null;

  // 操作関数
  refreshRounds: () => Promise<void>;
  getRoundByNumber: (roundNumber: number) => Round | null;
}

export interface UseRoundHistoryOptions {
  groupId: string;
  enableRealtime?: boolean;
}

/**
 * ラウンド履歴管理フック
 */
export const useRoundHistory = ({
  groupId,
  enableRealtime = true,
}: UseRoundHistoryOptions): RoundHistoryData => {
  const [rounds, setRounds] = useState<Round[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 計算されたデータ
  const currentRound =
    rounds.find((round) => round.status === 'active') || null;
  const pastRounds = rounds
    .filter((round) => round.status === 'completed')
    .sort((a, b) => a.roundNumber - b.roundNumber);

  // ラウンド番号での検索
  const getRoundByNumber = useCallback(
    (roundNumber: number): Round | null => {
      return rounds.find((round) => round.roundNumber === roundNumber) || null;
    },
    [rounds],
  );

  // ラウンド一覧の手動更新
  const refreshRounds = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const roundsData = await getRounds(groupId);
      setRounds(roundsData);

      console.log('🔄 ラウンド履歴手動更新:', roundsData.length, '件');
    } catch (err) {
      console.error('❌ ラウンド履歴更新エラー:', err);
      setError(
        err instanceof Error ? err.message : 'ラウンド履歴の更新に失敗しました',
      );
    } finally {
      setLoading(false);
    }
  }, [groupId]);

  // 初期データ取得
  useEffect(() => {
    if (groupId) {
      refreshRounds();
    }
  }, [groupId, refreshRounds]);

  // リアルタイム同期
  useEffect(() => {
    if (!enableRealtime || !groupId) {
      return;
    }

    console.log('🔄 ラウンド履歴リアルタイム同期開始:', groupId);

    const unsubscribe = subscribeToRounds(groupId, (roundsData) => {
      console.log('📡 ラウンド履歴更新:', {
        total: roundsData.length,
        current: roundsData.filter((r) => r.status === 'active').length,
        completed: roundsData.filter((r) => r.status === 'completed').length,
      });

      setRounds(roundsData);
      setLoading(false);
      setError(null);
    });

    return () => {
      console.log('🔌 ラウンド履歴リアルタイム同期終了:', groupId);
      unsubscribe();
    };
  }, [groupId, enableRealtime]);

  return {
    rounds,
    currentRound,
    pastRounds,
    loading,
    error,

    // 操作関数
    refreshRounds,
    getRoundByNumber,
  };
};
