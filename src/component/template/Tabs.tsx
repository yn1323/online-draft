import {
  IonContent,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonApp,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { timeOutline, barChartOutline, settingsOutline } from 'ionicons/icons'

interface Props {
  router: JSX.Element
}

const Tabs = ({ router }: Props) => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>{router}</IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="/home" href="/home">
            <IonIcon icon={timeOutline} />
            {/* <IonLabel>Tab 1</IonLabel> */}
          </IonTabButton>
          <IonTabButton tab="/chart" href="/chart">
            <IonIcon icon={barChartOutline} />
            {/* <IonLabel>Tab 2</IonLabel> */}
          </IonTabButton>
          <IonTabButton tab="/config" href="/config">
            <IonIcon icon={settingsOutline} />
            {/* <IonLabel>Tab 3</IonLabel> */}
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  )
}

export default Tabs
