import { findAvatarPath } from 'src/helper'

import 'src/asset/scss/component/Log.scss'

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
  const Avatar = <img src={avatar || findAvatarPath('99')} />

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
