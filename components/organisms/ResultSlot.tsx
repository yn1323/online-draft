import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { State } from 'Store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DOKIDOKI_TIME } from '@/constants/common'
import { getDuplicateItemInRound } from '@/helpers/common'
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

  useEffect(() => {
    setTimeout(() => {
      setShowRoulette(false)
    }, DOKIDOKI_TIME)
  }, [])

  return (
    <VStack align="flex-start">
      <HStack w="100%">
        {users.map((user, i) => (
          <VStack key={i} w="100%">
            <AvatarWithName userId={user.userId} showCheck={false} />
            <Slot
              userId={user.userId}
              targetRound={round - 1}
              showRoulette={showRoulette}
              errorUsers={duplicateDataUserIdsExcludeWinner}
            />
          </VStack>
        ))}
      </HStack>
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
