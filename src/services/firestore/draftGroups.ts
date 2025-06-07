/**
 * ドラフトグループ関連のFirestore操作 (Legacy 互換)
 */

import { auth, db } from '@/src/lib/firebase';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

/**
 * Legacy 互換型定義 (一時的にここに配置)
 */
type Groups = {
  groupName: string;
  round: number;
  finishedRound: number[];
  deleteFlg: boolean;
};

const COLLECTIONS = {
  BASE: ['app', 'onlinedraft'],
  GROUP: 'group',
} as const;

/**
 * ドラフトグループ作成 (Legacy 互換)
 */
export type CreateDraftGroupInput = {
  groupName: string;
};

export type CreateDraftGroupResult = {
  groupId: string;
};

export async function createDraftGroup(
  input: CreateDraftGroupInput,
): Promise<CreateDraftGroupResult> {
  // 認証チェック
  if (!auth.currentUser) {
    throw new Error('ログインが必要です');
  }

  try {
    // グループデータ作成 (Legacy 互換)
    const groupData: Groups = {
      groupName: input.groupName,
      round: 1, // 初期ラウンド
      finishedRound: [], // 完了したラウンドは空
      deleteFlg: false,
    };

    // Firestoreに保存 (Legacy パス)
    const docRef = await addDoc(
      collection(db, ...COLLECTIONS.BASE, COLLECTIONS.GROUP),
      groupData,
    );

    return {
      groupId: docRef.id,
    };
  } catch (error) {
    console.error('❌ ドラフトグループ作成エラー:', error);
    throw error;
  }
}

/**
 * グループIDからグループ情報を取得 (Legacy 互換)
 */
export async function getDraftGroup(
  groupId: string,
): Promise<(Groups & { id: string }) | null> {
  try {
    const docRef = doc(db, ...COLLECTIONS.BASE, COLLECTIONS.GROUP, groupId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as Groups & { id: string };
    }

    return null;
  } catch (error) {
    console.error('❌ グループ取得エラー:', error);
    throw error;
  }
}
