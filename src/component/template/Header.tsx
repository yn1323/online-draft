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
  getDuplicateItemInRound,
  goToNextRound,
  isEveryOneEntered,
  setFinishedRounds,
  useIsLocation,
  useModal,
  usePath,
  useToast,
} from 'src/helper'
import { getGroupNameOnce } from 'src/store/userInfo'
import { State } from 'Store'
import {
  shareSocial,
  shareSocialOutline,
  thumbsUpOutline,
} from 'ionicons/icons'
import { isProduction } from 'src/constant'
import ShareModal from '../molecule/ShareModal'

const Header = () => {
  const {
    userInfo: { groupId, groupName, users },
    draft: { round, selections, finishedRound },
  } = useSelector((state: State) => state)
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { groupIdFromPath, windowPath } = usePath()
  const { setToast, showToast } = useToast()
  const isHome = useIsLocation(['/'], { exact: true })
  const isEntry = windowPath.includes('/entry')
  const isDraft = windowPath.includes('/draft')

  const [headerTitle, setHeaderTitle] = useState(
    isHome ? t('オンラインドラフト会議') : ''
  )
  const { setModalComponent, showModal } = useModal()

  useEffect(() => {
    if (!isHome) {
      dispatch(getGroupNameOnce({ groupId: groupIdFromPath }))
    }
  }, [])

  useEffect(() => {
    if (groupName) {
      if (isEntry) {
        setHeaderTitle(groupName)
      } else {
        setHeaderTitle(`${groupName}    [ROUND-${round}]`)
      }
    }
  }, [groupName, round])

  const debugGoBack = () => {
    goToNextRound({ groupId, nextRound: round - 1 })
    console.log(round)
    setFinishedRounds({
      groupId,
      currentFinishedRounds: finishedRound.filter(
        r => r !== 0 && r !== round - 1
      ),
      finishedRound: 0,
    })
  }
  const showShareModal = () => {
    setModalComponent({ title: 'シェア', component: <ShareModal /> })
    showModal()
  }
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>{headerTitle}</IonTitle>
        {(isEntry || isDraft) && (
          <IonButtons slot="end" style={{ marginRight: 10 }}>
            {!isProduction && (
              <IonButton fill="solid" onClick={debugGoBack}>
                <IonIcon slot="start" icon={thumbsUpOutline} />
                {'DEBUG用-ROUND戻る'}
              </IonButton>
            )}
            <IonButton fill="solid" onClick={showShareModal}>
              <IonIcon slot="start" icon={shareSocialOutline} />
              {t('シェア')}
            </IonButton>
          </IonButtons>
        )}
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
