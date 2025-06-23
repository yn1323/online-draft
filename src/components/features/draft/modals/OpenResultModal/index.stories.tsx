import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { OpenResultModal } from './index';

const meta: Meta<typeof OpenResultModal> = {
  title: 'features/draft/DraftModals/OpenResultModal',
  component: OpenResultModal,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClose: fn(),
    onExecuteOpenResult: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * モーダル開いた状態（デフォルト）
 * 開票確認のメッセージ表示
 */
export const Default: Story = {
  args: {
    isOpen: true,
  },
};
