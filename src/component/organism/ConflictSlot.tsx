import { useSelector } from 'react-redux'
import { State, Users } from 'Store'
import { getDuplicateItemInRound } from 'src/helper'
import AvatarWithName from 'src/component/organism/AvatarWithName'
import JusdgeSlot from 'src/component/molecule/JudgeSlot'

interface Props {
  start?: boolean
  hasConflict?: boolean
}

const ConflictSlot = ({ start = false, hasConflict = false }: Props) => {
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
              <JusdgeSlot
                userId={user.userId}
                targetRound={round - 1}
                isDuplicate={duplicateDataUserIdsExcludeWinner.includes(
                  user.userId
                )}
                start={start}
                hasConflict={hasConflict}
              />
            }
          />
        </div>
      ))}
    </>
  )
}

export default ConflictSlot
