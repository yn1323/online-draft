import type { Meta, StoryObj } from '@storybook/react';
import { LobbyPage } from './index';

const meta: Meta<typeof LobbyPage> = {
  title: 'Features/LobbyPage',
  component: LobbyPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト表示
 * 参加者3人の状態
 */
export const Default: Story = {};

/**
 * 参加者満員状態
 * 8人が参加した状態のシミュレーション
 */
export const FullParticipants: Story = {
  // NOTE: 実際には参加者データをpropsで渡すようになった際に対応
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
};
