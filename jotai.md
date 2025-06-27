# Jotai開発ガイド

OnlineDraftプロジェクトでのJotaiを使った状態管理パターンとベストプラクティス集

## 📚 目次

1. [概要](#概要)
2. [基本的なAtomの作成と利用](#基本的なatomの作成と利用)
3. [派生Atom（Derived Atoms）パターン](#派生atomderived-atomsパターン)
4. [コンポーネントファイルでのAtom定義](#コンポーネントファイルでのatom定義)
5. [Storybookでの実装パターン](#storybookでの実装パターン)
6. [ファイル構成とベストプラクティス](#ファイル構成とベストプラクティス)
7. [実装例とコードスニペット](#実装例とコードスニペット)
8. [トラブルシューティング](#トラブルシューティング)

## 概要

### Jotaiとは

Jotaiは「原子的」な状態管理ライブラリで、小さなatomを組み合わせて複雑な状態を管理する React 向けライブラリです。

### OnlineDraftプロジェクトでの採用理由

- **Context API使用禁止**のプロジェクトルールに適合
- **シンプルなAPI**でClaudeとの協働開発に最適
- **原子的な設計**で状態の依存関係を明確化
- **TypeScript**との相性が良い

### 基本的な考え方

```typescript
// 小さなatomを定義
const countAtom = atom(0)
const userAtom = atom({ name: 'Alice' })

// atomを組み合わせて派生状態を作成
const greetingAtom = atom((get) => {
  const count = get(countAtom)
  const user = get(userAtom)
  return `Hello ${user.name}! Count: ${count}`
})
```

## 基本的なAtomの作成と利用

### 1. 基本的なAtom定義

```typescript
// src/components/features/draft/states.ts
import { atom } from 'jotai'
import type { Timestamp } from 'firebase/firestore'

// グループ関連
export const groupIdAtom = atom('')
export const currentUserIdAtom = atom('')
export const groupAtom = atom({ round: -1, groupName: '' })

// ユーザー関連
type UserAtom = {
  id: string
  name: string
  avatar: string
}
export const usersAtom = atom<UserAtom[]>([])

// チャット関連
type ChatAtom = {
  date: Timestamp
  message: string
  userId: string
}
export const chatsAtom = atom<ChatAtom[]>([])
```

### 2. コンポーネントでの使用

```typescript
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { usersAtom, currentUserIdAtom } from '../states'

const MyComponent = () => {
  // 読み取り専用
  const users = useAtomValue(usersAtom)
  const currentUserId = useAtomValue(currentUserIdAtom)
  
  // 読み書き
  const [currentUserId, setCurrentUserId] = useAtom(currentUserIdAtom)
  
  // 書き込み専用
  const setUsers = useSetAtom(usersAtom)
  
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
```

## 派生Atom（Derived Atoms）パターン

### 概念

複数のAtomを組み合わせて新しい状態を作る仕組み。依存するAtomが変更されると自動的に再計算されます。

### 実装例：chatMessageUIAtom

```typescript
// src/components/features/draft/ChatMessageList/index.tsx
import { atom, useAtomValue } from 'jotai'
import { chatsAtom, usersAtom, currentUserIdAtom } from '../states'
import { formatTimestamp } from '@/src/helpers/utils/firebase'
import type { ChatMessageUIType } from '@/src/hooks/firebase/chat/useRealtimeChat'

/**
 * チャットメッセージをUI表示用に変換するAtom
 * chats, users, currentUserIdを組み合わせてUI用のデータを生成
 */
const chatMessageUIAtom = atom<ChatMessageUIType[]>((get) => {
  const chats = get(chatsAtom)
  const users = get(usersAtom)
  const currentUserId = get(currentUserIdAtom)

  return chats.map((chat) => {
    const user = users.find(u => u.id === chat.userId)
    const isCurrentUser = chat.userId === currentUserId
    
    return {
      id: `${chat.userId}-${chat.date.toMillis()}`,
      userName: user?.name || 'Unknown User',
      avatar: user?.avatar || '1',
      content: chat.message,
      timestamp: formatTimestamp(chat.date),
      isCurrentUser,
      isSystem: false,
    }
  })
})
```

### パフォーマンス考慮事項

- 派生Atomは依存するAtomが変更された時のみ再計算される
- `get`関数内で参照したAtomが自動的に依存関係になる
- 複雑な計算は派生Atomに分離することで、コンポーネントの再レンダリングを最小化

## コンポーネントファイルでのAtom定義

### パターン1: コンポーネント内でローカルAtom定義

```typescript
// コンポーネント専用のAtomをファイル内で定義
const chatMessageUIAtom = atom<ChatMessageUIType[]>((get) => {
  // 複数のグローバルAtomを組み合わせて派生状態を作成
  const chats = get(chatsAtom)
  const users = get(usersAtom)
  const currentUserId = get(currentUserIdAtom)
  
  // UI用のデータ変換ロジック
  return chats.map(/* ... */)
})

export const ChatMessageList = () => {
  // 派生Atomを使用
  const chatMessages = useAtomValue(chatMessageUIAtom)
  
  return (
    <VStack gap={3} align="stretch">
      {chatMessages.map(message => (
        <div key={message.id}>{message.content}</div>
      ))}
    </VStack>
  )
}
```

### パターン2: ヘルパー関数の分離

```typescript
// src/helpers/utils/firebase/index.ts
export const formatTimestamp = (timestamp: Timestamp): string => {
  const date = timestamp.toDate()
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  
  if (diff < 60000) return '今'
  if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000)
    return `${minutes}分前`
  }
  // ... その他の時間計算
}
```

## Storybookでの実装パターン

### 推奨パターン: Provider + useHydrateAtoms

storybook-addon-jotaiが使用できない場合の公式推奨パターンです。

```typescript
// src/components/features/draft/ChatMessageList/index.stories.tsx
import { Provider } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { ChatMessageList } from './index'
import { chatsAtom, usersAtom, currentUserIdAtom } from '../states'

// 型定義
type AtomTuple = [any, any] // eslint-disable-line @typescript-eslint/no-explicit-any

// Jotai公式推奨パターン: Provider + useHydrateAtoms
const HydrateAtoms = ({
  initialValues,
  children,
}: {
  initialValues: AtomTuple[]
  children: React.ReactNode
}) => {
  useHydrateAtoms(initialValues)
  return children
}

const TestProvider = ({
  initialValues,
  children,
}: {
  initialValues: AtomTuple[]
  children: React.ReactNode
}) => (
  <Provider>
    <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
  </Provider>
)

// テストデータ
const testUsers = [
  { id: 'user1', name: 'タナカ', avatar: '1' },
  { id: 'user2', name: 'サトウ', avatar: '2' },
]

const defaultChats = [
  {
    userId: 'user1',
    message: 'こんにちは〜！',
    date: Timestamp.now(),
  },
]

// Wrapper コンポーネント
const DefaultWrapper = () => (
  <TestProvider initialValues={[
    [usersAtom, testUsers],
    [currentUserIdAtom, 'user1'],
    [chatsAtom, defaultChats],
  ]}>
    <ChatMessageList />
  </TestProvider>
)

const NoMessageWrapper = () => (
  <TestProvider initialValues={[
    [usersAtom, testUsers],
    [currentUserIdAtom, 'user1'],
    [chatsAtom, []], // 空のチャット
  ]}>
    <ChatMessageList />
  </TestProvider>
)

// ストーリー定義
export const Default: Story = {
  render: () => <DefaultWrapper />,
}

export const NoMessage: Story = {
  render: () => <NoMessageWrapper />,
}
```

### メリット

- **公式推奨**: Jotai公式ドキュメント準拠
- **安定性**: storybook-addon-jotaiに依存しない
- **柔軟性**: 複雑な初期状態も設定可能
- **テスト互換**: 同じパターンをテストでも使用可能

## ファイル構成とベストプラクティス

### 推奨ディレクトリ構造

```
src/
├── components/features/draft/
│   ├── states.ts              # グローバルAtom定義
│   ├── ChatMessageList/
│   │   ├── index.tsx          # コンポーネント + ローカルAtom
│   │   └── index.stories.tsx  # Storybook
│   └── ChatInputForm/
│       ├── index.tsx
│       └── index.stories.tsx
├── helpers/utils/
│   └── firebase/
│       └── index.ts           # ヘルパー関数
└── hooks/
    └── firebase/
        └── chat/
            └── useRealtimeChat.ts # 型定義
```

### ファイル別責務

#### 1. states.ts - グローバルAtom管理
```typescript
// 複数コンポーネントで共有するAtom
export const groupIdAtom = atom('')
export const usersAtom = atom<UserAtom[]>([])
export const chatsAtom = atom<ChatAtom[]>([])
```

#### 2. コンポーネントファイル - ローカルAtom + UI
```typescript
// そのコンポーネント専用の派生Atom
const chatMessageUIAtom = atom<ChatMessageUIType[]>((get) => {
  // グローバルAtomを組み合わせて派生状態を作成
})

// コンポーネント本体
export const ChatMessageList = () => {
  const chatMessages = useAtomValue(chatMessageUIAtom)
  // UI レンダリング
}
```

#### 3. helpers/utils - 純粋関数
```typescript
// Atomから独立したヘルパー関数
export const formatTimestamp = (timestamp: Timestamp): string => {
  // 純粋な変換ロジック
}
```

### ベストプラクティス

#### ✅ DO（推奨）

1. **小さなAtomを組み合わせる**
```typescript
// ✅ 小さなAtomを定義
const userIdAtom = atom('')
const usersAtom = atom<User[]>([])

// ✅ 派生Atomで組み合わせ
const currentUserAtom = atom((get) => {
  const userId = get(userIdAtom)
  const users = get(usersAtom)
  return users.find(u => u.id === userId)
})
```

2. **型安全性を保つ**
```typescript
// ✅ 型を明示的に定義
type ChatAtom = {
  date: Timestamp
  message: string
  userId: string
}
const chatsAtom = atom<ChatAtom[]>([])
```

3. **依存関係を明確にする**
```typescript
// ✅ 派生Atomで依存関係を明示
const chatUIAtom = atom((get) => {
  // get()で依存関係が自動的に追跡される
  const chats = get(chatsAtom)
  const users = get(usersAtom)
  // ...
})
```

#### ❌ DON'T（非推奨）

1. **巨大なAtomを作らない**
```typescript
// ❌ 複雑すぎるAtom
const everythingAtom = atom({
  users: [],
  chats: [],
  groups: [],
  settings: {},
  // ...
})
```

2. **Atom内で副作用を起こさない**
```typescript
// ❌ 副作用を含むAtom（非推奨）
const badAtom = atom((get) => {
  const data = get(someAtom)
  // ❌ 副作用
  localStorage.setItem('data', JSON.stringify(data))
  return data
})
```

## 実装例とコードスニペット

### 完全な実装例：ChatMessageList

```typescript
// src/components/features/draft/ChatMessageList/index.tsx
import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { atom, useAtomValue } from 'jotai'
import { Avatar } from '@/src/components/atoms/Avatar'
import {
  chatsAtom,
  currentUserIdAtom,
  usersAtom,
} from '@/src/components/features/draft/states'
import { formatTimestamp } from '@/src/helpers/utils/firebase'
import type { ChatMessageUIType } from '@/src/hooks/firebase/chat/useRealtimeChat'

/**
 * チャットメッセージをUI表示用に変換するAtom
 */
const chatMessageUIAtom = atom<ChatMessageUIType[]>((get) => {
  const chats = get(chatsAtom)
  const users = get(usersAtom)
  const currentUserId = get(currentUserIdAtom)

  return chats.map((chat) => {
    const user = users.find((u) => u.id === chat.userId)
    const isCurrentUser = chat.userId === currentUserId

    return {
      id: `${chat.userId}-${chat.date.toMillis()}`,
      userName: user?.name || 'Unknown User',
      avatar: user?.avatar || '1',
      content: chat.message,
      timestamp: formatTimestamp(chat.date),
      isCurrentUser,
      isSystem: false,
    }
  })
})

/**
 * チャットメッセージ一覧を表示する共通コンポーネント
 */
export const ChatMessageList = () => {
  const chatMessages = useAtomValue(chatMessageUIAtom)

  return (
    <VStack gap={3} align="stretch">
      {chatMessages.map((message) => {
        const content = message.content
        const isCurrentUser = message.isCurrentUser || false
        const isSystem = message.isSystem || false

        return (
          <HStack key={message.id} align="start" gap={2} w="full">
            {/* 左要素: 他人の場合はアバター、自分の場合は空のスペーサー */}
            {isCurrentUser ? (
              <Box w="32px" flexShrink={0} />
            ) : (
              <Avatar
                avatarNumber={message.avatar}
                name={message.userName}
                size="xs"
              />
            )}

            {/* 中央: メッセージボックス */}
            <Box
              p={3}
              borderRadius="lg"
              bg={
                isSystem ? 'orange.50' : isCurrentUser ? 'blue.50' : 'gray.50'
              }
              border="1px solid"
              borderColor={
                isSystem
                  ? 'orange.200'
                  : isCurrentUser
                    ? 'blue.200'
                    : 'gray.200'
              }
              flex={1}
            >
              <HStack>
                <Text
                  fontSize="xs"
                  color={
                    isSystem
                      ? 'orange.600'
                      : isCurrentUser
                        ? 'blue.700'
                        : 'gray.700'
                  }
                  fontWeight="bold"
                >
                  {message.userName}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {message.timestamp}
                </Text>
              </HStack>
              <Text
                fontSize={['xs', 'sm']}
                color={
                  isSystem
                    ? 'orange.800'
                    : isCurrentUser
                      ? 'blue.800'
                      : 'gray.800'
                }
                mt={1}
              >
                {content}
              </Text>
            </Box>

            {/* 右要素: 自分の場合はアバター、他人の場合は空のスペーサー */}
            {isCurrentUser ? (
              <Avatar
                avatarNumber={message.avatar}
                name={message.userName}
                size="xs"
              />
            ) : (
              <Box w="32px" flexShrink={0} />
            )}
          </HStack>
        )
      })}
    </VStack>
  )
}
```

### Storybookテンプレート

```typescript
// テンプレート: 新しいコンポーネントのStorybook作成時に使用
import { Provider } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { YourComponent } from './index'
import { yourAtom1, yourAtom2 } from '../states'

type AtomTuple = [any, any] // eslint-disable-line @typescript-eslint/no-explicit-any

const HydrateAtoms = ({
  initialValues,
  children,
}: {
  initialValues: AtomTuple[]
  children: React.ReactNode
}) => {
  useHydrateAtoms(initialValues)
  return children
}

const TestProvider = ({
  initialValues,
  children,
}: {
  initialValues: AtomTuple[]
  children: React.ReactNode
}) => (
  <Provider>
    <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
  </Provider>
)

const DefaultWrapper = () => (
  <TestProvider initialValues={[
    [yourAtom1, 'initial value'],
    [yourAtom2, []],
  ]}>
    <YourComponent />
  </TestProvider>
)

export const Default: Story = {
  render: () => <DefaultWrapper />,
}
```

## トラブルシューティング

### よくあるエラーと解決法

#### 1. 「Atom has no value」エラー

**エラー例:**
```
Error: Atom has no value
```

**原因:** Atomが初期化されていない、または存在しないAtomを参照している

**解決法:**
```typescript
// ✅ 初期値を必ず設定
const myAtom = atom('') // 空文字列で初期化
const myArrayAtom = atom<User[]>([]) // 空配列で初期化

// ✅ 条件付きで参照
const derivedAtom = atom((get) => {
  const value = get(myAtom)
  if (!value) return null // 空の場合の処理
  // ...
})
```

#### 2. 無限ループエラー

**エラー例:**
```
Error: Too many re-renders
```

**原因:** 派生Atomが自分自身を参照している、または循環依存

**解決法:**
```typescript
// ❌ 循環依存
const atomA = atom((get) => get(atomB) + 1)
const atomB = atom((get) => get(atomA) + 1)

// ✅ 一方向の依存関係
const baseAtom = atom(0)
const derivedAtom = atom((get) => get(baseAtom) + 1)
```

#### 3. TypeScriptの型エラー

**エラー例:**
```
Type 'unknown' is not assignable to type 'User[]'
```

**解決法:**
```typescript
// ✅ 型を明示的に指定
const usersAtom = atom<User[]>([])

// ✅ 派生Atomでも型を指定
const filteredUsersAtom = atom<User[]>((get) => {
  const users = get(usersAtom)
  return users.filter(user => user.active)
})
```

#### 4. Storybookでの初期化エラー

**エラー例:**
```
Error: useAtom can only be used within a Provider
```

**解決法:**
```typescript
// ✅ 必ずProviderでラップ
const YourStory = () => (
  <Provider>
    <HydrateAtoms initialValues={[/* ... */]}>
      <YourComponent />
    </HydrateAtoms>
  </Provider>
)
```

### パフォーマンス問題

#### 1. 過度な再レンダリング

**症状:** コンポーネントが頻繁に再レンダリングされる

**解決法:**
```typescript
// ✅ 必要な部分だけを購読
const MyComponent = () => {
  // ❌ オブジェクト全体を購読
  const user = useAtomValue(userAtom)
  
  // ✅ 必要な部分だけを派生Atomで取得
  const userNameAtom = atom((get) => get(userAtom).name)
  const userName = useAtomValue(userNameAtom)
  
  return <div>{userName}</div>
}
```

#### 2. 重い計算の最適化

```typescript
// ✅ useMemoのようにAtomでメモ化
const expensiveComputationAtom = atom((get) => {
  const data = get(dataAtom)
  // 重い計算（依存するatomが変更された時のみ実行される）
  return data.map(item => computeExpensiveValue(item))
})
```

### デバッグのコツ

1. **React DevToolsでAtomの状態を確認**
2. **console.logで依存関係を追跡**
```typescript
const debugAtom = atom((get) => {
  const value = get(someAtom)
  console.log('debugAtom recalculated:', value)
  return value
})
```

3. **Jotai DevToolsの使用**（開発環境）
```typescript
import { DevTools } from 'jotai-devtools'

const App = () => (
  <Provider>
    <DevTools />
    <YourApp />
  </Provider>
)
```

---

## まとめ

このガイドでは、OnlineDraftプロジェクトで実装したJotaiパターンをまとめました：

1. **基本的なAtom定義**: states.tsでのグローバル状態管理
2. **派生Atom**: 複数のAtomを組み合わせたUI用データ生成
3. **コンポーネント内Atom**: ローカルな状態変換ロジック
4. **Storybook対応**: Provider + useHydrateAtomsパターン

このパターンに従うことで、保守性が高く、テストしやすい状態管理を実現できます。