import { createSlice } from '@reduxjs/toolkit'
import { Chat as StateType } from 'Store'

const STORE_NAME = 'chat'

export const defaultVal: StateType = {
  context: [],
}

const initialState: StateType = {
  ...defaultVal,
}

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setContext: (state: StateType, { payload }) => {
      return { ...state, context: payload }
    },
  },
})

export default State.reducer

export const { setContext } = State.actions
