import type { Meta, StoryObj } from '@storybook/react';
import { Timestamp } from 'firebase/firestore';
import { Provider } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { chatsAtom, currentUserIdAtom, usersAtom } from '../states';
import { ChatMessageList } from './index';

// Storybook用の型定義（statesファイルの型と同じ）
type UserAtom = {
  id: string;
  name: string;
  avatar: string;
};

type ChatAtom = {
  date: Timestamp;
  message: string;
  userId: string;
};

// タイムスタンプ生成ヘルパー
const createTimestamp = (minutesAgo: number): Timestamp => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - minutesAgo);
  return Timestamp.fromDate(date);
};

// テストユーザー
const testUsers: UserAtom[] = [
  { id: 'user1', name: 'タナカ', avatar: '1' },
  { id: 'user2', name: 'サトウ', avatar: '2' },
  { id: 'user3', name: 'ヤマダ', avatar: '3' },
];

// デフォルトのチャットメッセージ
const defaultChats: ChatAtom[] = [
  {
    userId: 'user1',
    message: 'こんにちは〜！今日のドラフト楽しみだね！',
    date: createTimestamp(5),
  },
  {
    userId: 'user2',
    message: 'そうだね！誰を1番に指名する？',
    date: createTimestamp(4),
  },
  {
    userId: 'user1',
    message: '悩むな〜。みんなはどう？',
    date: createTimestamp(3),
  },
  {
    userId: 'user3',
    message: '私はもう決めてるよ〜',
    date: createTimestamp(2),
  },
];

// Jotai公式推奨パターン: Provider + useHydrateAtoms
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AtomTuple = [any, any];

const HydrateAtoms = ({
  initialValues,
  children,
}: {
  initialValues: AtomTuple[];
  children: React.ReactNode;
}) => {
  useHydrateAtoms(initialValues);
  return children;
};

const TestProvider = ({
  initialValues,
  children,
}: {
  initialValues: AtomTuple[];
  children: React.ReactNode;
}) => (
  <Provider>
    <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
  </Provider>
);

// Default用のWrapperコンポーネント
const DefaultWrapper = () => {
  return (
    <TestProvider
      initialValues={[
        [usersAtom, testUsers],
        [currentUserIdAtom, 'user1'],
        [chatsAtom, defaultChats],
      ]}
    >
      <ChatMessageList />
    </TestProvider>
  );
};

// NoMessage用のWrapperコンポーネント
const NoMessageWrapper = () => {
  return (
    <TestProvider
      initialValues={[
        [usersAtom, testUsers],
        [currentUserIdAtom, 'user1'],
        [chatsAtom, []], // 空のチャット
      ]}
    >
      <ChatMessageList />
    </TestProvider>
  );
};

const meta: Meta<typeof ChatMessageList> = {
  title: 'Features/draft/ChatMessageList',
  component: ChatMessageList,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト表示
 * 複数ユーザーの会話を表示
 */
export const Default: Story = {
  render: () => <DefaultWrapper />,
};

/**
 * メッセージなし
 * チャットメッセージが空の状態
 */
export const NoMessage: Story = {
  render: () => <NoMessageWrapper />,
};
