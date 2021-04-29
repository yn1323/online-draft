import { createSlice } from '@reduxjs/toolkit'
import { Draft as StateType } from 'Store'

const STORE_NAME = 'draft'

export const defaultVal: StateType = {
  round: 1,
  selections: [],
}

const initialState: StateType = {
  ...defaultVal,
}

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setRoundNumber: (state: StateType, { payload: { round } }) => {
      return { ...state, round, roundAsIndex: round - 1 }
    },
    setSelectionByUser: (
      state: StateType,
      { payload: { userId, selection } }
    ) => {
      const newSelections = state.selections.filter(
        selection => selection.userId !== userId
      )
      newSelections.push({ userId, selection })
      return { ...state, selections: newSelections }
    },
  },
})

export default State.reducer

export const { setRoundNumber } = State.actions
