'use client';

import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import {
  checkRoundCompletion,
  resetAllParticipantsStatus,
  subscribeGroupParticipantsStatus,
  updateParticipantStatus,
} from '@/src/services/draft/participantService';
import type { ParticipantStatus, UserDocument } from '@/src/types/firestore';
import { useCallback, useEffect, useState } from 'react';

/**
 * 参加者ステータス管理フック
 */
export const useParticipantStatus = (groupId: string, currentRound: number) => {
  const [participants, setParticipants] = useState<UserDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);

  // Storybook用のモックデータ
  const getMockParticipants = useCallback((): UserDocument[] => {
    return [
      {
        userId: 'user1',
        groupId,
        userName: '田中太郎',
        avatar: '/img/1.png',
        deleteFlg: false,
        status: 'thinking',
        currentRound,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 'user2',
        groupId,
        userName: '山田花子',
        avatar: '/img/2.png',
        deleteFlg: false,
        status: 'entered',
        currentRound,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 'user3',
        groupId,
        userName: '佐藤次郎',
        avatar: '/img/3.png',
        deleteFlg: false,
        status: 'completed',
        currentRound,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }, [groupId, currentRound]);

  // 参加者ステータスのリアルタイム監視
  useEffect(() => {
    if (!groupId) {
      return;
    }

    // Storybook環境: モックデータを使用
    if (isStorybookEnvironment()) {
      setParticipants(getMockParticipants());
      setLoading(false);
      return;
    }

    // 本番環境: Firebase onSnapshot（リアルタイム監視）
    setLoading(true);
    setError(null);

    try {
      const unsubscribe = subscribeGroupParticipantsStatus(
        groupId,
        (updatedParticipants) => {
          setParticipants(updatedParticipants);
          setLoading(false);
        },
      );

      return () => {
        unsubscribe();
      };
    } catch (error) {
      setError('参加者ステータスの取得に失敗しました');
      setLoading(false);
    }
  }, [groupId, currentRound, getMockParticipants]);

  /**
   * 自分のステータスを更新
   */
  const updateMyStatus = useCallback(
    async (userId: string, status: ParticipantStatus): Promise<boolean> => {
      if (!userId) {
        setError('ユーザーIDが不正です');
        return false;
      }

      // Storybook環境: モック処理
      if (isStorybookEnvironment()) {
        setUpdating(true);
        await new Promise((resolve) => setTimeout(resolve, 500));

        // モックデータのステータスを更新
        setParticipants((prev) =>
          prev.map((p) =>
            p.userId === userId ? { ...p, status, currentRound } : p,
          ),
        );

        setUpdating(false);
        return true;
      }

      // 本番環境: Firebase実行
      try {
        setUpdating(true);
        setError(null);


        await updateParticipantStatus(userId, status, currentRound);

        return true;
      } catch (error) {
        setError('ステータスの更新に失敗しました');
        return false;
      } finally {
        setUpdating(false);
      }
    },
    [currentRound],
  );

  /**
   * 全参加者のステータスをリセット（新ラウンド開始時）
   */
  const resetAllStatus = useCallback(
    async (newRound: number): Promise<boolean> => {
      // Storybook環境: モック処理
      if (isStorybookEnvironment()) {
        setUpdating(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // モックデータを全て thinking にリセット
        setParticipants((prev) =>
          prev.map((p) => ({
            ...p,
            status: 'thinking' as ParticipantStatus,
            currentRound: newRound,
          })),
        );

        setUpdating(false);
        return true;
      }

      // 本番環境: Firebase実行
      try {
        setUpdating(true);
        setError(null);


        await resetAllParticipantsStatus(groupId, newRound);

        return true;
      } catch (error) {
        setError('ステータスのリセットに失敗しました');
        return false;
      } finally {
        setUpdating(false);
      }
    },
    [groupId],
  );

  /**
   * ラウンド完了チェック
   */
  const isRoundCompleted = useCallback((): boolean => {
    return checkRoundCompletion(participants, currentRound);
  }, [participants, currentRound]);

  /**
   * 特定のユーザーのステータスを取得
   */
  const getUserStatus = useCallback(
    (userId: string): ParticipantStatus => {
      const user = participants.find((p) => p.userId === userId);
      return user?.status || 'thinking';
    },
    [participants],
  );

  /**
   * ステータス別の参加者数を取得
   */
  const getStatusCounts = useCallback(() => {
    const thinking = participants.filter((p) => p.status === 'thinking').length;
    const entered = participants.filter((p) => p.status === 'entered').length;
    const completed = participants.filter(
      (p) => p.status === 'completed',
    ).length;

    return { thinking, entered, completed, total: participants.length };
  }, [participants]);

  return {
    participants,
    loading,
    error,
    updating,
    updateMyStatus,
    resetAllStatus,
    isRoundCompleted,
    getUserStatus,
    getStatusCounts,
  };
};
