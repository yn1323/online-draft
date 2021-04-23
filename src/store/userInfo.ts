import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetUsersRequestPayload } from 'RequestPayload'
import { findAvatarPath, getUsers } from 'src/helper'
import { UserInfo as StateType } from 'Store'

const STORE_NAME = 'userInfo'

export const defaultVal: StateType = {
  isLoading: false,
  isSucceeded: false,
  groupId: '',
  userId: '',
  users: [],
}

const initialState: StateType = {
  ...defaultVal,
}

export const getUserInfoOnce = createAsyncThunk(
  `${STORE_NAME}/getUserInfo`,
  async (params: GetUsersRequestPayload) => getUsers(params)
)

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
  extraReducers: ({ addCase }) => {
    addCase(getUserInfoOnce.pending, (state: StateType) => ({
      ...state,
      users: [],
      isLoading: true,
    }))
      .addCase(
        getUserInfoOnce.fulfilled,
        (state: StateType, { payload }: any) => ({
          ...state,
          users: payload.map(({ avatar, ...rest }: any) => ({
            ...rest,
            avatar: findAvatarPath(avatar),
          })),
          isLoading: false,
          isSucceeded: true,
        })
      )
      .addCase(getUserInfoOnce.rejected, (state: StateType) => ({
        ...state,
        users: [],
        isLoading: false,
        isSucceeded: false,
      }))
  },
})

export default State.reducer

export const { initializeUser, setGroupId, setUserId } = State.actions
