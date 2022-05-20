import { Box, HStack, Icon } from '@chakra-ui/react'
import { State } from 'Store'
import { useEffect, useState } from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { DOKIDOKI_TIME } from '@/constants/common'
import { getTargetRoundData } from '@/helpers/common'
import RandomString from '@/molecules/RandomString'

interface Props {
  userId: string
  targetRound: number
  showRoulette?: boolean
  errorUsers?: string[]
}

const Slot = ({
  userId,
  targetRound,
  showRoulette = false,
  errorUsers = [],
}: Props) => {
  const {
    draft: { selections },
  } = useSelector((state: State) => state)

  const [currentString, setCurrentString] = useState('')
  // const icon = isDuplicate ? FaRegCheckCircle : FaRegCheckCircle
  const icon = FaRegCheckCircle
  const setMyItem = () => {
    const roundData = getTargetRoundData(selections, targetRound)
    const myData = roundData.find((d: any) => d.userId === userId)
    setCurrentString(myData?.item || 'ERROR')
  }

  useEffect(() => {
    setMyItem()
  }, [])

  useEffect(() => {
    setTimeout(() => {}, DOKIDOKI_TIME)
  }, [])

  const bgColor = errorUsers.includes(userId) ? 'red.300' : 'green.300'

  if (showRoulette) {
    return <RandomString />
  }

  return (
    <HStack bg={bgColor} px={4} py={1} w="100%" justifyContent="center">
      <Icon as={icon}></Icon>
      <Box>{currentString}</Box>
    </HStack>
  )
}

export default Slot
