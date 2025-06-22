'use client';

import { collection, doc } from 'firebase/firestore';
import { db } from '@/src/lib/firebase';

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
