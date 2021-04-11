import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { isProduction } from 'src/constant'
import sample from 'src/store/sample'
import component from 'src/store/component'

const reducer = combineReducers({
  sample,
  component,
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
