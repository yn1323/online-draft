import type { Meta, StoryObj } from '@storybook/react';
import JoinHint from './';

const meta: Meta<typeof JoinHint> = {
  title: 'Features/Join/Components/JoinHint',
  component: JoinHint,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
