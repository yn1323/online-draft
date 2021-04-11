import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'src/store'
import { Router } from 'react-router-dom'
import { createHashHistory } from 'history'
import Index from 'src/page/Index'
import registerServiceWorker from 'src/reagisterServiceWorker'
import 'src/asset/scss/index.scss'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import i18n from 'src/locales'
import { I18nextProvider } from 'react-i18next'
import { initAd } from 'src/helper'

const run = (isEmulator = true) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#208DC3',
        contrastText: '#eee',
        dark: '#166187',
        light: '#CBE6F3',
      },
      secondary: {
        main: '#E38692',
        contrastText: '#888',
        dark: '#BB3B4C',
        light: '#F6D4D8',
      },
    },
  })
  ReactDOM.render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <Router history={createHashHistory()}>
              <Index />
            </Router>
          </Provider>
        </MuiThemeProvider>
      </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
  registerServiceWorker()
  if (isEmulator) {
    initAd()
  }
}

// eslint-disable-next-line no-prototype-builtins
if (window.hasOwnProperty('cordova')) {
  document.addEventListener('deviceready', () => run(true), false)
} else {
  run(false)
}
