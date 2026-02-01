'use client';

import { Provider } from '@/src/components/ui/provider';
import type { Timestamp } from 'firebase/firestore';
import type { Atom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import type { ReactNode } from 'react';

// biome-ignore lint/suspicious/noExplicitAny: Jotai Atom tuple
type AtomTuple = [Atom<any>, any];

type HydrateAtomsProps = {
  initialValues: AtomTuple[];
  children: ReactNode;
};

const HydrateAtoms = ({ initialValues, children }: HydrateAtomsProps) => {
  useHydrateAtoms(initialValues);
  return <>{children}</>;
};

type DemoWrapperProps = {
  initialValues: AtomTuple[];
  children: ReactNode;
};

/**
 * ガイドページ用デモコンポーネントラッパー
 * Jotai Atomsを固定値で初期化してコンポーネントを表示する
 */
export const DemoWrapper = ({ initialValues, children }: DemoWrapperProps) => {
  return (
    <Provider>
      <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
    </Provider>
  );
};

// ===============================
// 型定義（各コンポーネントで使用）
// ===============================

export type DemoUserAtom = {
  id: string;
  name: string;
  avatar: string;
};

export type DemoChatAtom = {
  date: Timestamp;
  message: string;
  userId: string;
};

export type DemoSelectionAtom = {
  item: string;
  comment: string;
  round: number;
  userId: string;
  groupId: string;
  randomNumber: number;
};

export type DemoGroupAtom = {
  round: number;
  groupName: string;
};
