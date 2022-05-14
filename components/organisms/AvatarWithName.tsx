import { State } from 'Store'
import { checkmarkOutline } from 'ionicons/icons'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { findUserInfo } from '@/helpers/common'
import { useIsUserFinishEnter } from '@/helpers/hooks'

const IonIcon = dynamic(
  async () => await (await import('@ionic/react')).IonIcon,
  {
    ssr: false,
  }
)

interface Props {
  userId: string
  showCheck?: boolean
  childElement?: any
  customStyle?: {}
  customClass?: string
}

const AvatarWithName = ({
  userId,
  showCheck = true,
  childElement = <></>,
  customStyle = {},
  customClass = 'align-centerVH',
}: Props) => {
  const {
    userInfo: { users },
  } = useSelector((state: State) => state)
  const info = findUserInfo(users, userId)
  const showCheckIcon = useIsUserFinishEnter(userId)

  return (
    <div style={customStyle} className={customClass}>
      <div className="avatarWithNameWrapper">
        <Image src={info?.avatar || ''} alt="" className="avatar" />

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
    </div>
  )
}

export default AvatarWithName
