import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import { useIsLocation } from 'src/helper'

const Header = () => {
  const { t } = useTranslation()
  const isHome = useIsLocation(['/'], { exact: true })
  const headerTitle = useMemo(
    () => (isHome ? t('オンラインドラフト会議') : 'Some Group Name'),
    []
  )

  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>{headerTitle}</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
