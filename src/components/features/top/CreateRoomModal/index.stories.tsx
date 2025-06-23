import { Button, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, screen, userEvent, within } from '@storybook/test';
import { CreateRoomModal, useCreateRoomModal } from './index';

const meta: Meta<typeof CreateRoomModal> = {
  title: 'features/top/CreateRoomModal',
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
