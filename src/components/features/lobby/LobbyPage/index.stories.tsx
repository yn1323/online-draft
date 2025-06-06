import { handlers } from '@/src/test-utils/msw';
import { withAuthenticatedUser } from '@/src/test-utils/mocks';
import { expect, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import LobbyPage from './index';

const meta: Meta<typeof LobbyPage> = {
  title: 'Features/Lobby/LobbyPage',
  component: LobbyPage,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: handlers,
    },
  },
  decorators: [withAuthenticatedUser],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groupId: 'ABC123',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ローディング完了を待つ（グループ名が表示されるまで）
    await expect(canvas.findByText('テストグループ 1')).resolves.toBeInTheDocument();

    // 基本的な要素の存在確認
    await expect(canvas.findByText('ABC123')).resolves.toBeInTheDocument();
    await expect(canvas.findByText(/ラウンド: 3/)).resolves.toBeInTheDocument();
    
    // ステップインジケーター
    await expect(canvas.findByText('ユーザー選択')).resolves.toBeInTheDocument();
    
    // 既存ユーザー一覧
    await expect(canvas.findByText('田中太郎')).resolves.toBeInTheDocument();
    await expect(canvas.findByText('山田花子')).resolves.toBeInTheDocument();
    await expect(canvas.findByText('登録済みのユーザーで参加')).resolves.toBeInTheDocument();
    
    // 新規ユーザー作成ボタン
    await expect(canvas.findByText('新しいユーザーを作成')).resolves.toBeInTheDocument();
    
    // ヘルプテキスト
    await expect(canvas.findByText(/既存のユーザーを選択するか、新しいユーザーを作成して/)).resolves.toBeInTheDocument();
    
    // グループ参加バッジ
    await expect(canvas.findByText('グループに参加')).resolves.toBeInTheDocument();
  },
};

export const LongGroupName: Story = {
  args: {
    groupId: 'XYZ789',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ローディング完了を待つ
    await expect(canvas.findByText('非常に長いグループ名のテストケースです！これは表示の確認用')).resolves.toBeInTheDocument();

    // 長いグループ名の表示確認
    await expect(canvas.findByText('XYZ789')).resolves.toBeInTheDocument();
    await expect(canvas.findByText(/ラウンド: 5/)).resolves.toBeInTheDocument();
    
    // 対応するユーザー
    await expect(canvas.findByText('Alice')).resolves.toBeInTheDocument();
  },
};

export const ShortGroupId: Story = {
  args: {
    groupId: '12',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ローディング完了を待つ
    await expect(canvas.findByText('短ID')).resolves.toBeInTheDocument();

    // 短いIDの表示確認
    await expect(canvas.findByText('12')).resolves.toBeInTheDocument();
    await expect(canvas.findByText(/ラウンド: 1/)).resolves.toBeInTheDocument();
    
    // 対応するユーザー
    await expect(canvas.findByText('Bob')).resolves.toBeInTheDocument();
  },
};

export const NonExistentGroup: Story = {
  args: {
    groupId: 'nonexistent',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // エラー状態の表示を待つ
    await expect(canvas.findByText('グループが見つかりません')).resolves.toBeInTheDocument();

    // エラー状態の確認
    await expect(canvas.findByText('グループID: nonexistent')).resolves.toBeInTheDocument();
    await expect(canvas.findByText(/指定されたグループID のグループは存在しないか/)).resolves.toBeInTheDocument();
  },
};
