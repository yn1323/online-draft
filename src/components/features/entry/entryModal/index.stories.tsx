import type { Meta, StoryObj } from '@storybook/react';
import { CreateDraftModal } from '.';

const meta: Meta<typeof CreateDraftModal> = {
  title: 'Features/Entry/CreateDraftModal',
  component: CreateDraftModal,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    isOpen: true,
    onClose: () => console.log('Close modal'),
    onCreateSuccess: (groupId) => console.log(`Group created with ID: ${groupId}`),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// PC表示
export const PC: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

// スマホ表示
export const SP: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// 基本パターン
export const Basic: Story = {};