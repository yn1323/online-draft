import { State } from 'Store'
import { useSelector } from 'react-redux'
import JusdgeSlot from '@/molecules/Slot'
import AvatarWithName from '@/organisms/AvatarWithName'

interface Props {
  start?: boolean
  hasConflict?: boolean
}

const ConflictSlot = ({ start = false, hasConflict = false }: Props) => {
  const {
    userInfo: { users, userId },
    draft: { round, selections },
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
            childElement={
              <JusdgeSlot userId={user.userId} targetRound={round - 1} />
            }
          />
        </div>
      ))}
    </>
  )
}

export default ConflictSlot
