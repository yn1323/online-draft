'use client';

import { Button } from '@/src/components/atoms/Button';
import { Loading } from '@/src/components/atoms/Loading';
import { LanguageSwitcher } from '@/src/components/features/common/LanguageSwitcher';
import { useInitialize } from '@/src/components/features/draft/DraftPage/useInitialize';
import {
  currentUserIdAtom,
  groupAtom,
  groupIdAtom,
} from '@/src/components/features/draft/states';
import { useGroup } from '@/src/hooks/firebase/group/useGroup';
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
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { LuList, LuMessageSquare, LuShare2 } from 'react-icons/lu';
import { ChatInputForm } from '../ChatInputForm';
import { ChatMessageList } from '../ChatMessageList';
import { CurrentRoundStatus } from '../CurrentRoundStatus';
import { ItemSelectModal, useItemSelectModal } from '../modals/ItemSelectModal';
import { OpenResultModal, useOpenResultModal } from '../modals/OpenResultModal';
import { ShareModal, useShareModal } from '../modals/ShareModal';
import { StageModal, useStageModal } from '../modals/StageModal';
import { PastDraftResults } from '../PastDraftResults';

/**
 * ドラフト実行画面Innerコンポーネント（Presenter）
 * UI描画と状態管理を担当、新しいhooks構造を使用
 */
export const DraftPageInner = () => {
  const t = useTranslations('draft');
  const currentUserId = useAtomValue(currentUserIdAtom);
  const groupId = useAtomValue(groupIdAtom);
  const { round: currentRound, groupName } = useAtomValue(groupAtom);
  const prevRound = useRef(currentRound);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [selectedItem, setSelectedItem] = useState({ round: -1, userId: '' });

  const [activeTab, setActiveTab] = useState('draft');

  // モーダル状態管理
  const itemSelectModal = useItemSelectModal();
  const openResultModal = useOpenResultModal();
  const shareModal = useShareModal();
  const stageModal = useStageModal();

  const { incrementRound } = useGroup();

  useEffect(() => {
    if (prevRound.current !== -1 && currentRound > prevRound.current) {
      stageModal.open();
    }
    prevRound.current = currentRound;
  }, [currentRound, stageModal]);

  // アイテム選択モーダルを開く（新規選択用）
  const handleItemSelect = ({
    userId,
    round,
  }: {
    userId?: string;
    round?: number;
  }) => {
    setSelectedItem({
      round: round ?? currentRound,
      userId: userId ?? currentUserId,
    });
    itemSelectModal.open();
  };

  const handleOpenResult = async ({
    allSelected,
  }: {
    allSelected: boolean;
  }) => {
    if (allSelected) {
      await handleExecuteOpenResult();
    } else {
      openResultModal.open();
    }
  };
  const handleEditClick = async (
    args: Parameters<typeof handleItemSelect>[0],
  ) => {
    await handleItemSelect(args);
  };

  const handleExecuteOpenResult = async () => {
    await incrementRound(groupId);
    openResultModal.close();
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
          p={2}
          w="full"
          position="sticky"
          top={0}
          zIndex={10}
        >
          <HStack justify="space-between" align="center">
            <Box flex={1} />
            <Text fontSize="lg" fontWeight="bold" textAlign="center">
              {groupName}
            </Text>
            <Box flex={1} display="flex" justifyContent="flex-end">
              <HStack gap={2}>
                <LanguageSwitcher />
                <Button variant="ghost" size="sm" onClick={shareModal.open}>
                  <HStack gap={1} align="center">
                    <LuShare2 size={14} />
                    <Text>{t('page.share')}</Text>
                  </HStack>
                </Button>
              </HStack>
            </Box>
          </HStack>
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
                <Text fontSize="sm">{t('page.draft')}</Text>
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
                <Text fontSize="sm">{t('page.chatLog')}</Text>
              </HStack>
            </Tabs.Trigger>
          </Tabs.List>

          <Box flex={1} overflow="hidden" minH={0}>
            {/* ドラフト状況タブ */}
            <Tabs.Content value="draft" h="full" overflow="auto" p={1}>
              <VStack gap={3} p={1}>
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
          key={Math.random()}
          isOpen={itemSelectModal.isOpen}
          onClose={itemSelectModal.close}
          round={selectedItem.round}
          userId={selectedItem.userId}
        />
        <OpenResultModal
          isOpen={openResultModal.isOpen}
          onClose={openResultModal.close}
          onExecuteOpenResult={handleExecuteOpenResult}
        />
        <ShareModal
          isOpen={shareModal.isOpen}
          onClose={shareModal.close}
          groupId={groupId}
          groupName={groupName}
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
    <Box minH="100vh" py={2}>
      <Container maxW="full">
        {/* ヘッダー */}
        <Box mb={2}>
          <HStack justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              {groupName}
            </Text>
            <HStack gap={3}>
              <LanguageSwitcher />
              <Button variant="outline" size="md" onClick={shareModal.open}>
                <HStack gap={1} align="center">
                  <LuShare2 size={16} />
                  <Text>{t('page.share')}</Text>
                </HStack>
              </Button>
            </HStack>
          </HStack>
        </Box>

        <Grid templateColumns="7fr 3fr" gap={2} h="calc(100vh - 80px)">
          {/* 左側: ドラフト状況エリア */}
          <GridItem h="100%">
            <VStack gap={2} h="100%" w="full" align="stretch">
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
              maxH="calc(100vh - 70px)"
              bg="white"
              boxShadow="lg"
              p={3}
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              overflow="hidden"
            >
              <Text fontSize="lg" fontWeight="bold" mb={3} flexShrink={0}>
                {t('page.chat')}
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
        key={Math.random()}
        isOpen={itemSelectModal.isOpen}
        onClose={itemSelectModal.close}
        round={selectedItem.round}
        userId={selectedItem.userId}
      />
      <OpenResultModal
        isOpen={openResultModal.isOpen}
        onClose={openResultModal.close}
        onExecuteOpenResult={handleExecuteOpenResult}
      />
      <ShareModal
        isOpen={shareModal.isOpen}
        onClose={shareModal.close}
        groupId={groupId}
        groupName={groupName}
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
  const t = useTranslations('draft');
  const { isLoading } = useInitialize(groupId);

  if (isLoading) {
    return (
      <Box bg="gray.50" minH="100vh" py={[4, 8]}>
        <Container maxW="container.lg">
          <Loading message={t('page.loading')} />
        </Container>
      </Box>
    );
  }

  return <DraftPageInner />;
};
