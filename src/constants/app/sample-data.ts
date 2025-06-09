/**
 * サンプルデータ・モック定数
 */

export const SAMPLE_DATA = {
  /** 最近の会議履歴 */
  RECENT_MEETINGS: [
    { id: 'abc123', name: '今日のランチドラフト', lastJoined: '2時間前' },
    { id: 'def456', name: '映画選びドラフト', lastJoined: '1日前' },
    { id: 'ghi789', name: '週末の予定ドラフト', lastJoined: '3日前' },
  ],

  /** 使用例一覧 */
  USE_CASES: [
    { emoji: '🍕', text: '今日のお昼ご飯選び' },
    { emoji: '🎬', text: '映画館で見る映画選び' },
    { emoji: '🎮', text: 'みんなでやるゲーム選び' },
    { emoji: '🏖️', text: '今度の旅行先決め' },
    { emoji: '🎵', text: 'カラオケの選曲会議' },
    { emoji: '📚', text: '読書会の本選び' },
  ],

  /** How-toステップ */
  HOW_TO_STEPS: [
    {
      step: 1,
      title: 'ドラフト会議を作成',
      description: 'テーマを決めて、みんなを招待しよう',
      emoji: '🎯',
    },
    {
      step: 2,
      title: '各自が選択',
      description: '推しを選んで、かぶったら勝負！',
      emoji: '✋',
    },
    {
      step: 3,
      title: '結果発表',
      description: '結果を見て、みんなでわいわい',
      emoji: '🎉',
    },
  ],

  /** サンプルトピック */
  SAMPLE_TOPICS: [
    'お昼ご飯',
    '今日の映画',
    '週末のゲーム',
    '次の旅行先',
    'カラオケ楽曲',
    '読書会の本',
    'デートスポット',
    'プレゼント選び',
  ],

  /** サンプル馬名（legacy互換） */
  SAMPLE_HORSES: [
    'アイリスクォーツ',
    'トゥースパークル',
    'サブルドール',
    'ディアンテラ',
    'スプリンクル',
    'ペアルク',
    'トウニィ',
    'サクラバクシン',
    'マヤノトップガン',
    'オペラオー',
  ],

  /** デモ用参加者 */
  DEMO_PARTICIPANTS: [
    { name: 'あかり', avatar: '1', status: 'online' as const },
    { name: 'たろう', avatar: '2', status: 'thinking' as const },
    { name: 'みどり', avatar: '3', status: 'submitted' as const },
    { name: 'ひろし', avatar: '4', status: 'confirmed' as const },
  ],

  /** デモ用ラウンドデータ */
  DEMO_ROUNDS: [
    {
      roundNumber: 1,
      topic: 'お昼ご飯',
      status: 'completed' as const,
      selections: [
        { participant: 'あかり', item: 'ラーメン', result: 'winner' as const },
        { participant: 'たろう', item: 'カレー', result: 'normal' as const },
        { participant: 'みどり', item: 'パスタ', result: 'normal' as const },
      ],
    },
    {
      roundNumber: 2,
      topic: '今日の映画',
      status: 'completed' as const,
      selections: [
        {
          participant: 'あかり',
          item: 'スパイダーマン',
          result: 'conflict' as const,
        },
        {
          participant: 'たろう',
          item: 'スパイダーマン',
          result: 'conflict' as const,
        },
        {
          participant: 'みどり',
          item: 'アベンジャーズ',
          result: 'normal' as const,
        },
      ],
    },
    {
      roundNumber: 3,
      topic: '週末のゲーム',
      status: 'active' as const,
      selections: [],
    },
  ],
} as const;
