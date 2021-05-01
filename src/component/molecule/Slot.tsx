import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { SLOT_TIME } from 'src/constant'
import { getAllItems, getTargetRoundData, slotTime } from 'src/helper'
import { State } from 'Store'

interface Props {
  userId: string
  targetRound: number
  allUserNum: number
  isDuplicate: boolean
  order?: number
}

const Slot = ({
  userId,
  targetRound,
  order = 0,
  allUserNum = 1,
  isDuplicate,
}: Props) => {
  const {
    draft: { selections },
    userInfo: { users },
  } = useSelector((state: State) => state)
  const eachTime = SLOT_TIME
  const allItems = getAllItems(selections)
  const itemLength = allItems.length
  const timer: any = useRef(null)

  const [currentString, setCurrentString] = useState('')
  const [className, setClassName] = useState('result-selection')

  const startSlot = () => {
    timer.current = setInterval(() => {
      setCurrentString(allItems[Math.floor(Math.random() * itemLength)])
    }, 50)
  }

  const endSlot = () => {
    clearInterval(timer.current)
  }

  const setMyItem = () => {
    const roundData = getTargetRoundData(selections, targetRound)
    const myData = roundData.find((d: any) => d.userId === userId)
    setCurrentString(myData?.item || 'ERROR')
  }

  const markDuplicate = () => {
    if (isDuplicate) {
      setClassName(className + ' duplicate')
    }
  }

  useEffect(() => {
    const roundData = getTargetRoundData(selections, targetRound)
    if (roundData.length === users.length)
      if (timer.current) {
        endSlot()
      }
    const delay = order * eachTime
    const allFinished = eachTime * allUserNum + 1000
    setTimeout(startSlot, delay)
    setTimeout(endSlot, delay + eachTime)
    setTimeout(setMyItem, delay + eachTime + 1)

    setTimeout(markDuplicate, allFinished)
  }, [selections, users])

  return (
    <div className={className}>
      <span>{currentString}</span>
    </div>
  )
}

export default Slot