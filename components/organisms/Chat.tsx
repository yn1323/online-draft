import { State } from 'Store'
import { arrowRedoOutline } from 'ionicons/icons'
import dynamic from 'next/dynamic'
import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { addLogMessage } from '@/helpers/firebase'
import { useChat } from '@/helpers/hooks'
import Log from '@/molecules/Log'

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

  const scrollBottom = () => {
    const el: any = document.getElementById('logArea')
    el.scrollTop = 999999
  }

  useEffect(() => {
    scrollBottom()
  }, [chatInfo.length])

  return (
    <div className="chatWrapper">
      <div className="logArea" id="logArea">
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
