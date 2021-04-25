import { useSelector } from 'react-redux'

import { State } from 'Store'
import CardBackground from '../template/ CardBackground'

const LogCard = () => {
  const {
    userInfo: { users },
  } = useSelector((state: State) => state)
  return (
    <CardBackground customClass="logCard">
      <div>hoge</div>
    </CardBackground>
  )
}

export default LogCard
