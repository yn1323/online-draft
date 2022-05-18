import { Box, HStack, VStack } from '@chakra-ui/react'
import { State } from 'Store'
import { useSelector } from 'react-redux'
import EnterDraftButton from '@/molecules/EnterDraftButton'
import AvatarWithName from '@/organisms/AvatarWithName'

const EnterDraft = () => {
  const {
    userInfo: { users, userId },
  } = useSelector((state: State) => state)

  return (
    <HStack w="100%">
      {users.map((user, i) => (
        <Box key={i} w="100%">
          <VStack mx={4}>
            <AvatarWithName userId={user.userId} />
            <EnterDraftButton currentUser={user.userId} myId={userId} />
          </VStack>
        </Box>
      ))}
    </HStack>
  )
}
export default EnterDraft
