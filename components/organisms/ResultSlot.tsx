import { State } from 'Store'
import { useSelector } from 'react-redux'
import { getDuplicateItemInRound } from '@/helpers/common'
import Slot from '@/molecules/JudgeSlot'
import AvatarWithName from '@/organisms/AvatarWithName'

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
                isDuplicate={false}
              />
            }
          />
        </div>
      ))}
    </>
  )
}

export default ResultSlot
