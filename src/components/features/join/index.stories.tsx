import type { Meta, StoryObj } from '@storybook/react';
import { JoinPage } from '.';

const meta: Meta<typeof JoinPage> = {
  title: 'Features/Join/JoinPage',
  component: JoinPage,
  parameters: {
    layout: 'fullscreen',
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