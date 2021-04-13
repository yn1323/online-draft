import { useTranslation } from 'react-i18next'
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonText,
} from '@ionic/react'

import CardBackground from 'src/component/template/ CardBackground'
import Header from 'src/component/template/Header'

import 'src/asset/scss/page/Home.scss'
import DraftHistoryList from 'src/component/organism/DraftHistoryList'

const Home = () => {
  const { t } = useTranslation()
  const history = true
  return (
    <IonPage>
      <Header />
      <IonContent className="height-100" scrollY={false}>
        <div className="height-100 align-centerVH">
          <CardBackground customClass="login">
            <div className="draftselectionWrapper height-100">
              <IonText className="align-centerVH">
                <h5>{t('新しく作成する')}</h5>
              </IonText>
              <div className="align-centerVH">
                <IonButton className="createNew">aaa</IonButton>
              </div>

              {history && (
                <>
                  <hr className="bold" />
                  <IonText className="align-centerVH">
                    <h5>{t('履歴')}</h5>
                  </IonText>
                  <div className="align-centerVH">
                    <DraftHistoryList />
                  </div>
                </>
              )}
            </div>
          </CardBackground>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Home
