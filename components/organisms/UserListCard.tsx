import { Box } from '@chakra-ui/react'
import EnterDraft from '@/organisms/EnterDraft'

const UserListCard = () => {
  return (
    <Box boxShadow="md" p={8} border={1} rounded="base" w="80vw" maxH="80vh">
      <EnterDraft />
    </Box>
  )
}

export default UserListCard
