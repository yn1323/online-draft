import { State } from 'Store'
import { useSelector } from 'react-redux'
import EnterDraft from '@/organisms/EnterDraft'
import CardBackground from '@/templates/CardBackground'

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
