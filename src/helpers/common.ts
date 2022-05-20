import { Draft, Selection, Selections, Users } from 'Store'
import { APP_NAME, assetImages, SLOT_TIME } from '@/constants/common'

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

export const sortObjectedArray = (
  obj: any[],
  sortKey: string,
  order: 'asc' | 'desc' = 'asc'
) => {
  const t = [...obj]
  t.sort((a: any, b: any) => {
    if (order === 'asc') {
      if (a[sortKey] < b[sortKey]) return -1
      if (a[sortKey] > b[sortKey]) return 1
      return 0
    } else {
      if (a[sortKey] < b[sortKey]) return 1
      if (a[sortKey] > b[sortKey]) return -1
      return 0
    }
  })
  return t
}

export const addComma = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const duplicateInArray = (a: any[]) => {
  const s = new Set(a)
  return s.size != a.length
}

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
): Selection[] => {
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
  comment: string,
  randomNumber = Math.random()
) => ({
  randomNumber,
  round,
  item,
  comment,
})

export const makeNextItem = (
  selection: Selection[],
  targetRound: number,
  item: string,
  comment: string
) => {
  const hasRound = isRoundExistInSelection(selection, targetRound)
  let nextSelection = []
  if (hasRound) {
    const targetRoundObj: any = selection.find(s => s.round === targetRound)
    const newObj = { ...targetRoundObj, item, comment }
    const deletedObjArr = selection.filter(s => s.round !== targetRound)
    nextSelection = [...deletedObjArr, newObj]
  } else {
    nextSelection = [...selection, createItem(item, targetRound, comment)]
  }
  return nextSelection
}

export const isUserFinishEnter = (
  selections: Selections[],
  userId: string,
  round: number
) => {
  const draft = findUserOwnSelection(selections, userId)
  return draft.some(s => s.round === round)
}

export const isDuplicateItem = (
  draft: Draft,
  targetRound: number,
  targetUserId: string,
  checkVal: string
) => {
  const allItems = draft.selections
    .map(({ selection, userId }) => {
      return (
        selection
          .filter(s => {
            return (
              // 自分自身以外
              !(s.round === targetRound && targetUserId === userId)
            )
          })
          // 現在のROUNDでない
          .filter(s => s.round !== draft.round)
      )
    })
    .reduce((acc, cur) => {
      return [...acc, ...cur]
    }, [])
    .map(({ item }) => item)
  return allItems.includes(checkVal)
}

// export const amIDuplicateWithRandomNumber = () => {}

export const getTargetRoundData = (
  selections: Selections[],
  targetRound: number
) => {
  const result = selections.map(({ selection, userId }) => {
    const s = selection.find(({ round }) => round === targetRound)
    return s ? { ...s, userId } : undefined
  })
  return result.filter(s => s)
}

export const getTargetRoundUserData = (
  selections: Selections[],
  targetUserId: string,
  targetRound: number
) => {
  const result = getTargetRoundData(selections, targetRound)
  return result.find(({ userId }: any) => userId === targetUserId)
}

export const getDuplicateItemInRound = (
  selections: Selections[],
  userId: string,
  targetRound: number
) => {
  const roundData = getTargetRoundData(selections, targetRound)
  const duplicates: any = []
  roundData.forEach(userRoundData => {
    const item = userRoundData?.item
    const sameObj = roundData.filter(e => e?.item === item)
    if (sameObj.length !== 1) {
      duplicates.push(sameObj)
    }
  })

  const itemAlreadyAdded: string[] = []
  const retDuplicates = duplicates
    .filter((d: any) => {
      const item = d[0].item
      if (!itemAlreadyAdded.includes(item)) {
        itemAlreadyAdded.push(item)
        return true
      } else {
        return false
      }
    })
    .map((d: any) => {
      return sortObjectedArray(d, 'randomNumber', 'desc')
    })

  const duplicateDataUserIds = retDuplicates.reduce((acc: any, cur: any) => {
    const userIds = cur.map((d: any) => d.userId)
    return [...acc, ...userIds]
  }, [])

  const duplicateDataUserIdsExcludeWinner = sortObjectedArray(
    retDuplicates
      .map((d: any) => {
        const tmp = [...d]
        tmp.shift()
        return tmp
      })
      .reduce((acc: any, cur: any) => {
        return [...acc, ...cur]
      }, []),
    'randomNumber',
    'desc'
  )

  const orderedDuplicateDataUserIdsExcludeWinner =
    duplicateDataUserIdsExcludeWinner.map((d: any) => d.userId)

  return {
    duplicateData: retDuplicates,
    duplicateDataUserIds: duplicateDataUserIds,
    duplicateDataUserIdsExcludeWinner: orderedDuplicateDataUserIdsExcludeWinner,
    hasDuplicate: !!retDuplicates.length,
    isUserDataDuplicates: retDuplicates
      .map((d: any) =>
        d.some((e: any) => {
          if (!e) {
            return false
          } else {
            return e.userId === userId
          }
        })
      )
      .some((d: any) => d),
  }
}

export const isEveryOneEntered = (
  selections: Selections[],
  users: Users[],
  targetRound: number
) => {
  const targetRoundData = getTargetRoundData(selections, targetRound)
  console.log(targetRoundData)
  return targetRoundData.length === users.length
}

export const isAnyDuplicateItem = (draft: Draft, excludeRoundFrom: number) => {
  const allItems = draft.selections
    .map(({ selection }) => selection.filter(s => s.round >= excludeRoundFrom))
    .reduce((acc, cur) => {
      return [...acc, ...cur]
    }, [])
    .map(({ item }) => item)
  return duplicateInArray(allItems)
}

export const getAllItems = (selections: Selections[]) => {
  return selections
    .map(({ selection }) => selection)
    .reduce((acc, cur) => {
      return [...acc, ...cur]
    }, [])
    .map(({ item }) => item)
}

export const slotTime = (order: number, userNum: number) => {
  return {
    timeToStart: order * SLOT_TIME,
    timeToStop: SLOT_TIME,
    allFinishedTime: SLOT_TIME * userNum + 1000,
  }
}

export const getDraftPageFromLS = () => {
  return JSON.parse(window.localStorage.getItem(APP_NAME) || '[]')
}
export const addDraftPageToLS = (groupName: string) => {
  const currentURL = window.location.href
  const lsData = getDraftPageFromLS()
  const newData = lsData.filter(({ url }: any) => url !== currentURL)
  newData.unshift({ groupName, url: currentURL })
  window.localStorage.setItem(APP_NAME, JSON.stringify(newData))
}
