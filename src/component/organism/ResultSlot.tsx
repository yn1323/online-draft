import { useSelector } from 'react-redux'
import { State, Users } from 'Store'
import { getDuplicateItemInRound } from 'src/helper'
import AvatarWithName from 'src/component/organism/AvatarWithName'
import Slot from 'src/component/molecule/Slot'

const ResultSlot = () => {
  const {
    userInfo: { users, userId },
    draft: { round, selections },
  } = useSelector((state: State) => state)

  const { duplicateDataUserIdsExcludeWinner } = getDuplicateItemInRound(
    selections,
    userId,
    round - 1
  )

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
              <Slot
                userId={user.userId}
                targetRound={round - 1}
                order={i}
                allUserNum={users.length}
                isDuplicate={duplicateDataUserIdsExcludeWinner.includes(
                  user.userId
                )}
              />
            }
          />
        </div>
      ))}
    </>
  )
}

export default ResultSlot
