import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { ThemeToggle } from '.';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Layout/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Expanded: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // 少し待ってから設定アイコンをクリック
    await new Promise((resolve) => setTimeout(resolve, 500));
    const settingsButton = await canvas.findByLabelText('テーマ設定を開く');
    await userEvent.click(settingsButton);
  },
};
