import { Button, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { getDraftPageFromLS } from '@/helpers/common'

const DraftHistoryList = () => {
  const history: { groupName: string; url: string }[] = getDraftPageFromLS()
  const router = useRouter()

  if (!history.length) {
    return <></>
  }

  return (
    <VStack mt="4" w="100%">
      <Text mt="8">過去に参加したドラフト</Text>
      <hr />
      <VStack w="100%">
        {history.map(({ groupName, url }: any, i: number) => (
          <Button
            variant="ghost"
            key={i}
            onClick={() => router.push(url)}
            w="100%"
          >
            {groupName}
          </Button>
        ))}
      </VStack>
    </VStack>
  )
}

export default DraftHistoryList
