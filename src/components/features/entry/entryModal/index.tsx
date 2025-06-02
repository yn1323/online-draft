'use client';

import { 
  Button, 
  Input, 
  Text, 
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '@/src/components/ui/dialog';
import {
  DrawerActionTrigger,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from '@/src/components/ui/drawer';
import { Field } from '@/src/components/ui/field';
import { useState } from 'react';
import { createDraft } from './actions';

interface CreateDraftModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateSuccess?: (groupId: string) => void; // Storybook用コールバック
}

export const CreateDraftModal = ({
  isOpen,
  onClose,
  onCreateSuccess,
}: CreateDraftModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleSubmit = async (formData: FormData) => {
    const groupName = formData.get('groupName') as string;

    if (!groupName?.trim()) {
      return;
    }

    setIsLoading(true);
    try {
      // Server Actionでグループ作成
      const result = await createDraft(groupName);

      if (result.success) {
        // 作成成功後の処理
        if (onCreateSuccess) {
          // Storybook用のコールバック
          onCreateSuccess(result.groupId);
          onClose();
        } else {
          // 実際のアプリでは遷移
          window.location.href = `/entry/${result.groupId}`;
        }
      }
    } catch (error) {
      console.error('グループ作成エラー:', error);
      setIsLoading(false);
    }
  };

  // モバイル用のBottom Sheet
  if (isMobile) {
    return (
      <DrawerRoot
        open={isOpen}
        onOpenChange={(e) => e.open || onClose()}
        placement="bottom"
        size="full"
      >
        <DrawerContent borderTopRadius="xl" maxH="80vh" display="flex" flexDirection="column">
          <DrawerHeader textAlign="center" pb={2}>
            <DrawerTitle fontSize="xl">ドラフト会議を作成</DrawerTitle>
            <DrawerCloseTrigger />
          </DrawerHeader>

          <form id="drawer-form" action={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <DrawerBody px={6} flex={1} overflowY="auto">
              <VStack gap={6} py={4}>
                <Field label="グループ名" required>
                  <Input
                    name="groupName"
                    placeholder="例：今日のランチ会議"
                    disabled={isLoading}
                    required
                    size="lg"
                  />
                </Field>
                <Text fontSize="sm" color="gray.500" textAlign="center">
                  作成後、グループIDが発行されます。
                  <br />
                  メンバーに共有して参加してもらいましょう！
                </Text>
              </VStack>
            </DrawerBody>
          </form>

          <DrawerFooter
            gap={3}
            px={6}
            pb={8}
            pt={6}
            borderTop="1px solid"
            borderColor="border"
            position="sticky"
            bottom={0}
            bg="bg"
            flexShrink={0}
          >
            <DrawerActionTrigger asChild>
              <Button 
                variant="ghost" 
                disabled={isLoading}
                size="lg"
                flex={1}
                onClick={onClose}
              >
                キャンセル
              </Button>
            </DrawerActionTrigger>
            <Button
              form="drawer-form"
              type="submit"
              colorPalette="green"
              disabled={isLoading}
              loading={isLoading}
              size="lg"
              flex={1}
            >
              作成する
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerRoot>
    );
  }

  // デスクトップ用のDialog
  return (
    <DialogRoot open={isOpen} onOpenChange={(e) => e.open || onClose()}>
      <DialogContent maxW="md" mx={4}>
        <form action={handleSubmit}>
          <DialogCloseTrigger />
          <DialogHeader>
            <DialogTitle>ドラフト会議を作成</DialogTitle>
          </DialogHeader>

          <DialogBody>
            <VStack gap={4}>
              <Field label="グループ名" required>
                <Input
                  name="groupName"
                  placeholder="例：今日のランチ会議"
                  disabled={isLoading}
                  required
                />
              </Field>
              <Text fontSize="sm" color="gray.500">
                作成後、グループIDが発行されます。
                <br />
                メンバーに共有して参加してもらいましょう！
              </Text>
            </VStack>
          </DialogBody>

          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button type="button" variant="ghost" disabled={isLoading}>
                キャンセル
              </Button>
            </DialogActionTrigger>
            <Button
              type="submit"
              colorPalette="green"
              disabled={isLoading}
              loading={isLoading}
            >
              作成する
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </DialogRoot>
  );
};