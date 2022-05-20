import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import logger from 'redux-logger'

import chat from '@/stores/chat'
import component from '@/stores/component'
import draft from '@/stores/draft'
import userInfo from '@/stores/userInfo'
import { isProduction } from '@/constants/common'

const reducer = combineReducers({
  component,
  chat,
  draft,
  userInfo,
})

// getDefaultMiddleware: serializeエラーがスマホで発生するため
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => {
    return isProduction
      ? getDefaultMiddleware({ serializableCheck: false })
      : getDefaultMiddleware({ serializableCheck: false }).concat(logger)
  },
  devTools: isProduction,
})
