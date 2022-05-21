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
  Box,
} from '@chakra-ui/react'
import { State } from 'Store'
import { FC, useEffect, useState } from 'react'
import { FaPaw } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { DOKIDOKI_TIME, SLOT_TIME } from '@/constants/common'
import { getDuplicateItemInRound } from '@/helpers/common'
import { setFinishedRounds } from '@/helpers/firebase'
import ConflictSlot from '@/organisms/ConflictSlot'
import ResultSlot from '@/organisms/ResultSlot'

interface Props {
  targetRound: number
  isOpen: ModalProps['isOpen']
  onClose: ModalProps['onClose']
}

const ResultModal: FC<Props> = ({ targetRound, isOpen, onClose }) => {
  const {
    draft: { selections, finishedRound },
    userInfo: { groupId },
  } = useSelector((state: State) => state)

  const [process, setProcess] = useState(0)
  const [hasConflict, setHasConflict] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)

  //  初期化処理
  useEffect(() => {
    const timer = setTimeout(() => {
      setProcess(1)
    }, SLOT_TIME + 5000)
    return () => clearTimeout(timer)
  }, [isOpen])

  // 終了処理
  useEffect(() => {
    if (!isOpen) {
      setProcess(0)
    }
  }, [isOpen])

  useEffect(() => {
    if (process === 0) {
      // waiting画面
    } else if (process === 1) {
      // 重複があるかどうかを確認
      duplicateCheck()
    } else if (process === 2) {
      // 重複があった場合の画面
      startShowConflictData()
    } else if (process === 3) {
      // 重複なし → 終了
      finishThisRound()
    } else if (process === 4) {
      // 重複があった場合の画面 → 終了
    }
  }, [process])

  const duplicateCheck = () => {
    const { hasDuplicate } = getDuplicateItemInRound(
      selections,
      '',
      targetRound
    )
    if (hasDuplicate) {
      setHasConflict(true)
      setProcess(2)
    } else {
      finishThisRound()
      setProcess(4)
    }
  }

  useEffect(() => {
    if (process === 2 && hasConflict && finishedRound.includes(targetRound)) {
      setProcess(3)
    }
  }, [finishedRound, hasConflict, process, targetRound])

  const finishThisRound = () => {
    setFinishedRounds({
      groupId,
      currentFinishedRounds: finishedRound,
      finishedRound: targetRound,
    })
  }
  const startShowConflictData = () => {
    setHasClicked(true)
    finishThisRound()
  }
  const goToEnd = () => {
    setTimeout(() => {
      setProcess(4)
    }, DOKIDOKI_TIME)
  }

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
