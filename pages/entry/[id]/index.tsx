import { ParsedUrlQuery } from 'querystring'
import { State } from 'Store'
import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDraftPageToLS } from '@/helpers/common'
import EntryCard from '@/organisms/EntryCard'
import { getUserInfoOnce } from '@/stores/userInfo'
import Header from '@/templates/Header'

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

const Entry: NextPage<PropTypes> = ({ id }) => {
  const dispatch = useDispatch()
  const {
    userInfo: { groupId, groupName },
  } = useSelector((state: State) => state)

  useEffect(() => {
    if (!groupId) {
      return
    }
    dispatch(getUserInfoOnce({ groupId }))
  }, [groupId])

  useEffect(() => {
    if (!groupName) {
      return
    }
    addDraftPageToLS(groupName)
  }, [groupName])

  return (
    <IonPage>
      <Header location="entry" groupIdFromPath={id} />

      <IonContent className="height-100" scrollY={false}>
        <div className="height-100 align-centerVH">
          <EntryCard />
        </div>
      </IonContent>
    </IonPage>
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
