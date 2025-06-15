import type { Meta, StoryObj } from '@storybook/react';
import { DraftPageSp } from '.';

const meta: Meta<typeof DraftPageSp> = {
  title: 'Features/DraftPage/sp',
  component: DraftPageSp,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト表示（ドラフト状況タブ）
 * 現在ラウンドの状況と過去ラウンドの結果を表示
 */
export const Default: Story = {};

/**
 * スマートフォン表示
 * モバイル端末での表示確認
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
