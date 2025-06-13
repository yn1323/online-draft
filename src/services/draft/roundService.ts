/**
 * ドラフトラウンド操作サービス
 * Firebase Firestore リアルタイム同期対応
 */

import type { Round } from '@/src/types/draft';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../../lib/firebase';
import type { Groups } from '../../types/firestore';

export interface CreateRoundRequest {
  groupId: string;
  roundNumber: number;
  topic: string;
}

export interface UpdateRoundRequest {
  groupId: string;
  roundNumber: number;
  updates: Partial<Round>;
}

/**
 * Legacy互換のグループコレクション取得
 */
const getGroupCollection = () => {
  return collection(db, 'app', 'onlinedraft', 'group');
};

/**
 * グループドキュメント取得
 */
export const getGroupDocument = async (
  groupId: string,
): Promise<Groups | null> => {
  try {
    const groupRef = doc(getGroupCollection(), groupId);
    const groupSnap = await getDoc(groupRef);

    if (!groupSnap.exists()) {
      console.log('❌ グループが見つかりません:', groupId);
      return null;
    }

    const data = groupSnap.data();
    return {
      groupName: data.groupName,
      round: data.round || 1,
      finishedRound: data.finishedRound || [],
      deleteFlg: data.deleteFlg || false,
      createdAt: data.createdAt?.toDate() || new Date(),
      updatedAt: data.updatedAt?.toDate() || new Date(),
    };
  } catch (error) {
    console.error('❌ グループドキュメント取得エラー:', error);
    throw new Error('グループドキュメントの取得に失敗しました');
  }
};

/**
 * 現在のラウンド番号取得
 */
export const getCurrentRound = async (groupId: string): Promise<number> => {
  try {
    const groupDoc = await getGroupDocument(groupId);
    return groupDoc?.round || 1;
  } catch (error) {
    console.error('❌ 現在ラウンド取得エラー:', error);
    return 1; // フォールバック
  }
};

/**
 * ラウンド情報をFirestoreから取得（Legacy互換）
 */
export const getRound = async (
  groupId: string,
  roundNumber: number,
): Promise<Round | null> => {
  try {
    const groupDoc = await getGroupDocument(groupId);
    if (!groupDoc) {
      return null;
    }

    // Legacy形式: Groups.round が現在ラウンド、finishedRound が完了ラウンド
    const status = groupDoc.finishedRound.includes(roundNumber)
      ? 'completed'
      : groupDoc.round === roundNumber
        ? 'active'
        : 'waiting';

    return {
      id: `${groupId}-${roundNumber}`,
      groupId,
      roundNumber,
      topic: `ラウンド${roundNumber}のテーマ`, // TODO: テーマはGroups拡張で管理
      status,
      startTime:
        status === 'active' || status === 'completed' ? new Date() : undefined,
      endTime: status === 'completed' ? new Date() : undefined,
    };
  } catch (error) {
    console.error('❌ ラウンド取得エラー:', error);
    return null;
  }
};

/**
 * ラウンド一覧取得（Legacy互換）
 */
export const getRounds = async (groupId: string): Promise<Round[]> => {
  try {
    const groupDoc = await getGroupDocument(groupId);
    if (!groupDoc) {
      return [];
    }

    const rounds: Round[] = [];
    const currentRound = groupDoc.round;
    const finishedRounds = groupDoc.finishedRound;

    // 1から現在ラウンドまでのラウンド情報を構築
    for (let i = 1; i <= currentRound; i++) {
      const status = finishedRounds.includes(i)
        ? 'completed'
        : i === currentRound
          ? 'active'
          : 'waiting';

      rounds.push({
        id: `${groupId}-${i}`,
        groupId,
        roundNumber: i,
        topic: `ラウンド${i}のテーマ`, // TODO: テーマはGroups拡張で管理
        status,
        startTime:
          status === 'active' || status === 'completed'
            ? new Date()
            : undefined,
        endTime: status === 'completed' ? new Date() : undefined,
      });
    }

    console.log('📊 ラウンド一覧取得:', rounds.length, '件');
    return rounds;
  } catch (error) {
    console.error('❌ ラウンド一覧取得エラー:', error);
    return [];
  }
};

/**
 * ラウンドリアルタイム監視（Legacy互換）
 */
export const subscribeToRounds = (
  groupId: string,
  callback: (rounds: Round[]) => void,
): (() => void) => {
  try {
    const groupRef = doc(getGroupCollection(), groupId);

    const unsubscribe = onSnapshot(groupRef, async (snapshot) => {
      if (!snapshot.exists()) {
        console.log('❌ グループが見つかりません:', groupId);
        callback([]);
        return;
      }

      // グループドキュメントの変更を監視してラウンド情報を再構築
      const rounds = await getRounds(groupId);
      console.log('🔄 ラウンド情報更新:', rounds.length, '件');
      callback(rounds);
    });

    return unsubscribe;
  } catch (error) {
    console.error('❌ ラウンド監視エラー:', error);
    throw new Error('ラウンドの監視に失敗しました');
  }
};

/**
 * ラウンド作成（新規ラウンド開始）
 */
export const createRound = async (
  request: CreateRoundRequest,
): Promise<Round> => {
  try {
    console.log('🔄 ラウンド作成開始:', request);

    const groupRef = doc(getGroupCollection(), request.groupId);

    await updateDoc(groupRef, {
      round: request.roundNumber,
      updatedAt: new Date(),
    });

    const round: Round = {
      id: `${request.groupId}-${request.roundNumber}`,
      groupId: request.groupId,
      roundNumber: request.roundNumber,
      topic: request.topic,
      status: 'active',
      startTime: new Date(),
    };

    console.log('✅ ラウンド作成成功:', round);
    return round;
  } catch (error) {
    console.error('❌ ラウンド作成エラー:', error);
    throw new Error('ラウンドの作成に失敗しました');
  }
};

/**
 * ラウンド更新
 */
export const updateRound = async (
  request: UpdateRoundRequest,
): Promise<Round> => {
  try {
    console.log('🔄 ラウンド更新開始:', request);

    const groupRef = doc(getGroupCollection(), request.groupId);
    const groupDoc = await getGroupDocument(request.groupId);

    if (!groupDoc) {
      throw new Error('グループが見つかりません');
    }

    // ラウンド完了の場合はfinishedRoundに追加
    if (request.updates.status === 'completed') {
      const finishedRounds = [...groupDoc.finishedRound];
      if (!finishedRounds.includes(request.roundNumber)) {
        finishedRounds.push(request.roundNumber);
      }

      await updateDoc(groupRef, {
        finishedRound: finishedRounds,
        updatedAt: new Date(),
      });
    }

    // 更新されたラウンド情報を返す
    const updatedRound = await getRound(request.groupId, request.roundNumber);
    if (!updatedRound) {
      throw new Error('更新後のラウンド情報が取得できません');
    }

    console.log('✅ ラウンド更新成功:', updatedRound);
    return updatedRound;
  } catch (error) {
    console.error('❌ ラウンド更新エラー:', error);
    throw new Error('ラウンドの更新に失敗しました');
  }
};

/**
 * ラウンド開始
 */
export const startRound = async (
  groupId: string,
  roundNumber: number,
): Promise<Round> => {
  return updateRound({
    groupId,
    roundNumber,
    updates: {
      status: 'active',
      startTime: new Date(),
    },
  });
};

/**
 * ラウンド終了
 */
export const endRound = async (
  groupId: string,
  roundNumber: number,
): Promise<Round> => {
  return updateRound({
    groupId,
    roundNumber,
    updates: {
      status: 'completed',
      endTime: new Date(),
    },
  });
};
