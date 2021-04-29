import { useSelector } from 'react-redux'
import { findUserInfo, useIsUserFinishEnter } from 'src/helper'
import { State } from 'Store'

import 'src/asset/scss/component/AvatarWithName.scss'
import { IonIcon } from '@ionic/react'
import { checkmarkOutline } from 'ionicons/icons'

interface Props {
  userId: string
}

const AvatarWithName = ({ userId }: Props) => {
  const {
    userInfo: { users },
  } = useSelector((state: State) => state)
  const info = findUserInfo(users, userId)
  const showCheckIcon = useIsUserFinishEnter(userId)

  return (
    <div className="avatarWithNameWrapper">
      <img src={info?.avatar || ''} className="avatar" />

      <div className="name">{info?.userName || ''}</div>
      {showCheckIcon && (
        <IonIcon
          className="icon"
          slot="icon-only"
          icon={checkmarkOutline}
          color="success"
        />
      )}
    </div>
  )
}

export default AvatarWithName
