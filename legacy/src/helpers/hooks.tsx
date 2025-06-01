import type { UseToastOptions } from '@chakra-ui/react'
import { useToast as useToastChakra } from '@chakra-ui/react'
import { useMediaQuery, useTheme } from '@chakra-ui/react'
import { State } from 'Store'
import moment from 'moment'
import { useEffect, useRef, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  findAvatarPathFromUserId,
  findUserNameFromUserId,
  findUserOwnSelection,
  getTargetRoundUserData,
  isUserFinishEnter,
  makeNextItem,
  sessionStorageInfo,
} from '@/helpers/common'
import { createSelection } from '@/helpers/firebase'
import {
  hideLoading,
  hideModal,
  hideNavComponent,
  setModalComponent,
  setNavComponent,
  showLoading,
  showModal,
  showNavComponent,
  showResultModal,
} from '@/stores/component'
import { setGroupId, setUserId } from '@/stores/userInfo'

export const usePrevious = (value: any, initialVal?: any) => {
  const ref = useRef(initialVal ?? null)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export const useNav = () => {
  const dispatch = useDispatch()

  return {
    setNav: ({ title, component }: { title: string; component: any }) =>
      dispatch(setNavComponent({ title, component })),
    showNav: () => dispatch(showNavComponent()),
    hideNav: () => dispatch(hideNavComponent()),
  }
}

export const useModal = () => {
  const dispatch = useDispatch()
  return {
    setModalComponent: ({ component, title }: any) =>
      dispatch(setModalComponent({ component, title })),
    showModal: () => dispatch(showModal()),
    showResultModal: () => dispatch(showResultModal()),
    hideModal: () => dispatch(hideModal()),
  }
}

export const useToast = () => {
  const toast = useToastChakra()
  type ShowToastArgs = {
    title: string
    description?: string
    duration?: number
    status?: UseToastOptions['status']
  }

  return {
    showToast: (args: ShowToastArgs) => {
      toast({
        title: args.title,
        description: args.description,
        duration: args.duration ?? 3000,
        isClosable: true,
        position: 'top-right',
      })
    },
  }
}

export const useLoading = () => {
  const dispatch = useDispatch()
  const {
    component: { loading },
  } = useSelector((state: State) => state)
  return {
    isLoadingShow: loading.show,
    showLoading: () => dispatch(showLoading()),
    hideLoading: () => dispatch(hideLoading()),
  }
}

export const useInfo = () => {
  const dispatch = useDispatch()
  const { setUserIdToSessionStorage } = sessionStorageInfo()
  const groupIdProcess = (groupId: string) => {
    dispatch(setGroupId({ groupId }))
  }
  const userIdProcess = (userId: string) => {
    setUserIdToSessionStorage(userId)
    dispatch(setUserId(userId))
  }
  return {
    addGroupId: (groupId: string) => groupIdProcess(groupId),
    addUserId: (userId: string) => userIdProcess(userId),
  }
}

export const useChat = () => {
  const {
    userInfo,
    chat: { context },
  } = useSelector((state: State) => state)

  const chatInfo = context.map(({ message, userId, date }) => ({
    isMyLog: userInfo.userId === userId,
    message,
    userId,
    userName: findUserNameFromUserId(userInfo.users, userId),
    date: moment(date).format('M/D'),
    //  なぜか時間が正常に取得できないため頑張る
    time: `${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`,
    avatar: findAvatarPathFromUserId(userInfo.users, userId),
  }))
  return {
    chatInfo,
  }
}

export const useGetOneSelection = (userId: string) => {
  const {
    draft: { selections },
  } = useSelector((state: State) => state)

  const oneSelection = selections.find(selection => selection.userId === userId)

  return oneSelection ? oneSelection.selection : []
}

export const useItems = () => {
  const {
    userInfo: { userId },
    draft: { round, selections },
  } = useSelector((state: State) => state)

  const addItem = (
    targetUserId: string,
    roundIndex: number,
    item: string,
    comment: string
  ) => {
    const updateUserId = targetUserId || userId
    const updateRoundIndex = roundIndex === 0 ? round : roundIndex
    if (!item) {
      return false
    }
    const selection = findUserOwnSelection(selections, updateUserId)
    const nextSelection = makeNextItem(
      selection,
      updateRoundIndex,
      item,
      comment
    )
    createSelection({ userId: updateUserId, selection: nextSelection })
  }
  const updateItem = (
    targetUserId: string,
    roundIndex: number,
    item: string,
    comment: string
  ) => {
    const updateUserId = targetUserId || userId
    const updateRoundIndex = roundIndex === 0 ? round : roundIndex
    if (!item) {
      return false
    }
    const selection = findUserOwnSelection(selections, updateUserId)
    const nextSelection = makeNextItem(
      selection,
      updateRoundIndex,
      item,
      comment
    )
    createSelection({ userId: updateUserId, selection: nextSelection })
  }
  return {
    addItem: ({ targetUserId = '', roundIndex = 0, item = '', comment = '' }) =>
      addItem(targetUserId, roundIndex, item, comment),
    updateItem: ({
      targetUserId = '',
      roundIndex = 0,
      item = '',
      comment = '',
    }) => updateItem(targetUserId, roundIndex, item, comment),
  }
}

export const useIsUserFinishEnter = (userId: string) => {
  const {
    draft: { round, selections },
  } = useSelector((state: State) => state)
  return isUserFinishEnter(selections, userId, round)
}

export const useGetCurrentItem = (userId: string, targetRound = 0) => {
  const {
    draft: { round, selections },
  } = useSelector((state: State) => state)
  const compareRound = targetRound || round
  const selection = findUserOwnSelection(selections, userId)
  const target = selection.find(s => s.round === compareRound)
  return target?.item ?? ''
}

export const useGetCurrentComment = (userId: string, targetRound = 0) => {
  const {
    draft: { round, selections },
  } = useSelector((state: State) => state)
  const compareRound = targetRound || round
  const selection = findUserOwnSelection(selections, userId)
  const target = selection.find(s => s.round === compareRound)
  return target?.comment ?? ''
}

export const useTableData = () => {
  const {
    draft: { selections, round },
    userInfo: { users },
    component: { tableMode },
  } = useSelector((state: State) => state)
  const minimumRow = 10
  const columns = useMemo(() => {
    const index = [{ Header: 'No', accessor: 'round' }]
    const userHeader =
      tableMode === 0
        ? users.map(({ avatar, userId, userName }) => ({
            Header: userName,
            accessor: userId,
            avatar: avatar,
          }))
        : users.reduce((acc: any, cur) => {
            const t = []
            t.push({
              Header: `${cur.userName}/ドラフト`,
              accessor: cur.userId,
              avatar: cur.avatar,
            })
            t.push({
              Header: `${cur.userName}/コメント`,
              accessor: `${cur.userId}-comment`,
              avatar: cur.avatar,
            })

            return [...acc, ...t]
          }, [])

    return [...index, ...userHeader]
  }, [users, tableMode])

  const data = useMemo(() => {
    const minimumRound = round < minimumRow ? minimumRow : round
    const d: any = []
    for (let loopRound = 1; loopRound <= minimumRound; loopRound++) {
      let row: any = { round: loopRound }
      selections.forEach(({ selection, userId }) => {
        const roundData = selection.find(d => d.round === loopRound)
        if (roundData) {
          if (tableMode === 0) {
            row = {
              ...row,
              [userId]: roundData.item,
            }
          } else {
            row = {
              ...row,
              [userId]: roundData.item,
              [`${userId}-comment`]: roundData.comment,
            }
          }
        }
      })
      d.push(row)
    }
    return d
  }, [selections, tableMode])

  return {
    columns,
    data,
  }
}

export const useCSV = () => {
  const {
    draft: { selections, round },
    userInfo: { users },
    component: { tableMode },
  } = useSelector((state: State) => state)
  const minimumRow = 10
  const userIds = users.map(({ userId }) => userId)
  const data = []

  const headers = users.reduce(
    (acc: any, cur) => {
      const t = []
      t.push(`${cur.userName}/ドラフト`)
      t.push(`${cur.userName}/コメント`)

      return [...acc, ...t]
    },
    ['Round']
  )
  data.push(headers)

  const roundToFetch = round - 1

  for (let i = 0; i < roundToFetch; i++) {
    const tmp = []
    const targetRound = i + 1
    tmp.push(targetRound)
    userIds.forEach(id => {
      const d = getTargetRoundUserData(selections, id, targetRound)
      tmp.push(d?.item ?? '')
      tmp.push(d?.comment ?? '')
    })
    data.push(tmp)
  }

  return data
}

export const useScreenSize = () => {
  const theme = useTheme()
  const [isSmallerThan] = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`)
  return {
    isPC: !isSmallerThan,
    isSP: isSmallerThan,
  }
}
