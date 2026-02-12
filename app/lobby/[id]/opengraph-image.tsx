import { getGroupNameFromRest } from '@/src/lib/firestore-rest';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'みんなでドラフト';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Google Fonts から Noto Sans JP Bold を取得（TTF形式）
// モジュールレベルでfetchしてリクエスト間でキャッシュ
const fontPromise = (async (): Promise<ArrayBuffer | null> => {
  try {
    // 古いUser-AgentでTTF形式を取得（WOFF2サブセット分割を回避）
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700',
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
        },
      },
    ).then((res) => res.text());

    const fontUrl = css.match(
      /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
    )?.[1];
    if (!fontUrl) {
      return null;
    }

    return await fetch(fontUrl).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
})();

const getFontSize = (text: string) => {
  if (text.length <= 10) {
    return 64;
  }
  if (text.length <= 15) {
    return 56;
  }
  if (text.length <= 25) {
    return 44;
  }
  return 36;
};

const truncateText = (text: string, maxLength = 30) => {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength)}…`;
};

type Props = {
  params: Promise<{ id: string }>;
};

const Image = async ({ params }: Props) => {
  const { id } = await params;

  const [groupName, fontData] = await Promise.all([
    getGroupNameFromRest(id),
    fontPromise,
  ]);

  const displayName = truncateText(groupName || 'みんなでドラフト');
  const fontSize = getFontSize(displayName);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #3182ce, #805ad5, #d53f8c)',
        fontFamily: '"Noto Sans JP"',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 装飾: 背景の円 */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.06)',
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.06)',
          display: 'flex',
        }}
      />

      {/* サービス名 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '32px',
          marginBottom: '24px',
          letterSpacing: '0.05em',
        }}
      >
        🎲 みんなでドラフト
      </div>

      {/* ドラフト名カード */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '24px',
          padding: '40px 64px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          maxWidth: '900px',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: `${fontSize}px`,
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          {displayName}
        </div>
      </div>

      {/* キャッチコピー */}
      <div
        style={{
          display: 'flex',
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '24px',
          marginTop: '32px',
          letterSpacing: '0.05em',
        }}
      >
        推しを選んで、かぶったら勝負！
      </div>
    </div>,
    {
      ...size,
      fonts: fontData
        ? [
            {
              name: 'Noto Sans JP',
              data: fontData,
              style: 'normal' as const,
              weight: 700 as const,
            },
          ]
        : [],
    },
  );
};

export default Image;
