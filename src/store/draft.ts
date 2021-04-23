import { createSlice } from '@reduxjs/toolkit'
import { Draft as StateType } from 'Store'

const STORE_NAME = 'draft'

export const defaultVal: StateType = {
  historyData: [],
  onTable: [],
}

const initialState: StateType = {
  ...defaultVal,
}

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    initializeDraft: (state: StateType) => {
      return { ...state }
    },
  },
})

export default State.reducer

export const { initializeDraft } = State.actions
