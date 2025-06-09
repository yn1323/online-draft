/**
 * LobbyPage用のモックデータ
 * Storybook環境で使用する固定データ
 */

// 仮のアバター画像データ（実際のFirebase連携時に置き換え）
export const AVATAR_IMAGES = Array.from({ length: 18 }, (_, i) => ({
  index: `${i + 1}`,
  path: `/img/${i + 1}.png`,
}));

// 仮のユーザーデータ（実際のFirebase連携時に置き換え）
export const MOCK_USERS = [
  { userId: '1', userName: '田中太郎', avatarIndex: '1', avatar: '/img/1.png' },
  { userId: '2', userName: '山田花子', avatarIndex: '5', avatar: '/img/5.png' },
];

// Storybook用のグループモックデータ
export const STORYBOOK_GROUP_DATA = {
  ABC123: { groupName: 'テストグループ 1', round: 3 },
  XYZ789: {
    groupName: '非常に長いグループ名のテストケースです！これは表示の確認用',
    round: 5,
  },
  '12': { groupName: '短ID', round: 1 },
  LOADING_TEST: {
    groupName: 'ローディングテスト用グループ',
    round: 2,
  },
};

// ローディング時のディレイ（ミリ秒）
export const STORYBOOK_LOADING_DELAY = 1000;
