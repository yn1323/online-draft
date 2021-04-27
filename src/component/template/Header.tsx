import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import { useIsLocation, usePath } from 'src/helper'
import { getGroupNameOnce } from 'src/store/userInfo'
import { State } from 'Store'

const Header = () => {
  const {
    userInfo: { groupName },
    draft: { round },
  } = useSelector((state: State) => state)
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { groupIdFromPath } = usePath()
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

  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>{headerTitle}</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
