import type { Meta, StoryObj } from '@storybook/react';
import { DraftPagePC } from './index';

const meta: Meta<typeof DraftPagePC> = {
  title: 'Features/DraftPage/PC',
  component: DraftPagePC,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'PC版ドラフト画面',
};
