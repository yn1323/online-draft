import { Button, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { OptionsModal } from './index';

const meta: Meta<typeof OptionsModal> = {
  title: 'Features/Draft/DraftPage/Components/OptionsModal',
  component: OptionsModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ドラフト会議のオプション設定モーダル',
      },
    },
  },
  argTypes: {
    onClose: { action: 'close' },
    onLeaveDraft: { action: 'leave draft' },
    onOpenSettings: { action: 'open settings' },
    onOpenHelp: { action: 'open help' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// プロップスの型定義
interface WrapperProps {
  isOpen?: boolean;
  onLeaveDraft?: () => void;
  onOpenSettings?: () => void;
  onOpenHelp?: () => void;
}

// 基本的なコンポーネント（ラッパー）
const OptionsModalWrapper = (args: WrapperProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

  return (
    <VStack gap={4}>
      <Button onClick={() => setIsOpen(true)}>オプションを開く</Button>
      <OptionsModal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onLeaveDraft={() => {
          console.log('ドラフトを退出');
          args.onLeaveDraft?.();
          setIsOpen(false);
        }}
        onOpenSettings={() => {
          console.log('設定を開く');
          args.onOpenSettings?.();
          setIsOpen(false);
        }}
        onOpenHelp={() => {
          console.log('ヘルプを開く');
          args.onOpenHelp?.();
          setIsOpen(false);
        }}
      />
    </VStack>
  );
};

export const Default: Story = {
  render: (args) => <OptionsModalWrapper {...args} />,
  args: {},
};

// 常に開いた状態（開発用）
export const AlwaysOpen: Story = {
  args: {
    isOpen: true,
  },
};
