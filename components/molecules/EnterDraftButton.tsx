import { Button, useDisclosure } from '@chakra-ui/react'
import { useIsUserFinishEnter, useModal } from '@/helpers/hooks'
import SubmitItem from '@/molecules/SubmitItem'

interface Props {
  currentUser: string
  myId: string
}

const EnterDraftButton = ({ currentUser, myId }: Props) => {
  const isEntered = useIsUserFinishEnter(currentUser)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const enterButton = (
    <Button w="100%" colorScheme="green" onClick={onOpen}>
      入力する
    </Button>
  )
  const finishButton = (
    <Button w="100%" colorScheme="orange" onClick={onOpen}>
      修正する
    </Button>
  )
  const othersEnteringButton = (
    <Button w="100%" colorScheme="green" disabled>
      考え中
    </Button>
  )
  const othersFinishButton = (
    <Button w="100%" colorScheme="orange" disabled>
      入力完了
    </Button>
  )

  return (
    <>
      {isEntered
        ? currentUser === myId
          ? finishButton
          : othersFinishButton
        : currentUser === myId
        ? enterButton
        : othersEnteringButton}
      <SubmitItem userId={myId} isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default EnterDraftButton
