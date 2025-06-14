# OnlineDraft 機能仕様書

## 🖥️ 画面構成

### 画面一覧
1. **トップページ** - ルーム作成・参加の入り口
2. **ロビー画面** - 参加者待機・開始準備
3. **ドラフト実行画面** - メインのドラフトゲーム画面（結果表示含む）

### モーダル・演出
- **開票演出モーダル** - スロット風の一斉開票演出
- **確認ダイアログ** - 退室確認等の各種確認

## 📱 UI仕様

### ドラフト実行画面レイアウト

#### 優先度順の表示要素
1. **取得済みリスト**（最重要）
   - スマホ: アコーディオン式カード表示
   - PC: 横並びカード表示
   - 表示形式:
     ```
     👤 田中太郎 (3/5) ▼
       🏆 大谷翔平、藤井聡太、初音ミク
     ```

2. **現在の状況**（2番目に重要）
   - リアルタイム入力状況表示
   - 表示形式:
     ```
     👤 田中太郎 ✅ 入力完了
     👤 山田花子 ⏰ 未入力
     ```

3. **入力エリア**
   - 自由入力欄（ドラフト対象）
   - コメント欄（選択理由・翌年見返し用）

### レスポンシブ対応
- **2段階ブレイクポイント**: SP（スマホ）/ PC
- **タブレット専用レイアウト**: なし
- **基本方針**: スマホファースト設計

## 🎮 ゲームフロー仕様

### 基本フロー
1. **ルーム作成・参加**
   - ホストがルーム作成 → URLシェア
   - 参加者が順次参加 → 即座にドラフト開始可能

2. **ドラフト実行** （巡目数分繰り返し）
   - **入力フェーズ**: 各自のタイミングで選択肢入力
   - **開票待機フェーズ**: 全員の入力完了待ち
   - **開票フェーズ**: スロット風演出で一斉開票
   - **結果確認フェーズ**: 取得成功・失敗の即座表示
   - **再選択フェーズ**: 競合発生時のみ、敗者が別選択肢を入力

### 競合処理
- **解決方式**: ランダム抽選（randomNumber使用）
- **表示方式**: 即座に結果表示（演出なし）
- **再選択**: 同一巡目内で競合敗者は別の選択肢を選択可能

## 🎭 演出仕様

### 開票演出
- **方式**: スロット風演出
- **表示**: 全員分同時表示
- **音**: なし
- **アニメーション時間**: 150ms統一（Framer Motion使用）

### 演出フロー例
```
【第1巡目 開票中...】
田中太郎: 🎰 ガチャガチャ...
山田花子: 🎰 ガチャガチャ...

↓ (順番に止まっていく)

田中太郎: 大谷翔平 ✅
山田花子: 大谷翔平 ❌ (競合！)
```

## 🗄️ データモデル（Firestore）

### コレクション構造
- `app/onlinedraft/group/{groupId}`
- `app/onlinedraft/user/{userId}`
- `app/onlinedraft/selection/{userId}`

### group コレクション
```typescript
{
  groupId: string;          // グループID
  groupName: string;        // グループ名
  deleteFlg: boolean;       // 削除フラグ
  finishedRound: number[];  // 完了した巡目の配列
  round: number;            // 現在の巡目
  createdAt: Timestamp;     // 作成日時（新規）
  updatedAt: Timestamp;     // 更新日時（新規）
  status?: 'waiting' | 'playing' | 'finished'; // 状態（新規）
}
```

### user コレクション
```typescript
{
  userId: string;           // ユーザーID
  userName: string;         // ユーザー名
  groupId: string;          // 所属グループID
  avatar: string;           // アバター画像番号
  joinedAt: Timestamp;      // 参加日時（新規）
  updatedAt: Timestamp;     // 更新日時（新規）
  isActive?: boolean;       // アクティブ状態（新規）
}
```

### selection コレクション
```typescript
{
  selection: {
    item: string;           // 選択したアイテム
    comment: string;        // コメント
    round: number;          // 巡目
    userId: string;         // ユーザーID
    randomNumber: number;   // 競合解決用乱数
    success?: boolean;      // 取得成功フラグ（新規）
    createdAt?: Timestamp;  // 選択日時（新規）
  }[];
  createdAt: Timestamp;     // 作成日時（新規）
  updatedAt: Timestamp;     // 更新日時（新規）
}
```

## 🔄 リアルタイム同期

### 監視対象
- **参加者の増減**: user コレクション
- **入力状況**: selection コレクション
- **巡目の進行**: group.round
- **ゲーム状態**: group.status

全てFirestoreのリアルタイムリスナーで監視・同期

## 🎯 状態管理（Jotai）

### 主要なatom設計（予定）
- `currentUserAtom`: 現在のユーザー情報
- `groupAtom`: グループ情報
- `participantsAtom`: 参加者一覧
- `selectionsAtom`: 全選択情報
- `currentRoundAtom`: 現在の巡目
- `inputStatusAtom`: 入力状況

---

*この機能仕様書は、プロジェクトの進行とともに継続的に更新・改善されます。*