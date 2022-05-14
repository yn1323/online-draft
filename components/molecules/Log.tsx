import Image from 'next/image'
import { findAvatarPath } from '@/helpers/common'

interface Props {
  isMyLog?: boolean
  message: string
  avatar: string
  name: string
  date: string
  time: string
}
const Log = ({
  isMyLog = false,
  message = '',
  avatar = '',
  name = '',
  date = '',
  time = '',
}: Props) => {
  const LogTime = (
    <div className="logtime">
      <div className="date">{date}</div>
      <div className="time">{time}</div>
    </div>
  )
  const LogInfo = (
    <div className="loginfo">
      <div className="loginfo-name">{name || '自動メッセージ'}</div>
      <div className="loginfo-text">{message}</div>
    </div>
  )
  const Avatar = <Image src={avatar || findAvatarPath('99')} alt="img" />

  const renderInLeft = () => (
    <div className="logWrapper">
      {Avatar}
      {LogInfo}
      {LogTime}
    </div>
  )

  const renderRight = () => (
    <div className="logWrapper logWrapper-right">
      {LogTime}
      {LogInfo}
      {Avatar}
    </div>
  )

  return isMyLog ? renderRight() : renderInLeft()
}

export default Log
