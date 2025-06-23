'use client';

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
import { LuList, LuMessageSquare } from 'react-icons/lu';
import { ChatInputForm } from './ChatInputForm';
import { ChatMessageList } from './ChatMessageList';
import { CurrentRoundStatus } from './CurrentRoundStatus';
import { DraftModals } from './DraftModals';
import {
  currentRound,
  mockChatMessages,
  mockParticipants,
  pastDraftResults,
} from './mockData';
import { PastDraftResults } from './PastDraftResults';
import { useDraftLogic } from './useDraftLogic';

/**
 * ドラフト実行画面コンポーネント（統合版）
 * レスポンシブ対応: PC版は2カラムレイアウト、SP版はタブ切り替え
 */
export const DraftPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // カスタムフックで共通ロジックを取得
  const {
    activeTab,
    setActiveTab,
    isItemSelectModalOpen,
    selectedItem,
    comment,
    setSelectedItem,
    setComment,
    isEditModalOpen,
    editingPick,
    handleItemSelect,
    openItemSelectModal,
    closeItemSelectModal,
    handleEditClick,
    handleEditSave,
    closeEditModal,
    updateEditingPick,
  } = useDraftLogic();

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
        >
          <Tabs.List
            bg="gray.50"
            borderBottom="2px solid"
            borderColor="gray.200"
            position="sticky"
            top="65px"
            zIndex={5}
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

          <Box flex={1} overflow="hidden">
            {/* ドラフト状況タブ */}
            <Tabs.Content value="draft" h="full" overflow="auto">
              <VStack gap={3} p={3}>
                {/* 現在ラウンドセクション */}
                <CurrentRoundStatus
                  participants={mockParticipants}
                  currentRound={currentRound}
                  variant="sp"
                  onItemSelect={openItemSelectModal}
                />

                {/* 過去ラウンド結果 */}
                <PastDraftResults
                  pastResults={pastDraftResults}
                  participants={mockParticipants}
                  variant="sp"
                  onEditClick={handleEditClick}
                />
              </VStack>
            </Tabs.Content>

            {/* チャット・ログタブ */}
            <Tabs.Content value="chat" h="full" overflow="auto" p={3}>
              <ChatMessageList messages={mockChatMessages} />
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
        <DraftModals
          isItemSelectModalOpen={isItemSelectModalOpen}
          selectedItem={selectedItem}
          comment={comment}
          onSelectedItemChange={setSelectedItem}
          onCommentChange={setComment}
          onItemSelectClose={closeItemSelectModal}
          onItemSelect={handleItemSelect}
          isEditModalOpen={isEditModalOpen}
          editingPick={editingPick}
          onEditClose={closeEditModal}
          onEditSave={handleEditSave}
          onEditingPickUpdate={updateEditingPick}
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

        <Grid templateColumns="7fr 3fr" gap={6} h="calc(100vh - 200px)">
          {/* 左側: ドラフト状況エリア */}
          <GridItem>
            <VStack gap={4} h="full" w="full" align="stretch">
              {/* 上部: 現在ラウンドの選択状況 */}
              <CurrentRoundStatus
                participants={mockParticipants}
                currentRound={currentRound}
                variant="pc"
                onItemSelect={openItemSelectModal}
              />

              {/* 下部: 過去のドラフト結果 */}
              <PastDraftResults
                pastResults={pastDraftResults}
                participants={mockParticipants}
                variant="pc"
                onEditClick={handleEditClick}
              />
            </VStack>
          </GridItem>

          {/* 右側: チャット */}
          <GridItem h="full">
            <Box
              h="full"
              bg="white"
              boxShadow="lg"
              p={4}
              borderRadius="lg"
              display="flex"
              flexDirection="column"
            >
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                チャット
              </Text>
              {/* チャットメッセージエリア */}
              <Box flex="1" overflow="auto" mb={3}>
                <ChatMessageList messages={mockChatMessages} />
              </Box>

              {/* チャット入力エリア */}
              <ChatInputForm />
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* モーダル群 */}
      <DraftModals
        isItemSelectModalOpen={isItemSelectModalOpen}
        selectedItem={selectedItem}
        comment={comment}
        onSelectedItemChange={setSelectedItem}
        onCommentChange={setComment}
        onItemSelectClose={closeItemSelectModal}
        onItemSelect={handleItemSelect}
        isEditModalOpen={isEditModalOpen}
        editingPick={editingPick}
        onEditClose={closeEditModal}
        onEditSave={handleEditSave}
        onEditingPickUpdate={updateEditingPick}
      />
    </Box>
  );
};
