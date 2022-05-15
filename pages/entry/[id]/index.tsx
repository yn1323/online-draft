import { ParsedUrlQuery } from 'querystring'
import { State } from 'Store'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDraftPageToLS } from '@/helpers/common'
import EntryCard from '@/organisms/EntryCard'
import { getUserInfoOnce } from '@/stores/userInfo'
import AnonymousAuthAuth from '@/templates/AnonymousAuth'
import BasicTemplate from '@/templates/BasicTemplate'

type PropTypes = {
  id: string
}

const Entry: NextPage<PropTypes> = ({ id }) => {
  const dispatch = useDispatch()
  const {
    userInfo: { groupId, groupName },
  } = useSelector((state: State) => state)

  useEffect(() => {
    console.log(groupId)
    if (!groupId) {
      return
    }
    dispatch(getUserInfoOnce({ groupId }))
  }, [groupId, dispatch])

  useEffect(() => {
    if (!groupName) {
      return
    }
    addDraftPageToLS(groupName)
  }, [groupName])

  return (
    <BasicTemplate location="entry" groupIdFromPath={id}>
      <AnonymousAuthAuth groupId={id}>
        <EntryCard />
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

export default Entry
