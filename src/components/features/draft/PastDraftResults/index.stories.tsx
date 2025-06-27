import type { Meta, StoryObj } from '@storybook/react';
import { useHydrateAtoms } from 'jotai/utils';
import {
  groupAtom,
  selectionsAtom,
  usersAtom,
} from '../states';
import { PastDraftResults } from './index';

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

// テスト用過去結果データ（Round 1-3の結果）
const pastSelections: SelectionAtom[] = [
  // Round 1
  {
    item: '候補アイテムA',
    comment: '最高の選択！',
    round: 1,
    userId: 'user1',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: '候補アイテムB',
    comment: 'いい感じ',
    round: 1,
    userId: 'user2',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: '候補アイテムC',
    comment: 'これしかない',
    round: 1,
    userId: 'user3',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  // Round 2
  {
    item: '候補アイテムD',
    comment: '狙い通り',
    round: 2,
    userId: 'user3',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: '候補アイテムE',
    comment: 'まずまず',
    round: 2,
    userId: 'user1',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: '候補アイテムF',
    comment: 'いける',
    round: 2,
    userId: 'user2',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  // Round 3
  {
    item: '候補アイテムG',
    comment: 'これで決まり',
    round: 3,
    userId: 'user2',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: '候補アイテムH',
    comment: 'Perfect!',
    round: 3,
    userId: 'user3',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
  {
    item: '候補アイテムI',
    comment: 'やったー',
    round: 3,
    userId: 'user1',
    groupId: 'group1',
    randomNumber: Math.random(),
  },
];

const meta: Meta<typeof PastDraftResults> = {
  title: 'Features/draft/PastDraftResults',
  component: PastDraftResults,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * PC版スタイル（テーブル形式）
 * 過去3ラウンドの結果を表示
 */
export const PC: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [usersAtom, testUsers],
        [groupAtom, { round: 4, groupName: 'テストグループ' }], // 現在Round4なので1-3が過去結果
        [selectionsAtom, pastSelections],
      ]}
    >
      <div style={{ width: '800px', height: '400px' }}>
        <PastDraftResults
          variant="pc"
          onEditClick={(round, playerId, playerName, pick, category) =>
            console.log('編集クリック:', {
              round,
              playerId,
              playerName,
              pick,
              category,
            })
          }
        />
      </div>
    </HydrateAtoms>
  ),
};

/**
 * SP版スタイル（アコーディオン形式）
 * 過去3ラウンドの結果を表示
 */
export const SP: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [usersAtom, testUsers],
        [groupAtom, { round: 4, groupName: 'テストグループ' }],
        [selectionsAtom, pastSelections],
      ]}
    >
      <div style={{ width: '400px', height: '500px' }}>
        <PastDraftResults
          variant="sp"
          onEditClick={(round, playerId, playerName, pick, category) =>
            console.log('編集クリック:', {
              round,
              playerId,
              playerName,
              pick,
              category,
            })
          }
        />
      </div>
    </HydrateAtoms>
  ),
};

/**
 * 過去結果なし（Round 1の状態）
 * まだ開票が始まっていない状態
 */
export const NoResults: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [usersAtom, testUsers],
        [groupAtom, { round: 1, groupName: 'テストグループ' }], // Round1なので過去結果なし
        [selectionsAtom, []], // 空のselections
      ]}
    >
      <div style={{ width: '400px', height: '300px' }}>
        <PastDraftResults variant="sp" />
      </div>
    </HydrateAtoms>
  ),
};
