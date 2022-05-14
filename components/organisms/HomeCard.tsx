import dynamic from 'next/dynamic'
import { useState } from 'react'

import { getDraftPageFromLS } from '@/helpers/common'
import CreateGroup from '@/organisms/CreateGroup'
import DraftHistoryList from '@/organisms/DraftHistoryList'
import CardBackground from '@/templates/CardBackground'

const IonButton = dynamic(
  async () => await (await import('@ionic/react')).IonButton,
  {
    ssr: false,
  }
)
const IonText = dynamic(
  async () => await (await import('@ionic/react')).IonText,
  {
    ssr: false,
  }
)

const HomeCard = () => {
  const [cardIndex, setCardIndex] = useState(0)

  const history: any[] = getDraftPageFromLS()
  return (
    <CardBackground customClass="login" index={cardIndex}>
      <div className="draftselectionWrapper height-100">
        <IonText className="align-centerVH">
          <h5>新しく作成する</h5>
        </IonText>
        <div className="align-centerVH">
          <IonButton className="createNew" onClick={() => setCardIndex(1)}>
            グループを作成
          </IonButton>
        </div>

        {!!history.length && (
          <>
            <hr className="bold" />
            <IonText className="align-centerVH">
              <h5>過去に参加したドラフト</h5>
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
