/**
 * ドラフトラウンド操作サービス
 */

export interface RoundData {
  roundNumber: number;
  topic: string;
  status: 'waiting' | 'active' | 'completed';
  startTime?: Date;
  endTime?: Date;
  selections: {
    userId: string;
    userName: string;
    item: string;
    comment?: string;
    timestamp: Date;
  }[];
}

export interface CreateRoundRequest {
  groupId: string;
  roundNumber: number;
  topic: string;
}

export interface UpdateRoundRequest {
  groupId: string;
  roundNumber: number;
  updates: Partial<RoundData>;
}

/**
 * ラウンド作成
 */
export const createRound = async (_request: CreateRoundRequest): Promise<RoundData> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * ラウンド取得
 */
export const getRound = async (_groupId: string, _roundNumber: number): Promise<RoundData | null> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * ラウンド更新
 */
export const updateRound = async (request: UpdateRoundRequest): Promise<RoundData> => {
  // TODO: Firestore実装
  console.log('updateRound called with:', request);
  throw new Error('Not implemented');
};

/**
 * ラウンド一覧取得
 */
export const getRounds = async (_groupId: string): Promise<RoundData[]> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * ラウンド開始
 */
export const startRound = async (groupId: string, roundNumber: number): Promise<RoundData> => {
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
export const endRound = async (groupId: string, roundNumber: number): Promise<RoundData> => {
  return updateRound({
    groupId,
    roundNumber,
    updates: {
      status: 'completed',
      endTime: new Date(),
    },
  });
};