import type { Meta, StoryObj } from '@storybook/react';
import { AvatarSelectionModal } from './index';

const meta: Meta<typeof AvatarSelectionModal> = {
  title: 'features/lobby/AvatarSelectionModal',
  component: AvatarSelectionModal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const handleConfirm = (userData: { name: string; avatar: string }) => {
  console.log('参加確定:', userData);
};

const handleClose = () => {
  console.log('モーダルを閉じる');
};

// 基本パターン（全アバター選択可能）
export const Default: Story = {
  args: {
    isOpen: true,
    onClose: handleClose,
    onConfirm: handleConfirm,
  },
};

// 使用済みアバターありパターン
export const WithUsedAvatars: Story = {
  args: {
    isOpen: true,
    onClose: handleClose,
    onConfirm: handleConfirm,
    usedAvatars: ['1', '3', '5', '7', '9', '11'],
  },
};
