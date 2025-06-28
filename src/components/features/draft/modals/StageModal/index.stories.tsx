import type { Meta, StoryObj } from '@storybook/react';
import { useHydrateAtoms } from 'jotai/utils';
import { groupAtom, selectionsAtom, usersAtom } from '../../states';
import { StageModal } from './index';

const meta: Meta<typeof StageModal> = {
  title: 'Features/draft/modals/StageModal',
  component: StageModal,
  parameters: {
    screenshot: {
      skip: true,
    },
    layout: 'centered',
  },
  tags: ['autodocs', 'skip-test'],
};

export default meta;
type Story = StoryObj<typeof StageModal>;

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
  { id: 'user2', name: '佐藤花子', avatar: '2' },
  { id: 'user3', name: '鈴木一郎', avatar: '3' },
  { id: 'user4', name: '高橋次郎', avatar: '4' },
  { id: 'user5', name: '山田美咲', avatar: '5' },
  { id: 'user6', name: '中村翔太', avatar: '6' },
];

// テスト用現在ラウンドの選択データ
const currentRoundSelections: SelectionAtom[] = [
  {
    item: '大谷翔平',
    comment: '絶対的エース！',
    round: 4,
    userId: 'user1',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: '大谷翔平',
    comment: '私も大谷！',
    round: 4,
    userId: 'user2',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: '山田太郎',
    comment: '堅実な選択',
    round: 4,
    userId: 'user3',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: '佐々木朗希',
    comment: '完全試合の男',
    round: 4,
    userId: 'user4',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: '村上宗隆',
    comment: 'ホームラン王',
    round: 4,
    userId: 'user5',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: 'ダルビッシュ有',
    comment: '変化球の魔術師',
    round: 4,
    userId: 'user6',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
];

/**
 * カードめくり演出パターン
 */
export const Card: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [usersAtom, testUsers],
        [groupAtom, { round: 4, groupName: 'テストグループ' }],
        [selectionsAtom, currentRoundSelections],
      ]}
    >
      <StageModal
        isOpen={true}
        variant="card"
        onClose={() => console.log('Modal closed')}
      />
    </HydrateAtoms>
  ),
  parameters: {
    // テスト用の長いタイムアウト
    test: {
      timeout: 30000, // 30秒
    },
    // アニメーション完了を待つ
    chromatic: {
      delay: 8000, // 8秒待機（カードめくりアニメーション用）
    },
  },
};

/**
 * タイピング演出パターン
 */
export const Typing: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [usersAtom, testUsers],
        [groupAtom, { round: 4, groupName: 'テストグループ' }],
        [selectionsAtom, currentRoundSelections],
      ]}
    >
      <StageModal
        isOpen={true}
        variant="typing"
        onClose={() => console.log('Modal closed')}
      />
    </HydrateAtoms>
  ),
  parameters: {
    // テスト用の長いタイムアウト
    test: {
      timeout: 30000, // 30秒
    },
    // アニメーション完了を待つ
    chromatic: {
      delay: 6000, // 6秒待機（タイピングアニメーション用）
    },
  },
};

/**
 * スロットマシン演出パターン
 */
export const SlotMachine: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [usersAtom, testUsers],
        [groupAtom, { round: 4, groupName: 'テストグループ' }],
        [selectionsAtom, currentRoundSelections],
      ]}
    >
      <StageModal
        isOpen={true}
        variant="slot"
        onClose={() => console.log('Modal closed')}
      />
    </HydrateAtoms>
  ),
  parameters: {
    // テスト用の長いタイムアウト
    test: {
      timeout: 30000, // 30秒
    },
    // アニメーション完了を待つ
    chromatic: {
      delay: 10000, // 10秒待機（スロットマシンアニメーション用）
    },
  },
};

/**
 * 3人競合テストケース
 * 3人が同じアイテムを選択した場合の演出確認
 * randomNumber最大の人が勝者（緑）、他の2人が敗者（赤）
 */
export const ThreeWayConflict: Story = {
  render: () => {
    const conflictSelections: SelectionAtom[] = [
      {
        item: '競合アイテム',
        comment: 'コメントA',
        round: 2, // 現在のラウンド
        userId: 'user1',
        groupId: 'group1',
        randomNumber: 100, // 最大値（勝者）
      },
      {
        item: '競合アイテム',
        comment: 'コメントB',
        round: 2, // 現在のラウンド
        userId: 'user2',
        groupId: 'group1',
        randomNumber: 50, // 中間値（敗者）
      },
      {
        item: '競合アイテム',
        comment: 'コメントC',
        round: 2, // 現在のラウンド
        userId: 'user3',
        groupId: 'group1',
        randomNumber: 30, // 最小値（敗者）
      },
    ];

    return (
      <HydrateAtoms
        initialValues={[
          [usersAtom, testUsers],
          [groupAtom, { round: 3, groupName: 'テストグループ' }], // 現在Round3、表示はRound2の結果
          [selectionsAtom, conflictSelections],
        ]}
      >
        <StageModal isOpen={true} onClose={() => {}} variant="card" />
      </HydrateAtoms>
    );
  },
  parameters: {
    chromatic: {
      delay: 3000, // 3秒待機（カード演出用）
    },
  },
};
