'use client';

import { Button, VStack, useBreakpointValue } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from './dialog';
import {
  DrawerActionTrigger,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from './drawer';

interface ResponsiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  actions?: {
    cancel?: {
      text: string;
      onClick?: () => void;
    };
    submit?: {
      text: string;
      colorPalette?: string;
      form?: string;
      type?: 'button' | 'submit';
      disabled?: boolean;
      loading?: boolean;
    };
  };
}

export const ResponsiveModal = ({
  isOpen,
  onClose,
  title,
  children,
  actions,
}: ResponsiveModalProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // モバイル用のBottom Sheet
  if (isMobile) {
    return (
      <DrawerRoot
        open={isOpen}
        onOpenChange={(e) => e.open || onClose()}
        placement="bottom"
        size="full"
      >
        <DrawerContent
          borderTopRadius="xl"
          maxH="80vh"
          display="flex"
          flexDirection="column"
        >
          <DrawerHeader textAlign="center" pb={2}>
            <DrawerTitle fontSize="xl">{title}</DrawerTitle>
            <DrawerCloseTrigger />
          </DrawerHeader>

          <DrawerBody px={6} flex={1} overflowY="auto">
            <VStack gap={6} py={4}>
              {children}
            </VStack>
          </DrawerBody>

          {actions && (
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
              {actions.cancel && (
                <DrawerActionTrigger asChild>
                  <Button
                    variant="ghost"
                    size="lg"
                    flex={1}
                    onClick={actions.cancel.onClick || onClose}
                  >
                    {actions.cancel.text}
                  </Button>
                </DrawerActionTrigger>
              )}
              {actions.submit && (
                <Button
                  form={actions.submit.form}
                  type={actions.submit.type || 'button'}
                  colorPalette={actions.submit.colorPalette || 'blue'}
                  disabled={actions.submit.disabled}
                  loading={actions.submit.loading}
                  size="lg"
                  flex={1}
                >
                  {actions.submit.text}
                </Button>
              )}
            </DrawerFooter>
          )}
        </DrawerContent>
      </DrawerRoot>
    );
  }

  // デスクトップ用のDialog
  return (
    <DialogRoot open={isOpen} onOpenChange={(e) => e.open || onClose()}>
      <DialogContent maxW="md" mx={4}>
        <DialogCloseTrigger />
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <DialogBody>
          <VStack gap={4}>{children}</VStack>
        </DialogBody>

        {actions && (
          <DialogFooter>
            {actions.cancel && (
              <DialogActionTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={actions.cancel.onClick || onClose}
                >
                  {actions.cancel.text}
                </Button>
              </DialogActionTrigger>
            )}
            {actions.submit && (
              <Button
                form={actions.submit.form}
                type={actions.submit.type || 'button'}
                colorPalette={actions.submit.colorPalette || 'blue'}
                disabled={actions.submit.disabled}
                loading={actions.submit.loading}
              >
                {actions.submit.text}
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </DialogRoot>
  );
};
