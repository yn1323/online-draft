import { useState, useRef, useEffect } from 'react'
import { IonButton, IonIcon, IonInput } from '@ionic/react'

import 'src/asset/scss/component/SubmitItem.scss'
import { useTranslation } from 'react-i18next'
import { useModal, useToast } from 'src/helper'

import 'src/asset/scss/component/ShareModal.scss'
import { clipboardOutline } from 'ionicons/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const ShareModal = () => {
  const { t } = useTranslation()
  const { hideModal } = useModal()
  const url: any = useRef('')
  const [copyText, setCopyText] = useState('')

  const { setToast, showToast } = useToast()

  useEffect(() => {
    const location = window.location.href.replace('/draft', '/entry')
    url.current.value = location
    setCopyText(location)
  }, [])

  const onCopy = () => {
    setToast({ message: t('コピーしました。'), color: 'success' })
    showToast()
  }

  return (
    <div className="shareModal">
      <div className="msg">{t('参加者に下記URLをシェアしてください。')}</div>
      <div className="url height-100 align-centerVH">
        <IonInput ref={url} />

        <CopyToClipboard text={copyText} onCopy={onCopy}>
          <IonButton>
            <IonIcon icon-only icon={clipboardOutline} />
          </IonButton>
        </CopyToClipboard>
      </div>
      <hr />
      <div className="height-100 align-centerVH">
        <IonButton onClick={hideModal}>OK</IonButton>
      </div>
    </div>
  )
}

export default ShareModal
