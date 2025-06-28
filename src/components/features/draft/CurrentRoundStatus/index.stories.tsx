import type { Meta, StoryObj } from '@storybook/react';
import { useHydrateAtoms } from 'jotai/utils';
import {
  currentUserIdAtom,
  groupAtom,
  selectionsAtom,
  usersAtom,
} from '../states';
import { CurrentRoundStatus } from './index';

// Storybook用の型定義（statesファイルの型と同じ）
type UserAtom = {
  id: string;
  name: string;
  avatar: string;
};

type SelectionAtom = {
  item: string;
  comment: string;
  round: number;
  userId: string;
  groupId: string;
  randomNumber: number;
};

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

// テストユーザー
const testUsers: UserAtom[] = [
  { id: 'user1', name: '田中太郎', avatar: '1' },
  { id: 'user2', name: '山田花子', avatar: '3' },
  { id: 'user3', name: '佐藤次郎', avatar: '5' },
];

// テスト用選択データ
const testSelections: SelectionAtom[] = [
  {
    item: '候補A (タイプB)',
    comment: 'いい選択です',
    round: 4,
    userId: 'user1',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: '候補B (タイプA)',
    comment: 'これもいいね',
    round: 4,
    userId: 'user2',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  // user3は選択中（データなし）
];

// 全員選択完了用のテストデータ
const allSelectedSelections: SelectionAtom[] = [
  {
    item: '候補A (タイプB)',
    comment: 'いい選択です',
    round: 4,
    userId: 'user1',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: '候補B (タイプA)',
    comment: 'これもいいね',
    round: 4,
    userId: 'user2',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: '候補C (タイプC)',
    comment: '最高の選択',
    round: 4,
    userId: 'user3',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
];

const meta: Meta<typeof CurrentRoundStatus> = {
  title: 'Features/draft/CurrentRoundStatus',
  component: CurrentRoundStatus,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト表示（SP版）
 * 一部のユーザーが選択完了している状態
 */
export const Default: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [usersAtom, testUsers],
        [currentUserIdAtom, 'user1'],
        [groupAtom, { round: 4, groupName: 'テストグループ' }],
        [selectionsAtom, testSelections],
      ]}
    >
      <CurrentRoundStatus
        variant="sp"
        onItemSelect={() => console.log('アイテム選択')}
        onOpenResult={() => console.log('開票')}
      />
    </HydrateAtoms>
  ),
};

/**
 * PC版表示
 * デスクトップでの表示確認用
 */
export const PCVersion: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [usersAtom, testUsers],
        [currentUserIdAtom, 'user1'],
        [groupAtom, { round: 4, groupName: 'テストグループ' }],
        [selectionsAtom, testSelections],
      ]}
    >
      <CurrentRoundStatus
        variant="pc"
        onItemSelect={() => console.log('アイテム選択')}
        onOpenResult={() => console.log('開票')}
      />
    </HydrateAtoms>
  ),
};

/**
 * 全員選択完了
 * 全参加者が選択を完了した状態
 */
export const AllSelected: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [usersAtom, testUsers],
        [currentUserIdAtom, 'user1'],
        [groupAtom, { round: 4, groupName: 'テストグループ' }],
        [selectionsAtom, allSelectedSelections],
      ]}
    >
      <CurrentRoundStatus
        variant="sp"
        onOpenResult={() => console.log('開票')}
      />
    </HydrateAtoms>
  ),
};
