import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import EntryPage from './index';

const meta: Meta<typeof EntryPage> = {
  title: 'Features/Entry/EntryPage',
  component: EntryPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    groupId: 'abc123',
    groupName: 'オンラインドラフト会議',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const CreateUserLayout: Story = {
  args: {
    groupId: 'create123',
    groupName: '新規ユーザー作成レイアウト確認',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // 新しいユーザーを作成ボタンをクリック
    const createButton = canvas.getByText('新しいユーザーを作成');
    await userEvent.click(createButton);
    
    // 作成画面が表示されることを確認
    await expect(canvas.getByText('ユーザー名')).toBeInTheDocument();
    await expect(canvas.getByText('アバターを選択')).toBeInTheDocument();
    
    // アバター選択（最初のアバターをクリック）
    const firstAvatar = canvas.getByRole('button', { name: /avatar-1/ });
    await userEvent.click(firstAvatar);
    
    // ユーザー名入力
    const nameInput = canvas.getByPlaceholderText('名前を入力してください');
    await userEvent.type(nameInput, 'テストユーザー');
    
    // VRT用: 入力完了状態でレイアウトを固定
    // この状態でVRTスクリーンショットが撮影される
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const SP: Story = {
  args: {
    groupId: 'mobile01',
    groupName: 'モバイルテスト',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

