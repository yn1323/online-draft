import { withLobbyMock, withMockAppRouter } from '@/src/test-utils/mocks';
import { handlers } from '@/src/test-utils/msw';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
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
  decorators: [
    withMockAppRouter,
    // Lobbyページ用のモック（Firebase認証済み、SessionUserなし）
    withLobbyMock({
      firebaseAuthenticated: true,
      groupExists: true,
      sessionUser: null, // SessionUserなしでユーザー選択画面を表示
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groupId: 'ABC123',
  },
  decorators: [
    // SessionUserなしでユーザー選択画面を表示
    withLobbyMock({
      firebaseAuthenticated: true,
      groupExists: true,
      sessionUser: null,
    }),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ローディング完了を待つ（グループ名が表示されるまで）
    expect(await canvas.findByText('テストグループ 1')).toBeInTheDocument();

    // 基本的な要素の存在確認
    expect(await canvas.findByText('ABC123')).toBeInTheDocument();
    expect(await canvas.findByText(/ラウンド: 3/)).toBeInTheDocument();

    // ステップインジケーター
    expect(await canvas.findByText('ユーザー選択')).toBeInTheDocument();

    // 既存ユーザー一覧
    expect(await canvas.findByText('田中太郎')).toBeInTheDocument();
    expect(await canvas.findByText('山田花子')).toBeInTheDocument();
    expect(
      await canvas.findByText('登録済みのユーザーで参加'),
    ).toBeInTheDocument();

    // 新規ユーザー作成ボタン
    expect(
      await canvas.findByText('新しいユーザーとして参加'),
    ).toBeInTheDocument();

    // ヘルプテキスト
    expect(
      await canvas.findByText(
        /既存のユーザーを選択するか、新しいユーザーを作成して/,
      ),
    ).toBeInTheDocument();

    // グループ参加バッジ
    expect(await canvas.findByText('グループに参加')).toBeInTheDocument();
  },
};

export const LongGroupName: Story = {
  args: {
    groupId: 'XYZ789',
  },
  decorators: [
    withLobbyMock({
      firebaseAuthenticated: true,
      groupExists: true,
      sessionUser: null,
    }),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ローディング完了を待つ
    expect(
      await canvas.findByText(
        '非常に長いグループ名のテストケースです！これは表示の確認用',
      ),
    ).toBeInTheDocument();

    // 長いグループ名の表示確認
    expect(await canvas.findByText('XYZ789')).toBeInTheDocument();
    expect(await canvas.findByText(/ラウンド: 5/)).toBeInTheDocument();

    // 対応するユーザー
    expect(await canvas.findByText('Alice')).toBeInTheDocument();
  },
};

export const ShortGroupId: Story = {
  args: {
    groupId: '12',
  },
  decorators: [
    withLobbyMock({
      firebaseAuthenticated: true,
      groupExists: true,
      sessionUser: null,
    }),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ローディング完了を待つ
    expect(await canvas.findByText('短ID')).toBeInTheDocument();

    // 短いIDの表示確認
    expect(await canvas.findByText('12')).toBeInTheDocument();
    expect(await canvas.findByText(/ラウンド: 1/)).toBeInTheDocument();

    // 対応するユーザー
    expect(await canvas.findByText('Bob')).toBeInTheDocument();
  },
};

export const NonExistentGroup: Story = {
  args: {
    groupId: 'nonexistent',
  },
  decorators: [
    // グループが存在しないケースのモック
    withLobbyMock({
      firebaseAuthenticated: true,
      groupExists: false,
      sessionUser: null,
    }),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // エラー状態の表示を待つ
    expect(
      await canvas.findByText('グループが見つかりません'),
    ).toBeInTheDocument();

    // エラー状態の確認
    expect(
      await canvas.findByText('グループID: nonexistent'),
    ).toBeInTheDocument();
    expect(
      await canvas.findByText(
        '指定されたグループID のグループは存在しないか、削除されている可能性があります。',
      ),
    ).toBeInTheDocument();
  },
};
