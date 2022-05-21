import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Icon,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { css } from '@emotion/react'
import { State } from 'Store'
import { useCallback, useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getDuplicateItemInRound } from '@/helpers/common'
import { useTableData } from '@/helpers/hooks'
import SubmitItem from '@/molecules/SubmitItem'
import AvatarWithName from '@/organisms/AvatarWithName'
import { changeTableMode } from '@/stores/component'

const DraftTableSP = () => {
  const {
    draft: { round, selections, finishedRound },
  } = useSelector((state: State) => state)

  const dispatch = useDispatch()
  const { data } = useTableData()

  const conflict = useCallback(
    (rowRound: number, userId: string) => {
      const result = {
        isConflict: false,
        isNextChoose: false,
      }
      if (rowRound === round - 1) {
        // 処理が重いため、限定的に検査
        const { duplicateDataUserIdsExcludeWinner } = getDuplicateItemInRound(
          selections,
          userId,
          rowRound
        )
        if (duplicateDataUserIdsExcludeWinner.includes(userId)) {
          result.isConflict = true
        }
        if (
          duplicateDataUserIdsExcludeWinner &&
          duplicateDataUserIdsExcludeWinner[0] === userId
        ) {
          result.isNextChoose = true
        }
      }
      return result
    },
    [selections, round]
  )

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    // コメントも取得
    dispatch(changeTableMode({ tableMode: 1 }))
  }, [])

  const [modalInfo, setModalInfo] = useState({
    userId: '',
    rowRound: 0,
  })

  const showEditModal = (userId: string, rowRound: number) => {
    setModalInfo({ userId, rowRound })
    onOpen()
  }
  const isFinishedRound = (round: number) => finishedRound.includes(round)

  console.log(finishedRound)
  return (
    <Accordion allowMultiple>
      {data.map((row: any, i: number) => (
        <AccordionItem key={i}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {row.round}R
              {isFinishedRound(i + 1) && (
                <Icon color="green" ml={4} as={FaCheck} />
              )}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {!isFinishedRound(i + 1) && <Text>-</Text>}
            {isFinishedRound(i + 1) && (
              <VStack w="100%">
                {Object.keys(row)
                  .filter(k => k !== 'round' && !k.includes('-comment'))
                  .map((userId, j) => (
                    <Button
                      colorScheme={
                        conflict(row.round, userId).isConflict ? 'red' : 'gray'
                      }
                      css={
                        conflict(row.round, userId).isNextChoose &&
                        styles.duplicateChange
                      }
                      key={j}
                      h="50px"
                      w="100%"
                      onClick={() => showEditModal(userId, row.round)}
                    >
                      <HStack key={j} w="100%" justifyContent="space-between">
                        <Box w="50%">
                          <AvatarWithName userId={userId} />
                        </Box>
                        <Box w="50%">
                          <Text>{row[userId]}</Text>
                          {!!row[`${userId}-comment`] && (
                            <Text overflowY={'hidden'}>
                              [{row[`${userId}-comment`]}]
                            </Text>
                          )}
                        </Box>
                      </HStack>
                    </Button>
                  ))}
              </VStack>
            )}
          </AccordionPanel>
        </AccordionItem>
      ))}

      <SubmitItem
        userId={modalInfo.userId.replace('-comment', '')}
        targetRound={modalInfo.rowRound}
        isUpdate={true}
        isOpen={isOpen}
        onClose={onClose}
        isFromTable={true}
      />
    </Accordion>
  )
}

const styles = {
  duplicate: css`
    background: #e7b1cc;
  `,
  duplicateChange: css`
    animation: blinkAnime 1s infinite alternate;
    @keyframes blinkAnime {
      0% {
        background: #e7b1cc;
      }
      100% {
        background: rgba(255, 0, 0, 0.5);
      }
    }
  `,
}

export default DraftTableSP
