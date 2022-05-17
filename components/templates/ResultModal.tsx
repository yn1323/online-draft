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
import { State } from 'Store'
import { FC, useEffect, useState } from 'react'
import { FaPaw } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { DOKIDOKI_TIME, SLOT_TIME } from '@/constants/common'
import { getDuplicateItemInRound } from '@/helpers/common'
import { setFinishedRounds } from '@/helpers/firebase'
import { useModal } from '@/helpers/hooks'
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
    userInfo: { groupId, users },
  } = useSelector((state: State) => state)

  const { hideModal } = useModal()
  const [submit, setSubmit] = useState(0)
  const [hasConflict, setHasConflict] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSubmit(1)
    }, SLOT_TIME + 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (submit === 1) {
      duplicateCheck()
    } else if (submit === 2) {
      // startShowConflictData()
    } else if (submit === 3) {
      // finishThisRound()
    } else if (submit === 4) {
      //
    }
  }, [submit])

  const duplicateCheck = () => {
    const { hasDuplicate } = getDuplicateItemInRound(
      selections,
      '',
      targetRound
    )
    if (hasDuplicate) {
      setHasConflict(true)
      setSubmit(2)
    } else {
      finishThisRound()
      setSubmit(4)
    }
  }

  useEffect(() => {
    if (submit === 2 && hasConflict && finishedRound.includes(targetRound)) {
      setSubmit(3)
      goToEnd()
    }
  }, [finishedRound, hasConflict, submit, targetRound])

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
      setSubmit(4)
    }, DOKIDOKI_TIME)
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader rounded="xs">結果発表！！</ModalHeader>
        <ModalCloseButton />
        <ModalBody mt={5}>
          <div className="resultModalWrapper">
            {submit === 4 && hasConflict && (
              <div className="conflict">
                データの重複がありました。
                <br />
                ランダム抽選の結果、背景色が赤いユーザーはドラフト候補の変更が必要です。
                <br />
                <span className="caution">
                  CLOSEボタン押下後、背景色が点滅しているユーザーから順に候補を変更してください。
                </span>
              </div>
            )}
            <section className="result">
              {submit < 3 && <ResultSlot />}
              {submit >= 3 && <ConflictSlot hasConflict={hasConflict} />}
            </section>
            {submit === 2 && (
              <>
                <hr />
                <div className="closeBtn align-centerVH">
                  <Button
                    colorScheme="red"
                    onClick={startShowConflictData}
                    disabled={hasClicked}
                    leftIcon={<FaPaw />}
                  >
                    抽選開始！
                  </Button>
                </div>
              </>
            )}
            {submit === 4 && (
              <>
                <hr />
                <div className="closeBtn align-centerVH">
                  <Button onClick={hideModal}>Close</Button>
                </div>
              </>
            )}
          </div>
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
