import { IonContent, IonPage } from '@ionic/react'
import 'src/asset/scss/page/Home.scss'

import Header from 'src/component/template/Header'
import HomeCard from 'src/component/organism/HomeCard'

const Home = () => {
  return (
    <IonPage>
      <Header />
      <IonContent className="height-100" scrollY={false}>
        <div className="height-100 align-centerVH">
          <HomeCard />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Home
