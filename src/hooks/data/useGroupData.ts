'use client';

import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import { getDraftGroup } from '@/src/services/firestore/draftGroups';
import { useEffect, useState } from 'react';

interface GroupData {
  groupName: string;
  round: number;
}

interface UseGroupDataResult {
  groupData: GroupData | null;
  groupLoading: boolean;
  groupError: string | null;
}

// Storybook用のモックグループデータ
const getMockGroupData = (groupId: string): GroupData | null => {
  const mockGroupData: Record<string, GroupData> = {
    ABC123: { groupName: 'テストグループ 1', round: 3 },
    XYZ789: {
      groupName: '非常に長いグループ名のテストケースです！これは表示の確認用',
      round: 5,
    },
    '12': { groupName: '短ID', round: 1 },
    LOADING_TEST: { groupName: 'ローディングテスト用グループ', round: 2 },
  };

  return mockGroupData[groupId] || null;
};

const STORYBOOK_LOADING_DELAY = 800;

/**
 * グループ情報の取得処理
 * Storybook環境ではモックデータを使用（MSWと併用）
 */
export const useGroupData = (groupId: string): UseGroupDataResult => {
  const [groupData, setGroupData] = useState<GroupData | null>(null);
  const [groupLoading, setGroupLoading] = useState(true);
  const [groupError, setGroupError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroupData = async () => {
      if (!groupId) {
        return;
      }

      // Storybook環境: 確実にモックデータを使用
      if (isStorybookEnvironment()) {
        setGroupLoading(true);

        // 少し遅延を入れてローディング状態をテスト
        setTimeout(() => {
          const mockGroup = getMockGroupData(groupId);
          if (mockGroup) {
            setGroupData(mockGroup);
          } else {
            setGroupError(
              '指定されたグループID のグループは存在しないか、削除されている可能性があります。',
            );
          }
          setGroupLoading(false);
        }, STORYBOOK_LOADING_DELAY);
        return;
      }

      // 本番環境: Firebase getDraftGroup
      try {
        setGroupLoading(true);
        setGroupError(null);

        const group = await getDraftGroup(groupId);

        if (!group) {
          setGroupError('指定されたグループが見つかりません');
          return;
        }

        setGroupData({
          groupName: group.groupName,
          round: group.round,
        });

      } catch (error) {
        setGroupError('グループ情報の取得に失敗しました');
      } finally {
        setGroupLoading(false);
      }
    };

    fetchGroupData();
  }, [groupId]);

  return { groupData, groupLoading, groupError };
};
