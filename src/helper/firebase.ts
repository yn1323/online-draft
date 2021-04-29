import moment from 'moment'
import {
  AddLogMessageRequestPayload,
  CrateUserRequestPayload,
  CreateSelectionRequestPayload,
  GetGroupNameRequestPayload,
  GetUsersRequestPayload,
  SubscribeGroupRoundRequestPayload,
  SubscribeLogMessageRequestPayload,
  SubscribeSelectionRequestPayload,
  SubscribeUsersRequestPayload,
} from 'RequestPayload'
import {
  SubscribeLogMessageRequestResponse,
  SubscribeUsersRequestResponse,
} from 'Response'
import { isProduction, APP_NAME, LS_USER_ID } from 'src/constant'

import { auth, db, storage, DEV_COLLECTION } from 'src/constant/firebase'
import { Context, Selections, Users } from 'Store'
import {
  formatLogMessageToStateObj,
  formatUserInfoToStateObj,
} from './firebaseHelper'

const isErrorDebug = false

export const generateFirebaseId = () => {
  return db.collection('_').doc().id
}

const findDoc = (collection: string) =>
  db.collection('app').doc(APP_NAME).collection(collection)

const collections = {
  group: findDoc('group'),
  user: findDoc('user'),
  log: findDoc('log'),
  selection: findDoc('selection'),
}

const unsubscribesForSelection: any = []
export const unsubscribeSelection = () => {
  unsubscribesForSelection.forEach((unsubscribe: () => void) => unsubscribe())
}

export const signIn = ({ succeeded, failed }: any) => {
  auth
    .signInAnonymously()
    .then(() => {
      succeeded()
    })
    .catch(error => {
      console.log(error)
      failed()
    })
}

export const isSignIn = () => {
  let userId: any
  auth.onAuthStateChanged(user => (userId = user))
  return !!userId
}

export const createGroup = async (groupName: string) => {
  const groupId = generateFirebaseId()
  try {
    if (isErrorDebug) {
      throw new Error()
    }
    await collections.group.doc(groupId).set(
      {
        groupName,
        id: groupId,
        round: 1,
        deleteFlg: false,
      },
      // Create doc if not exist
      { merge: true }
    )
    return groupId
  } catch (e) {
    console.error('CREATEGROUP:', e)
    return Promise.reject()
  }
}

export const subscribeGroupRound = (
  { groupId }: SubscribeGroupRoundRequestPayload,
  dispatcher: (obj: { round: number }) => void
) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }

    collections.group.doc(groupId).onSnapshot(doc => {
      const d = doc.data()
      dispatcher({ round: d?.round || 1 })
    })

    return true
  } catch (e) {
    console.error('SUBSCRIBEGROUPROUND:', e)
    return false
  }
}

export const createUser = async ({
  groupId,
  userId,
  userName,
  avatar,
}: CrateUserRequestPayload) => {
  try {
    if (isErrorDebug) {
      throw new Error()
    }
    await collections.user.doc(userId).set(
      {
        id: userId,
        groupId,
        userName,
        avatar,
        deleteFlg: false,
      },
      // Create doc if not exist
      { merge: true }
    )
    return groupId
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

    const snapshot = await collections.user
      .where('groupId', '==', groupId)
      .get()
    const users = snapshot.docs.map(doc => ({
      userId: doc.data().id,
      userName: doc.data().userName,
      avatar: doc.data().avatar,
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
    collections.user.where('groupId', '==', groupId).onSnapshot(snapshot => {
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

    const ref = await collections.group.doc(groupId).get()
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
    const ref = await collections.group.doc(groupId).get()
    if (ref.exists) {
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
    const ref = await collections.user.doc(userId).get()
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
    await collections.log.add({
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
    collections.log
      .where('groupId', '==', groupId)
      .orderBy('date', 'asc')
      .limit(100)
      .onSnapshot(snapshot => {
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
    console.log(userId), console.log(selection)
    await collections.selection.doc(userId).set(
      {
        userId,
        selection,
      },
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
    const unsubscribe = collections.selection.doc(userId).onSnapshot(doc => {
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
