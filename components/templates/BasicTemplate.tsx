import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  Spacer,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { State } from 'Store'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { FaFileDownload, FaShareAlt, FaThumbsUp } from 'react-icons/fa'
import { IoList, IoMenu, IoPlaySkipBackSharp } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { isProduction } from '@/constants/common'
import { getDuplicateItemInRound, isEveryOneEntered } from '@/helpers/common'
import { goToNextRound, setFinishedRounds } from '@/helpers/firebase'
import { useModal, useScreenSize, useToast } from '@/helpers/hooks'
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
  const router = useRouter()
  const showElement = Array.isArray(children) ? children : [children]
  const { isSP } = useScreenSize()
  const {
    userInfo: { groupId, groupName, users },
    draft: { round, finishedRound, selections },
  } = useSelector((state: State) => state)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { showToast } = useToast()
  const bottomNav = useDisclosure()

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
        setHeaderTitle(`${groupName}    [${round}R]`)
      }
    }
  }, [groupName, round, isEntry, setHeaderTitle])

  const debugGoBack = () => {
    goToNextRound({ groupId, nextRound: round - 1 })
    setFinishedRounds({
      groupId,
      currentFinishedRounds: finishedRound.filter(
        r => r !== 0 && r !== round - 1
      ),
      finishedRound: 0,
    })
  }

  const showResult = () => {
    const { hasDuplicate } = getDuplicateItemInRound(selections, '', round - 1)
    if (hasDuplicate) {
      showToast({
        title: '重複しているデータあります。データを修正してください。',
      })
      return false
    }
    const everyOneEntered = isEveryOneEntered(selections, users, round)
    if (!everyOneEntered) {
      showToast({
        title:
          '入力が完了していないユーザーがいます。入力が完了するまでしばらくお待ち下さい。',
      })
      return false
    }

    goToNextRound({ groupId, nextRound: round + 1 })
  }

  return (
    <Box h="100vh">
      <HStack h="3rem" px={isSP ? 0 : 12} bg="green.400">
        {router.pathname.includes('/log/') ? (
          <IconButton
            aria-label="share"
            colorScheme="teal"
            icon={<IoPlaySkipBackSharp />}
            onClick={router.back}
            bg="green.400"
            color="white"
          />
        ) : (
          <Link href="/" passHref>
            <Button
              variant="ghost"
              colorScheme="green"
              as="a"
              pointerEvents={'none'}
              color="white"
              maxW={'300px'}
              overflowX="hidden"
              textOverflow={'ellipsis'}
            >
              {headerTitle}
            </Button>
          </Link>
        )}

        <Spacer />
        {(isEntry || isDraft) && !isProduction && (
          <Button colorScheme="teal" onClick={debugGoBack}>
            {'D'}
          </Button>
        )}
        {(isEntry || isDraft) &&
          (isSP ? (
            <IconButton
              aria-label="share"
              colorScheme="teal"
              icon={<FaShareAlt />}
              onClick={onOpen}
              bg="green.400"
              color="white"
            />
          ) : (
            <Button
              colorScheme="green"
              bg="white"
              variant="outline"
              leftIcon={<FaShareAlt />}
              onClick={onOpen}
            >
              シェア
            </Button>
          ))}
        {isDraft && isSP && (
          <IconButton
            aria-label="share"
            colorScheme="teal"
            icon={<IoMenu />}
            onClick={bottomNav.onOpen}
            bg="green.400"
            color="white"
          />
        )}
      </HStack>
      <VStack h="calc(100% - 3rem)" justifyContent="center">
        {showElement}
      </VStack>
      <ShareModal groupId={groupId} isOpen={isOpen} onClose={onClose} />
      <Drawer
        placement={'bottom'}
        onClose={bottomNav.onClose}
        isOpen={bottomNav.isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack>
              <Button
                as="a"
                leftIcon={<IoList />}
                variant="ghost"
                w="100%"
                justifyContent={'flex-start'}
                onClick={() => router.push(`/log/${groupId}`)}
              >
                ログ&チャット
              </Button>
              <Button
                as="a"
                leftIcon={<FaThumbsUp />}
                variant="ghost"
                w="100%"
                justifyContent={'flex-start'}
                onClick={showResult}
              >
                結果発表！
              </Button>
              <Button
                as="a"
                leftIcon={<FaFileDownload />}
                variant="ghost"
                w="100%"
                justifyContent={'flex-start'}
                disabled
              >
                CSV出力(PCだけ！)
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default BasicTemplate
