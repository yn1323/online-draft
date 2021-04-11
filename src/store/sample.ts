import { createSlice } from '@reduxjs/toolkit'
import { Sample as StateType } from 'Store'

const STORE_NAME = 'sample'

export const defaultVal: StateType = {
  id: '',
}

export const createSample = (): StateType => ({ id: 'sample' })

const initialState: StateType = {
  ...defaultVal,
}

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    reset: () => ({ ...defaultVal }),
    update: (state: StateType, { payload }) => ({ ...state, ...payload }),
  },
})

export default State.reducer

export const { reset, update } = State.actions
