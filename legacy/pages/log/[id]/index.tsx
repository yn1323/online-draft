import { ParsedUrlQuery } from 'querystring'
import { Box } from '@chakra-ui/react'
import { Context, Selections, State, Users } from 'Store'
import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  subscribeGroupRound,
  subscribeLogMessage,
  subscribeSelection,
  subscribeUsers,
} from '@/helpers/firebase'
import { usePrevious } from '@/helpers/hooks'
import Chat from '@/organisms/Chat'
import { setContext } from '@/stores/chat'
import { setRoundNumber, setSelections } from '@/stores/draft'
import { setAllUserInfo } from '@/stores/userInfo'
import AnonymousAuthAuth from '@/templates/AnonymousAuth'
import BasicTemplate from '@/templates/BasicTemplate'

const UserExistanceCheck = dynamic(
  () => import('@/organisms/UserExistanceCheck'),
  { ssr: false }
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
  const [allSettled, setAllSettled] = useState(false)

  useEffect(() => {
    if (allSettled) {
      subscribeUsers({ groupId }, (obj: Users[]) =>
        dispatch(setAllUserInfo(obj))
      )
      subscribeLogMessage({ groupId }, (obj: Context[]) =>
        dispatch(setContext(obj))
      )
      subscribeGroupRound({ groupId }, (obj: { round: number }) =>
        dispatch(setRoundNumber(obj))
      )
    }
  }, [allSettled, dispatch, groupId])

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
  }, [users, prevUsers, dispatch])

  return (
    <BasicTemplate location="draft" groupIdFromPath={groupId}>
      <AnonymousAuthAuth groupId={id}>
        {/* <UserExistanceCheck setChecked={setAllSettled} groupId={groupId}> */}
        <Box h="100%" w="100%" p={4}>
          <Chat />
        </Box>
        {/* </UserExistanceCheck> */}
      </AnonymousAuthAuth>
    </BasicTemplate>
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
