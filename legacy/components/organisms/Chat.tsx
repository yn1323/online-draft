import { IconButton, Input } from '@chakra-ui/react'
import { State } from 'Store'
import { useEffect, useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { addLogMessage } from '@/helpers/firebase'
import { useChat } from '@/helpers/hooks'
import Log from '@/molecules/Log'

const Chat = () => {
  const {
    userInfo: { groupId, userId },
  } = useSelector((state: State) => state)
  const [message, setMessage] = useState('')

  const { chatInfo } = useChat()
  const submitChat = () => {
    if (!message) {
      return false
    }
    addLogMessage({ groupId, userId, message })
    setMessage('')
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
        <Input
          value={message}
          maxLength={1024}
          onChange={(e: any) => setMessage(e.target.value)}
        />
        <IconButton
          ml={1}
          colorScheme="green"
          aria-label="send"
          size="md"
          icon={<FaArrowCircleUp />}
          onClick={submitChat}
        />
      </div>
    </div>
  )
}

export default Chat
