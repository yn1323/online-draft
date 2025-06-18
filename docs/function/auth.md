# 認証仕様書

## 概要

OnlineDraftでは、sessionStorageを使用した一時的なユーザー管理システムを採用しています。
Firebase Authの匿名認証とは独立して、ゲーム参加時のユーザー識別にランダム生成されたIDを使用します。

## 基本設計思想

- **一時性重視**: ブラウザセッション単位でのユーザー管理
- **匿名性保持**: 永続的なユーザー情報を保存しない
- **シンプルな実装**: sessionStorageのみで完結する認証フロー

## 技術仕様

### sessionStorageキー

```typescript
const SESSION_USER_KEY = 'onlinedraft_user_id';
```

### ユーザーID生成

```typescript
import { generateRandomId } from '@/src/helpers/utils/firebase';

// Firestoreのdoc()を利用した20文字のランダムID生成
const userId = generateRandomId();
```

## 処理フロー

### 1. 新規参加時（/lobby → /draft）

```typescript
// LobbyPageでの新規参加処理
const handleJoinConfirm = async (userData: { name: string; avatar: string }) => {
  // 1. ランダムIDを生成
  const userId = generateRandomId();
  
  // 2. Firestoreにユーザー情報を保存
  await createUser(groupId, userData.name, userData.avatar, userId);
  
  // 3. sessionStorageに保存
  sessionStorage.setItem(SESSION_USER_KEY, userId);
  
  // 4. ドラフト画面へ遷移
  router.push(`/draft/${groupId}`);
};
```

### 2. ドラフト画面表示時（/draft）

```typescript
// DraftPageでの認証チェック
useEffect(() => {
  const checkAuth = async () => {
    // 1. sessionStorageからユーザーID取得
    const userId = sessionStorage.getItem(SESSION_USER_KEY);
    
    if (!userId) {
      // IDがない場合は/lobbyへリダイレクト
      router.push(`/lobby/${groupId}`);
      return;
    }
    
    // 2. Firestoreでユーザー存在確認
    const userExists = await checkUserExists(groupId, userId);
    
    if (!userExists) {
      // ユーザーが存在しない場合も/lobbyへリダイレクト
      router.push(`/lobby/${groupId}`);
      return;
    }
    
    // 3. 正常に認証完了
    setCurrentUserId(userId);
  };
  
  checkAuth();
}, [groupId]);
```

## 特徴と制約

### 特徴

1. **自動クリーンアップ**
   - ブラウザを閉じると自動的にsessionStorageがクリアされる
   - 明示的な削除処理が不要

2. **タブごとの独立性**
   - 各タブで異なるユーザーとして参加可能
   - 友人同士のゲームでは問題にならない（むしろ楽しい要素）

3. **プライバシー保護**
   - 永続的なユーザー情報を保存しない
   - セッション終了と共に紐付けが消える

### 制約

1. **再参加時の扱い**
   - ブラウザを閉じた後は新規ユーザーとして参加
   - 前回のユーザー情報は引き継がれない

2. **直接URLアクセス**
   - `/draft/[groupId]`に直接アクセスした場合は`/lobby`へリダイレクト
   - 必ず`/lobby`経由での参加が必要

3. **複数ゲーム非対応**
   - 同時に複数のゲームには参加できない
   - 別のゲームに参加する場合は、前のユーザーIDが上書きされる

## エラーハンドリング

### sessionStorageが使用できない場合

```typescript
try {
  sessionStorage.setItem(SESSION_USER_KEY, userId);
} catch (error) {
  // プライベートブラウジングモードなどでsessionStorageが使えない場合
  errorToast('ブラウザの設定により参加できません');
  return;
}
```

### Firestoreとの不整合

- sessionStorageにIDがあるが、Firestoreにユーザーが存在しない
- → `/lobby`へリダイレクトして再参加を促す

## セキュリティ考慮事項

1. **ユーザーIDの予測不可能性**
   - Firestoreのdoc()が生成する20文字のランダムID使用
   - 衝突の可能性は極めて低い

2. **なりすまし対策**
   - ユーザーIDを知っていれば他人になりすませる
   - ただし、友人同士の限定的なゲームなので実害は少ない
   - 必要に応じて、グループ参加時のパスワード機能などを追加可能

## 今後の拡張可能性

1. **Remember Me機能**
   - localStorageを併用した任意の再参加機能

2. **複数ゲーム対応**
   - sessionStorageのキーにgroupIdを含める
   - 例：`onlinedraft_user_${groupId}`

3. **ユーザー切り替え機能**
   - 既存参加者リストから選択して切り替え