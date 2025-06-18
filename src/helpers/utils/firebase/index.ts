'use client';

import { db } from '@/src/lib/firebase';
import { collection, doc } from 'firebase/firestore';

/**
 * FirestoreからランダムなドキュメントIDを生成する
 * @returns ランダムに生成されたドキュメントID（20文字の英数字）
 */
export const generateRandomId = (): string => {
  // 任意のコレクションパスを使用（実際にはコレクションは作成されない）
  const tempCollectionRef = collection(db, '_temp');
  const newDocRef = doc(tempCollectionRef);
  return newDocRef.id;
};
