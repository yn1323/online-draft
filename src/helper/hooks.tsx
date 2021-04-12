import { useDispatch, useSelector } from 'react-redux'
import {
  defaultVal as componentDefault,
  hideNavComponent,
  hideToast,
  setNavComponent,
  setToast,
  showNavComponent,
  showToast,
} from 'src/store/component'
import { State } from 'Store'

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
