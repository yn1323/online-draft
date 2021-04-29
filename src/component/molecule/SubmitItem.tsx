import { useRef } from 'react'
import { IonButton, IonInput } from '@ionic/react'

import 'src/asset/scss/component/SubmitItem.scss'
import { useItems, useModal, useToast } from 'src/helper'
import { useTranslation } from 'react-i18next'

const SubmitItem = () => {
  const { t } = useTranslation()
  const item: any = useRef(null)
  const { hideModal } = useModal()

  const { addItem } = useItems()

  const { setToast, showToast } = useToast()

  const submit = () => {
    const nextItem = item.current?.value || ''
    if (!nextItem) {
      setToast({
        message: t('ドラフト候補を入力してください。'),
        color: 'danger',
        position: 'bottom',
      })
      showToast()
      return false
    }
    addItem({ item: nextItem })
    hideModal()
  }
  return (
    <div className="submitItemWrapper">
      <section className="body">
        <IonInput ref={item} maxlength={64} />
        <div className="buttonArea">
          <IonButton onClick={submit}>OK</IonButton>
          <IonButton fill="outline" onClick={() => hideModal()}>
            Cancel
          </IonButton>
        </div>
      </section>
    </div>
  )
}

export default SubmitItem
