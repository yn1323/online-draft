import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'

import 'src/asset/scss/page/Draft.scss'
import {
  isUserExistInGroup,
  sessionStorageInfo,
  subscribeUsers,
  useLoading,
  usePath,
} from 'src/helper'
import { State, Users } from 'Store'
import Header from 'src/component/template/Header'
import { setAllUserInfo } from 'src/store/userInfo'

const Draft = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    userInfo: { groupId },
  } = useSelector((state: State) => state)
  const { groupIdFromPath } = usePath()
  const [isLoaded, setIsLoaded] = useState(false)
  const [process, setProcess] = useState(0)
  const { getUserIdToSessionStorage } = sessionStorageInfo()
  const { showLoading, hideLoading } = useLoading()

  useEffect(() => {
    if (process === -1) {
      history.push(`/entry/${groupIdFromPath}`)
      hideLoading()
    } else if (process === 0) {
      showLoading()
      userExistanceCheck()
    } else if (process === 1) {
      subscribeAllUserInfo()
    } else if (process === 2) {
      hideLoading()
      setIsLoaded(true)
    }
  }, [process])

  const userExistanceCheck = () => {
    const userId = getUserIdToSessionStorage()
    if (!userId) {
      setProcess(-1)
      return
    }
    isUserExistInGroup(groupIdFromPath, userId, {
      succeeded: () => {
        setProcess(1)
      },
      failed: () => {
        setProcess(-1)
      },
    })
  }

  const subscribeAllUserInfo = () => {
    subscribeUsers({ groupId: groupIdFromPath }, (obj: Users[]) =>
      dispatch(setAllUserInfo(obj))
    )
    setProcess(2)
  }

  return isLoaded ? (
    <IonPage>
      <Header />
      <IonContent className="height-100 background" scrollY={false}>
        <IonGrid className="height-100 backgroundoo">
          <IonRow className="height-25"></IonRow>
          <IonRow className="height-50"></IonRow>
          <IonRow className="height-25"></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  ) : (
    <></>
  )
}

export default Draft
