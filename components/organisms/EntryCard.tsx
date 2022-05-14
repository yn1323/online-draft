import { Box, Button, VStack } from '@chakra-ui/react'
import { State } from 'Store'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
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
    <Box boxShadow="md" p={8} border={1} rounded="base" w="400px" maxH="80vh">
      {cardIndex === 0 && (
        <VStack>
          {hasUser && (
            <UserList
              users={users}
              title="登録ユーザー"
              callback={(userId: string) => loginWithExistUser(userId)}
            />
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
