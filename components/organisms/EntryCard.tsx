import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import { State } from 'Store'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { boxShadow } from '@/constants/theme'
import { useInfo } from '@/helpers/hooks'
import UserList from '@/molecules/UserList'
import CreateUser from '@/organisms/CreateUser'

const EntryCard = () => {
  const {
    userInfo: { users, groupId },
  } = useSelector((state: State) => state)
  const router = useRouter()
  const [cardIndex, setCardIndex] = useState(0)
  const { addUserId } = useInfo()

  const hasUser = !!users.length
  const loginWithExistUser = (userId: string) => {
    addUserId(userId)
    router.push(`/draft/${groupId}`)
  }

  return (
    <Box {...boxShadow} w="320px" maxH="80vh">
      {cardIndex === 0 && (
        <VStack>
          {hasUser && (
            <Box w="100%">
              <UserList
                users={users}
                title="登録ユーザー選択"
                callback={(userId: string) => loginWithExistUser(userId)}
              />
              <HStack w="100%">
                <hr />
                <Text>or</Text>
                <hr />
              </HStack>
            </Box>
          )}

          <Button colorScheme="green" onClick={() => setCardIndex(1)}>
            新規ユーザー登録
          </Button>
        </VStack>
      )}
      {cardIndex === 1 && <CreateUser goBack={() => setCardIndex(0)} />}
    </Box>
  )
}

export default EntryCard
