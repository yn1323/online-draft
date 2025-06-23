import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ItemSelectModal } from './index';

const meta: Meta<typeof ItemSelectModal> = {
  title: 'features/draft/DraftModals/ItemSelectModal',
  component: ItemSelectModal,
  parameters: {
    layout: 'centered',
  },
  args: {
    onSelectedItemChange: fn(),
    onCommentChange: fn(),
    onClose: fn(),
    onSelect: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * モーダル開いた状態（デフォルト）
 * アイテム選択用の入力フォーム表示
 */
export const Default: Story = {
  args: {
    isOpen: true,
    selectedItem: '',
    comment: '',
  },
};
