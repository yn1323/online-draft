import React from 'react'

import { AppProps } from 'next/app'

import '@/styles/page/Home.scss'
import '@/styles/page/Entry.scss'
import '@/styles/page/Draft.scss'
import '@/styles/page/Loading.scss'
import '@/styles/page/New.scss'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
