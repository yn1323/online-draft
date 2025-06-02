// Storybook用のモック実装
export async function joinMeeting(meetingId: string) {
  // モック実装
  if (!meetingId || meetingId.trim().length === 0) {
    return {
      success: false,
      error: '会議IDが入力されていません',
    };
  }

  if (meetingId.length < 3) {
    return {
      success: false,
      error: '無効な会議IDです',
    };
  }

  return {
    success: true,
    meetingId: meetingId,
  };
}