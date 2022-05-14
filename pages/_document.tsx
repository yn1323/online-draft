import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="友達同士での野球、競馬(POG)で使える無料オンラインドラフト会議システム。利用開始に不要な登録など必要なし！URLをシェアするだけ！"
        />
        <meta property="og:url" content="https://online-draft.vercel.app/" />
        <meta property="og:title" content="オンラインドラフト会議" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="友達同士での野球、競馬(POG)で使える無料オンラインドラフト会議システム。利用開始に不要な登録など必要なし！URLをシェアするだけ！"
        />
        <meta property="og:image" content="img/logo/og.png" />
        <meta property="og:site_name" content="オンラインドラフト会議" />
        <meta property="og:locale" content="ja_JP" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://online-draft.vercel.app/" />
        <meta name="twitter:image" content="img/logo/og.png" />
        <meta name="twitter:title" content="オンラインドラフト会議" />
        <meta
          name="twitter:description"
          content="友達同士での野球、競馬(POG)で使える無料オンラインドラフト会議システム。利用開始に不要な登録など必要なし！URLをシェアするだけ！"
        />
        <meta property="twitter:locale" content="ja_JP" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="img/logo/favicon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
