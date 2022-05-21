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
} from '@chakra-ui/react'
import { FC } from 'react'
import ResultSlot from '@/organisms/ResultSlot'

interface Props {
  isOpen: ModalProps['isOpen']
  onClose: ModalProps['onClose']
}

const ResultModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader rounded="xs">結果発表！！</ModalHeader>
        <ModalCloseButton />
        <ModalBody mt={5}>
          <ResultSlot />
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

export default ResultModal
