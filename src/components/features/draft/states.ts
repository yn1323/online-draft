import type { Timestamp } from 'firebase/firestore';
import { atom } from 'jotai';

export const groupIdAtom = atom('');
export const currentUserIdAtom = atom('');
export const groupAtom = atom({ round: -1, groupName: '' });

type UserAtom = {
  id: string;
  name: string;
  avatar: string;
};
export const usersAtom = atom<UserAtom[]>([]);

type ChatAtom = {
  date: Timestamp;
  message: string;
  userId: string;
};
export const chatsAtom = atom<ChatAtom[]>([]);

type SelectionAtom = {
  item: string;
  comment: string;
  round: number;
  userId: string;
  groupId: string;
  randomNumber: number;
};
export const selectionsAtom = atom<SelectionAtom[]>([]);

// ItemSelectModal用の状態管理
export const itemSelectUserIdAtom = atom<string | null>(null);
export const itemSelectRoundAtom = atom<number | null>(null);
