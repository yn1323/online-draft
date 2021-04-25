import { useSelector } from 'react-redux'

import { State } from 'Store'
import CardBackground from '../template/ CardBackground'

const UserListCard = () => {
  const {
    userInfo: { users },
  } = useSelector((state: State) => state)
  return (
    <CardBackground customClass="userListCard">
      <div>hoge</div>
    </CardBackground>
  )
}

export default UserListCard
