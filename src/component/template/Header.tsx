import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import {
  goToNextRound,
  isEveryOneEntered,
  useIsLocation,
  usePath,
  useToast,
} from 'src/helper'
import { getGroupNameOnce } from 'src/store/userInfo'
import { State } from 'Store'
import { thumbsUpOutline } from 'ionicons/icons'

const Header = () => {
  const {
    userInfo: { groupId, groupName, users },
    draft: { round, selections },
  } = useSelector((state: State) => state)
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { groupIdFromPath } = usePath()
  const { setToast, showToast } = useToast()
  const isHome = useIsLocation(['/'], { exact: true })
  const [headerTitle, setHeaderTitle] = useState(
    isHome ? t('オンラインドラフト会議') : ''
  )
  useEffect(() => {
    if (!isHome) {
      dispatch(getGroupNameOnce({ groupId: groupIdFromPath }))
    }
  }, [])

  useEffect(() => {
    if (groupName) {
      setHeaderTitle(`${groupName}    [ROUND-${round}]`)
    }
  }, [groupName, round])

  const showResult = () => {
    console.log(round)
    const isOK = isEveryOneEntered(selections, users, round)
    console.log(isOK)
    if (!isOK) {
      setToast({
        message: t(
          '入力が完了していないユーザーがいます。入力が完了するまでしばらくお待ち下さい。'
        ),
        color: 'danger',
      })
      showToast()
      return false
    }
    goToNextRound({ groupId, nextRound: round + 1 })
  }

  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>{headerTitle}</IonTitle>
        <IonButtons slot="end" style={{ marginRight: 10 }}>
          <IonButton fill="solid" onClick={showResult}>
            <IonIcon slot="start" icon={thumbsUpOutline} />
            {t('結果発表')}
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
