import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
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
 * チャットタブ表示
 * チャット機能の表示確認
 */
export const Chat: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // チャットタブをクリック
    const chatTab = canvas.getByRole('tab', { name: 'チャット' });
    await userEvent.click(chatTab);
  },
};
