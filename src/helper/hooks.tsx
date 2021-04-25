import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import {
  defaultVal as componentDefault,
  hideNavComponent,
  hideToast,
  setNavComponent,
  setToast,
  showNavComponent,
  showToast,
  showLoading,
  hideLoading,
} from 'src/store/component'
import { setGroupId, setUserId } from 'src/store/userInfo'

import { State } from 'Store'
import { sessionStorageInfo } from 'src/helper'

export const useNav = () => {
  const dispatch = useDispatch()

  return {
    setNav: ({ title, component }: { title: string; component: any }) =>
      dispatch(setNavComponent({ title, component })),
    showNav: () => dispatch(showNavComponent()),
    hideNav: () => dispatch(hideNavComponent()),
  }
}

export const useToast = () => {
  const dispatch = useDispatch()

  return {
    setToast: ({
      message = componentDefault.toast.message,
      position = componentDefault.toast.position,
      duration = componentDefault.toast.duration,
      color = componentDefault.toast.color,
    }) => dispatch(setToast({ message, position, duration, color })),
    showToast: () => dispatch(showToast()),
    hideToast: () => dispatch(hideToast()),
  }
}

export const usePath = () => {
  return {
    query: useParams(),
    ...useLocation(),
    windowPath: window.location.pathname,
    groupIdFromPath: window.location.pathname
      .replace('/entry/', '')
      .replace('/draft/', ''),
  }
}

export const useIsLocation = (target: string[], { exact = false } = {}) => {
  const { pathname } = useLocation()
  if (exact) {
    return target.some(path => pathname === path)
  } else {
    return target.some(path => pathname.includes(path))
  }
}

export const useLoading = () => {
  const dispatch = useDispatch()
  const {
    component: { loading },
  } = useSelector((state: State) => state)
  return {
    isLoadingShow: loading.show,
    showLoading: () => dispatch(showLoading()),
    hideLoading: () => dispatch(hideLoading()),
  }
}

export const useInfo = () => {
  const dispatch = useDispatch()
  const { setUserIdToSessionStorage } = sessionStorageInfo()
  const groupIdProcess = (groupId: string) => {
    dispatch(setGroupId({ groupId }))
  }
  const userIdProcess = (userId: string) => {
    setUserIdToSessionStorage(userId)
    dispatch(setUserId(userId))
  }
  return {
    addGroupId: (groupId: string) => groupIdProcess(groupId),
    addUserId: (userId: string) => userIdProcess(userId),
  }
}
