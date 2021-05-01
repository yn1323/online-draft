import { createSlice } from '@reduxjs/toolkit'
import { Component as StateType } from 'Store'

const STORE_NAME = 'component'

export const defaultVal: StateType = {
  nav: {
    show: false,
    title: '',
    component: '',
  },
  toast: {
    show: false,
    message: '',
    duration: 1500,
    position: 'top',
    color: 'success',
  },
  loading: {
    show: false,
  },
  modal: {
    show: false,
    component: '',
    title: '',
    showingResult: false,
  },
}

const initialState: StateType = {
  ...defaultVal,
}

const State = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setNavComponent: (state: StateType, { payload: { title, component } }) => ({
      ...state,
      nav: {
        show: state.nav.show,
        title,
        component,
      },
    }),
    hideNavComponent: (state: StateType) => ({
      ...state,
      nav: {
        ...state.nav,
        show: false,
      },
    }),
    showNavComponent: (state: StateType) => ({
      ...state,
      nav: {
        ...state.nav,
        show: true,
      },
    }),
    setModalComponent: (
      state: StateType,
      { payload: { title, component } }
    ) => ({
      ...state,
      modal: {
        title: title || '',
        show: state.nav.show,
        component,
        showingResult: false,
      },
    }),
    showModal: (state: StateType) => ({
      ...state,
      modal: {
        ...state.modal,
        show: true,
      },
    }),
    showResultModal: (state: StateType) => ({
      ...state,
      modal: {
        ...state.modal,
        show: true,
        showingResult: true,
      },
    }),
    hideModal: (state: StateType) => ({
      ...state,
      modal: {
        ...state.modal,
        show: false,
        showingResult: false,
      },
    }),
    setToast: (
      state: StateType,
      { payload: { message, duration, position, color } }
    ) => ({
      ...state,
      toast: {
        show: state.nav.show,
        message: message,
        duration: duration ? duration : state.toast.duration,
        position: position ? position : position.toast.duration,
        color: color ? color : color.toast.duration,
      },
    }),
    hideToast: (state: StateType) => ({
      ...state,
      toast: {
        ...state.toast,
        show: false,
      },
    }),
    showToast: (state: StateType) => ({
      ...state,
      toast: {
        ...state.toast,
        show: true,
      },
    }),
    showLoading: (state: StateType) => {
      return { ...state, loading: { show: true } }
    },
    hideLoading: (state: StateType) => {
      return { ...state, loading: { show: false } }
    },
  },
})

export default State.reducer

export const {
  setNavComponent,
  hideNavComponent,
  showNavComponent,
  setModalComponent,
  showModal,
  showResultModal,
  hideModal,
  setToast,
  hideToast,
  showToast,
  showLoading,
  hideLoading,
} = State.actions
