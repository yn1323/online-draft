import type { Meta, StoryObj } from '@storybook/react';
import { FloatingActionButton } from './index';

const meta = {
  title: 'Features/Draft/DraftPage/Components/FloatingActionButton',
  component: FloatingActionButton,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FloatingActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => console.log('Floating action button clicked'),
  },
};

export const Positioned: Story = {
  args: {
    onClick: () => console.log('Floating action button clicked'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
