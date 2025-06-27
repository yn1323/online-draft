import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useHydrateAtoms } from 'jotai/utils';
import { ItemSelectModal } from './index';
import { selectionsAtom, usersAtom } from '../../states';

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

// テストデータ
const testUsers = [
  { id: 'user1', name: 'タナカ', avatar: '1' },
  { id: 'user2', name: 'サトウ', avatar: '2' },
];

const existingSelections = [
  {
    item: 'プロ野球選手',
    comment: '速い球投げそう',
    round: 1,
    userId: 'user1',
    groupId: 'group1',
    randomNumber: 0.5,
  },
];

const meta: Meta<typeof ItemSelectModal> = {
  title: 'features/draft/modals/ItemSelectModal',
  component: ItemSelectModal,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClose: fn(),
    onSubmit: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 新規選択モード
 * userId/roundがセットされているが、既存の選択がない状態
 */
export const NewSelection: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [usersAtom, testUsers],
        [selectionsAtom, []],
      ]}
    >
      <ItemSelectModal
        isOpen={true}
        onClose={fn()}
        onSubmit={fn()}
        userId="user1"
        round={1}
      />
    </HydrateAtoms>
  ),
};

/**
 * 編集モード
 * 既存の選択があり、編集コンテキストが表示される状態
 */
export const EditMode: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [usersAtom, testUsers],
        [selectionsAtom, existingSelections],
      ]}
    >
      <ItemSelectModal
        isOpen={true}
        onClose={fn()}
        onSubmit={fn()}
        userId="user1"
        round={1}
      />
    </HydrateAtoms>
  ),
};

/**
 * 未設定状態
 * userId/roundが未設定の状態（デフォルトタイトル表示）
 */
export const Default: Story = {
  render: () => (
    <HydrateAtoms
      initialValues={[
        [usersAtom, testUsers],
        [selectionsAtom, []],
      ]}
    >
      <ItemSelectModal
        isOpen={true}
        onClose={fn()}
        onSubmit={fn()}
        userId={null}
        round={null}
      />
    </HydrateAtoms>
  ),
};
