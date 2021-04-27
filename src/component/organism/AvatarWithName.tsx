import { useSelector } from 'react-redux'
import { findUserInfo } from 'src/helper'
import { State } from 'Store'

import 'src/asset/scss/component/AvatarWithName.scss'

interface Props {
  userId: string
}

const AvatarWithName = ({ userId }: Props) => {
  const {
    userInfo: { users },
  } = useSelector((state: State) => state)
  const info = findUserInfo(users, userId)
  return (
    <div className="avatarWithNameWrapper">
      <img src={info?.avatar || ''} className="avatar" />
      <div className="name">{info?.userName || ''}</div>
    </div>
  )
}

export default AvatarWithName
