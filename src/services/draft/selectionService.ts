/**
 * ドラフト選択処理サービス
 */

export interface SelectionData {
  userId: string;
  userName: string;
  groupId: string;
  roundNumber: number;
  item: string;
  comment?: string;
  timestamp: Date;
  status: 'draft' | 'submitted' | 'confirmed';
}

export interface SubmitSelectionRequest {
  userId: string;
  userName: string;
  groupId: string;
  roundNumber: number;
  item: string;
  comment?: string;
}

export interface UpdateSelectionRequest {
  userId: string;
  groupId: string;
  roundNumber: number;
  updates: Partial<Pick<SelectionData, 'item' | 'comment' | 'status'>>;
}

/**
 * 選択提出
 */
export const submitSelection = async (_request: SubmitSelectionRequest): Promise<SelectionData> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * 選択更新
 */
export const updateSelection = async (request: UpdateSelectionRequest): Promise<SelectionData> => {
  // TODO: Firestore実装
  console.log('updateSelection called with:', request);
  throw new Error('Not implemented');
};

/**
 * ユーザー選択取得
 */
export const getUserSelection = async (
  _groupId: string,
  _roundNumber: number,
  _userId: string
): Promise<SelectionData | null> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * ラウンド選択一覧取得
 */
export const getRoundSelections = async (
  _groupId: string,
  _roundNumber: number
): Promise<SelectionData[]> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * ユーザー全選択取得
 */
export const getUserAllSelections = async (
  _groupId: string,
  _userId: string
): Promise<SelectionData[]> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * 選択削除
 */
export const deleteSelection = async (
  _groupId: string,
  _roundNumber: number,
  _userId: string
): Promise<void> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * 選択確認
 */
export const confirmSelection = async (
  groupId: string,
  roundNumber: number,
  userId: string
): Promise<SelectionData> => {
  return updateSelection({
    userId,
    groupId,
    roundNumber,
    updates: {
      status: 'confirmed',
    },
  });
};