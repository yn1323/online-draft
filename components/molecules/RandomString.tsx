import { Box } from '@chakra-ui/react'
import { State } from 'Store'
import { FC, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { SAMPLE_HORSES } from '@/constants/common'
import { getAllItems } from '@/helpers/common'

const RandomString: FC = () => {
  const {
    draft: { selections },
  } = useSelector((state: State) => state)
  const allItems = getAllItems(selections)
  const timer: any = useRef(null)

  const [currentString, setCurrentString] = useState('')

  const startSlot = () => {
    const horses = [...SAMPLE_HORSES, ...allItems]
    timer.current = setInterval(() => {
      setCurrentString(horses[Math.floor(Math.random() * horses.length)])
    }, 10)
  }

  useEffect(() => {
    const delay = 0
    setTimeout(startSlot, delay)
  }, [])

  return <Box className="text">{currentString}</Box>
}

export default RandomString
