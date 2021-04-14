import { createSlice } from '@reduxjs/toolkit'
import { User as StateType } from 'Store'

const STORE_NAME = 'user'

export const defaultVal: StateType = {
  groupId: '',
  users: [],
}

const initialState: StateType = {
  ...defaultVal,
}

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    initializeUser: (state: StateType) => {
      return { ...state }
    },
  },
})

export default State.reducer

export const { initializeUser } = State.actions
