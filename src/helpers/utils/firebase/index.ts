'use client';

import { collection, doc, type Timestamp } from 'firebase/firestore';
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

/**
 * Firebase TimestampをUI表示用の文字列に変換
 * @param timestamp Firebase Timestamp
 * @returns 相対時刻の文字列（例: "今", "3分前", "2時間前"）
 */
export const formatTimestamp = (timestamp: Timestamp): string => {
  const date = timestamp.toDate();
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  // 1分未満
  if (diff < 60000) {
    return '今';
  }

  // 1時間未満
  if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes}分前`;
  }

  // 24時間未満
  if (diff < 86400000) {
    const hours = Math.floor(diff / 3600000);
    return `${hours}時間前`;
  }

  // それ以上は日付表示
  return date.toLocaleDateString('ja-JP', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Firebase Timestampを日本時間のHH:mm形式に変換
 * @param timestamp Firebase Timestamp
 * @returns 日本時間の時刻文字列（例: "14:30"）
 */
export const formatChatTime = (timestamp: Timestamp): string => {
  return timestamp.toDate().toLocaleTimeString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};
