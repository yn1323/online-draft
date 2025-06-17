/**
 * 動的にベースURLを生成する
 * Server ActionsとRoute Handlersで共通利用
 */
export const createBaseUrl = async () => {
  const { headers } = await import('next/headers');
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  return `${protocol}://${host}`;
};

/**
 * リクエストからオリジンURLを取得する
 * Route Handlersで利用
 */
export const getOriginFromRequest = (requestUrl: string) => {
  const { origin } = new URL(requestUrl);
  return origin;
};

/**
 * 入力値からルームIDを抽出する
 * 対応パターン:
 * - フルURL: https://example.com/lobby/abc123 → abc123
 * - 相対URL: /lobby/abc123 → abc123
 * - ID直接: abc123 → abc123
 */
export const extractRoomId = (input: string): string | null => {
  if (!input || !input.trim()) {
    return null;
  }

  const trimmedInput = input.trim();

  // URLパターンの場合
  if (trimmedInput.includes('/lobby/')) {
    const match = trimmedInput.match(/\/lobby\/([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
  }

  // ID直接入力の場合（英数字のみ）
  if (/^[a-zA-Z0-9]+$/.test(trimmedInput)) {
    return trimmedInput;
  }

  return null;
};
