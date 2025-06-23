import type { Meta, StoryObj } from '@storybook/react';
import { DraftPage } from './index';

const meta: Meta<typeof DraftPage> = {
  title: 'Features/DraftPage',
  component: DraftPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 統合版ドラフトページ
 * ブラウザのサイズを変更してレスポンシブ動作を確認できます
 */
export const Default: Story = {};

/**
 * SP表示の強制確認用
 * ビューポートを小さく設定してSP版レイアウトを確認
 */
export const SPLayout: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
