import dynamic from 'next/dynamic'

import { useIsUserFinishEnter, useModal } from '@/helpers/hooks'
import SubmitItem from '@/molecules/SubmitItem'

const IonButton = dynamic(
  async () => await (await import('@ionic/react')).IonButton,
  { ssr: false }
)

interface Props {
  currentUser: string
  myId: string
}

const EnterDraftButton = ({ currentUser, myId }: Props) => {
  const isEntered = useIsUserFinishEnter(currentUser)

  const { showModal, setModalComponent } = useModal()

  const showSubmitItem = () => {
    setModalComponent({
      component: <SubmitItem userId={myId} />,
      title: 'ドラフト候補入力',
    })
    showModal()
  }

  const enterButton = (
    <IonButton className="width-100" fill="solid" onClick={showSubmitItem}>
      入力する
    </IonButton>
  )
  const finishButton = (
    <IonButton
      className="width-100"
      fill="solid"
      color="success"
      onClick={showSubmitItem}
    >
      修正する
    </IonButton>
  )
  const othersEnteringButton = (
    <IonButton className="width-100" fill="default" disabled>
      考え中
    </IonButton>
  )
  const othersFinishButton = (
    <IonButton className="width-100" fill="clear" disabled>
      入力完了
    </IonButton>
  )

  if (isEntered) {
    return currentUser === myId ? finishButton : othersFinishButton
  } else {
    return currentUser === myId ? enterButton : othersEnteringButton
  }
}

export default EnterDraftButton
