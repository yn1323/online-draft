import { IonLoading } from '@ionic/react'

import { useLoading } from '@/helpers/hooks'

const Loading = () => {
  const { isLoadingShow } = useLoading()

  return (
    <IonLoading
      cssClass="my-custom-class"
      isOpen={isLoadingShow}
      message="しばらくお待ちください"
    ></IonLoading>
  )
}

export default Loading
