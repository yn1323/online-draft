import { State } from 'Store'
import { useSelector } from 'react-redux'
import RandomString from '@/molecules/RandomString'
import AvatarWithName from '@/organisms/AvatarWithName'

interface Props {
  start?: boolean
  hasConflict?: boolean
}

const ConflictSlot = ({ start = false, hasConflict = false }: Props) => {
  const {
    userInfo: { users },
  } = useSelector((state: State) => state)

  return (
    <>
      {users.map((user, i) => (
        <div key={i}>
          <AvatarWithName
            userId={user.userId}
            showCheck={false}
            customStyle={{ width: `calc(85vw / ${users.length})` }}
            customClass="centeringAvatar"
            childElement={<RandomString />}
          />
        </div>
      ))}
    </>
  )
}

export default ConflictSlot
