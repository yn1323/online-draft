import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CreateDraftModal } from './index';

const meta = {
  title: 'Features/Top/Components/CreateDraftModal',
  component: CreateDraftModal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CreateDraftModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    isLoading: false,
    onClose: fn(),
    onCreateDraft: async (groupName: string) => {
      console.log('Creating draft:', groupName);
      // Storybookでは2秒待機してからresolve
      await new Promise((resolve) => setTimeout(resolve, 2000));
    },
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const Closed: Story = {
  args: {
    ...Default.args,
    isOpen: false,
  },
};
