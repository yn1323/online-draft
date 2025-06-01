import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from '.';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Layout/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};