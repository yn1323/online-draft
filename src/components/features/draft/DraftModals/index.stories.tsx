import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { DraftModals } from './index';

const meta: Meta<typeof DraftModals> = {
  title: 'Features/draft/DraftModals',
  component: DraftModals,
  parameters: {
    layout: 'centered',
  },
  args: {
    selectedItem: '',
    comment: '',
    onSelectedItemChange: fn(),
    onCommentChange: fn(),
    onItemSelectClose: fn(),
    onItemSelect: fn(),
    editingPick: null,
    onEditClose: fn(),
    onEditSave: fn(),
    onEditingPickUpdate: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * アイテム選択モーダル表示
 */
export const ItemSelectModal: Story = {
  args: {
    isItemSelectModalOpen: true,
    isEditModalOpen: false,
  },
};

/**
 * ピック編集モーダル表示
 */
export const EditModal: Story = {
  args: {
    isItemSelectModalOpen: false,
    isEditModalOpen: true,
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
 * モーダル非表示状態
 */
export const Default: Story = {
  args: {
    isItemSelectModalOpen: false,
    isEditModalOpen: false,
  },
};
