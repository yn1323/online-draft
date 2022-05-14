import { IonContent, IonPage } from '@ionic/react'

const Loading = () => {
  return (
    <IonPage>
      <IonContent className="height-100" scrollY={false}></IonContent>
    </IonPage>
  )
}

export default Loading
