/**
 * 選択データ保存・競合判定サービス
 * Legacy互換のFirestore操作
 */

import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../../lib/firebase';
import type { Selection, SelectionDocument } from '../../types/firestore';

/**
 * Legacy互換の選択コレクション取得
 */
const getSelectionCollection = () => {
  return collection(db, 'app', 'onlinedraft', 'selection');
};

/**
 * ユーザーの選択データを保存
 */
export const saveUserSelection = async (
  userId: string,
  groupId: string,
  round: number,
  item: string,
  comment = '',
): Promise<string> => {
  try {
    console.log('🔄 選択データ保存開始:', { userId, groupId, round, item });

    // randomNumber: 競合解決用（1-1000000のランダム値）
    const randomNumber = Math.floor(Math.random() * 1000000) + 1;

    const newSelection: Selection = {
      randomNumber,
      item,
      round,
      comment,
    };

    // ユーザーの選択ドキュメントを取得または作成
    const userSelectionRef = doc(getSelectionCollection(), userId);
    const userSelectionDoc = await getDoc(userSelectionRef);

    if (userSelectionDoc.exists()) {
      // 既存ドキュメントに新しい選択を追加
      await updateDoc(userSelectionRef, {
        selection: arrayUnion(newSelection),
      });
    } else {
      // 新規ドキュメントを作成
      const selectionDocument: SelectionDocument = {
        userId,
        selection: [newSelection],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await setDoc(userSelectionRef, selectionDocument);
    }

    console.log('✅ 選択データ保存成功:', newSelection);
    return randomNumber.toString();
  } catch (error) {
    console.error('❌ 選択データ保存エラー:', error);
    throw new Error('選択データの保存に失敗しました');
  }
};

/**
 * ラウンドの全選択データを取得
 */
export const getRoundSelections = async (
  groupId: string,
  round: number,
): Promise<
  {
    userId: string;
    userName: string;
    selection: Selection;
  }[]
> => {
  try {
    // まず、グループ内のユーザー一覧を取得
    const userQuery = query(
      collection(db, 'app', 'onlinedraft', 'user'),
      where('groupId', '==', groupId),
      where('deleteFlg', '==', false),
    );

    const userSnapshot = await getDocs(userQuery);
    const users = new Map<string, string>(); // userId -> userName

    userSnapshot.forEach((doc) => {
      const data = doc.data();
      users.set(doc.id, data.userName);
    });

    // 選択データを取得
    const selectionSnapshot = await getDocs(getSelectionCollection());
    const roundSelections: {
      userId: string;
      userName: string;
      selection: Selection;
    }[] = [];

    selectionSnapshot.forEach((doc) => {
      const data = doc.data() as SelectionDocument;
      const userId = doc.id;
      const userName = users.get(userId);

      if (userName && data.selection) {
        // 指定ラウンドの選択を抽出
        const roundSelection = data.selection.find((s) => s.round === round);
        if (roundSelection) {
          roundSelections.push({
            userId,
            userName,
            selection: roundSelection,
          });
        }
      }
    });

    console.log('📊 ラウンド選択データ取得:', roundSelections.length, '件');
    return roundSelections;
  } catch (error) {
    console.error('❌ ラウンド選択データ取得エラー:', error);
    throw new Error('選択データの取得に失敗しました');
  }
};

/**
 * 競合判定を実行
 */
export const checkConflicts = (
  selections: {
    userId: string;
    userName: string;
    selection: Selection;
  }[],
): {
  conflicts: Map<
    string,
    { userId: string; userName: string; selection: Selection }[]
  >;
  winners: Map<
    string,
    { userId: string; userName: string; selection: Selection }
  >;
} => {
  const itemGroups = new Map<
    string,
    { userId: string; userName: string; selection: Selection }[]
  >();

  // アイテム別にグループ化
  selections.forEach(({ userId, userName, selection }) => {
    const item = selection.item.toLowerCase().trim(); // 大文字小文字・空白を無視

    if (!itemGroups.has(item)) {
      itemGroups.set(item, []);
    }
    itemGroups.get(item)?.push({ userId, userName, selection });
  });

  const conflicts = new Map<
    string,
    { userId: string; userName: string; selection: Selection }[]
  >();
  const winners = new Map<
    string,
    { userId: string; userName: string; selection: Selection }
  >();

  // 競合判定とrandomNumberによる勝者決定
  itemGroups.forEach((group, item) => {
    if (group.length > 1) {
      // 競合発生
      conflicts.set(item, group);

      // randomNumberが最も大きいユーザーが勝者
      const winner = group.reduce((prev, current) =>
        current.selection.randomNumber > prev.selection.randomNumber
          ? current
          : prev,
      );

      winners.set(item, winner);
    } else {
      // 競合なし
      winners.set(item, group[0]);
    }
  });

  console.log('⚔️ 競合判定結果:', {
    conflicts: conflicts.size,
    winners: winners.size,
  });

  return { conflicts, winners };
};

/**
 * ユーザーの特定ラウンドの選択を取得
 */
export const getUserSelection = async (
  userId: string,
  round: number,
): Promise<Selection | null> => {
  try {
    const userSelectionRef = doc(getSelectionCollection(), userId);
    const userSelectionDoc = await getDoc(userSelectionRef);

    if (!userSelectionDoc.exists()) {
      return null;
    }

    const data = userSelectionDoc.data() as SelectionDocument;
    const roundSelection = data.selection?.find((s) => s.round === round);

    return roundSelection || null;
  } catch (error) {
    console.error('❌ ユーザー選択取得エラー:', error);
    throw new Error('ユーザー選択の取得に失敗しました');
  }
};

/**
 * ラウンドの選択データをリアルタイムで監視
 */
export const subscribeRoundSelections = (
  groupId: string,
  round: number,
  callback: (
    selections: {
      userId: string;
      userName: string;
      selection: Selection;
    }[],
  ) => void,
): (() => void) => {
  try {
    // ユーザー情報とselection情報を両方監視する必要があるため、
    // 簡単な実装として定期的にgetRoundSelectionsを呼ぶ
    const interval = setInterval(async () => {
      try {
        const selections = await getRoundSelections(groupId, round);
        callback(selections);
      } catch (error) {
        console.error('❌ 選択データ監視エラー:', error);
      }
    }, 2000); // 2秒ごとに更新

    return () => {
      clearInterval(interval);
    };
  } catch (error) {
    console.error('❌ 選択データ監視開始エラー:', error);
    throw new Error('選択データの監視に失敗しました');
  }
};
