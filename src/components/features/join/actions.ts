'use server';

export async function joinMeeting(meetingId: string) {
  // TODO: Firebase実装時にここで会議の存在確認
  // 現在は仮の実装で、どのIDでも成功とする

  if (!meetingId || meetingId.trim().length === 0) {
    return {
      success: false,
      error: '会議IDが入力されていません',
    };
  }

  // 仮の検証ロジック（実際はFirestoreで会議の存在確認）
  if (meetingId.length < 3) {
    return {
      success: false,
      error: '無効な会議IDです',
    };
  }

  // 成功レスポンス
  return {
    success: true,
    meetingId: meetingId,
  };
}
