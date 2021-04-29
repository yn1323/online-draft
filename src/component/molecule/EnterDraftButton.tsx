import { IonButton } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useModal } from 'src/helper'
import SubmitItem from './SubmitItem'

interface Props {
  currentUser: string
  targetUser: string
}

const EnterDraftButton = ({ currentUser, targetUser }: Props) => {
  const { t } = useTranslation()
  const isEntered = true

  const { showModal, setModalComponent } = useModal()

  const showSubmitItem = () => {
    setModalComponent({
      component: <SubmitItem />,
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
    <IonButton className="width-100" fill="solid" color="success">
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
    return currentUser === targetUser ? enterButton : othersEnteringButton
  } else {
    return currentUser === targetUser ? finishButton : othersFinishButton
  }
}

export default EnterDraftButton
