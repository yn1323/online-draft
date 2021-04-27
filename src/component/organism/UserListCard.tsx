import { useSelector } from 'react-redux'

import { State } from 'Store'
import CardBackground from 'src/component/template/ CardBackground'
import EnterDraft from 'src/component/organism/EnterDraft'

const UserListCard = () => {
  const {
    userInfo: { users },
  } = useSelector((state: State) => state)
  return (
    <CardBackground customClass="userListCard">
      <EnterDraft />
    </CardBackground>
  )
}

export default UserListCard
