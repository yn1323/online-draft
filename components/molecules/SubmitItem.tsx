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
  Box,
  Text,
} from '@chakra-ui/react'
import { State } from 'Store'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { findUserNameFromUserId, isDuplicateItem } from '@/helpers/common'
import { addLogMessage } from '@/helpers/firebase'
import {
  useGetCurrentComment,
  useGetCurrentItem,
  useItems,
  useModal,
  useToast,
} from '@/helpers/hooks'

interface Props {
  userId: string
  targetRound?: number
  isUpdate?: boolean
  isOpen: ModalProps['isOpen']
  onClose: ModalProps['onClose']
  isFromTable?: boolean
}

const SubmitItem = ({
  userId,
  targetRound = 0,
  isUpdate = false,
  isOpen,
  onClose,
  isFromTable = false,
}: Props) => {
  const { userInfo, draft } = useSelector((state: State) => state)
  const [item, setItem] = useState('')
  const [comment, setComment] = useState('')
  const [isDuplicate, setIsDuplicate] = useState(false)
  const currentItem = useGetCurrentItem(userId, targetRound)
  const currentComment = useGetCurrentComment(userId, targetRound)

  useEffect(() => {
    if (isOpen) {
      setItem(currentItem)
      setComment(currentComment)
      checkDuplicate(currentItem)
    }
  }, [isOpen])

  const { addItem, updateItem } = useItems()
  const { showToast } = useToast()

  const submit = () => {
    const nextItem = item
    const nextComment = comment
    if (!nextItem) {
      showToast({
        title: 'ドラフト候補を入力してください。',
      })
      return false
    }
    if (isUpdate) {
      updateItem({
        item: nextItem,
        targetUserId: userId,
        roundIndex: targetRound,
        comment: nextComment,
      })
      const userName = findUserNameFromUserId(userInfo.users, userId)
      const myName = findUserNameFromUserId(userInfo.users, userInfo.userId)
      const editMsg = '編集ログ'
      const message = `[${editMsg}][R${targetRound}-${userName}] ${currentItem}(${currentComment}) → ${nextItem}(${nextComment}) |  By ${myName}`
      addLogMessage({ groupId: userInfo.groupId, userId: 'computer', message })
    } else {
      addItem({ item: nextItem, comment: nextComment })
    }
    onClose()
  }
  const modalTitle = isFromTable ? 'ドラフト候補編集' : 'ドラフト候補入力'

  const checkDuplicate = (currentVal: string) => {
    const localIsDuplicate = isDuplicateItem(
      draft,
      targetRound,
      userId,
      currentVal
    )
    setIsDuplicate(localIsDuplicate)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader rounded="xs">{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody mt={5}>
          <Box>
            <section className="body">
              {isDuplicate && (
                <div className="warn">
                  ドラフト候補が重複しています。
                  <br />
                  別の候補を入力してください。
                </div>
              )}
              <div className="label">ドラフト候補名</div>
              <Input
                value={item}
                maxLength={32}
                onChange={(e: any) => setItem(e.target.value)}
              />
              <div className="label comment">コメント</div>
              <Input
                value={comment}
                maxLength={128}
                placeholder="任意"
                onChange={(e: any) => setComment(e.target.value)}
              />
            </section>
          </Box>
        </ModalBody>

        <ModalFooter mt={5}>
          <div className="buttonArea">
            <Button
              colorScheme="green"
              onClick={submit}
              disabled={isDuplicate}
              mr={4}
            >
              OK
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SubmitItem
