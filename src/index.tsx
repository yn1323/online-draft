import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import Index from 'src/page/Index'
import { I18nextProvider } from 'react-i18next'

import * as serviceWorkerRegistration from 'src/serviceWorkerRegistration'
import reportWebVitals from 'src/reportWebVitals'
import i18n from 'src/locales'
import store from 'src/store'

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Index />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
