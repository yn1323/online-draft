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
    <Button className="width-100" colorScheme="green" onClick={onOpen}>
      入力する
    </Button>
  )
  const finishButton = (
    <Button
      className="width-100"
      colorScheme="green"
      color="success"
      onClick={onOpen}
    >
      修正する
    </Button>
  )
  const othersEnteringButton = (
    <Button className="width-100" fill="default" disabled>
      考え中
    </Button>
  )
  const othersFinishButton = (
    <Button className="width-100" fill="clear" disabled>
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
