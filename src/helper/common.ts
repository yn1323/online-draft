import moment from 'moment'
import { assetImages } from 'src/constant'
import { Selection, Selections, Users } from 'Store'

// eslint-disable-next-line @typescript-eslint/ban-types
export const deepcopy = (obj: {} | []) => JSON.parse(JSON.stringify(obj))

export const replaceArray = (
  array: any[],
  targetId: number,
  sourceId: number
) => {
  return array.reduce(
    (resultArray, element, id, originalArray) => [
      ...resultArray,
      id === targetId
        ? originalArray[sourceId]
        : id === sourceId
        ? originalArray[targetId]
        : element,
    ],
    []
  )
}

export const getDuplicateIndex = (baseArr: any[], targetArr: any[]) => {
  const len = baseArr.length
  for (let i = 0; i < len; i++) {
    if (targetArr.includes(baseArr[i])) {
      return i
    }
  }
  return -1
}

export const getDuplicateIndexes = (baseArr: any[], targetArr: any[]) => {
  const index = []
  const len = baseArr.length
  for (let i = 0; i < len; i++) {
    if (targetArr.includes(baseArr[i])) {
      index.push(i)
    }
  }
  return index
}

// getIndexDataFromObjext({a: [5,3,8], b: ['a','b','c']}, 1) // {a: 5, b: 'b'}
export const getIndexFromObject = (obj: any, index: number) => {
  const keys = Object.keys(obj)
  const ret: any = {}
  keys.forEach((key: string) => {
    ret[key] = obj[key][index]
  })
  return ret
}

export const filterRaceMatch = (meta: any, raceDetail: any) => {
  const targetHorse = meta.horse
  const compareHorse = raceDetail.horseInfo
  const matchIndex = getDuplicateIndex(targetHorse, compareHorse)
  if (matchIndex >= 0) {
    return {
      horseInfo: getIndexFromObject(meta, matchIndex),
      raceInfo: raceDetail.raceInfo,
    }
  } else {
    return {}
  }
}

export const sortObjectedArray = (obj: any[], sortKey: string) => {
  const t = [...obj]
  t.sort((a: any, b: any) => {
    if (a[sortKey] < b[sortKey]) return -1
    if (a[sortKey] > b[sortKey]) return 1
    return 0
  })
  return t
}

export const addComma = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const findAvatarPath = (i: string) => {
  return assetImages.find(({ index, path }) => i === index)?.path || ''
}

export const findUserInfo = (users: Users[], targetUserId: string) => {
  return users.find(({ userId }) => userId === targetUserId)
}

export const findAvatarPathFromUserId = (
  users: Users[],
  targetUserId: string
) => {
  return findUserInfo(users, targetUserId)?.avatar || ''
}

export const findUserNameFromUserId = (
  users: Users[],
  targetUserId: string
) => {
  return findUserInfo(users, targetUserId)?.userName || ''
}

export const sessionStorageInfo = () => {
  const setUserIdToSessionStoragePrccess = (userId: string) => {
    sessionStorage.setItem('userId', userId)
  }
  const getUserIdToSessionStoragePrccess = () => {
    return sessionStorage.getItem('userId') || ''
  }
  return {
    setUserIdToSessionStorage: (userId: string) =>
      setUserIdToSessionStoragePrccess(userId),
    getUserIdToSessionStorage: () => getUserIdToSessionStoragePrccess(),
  }
}

export const findUserOwnSelection = (
  selections: Selections[],
  userId: string
) => {
  const oneSelection = selections.find(selection => selection.userId === userId)

  return oneSelection ? oneSelection.selection : []
}

export const isRoundExistInSelections = (
  selections: Selections[],
  userId: string,
  round: number
) => {
  const userSelection = selections.find(
    selection => selection.userId === userId
  )
  if (!userSelection) {
    return false
  }
  const targetRoundSelection = userSelection.selection.find(
    selection => selection.round === round
  )
  return !!targetRoundSelection
}

export const isRoundExistInSelection = (
  selection: Selection[],
  round: number
) => {
  const t = selection.find(s => s.round === round)
  return !!t
}

const createItem = (
  item: string,
  round: number,
  randomNumber = Math.random()
) => ({
  randomNumber,
  round,
  item,
})

export const makeNextItem = (
  selection: Selection[],
  targetRound: number,
  item: string
) => {
  const hasRound = isRoundExistInSelection(selection, targetRound)
  let nextSelection = []
  if (hasRound) {
    const targetRoundObj: any = selection.find(s => s.round === targetRound)
    const newObj = { ...targetRoundObj, item }
    const deletedObjArr = selection.filter(s => s.round !== targetRound)
    nextSelection = [...deletedObjArr, newObj]
  } else {
    nextSelection = [...selection, createItem(item, targetRound)]
  }
  console.log('nextSelection')
  console.log(nextSelection)
  return nextSelection
}
