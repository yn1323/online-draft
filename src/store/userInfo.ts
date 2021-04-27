import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  GetGroupNameRequestPayload,
  GetUsersRequestPayload,
} from 'RequestPayload'
import { findAvatarPath, getGroupName, getUsers } from 'src/helper'
import { UserInfo as StateType } from 'Store'

const STORE_NAME = 'userInfo'

export const defaultVal: StateType = {
  isLoading: false,
  isSucceeded: false,
  groupId: '',
  userId: '',
  users: [],
  groupName: '',
}

const initialState: StateType = {
  ...defaultVal,
}

export const getUserInfoOnce = createAsyncThunk(
  `${STORE_NAME}/getUserInfo`,
  async (params: GetUsersRequestPayload) => getUsers(params)
)
export const getGroupNameOnce = createAsyncThunk(
  `${STORE_NAME}/getGroupName`,
  async (params: GetGroupNameRequestPayload) => getGroupName(params)
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
    setAllUserInfo: (state: StateType, { payload }) => {
      const myId = state.userId
      const orderedArray = payload.reduce((acc: any, cur: any) => {
        if (cur.userId !== myId) {
          acc.push(cur)
        } else {
          acc.unshift(cur)
        }
        return acc
      }, [])
      return { ...state, users: orderedArray }
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
      .addCase(
        getGroupNameOnce.fulfilled,
        (state: StateType, { payload }: any) => ({
          ...state,
          groupName: payload,
        })
      )
  },
})

export default State.reducer

export const {
  initializeUser,
  setGroupId,
  setUserId,
  setAllUserInfo,
} = State.actions
