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
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore'
import {
  formatLogMessageToStateObj,
  formatUserInfoToStateObj,
} from './firebaseHelper'
import { APP_NAME } from '@/constants/common'
import { auth, db } from '@/constants/firebase'

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
    const docRef = await addDoc(collection(db, 'app', 'onlinedraft', 'group'), {
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

    const unsubscribe = onSnapshot(
      doc(db, 'app', 'onlinedraft', 'group', groupId),
      (doc: any) => {
        const d = doc.data()
        dispatcher({
          round: d?.round || 1,
          finishedRound: d?.finishedRound || [],
        })
      }
    )

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
    await updateDoc(doc(db, 'app', 'onlinedraft', 'group', groupId), {
      round: nextRound,
    })

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
    await updateDoc(doc(db, 'app', 'onlinedraft', 'group', groupId), {
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
    const docRef = await addDoc(collection(db, 'app', 'onlinedraft', 'user'), {
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

    const q = query(
      collection(db, 'app', 'onlinedraft', 'user'),
      where('groupId', '==', groupId)
    )
    const querySnapshot = await getDocs(q)

    const users = querySnapshot.docs.map((doc: any) => ({
      userId: doc.id,
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
    const q = query(
      collection(db, 'app', 'onlinedraft', 'user'),
      where('groupId', '==', groupId)
    )

    const unsubscribe = onSnapshot(q, (snapshot: any) => {
      const all: SubscribeUsersRequestResponse[] = []
      snapshot.forEach((d: any) => all.push({ ...d.data(), id: d.id }))
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

    const ref = await getDoc(doc(db, 'app', 'onlinedraft', 'group', groupId))
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
    const ref = await getDoc(doc(db, 'app', 'onlinedraft', 'group', groupId))
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

    const ref = await getDoc(doc(db, 'app', 'onlinedraft', 'user', userId))

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

    await addDoc(collection(db, 'app', 'onlinedraft', 'log'), {
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

    console.log(groupId)
    const q = query(
      collection(db, 'app', 'onlinedraft', 'log'),
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
    await setDoc(
      doc(db, 'app', 'onlinedraft', 'selection', userId),
      { userId, selection },
      { merge: true }
    )
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

    const q = doc(db, 'app', 'onlinedraft', 'selection', userId)
    const unsubscribe = onSnapshot(q, (doc: any) => {
      if (doc.exists) {
        const d: any = doc.data()
        if (d) {
          dispatcher(d)
        }
      }
    })

    unsubscribesForSelection.push(unsubscribe)

    return true
  } catch (e) {
    console.error('SUBSCRIBESELECTION:', e)
    return false
  }
}
