import {
  Box,
  Button,
  HStack,
  Spacer,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { State } from 'Store'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { FaShareAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { isProduction } from '@/constants/common'
import { goToNextRound, setFinishedRounds } from '@/helpers/firebase'
import { useModal } from '@/helpers/hooks'
import { getGroupNameOnce } from '@/stores/userInfo'

const ShareModal = dynamic(() => import('@/molecules/ShareModal'))

const LOCATIONS = ['home', 'entry', 'draft'] as const

type PropTypes = {
  location: typeof LOCATIONS[number]
  groupIdFromPath?: string
  children: JSX.Element | JSX.Element[]
}

const BasicTemplate: FC<PropTypes> = ({
  location,
  groupIdFromPath = '',
  children,
}) => {
  const showElement = Array.isArray(children) ? children : [children]
  const {
    userInfo: { groupId, groupName },
    draft: { round, finishedRound },
  } = useSelector((state: State) => state)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const dispatch = useDispatch()

  const isHome = location === 'home'
  const isEntry = location === 'entry'
  const isDraft = location === 'draft'

  const [headerTitle, setHeaderTitle] = useState(
    isHome ? 'オンラインドラフト会議' : ''
  )

  useEffect(() => {
    if (!isHome) {
      dispatch(getGroupNameOnce({ groupId: groupIdFromPath }))
    }
  }, [groupIdFromPath, dispatch, isHome])

  useEffect(() => {
    if (groupName) {
      if (isEntry) {
        setHeaderTitle(groupName)
      } else {
        setHeaderTitle(`${groupName}    [ROUND-${round}]`)
      }
    }
  }, [groupName, round, isEntry, setHeaderTitle])

  const debugGoBack = () => {
    goToNextRound({ groupId, nextRound: round - 1 })
    console.log(round)
    setFinishedRounds({
      groupId,
      currentFinishedRounds: finishedRound.filter(
        r => r !== 0 && r !== round - 1
      ),
      finishedRound: 0,
    })
  }

  return (
    <Box h="100vh">
      <HStack h="3rem" px="12" bg="green.400">
        <Link href="/" passHref>
          <Button
            variant="ghost"
            colorScheme="teal"
            as="a"
            pointerEvents={'none'}
            color="white"
          >
            {headerTitle}
          </Button>
        </Link>
        <Spacer />
        {(isEntry || isDraft) && !isProduction && (
          <Button colorScheme="teal" onClick={debugGoBack}>
            {'DEBUG用-ROUND戻る'}
          </Button>
        )}
        {(isEntry || isDraft) && (
          <Button
            colorScheme="green"
            bg="white"
            variant="outline"
            leftIcon={<FaShareAlt />}
            onClick={onOpen}
          >
            シェア
          </Button>
        )}
      </HStack>
      <VStack h="calc(100% - 3rem)" justifyContent="center">
        {showElement}
      </VStack>
      <ShareModal groupId={groupId} isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default BasicTemplate
