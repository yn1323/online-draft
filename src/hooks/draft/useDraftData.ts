/**
 * DraftPage統合データ管理フック
 * Firebase Firestore リアルタイム同期統合
 */

import type { ChatMessage, Round } from '@/src/types/draft';
import { useCallback, useEffect, useState } from 'react';
import { getCurrentRound } from '../../services/draft/roundService';
import { subscribeToGroupState } from '../../services/realtime/realtimeService';
import type { UserDocument } from '../../types/firestore';
import { useParticipantStatus } from './useParticipantStatus';

export interface DraftData {
  // ラウンド情報
  rounds: Round[];
  currentRound: Round | null;
  currentRoundNumber: number;

  // 参加者情報
  participants: UserDocument[];

  // チャット情報
  messages: ChatMessage[];

  // 状態
  loading: boolean;
  error: string | null;
}

export interface UseDraftDataOptions {
  groupId: string;
  enableRealtime?: boolean;
}

/**
 * DraftPage全体のデータ統合管理フック
 */
export const useDraftData = ({
  groupId,
  enableRealtime = true,
}: UseDraftDataOptions): DraftData => {
  const [rounds, setRounds] = useState<Round[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [participants, setParticipants] = useState<UserDocument[]>([]);
  const [currentRoundNumber, setCurrentRoundNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 現在ラウンドの取得
  const currentRound =
    rounds.find((round) => round.roundNumber === currentRoundNumber) || null;

  // 既存のuseParticipantStatusとの統合
  const {
    participants: participantStatusData,
    loading: participantLoading,
    error: participantError,
  } = useParticipantStatus(groupId, currentRoundNumber);

  // 初期データ取得
  useEffect(() => {
    const initializeData = async () => {
      try {
        setLoading(true);
        setError(null);

        // 現在ラウンド番号を取得
        const currentRoundNum = await getCurrentRound(groupId);
        setCurrentRoundNumber(currentRoundNum);

        console.log('📊 DraftData初期化完了:', { groupId, currentRoundNum });
      } catch (err) {
        console.error('❌ DraftData初期化エラー:', err);
        setError(
          err instanceof Error ? err.message : 'データの取得に失敗しました',
        );
      } finally {
        setLoading(false);
      }
    };

    if (groupId) {
      initializeData();
    }
  }, [groupId]);

  // リアルタイム同期
  useEffect(() => {
    if (!enableRealtime || !groupId) {
      return;
    }

    console.log('🔄 DraftDataリアルタイム同期開始:', groupId);

    const subscription = subscribeToGroupState(groupId, (state) => {
      console.log('📡 DraftData統合更新:', {
        rounds: state.rounds.length,
        participants: state.participants.length,
        messages: state.messages.length,
      });

      setRounds(state.rounds);
      setParticipants(state.participants);
      setMessages(state.messages);

      // 現在ラウンド番号の更新
      if (state.rounds.length > 0) {
        const activeRound = state.rounds.find((r) => r.status === 'active');
        if (activeRound) {
          setCurrentRoundNumber(activeRound.roundNumber);
        }
      }
    });

    return () => {
      console.log('🔌 DraftDataリアルタイム同期終了:', groupId);
      subscription.unsubscribe();
    };
  }, [groupId, enableRealtime]);

  // 参加者データとの統合（useParticipantStatusの結果を優先）
  useEffect(() => {
    if (participantStatusData.length > 0) {
      setParticipants(participantStatusData);
    }
  }, [participantStatusData]);

  // エラー統合
  const combinedError = error || participantError;
  const combinedLoading = loading || participantLoading;

  return {
    // ラウンド情報
    rounds,
    currentRound,
    currentRoundNumber,

    // 参加者情報（useParticipantStatusから優先取得）
    participants,

    // チャット情報
    messages,

    // 状態
    loading: combinedLoading,
    error: combinedError,
  };
};
