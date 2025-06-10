/**
 * 参加者ステータス管理サービス
 * Day 5: 参加者ステータス管理機能
 */

import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../../lib/firebase';
import type { ParticipantStatus, UserDocument } from '../../types/firestore';

/**
 * Legacy互換のユーザーコレクション取得
 */
const getUserCollection = () => {
  return collection(db, 'app', 'onlinedraft', 'user');
};

/**
 * 参加者のステータスを更新
 */
export const updateParticipantStatus = async (
  userId: string,
  status: ParticipantStatus,
  currentRound: number,
): Promise<void> => {
  try {
    console.log('🔄 参加者ステータス更新開始:', {
      userId,
      status,
      currentRound,
    });

    // ユーザードキュメントのリファレンスを取得
    const userRef = doc(getUserCollection(), userId);

    await updateDoc(userRef, {
      status,
      currentRound,
      updatedAt: new Date(),
    });

    console.log('✅ 参加者ステータス更新成功:', {
      userId,
      status,
      currentRound,
    });
  } catch (error) {
    console.error('❌ 参加者ステータス更新エラー:', error);
    throw new Error('参加者ステータスの更新に失敗しました');
  }
};

/**
 * グループ内の全参加者ステータスを取得
 */
export const getGroupParticipantsStatus = async (
  groupId: string,
): Promise<UserDocument[]> => {
  try {
    const q = query(
      getUserCollection(),
      where('groupId', '==', groupId),
      where('deleteFlg', '==', false),
    );

    const querySnapshot = await getDocs(q);
    const participants: UserDocument[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      participants.push({
        userId: doc.id,
        groupId: data.groupId,
        userName: data.userName,
        avatar: data.avatar,
        deleteFlg: data.deleteFlg,
        status: data.status || 'thinking',
        currentRound: data.currentRound || 1,
      });
    });

    console.log('📊 グループ参加者ステータス取得:', participants.length, '人');
    return participants;
  } catch (error) {
    console.error('❌ 参加者ステータス取得エラー:', error);
    throw new Error('参加者ステータスの取得に失敗しました');
  }
};

/**
 * グループ内の参加者ステータスをリアルタイムで監視
 */
export const subscribeGroupParticipantsStatus = (
  groupId: string,
  callback: (participants: UserDocument[]) => void,
): (() => void) => {
  try {
    const q = query(
      getUserCollection(),
      where('groupId', '==', groupId),
      where('deleteFlg', '==', false),
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const participants: UserDocument[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data();
        participants.push({
          userId: doc.id,
          groupId: data.groupId,
          userName: data.userName,
          avatar: data.avatar,
          deleteFlg: data.deleteFlg,
          status: data.status || 'thinking',
          currentRound: data.currentRound || 1,
        });
      });

      console.log('🔄 参加者ステータス更新:', participants.length, '人');
      callback(participants);
    });

    return unsubscribe;
  } catch (error) {
    console.error('❌ 参加者ステータス監視エラー:', error);
    throw new Error('参加者ステータスの監視に失敗しました');
  }
};

/**
 * ラウンド移行時に全参加者のステータスをリセット
 */
export const resetAllParticipantsStatus = async (
  groupId: string,
  newRound: number,
): Promise<void> => {
  try {
    console.log('🔄 全参加者ステータスリセット開始:', { groupId, newRound });

    const participants = await getGroupParticipantsStatus(groupId);

    // 全参加者のステータスを thinking にリセット
    const updatePromises = participants.map((participant) =>
      updateParticipantStatus(participant.userId || '', 'thinking', newRound),
    );

    await Promise.all(updatePromises);

    console.log(
      '✅ 全参加者ステータスリセット完了:',
      participants.length,
      '人',
    );
  } catch (error) {
    console.error('❌ 全参加者ステータスリセットエラー:', error);
    throw new Error('参加者ステータスのリセットに失敗しました');
  }
};

/**
 * ラウンド完了チェック（全員が 'completed' になったか）
 */
export const checkRoundCompletion = (
  participants: UserDocument[],
  currentRound: number,
): boolean => {
  const currentRoundParticipants = participants.filter(
    (p) => p.currentRound === currentRound,
  );

  if (currentRoundParticipants.length === 0) {
    return false;
  }

  const allCompleted = currentRoundParticipants.every(
    (p) => p.status === 'completed',
  );

  console.log('🏁 ラウンド完了チェック:', {
    currentRound,
    participants: currentRoundParticipants.length,
    allCompleted,
  });

  return allCompleted;
};
