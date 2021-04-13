import { useTranslation } from 'react-i18next'
import { IonLoading } from '@ionic/react'
import { useLoading } from 'src/helper'

const Loading = () => {
  const { isLoadingShow } = useLoading()
  const { t } = useTranslation()

  return (
    <IonLoading
      cssClass="my-custom-class"
      isOpen={isLoadingShow}
      // onDidDismiss={() => setShowLoading(false)}
      message={t('しばらくお待ちください')}
      // duration={5000}
    ></IonLoading>
  )
}

export default Loading
