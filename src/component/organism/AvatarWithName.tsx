import { useSelector } from 'react-redux'
import { findUserInfo, useIsUserFinishEnter } from 'src/helper'
import { State } from 'Store'

import { IonIcon } from '@ionic/react'
import { checkmarkOutline } from 'ionicons/icons'

import 'src/asset/scss/component/AvatarWithName.scss'
interface Props {
  userId: string
  showCheck?: boolean
  childElement?: any
}

const AvatarWithName = ({
  userId,
  showCheck = true,
  childElement = <></>,
}: Props) => {
  const {
    userInfo: { users },
  } = useSelector((state: State) => state)
  const info = findUserInfo(users, userId)
  const showCheckIcon = useIsUserFinishEnter(userId)

  return (
    <>
      <div className="avatarWithNameWrapper">
        <img src={info?.avatar || ''} className="avatar" />

        <div className="name">{info?.userName || ''}</div>
        {showCheck && showCheckIcon && (
          <IonIcon
            className="icon"
            slot="icon-only"
            icon={checkmarkOutline}
            color="success"
          />
        )}
      </div>
      {childElement}
    </>
  )
}

export default AvatarWithName
