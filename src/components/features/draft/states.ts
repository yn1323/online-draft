import type { Timestamp } from 'firebase/firestore';
import { atom } from 'jotai';

export const groupIdAtom = atom('');
export const currentUserIdAtom = atom('');
export const groupAtom = atom({ round: -1, groupName: '' });

type UserAtom = {
  id: string;
  name: string;
  avatar: string;
};
export const usersAtom = atom<UserAtom[]>([]);

type ChatAtom = {
  date: Timestamp;
  message: string;
  userId: string;
};
export const chatsAtom = atom<ChatAtom[]>([]);

type SelectionAtom = {
  item: string;
  comment: string;
  round: number;
  userId: string;
  groupId: string;
  randomNumber: number;
};
export const selectionsAtom = atom<SelectionAtom[]>([]);

type ConflictInfo = {
  round: number;
  item: string;
  conflictUsers: {
    userId: string;
    randomNumber: number;
    isWinner: boolean;
  }[];
  nextEditTarget?: {
    userId: string;
    round: number;
  };
};

type ConflictResolutionState = {
  conflicts: ConflictInfo[];
  currentEditTarget: {
    userId: string;
    round: number;
  } | null;
  isActive: boolean;
};

export const conflictResolutionAtom = atom<ConflictResolutionState>({
  conflicts: [],
  currentEditTarget: null,
  isActive: false,
});

/**
 * 重複指名解決の現在の編集対象を自動計算するderived atom
 */
export const currentEditTargetAtom = atom((get) => {
  const conflicts = get(conflictAnalysisAtom);
  const conflictResolution = get(conflictResolutionAtom);

  // 重複指名解決モードがアクティブでない場合はnull
  if (!conflictResolution.isActive) {
    return null;
  }

  // 未解決の重複指名から次の編集対象を決定
  for (const conflict of conflicts) {
    // まだ敗者が残っている重複指名があるかチェック
    const unresolvedLosers = conflict.conflictUsers.filter((u) => !u.isWinner);
    if (unresolvedLosers.length > 0) {
      // 最もrandomNumberが大きい敗者を返す
      const nextTarget = unresolvedLosers.reduce((max, user) =>
        user.randomNumber > max.randomNumber ? user : max,
      );
      return {
        userId: nextTarget.userId,
        round: conflict.round,
      };
    }
  }

  // すべての重複指名が解決済みの場合はnull
  return null;
});

/**
 * 重複指名解決モードを開始するアクション
 */
export const startConflictResolutionAtom = atom(null, (get, set) => {
  const conflicts = get(conflictAnalysisAtom);
  if (conflicts.length > 0) {
    set(conflictResolutionAtom, {
      conflicts,
      currentEditTarget: null, // currentEditTargetAtomで自動計算される
      isActive: true,
    });
  }
});

/**
 * 重複指名解決モードを終了するアクション
 */
export const endConflictResolutionAtom = atom(null, (_get, set) => {
  set(conflictResolutionAtom, {
    conflicts: [],
    currentEditTarget: null,
    isActive: false,
  });
});

/**
 * 重複指名を検出・解析するderived atom
 * selectionsとusersから重複指名状況を自動計算
 */
export const conflictAnalysisAtom = atom<ConflictInfo[]>((get) => {
  const selections = get(selectionsAtom);
  const { round: currentRound } = get(groupAtom);

  // 現在のラウンドより前のラウンドの選択のみを対象
  const pastSelections = selections.filter(
    (selection) => selection.round < currentRound,
  );

  // ラウンド別に重複指名を検出
  const conflictsByRound: Record<number, ConflictInfo[]> = {};

  // ラウンド別にグループ化
  const roundGroups = pastSelections.reduce(
    (acc, selection) => {
      if (!acc[selection.round]) {
        acc[selection.round] = [];
      }
      acc[selection.round].push(selection);
      return acc;
    },
    {} as Record<number, typeof pastSelections>,
  );

  // 各ラウンドで重複指名を検出
  Object.entries(roundGroups).forEach(([roundStr, roundSelections]) => {
    const round = Number(roundStr);

    // アイテム別にグループ化
    const itemGroups = roundSelections.reduce(
      (acc, selection) => {
        if (!acc[selection.item]) {
          acc[selection.item] = [];
        }
        acc[selection.item].push(selection);
        return acc;
      },
      {} as Record<string, typeof roundSelections>,
    );

    // 重複指名があるアイテムを抽出（複数人が同じアイテムを選択）
    Object.entries(itemGroups).forEach(([item, itemSelections]) => {
      if (itemSelections.length > 1) {
        // 重複指名発生！勝敗を決定
        const maxRandomNumber = Math.max(
          ...itemSelections.map((s) => s.randomNumber),
        );

        const conflictUsers = itemSelections.map((selection) => ({
          userId: selection.userId,
          randomNumber: selection.randomNumber,
          isWinner: selection.randomNumber === maxRandomNumber,
        }));

        // 敗者の中でrandomNumber最大の人を次の編集対象に
        const losers = conflictUsers.filter((u) => !u.isWinner);
        const nextEditUser = losers.reduce((max, user) =>
          user.randomNumber > max.randomNumber ? user : max,
        );

        const conflictInfo: ConflictInfo = {
          round,
          item,
          conflictUsers,
          nextEditTarget: {
            userId: nextEditUser.userId,
            round,
          },
        };

        if (!conflictsByRound[round]) {
          conflictsByRound[round] = [];
        }
        conflictsByRound[round].push(conflictInfo);
      }
    });
  });

  // 全重複指名を配列で返す
  return Object.values(conflictsByRound).flat();
});
