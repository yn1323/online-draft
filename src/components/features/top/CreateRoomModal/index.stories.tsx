import { Button, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
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
    await new Promise((resolve) => setTimeout(resolve, 2000));
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

    // モーダルが開いたことを確認
    const modal = await canvas.findByText('新しいルームを作成');
    await expect(modal).toBeInTheDocument();
  },
};
