import type { Meta, StoryObj } from '@storybook/react';
import { FirebaseTest } from './index';

const meta: Meta<typeof FirebaseTest> = {
  title: 'Dev/FirebaseTest',
  component: FirebaseTest,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト表示
 * Firebase接続テスト機能
 */
export const Default: Story = {};

/**
 * ローディング状態
 * Firebase接続中の表示
 */
export const Loading: Story = {
  // NOTE: 実際にはloadingプロップを追加する際に対応
};
