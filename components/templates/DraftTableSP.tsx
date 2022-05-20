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
import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useTableData } from '@/helpers/hooks'
import SubmitItem from '@/molecules/SubmitItem'
import AvatarWithName from '@/organisms/AvatarWithName'
import { changeTableMode } from '@/stores/component'

const DraftTableSP = () => {
  const dispatch = useDispatch()
  const { data } = useTableData()

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

  console.log(data)

  return (
    <Accordion allowMultiple>
      {data.map((row: any, i: number) => (
        <AccordionItem key={i}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {row.round}R
              {Object.keys(row).length !== 1 && (
                <Icon color="green" ml={4} as={FaCheck} />
              )}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {Object.keys(row).length === 1 && <Text>-</Text>}
            {Object.keys(row).length !== 1 && (
              <VStack w="100%">
                {Object.keys(row)
                  .filter(k => k !== 'round' && !k.includes('-comment'))
                  .map((userId, j) => (
                    <Button
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

export default DraftTableSP
