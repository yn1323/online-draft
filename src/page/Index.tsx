import { IonApp } from '@ionic/react'

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
import 'src/asset/scss/theme/variables.scss'

import Tabs from 'src/component/template/Tabs'
import Router from 'src/route'
import Nav from 'src/component/template/Nav'
import Toast from 'src/component/template/Toast'

const Index = () => (
  <IonApp>
    <Tabs router={<Router />} />
    <Nav />
    <Toast />
  </IonApp>
)

export default Index
