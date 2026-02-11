/**
 * Firestore REST API ユーティリティ
 * Edge RuntimeでFirestoreデータを取得するための軽量ヘルパー
 * （firebase-admin不要、fetch APIのみ使用）
 */
export const getGroupNameFromRest = async (
  groupId: string,
): Promise<string | null> => {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

  if (!projectId || !apiKey) {
    return null;
  }

  try {
    const res = await fetch(
      `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/app/onlinedraft/group/${groupId}?key=${apiKey}&mask.fieldPaths=groupName`,
      { next: { revalidate: 60 } },
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.fields?.groupName?.stringValue || null;
  } catch {
    return null;
  }
};
