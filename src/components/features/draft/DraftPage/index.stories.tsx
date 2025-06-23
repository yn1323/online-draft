import type { Meta, StoryObj } from '@storybook/react';
import { DraftPage } from './index';

const meta: Meta<typeof DraftPage> = {
  title: 'Features/DraftPage/Unified',
  component: DraftPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
統合版ドラフトページコンポーネント

- **PC版**: 2カラムレイアウト（ドラフト状況 + チャット）
- **SP版**: タブ切り替えレイアウト（ドラフト状況 ⇄ チャット）
- **レスポンシブ**: useBreakpointValueで自動切り替え

機能:
- 現在ラウンドの選択状況表示
- 過去のドラフト結果表示（PC: テーブル、SP: アコーディオン）
- チャット機能
- アイテム選択・編集モーダル
        `,
      },
    },
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
 * PC表示の強制確認用
 * ビューポートを大きく設定してPC版レイアウトを確認
 */
export const PCLayout: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    docs: {
      description: {
        story: 'PC版レイアウト（2カラム）の表示確認用',
      },
    },
  },
};

/**
 * SP表示の強制確認用
 * ビューポートを小さく設定してSP版レイアウトを確認
 */
export const SPLayout: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'SP版レイアウト（タブ切り替え）の表示確認用',
      },
    },
  },
};
