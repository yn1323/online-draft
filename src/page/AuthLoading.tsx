import { IonContent, IonPage } from '@ionic/react'
import Header from 'src/component/template/Header'

import 'src/asset/scss/page/Loading.scss'

const Loading = () => {
  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent className="height-100" scrollY={false}></IonContent>
    </IonPage>
  )
}

export default Loading
