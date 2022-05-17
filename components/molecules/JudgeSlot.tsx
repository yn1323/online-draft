import { Icon } from '@chakra-ui/react'
import { State } from 'Store'
import { useEffect, useState } from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { DOKIDOKI_TIME } from '@/constants/common'
import { getTargetRoundData } from '@/helpers/common'

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
  const icon = isDuplicate ? FaRegCheckCircle : FaRegCheckCircle

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
  }, [setMyItem])

  useEffect(() => {
    setTimeout(() => {
      setShowedResult(true)
    }, DOKIDOKI_TIME)
  }, [])

  if (!hasConflict) {
    return (
      <div className={className}>
        <Icon as={FaRegCheckCircle}></Icon>
        <div className="text">{currentString}</div>
      </div>
    )
  }
  return (
    <div className={className}>
      {showedResult && <Icon as={icon} color={isDuplicate ? 'red' : 'green'} />}
      <div className="text">{currentString}</div>
    </div>
  )
}

export default Slot
