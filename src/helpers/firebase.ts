import { APP_NAME } from '@/constants/common'
import { auth, db } from '@/constants/firebase'
import { signInAnonymously } from 'firebase/auth'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'
import {
  AddLogMessageRequestPayload,
  CrateUserRequestPayload,
  CreateSelectionRequestPayload,
  GetGroupNameRequestPayload,
  GetUsersRequestPayload,
  GoToNextRoundRequestPayload,
  SetFinishedRoundsRequestPayload,
  SubscribeGroupRoundRequestPayload,
  SubscribeLogMessageRequestPayload,
  SubscribeSelectionRequestPayload,
  SubscribeUsersRequestPayload,
} from 'RequestPayload'
import {
  SubscribeLogMessageRequestResponse,
  SubscribeUsersRequestResponse,
} from 'Response'

import { Context, Selections, Users } from 'Store'
import {
  formatLogMessageToStateObj,
  formatUserInfoToStateObj,
} from './firebaseHelper'

const isErrorDebug = false

const unsubscribesForSelection: any = []
export const unsubscribeSelection = () => {
  unsubscribesForSelection.forEach((unsubscribe: () => void) => unsubscribe())
}

export const signIn = ({ succeeded, failed }: any) => {
  signInAnonymously(auth)
    .then(() => {
      succeeded()
    })
    .catch((error: any) => {
      console.log(error)
      failed()
    })
}

export const isSignIn = () => {
  let userId: any
  auth.onAuthStateChanged((user: any) => (userId = user))
  return !!userId
}

export const createGroup = async (groupName: string) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }
    const docRef = await addDoc(collection(db, 'group'), {
      groupName,
      round: 1,
      finishedRound: [],
      deleteFlg: false,
    })
    return docRef.id
  } catch (e) {
    console.error('CREATEGROUP:', e)
    return Promise.reject()
  }
}

export const subscribeGroupRound = (
  { groupId }: SubscribeGroupRoundRequestPayload,
  dispatcher: (obj: { round: number; finishedRound: number[] }) => void
) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }

    const unsubscribe = onSnapshot(doc(db, 'group', groupId), (doc: any) => {
      const d = doc.data()
      dispatcher({
        round: d?.round || 1,
        finishedRound: d?.finishedRound || [],
      })
    })

    return true
  } catch (e) {
    console.error('SUBSCRIBEGROUPROUND:', e)
    return false
  }
}

export const goToNextRound = async ({
  groupId,
  nextRound,
}: GoToNextRoundRequestPayload) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }
    await updateDoc(doc(db, 'group', groupId), { round: nextRound })

    return Promise.resolve()
  } catch (e) {
    console.error('GOTONEXTROUND:', e)
    return Promise.reject()
  }
}

export const setFinishedRounds = async ({
  groupId,
  currentFinishedRounds,
  finishedRound,
}: SetFinishedRoundsRequestPayload) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }
    await updateDoc(doc(db, 'group', groupId), {
      finishedRound: [...currentFinishedRounds, finishedRound],
    })

    return Promise.resolve()
  } catch (e) {
    console.error('SETFINISHEDROUND:', e)
    return Promise.reject()
  }
}

export const createUser = async ({
  groupId,
  userName,
  avatar,
}: CrateUserRequestPayload) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }
    const docRef = await addDoc(collection(db, 'user'), {
      groupId,
      userName,
      avatar,
    })
    return docRef.id
  } catch (e) {
    console.error('CREATEUSER:', e)
    return Promise.reject()
  }
}

export const getUsers = async ({ groupId }: GetUsersRequestPayload) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }

    const q = query(collection(db, 'user'), where('capital', '==', true))
    const querySnapshot = await getDocs(q)

    const users = querySnapshot.docs.map((doc: any) => ({
      userId: doc.data().id,
      userName: doc.data().userName,
      avatar: doc.data().avatar,
      avatarIndex: doc.data().avatar,
    }))
    return users
  } catch (e) {
    console.error('GETUSERS:', e)
    return Promise.reject()
  }
}

export const subscribeUsers = (
  { groupId }: SubscribeUsersRequestPayload,
  dispatcher: (obj: Users[]) => void
) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }
    const q = query(collection(db, 'user'), where('groupId', '==', groupId))

    const unsubscribe = onSnapshot(q, (snapshot: any) => {
      const all: SubscribeUsersRequestResponse[] = []
      snapshot.forEach((d: any) => all.push(d.data()))
      const format = formatUserInfoToStateObj(all)
      dispatcher(format)
    })

    return true
  } catch (e) {
    console.error('SUBSCRIBEUSERS:', e)
    return false
  }
}

export const getGroupName = async ({ groupId }: GetGroupNameRequestPayload) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }

    const ref = await getDoc(doc(db, 'group', groupId))
    return ref.data()?.groupName || ''
  } catch (e) {
    console.error('GETGROUPNAME:', e)
    return Promise.reject()
  }
}

export const isGroupExist = async (
  groupId: string,
  { succeeded, failed }: { succeeded: () => void; failed: () => void }
) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }
    const ref = await getDoc(doc(db, 'group', groupId))
    if (ref.exists()) {
      succeeded()
    } else {
      failed()
    }
  } catch (e) {
    console.error('ISGROUPEXIST:', e)
    return Promise.reject()
  }
}

export const isUserExistInGroup = async (
  groupId: string,
  userId: string,
  { succeeded, failed }: { succeeded: () => void; failed: () => void }
) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }

    const ref = await getDoc(doc(db, 'user', userId))

    const data = ref.data()
    if (data?.groupId === groupId) {
      succeeded()
    } else {
      failed()
    }
  } catch (e) {
    console.error('ISUSEREXISTINGROUP:', e)
    return Promise.reject()
  }
}

export const addLogMessage = async ({
  groupId,
  userId,
  message,
}: AddLogMessageRequestPayload) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }

    await addDoc(collection(db, 'log'), {
      groupId,
      userId,
      message,
      date: new Date(),
      deleteFlg: false,
    })

    return groupId
  } catch (e) {
    console.error('ADDLOGMESSAGE:', e)
    return Promise.reject()
  }
}

export const subscribeLogMessage = (
  { groupId }: SubscribeLogMessageRequestPayload,
  dispatcher: (obj: Context[]) => void
) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }

    const q = query(
      collection(db, 'log'),
      where('groupId', '==', groupId),
      orderBy('date', 'asc'),
      limit(100)
    )
    const unsubscribe = onSnapshot(q, (snapshot: any) => {
      const all: SubscribeLogMessageRequestResponse[] = []
      snapshot.forEach((d: any) => {
        const data = d.data()
        all.push({ ...data, date: data.date.toDate() })
      })
      const format = formatLogMessageToStateObj(all)
      dispatcher(format)
    })

    return true
  } catch (e) {
    console.error('SUBSCRIBEUSERS:', e)
    return false
  }
}

export const createSelection = async ({
  userId,
  selection,
}: CreateSelectionRequestPayload) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }

    await updateDoc(doc(db, 'user', userId), { userId, selection })
  } catch (e) {
    console.error('CREATESELECTION:', e)
    return Promise.reject()
  }
}

export const subscribeSelection = (
  { userId }: SubscribeSelectionRequestPayload,
  dispatcher: (obj: Selections) => void
) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }

    const q = doc(db, 'selection', userId)
    const unsubscribe = onSnapshot(q, (doc: any) => {
      if (doc.exists) {
        const d: any = doc.data()
        dispatcher(d)
      }
    })

    unsubscribesForSelection.push(unsubscribe)

    return true
  } catch (e) {
    console.error('SUBSCRIBESELECTION:', e)
    return false
  }
}

// export const getList = async (searchObj: FetchList) => {
//   // const hasCondition = !!Object.keys(searchObj).length
//   // const conditions = Object.keys(searchObj).map((key: string) => ({key, val: searchObj[key]}))

//   const ref = db.collection(getId()).where('deleteFlg', '==', false)
//   const snapshots = searchObj.tag
//     ? await ref.where('tag', '==', searchObj?.tag || '').get()
//     : await ref.get()
//   const docs = snapshots.docs.map(doc => ({
//     id: doc.id,
//     ...doc.data(),
//     date: moment(doc.data().date?.toDate()).format('YYYY/M/D'),
//   }))
//   const newarr = docs.sort((a, b) => {
//     return moment(b.date).diff(a.date)
//   })
//   return newarr
// }

// export const createPost = async (post: Post) => {
//   const userId = getId()
//   console.log(userId)
//   console.log({ ...post })
//   await db
//     .collection(userId)
//     .doc(post.id)
//     .set({
//       ...post,
//       date: new Date(),
//       deleteFlg: false,
//       type: APP_NAME,
//     })
// }

// export const getPost = async (docId: string) => {
//   const ref = db.collection(getId()).doc(docId)
//   const snapshot = await ref.get()
//   return {
//     ...snapshot.data(),
//     id: snapshot.id,
//     date: moment(snapshot.data()?.date?.toDate() || '').format('YYYY/M/D'),
//   }
// }

// export const updatePost = async (post: Post) => {
//   const ref = db.collection(getId()).doc(post.id)
//   await ref.update({
//     ...post,
//     date: new Date(),
//   })
// }
