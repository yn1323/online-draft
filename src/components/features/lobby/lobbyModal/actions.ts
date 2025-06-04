'use server';

export async function createDraft(_groupName: string) {
  // TODO: Firebase実装時にここでグループ作成処理
  // 現在は仮のランダムIDを返す
  const tempGroupId = Math.random().toString(36).substring(7);

  return {
    success: true,
    groupId: tempGroupId,
  };
}
