import { Box, Button, Center, HStack, Text, VStack } from '@chakra-ui/react'
import { State } from 'Store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DOKIDOKI_TIME } from '@/constants/common'
import { getDuplicateItemInRound } from '@/helpers/common'
import { useScreenSize } from '@/helpers/hooks'
import Slot from '@/molecules/Slot'
import AvatarWithName from '@/organisms/AvatarWithName'

const ResultSlot = () => {
  const {
    userInfo: { users, userId },
    draft: { round, selections },
  } = useSelector((state: State) => state)
  const [showRoulette, setShowRoulette] = useState(true)

  const { duplicateDataUserIdsExcludeWinner, hasDuplicate } =
    getDuplicateItemInRound(selections, userId, round - 1)

  const stopRouletteHandler = () => {
    setShowRoulette(false)
  }

  const { isSP } = useScreenSize()

  return (
    <VStack align="flex-start">
      <HStack w="100%" flexWrap="wrap" justifyContent="space-around">
        {users.map((user, i) => (
          <VStack key={i} w={isSP ? '45%' : '100%'}>
            <AvatarWithName userId={user.userId} showCheck={false} />
            <Slot
              userId={user.userId}
              targetRound={round - 1}
              showRoulette={showRoulette}
              errorUsers={duplicateDataUserIdsExcludeWinner}
            />
            <Box h={5} />
          </VStack>
        ))}
      </HStack>
      {showRoulette && (
        <HStack w="100%" justifyContent="center">
          <Button colorScheme="orange" onClick={stopRouletteHandler}>
            ストップ
          </Button>
        </HStack>
      )}
      {showRoulette && (
        <Text fontSize="sm">
          抽選を止めるまでしばらくそのままお待ちください。
        </Text>
      )}
      {!showRoulette && hasDuplicate && (
        <>
          <Text fontSize="sm">データの重複がありました。</Text>
          <Text fontSize="sm">
            ランダム抽選の結果、背景色が赤いユーザーはドラフト候補の変更が必要です。
          </Text>
          <Text fontSize="sm" color="red">
            OKボタン押下後、背景色が点滅しているユーザーから順に候補を変更してください。
          </Text>
        </>
      )}
    </VStack>
  )
}

export default ResultSlot
