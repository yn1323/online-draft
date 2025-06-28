import type { Meta, StoryObj } from '@storybook/react';
import { useHydrateAtoms } from 'jotai/utils';
import {
  currentRound,
  mockChatMessages,
  mockParticipants,
  pastDraftResults,
} from '../mockData';
import {
  chatsAtom,
  currentUserIdAtom,
  groupAtom,
  groupIdAtom,
  selectionsAtom,
  usersAtom,
} from '../states';
import { DraftPageInner } from './index';

// Jotai公式推奨パターン: Provider + useHydrateAtoms
// biome-ignore lint/suspicious/noExplicitAny: storybook
type AtomTuple = [any, any];

const HydrateAtoms = ({
  initialValues,
  children,
}: {
  initialValues: AtomTuple[];
  children: React.ReactNode;
}) => {
  useHydrateAtoms(initialValues);
  return children;
};

// mockDataからatom形式にデータ変換
const testUsers = mockParticipants.map((p) => ({
  id: p.id,
  name: p.name,
  avatar: p.avatar,
}));

const testChats = mockChatMessages.map((msg) => ({
  date: {
    toDate: () => new Date(),
    toMillis: () => Date.now(),
  } as unknown as { toDate: () => Date; toMillis: () => number },
  message: msg.content,
  userId: msg.userName === '田中太郎' ? 'user1' : 'user2',
}));

const testSelections = pastDraftResults.flatMap((round) =>
  round.picks.map((pick) => ({
    item: pick.item,
    comment: pick.comment,
    round: round.round,
    userId: pick.userId,
    groupId: 'test-group-id',
    randomNumber: Math.random(),
  })),
);

const testGroup = {
  round: currentRound,
  groupName: 'テストドラフト会議',
};

const meta: Meta<typeof DraftPageInner> = {
  title: 'features/draft/DraftPage',
  component: DraftPageInner,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトのドラフトページ表示
 * Jotai atomを使用した状態管理テスト
 */
export const Default: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [groupIdAtom, 'test-group-id'],
        [currentUserIdAtom, 'user1'],
        [groupAtom, testGroup],
        [usersAtom, testUsers],
        [chatsAtom, testChats],
        [selectionsAtom, testSelections],
      ]}
    >
      <DraftPageInner />
    </HydrateAtoms>
  ),
};

/**
 * SP表示の強制確認用
 * ビューポートを小さく設定してSP版レイアウトを確認
 */
export const SPLayout: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [groupIdAtom, 'test-group-id'],
        [currentUserIdAtom, 'user1'],
        [groupAtom, testGroup],
        [usersAtom, testUsers],
        [chatsAtom, testChats],
        [selectionsAtom, testSelections],
      ]}
    >
      <DraftPageInner />
    </HydrateAtoms>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
