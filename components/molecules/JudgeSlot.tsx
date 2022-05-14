import { State } from 'Store'
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DOKIDOKI_TIME } from '@/constants/common'
import { getTargetRoundData } from '@/helpers/common'

const IonIcon = dynamic(
  async () => await (await import('@ionic/react')).IonIcon,
  {
    ssr: false,
  }
)

interface Props {
  userId: string
  targetRound: number
  isDuplicate: boolean
  hasConflict?: boolean
}

const Slot = ({
  userId,
  targetRound,
  isDuplicate,
  hasConflict = false,
}: Props) => {
  const {
    draft: { selections },
  } = useSelector((state: State) => state)

  const [currentString, setCurrentString] = useState('')
  const [className, setClassName] = useState('judge-selection')
  const [showedResult, setShowedResult] = useState(false)
  const icon = isDuplicate ? closeCircleOutline : checkmarkCircleOutline

  const setMyItem = () => {
    const roundData = getTargetRoundData(selections, targetRound)
    const myData = roundData.find((d: any) => d.userId === userId)
    setCurrentString(myData?.item || 'ERROR')
  }

  const markDuplicate = () => {
    if (!hasConflict) {
      setClassName(className + ' allPass')
      return
    }
    if (isDuplicate) {
      setClassName(className + ' duplicate')
    }
  }

  useEffect(() => {
    setMyItem()
    markDuplicate()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setShowedResult(true)
    }, DOKIDOKI_TIME)
  }, [])

  if (!hasConflict) {
    return (
      <div className={className}>
        <IonIcon
          only-icon
          icon={checkmarkCircleOutline}
          size="small"
          slot="start"
          color={'success'}
        />
        <div className="text">{currentString}</div>
      </div>
    )
  }
  return (
    <div className={className}>
      {showedResult && (
        <IonIcon
          only-icon
          icon={icon}
          size="small"
          slot="start"
          color={isDuplicate ? 'danger' : 'success'}
        />
      )}
      <div className="text">{currentString}</div>
    </div>
  )
}

export default Slot
