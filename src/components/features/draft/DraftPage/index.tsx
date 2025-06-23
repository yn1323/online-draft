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
import { useState } from 'react';
import { LuList, LuMessageSquare } from 'react-icons/lu';
import { ChatInputForm } from '../ChatInputForm';
import { ChatMessageList } from '../ChatMessageList';
import { CurrentRoundStatus } from '../CurrentRoundStatus';
import { useDraftChat } from '../hooks/useDraftChat';
import { useDraftPicks } from '../hooks/useDraftPicks';
import { useDraftResult } from '../hooks/useDraftResult';
import {
  type ChatMessageType,
  currentRound,
  type DraftRoundType,
  mockChatMessages,
  mockParticipants,
  type ParticipantType,
  pastDraftResults,
} from '../mockData';
import { EditModal, useEditModal } from '../modals/EditModal';
import { ItemSelectModal, useItemSelectModal } from '../modals/ItemSelectModal';
import { OpenResultModal, useOpenResultModal } from '../modals/OpenResultModal';
import { PastDraftResults } from '../PastDraftResults';

type DraftPageInnerProps = {
  // データ
  currentRound: number;
  participants: ParticipantType[];
  pastResults: DraftRoundType[];
  chatMessages: ChatMessageType[];
};

/**
 * ドラフト実行画面Innerコンポーネント（Presenter）
 * UI描画と状態管理を担当、新しいhooks構造を使用
 */
export const DraftPageInner = ({
  currentRound,
  participants,
  pastResults,
  chatMessages,
}: DraftPageInnerProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // タブ状態（SP版用）- DraftPageInner内で管理
  const [activeTab, setActiveTab] = useState('draft');

  // モーダル状態管理
  const itemSelectModal = useItemSelectModal();
  const editModal = useEditModal();
  const openResultModal = useOpenResultModal();

  // Firestore処理hooks
  const { selectItem } = useDraftPicks();
  const { sendMessage } = useDraftChat();
  const { executeOpenResult, checkParticipantStatus } = useDraftResult();

  // ハンドラー関数
  const handleItemSelect = async () => {
    try {
      await selectItem(itemSelectModal.selectedItem, itemSelectModal.comment);
      itemSelectModal.close();
    } catch (error) {
      console.error('アイテム選択エラー:', error);
    }
  };

  const handleEditSave = async () => {
    if (!editModal.editingPick) {
      return;
    }

    try {
      await selectItem(editModal.editingPick.currentPick); // 編集も同じAPIを使用
      editModal.close();
    } catch (error) {
      console.error('編集保存エラー:', error);
    }
  };

  const handleEditClick = (
    round: number,
    playerId: string,
    playerName: string,
    currentPick: string,
    category: string,
  ) => {
    editModal.open({ round, playerId, playerName, currentPick, category });
  };

  const handleOpenResult = async () => {
    try {
      const status = await checkParticipantStatus();
      if (status.allCompleted) {
        await executeOpenResult();
      } else {
        openResultModal.open();
      }
    } catch (error) {
      console.error('開票処理エラー:', error);
    }
  };

  const handleExecuteOpenResult = async () => {
    try {
      await executeOpenResult();
      openResultModal.close();
    } catch (error) {
      console.error('開票実行エラー:', error);
    }
  };

  const handleSendMessage = async (message: string) => {
    try {
      await sendMessage(message);
    } catch (error) {
      console.error('チャット送信エラー:', error);
    }
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
                  participants={participants}
                  currentRound={currentRound}
                  variant="sp"
                  onItemSelect={itemSelectModal.open}
                  onOpenResult={handleOpenResult}
                />

                {/* 過去ラウンド結果 */}
                <PastDraftResults
                  pastResults={pastResults}
                  participants={participants}
                  variant="sp"
                  onEditClick={handleEditClick}
                />
              </VStack>
            </Tabs.Content>

            {/* チャット・ログタブ */}
            <Tabs.Content value="chat" h="full" overflow="auto" p={3}>
              <ChatMessageList messages={chatMessages} />
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
            <ChatInputForm onSendMessage={handleSendMessage} />
          </Box>
        )}

        {/* モーダル群 */}
        <ItemSelectModal
          isOpen={itemSelectModal.isOpen}
          selectedItem={itemSelectModal.selectedItem}
          comment={itemSelectModal.comment}
          onSelectedItemChange={itemSelectModal.setSelectedItem}
          onCommentChange={itemSelectModal.setComment}
          onClose={itemSelectModal.close}
          onSelect={handleItemSelect}
        />
        <EditModal
          isOpen={editModal.isOpen}
          editingPick={editModal.editingPick}
          onClose={editModal.close}
          onSave={handleEditSave}
          onEditingPickUpdate={editModal.updatePick}
        />
        <OpenResultModal
          isOpen={openResultModal.isOpen}
          onClose={openResultModal.close}
          onExecuteOpenResult={handleExecuteOpenResult}
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
                participants={participants}
                currentRound={currentRound}
                variant="pc"
                onItemSelect={itemSelectModal.open}
                onOpenResult={handleOpenResult}
              />

              {/* 下部: 過去のドラフト結果 */}
              <PastDraftResults
                pastResults={pastResults}
                participants={participants}
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
                <ChatMessageList messages={chatMessages} />
              </Box>

              {/* チャット入力エリア */}
              <ChatInputForm onSendMessage={handleSendMessage} />
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* モーダル群 */}
      <ItemSelectModal
        isOpen={itemSelectModal.isOpen}
        selectedItem={itemSelectModal.selectedItem}
        comment={itemSelectModal.comment}
        onSelectedItemChange={itemSelectModal.setSelectedItem}
        onCommentChange={itemSelectModal.setComment}
        onClose={itemSelectModal.close}
        onSelect={handleItemSelect}
      />
      <EditModal
        isOpen={editModal.isOpen}
        editingPick={editModal.editingPick}
        onClose={editModal.close}
        onSave={handleEditSave}
        onEditingPickUpdate={editModal.updatePick}
      />
      <OpenResultModal
        isOpen={openResultModal.isOpen}
        onClose={openResultModal.close}
        onExecuteOpenResult={handleExecuteOpenResult}
      />
    </Box>
  );
};

/**
 * ドラフト実行画面コンポーネント（Container）
 * モックデータの提供のみを担当
 */
export const DraftPage = () => {
  return (
    <DraftPageInner
      currentRound={currentRound}
      participants={mockParticipants}
      pastResults={pastDraftResults}
      chatMessages={mockChatMessages}
    />
  );
};
