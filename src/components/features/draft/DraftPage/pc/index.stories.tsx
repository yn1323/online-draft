import type { Meta, StoryObj } from '@storybook/react';
import { DraftPagePC } from './index';

const meta: Meta<typeof DraftPagePC> = {
  title: 'Features/DraftPage/pc',
  component: DraftPagePC,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
