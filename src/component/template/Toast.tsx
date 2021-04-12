import { useSelector } from 'react-redux'
import { IonContent, IonToast } from '@ionic/react'

import { useToast } from 'src/helper'

import { State } from 'Store'

const Toast = () => {
  const {
    component: {
      toast: { show, message, position, duration, color },
    },
  } = useSelector((state: State) => state)

  const { hideToast } = useToast()

  return (
    <IonToast
      isOpen={show}
      message={message}
      position={position}
      duration={duration}
      onDidDismiss={hideToast}
      color={color}
    />
  )
}

export default Toast
