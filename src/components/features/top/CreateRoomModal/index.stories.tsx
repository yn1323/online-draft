import { Button, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, screen, userEvent, within } from '@storybook/test';
import { CreateRoomModal, useCreateRoomModal } from './index';

const meta: Meta<typeof CreateRoomModal> = {
  title: 'Features/Top/CreateRoomModal',
  component: CreateRoomModal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// useCreateRoomModalフックを使用したデモコンポーネント
const ModalWithHookDemo = () => {
  const { openModal, modalProps } = useCreateRoomModal();

  const handleCreateRoom = async (roomName: string) => {
    console.log('ルーム作成:', roomName);
    // 簡単なアラートで終了
    alert(`ルーム "${roomName}" を作成しました！`);
  };

  return (
    <VStack gap={4}>
      <Button onClick={openModal} colorPalette="blue" size="lg">
        ルーム作成モーダルを開く
      </Button>

      <CreateRoomModal {...modalProps} onCreateRoom={handleCreateRoom} />
    </VStack>
  );
};

export const Default: Story = {
  render: () => <ModalWithHookDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // モーダルを開くボタンをクリック
    const openButton = await canvas.findByText('ルーム作成モーダルを開く');
    await userEvent.click(openButton);

    // モーダルが開くまで待機
    await new Promise((resolve) => setTimeout(resolve, 500));

    // モーダルがDOM全体に表示されているか確認（ポータルレンダリング対応）
    const cancelButton = await screen.findByText('キャンセル');
    await expect(cancelButton).toBeInTheDocument();

    const modalTitle = await screen.findByText('新しいルームを作成');
    await expect(modalTitle).toBeInTheDocument();
  },
};

/**
 * フォーム表示テスト
 * モーダル内の基本要素が正しく表示されることを確認
 */
export const フォーム表示テスト: Story = {
  render: () => <ModalWithHookDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // モーダルを開く
    const openButton = await canvas.findByText('ルーム作成モーダルを開く');
    await userEvent.click(openButton);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 基本要素の存在確認
    const modalTitle = await screen.findByText('新しいルームを作成');
    await expect(modalTitle).toBeInTheDocument();

    const input = await screen.findByPlaceholderText(
      '例: 2024年プロ野球ドラフト',
    );
    await expect(input).toBeInTheDocument();

    const cancelButton = await screen.findByText('キャンセル');
    const createButton = await screen.findByText('ルームを作成');
    await expect(cancelButton).toBeInTheDocument();
    await expect(createButton).toBeInTheDocument();

    // 初期状態で作成ボタンが無効化されていることを確認
    await expect(createButton).toBeDisabled();
  },
};

/**
 * 基本表示テスト
 * モーダルが開くことを確認するシンプルなテスト
 */
export const 基本表示テスト: Story = {
  render: () => <ModalWithHookDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // モーダルを開く
    const openButton = await canvas.findByText('ルーム作成モーダルを開く');
    await userEvent.click(openButton);
    await new Promise((resolve) => setTimeout(resolve, 800));

    // モーダルのタイトルが表示されることを確認
    const modalTitle = await screen.findByText('新しいルームを作成');
    await expect(modalTitle).toBeInTheDocument();
  },
};
