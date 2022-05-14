import { IonApp, IonPage } from '@ionic/react'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import '@/styles/theme/variables.scss'

import Loading from 'src/component/template/Loading'
import ModalTemplate from 'src/component/template/Modal'
import Nav from 'src/component/template/Nav'
import Toast from 'src/component/template/Toast'
import Router from 'src/route'

const Index = () => (
  <IonApp>
    <Router />
    <ModalTemplate />
    <Nav />
    <Toast />
    <Loading />
  </IonApp>
)

export default Index