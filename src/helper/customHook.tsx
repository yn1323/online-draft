import { createRef, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import moment, { Moment } from 'moment-timezone'
import {
  hideLoading,
  setDialog,
  showDialog,
  showLoading,
  toggleDrawer,
  showSnackbar,
  hideSnackbar,
} from 'src/store/component'
import { Component, State, DialogMenu } from 'Store'
import { addComma } from 'src/helper/common'

export const useFetch = async ({
  action = null as any,
  param = {},
  watch = [] as any,
}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const f = async () => {
      await dispatch(await action({ ...param }))
    }
    f()
  }, watch)
}

export const usePrevious = (value: any) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

// [state, setter]
export const useDrawer = () => {
  const { component = {} as Component } = useSelector((state: State) => state)
  const dispatch = useDispatch()
  const { isDrawerOpen } = component
  return {
    isDrawerOpen,
    setIsDrawerOpen: () => dispatch(toggleDrawer()),
  }
}

export const useDialog = () => {
  const { component = {} as Component } = useSelector((state: State) => state)
  const dispatch = useDispatch()
  const { isDialogOpen } = component
  return {
    isDialogOpen,
    title: component.dialog.title,
    menu: component.dialog.menu,
    component: component.dialog.component,
    setIsDialogOpen: (open: boolean) =>
      dispatch(showDialog({ isDialogOpen: open })),
    setDialogComponent: ({
      title = '' as string,
      component = '' as any,
      menu = [] as DialogMenu[],
    }) => dispatch(setDialog({ dialog: { title, component, menu } })),
  }
}

export const useIsLocation = (path = '' as string) => {
  const { pathname } = useLocation()
  return pathname.includes(path)
}

export const useloading = () => {
  const dispatch = useDispatch()
  return {
    showLoading: () => dispatch(showLoading()),
    hideLoading: () => dispatch(hideLoading()),
  }
}

export const useSnackbar = () => {
  const dispatch = useDispatch()
  return {
    showSnackbar: ({ msg = '' as string, type = 'success' as string }) =>
      dispatch(showSnackbar({ msg, type })),
    hideSnackbar: () => dispatch(hideSnackbar()),
  }
}

export const useFormat = () => {
  return {
    formatDate: (x: any) => moment(x).format('YYYY年M月D日'),
    formatDateShort: (x: any) => moment(x).format('M/D'),
  }
}
