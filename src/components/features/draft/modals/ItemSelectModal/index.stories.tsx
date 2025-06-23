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

/**
 * 入力済み状態
 * アイテム名とコメントが入力されている状態
 */
export const WithInput: Story = {
  args: {
    isOpen: true,
    selectedItem: 'サンプルアイテム',
    comment: '良い選択です！',
  },
};

/**
 * モーダル閉じた状態
 * 通常は表示されない
 */
export const Closed: Story = {
  args: {
    isOpen: false,
    selectedItem: '',
    comment: '',
  },
};
