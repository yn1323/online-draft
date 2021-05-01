import { useSelector } from 'react-redux'

import { State } from 'Store'
import CardBackground from 'src/component/template/CardBackground'
import Chat from 'src/component/organism/Chat'

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
