import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const title = 'オンラインドラフト会議'
  const description =
    '友達同士での野球、競馬(POG)で使える無料オンラインドラフト会議システム。利用開始に不要な登録など必要なし！URLをシェアするだけ！'
  const url = 'https://online-draft.vercel.app/'
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';


  return (
    <Html>
      <Head>
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="img/logo/og.png" />
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content="ja_JP" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta
          name="twitter:image"
          content="https://online-draft.vercel.app/img/logo/og.png"
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="twitter:locale" content="ja_JP" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="img/logo/favicon.png"
        />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
