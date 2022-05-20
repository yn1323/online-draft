import { Box, Button, Text, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { boxShadow } from '@/constants/theme'
import CreateGroup from '@/organisms/CreateGroup'

const DraftHistoryList = dynamic(() => import('@/organisms/DraftHistoryList'), {
  ssr: false,
})

const HomeCard = () => {
  const [cardIndex, setCardIndex] = useState(0)

  return (
    <Box {...boxShadow} w="320px" maxH="80vh" overflowY="scroll">
      {cardIndex === 0 && (
        <VStack w="100%" spacing={8}>
          <VStack w="100%">
            <Text>新しく作成する</Text>
            <hr />
          </VStack>
          <Button
            className="createNew"
            onClick={() => setCardIndex(1)}
            colorScheme="green"
          >
            グループを作成
          </Button>

          <DraftHistoryList />
        </VStack>
      )}

      {cardIndex === 1 && <CreateGroup goBack={() => setCardIndex(0)} />}
    </Box>
  )
}

export default HomeCard
