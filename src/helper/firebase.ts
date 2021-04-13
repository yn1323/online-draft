import moment from 'moment'
import { isProduction, APP_NAME, LS_USER_ID } from 'src/constant'

import { auth, db, storage, DEV_COLLECTION } from 'src/constant/firebase'

// import { Post, State, User } from 'Store'
// import { FetchList } from 'Request'

export const generateFirebaseId = () => {
  return db.collection('_').doc().id
}

// export const getId = () => {
//   const returnId = window.localStorage.getItem(LS_USER_ID) || ''
//   return returnId
// }

// export const updateLSUserId = (id: string) => {
//   window.localStorage.setItem(LS_USER_ID, id)
// }

// export const initializeUserId = () => {
//   const id = isProduction ? getId() || generateFirebaseId() : DEV_COLLECTION
//   updateLSUserId(id)
//   return id
// }

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
