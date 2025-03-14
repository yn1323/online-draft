import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import { Provider } from 'react-redux'
import { themeChakra } from '@/constants/theme'
import { store } from '@/stores/store'

import '@/styles/page/Home.scss'
import '@/styles/page/Entry.scss'
import '@/styles/page/Draft.scss'
import '@/styles/page/Loading.scss'
import '@/styles/page/New.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''
  return (
    <ChakraProvider theme={themeChakra}>
      <Provider store={store}>
        <Head>
          <title>オンラインドラフト会議</title>
        </Head>
        <Script id="gtm" strategy="beforeInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
        </Script>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
