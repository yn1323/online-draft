import { State } from 'Store'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useInfo } from '@/helpers/hooks'
import UserList from '@/molecules/UserList'
import CreateUser from '@/organisms/CreateUser'
import CardBackground from '@/templates/CardBackground'

const IonButton = dynamic(
  async () => await (await import('@ionic/react')).IonButton,
  {
    ssr: false,
  }
)

const EntryCard = () => {
  const {
    userInfo: { users, groupId },
  } = useSelector((state: State) => state)
  const router = useRouter()
  const [cardIndex, setCardIndex] = useState(0)
  const { addUserId } = useInfo()

  const hasUser = !!users.length
  const loginWithExistUser = (userId: string) => {
    addUserId(userId)
    router.push(`/draft/${groupId}`)
  }

  return (
    <CardBackground customClass="login" index={cardIndex}>
      <div className="draftselectionWrapper height-100">
        {hasUser && (
          <>
            <UserList
              users={users}
              title="登録ユーザー"
              callback={(userId: string) => loginWithExistUser(userId)}
            />
            <hr />
          </>
        )}

        <div className="align-centerVH">
          <IonButton onClick={() => setCardIndex(1)}>
            新規ユーザー登録
          </IonButton>
        </div>
      </div>
      <CreateUser goBack={() => setCardIndex(0)} />
    </CardBackground>
  )
}

export default EntryCard
