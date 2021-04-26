import 'src/asset/scss/component/Log.scss'

interface Props {
  isMyLog?: boolean
  text: string
  avatar: string
  name: string
  // time: string
}
const Log = ({ isMyLog = false, text = '', avatar = '', name = '' }: Props) => {
  const LogTime = (
    <div className="logtime">
      <div className="date">4/12</div>
      <div className="time">10:00</div>
    </div>
  )
  const LogInfo = (
    <div className="loginfo">
      <div className="loginfo-name">{name}</div>
      <div className="loginfo-text">{text}</div>
    </div>
  )
  const Avatar = <img src={avatar} />

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
