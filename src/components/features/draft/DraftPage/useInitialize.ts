import {
  chatsAtom,
  currentUserIdAtom,
  groupAtom,
  groupIdAtom,
  selectionsAtom,
  usersAtom,
} from '@/src/components/features/draft/states';
import type { ChatLogDataType } from '@/src/hooks/firebase/chat/useChat';
import { useRealtimeChat } from '@/src/hooks/firebase/chat/useRealtimeChat';
import { useRealtimeGroup } from '@/src/hooks/firebase/group/useRealtimeGroup';
import { useRealtimeSelection } from '@/src/hooks/firebase/selection/useRealtimeSelection';
import { useRealtimeUsers } from '@/src/hooks/firebase/user/useRealtimeUsers';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useInitialize = (groupId: string) => {
  const router = useRouter();

  const setGroupId = useSetAtom(groupIdAtom);
  const setCurrentUserId = useSetAtom(currentUserIdAtom);
  const setUsers = useSetAtom(usersAtom);
  const setChats = useSetAtom(chatsAtom);
  const setGroup = useSetAtom(groupAtom);
  const setSelections = useSetAtom(selectionsAtom);

  useEffect(() => {
    // クライアントサイドでのみ実行
    const storedUserId = sessionStorage.getItem('onlinedraft_user_id');
    if (storedUserId) {
      setGroupId(groupId);
      setCurrentUserId(storedUserId);
    } else {
      // userIdがない場合はロビーへリダイレクト（認証チェック）
      router.push(`/lobby/${groupId}`);
    }
  }, [groupId, router, setGroupId, setCurrentUserId]);

  const { users: realtimeUsers, loading: usersLoading } =
    useRealtimeUsers(groupId);

  useEffect(() => {
    const users = realtimeUsers.map(({ avatar, userId, userName }) => ({
      name: userName,
      id: userId,
      avatar,
    }));
    setUsers(users);
  }, [realtimeUsers, setUsers]);

  const { messages, loading: chatLoading } = useRealtimeChat(groupId);

  useEffect(() => {
    const chats = (messages as unknown as ChatLogDataType[]).map(
      ({ date, userId, message }) => ({
        date,
        message,
        userId,
      }),
    );
    setChats(chats);
  }, [messages, setChats]);

  const { group, loading: groupLoading } = useRealtimeGroup(groupId);

  useEffect(() => {
    setGroup({
      round: group?.round ?? -1,
      groupName: group?.groupName ?? '',
    });
  }, [group, setGroup]);

  const { selections, loading: selectionLoading } =
    useRealtimeSelection(groupId);

  useEffect(() => {
    const selection = selections.map(
      ({ item, comment, round, userId, groupId, randomNumber }) => ({
        item,
        comment,
        round,
        userId,
        groupId,
        randomNumber,
      }),
    );
    setSelections(selection);
  }, [selections, setSelections]);

  return {
    isLoading: usersLoading || chatLoading || groupLoading || selectionLoading,
  };
};
