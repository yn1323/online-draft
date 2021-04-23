import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { isProduction } from 'src/constant'
import component from 'src/store/component'
import chat from 'src/store/chat'
import draft from 'src/store/draft'
import userInfo from 'src/store/userInfo'

const reducer = combineReducers({
  component,
  chat,
  draft,
  userInfo,
})

// getDefaultMiddleware: serializeエラーがスマホで発生するため
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => {
    return isProduction
      ? getDefaultMiddleware({ serializableCheck: false })
      : getDefaultMiddleware({ serializableCheck: false }).concat(logger)
  },
  devTools: isProduction,
})

export default store
