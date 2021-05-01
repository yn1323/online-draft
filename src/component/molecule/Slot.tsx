import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllItems, getTargetRoundData } from 'src/helper'
import { State } from 'Store'

interface Props {
  userId: string
  targetRound: number
  order?: number
}

const Slot = ({ userId, targetRound, order = 0 }: Props) => {
  const {
    draft: { selections },
    userInfo: { users },
  } = useSelector((state: State) => state)
  const eachTime = 3
  const allItems = getAllItems(selections)
  const itemLength = allItems.length
  const timer: any = useRef(null)

  const [currentString, setCurrentString] = useState('')

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

  useEffect(() => {
    const roundData = getTargetRoundData(selections, targetRound)
    if (roundData.length === users.length)
      if (timer.current) {
        endSlot()
      }
    const delay = order * eachTime
    setTimeout(startSlot, delay)
    setTimeout(endSlot, delay + eachTime)
    setTimeout(setMyItem, delay + eachTime + 1)
  }, [selections, users])

  return <div className="result-selection">{currentString}</div>
}

export default Slot
