import type { LogMessage } from './LogItem';

export const mockLogs: LogMessage[] = [
  {
    id: '1',
    type: 'system',
    timestamp: new Date('2025-01-08T10:00:00'),
    content: 'Round 1 開始',
  },
  {
    id: '2',
    type: 'chat',
    timestamp: new Date('2025-01-08T10:01:00'),
    content: 'よろしくお願いします！',
    user: { id: 'user1', name: 'ユーザー1', avatar: '1' },
    isMyMessage: true,
  },
  {
    id: '3',
    type: 'chat',
    timestamp: new Date('2025-01-08T10:01:30'),
    content: 'こちらこそ！頑張りましょう',
    user: { id: 'user2', name: '山田太郎', avatar: '2' },
    isMyMessage: false,
  },
  {
    id: '4',
    type: 'draft_result',
    timestamp: new Date('2025-01-08T10:02:00'),
    content: '山田太郎が選択を完了しました',
  },
  {
    id: '5',
    type: 'chat',
    timestamp: new Date('2025-01-08T10:02:10'),
    content: 'うーん、悩ましい...',
    user: { id: 'user1', name: 'ユーザー1', avatar: '1' },
    isMyMessage: true,
  },
  {
    id: '6',
    type: 'selection_change',
    timestamp: new Date('2025-01-08T10:02:30'),
    content: 'ユーザー1が選択を変更しました',
    selectionChange: {
      roundNumber: 2,
      before: '山田太郎',
      after: '田中花子',
      userName: 'ユーザー1',
    },
  },
  {
    id: '7',
    type: 'chat',
    timestamp: new Date('2025-01-08T10:02:45'),
    content: 'やっぱり変更！',
    user: { id: 'user2', name: '山田太郎', avatar: '2' },
    isMyMessage: false,
  },
];
