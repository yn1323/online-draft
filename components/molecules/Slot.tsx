import { State } from 'Store'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { SAMPLE_HORSES, SLOT_TIME } from '@/constants/common'
import { getAllItems, getTargetRoundData } from '@/helpers/common'

interface Props {
  userId: string
  targetRound: number
}

const JusdgeSlot = ({ userId, targetRound }: Props) => {
  const {
    draft: { selections },
    userInfo: { users },
  } = useSelector((state: State) => state)
  const eachTime = SLOT_TIME
  const allItems = getAllItems(selections)
  const timer: any = useRef(null)

  const [currentString, setCurrentString] = useState('')
  const [className, setClassName] = useState('result-selection')

  const startSlot = () => {
    const horses = [...SAMPLE_HORSES, ...allItems]
    timer.current = setInterval(() => {
      setCurrentString(horses[Math.floor(Math.random() * horses.length)])
    }, 10)
  }

  const endSlot = () => {
    clearInterval(timer.current)
    setMyItem()
  }

  const setMyItem = () => {
    const roundData = getTargetRoundData(selections, targetRound)
    const myData = roundData.find((d: any) => d.userId === userId)
    setCurrentString(myData?.item || 'ERROR')
  }

  useEffect(() => {
    const roundData = getTargetRoundData(selections, targetRound)
    if (roundData.length === users.length)
      if (timer.current) {
        endSlot()
      }
    // const delay = order * eachTime
    const delay = 0
    const allFinished = eachTime + 1000
    setTimeout(startSlot, delay)
    setTimeout(endSlot, delay + eachTime)
  }, [selections, users])

  return (
    <div className={className}>
      <div className="text">{currentString}</div>
    </div>
  )
}

export default JusdgeSlot
