import { useSelector } from 'react-redux'
import { State, Users } from 'Store'
import AvatarWithName from 'src/component/organism/AvatarWithName'
import Slot from 'src/component/molecule/Slot'

const ResultSlot = () => {
  const {
    userInfo: { users },
    draft: { round },
  } = useSelector((state: State) => state)

  return (
    <>
      {users.map((user, i) => (
        <div className="" key={i}>
          <AvatarWithName
            userId={user.userId}
            showCheck={false}
            childElement={
              <Slot userId={user.userId} targetRound={round - 1} order={i} />
            }
          />
        </div>
      ))}
    </>
  )
}

export default ResultSlot
