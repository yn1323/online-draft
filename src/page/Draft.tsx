import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'

import 'src/asset/scss/page/Draft.scss'
import {
  isUserExistInGroup,
  sessionStorageInfo,
  subscribeGroupRound,
  subscribeLogMessage,
  subscribeSelection,
  subscribeUsers,
  useLoading,
  usePath,
  usePrevious,
  useModal,
} from 'src/helper'
import { Context, Selections, State, Users } from 'Store'
import Header from 'src/component/template/Header'
import { setAllUserInfo, setUserId } from 'src/store/userInfo'
import { setSelections } from 'src/store/draft'
import { setContext } from 'src/store/chat'

import UserListCard from 'src/component/organism/UserListCard'
import LogCard from 'src/component/organism/LogCard'
import TableCard from 'src/component/organism/TableCard'
import { setRoundNumber } from 'src/store/draft'
import ResultModal from 'src/component/template/ResultModal'
import { useTranslation } from 'react-i18next'

const Draft = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    userInfo: { users, userId },
    draft: { round, selections },
  } = useSelector((state: State) => state)
  const prevUsers = usePrevious(users, [])
  const prevRound = usePrevious(round, -1)
  const { groupIdFromPath } = usePath()
  const [isLoaded, setIsLoaded] = useState(false)
  const [process, setProcess] = useState(0)
  const { getUserIdToSessionStorage } = sessionStorageInfo()
  const { showLoading, hideLoading } = useLoading()
  const { setModalComponent, showResultModal } = useModal()

  useEffect(() => {
    if (process === -1) {
      history.push(`/entry/${groupIdFromPath}`)
      hideLoading()
    } else if (process === 0) {
      showLoading()
      userExistanceCheck()
    } else if (process === 1) {
      setUser()
    } else if (process === 2) {
      subscribes()
    } else if (process === 3) {
      hideLoading()
      setIsLoaded(true)
    }
  }, [process])

  useEffect(() => {
    const currentUserIds = users.map(user => user.userId)
    const prevUserIds = prevUsers.map((user: any) => user.userId)
    const newSubscribeIds = currentUserIds.filter(
      userId => !prevUserIds.includes(userId)
    )
    newSubscribeIds.forEach(userId => {
      subscribeSelection({ userId }, (obj: Selections) =>
        dispatch(setSelections(obj))
      )
    })
  }, [users])

  useEffect(() => {
    // 初回以外
    if (round === prevRound + 1) {
      setModalComponent({
        component: <ResultModal targetRound={prevRound} />,
        title: t('結果発表'),
      })
      showResultModal()
    }
  }, [round])

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
  const setUser = () => {
    const userId = getUserIdToSessionStorage()
    dispatch(setUserId({ userId }))
    setProcess(2)
  }

  const subscribes = () => {
    const groupId = groupIdFromPath
    subscribeUsers({ groupId }, (obj: Users[]) => dispatch(setAllUserInfo(obj)))
    subscribeLogMessage({ groupId }, (obj: Context[]) =>
      dispatch(setContext(obj))
    )
    subscribeGroupRound({ groupId }, (obj: { round: number }) =>
      dispatch(setRoundNumber(obj))
    )
    setProcess(3)
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
