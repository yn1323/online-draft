import type { Meta, StoryObj } from '@storybook/react';
import { CreateDraftModal } from '.';

const meta: Meta<typeof CreateDraftModal> = {
  title: 'Features/Entry/CreateDraftModal',
  component: CreateDraftModal,
  args: {
    isOpen: true,
    onClose: () => console.log('Close modal'),
    onCreateSuccess: (groupId) =>
      console.log(`Group created with ID: ${groupId}`),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const SP: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};
