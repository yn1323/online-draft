import {
  IonButtons,
  IonContent,
  IonHeader,
  IonNav,
  IonTitle,
  IonToolbar,
  IonIcon,
} from '@ionic/react'
import { State } from 'Store'
import { arrowBackOutline } from 'ionicons/icons'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useNav } from '@/helpers/hooks'

const Nav = () => {
  const {
    component: {
      nav: { show, title, component },
    },
  } = useSelector((state: State) => state)
  const { hideNav } = useNav()

  useEffect(() => {
    document.addEventListener('ionBackButton', (ev: any) => {
      ev.detail.register(10, hideNav)
    })
  }, [])

  return !show ? (
    <></>
  ) : (
    <IonNav animated>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons className="backButton" slot="start" onClick={hideNav}>
            <IonIcon slot="icon-only" icon={arrowBackOutline} />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>{component}</IonContent>
    </IonNav>
  )
}

export default Nav
