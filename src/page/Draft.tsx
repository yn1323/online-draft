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

import UserListCard from 'src/component/organism/UserListCard'
import LogCard from 'src/component/organism/LogCard'
import TableCard from 'src/component/organism/TableCard'

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
      <IonContent className="height-100" scrollY={false}>
        <div className="height-100 dashboard">
          <div className="dashboard-left">
            <div className="dashboard-left-name">
              <UserListCard />
            </div>
            <div className="dashboard-left-table">
              <TableCard />
            </div>
          </div>
          <div className="dashboard-right">
            <div className="height-100 dashboard-right-log">
              <LogCard />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  ) : (
    <></>
  )
}

export default Draft
