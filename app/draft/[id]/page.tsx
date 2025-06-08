'use client';

import { DraftPage } from '@/src/components/features/draft/DraftPage';
import { useParams } from 'next/navigation';
import { useState } from 'react';

// モックデータ
const mockParticipants = [
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

const mockPastRounds = [
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

export default function DraftPageRoute() {
  const params = useParams();
  const draftId = params?.id as string;
  const [currentUserSelection, setCurrentUserSelection] = useState('');

  const handleSubmitSelection = (selection: string, comment?: string) => {
    console.log('選択:', selection, 'コメント:', comment);
    setCurrentUserSelection(selection);
    // 実際の実装では、ここでFirestoreに保存
  };

  const handleUpdateSelections = (roundNumber: number, selections: {
    userId: string;
    userName: string;
    item: string;
    comment?: string;
  }[]) => {
    console.log('ラウンド', roundNumber, 'の選択を更新:', selections);
    // 実際の実装では、ここでFirestoreに保存
    // 今回はコンソールログのみ
  };

  return (
    <DraftPage
      roundNumber={3}
      totalRounds={5}
      groupName={`ドラフト会議 ${draftId}`}
      participants={mockParticipants}
      currentUserSelection={currentUserSelection}
      onSubmitSelection={handleSubmitSelection}
      pastRounds={mockPastRounds}
      currentRoundTopic="好きなゲーム"
      logCount={5}
      onUpdateSelections={handleUpdateSelections}
    />
  );
}