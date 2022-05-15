import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
  Button,
  Input,
  IconButton,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { useState, useEffect, FC } from 'react'
import { FaPaste } from 'react-icons/fa'
import { useToast } from '@/helpers/hooks'

type PropTypes = {
  groupId: string
  isOpen: ModalProps['isOpen']
  onClose: ModalProps['onClose']
}

const ShareModal: FC<PropTypes> = ({ groupId, isOpen, onClose }) => {
  const [copyText, setCopyText] = useState('')

  const { showToast } = useToast()

  useEffect(() => {
    const location = window.location.href.replace('/draft', '/entry')
    setCopyText(location)
  }, [])

  const onCopy = () => {
    showToast({ title: 'コピーしました。' })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader rounded="xs">シェア</ModalHeader>
        <ModalCloseButton />
        <ModalBody mt={5}>
          <Text>参加者に下記URLをシェアしてください。</Text>
          <HStack>
            <Input value={copyText} disabled variant="flushed" />
            <IconButton
              colorScheme="green"
              aria-label="copy"
              icon={<FaPaste />}
              onClick={onCopy}
            />
          </HStack>
        </ModalBody>

        <ModalFooter mt={5}>
          <Button colorScheme="green" mr={3} onClick={onClose}>
            OK
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ShareModal
