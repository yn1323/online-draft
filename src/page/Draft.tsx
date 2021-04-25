import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'

import 'src/asset/scss/page/Draft.scss'
import {
  isUserExistInGroup,
  sessionStorageInfo,
  useLoading,
  usePath,
} from 'src/helper'
import { State } from 'Store'
import Header from 'src/component/template/Header'

const Draft = () => {
  const history = useHistory()
  const {
    userInfo: { groupId },
  } = useSelector((state: State) => state)
  const { groupIdFromPath } = usePath()
  const [isLoaded, setIsLoaded] = useState(false)
  const { getUserIdToSessionStorage } = sessionStorageInfo()
  const { showLoading, hideLoading } = useLoading()

  useEffect(() => {
    showLoading()
    const userId = getUserIdToSessionStorage()
    if (!userId) {
      failedProcess()
      return
    }
    isUserExistInGroup(groupIdFromPath, userId, {
      succeeded: () => {
        hideLoading()
        setIsLoaded(true)
      },
      failed: () => {
        failedProcess()
      },
    })
  }, [])

  const failedProcess = () => {
    history.push(`/entry/${groupIdFromPath}`)
    hideLoading()
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
