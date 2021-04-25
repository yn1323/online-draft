import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { IonButton } from '@ionic/react'
import { useTranslation } from 'react-i18next'

import { useInfo } from 'src/helper'

import CardBackground from 'src/component/template/ CardBackground'
import CreateUser from 'src/component/organism/CreateUser'
import UserList from 'src/component/molecule/UserList'

import { State } from 'Store'

const EntryCard = () => {
  const { t } = useTranslation()
  const {
    userInfo: { users, groupId },
  } = useSelector((state: State) => state)
  const history = useHistory()
  const [cardIndex, setCardIndex] = useState(0)
  const { addUserId } = useInfo()

  const hasUser = !!users.length
  const loginWithExistUser = (userId: string) => {
    addUserId(userId)
    history.push(`/draft/${groupId}`)
  }

  return (
    <CardBackground customClass="login" index={cardIndex}>
      <div className="draftselectionWrapper height-100">
        {hasUser && (
          <>
            <UserList
              users={users}
              title={t('登録ユーザー')}
              callback={(userId: string) => loginWithExistUser(userId)}
            />
            <hr />
          </>
        )}

        <div className="align-centerVH">
          <IonButton onClick={() => setCardIndex(1)}>
            {t('新規ユーザー登録')}
          </IonButton>
        </div>
      </div>
      <CreateUser goBack={() => setCardIndex(0)} />
    </CardBackground>
  )
}

export default EntryCard
