import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { State } from 'Store'
import { useSelector } from 'react-redux'
import { useScreenSize } from '@/helpers/hooks'
import EnterDraftButton from '@/molecules/EnterDraftButton'
import AvatarWithName from '@/organisms/AvatarWithName'

const EnterDraft = () => {
  const {
    userInfo: { users, userId },
  } = useSelector((state: State) => state)
  const { isSP } = useScreenSize()

  if (isSP) {
    return (
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              ユーザー
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack w="100%">
              {users.map((user, i) => (
                <HStack mx={4} key={i} w="100%" justifyContent="space-between">
                  <AvatarWithName userId={user.userId} />
                  <EnterDraftButton currentUser={user.userId} myId={userId} />
                </HStack>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    )
  }

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
