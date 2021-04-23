import { createSlice } from '@reduxjs/toolkit'
import { UserInfo as StateType } from 'Store'

const STORE_NAME = 'userInfo'

export const defaultVal: StateType = {
  groupId: '',
  userId: '',
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
    setGroupId: (state: StateType, { payload: { groupId } }) => {
      return { ...state, groupId }
    },
    setUserId: (state: StateType, { payload: { userId } }) => {
      return { ...state, userId }
    },
  },
})

export default State.reducer

export const { initializeUser, setGroupId, setUserId } = State.actions
