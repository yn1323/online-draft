import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from '.';
import { within, userEvent } from '@storybook/test';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Layout/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'デフォルトでは最小化された状態で表示されます。設定アイコンをクリックすると展開されます。',
      },
    },
  },
};

export const Expanded: Story = {
  parameters: {
    docs: {
      description: {
        story: '展開された状態のテーマトグルボタンです。×ボタンで最小化できます。',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // 少し待ってから設定アイコンをクリック
    await new Promise(resolve => setTimeout(resolve, 500));
    const settingsButton = await canvas.findByLabelText('テーマ設定を開く');
    await userEvent.click(settingsButton);
  },
};