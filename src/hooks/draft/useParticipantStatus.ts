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
      console.log('📚 Storybook環境のためモック参加者ステータスを使用');
      setParticipants(getMockParticipants());
      setLoading(false);
      return;
    }

    // 本番環境: Firebase onSnapshot（リアルタイム監視）
    console.log('🔄 参加者ステータス監視開始...', { groupId, currentRound });
    setLoading(true);
    setError(null);

    try {
      const unsubscribe = subscribeGroupParticipantsStatus(
        groupId,
        (updatedParticipants) => {
          console.log(
            '👥 参加者ステータス更新:',
            updatedParticipants.length,
            '人',
          );
          setParticipants(updatedParticipants);
          setLoading(false);
        },
      );

      return () => {
        console.log('🛑 参加者ステータス監視停止');
        unsubscribe();
      };
    } catch (error) {
      console.error('❌ 参加者ステータス監視エラー:', error);
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
        console.log('📚 Storybook環境のためステータス更新をモック');
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

        console.log('🔄 ステータス更新開始:', { userId, status, currentRound });

        await updateParticipantStatus(userId, status, currentRound);

        console.log('✅ ステータス更新成功');
        return true;
      } catch (error) {
        console.error('❌ ステータス更新エラー:', error);
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
        console.log('📚 Storybook環境のため全ステータスリセットをモック');
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

        console.log('🔄 全ステータスリセット開始:', { groupId, newRound });

        await resetAllParticipantsStatus(groupId, newRound);

        console.log('✅ 全ステータスリセット成功');
        return true;
      } catch (error) {
        console.error('❌ 全ステータスリセットエラー:', error);
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
