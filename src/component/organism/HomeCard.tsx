import { useState } from 'react'
import { IonButton, IonText } from '@ionic/react'
import { useTranslation } from 'react-i18next'

import CardBackground from 'src/component/template/CardBackground'
import DraftHistoryList from 'src/component/organism/DraftHistoryList'
import CreateGroup from 'src/component/organism/CreateGroup'
import { getDraftPageFromLS } from 'src/helper'

const HomeCard = () => {
  const { t } = useTranslation()
  const [cardIndex, setCardIndex] = useState(0)

  const history: any[] = getDraftPageFromLS()
  return (
    <CardBackground customClass="login" index={cardIndex}>
      <div className="draftselectionWrapper height-100">
        <IonText className="align-centerVH">
          <h5>{t('新しく作成する')}</h5>
        </IonText>
        <div className="align-centerVH">
          <IonButton className="createNew" onClick={() => setCardIndex(1)}>
            {t('グループを作成')}
          </IonButton>
        </div>

        {history.length && (
          <>
            <hr className="bold" />
            <IonText className="align-centerVH">
              <h5>{t('過去に参加したドラフト')}</h5>
            </IonText>
            <div className="align-centerVH">
              <DraftHistoryList />
            </div>
          </>
        )}
      </div>
      <CreateGroup goBack={() => setCardIndex(0)} />
    </CardBackground>
  )
}

export default HomeCard
