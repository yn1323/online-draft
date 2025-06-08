export const mockParticipants = [
  {
    id: '1',
    name: 'たけし',
    avatar: '1',
    status: 'thinking' as const,
  },
  {
    id: '2',
    name: 'みさき',
    avatar: '2',
    status: 'entered' as const,
  },
  {
    id: '3',
    name: 'ひろし',
    avatar: '3',
    status: 'completed' as const,
  },
  {
    id: '4',
    name: 'あやか',
    avatar: '4',
    status: 'thinking' as const,
  },
];

export const mockPastRounds = [
  {
    roundNumber: 1,
    topic: '好きな食べ物',
    selections: [
      { userId: '1', userName: 'たけし', item: 'ラーメン', comment: '深夜に食べたくなる定番' },
      { userId: '2', userName: 'みさき', item: '寿司', comment: '新鮮なネタが最高' },
      { userId: '3', userName: 'ひろし', item: 'カレー' },
      { userId: '4', userName: 'あやか', item: 'ピザ', comment: 'みんなでシェアできる' },
    ],
  },
  {
    roundNumber: 2,
    topic: '好きなアニメ',
    selections: [
      { userId: '1', userName: 'たけし', item: '鬼滅の刃', comment: '映画も面白かった' },
      { userId: '2', userName: 'みさき', item: 'ワンピース', comment: '長いけど飽きない' },
      { userId: '3', userName: 'ひろし', item: '進撃の巨人' },
      { userId: '4', userName: 'あやか', item: '鬼滅の刃', comment: '被った！' },
    ],
  },
];

export const statusEmoji = {
  thinking: '⚫', // オフライン
  entered: '✏️', // 未入力（オンライン）
  completed: '✅', // 完了
};