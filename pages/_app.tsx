import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
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
  return (
    <ChakraProvider theme={themeChakra}>
      <Provider store={store}>
        <Head>
          <title>オンラインドラフト会議</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
