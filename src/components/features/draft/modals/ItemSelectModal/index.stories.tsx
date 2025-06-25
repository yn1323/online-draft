import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ItemSelectModal } from './index';

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
 * モーダル開いた状態（デフォルト）
 * アイテム選択用の入力フォーム表示
 */
export const Default: Story = {
  args: {
    isOpen: true,
  },
};

/**
 * デフォルト値ありのパターン
 * 編集時に使用
 */
export const WithDefaultValues: Story = {
  args: {
    isOpen: true,
    defaultItem: 'プロ野球選手',
    defaultComment: '速い球投げそう',
  },
};
