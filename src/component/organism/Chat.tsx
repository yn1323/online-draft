import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { IonButton, IonIcon, IonInput } from '@ionic/react'
import { arrowRedoOutline } from 'ionicons/icons'

import 'src/asset/scss/component/Chat.scss'
import { addLogMessage, findAvatarPath, useChat } from 'src/helper'

import Log from 'src/component/molecule/Log'
import { State } from 'Store'

const Chat = () => {
  const {
    userInfo: { groupId, userId },
  } = useSelector((state: State) => state)
  const message: any = useRef(null)

  const { chatInfo } = useChat()

  const submitChat = () => {
    const tmpMessage: any = message.current?.value
    if (!tmpMessage) {
      return false
    }
    addLogMessage({ groupId, userId, message: tmpMessage })
    message.current.value = ''
  }

  return (
    <div className="chatWrapper">
      <div className="logArea">
        {chatInfo.map(
          ({ isMyLog, message, avatar, userName, date, time }, i) => (
            <Log
              key={i}
              isMyLog={isMyLog}
              message={message}
              avatar={avatar}
              name={userName}
              date={date}
              time={time}
            />
          )
        )}
      </div>
      <div className="enterArea">
        <IonInput ref={message} required maxlength={1024} />
        <IonButton fill="solid" onClick={submitChat}>
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
