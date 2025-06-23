import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { EditModal } from './index';

const meta: Meta<typeof EditModal> = {
  title: 'features/draft/DraftModals/EditModal',
  component: EditModal,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClose: fn(),
    onSave: fn(),
    onEditingPickUpdate: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * モーダル開いた状態（デフォルト）
 * ピック編集用の入力フォーム表示
 */
export const Default: Story = {
  args: {
    isOpen: true,
    editingPick: {
      round: 3,
      playerId: '1',
      playerName: '田中太郎',
      currentPick: '候補アイテムA',
      category: 'タイプA',
    },
  },
};

/**
 * 空の状態での編集
 * アイテム名とカテゴリが空の状態
 */
export const EmptyPick: Story = {
  args: {
    isOpen: true,
    editingPick: {
      round: 1,
      playerId: '2',
      playerName: '佐藤花子',
      currentPick: '',
      category: '',
    },
  },
};

/**
 * モーダル閉じた状態
 * 通常は表示されない
 */
export const Closed: Story = {
  args: {
    isOpen: false,
    editingPick: null,
  },
};
