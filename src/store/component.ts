import { createSlice } from '@reduxjs/toolkit'
import { Component as StateType } from 'Store'

const STORE_NAME = 'component'

export const defaultVal: StateType = {
  isDrawerOpen: false,
  isDialogOpen: false,
  dialog: {
    title: '',
    menu: [],
    component: '',
  },
  loading: false,
  snackbar: {
    isOpen: false,
    msg: '',
    type: 'success',
  },
}

const initialState: StateType = {
  ...defaultVal,
}

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    toggleDrawer: (state: StateType) => ({
      ...state,
      isDrawerOpen: !state.isDrawerOpen,
    }),
    setDialog: (state: StateType, { payload }) => ({
      ...state,
      ...payload,
    }),
    showDialog: (state: StateType, { payload }) => ({
      ...state,
      ...payload,
    }),
    showLoading: (state: StateType) => ({
      ...state,
      loading: true,
    }),
    hideLoading: (state: StateType) => ({
      ...state,
      loading: false,
    }),
    showSnackbar: (state: StateType, { payload }) => ({
      ...state,
      snackbar: {
        isOpen: true,
        ...payload,
      },
    }),
    hideSnackbar: (state: StateType) => ({
      ...state,
      snackbar: {
        ...initialState.snackbar,
      },
    }),
  },
})

export default State.reducer

export const {
  toggleDrawer,
  setDialog,
  showDialog,
  showLoading,
  hideLoading,
  showSnackbar,
  hideSnackbar,
} = State.actions
