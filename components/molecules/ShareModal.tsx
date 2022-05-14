import { clipboardOutline } from 'ionicons/icons'
import dynamic from 'next/dynamic'
import { useState, useRef, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useModal, useToast } from '@/helpers/hooks'

const IonButton = dynamic(
  async () => await (await import('@ionic/react')).IonButton,
  {
    ssr: false,
  }
)
const IonIcon = dynamic(
  async () => await (await import('@ionic/react')).IonIcon,
  {
    ssr: false,
  }
)
const IonInput = dynamic(
  async () => await (await import('@ionic/react')).IonInput,
  {
    ssr: false,
  }
)

const ShareModal = () => {
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
    setToast({ message: 'コピーしました。', color: 'success' })
    showToast()
  }

  return (
    <div className="shareModal">
      <div className="msg">参加者に下記URLをシェアしてください。</div>
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
