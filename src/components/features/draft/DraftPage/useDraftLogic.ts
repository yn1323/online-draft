import { useState } from 'react';

/**
 * ピック編集情報の型定義
 */
export type EditingPickType = {
  round: number;
  playerId: string;
  playerName: string;
  currentPick: string;
  category: string;
};

/**
 * ドラフト関連のロジックを共通化するカスタムフック
 * PC版・SP版・統合版で共通して使用される状態管理とハンドラーを提供
 */
export const useDraftLogic = () => {
  // SP版タブの状態管理
  const [activeTab, setActiveTab] = useState('draft');
  // アイテム選択モーダルの状態
  const [isItemSelectModalOpen, setIsItemSelectModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [comment, setComment] = useState('');

  // 編集モーダルの状態
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPick, setEditingPick] = useState<EditingPickType | null>(null);

  // アイテム選択確定ハンドラー
  const handleItemSelect = () => {
    if (selectedItem.trim()) {
      console.log('アイテム選択:', { item: selectedItem, comment });
      // 実際にはFirestoreに保存、Jotai更新など
      setIsItemSelectModalOpen(false);
      setSelectedItem('');
      setComment('');
    }
  };

  // アイテム選択モーダルを開く
  const openItemSelectModal = () => {
    setIsItemSelectModalOpen(true);
  };

  // アイテム選択モーダルを閉じる
  const closeItemSelectModal = () => {
    setIsItemSelectModalOpen(false);
    setSelectedItem('');
    setComment('');
  };

  // ピック編集ハンドラー
  const handleEditClick = (
    round: number,
    playerId: string,
    playerName: string,
    currentPick: string,
    category: string,
  ) => {
    setEditingPick({ round, playerId, playerName, currentPick, category });
    setIsEditModalOpen(true);
  };

  // 編集保存ハンドラー
  const handleEditSave = () => {
    if (editingPick) {
      console.log('ピック編集:', editingPick);
      // 実際にはFirestoreに保存
      setIsEditModalOpen(false);
      setEditingPick(null);
    }
  };

  // 編集モーダルを閉じる
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingPick(null);
  };

  // 編集中ピックを更新
  const updateEditingPick = (updates: Partial<EditingPickType>) => {
    if (editingPick) {
      setEditingPick({ ...editingPick, ...updates });
    }
  };

  return {
    // タブ関連の状態（SP版用）
    activeTab,
    setActiveTab,

    // アイテム選択関連の状態
    isItemSelectModalOpen,
    selectedItem,
    comment,
    setSelectedItem,
    setComment,

    // 編集関連の状態
    isEditModalOpen,
    editingPick,

    // ハンドラー関数
    handleItemSelect,
    openItemSelectModal,
    closeItemSelectModal,
    handleEditClick,
    handleEditSave,
    closeEditModal,
    updateEditingPick,
  };
};
