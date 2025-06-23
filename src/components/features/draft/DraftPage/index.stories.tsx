import type { Meta, StoryObj } from '@storybook/react';
import {
  currentRound,
  mockChatMessages,
  mockParticipants,
  pastDraftResults,
} from '../mockData';
import { DraftPageInner } from './index';

const meta: Meta<typeof DraftPageInner> = {
  title: 'features/draft/DraftPage',
  component: DraftPageInner,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトのドラフトページ表示
 * 新しいhooks構造を使用した純粋なUIテスト
 */
export const Default: Story = {
  args: {
    currentRound,
    participants: mockParticipants,
    pastResults: pastDraftResults,
    chatMessages: mockChatMessages,
  },
};

/**
 * SP表示の強制確認用
 * ビューポートを小さく設定してSP版レイアウトを確認
 */
export const SPLayout: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
