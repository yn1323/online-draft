import { State } from 'Store'
import { useSelector } from 'react-redux'
import Chat from '@/organisms/Chat'
import CardBackground from '@/templates/CardBackground'

const LogCard = () => {
  const {
    userInfo: { users },
  } = useSelector((state: State) => state)
  return (
    <CardBackground customClass="logCard">
      <Chat />
    </CardBackground>
  )
}

export default LogCard
