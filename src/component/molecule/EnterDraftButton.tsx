import { IonButton } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useIsUserFinishEnter, useModal } from 'src/helper'
import SubmitItem from './SubmitItem'

interface Props {
  currentUser: string
  myId: string
}

const EnterDraftButton = ({ currentUser, myId }: Props) => {
  const { t } = useTranslation()
  const isEntered = useIsUserFinishEnter(currentUser)

  const { showModal, setModalComponent } = useModal()

  const showSubmitItem = () => {
    setModalComponent({
      component: <SubmitItem userId={myId} />,
      title: t('ドラフト候補入力'),
    })
    showModal()
  }

  const enterButton = (
    <IonButton className="width-100" fill="solid" onClick={showSubmitItem}>
      {t('入力する')}
    </IonButton>
  )
  const finishButton = (
    <IonButton
      className="width-100"
      fill="solid"
      color="success"
      onClick={showSubmitItem}
    >
      {t('修正する')}
    </IonButton>
  )
  const othersEnteringButton = (
    <IonButton className="width-100" fill="default" disabled>
      {t('考え中')}
    </IonButton>
  )
  const othersFinishButton = (
    <IonButton className="width-100" fill="clear" disabled>
      {t('入力完了')}
    </IonButton>
  )

  if (isEntered) {
    return currentUser === myId ? finishButton : othersFinishButton
  } else {
    return currentUser === myId ? enterButton : othersEnteringButton
  }
}

export default EnterDraftButton
