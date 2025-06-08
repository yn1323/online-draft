import type { Meta, StoryObj } from '@storybook/react';
import { ChatLogSection } from './index';

const meta = {
  title: 'Features/Draft/DraftPage/Components/ChatLogSection',
  component: ChatLogSection,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ChatLogSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'ユーザーチャット、システム通知、ドラフト結果、選択変更履歴を時系列で統合表示するログセクション',
      },
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
