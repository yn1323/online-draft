import { Context, Selections, State, Users } from 'Store'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { sessionStorageInfo } from '@/helpers/common'
import {
  isUserExistInGroup,
  subscribeGroupRound,
  subscribeLogMessage,
  subscribeSelection,
  subscribeUsers,
} from '@/helpers/firebase'
import { useLoading, useModal, usePrevious } from '@/helpers/hooks'
import LogCard from '@/organisms/LogCard'
import MenuCard from '@/organisms/MenuCard'
import TableCard from '@/organisms/TableCard'
import UserListCard from '@/organisms/UserListCard'
import Header from '@/templates/Header'
import ResultModal from '@/templates/ResultModal'
import { setContext } from '@/stores/chat'
import { setRoundNumber, setSelections } from '@/stores/draft'
import { setAllUserInfo, setUserId } from '@/stores/userInfo'
import { GetServerSideProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

const IonPage = dynamic(
  async () => await (await import('@ionic/react')).IonPage,
  {
    ssr: false,
  }
)
const IonContent = dynamic(
  async () => await (await import('@ionic/react')).IonContent,
  {
    ssr: false,
  }
)

type PropTypes = {
  id: string
}

const Draft: NextPage<PropTypes> = ({ id }) => {
  const groupId = id
  const router = useRouter()
  const dispatch = useDispatch()
  const {
    userInfo: { users, userId },
    draft: { round, selections },
  } = useSelector((state: State) => state)
  const prevUsers = usePrevious(users, [])
  const prevRound = usePrevious(round, -1)
  const [isLoaded, setIsLoaded] = useState(false)
  const [process, setProcess] = useState(0)
  const { getUserIdToSessionStorage } = sessionStorageInfo()
  const { showLoading, hideLoading } = useLoading()
  const { setModalComponent, showResultModal } = useModal()

  useEffect(() => {
    if (process === -1) {
      router.push(`/entry/${groupId}`)
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
        title: '結果発表',
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
    isUserExistInGroup(groupId, userId, {
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
      <Header location="draft" groupIdFromPath={groupId} />
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
            <div className="dashboard-right-menu">
              <MenuCard />
            </div>
            <div className="dashboard-right-log">
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

interface Params extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps: GetServerSideProps<
  PropTypes,
  Params
> = async ({ params }) => {
  const { id } = params!

  if (!id) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: {
      id,
    },
  }
}

export default Draft
