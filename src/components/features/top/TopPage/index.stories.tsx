import type { Meta, StoryObj } from '@storybook/react';
import { TopPage } from './index';

const meta: Meta<typeof TopPage> = {
  title: 'Features/TopPage',
  component: TopPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト表示
 * ルーム作成とルーム参加の両機能を含む基本レイアウト
 */
export const Default: Story = {};

/**
 * スマートフォン表示
 * 縦並びレイアウトでの表示確認
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
