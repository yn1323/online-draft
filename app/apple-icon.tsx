import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';
export const dynamic = 'force-dynamic';

const AppleIcon = () => {
  return new ImageResponse(
    <div
      style={{
        fontSize: 140,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
      }}
    >
      🎲
    </div>,
    {
      ...size,
    },
  );
};

export default AppleIcon;
