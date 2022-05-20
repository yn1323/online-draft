import { Icon } from '@chakra-ui/react'
import { State } from 'Store'
import Image from 'next/image'
import { FaRegCheckCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { findUserInfo } from '@/helpers/common'
import { useIsUserFinishEnter } from '@/helpers/hooks'

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
        <Image
          src={info?.avatar || ''}
          alt="name"
          className="avatar"
          width={36}
          height={36}
          objectFit="contain"
        />

        <div className="name">{info?.userName || ''}</div>
        {showCheck && showCheckIcon && (
          <Icon ml={4} as={FaRegCheckCircle} color="green" />
        )}
      </div>
      {childElement}
    </div>
  )
}

export default AvatarWithName
