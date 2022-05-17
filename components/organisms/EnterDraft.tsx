import { State } from 'Store'
import { useSelector } from 'react-redux'
import EnterDraftButton from '@/molecules/EnterDraftButton'
import AvatarWithName from '@/organisms/AvatarWithName'

const EnterDraft = () => {
  const {
    userInfo: { users, userId },
  } = useSelector((state: State) => state)

  return (
    <div className="draftUserWrapper align-centerVH height-100">
      {users.map((user, i) => (
        <div key={i} className="draftUser">
          <AvatarWithName userId={user.userId} />
          <div className="width-100 align-centerVH">
            <EnterDraftButton currentUser={user.userId} myId={userId} />
          </div>
        </div>
      ))}
    </div>
  )
}
export default EnterDraft
