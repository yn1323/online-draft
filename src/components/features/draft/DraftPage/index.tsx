'use client';

import { Loading } from '@/src/components/atoms/Loading';
import { useInitialize } from '@/src/components/features/draft/DraftPage/useInitialize';
import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Tabs,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import { LuList, LuMessageSquare } from 'react-icons/lu';
import { ChatInputForm } from '../ChatInputForm';
import { ChatMessageList } from '../ChatMessageList';
import { CurrentRoundStatus } from '../CurrentRoundStatus';
import { ItemSelectModal, useItemSelectModal } from '../modals/ItemSelectModal';
import { OpenResultModal, useOpenResultModal } from '../modals/OpenResultModal';
import { StageModal, useStageModal } from '../modals/StageModal';
import { PastDraftResults } from '../PastDraftResults';
import { currentUserIdAtom, groupAtom } from '../states';

/**
 * ドラフト実行画面Innerコンポーネント（Presenter）
 * UI描画と状態管理を担当、新しいhooks構造を使用
 */
export const DraftPageInner = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [activeTab, setActiveTab] = useState('draft');

  // モーダル状態管理
  const itemSelectModal = useItemSelectModal();
  const openResultModal = useOpenResultModal();
  const stageModal = useStageModal();

  // アイテム選択モーダルを開く（新規選択用）
  const handleItemSelect = () => {
    itemSelectModal.open();
  };

  // アイテム選択の送信処理
  const handleItemSelectSubmit = async (data: {
    item: string;
    comment: string;
  }) => {
    console.log('Item selected:', data);
    // TODO: 実際の送信処理を実装
  };

  const handleOpenResult = () => {};
  const handleEditClick = () => {};

  const handleExecuteOpenResult = () => {
    openResultModal.close();
    stageModal.open();
  };

  if (isMobile) {
    // SP版: タブレイアウト
    return (
      <VStack h="100vh" gap={0}>
        {/* ヘッダー（固定） */}
        <Box
          bg="white"
          borderBottom="1px"
          borderColor="gray.200"
          p={4}
          w="full"
          position="sticky"
          top={0}
          zIndex={10}
        >
          <Text fontSize="lg" fontWeight="bold" textAlign="center">
            オンラインドラフト会議
          </Text>
        </Box>

        {/* タブエリア */}
        <Tabs.Root
          value={activeTab}
          onValueChange={(details) => setActiveTab(details.value)}
          flex={1}
          display="flex"
          flexDirection="column"
          w="full"
          overflow="hidden"
        >
          <Tabs.List
            bg="gray.50"
            borderBottom="2px solid"
            borderColor="gray.200"
            flexShrink={0}
          >
            <Tabs.Trigger
              value="draft"
              flex={1}
              py={3}
              px={4}
              _selected={{
                bg: 'white',
                color: 'blue.600',
                borderBottom: '2px solid',
                borderColor: 'blue.500',
                fontWeight: 'bold',
              }}
              transition="all 0.15s ease"
            >
              <HStack gap={2} justify="center" w="full">
                <LuList size={18} />
                <Text fontSize="sm">取得リスト</Text>
              </HStack>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="chat"
              flex={1}
              py={3}
              px={4}
              _selected={{
                bg: 'white',
                color: 'blue.600',
                borderBottom: '2px solid',
                borderColor: 'blue.500',
                fontWeight: 'bold',
              }}
              transition="all 0.15s ease"
            >
              <HStack gap={2} justify="center" w="full">
                <LuMessageSquare size={18} />
                <Text fontSize="sm">チャット</Text>
              </HStack>
            </Tabs.Trigger>
          </Tabs.List>

          <Box flex={1} overflow="hidden" minH={0}>
            {/* ドラフト状況タブ */}
            <Tabs.Content value="draft" h="full" overflow="auto">
              <VStack gap={3} p={3}>
                {/* 現在ラウンドセクション */}
                <CurrentRoundStatus
                  variant="sp"
                  onItemSelect={handleItemSelect}
                  onOpenResult={handleOpenResult}
                />

                {/* 過去ラウンド結果 */}
                <PastDraftResults variant="sp" onEditClick={handleEditClick} />
              </VStack>
            </Tabs.Content>

            {/* チャット・ログタブ */}
            <Tabs.Content
              value="chat"
              h="full"
              overflow="hidden"
              display="flex"
              flexDirection="column"
            >
              <Box flex={1} overflow="auto" p={3}>
                <ChatMessageList />
              </Box>
            </Tabs.Content>
          </Box>
        </Tabs.Root>

        {/* 入力エリア（固定） - チャット専用 */}
        {activeTab === 'chat' && (
          <Box
            bg="white"
            borderTop="1px"
            borderColor="gray.200"
            p={3}
            w="full"
            position="sticky"
            bottom={0}
          >
            <ChatInputForm />
          </Box>
        )}

        {/* モーダル群 */}
        <ItemSelectModal
          isOpen={itemSelectModal.isOpen}
          onClose={itemSelectModal.close}
          onSubmit={handleItemSelectSubmit}
          userId="user1"
          round={1}
        />
        <OpenResultModal
          isOpen={openResultModal.isOpen}
          onClose={openResultModal.close}
          onExecuteOpenResult={handleExecuteOpenResult}
        />
        <StageModal
          isOpen={stageModal.isOpen}
          onClose={stageModal.close}
          variant={stageModal.variant}
        />
      </VStack>
    );
  }

  // PC版: 2カラムレイアウト
  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="container.xl">
        {/* ヘッダー */}
        <Box mb={6}>
          <Text fontSize="2xl" fontWeight="bold" color="gray.800">
            オンラインドラフト会議
          </Text>
        </Box>

        <Grid templateColumns="7fr 3fr" gap={6} h="calc(100vh - 130px)">
          {/* 左側: ドラフト状況エリア */}
          <GridItem h="100%">
            <VStack gap={4} h="100%" w="full" align="stretch">
              {/* 上部: 現在ラウンドの選択状況 */}
              <CurrentRoundStatus
                variant="pc"
                onItemSelect={handleItemSelect}
                onOpenResult={handleOpenResult}
              />

              {/* 下部: 過去のドラフト結果 */}
              <PastDraftResults variant="pc" onEditClick={handleEditClick} />
            </VStack>
          </GridItem>

          {/* 右側: チャット */}
          <GridItem h="100%">
            <Box
              h="100%"
              maxH="calc(100vh - 130px)"
              bg="white"
              boxShadow="lg"
              p={4}
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              overflow="hidden"
            >
              <Text fontSize="lg" fontWeight="bold" mb={4} flexShrink={0}>
                チャット
              </Text>
              {/* チャットメッセージエリア */}
              <Box flex="1" overflow="auto" mb={3} minH={0}>
                <ChatMessageList />
              </Box>

              {/* チャット入力エリア */}
              <Box flexShrink={0}>
                <ChatInputForm />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* モーダル群 */}
      <ItemSelectModal
        isOpen={itemSelectModal.isOpen}
        onClose={itemSelectModal.close}
        onSubmit={handleItemSelectSubmit}
        userId="user1"
        round={1}
      />
      <OpenResultModal
        isOpen={openResultModal.isOpen}
        onClose={openResultModal.close}
        onExecuteOpenResult={handleExecuteOpenResult}
      />
      <StageModal
        isOpen={stageModal.isOpen}
        onClose={stageModal.close}
        variant={stageModal.variant}
      />
    </Box>
  );
};

/**
 * ドラフト実行画面コンポーネント（Container）
 * モックデータの提供のみを担当
 */
export const DraftPage = ({ groupId }: { groupId: string }) => {
  const { isLoading } = useInitialize(groupId);

  if (isLoading) {
    return (
      <Box bg="gray.50" minH="100vh" py={[4, 8]}>
        <Container maxW="container.lg">
          <Loading message="ローディング中..." />
        </Container>
      </Box>
    );
  }

  return <DraftPageInner />;
};
