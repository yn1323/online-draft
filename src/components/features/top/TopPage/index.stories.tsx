import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { TopPage } from './index';

const meta: Meta<typeof TopPage> = {
  title: 'Features/Top/TopPage',
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
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 基本要素が表示されていることを確認
    const createButton = await canvas.findByText('ルームを作成する');
    await expect(createButton).toBeInTheDocument();

    const joinButton = await canvas.findByText('参加');
    await expect(joinButton).toBeInTheDocument();
  },
};

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // モバイルでも基本要素が表示されていることを確認
    const createButton = await canvas.findByText('ルームを作成する');
    await expect(createButton).toBeInTheDocument();

    const joinButton = await canvas.findByText('参加');
    await expect(joinButton).toBeInTheDocument();
  },
};
