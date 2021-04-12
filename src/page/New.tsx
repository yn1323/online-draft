import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'

import 'src/asset/scss/page/New.scss'

const New = () => {
  return (
    <IonPage>
      <IonContent className="height-100 background" scrollY={false}>
        <IonGrid className="height-100 backgroundoo">
          <IonRow className="height-25"></IonRow>
          <IonRow className="height-50"></IonRow>
          <IonRow className="height-25"></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default New
