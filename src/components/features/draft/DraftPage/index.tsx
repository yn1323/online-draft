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
import { Input } from '@/src/components/atoms/Input';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { ChatInputForm } from './ChatInputForm';
import { ChatMessageList } from './ChatMessageList';
import { CurrentRoundStatus } from './CurrentRoundStatus';
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
              <ChatMessageList messages={mockChatMessages} variant="sp" />
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
            <ChatInputForm variant="sp" />
          </Box>
        )}

        {/* モーダル群 */}
        {renderModals()}
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
                <ChatMessageList messages={mockChatMessages} variant="pc" />
              </Box>

              {/* チャット入力エリア */}
              <ChatInputForm variant="pc" />
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* モーダル群 */}
      {renderModals()}
    </Box>
  );

  // モーダル共通レンダリング関数
  function renderModals() {
    return (
      <>
        {/* アイテム選択モーダル */}
        <ResponsiveModal
          isOpen={isItemSelectModalOpen}
          onClose={closeItemSelectModal}
          title="アイテムを選択"
          actions={{
            cancel: {
              text: 'キャンセル',
              onClick: closeItemSelectModal,
            },
            submit: {
              text: '決定',
              disabled: !selectedItem.trim(),
              onClick: handleItemSelect,
            },
          }}
        >
          <VStack gap={4} w="full">
            {/* アイテム名入力 */}
            <VStack gap={2} align="start" w="full">
              <Text fontSize="sm" fontWeight="bold" color="gray.700">
                アイテム名
              </Text>
              <Input
                placeholder="アイテム名を入力してください"
                value={selectedItem}
                onChange={setSelectedItem}
                maxLength={50}
                size="lg"
              />
            </VStack>

            {/* コメント入力 */}
            <VStack gap={2} align="start" w="full">
              <Text fontSize="sm" fontWeight="bold" color="gray.700">
                コメント（任意）
              </Text>
              <Input
                placeholder="この選択についてのコメント..."
                value={comment}
                onChange={setComment}
                maxLength={100}
                size="lg"
              />
            </VStack>
          </VStack>
        </ResponsiveModal>

        {/* ピック編集モーダル */}
        <ResponsiveModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          title="ピックを編集"
          actions={{
            cancel: {
              text: 'キャンセル',
              onClick: closeEditModal,
            },
            submit: {
              text: '保存',
              colorPalette: 'blue',
              onClick: handleEditSave,
            },
          }}
        >
          {editingPick && (
            <VStack gap={4} w="full">
              {/* 編集対象情報 */}
              <Box w="full" p={3} bg="gray.50" borderRadius="md">
                <VStack gap={2} align="start">
                  <HStack>
                    <Text fontSize="xs" color="gray.600">
                      ラウンド:
                    </Text>
                    <Text fontSize="sm" fontWeight="bold">
                      Round {editingPick.round}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text fontSize="xs" color="gray.600">
                      プレイヤー:
                    </Text>
                    <Text fontSize="sm" fontWeight="bold">
                      {editingPick.playerName}
                    </Text>
                  </HStack>
                </VStack>
              </Box>

              {/* アイテム名編集 */}
              <VStack gap={2} align="start" w="full">
                <Text fontSize="sm" fontWeight="bold" color="gray.700">
                  選択アイテム
                </Text>
                <Input
                  placeholder="アイテム名を入力してください"
                  value={editingPick.currentPick}
                  onChange={(value: string) =>
                    updateEditingPick({ currentPick: value })
                  }
                  maxLength={50}
                  size="lg"
                />
              </VStack>

              {/* カテゴリ編集 */}
              <VStack gap={2} align="start" w="full">
                <Text fontSize="sm" fontWeight="bold" color="gray.700">
                  カテゴリ
                </Text>
                <Input
                  placeholder="カテゴリを入力してください"
                  value={editingPick.category}
                  onChange={(value: string) =>
                    updateEditingPick({ category: value })
                  }
                  maxLength={20}
                  size="lg"
                />
              </VStack>
            </VStack>
          )}
        </ResponsiveModal>
      </>
    );
  }
};
