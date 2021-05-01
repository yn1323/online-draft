import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import AvatarWithName from 'src/component/organism/AvatarWithName'
import { State } from 'Store'

import 'src/asset/scss/component/EnterDraft.scss'
import EnterDraftButton from 'src/component/molecule/EnterDraftButton'

const EnterDraft = () => {
  const { t } = useTranslation()
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
