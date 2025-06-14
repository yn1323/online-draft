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
 * デフォルト表示（スマートフォン）
 * タブ形式でリストとチャットを切り替え
 */
export const Default: Story = {};

/**
 * 取得リストタブ表示
 * 参加者の獲得状況を表示
 */
export const AcquisitionListTab: Story = {
  // NOTE: 実際にはタブの状態をpropsで制御できるようになったら対応
};

/**
 * チャットタブ表示
 * チャットとシステムログを表示
 */
export const ChatTab: Story = {
  // NOTE: 実際にはタブの状態をpropsで制御できるようになったら対応
};

/**
 * 入力待機状態
 * アイテム入力待ちの状態
 */
export const InputWaiting: Story = {};

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
