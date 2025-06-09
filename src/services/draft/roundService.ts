/**
 * ドラフトラウンド操作サービス
 */

import type {
  CreateGroupRequest,
  JoinGroupRequest,
  Round,
} from '@/src/types/draft';

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
 * ラウンド作成
 */
export const createRound = async (
  _request: CreateRoundRequest,
): Promise<Round> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * ラウンド取得
 */
export const getRound = async (
  _groupId: string,
  _roundNumber: number,
): Promise<Round | null> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * ラウンド更新
 */
export const updateRound = async (
  request: UpdateRoundRequest,
): Promise<Round> => {
  // TODO: Firestore実装
  console.log('updateRound called with:', request);
  throw new Error('Not implemented');
};

/**
 * ラウンド一覧取得
 */
export const getRounds = async (_groupId: string): Promise<Round[]> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
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
