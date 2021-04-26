import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { IonButton, IonIcon, IonInput } from '@ionic/react'
import { arrowRedoOutline } from 'ionicons/icons'

import 'src/asset/scss/component/Chat.scss'
import { findAvatarPath } from 'src/helper'

import Log from 'src/component/molecule/Log'

const Chat = () => {
  const log = useRef<HTMLIonInputElement>(null)
  const { t } = useTranslation()
  return (
    <div className="chatWrapper">
      <div className="logArea">
        <Log
          isMyLog={false}
          text="aaa"
          avatar={findAvatarPath('12')}
          name="me"
        />
        <Log
          isMyLog={true}
          text="aaa"
          avatar={findAvatarPath('12')}
          name="me"
        />
        <Log
          isMyLog={false}
          text="aaa"
          avatar={findAvatarPath('12')}
          name="me"
        />
      </div>
      <div className="enterArea">
        <IonInput ref={log} required maxlength={1024} />
        <IonButton
          fill="solid"
          onClick={() => {
            console.log('clicked')
          }}
        >
          <IonIcon
            slot="icon-only"
            icon={arrowRedoOutline}
            color="black"
          ></IonIcon>
        </IonButton>
      </div>
    </div>
  )
}

export default Chat
