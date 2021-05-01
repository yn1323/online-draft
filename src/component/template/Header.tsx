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
  useIsLocation,
  usePath,
  useToast,
} from 'src/helper'
import { getGroupNameOnce } from 'src/store/userInfo'
import { State } from 'Store'
import { thumbsUpOutline } from 'ionicons/icons'
import { isProduction } from 'src/constant'

const Header = () => {
  const {
    userInfo: { groupId, groupName, users },
    draft: { round, selections },
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

  const showResult = () => {
    const { hasDuplicate } = getDuplicateItemInRound(selections, '', round - 1)
    if (hasDuplicate) {
      setToast({
        message: t('重複しているデータあります。データを修正してください。'),
        color: 'danger',
      })
      showToast()
      return false
    }
    const everyOneEntered = isEveryOneEntered(selections, users, round)
    if (!everyOneEntered) {
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
        {isDraft && (
          <IonButtons slot="end" style={{ marginRight: 10 }}>
            {!isProduction && (
              <IonButton
                fill="solid"
                onClick={() => goToNextRound({ groupId, nextRound: round - 1 })}
              >
                <IonIcon slot="start" icon={thumbsUpOutline} />
                {'DEBUG用-ROUND戻る'}
              </IonButton>
            )}
            <IonButton fill="solid" onClick={showResult}>
              <IonIcon slot="start" icon={thumbsUpOutline} />
              {t('結果発表')}
            </IonButton>
          </IonButtons>
        )}
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
